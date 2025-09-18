// Archivo índice para exportar todos los datos
export * from './guantes';
export * from './proteccion';
export * from './empaque';
export * from './ergonomia';
export * from './calzado';
export * from './marcadores';

// Tipos generales
export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  slug: string;
  icon: string;
  products: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  instagram: string;
  contact: string;
}

// Información de contacto
export const contactInfo: ContactInfo = {
  email: 'ventas@bobsolution.com',
  phone: '81 2509 0913',
  instagram: '@bobcoperation',
  contact: 'Ing. Edgar Castillo'
};

// Industrias servidas
export const industries: Industry[] = [
  {
    id: 'manufactura',
    name: 'Manufactura',
    description: 'Equipos de protección para líneas de producción y manufactura',
    slug: 'manufactura',
    icon: '🏭',
    products: ['guantes', 'proteccion-visual', 'calzado-seguridad']
  },
  {
    id: 'automotriz',
    name: 'Automotriz',
    description: 'EPP especializado para la industria automotriz',
    slug: 'automotriz',
    icon: '🚗',
    products: ['guantes-pu', 'proteccion-visual', 'ergonomia']
  },
  {
    id: 'logistica',
    name: 'Logística',
    description: 'Protección para almacenes y centros de distribución',
    slug: 'logistica',
    icon: '📦',
    products: ['calzado-seguridad', 'guantes', 'empaque']
  },
  {
    id: 'metalmecanica',
    name: 'Metalmecánica',
    description: 'Equipos para trabajo con metales y maquinaria',
    slug: 'metalmecanica',
    icon: '⚙️',
    products: ['guantes-anticorte', 'proteccion-visual', 'ergonomia']
  },
  {
    id: 'electronica',
    name: 'Electrónica',
    description: 'Protección especializada para componentes electrónicos',
    slug: 'electronica',
    icon: '🔌',
    products: ['guantes-antiestatico', 'proteccion-visual', 'marcadores']
  },
  {
    id: 'alimentos',
    name: 'Alimentos',
    description: 'EPP para industria alimentaria y procesamiento',
    slug: 'alimentos',
    icon: '🍽️',
    products: ['guantes-nitrilo', 'proteccion-visual', 'empaque']
  }
];

// Pilares de BobCoperation
export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const pillars: Pillar[] = [
  {
    id: 'cumplimiento',
    title: 'Cumplimiento',
    description: 'Todos nuestros productos cumplen con las normas y estándares internacionales de seguridad.',
    icon: '✅'
  },
  {
    id: 'disponibilidad',
    title: 'Disponibilidad',
    description: 'Mantenemos inventario constante para garantizar la disponibilidad de nuestros productos.',
    icon: '📦'
  },
  {
    id: 'entregas',
    title: 'Entregas a Tiempo',
    description: 'Comprometidos con entregas puntuales para mantener tu operación sin interrupciones.',
    icon: '🚚'
  },
  {
    id: 'asesoria',
    title: 'Asesoría Consultiva',
    description: 'Nuestro equipo experto te ayuda a elegir la mejor solución para tus necesidades.',
    icon: '👨‍💼'
  }
];

// Navegación principal
export const navigation: NavigationItem[] = [
  {
    name: 'Soluciones',
    href: '/soluciones',
    children: [
      { name: 'Guantes', href: '/soluciones/guantes' },
      { name: 'Protección Visual y Auditiva', href: '/soluciones/proteccion-visual-auditiva' },
      { name: 'Empaque y Consumibles', href: '/soluciones/empaque-consumibles' },
      { name: 'Ergonomía y Protección', href: '/soluciones/ergonomia-proteccion' },
      { name: 'Calzado de Seguridad', href: '/soluciones/calzado-seguridad' },
      { name: 'Marcadores Industriales', href: '/soluciones/marcadores-industriales' }
    ]
  },
  {
    name: 'Industrias',
    href: '/industrias',
    children: [
      { name: 'Manufactura', href: '/industrias/manufactura' },
      { name: 'Automotriz', href: '/industrias/automotriz' },
      { name: 'Logística', href: '/industrias/logistica' },
      { name: 'Metalmecánica', href: '/industrias/metalmecanica' },
      { name: 'Electrónica', href: '/industrias/electronica' },
      { name: 'Alimentos', href: '/industrias/alimentos' }
    ]
  },
  { name: 'Por qué BobCoperation', href: '/por-que-bobcoperation' },
  { name: 'Catálogo', href: '/docs/catalogo-bobcoperation.pdf' },
  { name: 'Recursos', href: '/recursos' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contacto', href: '/contacto' }
];

// FAQ
export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: '¿Cuál es el mínimo de compra?',
    answer: 'No tenemos mínimo de compra establecido. Trabajamos desde pedidos pequeños hasta grandes volúmenes según las necesidades de cada cliente.'
  },
  {
    question: '¿Cuáles son los tiempos de entrega?',
    answer: 'Los tiempos de entrega varían según el producto y ubicación. Generalmente entregamos en 24-48 horas en área metropolitana y 3-5 días hábiles a nivel nacional.'
  },
  {
    question: '¿Cómo funciona la facturación?',
    answer: 'Facturamos con RFC válido. Aceptamos pagos con tarjeta, transferencia bancaria y en algunos casos efectivo contra entrega.'
  },
  {
    question: '¿Hacen envíos a toda la República?',
    answer: 'Sí, realizamos envíos a toda la República Mexicana. Los costos de envío varían según la ubicación y peso del paquete.'
  },
  {
    question: '¿Ofrecen descuentos por volumen?',
    answer: 'Sí, ofrecemos descuentos especiales para compras en volumen. Contacta con nuestro equipo de ventas para conocer las condiciones.'
  },
  {
    question: '¿Los productos tienen garantía?',
    answer: 'Todos nuestros productos cuentan con garantía de calidad. En caso de defectos de fabricación, realizamos el cambio sin costo adicional.'
  }
];
