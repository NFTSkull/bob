export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  image: string;
  specifications?: string[];
  applications?: string[];
  certifications?: string[];
  code?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'guantes',
    name: 'Guantes de Protección',
    description: 'Protección completa para las manos en entornos industriales exigentes',
    icon: 'M12 2L13.41 4.17C13.78 4.9 14.6 5.33 15.41 5.17L17.5 4.67C18.3 4.5 19.1 5.3 18.92 6.1L18.42 8.19C18.26 9 18.69 9.82 19.42 10.19L21.5 11.17C22.3 11.5 22.3 12.5 21.5 12.83L19.42 13.81C18.69 14.18 18.26 15 18.42 15.81L18.92 17.9C19.1 18.7 18.3 19.5 17.5 19.33L15.41 18.83C14.6 18.67 13.78 19.1 13.41 19.83L12 22L10.59 19.83C10.22 19.1 9.4 18.67 8.59 18.83L6.5 19.33C5.7 19.5 4.9 18.7 5.08 17.9L5.58 15.81C5.74 15 5.31 14.18 4.58 13.81L2.5 12.83C1.7 12.5 1.7 11.5 2.5 11.17L4.58 10.19C5.31 9.82 5.74 9 5.58 8.19L5.08 6.1C4.9 5.3 5.7 4.5 6.5 4.67L8.59 5.17C9.4 5.33 10.22 4.9 10.59 4.17L12 2Z',
    products: [
      {
        id: 'guantes-anticorte-nivel-5',
        name: 'Guantes Anticorte Nivel 5',
        description: 'Máxima protección contra cortes en aplicaciones con materiales filosos como láminas metálicas y vidrio.',
        category: 'guantes',
        subcategory: 'anticorte',
        image: '/images/cat-guantes-anticorte-nivel-5.webp',
        specifications: [
          'Nivel de corte 5 (ANSI/ISEA)',
          'Recubrimiento de PU en palma',
          'Base textil de HPPE',
          'Calibre 13'
        ],
        applications: [
          'Manejo de láminas metálicas',
          'Trabajo con vidrio',
          'Corte y ensamble',
          'Manufactura automotriz'
        ],
        certifications: ['ANSI/ISEA 105', 'EN 388']
      },
      {
        id: 'guantes-pu-recubiertos',
        name: 'Guantes PU Recubiertos',
        description: 'Precisión y destreza para inspección y manejo de componentes metálicos pequeños.',
        category: 'guantes',
        subcategory: 'pu-recubierto',
        image: '/images/cat-guantes-pu.webp',
        specifications: [
          'Recubrimiento PU en dedos y palma',
          'Base de nylon sin costuras',
          'Calibre 15',
          'Transpirable'
        ],
        applications: [
          'Inspección de calidad',
          'Ensamble de precisión',
          'Electrónica',
          'Manufactura ligera'
        ]
      },
      {
        id: 'guantes-pu-blancos',
        name: 'Guantes PU Sin Recubrimiento (Blancos)',
        description: 'Manejo delicado de componentes electrónicos y piezas de precisión.',
        category: 'guantes',
        subcategory: 'pu-sin-recubrimiento',
        image: '/images/cat-guantes-pu-sin-recubrimiento-blanco.webp',
        specifications: [
          'Nylon sin recubrimiento',
          'Color blanco',
          'Calibre 15',
          'Lavable'
        ],
        applications: [
          'Ensamble electrónico',
          'Sala blanca',
          'Industria farmacéutica',
          'Control de calidad'
        ]
      },
      {
        id: 'guantes-pu-negros',
        name: 'Guantes PU Sin Recubrimiento (Negros)',
        description: 'Versión negra para aplicaciones donde se requiere ocultar suciedad ligera.',
        category: 'guantes',
        subcategory: 'pu-sin-recubrimiento',
        image: '/images/cat-guantes-pu-sin-recubrimiento-negro.webp',
        specifications: [
          'Nylon sin recubrimiento',
          'Color negro',
          'Calibre 15',
          'Lavable'
        ],
        applications: [
          'Ensamble general',
          'Manejo de componentes',
          'Inspección',
          'Logística ligera'
        ]
      },
      {
        id: 'guantes-algodon-45-50g',
        name: 'Guantes Algodón 45-50g',
        description: 'Protección básica para manipulación de cajas y trabajo general en almacén.',
        category: 'guantes',
        subcategory: 'algodon',
        image: '/images/cat-guantes-algodon-45-50g.webp',
        specifications: [
          'Algodón 100%',
          'Peso: 45-50g',
          'Tejido estándar',
          'Puño elástico'
        ],
        applications: [
          'Almacén y logística',
          'Manipulación de cajas',
          'Trabajo general',
          'Construcción ligera'
        ]
      },
      {
        id: 'guantes-algodon-65g',
        name: 'Guantes Algodón 65g',
        description: 'Mayor durabilidad para trabajos de manipulación intensiva.',
        category: 'guantes',
        subcategory: 'algodon',
        image: '/images/cat-guantes-algodon-65g.webp',
        specifications: [
          'Algodón 100%',
          'Peso: 65g',
          'Tejido reforzado',
          'Mayor durabilidad'
        ],
        applications: [
          'Carga y descarga',
          'Manipulación de materiales',
          'Construcción',
          'Mantenimiento'
        ]
      },
      {
        id: 'guantes-algodon-70g',
        name: 'Guantes Algodón 70g',
        description: 'Máxima resistencia en algodón para trabajos pesados.',
        category: 'guantes',
        subcategory: 'algodon',
        image: '/images/cat-guantes-algodon-70g.webp',
        specifications: [
          'Algodón 100%',
          'Peso: 70g',
          'Tejido extra resistente',
          'Puño reforzado'
        ],
        applications: [
          'Trabajo pesado',
          'Construcción',
          'Soldadura ligera',
          'Mantenimiento industrial'
        ]
      },
      {
        id: 'guantes-antiestaticos-completo',
        name: 'Guantes Antiestáticos Completos',
        description: 'Protección total contra descargas electrostáticas para trabajo con PCB.',
        category: 'guantes',
        subcategory: 'antiestatico',
        image: '/images/cat-guantes-antiestatico-completo.webp',
        specifications: [
          'Fibra conductiva integrada',
          'Resistencia superficial: 10^6-10^8 Ω',
          'Recubrimiento PU',
          'Certificado ESD'
        ],
        applications: [
          'Ensamble de PCB',
          'Manufactura electrónica',
          'Sala limpia',
          'Equipos sensibles'
        ],
        certifications: ['IEC 61340-5-1']
      },
      {
        id: 'guantes-antiestaticos-punta',
        name: 'Guantes Antiestáticos en Punta',
        description: 'Precisión máxima para trabajos delicados con componentes electrónicos.',
        category: 'guantes',
        subcategory: 'antiestatico',
        image: '/images/cat-guantes-antiestatico-punta.webp',
        specifications: [
          'Fibra conductiva en dedos',
          'Base no conductiva',
          'Máxima destreza',
          'Resistencia controlada'
        ],
        applications: [
          'Reparación electrónica',
          'Ensamble de precisión',
          'Testing de componentes',
          'Microelectrónica'
        ]
      },
      {
        id: 'guantes-nitrilo-desechables',
        name: 'Guantes Nitrilo Desechables',
        description: 'Protección higiénica para uso ligero en laboratorios y áreas limpias.',
        category: 'guantes',
        subcategory: 'desechable',
        image: '/images/cat-guantes-nitrilo-desechable.webp',
        specifications: [
          'Nitrilo sintético',
          'Libre de látex',
          'Textura antideslizante',
          'Desechable'
        ],
        applications: [
          'Laboratorio',
          'Área médica',
          'Manipulación de químicos',
          'Industria alimentaria'
        ],
        certifications: ['FDA', 'CE']
      }
    ]
  },
  {
    id: 'proteccion-visual-auditiva',
    name: 'Protección Visual y Auditiva',
    description: 'Equipos especializados para proteger vista y oído en entornos industriales',
    icon: 'M12 9C10.89 9 10 9.89 10 11S10.89 13 12 13 14 12.11 14 11 13.11 9 12 9M12 17C9.24 17 7 14.76 7 12S9.24 7 12 7 17 9.24 17 12 14.76 17 12 17M12 5C7.03 5 3 9.03 3 14H5C5 10.13 8.13 7 12 7S19 10.13 19 14H21C21 9.03 16.97 5 12 5Z',
    products: [
      {
        id: 'lentes-seguridad',
        name: 'Lentes de Seguridad Policarbonato',
        description: 'Protección ocular de alta resistencia con lentes de policarbonato para máxima claridad.',
        category: 'proteccion-visual-auditiva',
        subcategory: 'visual',
        image: '/images/cat-lentes-seguridad.webp',
        specifications: [
          'Lentes de policarbonato',
          'Protección UV 99.9%',
          'Resistencia al impacto',
          'Patillas ajustables'
        ],
        applications: [
          'Soldadura',
          'Esmerilado',
          'Químicos',
          'Construcción'
        ],
        certifications: ['ANSI Z87.1', 'EN 166']
      },
      {
        id: 'tapones-auditivos',
        name: 'Tapones Auditivos con Cordón',
        description: 'Protección auditiva cómoda y efectiva con cordón de seguridad.',
        category: 'proteccion-visual-auditiva',
        subcategory: 'auditiva',
        image: '/images/cat-tapones-auditivos.webp',
        specifications: [
          'Reducción de ruido: 32 dB',
          'Material: Espuma PU',
          'Cordón de seguridad',
          'Desechables'
        ],
        applications: [
          'Ambientes ruidosos',
          'Manufactura',
          'Construcción',
          'Aeropuertos'
        ],
        certifications: ['ANSI S3.19', 'EN 352-2']
      }
    ]
  },
  {
    id: 'empaque-consumibles',
    name: 'Empaque y Consumibles',
    description: 'Soluciones completas para empaque, protección y logística industrial',
    icon: 'M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z',
    products: [
      {
        id: 'pelicula-poliestretch',
        name: 'Película Poliestretch',
        description: 'Film estirable de alta resistencia para asegurar cargas en pallets.',
        category: 'empaque-consumibles',
        subcategory: 'film',
        image: '/images/cat-poliestretch-pallet.webp',
        specifications: [
          'Estiramiento: 300%',
          'Espesor: 17-23 micrones',
          'Ancho: 50cm',
          'Longitud: 300m'
        ],
        applications: [
          'Paletizado',
          'Aseguramiento de cargas',
          'Almacén',
          'Transporte'
        ]
      },
      {
        id: 'pelicula-biodegradable',
        name: 'Película Biodegradable',
        description: 'Alternativa ecológica para empaque sostenible.',
        category: 'empaque-consumibles',
        subcategory: 'film',
        image: '/images/cat-pelicula-biodegradable.webp',
        specifications: [
          'Material biodegradable',
          'Compostable',
          'Resistencia comparable',
          'Certificado verde'
        ],
        applications: [
          'Empaque ecológico',
          'Industria alimentaria',
          'Productos orgánicos',
          'Cumplimiento ambiental'
        ]
      },
      {
        id: 'cinta-adhesiva',
        name: 'Cinta Adhesiva Industrial',
        description: 'Cinta de alta adherencia para sellado profesional de cajas.',
        category: 'empaque-consumibles',
        subcategory: 'adhesivos',
        image: '/images/cat-cinta-adhesiva.webp',
        specifications: [
          'Adhesivo acrílico',
          'Ancho: 48mm',
          'Longitud: 100m',
          'Resistente al agua'
        ],
        applications: [
          'Sellado de cajas',
          'Empaque',
          'Etiquetado',
          'Reparaciones'
        ]
      },
      {
        id: 'polifoam',
        name: 'Polifoam / Espuma Polietileno',
        description: 'Acolchado protector para componentes delicados y frágiles.',
        category: 'empaque-consumibles',
        subcategory: 'proteccion',
        image: '/images/cat-polifoam-acolchado.webp',
        specifications: [
          'Densidad variable',
          'Espesores: 1-50mm',
          'Resistente a humedad',
          'Reciclable'
        ],
        applications: [
          'Protección de productos',
          'Embalaje delicado',
          'Aislamiento',
          'Amortiguación'
        ]
      }
    ]
  },
  {
    id: 'ergonomia-proteccion',
    name: 'Ergonomía y Protección',
    description: 'Equipos ergonómicos para prevenir lesiones y mejorar la comodidad laboral',
    icon: 'M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2Z',
    products: [
      {
        id: 'faja-sacrolumbar',
        name: 'Faja Sacrolumbar',
        description: 'Soporte lumbar para prevenir lesiones al levantar cargas pesadas.',
        category: 'ergonomia-proteccion',
        subcategory: 'soporte',
        image: '/images/cat-faja-sacrolumbar.webp',
        specifications: [
          'Soporte lumbar ajustable',
          'Cierre de velcro',
          'Materiales transpirables',
          'Tallas: S-XXL'
        ],
        applications: [
          'Levantamiento de cargas',
          'Almacén',
          'Construcción',
          'Manufactura'
        ]
      },
      {
        id: 'mandil-mezclilla',
        name: 'Mandil de Mezclilla',
        description: 'Protección frontal resistente para soldadura ligera y trabajo con chispas.',
        category: 'ergonomia-proteccion',
        subcategory: 'vestimenta',
        image: '/images/cat-mandil-mezclilla.webp',
        specifications: [
          'Mezclilla 100%',
          'Resistente al fuego',
          'Tirantes ajustables',
          'Bolsillos frontales'
        ],
        applications: [
          'Soldadura ligera',
          'Trabajo con chispas',
          'Taller mecánico',
          'Herrería'
        ]
      },
      {
        id: 'mangas-mezclilla',
        name: 'Mangas de Mezclilla',
        description: 'Protección específica para brazos en trabajos de taller.',
        category: 'ergonomia-proteccion',
        subcategory: 'vestimenta',
        image: '/images/cat-mangas-mezclilla.webp',
        specifications: [
          'Mezclilla resistente',
          'Elásticos en extremos',
          'Longitud: 35cm',
          'Lavables'
        ],
        applications: [
          'Protección de brazos',
          'Taller',
          'Soldadura',
          'Trabajo con materiales abrasivos'
        ]
      }
    ]
  },
  {
    id: 'calzado-seguridad',
    name: 'Calzado de Seguridad',
    description: 'Calzado industrial certificado para máxima protección y comodidad',
    icon: 'M12 2L13.41 4.17C13.78 4.9 14.6 5.33 15.41 5.17L17.5 4.67C18.3 4.5 19.1 5.3 18.92 6.1L18.42 8.19C18.26 9 18.69 9.82 19.42 10.19L21.5 11.17C22.3 11.5 22.3 12.5 21.5 12.83L19.42 13.81C18.69 14.18 18.26 15 18.42 15.81L18.92 17.9C19.1 18.7 18.3 19.5 17.5 19.33L15.41 18.83C14.6 18.67 13.78 19.1 13.41 19.83L12 22L10.59 19.83C10.22 19.1 9.4 18.67 8.59 18.83L6.5 19.33C5.7 19.5 4.9 18.7 5.08 17.9L5.58 15.81C5.74 15 5.31 14.18 4.58 13.81L2.5 12.83C1.7 12.5 1.7 11.5 2.5 11.17L4.58 10.19C5.31 9.82 5.74 9 5.58 8.19L5.08 6.1C4.9 5.3 5.7 4.5 6.5 4.67L8.59 5.17C9.4 5.33 10.22 4.9 10.59 4.17L12 2Z',
    products: [
      {
        id: 'bota-punta-acero',
        name: 'Bota de Seguridad Punta de Acero',
        description: 'Calzado industrial con protección de impacto y antiperforación.',
        category: 'calzado-seguridad',
        subcategory: 'botas',
        image: '/images/cat-calzado-punta-acero.webp',
        specifications: [
          'Punta de acero',
          'Suela antiperforación',
          'Cuero genuino',
          'Suela antideslizante'
        ],
        applications: [
          'Construcción',
          'Manufactura pesada',
          'Soldadura',
          'Minería'
        ],
        certifications: ['ASTM F2413', 'NOM-113-STPS']
      }
    ]
  },
  {
    id: 'marcadores-industriales',
    name: 'Marcadores Industriales',
    description: 'Marcadores especializados para identificación en diversos materiales',
    icon: 'M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z',
    products: [
      {
        id: 'marcador-base-aceite',
        name: 'Marcador Base Aceite',
        description: 'Marcado permanente en superficies metálicas y no porosas.',
        category: 'marcadores-industriales',
        subcategory: 'permanente',
        image: '/images/cat-marcador-base-aceite.webp',
        specifications: [
          'Base aceite',
          'Secado rápido',
          'Resistente al agua',
          'Punta media'
        ],
        applications: [
          'Marcado en metal',
          'Identificación permanente',
          'Control de calidad',
          'Inventarios'
        ]
      },
      {
        id: 'marcador-base-alcohol',
        name: 'Marcador Base Alcohol',
        description: 'Ideal para plásticos, cerámicas y superficies lisas.',
        category: 'marcadores-industriales',
        subcategory: 'multiuso',
        image: '/images/cat-marcador-base-alcohol.webp',
        specifications: [
          'Base alcohol',
          'Secado instantáneo',
          'Multi-superficie',
          'Punta fina'
        ],
        applications: [
          'Plásticos',
          'Cerámica',
          'Vidrio',
          'Etiquetado'
        ]
      }
    ]
  }
];

export const getAllProducts = (): Product[] => {
  return productCategories.flatMap(category => category.products);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  const category = productCategories.find(cat => cat.id === categoryId);
  return category ? category.products : [];
};

export const getProductById = (productId: string): Product | undefined => {
  return getAllProducts().find(product => product.id === productId);
};