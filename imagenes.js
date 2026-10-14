// MUESTRA — se regenera desde la carpeta "Productos" en Dropbox
// Rubros reales del cliente (Dropbox): CUARCITAS, CUARZOS, DEKTON, ECLOS, GRANITOS,
//   MARMOLES, SELLADORES, SINTERIZADOS, TARJAS, TRAVERTINOS
// Estructura por producto: <RUBRO>/<MODELO>/Fotografías/ + Descripción + Características y medidas
const PORTOFINO_DATA = [
 {
  "rubro": "MÁRMOL",
  "slug": "marmoles",
  "proyectos": [
   { "nombre": "STATUARIETTO",   "fotos": ["img/thumbs/muestra-marmoles-0.jpg"], "thumb": "img/thumbs/muestra-marmoles-0.jpg", "muestra": true },
   { "nombre": "CARRARA BLANCO", "fotos": ["img/thumbs/muestra-marmoles-1.jpg"], "thumb": "img/thumbs/muestra-marmoles-1.jpg", "muestra": true },
   { "nombre": "JURA BEIGE",     "fotos": ["img/thumbs/muestra-marmoles-2.jpg"], "thumb": "img/thumbs/muestra-marmoles-2.jpg", "muestra": true },
   { "nombre": "CIPOLLINO",      "fotos": ["img/thumbs/muestra-marmoles-3.jpg"], "thumb": "img/thumbs/muestra-marmoles-3.jpg", "muestra": true }
  ],
  "varios": []
 },
 {
  "rubro": "GRANITO",
  "slug": "granitos",
  "proyectos": [
   { "nombre": "BLANCO CRISTAL",  "fotos": ["img/thumbs/muestra-granitos-0.jpg"], "thumb": "img/thumbs/muestra-granitos-0.jpg", "muestra": true },
   { "nombre": "GRIS PERLA",      "fotos": ["img/thumbs/muestra-granitos-1.jpg"], "thumb": "img/thumbs/muestra-granitos-1.jpg", "muestra": true },
   { "nombre": "ROCKVILLE WHITE", "fotos": ["img/thumbs/muestra-granitos-2.jpg"], "thumb": "img/thumbs/muestra-granitos-2.jpg", "muestra": true },
   { "nombre": "TAN BROWN",       "fotos": ["img/thumbs/muestra-granitos-3.jpg"], "thumb": "img/thumbs/muestra-granitos-3.jpg", "muestra": true }
  ],
  "varios": []
 },
 {
  "rubro": "CUARZO",
  "slug": "cuarzos",
  "proyectos": [
   { "nombre": "BLANCO ZEUS",    "fotos": ["img/thumbs/muestra-silestone-0.jpg"], "thumb": "img/thumbs/muestra-silestone-0.jpg", "muestra": true },
   { "nombre": "ETERNAL SERENA", "fotos": ["img/thumbs/muestra-silestone-1.jpg"], "thumb": "img/thumbs/muestra-silestone-1.jpg", "muestra": true },
   { "nombre": "CALACATTA GOLD", "fotos": ["img/thumbs/muestra-silestone-2.jpg"], "thumb": "img/thumbs/muestra-silestone-2.jpg", "muestra": true }
  ],
  "varios": []
 },
 {
  "rubro": "CUARCITA",
  "slug": "cuarcitas",
  "proyectos": [
   { "nombre": "CUARCITA BLANCA", "fotos": ["img/thumbs/muestra-silestone-3.jpg"], "thumb": "img/thumbs/muestra-silestone-3.jpg", "muestra": true },
   { "nombre": "CUARCITA DORADA", "fotos": ["img/thumbs/muestra-marmoles-2.jpg"],  "thumb": "img/thumbs/muestra-marmoles-2.jpg", "muestra": true },
   { "nombre": "CUARCITA VERDE",  "fotos": ["img/thumbs/muestra-marmoles-3.jpg"],  "thumb": "img/thumbs/muestra-marmoles-3.jpg", "muestra": true }
  ],
  "varios": []
 },
 {
  "rubro": "TRAVERTINO",
  "slug": "travertinos",
  "proyectos": [
   { "nombre": "TRAVERTINO ROMANO", "fotos": ["img/thumbs/muestra-banos-0.jpg"],     "thumb": "img/thumbs/muestra-banos-0.jpg", "muestra": true },
   { "nombre": "TRAVERTINO BEIGE",  "fotos": ["img/thumbs/muestra-marmoles-0.jpg"],  "thumb": "img/thumbs/muestra-marmoles-0.jpg", "muestra": true },
   { "nombre": "TRAVERTINO NOCE",   "fotos": ["img/thumbs/muestra-granitos-3.jpg"],  "thumb": "img/thumbs/muestra-granitos-3.jpg", "muestra": true }
  ],
  "varios": []
 },
 {
  "rubro": "DEKTON®",
  "slug": "dekton",
  "proyectos": [
   { "nombre": "CUBIERTA BLANCA", "fotos": ["img/thumbs/muestra-dekton-0.jpg"], "thumb": "img/thumbs/muestra-dekton-0.jpg", "muestra": true },
   { "nombre": "LAURENT",        "fotos": ["img/thumbs/muestra-dekton-1.jpg"], "thumb": "img/thumbs/muestra-dekton-1.jpg", "muestra": true },
   { "nombre": "OPERA",          "fotos": ["img/thumbs/muestra-dekton-2.jpg"], "thumb": "img/thumbs/muestra-dekton-2.jpg", "muestra": true },
   { "nombre": "ENTZO",          "fotos": ["img/thumbs/muestra-dekton-3.jpg"], "thumb": "img/thumbs/muestra-dekton-3.jpg", "muestra": true }
  ],
  "varios": []
 },
 {
  "rubro": "ÉCLOS",
  "slug": "eclos",
  "proyectos": [
   { "nombre": "ÉCLOS MATE 01", "fotos": ["img/thumbs/muestra-dekton-0.jpg"], "thumb": "img/thumbs/muestra-dekton-0.jpg", "muestra": true },
   { "nombre": "ÉCLOS MATE 02", "fotos": ["img/thumbs/muestra-dekton-2.jpg"], "thumb": "img/thumbs/muestra-dekton-2.jpg", "muestra": true }
  ],
  "varios": []
 },
 {
  "rubro": "SINTERIZADO",
  "slug": "sinterizados",
  "proyectos": [
   { "nombre": "SINTERIZADO BLANCO", "fotos": ["img/thumbs/muestra-cocinas-0.jpg"], "thumb": "img/thumbs/muestra-cocinas-0.jpg", "muestra": true },
   { "nombre": "SINTERIZADO GRIS",   "fotos": ["img/thumbs/muestra-dekton-1.jpg"],   "thumb": "img/thumbs/muestra-dekton-1.jpg", "muestra": true }
  ],
  "varios": []
 },
 {
  "rubro": "TARJAS",
  "slug": "tarjas",
  "proyectos": [
   { "nombre": "TARJA DOBLE ACERO",    "fotos": ["img/thumbs/muestra-fregaderos-1.jpg"], "thumb": "img/thumbs/muestra-fregaderos-1.jpg", "muestra": true },
   { "nombre": "TARJA SENCILLA ACERO", "fotos": ["img/thumbs/muestra-fregaderos-1.jpg"], "thumb": "img/thumbs/muestra-fregaderos-1.jpg", "muestra": true }
  ],
  "varios": []
 },
 {
  "rubro": "SELLADORES",
  "slug": "selladores",
  "proyectos": [
   { "nombre": "SELLADOR PARA PIEDRA", "fotos": ["img/thumbs/muestra-cocinas-0.jpg"], "thumb": "img/thumbs/muestra-cocinas-0.jpg", "muestra": true }
  ],
  "varios": []
 }
];
