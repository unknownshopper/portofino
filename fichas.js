// fichas.js — contenido descriptivo por rubro + overrides por producto
// regla: no afirmar origen ni prestaciones sin confirmar; lo no verificado va a nivel rubro
const FICHA_RUBRO = {
  marmoles: {
    material: 'Mármol natural',
    origen: 'Canteras nacionales e importadas, según existencia.',
    composicion: 'Roca metamórfica de calcita recristalizada; cada lámina tiene una veta irrepetible.',
    cualidades: ['Acabado pulido de alto brillo', 'Veta natural única en cada pieza', 'Sensible a ácidos (limón, vinagre) — pide sellado', 'Ideal en zonas de bajo tráfico'],
    usos: 'Baños, muros, cubiertas de bajo tráfico y piezas decorativas.'
  },
  granitos: {
    material: 'Granito natural',
    origen: 'Canteras nacionales e importadas, según existencia.',
    composicion: 'Roca ígnea de cuarzo, feldespato y mica — una de las piedras naturales más duras.',
    cualidades: ['Muy alta resistencia a rayones y calor', 'Uso rudo y alto tráfico', 'Grano y vetas naturales irrepetibles', 'Requiere sellado periódico'],
    usos: 'Cubiertas de cocina, pisos de alto tráfico, exteriores y fachadas.'
  },
  cuarcitas: {
    material: 'Cuarcita natural',
    origen: 'Canteras importadas, según existencia.',
    composicion: 'Roca metamórfica compuesta casi en su totalidad por cuarzo recristalizado.',
    cualidades: ['Vetas tipo mármol con dureza cercana al granito', 'Alta resistencia a rayones y calor', 'Cada lámina es una pieza única', 'Requiere sellado periódico'],
    usos: 'Cubiertas de cocina y baño, pisos, muros y fachadas.'
  },
  cuarzos: {
    material: 'Cuarzo engineered',
    origen: 'Fabricado con cuarzo natural molido, según marca.',
    composicion: 'Aproximadamente 90–95% cuarzo natural compactado con resinas y pigmentos.',
    cualidades: ['Superficie no porosa — no requiere sellado', 'Color uniforme y repetible entre láminas', 'Alta resistencia a manchas cotidianas', 'Evitar calor directo prolongado'],
    usos: 'Cubiertas de cocina y baño, mesones y muebles.'
  },
  sinterizados: {
    material: 'Piedra sinterizada',
    origen: 'Minerales compactados por sinterización, según marca.',
    composicion: 'Minerales naturales sometidos a presión y temperatura extremas — superficie ultracompacta no porosa.',
    cualidades: ['Resiste rayos UV — no se decolora', 'Alta resistencia a calor, rayones y manchas', 'No requiere sellado', 'Gran formato en lámina de 2 cm'],
    usos: 'Cubiertas, pisos y recubrimiento de muros interior y exterior.'
  },
  dekton: {
    material: 'Dekton® — superficie ultracompacta',
    origen: 'Fabricado en España.',
    composicion: 'Mezcla sinterizada de vidrio, porcelana y cuarzo (tecnología TSP).',
    cualidades: ['Máxima resistencia a rayos UV — interior y exterior', 'Resiste calor directo, rayones y manchas', 'No poroso — no requiere sellado', 'Acabados pulido, mate y velvet según color'],
    usos: 'Cubiertas, fachadas, pisos y mobiliario interior y exterior.'
  },
  eclos: {
    material: 'Éclos — superficie ultracompacta',
    origen: 'Fabricado en España.',
    composicion: 'Superficie ultracompacta sinterizada con acabado mate suave al tacto.',
    cualidades: ['Acabado mate aterciopelado', 'Alta resistencia a rayones y manchas', 'No poroso — no requiere sellado', 'Paleta de tonos suaves contemporáneos'],
    usos: 'Cubiertas y recubrimientos con estética mate, interior y exterior.'
  },
  travertinos: {
    material: 'Travertino natural',
    origen: 'Canteras nacionales e importadas, según existencia.',
    composicion: 'Caliza sedimentaria de origen en manantiales — porosa con cavidades características.',
    cualidades: ['Tonos cálidos terrosos', 'Textura natural porosa, según acabado', 'Clásico de la arquitectura mediterránea', 'Requiere sellado'],
    usos: 'Exteriores, muros, pisos de tráfico moderado y detalles decorativos.'
  },
  tarjas: {
    material: 'Tarja para cocina',
    origen: 'Según modelo.',
    composicion: 'Acero inoxidable u otros materiales según el modelo.',
    cualidades: ['Resistente a corrosión y uso diario', 'Modelos sencillos y dobles', 'Compatible con cubiertas de piedra'],
    usos: 'Instalación en cubierta de cocina.'
  },
  selladores: {
    material: 'Sellador para piedra',
    origen: 'Línea profesional, según producto.',
    composicion: 'Formulaciones a base de agua o solvente para sellado, limpieza o realce, según el producto.',
    cualidades: ['Protege la piedra natural contra manchas', 'Opciones de sellado, limpieza diaria y realce de color', 'Uso profesional y doméstico'],
    usos: 'Mantenimiento y protección de mármol, granito, cuarcita, travertino y sinterizados.'
  },
  'productos-profesionales': {
    material: 'Producto profesional para piedra',
    origen: 'Línea profesional de cuidado de piedra.',
    composicion: 'Selladores, limpiadores, realzadores y removedores profesionales.',
    cualidades: ['Fórmulas específicas por tipo de piedra y problema', 'Presentaciones en spray, cuarto y galón', 'Línea profesional de cuidado de superficies'],
    usos: 'Sellado, limpieza diaria, remoción de manchas y realce del color en piedra natural.'
  }
};

// overrides por producto — id: 'slug/NOMBRE EXACTO'
const FICHA_PRODUCTO = {
  'dekton/LAURENT': {
    desc: 'Diseño Dekton inspirado en la piedra Port Laurent — fondo oscuro con vetas doradas marcadas; acabado Velvet suave al tacto.'
  },
  'dekton/OPERA': {
    desc: 'Dekton de fondo claro con vetas suaves estilo mármol — acabado Velvet.'
  },
  'dekton/CUBIERTA BLANCA': {
    desc: 'Blanco limpio y uniforme — base neutra para proyectos minimalistas.'
  }
};
