#!/usr/bin/env python3
"""
Regenera imagenes.js + img/thumbs/ desde la carpeta Productos (Dropbox).

Uso:
  python3 tools/build_manifest.py <ruta-a-PRODUCTOS> [--dry-run]

Estructura esperada:
  PRODUCTOS/<RUBRO>/<PRODUCTO>/Fotografías/*.jpg|png|heic
                            /Descripción*.(txt)
                            /Características*/**

- Rubro     → categoría del catálogo (slug del nombre de carpeta)
- Producto  → nombre visible en el sitio (nombre de carpeta tal cual)
- Fotos     → se procesan a img/thumbs/<rubro>-<n>.jpg (sips o ImageMagick)
- Descripción .txt → campo desc del producto
- Otras fichas (pdf/docx) → flag ficha:true

También sube el ?v=N de imagenes.js en los .html para romper caché.
"""
import json
import re
import shutil
import subprocess
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
THUMBS = ROOT / 'img' / 'thumbs'

# typos conocidos de nombres de carpeta → slug correcto
TYPO = {
    'sisnterizados': 'sinterizados',
    'sisterizados': 'sinterizados',
    'sinterizado': 'sinterizados',
    'travertino': 'travertinos',
    'marmol': 'marmoles',
    'granito': 'granitos',
    'cuarzo': 'cuarzos',
    'cuarcita': 'cuarcitas',
    'tarja': 'tarjas',
    'sellador': 'selladores',
}
IMG_EXT = {'.jpg', '.jpeg', '.png', '.heic', '.webp', '.tif', '.tiff', '.bmp'}
FOTO_DIRS = ('fotografías', 'fotografias', 'fotos', 'photos', 'imagenes', 'imágenes')


def slug(s: str) -> str:
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()
    s = re.sub(r'[^a-zA-Z0-9]+', '-', s).strip('-').lower()
    return TYPO.get(s, s) or 'item'


def natural_key(p: Path):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r'(\d+)', p.name)]


def resize(src: Path, dst: Path):
    """Procesa a JPG max 1600px. sips (macOS) → ImageMagick → heif-convert."""
    dst.parent.mkdir(parents=True, exist_ok=True)
    try:
        if shutil.which('sips'):
            subprocess.run(['sips', '-Z', '1600', '-s', 'format', 'jpeg',
                            '-s', 'formatOptions', '80', str(src), '--out', str(dst)],
                           check=True, capture_output=True)
            return
        tool = 'magick' if shutil.which('magick') else 'convert'
        if shutil.which(tool):
            subprocess.run([tool, str(src) + ('[0]' if src.suffix.lower() == '.heic' else ''),
                            '-auto-orient', '-resize', '1600x1600>', '-quality', '82', str(dst)],
                           check=True, capture_output=True)
            return
        if src.suffix.lower() == '.heic' and shutil.which('heif-convert'):
            tmp = dst.with_suffix('.tmp.jpg')
            subprocess.run(['heif-convert', str(src), str(tmp)], check=True, capture_output=True)
            resize(tmp, dst)
            tmp.unlink(missing_ok=True)
            return
        raise RuntimeError('sin herramienta de imagen')
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f'fallo procesando {src.name}: {e}')


def read_desc(prod_dir: Path):
    for f in sorted(prod_dir.iterdir(), key=natural_key):
        if f.is_file() and f.stem.lower().startswith('descripci') and f.suffix.lower() == '.txt':
            return f.read_text(encoding='utf-8', errors='replace').strip() or None
    return None


def has_ficha(prod_dir: Path):
    return any(f.is_file() and f.stem.lower().startswith(('caracter', 'medidas'))
               for f in prod_dir.iterdir())


def product_photos(prod_dir: Path):
    """Fotos en <prod>/Fotografías/ si existe, si no sueltas en la carpeta."""
    for f in prod_dir.iterdir():
        if f.is_dir() and f.name.lower() in FOTO_DIRS:
            return sorted((p for p in f.iterdir() if p.is_file() and p.suffix.lower() in IMG_EXT),
                          key=natural_key)
    return sorted((p for p in prod_dir.iterdir() if p.is_file() and p.suffix.lower() in IMG_EXT),
                  key=natural_key)


def load_muestras():
    """Muestras del imagenes.js actual: {slug: rubro-completo} — solo productos con muestra:true."""
    mf = ROOT / 'imagenes.js'
    if not mf.exists():
        return {}
    m = re.search(r'PORTOFINO_DATA\s*=\s*(\[.*\])\s*;', mf.read_text(), re.S)
    if not m:
        return {}
    try:
        data = json.loads(m.group(1))
    except json.JSONDecodeError:
        return {}
    out = {}
    for r in data:
        muestras = [p for p in r.get('proyectos', []) if p.get('muestra')]
        if muestras:
            out[r['slug']] = {'rubro': r['rubro'], 'proyectos': muestras}
    return out


