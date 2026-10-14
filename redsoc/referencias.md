# Redes sociales — referencias y lineamiento

Todo lo relacionado con el contenido social de PORTOFINO: referencias de
estética, guías de publicación, assets y calendario.

## Referencias de estética (enviadas por Eduardo)

- Publicación de referencia:
  https://www.facebook.com/share/1DHdNRBGnv/?mibextid=wwXIfr
- Página DM Stones: https://www.facebook.com/dmstones/

### Ref. 1 — STONEHAUS (`ref-stonehaus.png`)

Estilo editorial/lifestyle. La piedra siempre en contexto, nunca sola:

- Grid tipo Pinterest: fotos de ambiente — alberca, chimenea, mobiliario,
  acabados de piso, detalle de veta, cantera/origen
- Paleta clara neutra: beige, greige, blanco cálido — luz natural suave
- Watermark "STONEHAUS" pequeño, blanco, esquina inferior de cada foto —
  marca presente sin gritar
- Contenido mixto: lifestyle + close-ups de textura + tarjetas de paleta
  con frase ("Diseño, estética y elegancia") + etiquetas de acabado
  (Pulido / Leather Finish / Mate)
- Vende sensación, no producto

### Ref. 2 — DM STONES (`ref-dmstones.jpg`)

Estilo arquitectónico dramático. El material como protagonista de lujo:

- Grid de posts cuadrados: escenas de alta gama — alberca al atardecer,
  fachada, isla de cocina, muro de TV, baño — renders o fotos oscuras
  con luz cálida
- **Overlay fijo esquina inferior izquierda:**
  - NOMBRE DEL MATERIAL en bold blanco (ej. `NEGRO SANTIAGO`)
  - línea chica `RUBRO | ACABADO` (ej. `GRANITO | FLAMEADO CEPILLADO`)
- Logo "DM" pequeño, esquina inferior derecha
- Intercalan las escenas con fotos "de piso": losa real en el patio de
  maniobras, misma overlay — conecta el render con el inventario real
- Vende producto con nombre propio + especificación

## Formato Portofino propuesto

Combinar ambas: la escena editorial de Stonehaus + la overlay técnica de
DM Stones. Cada post de material:

1. Foto de losa o escena de aplicación
2. Overlay inferior izquierda: `NOMBRE DEL MODELO` (bold, blanco)
   + `RUBRO | ACABADO` (línea chica)
3. Logo PORTOFINO pequeño, esquina inferior derecha
4. Mismo layout siempre → el grid se lee como catálogo

Los datos ya los tenemos: nombre de modelo = carpeta de Dropbox,
rubro = categoría, acabado = parte de "Características y medidas".

## Flujo de producción (2 posts/semana)

**Carpeta por publicación:** `imgs/<AAAAMMDD>-<a|b>-<NNN>/`
- `a` = primer día de la semana, `b` = segundo
- `NNN` = consecutivo del post (003, 004…)
- Dentro: `post.png` (arte 1080×1080) + `caption.txt` (copy + hashtags)

**Generar el arte:** `plantilla-post.html` recibe la foto y los datos por URL:
```
file:///…/redsoc/plantilla-post.html?foto=RUTA&nombre=NOMBRE&rubro=RUBRO&acabado=ACABADO
```
Render con Chrome headless:
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless \
  --disable-gpu --hide-scrollbars --window-size=1080,1080 \
  --virtual-time-budget=4000 --screenshot=post.png "file://…?foto=…&nombre=…"
```

**Origen de fotos:** cuando Eduardo suba `Productos/` a Dropbox, se elige
una foto por post (escena de aplicación tipo Stonehaus o losa tipo DM),
se levanta la plantilla y se exporta. Mientras tanto se usan las muestras
de `img/thumbs/`.

## Redes de Portofino

- Facebook Business: página de Portofino — hoy `facebook.com/portofinoveracruz`,
  migrará a `@portofinomx` o similar (actualizar cuando quede) — dar admin a
  https://www.facebook.com/pirichingon (automatización de mensajes,
  respuestas en el feed, publicaciones y campañas — va en la iguala)
- Instagram: @portofino.granitosymarmoles
- WhatsApp ventas: 993 393 9163

## Pendientes

- [ ] Confirmar con Eduardo si la referencia del share link es Stonehaus
      u otra página
- [ ] Plantilla de post (formato de la overlay) — Figma/Canva o generada
- [ ] Calendario mensual de contenido — alinear con la promo del mes del sitio
- [ ] Copys base: tono (mayoría "usted"), CTA a WhatsApp/catálogo
