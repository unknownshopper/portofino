// MUESTRA — se regenera desde la carpeta "Productos" en Google Drive
// Rubros reales del cliente (Drive): CUARCITAS, CUARZOS, DEKTON, ECLOS, GRANITOS,
//   MARMOLES, SELLADORES, SINTERIZADOS, TARJAS, TRAVERTINOS
// Estructura por producto: <RUBRO>/<MODELO>/Fotografías/ + Descripción + Características y medidas
const PORTOFINO_DATA = [
 {
  "rubro": "MÁRMOL",
  "slug": "marmoles",
  "proyectos": [
   { "nombre": "STATUARIETTO",   "fotos": ["img/thumbs/marmoles-0.jpg"], "thumb": "img/thumbs/marmoles-0.jpg" },
   { "nombre": "CARRARA BLANCO", "fotos": ["img/thumbs/marmoles-1.jpg"], "thumb": "img/thumbs/marmoles-1.jpg" },
   { "nombre": "JURA BEIGE",     "fotos": ["img/thumbs/marmoles-2.jpg"], "thumb": "img/thumbs/marmoles-2.jpg" },
   { "nombre": "CIPOLLINO",      "fotos": ["img/thumbs/marmoles-3.jpg"], "thumb": "img/thumbs/marmoles-3.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "GRANITO",
  "slug": "granitos",
  "proyectos": [
   { "nombre": "BLANCO CRISTAL",  "fotos": ["img/thumbs/granitos-0.jpg"], "thumb": "img/thumbs/granitos-0.jpg" },
   { "nombre": "GRIS PERLA",      "fotos": ["img/thumbs/granitos-1.jpg"], "thumb": "img/thumbs/granitos-1.jpg" },
   { "nombre": "ROCKVILLE WHITE", "fotos": ["img/thumbs/granitos-2.jpg"], "thumb": "img/thumbs/granitos-2.jpg" },
   { "nombre": "TAN BROWN",       "fotos": ["img/thumbs/granitos-3.jpg"], "thumb": "img/thumbs/granitos-3.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "CUARZO",
  "slug": "cuarzos",
  "proyectos": [
   { "nombre": "BLANCO ZEUS",    "fotos": ["img/thumbs/silestone-0.jpg"], "thumb": "img/thumbs/silestone-0.jpg" },
   { "nombre": "ETERNAL SERENA", "fotos": ["img/thumbs/silestone-1.jpg"], "thumb": "img/thumbs/silestone-1.jpg" },
   { "nombre": "CALACATTA GOLD", "fotos": ["img/thumbs/silestone-2.jpg"], "thumb": "img/thumbs/silestone-2.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "CUARCITA",
  "slug": "cuarcitas",
  "proyectos": [
   { "nombre": "CUARCITA BLANCA", "fotos": ["img/thumbs/silestone-3.jpg"], "thumb": "img/thumbs/silestone-3.jpg" },
   { "nombre": "CUARCITA DORADA", "fotos": ["img/thumbs/marmoles-2.jpg"],  "thumb": "img/thumbs/marmoles-2.jpg" },
   { "nombre": "CUARCITA VERDE",  "fotos": ["img/thumbs/marmoles-3.jpg"],  "thumb": "img/thumbs/marmoles-3.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "TRAVERTINO",
  "slug": "travertinos",
  "proyectos": [
   { "nombre": "TRAVERTINO ROMANO", "fotos": ["img/thumbs/banos-0.jpg"],     "thumb": "img/thumbs/banos-0.jpg" },
   { "nombre": "TRAVERTINO BEIGE",  "fotos": ["img/thumbs/marmoles-0.jpg"],  "thumb": "img/thumbs/marmoles-0.jpg" },
   { "nombre": "TRAVERTINO NOCE",   "fotos": ["img/thumbs/granitos-3.jpg"],  "thumb": "img/thumbs/granitos-3.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "DEKTON®",
  "slug": "dekton",
  "proyectos": [
   { "nombre": "CUBIERTA BLANCA", "fotos": ["img/thumbs/dekton-0.jpg"], "thumb": "img/thumbs/dekton-0.jpg" },
   { "nombre": "LAURENT",        "fotos": ["img/thumbs/dekton-1.jpg"], "thumb": "img/thumbs/dekton-1.jpg" },
   { "nombre": "OPERA",          "fotos": ["img/thumbs/dekton-2.jpg"], "thumb": "img/thumbs/dekton-2.jpg" },
   { "nombre": "ENTZO",          "fotos": ["img/thumbs/dekton-3.jpg"], "thumb": "img/thumbs/dekton-3.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "ÉCLOS",
  "slug": "eclos",
  "proyectos": [
   { "nombre": "ÉCLOS MATE 01", "fotos": ["img/thumbs/dekton-0.jpg"], "thumb": "img/thumbs/dekton-0.jpg" },
   { "nombre": "ÉCLOS MATE 02", "fotos": ["img/thumbs/dekton-2.jpg"], "thumb": "img/thumbs/dekton-2.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "SINTERIZADO",
  "slug": "sinterizados",
  "proyectos": [
   { "nombre": "SINTERIZADO BLANCO", "fotos": ["img/thumbs/cocinas-0.jpg"], "thumb": "img/thumbs/cocinas-0.jpg" },
   { "nombre": "SINTERIZADO GRIS",   "fotos": ["img/thumbs/dekton-1.jpg"],   "thumb": "img/thumbs/dekton-1.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "TARJAS",
  "slug": "tarjas",
  "proyectos": [
   { "nombre": "TARJA DOBLE ACERO",    "fotos": ["img/thumbs/fregaderos-1.jpg"], "thumb": "img/thumbs/fregaderos-1.jpg" },
   { "nombre": "TARJA SENCILLA ACERO", "fotos": ["img/thumbs/fregaderos-1.jpg"], "thumb": "img/thumbs/fregaderos-1.jpg" }
  ],
  "varios": []
 },
 {
  "rubro": "SELLADORES",
  "slug": "selladores",
  "proyectos": [
   { "nombre": "SELLADOR PARA PIEDRA", "fotos": ["img/thumbs/cocinas-0.jpg"], "thumb": "img/thumbs/cocinas-0.jpg" }
  ],
  "varios": []
 }
];
