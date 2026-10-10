// MUESTRA — se regenera desde la carpeta "Productos" en Google Drive cuando llegue el enlace
// Estructura real del cliente: Productos/<Categoría>/<Color|Código del Modelo|Nombre del modelo>/
//   con subcarpeta Fotografías/ + archivos Descripción y Características y medidas
// Formato: { rubro, slug, proyectos: [{ nombre, fotos: [urls], thumb }], varios: [urls] }
const PORTOFINO_DATA = [
 {
  "rubro": "MÁRMOL",
  "slug": "marmol",
  "proyectos": [
   { "nombre": "STATUARIETTO",    "fotos": ["img/thumbs/marmoles-0.jpg"], "thumb": "img/thumbs/marmoles-0.jpg" },
   { "nombre": "CARRARA BLANCO",  "fotos": ["img/thumbs/marmoles-1.jpg"], "thumb": "img/thumbs/marmoles-1.jpg" },
   { "nombre": "JURA BEIGE",      "fotos": ["img/thumbs/marmoles-2.jpg"], "thumb": "img/thumbs/marmoles-2.jpg" },
   { "nombre": "CIPOLLINO",       "fotos": ["img/thumbs/marmoles-3.jpg"], "thumb": "img/thumbs/marmoles-3.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "GRANITO",
  "slug": "granito",
  "proyectos": [
   { "nombre": "BLANCO CRISTAL",   "fotos": ["img/thumbs/granitos-0.jpg"], "thumb": "img/thumbs/granitos-0.jpg" },
   { "nombre": "GRIS PERLA",       "fotos": ["img/thumbs/granitos-1.jpg"], "thumb": "img/thumbs/granitos-1.jpg" },
   { "nombre": "ROCKVILLE WHITE",  "fotos": ["img/thumbs/granitos-2.jpg"], "thumb": "img/thumbs/granitos-2.jpg" },
   { "nombre": "TAN BROWN",        "fotos": ["img/thumbs/granitos-3.jpg"], "thumb": "img/thumbs/granitos-3.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "DEKTON®",
  "slug": "dekton",
  "proyectos": [
   { "nombre": "CUBIERTA BLANCA",        "fotos": ["img/thumbs/dekton-0.jpg"], "thumb": "img/thumbs/dekton-0.jpg" },
   { "nombre": "SUPERFICIE ENGINEERED",  "fotos": ["img/thumbs/dekton-1.jpg"], "thumb": "img/thumbs/dekton-1.jpg" },
   { "nombre": "COCINA EN PIEDRA",       "fotos": ["img/thumbs/dekton-2.jpg"], "thumb": "img/thumbs/dekton-2.jpg" },
   { "nombre": "ISLA MODERNA",           "fotos": ["img/thumbs/dekton-3.jpg"], "thumb": "img/thumbs/dekton-3.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "SILESTONE®",
  "slug": "silestone",
  "proyectos": [
   { "nombre": "BLANCO ZEUS",     "fotos": ["img/thumbs/silestone-0.jpg"], "thumb": "img/thumbs/silestone-0.jpg" },
   { "nombre": "ETERNAL SERIE",   "fotos": ["img/thumbs/silestone-1.jpg"], "thumb": "img/thumbs/silestone-1.jpg" },
   { "nombre": "CALACATTA",       "fotos": ["img/thumbs/silestone-2.jpg"], "thumb": "img/thumbs/silestone-2.jpg" },
   { "nombre": "STELLAR",         "fotos": ["img/thumbs/silestone-3.jpg"], "thumb": "img/thumbs/silestone-3.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "ÉCLOS",
  "slug": "eclos",
  "proyectos": [
   { "nombre": "ÉCLOS SERIE",  "fotos": ["img/thumbs/dekton-3.jpg"], "thumb": "img/thumbs/dekton-3.jpg" },
   { "nombre": "ÉCLOS CLARA",  "fotos": ["img/thumbs/dekton-0.jpg"], "thumb": "img/thumbs/dekton-0.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "SINTERIZADO",
  "slug": "sinterizado",
  "proyectos": [
   { "nombre": "SINTER BLANCO", "fotos": ["img/thumbs/silestone-3.jpg"], "thumb": "img/thumbs/silestone-3.jpg" },
   { "nombre": "SINTER GRIS",   "fotos": ["img/thumbs/dekton-1.jpg"],   "thumb": "img/thumbs/dekton-1.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "CUARZO",
  "slug": "cuarzo",
  "proyectos": [
   { "nombre": "CUARZO BLANCO",   "fotos": ["img/thumbs/silestone-0.jpg"], "thumb": "img/thumbs/silestone-0.jpg" },
   { "nombre": "CUARZO VETEADO",  "fotos": ["img/thumbs/silestone-2.jpg"], "thumb": "img/thumbs/silestone-2.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "FREGADEROS",
  "slug": "fregaderos",
  "proyectos": [
   { "nombre": "MODELO BA-01", "fotos": ["img/thumbs/fregaderos-1.jpg"], "thumb": "img/thumbs/fregaderos-1.jpg" },
   { "nombre": "MODELO BA-02", "fotos": ["img/thumbs/banos-0.jpg"],      "thumb": "img/thumbs/banos-0.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "SUMINISTROS",
  "slug": "suministros",
  "proyectos": [
   { "nombre": "SELLADOR PREMIUM", "fotos": ["img/thumbs/cocinas-0.jpg"], "thumb": "img/thumbs/cocinas-0.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "NOVEDADES",
  "slug": "novedades",
  "proyectos": [
   { "nombre": "CIPOLLINO VERDE", "fotos": ["img/thumbs/marmoles-3.jpg"], "thumb": "img/thumbs/marmoles-3.jpg" }
  ],
  "varios": []
 }
];
