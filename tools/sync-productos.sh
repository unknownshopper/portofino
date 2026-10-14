#!/usr/bin/env bash
# Sincroniza la carpeta Productos de Dropbox → imagenes.js + img/thumbs/
#
# El vínculo se lee de (en orden):
#   1. variable de entorno DROPBOX_URL   (la usa el GitHub Action / secrets)
#   2. archivo local dropbox-link.txt    (gitignored — para correrlo a mano)
#
# Uso:  bash tools/sync-productos.sh [--dry-run]
set -euo pipefail
cd "$(dirname "$0")/.."

URL="${DROPBOX_URL:-}"
if [ -z "$URL" ] && [ -f dropbox-link.txt ]; then
  URL="$(tr -d '[:space:]' < dropbox-link.txt)"
fi
if [ -z "$URL" ]; then
  echo "Falta el vínculo de Dropbox: exporta DROPBOX_URL o crea dropbox-link.txt" >&2
  exit 1
fi

# forzar descarga de la carpeta completa como zip
DL="${URL/dl=0/dl=1}"
case "$DL" in *dl=1*) ;; *) DL="${DL}&dl=1" ;; esac

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "Descargando carpeta Productos…"
curl -sfL "$DL" -o "$TMP/productos.zip" || { echo "Fallo la descarga — revisa el vínculo"; exit 1; }

unzip -q "$TMP/productos.zip" -d "$TMP/x"
python3 tools/build_manifest.py "$TMP/x" "$@"