def bump_version():
    v = 1
    idx = ROOT / 'index.html'
    if idx.exists():
        m = re.search(r'imagenes\.js\?v=(\d+)', idx.read_text())
        if m:
            v = int(m.group(1)) + 1
    for html in ROOT.glob('*.html'):
        t = html.read_text()
        t2 = re.sub(r'imagenes\.js\?v=\d+', f'imagenes.js?v={v}', t)
        if t2 != t:
            html.write_text(t2)
    return v


def main():
    dry = '--dry-run' in sys.argv
    src = Path(next(a for a in sys.argv[1:] if not a.startswith('-'))).expanduser().resolve()
    if not src.is_dir():
        sys.exit(f'No existe la carpeta: {src}')
    # si el zip trae un solo contenedor (PRODUCTOS/), descender un nivel
    def real_dirs(p):
        return [d for d in p.iterdir() if d.is_dir()
                and not d.name.startswith(('.', '__'))]
    subs = real_dirs(src)
    if len(subs) == 1 and subs[0].name.lower() in ('productos', 'producto'):
        src = subs[0]
        subs = real_dirs(src)

    if not dry:
        THUMBS.mkdir(parents=True, exist_ok=True)
        for old in THUMBS.glob('*.jpg'):
            if not old.name.startswith('muestra-'):   # las muestras viven hasta ser desplazadas
                old.unlink()

    data, report = [], []
    for rubro_dir in sorted(subs, key=natural_key):
        rslug = slug(rubro_dir.name)
        rubro = rubro_dir.name.strip().upper().lstrip('0123456789.-_ ').strip() or rslug.upper()
        proyectos = []
        i = 0
        for prod_dir in sorted((d for d in rubro_dir.iterdir()
                                if d.is_dir() and not d.name.startswith(('.', '__'))), key=natural_key):
            fotos_src = product_photos(prod_dir)
            if not fotos_src:
                report.append(f'  · {rubro}/{prod_dir.name}: sin fotos (omitido)')
                continue
            fotos = []
            for ph in fotos_src:
                thumb = f'img/thumbs/{rslug}-{i}.jpg'
                report.append(f'    {rslug}-{i}.jpg ← {rubro_dir.name}/{prod_dir.name}/{ph.relative_to(prod_dir)}')
                if not dry:
                    resize(ph, ROOT / thumb)
                fotos.append(thumb)
                i += 1
            prod = {'nombre': prod_dir.name.strip().upper(), 'fotos': fotos, 'thumb': fotos[0]}
            desc = read_desc(prod_dir)
            if desc:
                prod['desc'] = desc
            if has_ficha(prod_dir):
                prod['ficha'] = True
            proyectos.append(prod)
        data.append({'rubro': rubro, 'slug': rslug, 'proyectos': proyectos, 'varios': []})

    # ── merge orgánico: cada producto real desplaza una muestra del rubro ──
    # muestras con el mismo nombre que un real se dan por reemplazadas
    muestras = load_muestras()
    for r in data:
        pool = muestras.pop(r['slug'], None)
        if not pool:
            continue
        reales = {p['nombre'].upper() for p in r['proyectos']}
        restan = [m for m in pool['proyectos'] if m['nombre'].upper() not in reales]
        keep = max(0, len(pool['proyectos']) - len(r['proyectos']))
        kept = restan[:keep]
        if kept:
            r['proyectos'] += kept
            report.append(f'  + {r["slug"]}: {len(kept)} muestras conservadas')
    # rubros sin carpeta real todavía → conservar muestras enteras
    for s, pool in muestras.items():
        data.append({'rubro': pool['rubro'], 'slug': s, 'proyectos': pool['proyectos'], 'varios': []})
        report.append(f'  + {s}: sin carpeta real — muestras conservadas')

    out = ROOT / 'imagenes.js'
    js = ('// GENERADO por tools/build_manifest.py — no editar a mano\n'
          '// Fuente: carpeta "Productos" en Dropbox\n'
          'const PORTOFINO_DATA = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')
    n_prod = sum(len(r['proyectos']) for r in data)
    n_fotos = sum(len(p['fotos']) for r in data for p in r['proyectos'])

    print(f'\n{len(data)} rubros · {n_prod} productos · {n_fotos} fotos')
    for line in report[:60]:
        print(line)
    if len(report) > 60:
        print(f'  … y {len(report) - 60} más')

    if dry:
        print('\n[dry-run] no se escribió nada')
        return
    out.write_text(js)
    v = bump_version()
    print(f'\nimagenes.js regenerado · ?v={v} en los HTML')
    print('Siguiente paso: git add -A && git commit && git push')


if __name__ == '__main__':
    main()
