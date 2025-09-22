export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  image: string;
  material?: string;
  codes?: string[];
  colors?: string[];
  sizes?: string[];
  packaging?: string;
  masterBox?: string;
  specifications?: string[];
  applications?: string[];
  certifications?: string[];
  weight?: string;
  thickness?: string;
  resistance?: string;
  norm?: string;
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
        id: 'guantes-pu-recubiertos',
        name: 'Guantes de Poliuretano (PU)',
        description: 'Guantes industriales de poliuretano para manipulaciones finas y ensamblaje de piezas. Protección superior contra riesgos mecánicos con máxima destreza y sensibilidad táctil.',
        category: 'guantes',
        subcategory: 'pu-recubierto',
        image: '/images/cat-guantes-pu.webp',
        material: 'Poliéster 70%, Poliuretano 30%',
        codes: ['BGU-0016 a BGU-00110', 'BGU-0026 a BGU-00210'],
        colors: ['Amarillo', 'Blanco', 'Verde', 'Gris', 'Café'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Manipulaciones finas industriales',
          'Ensamblaje de piezas electrónicas',
          'Protección contra riesgos mecánicos',
          'Trabajo de precisión en manufactura',
          'Control de calidad',
          'Industria automotriz'
        ],
        specifications: [
          'Recubrimiento de poliuretano de alta calidad',
          'Excelente agarre y adherencia',
          'Resistente al desgaste',
          'Lavable y reutilizable'
        ],
        certifications: ['Normas industriales', 'Calidad certificada']
      },
      {
        id: 'guantes-anticorte-nivel-5',
        name: 'Guantes Anticorte Nivel 5',
        description: 'Guantes de seguridad anticorte nivel 5 para manipulación de herramientas de corte, vidrios, láminas y cerámicas. Protección máxima contra materiales filosos con tecnología de fibra de acero.',
        category: 'guantes',
        subcategory: 'anticorte',
        image: '/images/cat-guantes-anticorte-nivel-5.webp',
        material: 'Polietileno 35%, Poliuretano 20%, Acero 15%, Nailon 13%, Vidrio 10%, Elastano 7%',
        codes: ['BGU-0036 a BGU-00310'],
        colors: ['Amarillo', 'Blanco', 'Verde', 'Gris', 'Café'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Manipulación de herramientas para corte',
          'Trabajo con vidrios y cristales',
          'Manejo de láminas metálicas',
          'Cerámicas y materiales filosos',
          'Industria del vidrio',
          'Construcción y demolición'
        ],
        specifications: [
          'Nivel 5 de protección contra cortes',
          'Fibra de acero integrada',
          'Excelente flexibilidad',
          'Resistente a perforaciones'
        ],
        certifications: ['Nivel 5 de corte', 'ANSI/ISEA 105', 'EN 388']
      },
      {
        id: 'guantes-pu-sin-recubrimiento-negro',
        name: 'Guantes PU sin Recubrimiento (Negros)',
        description: 'Guantes de poliéster sin recubrimiento para manejo e inspección de piezas delicadas. Máxima sensibilidad táctil y protección contra rayaduras sin comprometer la destreza.',
        category: 'guantes',
        subcategory: 'pu-sin-recubrimiento',
        image: '/images/cat-guantes-pu-sin-recubrimiento-negro.webp',
        material: 'Poliéster 100%',
        codes: ['BGU-0046 a BGU-00410'],
        colors: ['Negro'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Manejo e inspección de piezas delicadas',
          'Protección contra rayaduras',
          'Máxima sensibilidad táctil',
          'Control de calidad industrial',
          'Industria electrónica',
          'Manufactura de precisión'
        ],
        specifications: [
          'Sin recubrimiento para máxima sensibilidad',
          'Evita huellas digitales',
          'Protección contra rayaduras',
          'Excelente destreza'
        ],
        certifications: ['Calidad industrial', 'Normas de precisión']
      },
      {
        id: 'guantes-pu-sin-recubrimiento-blanco',
        name: 'Guantes PU sin Recubrimiento (Blancos)',
        description: 'Guantes blancos de poliéster sin recubrimiento para ambientes de sala limpia y alta precisión. Ideales para industria farmacéutica, electrónica y ambientes estériles.',
        category: 'guantes',
        subcategory: 'pu-sin-recubrimiento',
        image: '/images/cat-guantes-pu-sin-recubrimiento-blanco.webp',
        material: 'Poliéster 100%',
        codes: ['BGU-0056 a BGU-00510'],
        colors: ['Blanco'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Sala limpia y ambientes estériles',
          'Industria farmacéutica',
          'Electrónica de precisión',
          'Laboratorios especializados',
          'Manufactura de semiconductores',
          'Industria alimentaria'
        ],
        specifications: [
          'Color blanco para ambientes limpios',
          'Sin recubrimiento para máxima sensibilidad',
          'Evita contaminación',
          'Cumple estándares de sala limpia'
        ],
        certifications: ['Sala limpia', 'Normas farmacéuticas', 'ISO 14644']
      },
      {
        id: 'guantes-algodon-45-50g',
        name: 'Guantes de Algodón 45-50g',
        description: 'Guantes de algodón de peso ligero para protección básica en tareas generales industriales. Ideales para almacenes, talleres y uso doméstico con máxima comodidad.',
        category: 'guantes',
        subcategory: 'algodon',
        image: '/images/cat-guantes-algodon-45-50g.webp',
        material: 'Poliéster 70%, Algodón 30%',
        codes: ['BGU-00650'],
        colors: ['Blanco'],
        sizes: ['XS/S'],
        weight: '45-50g',
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 360 pares',
        applications: [
          'Tareas generales en industria',
          'Trabajo en almacenes',
          'Talleres mecánicos',
          'Uso doméstico',
          'Mantenimiento básico',
          'Jardinería'
        ],
        specifications: [
          'Peso ligero 45-50g',
          'Composición mixta algodón-poliéster',
          'Comodidad y transpirabilidad',
          'Lavable y reutilizable'
        ],
        certifications: ['Calidad industrial', 'Normas básicas']
      },
      {
        id: 'guantes-algodon-65g',
        name: 'Guantes de Algodón 65g',
        description: 'Guantes de algodón de peso intermedio para tareas generales con mayor durabilidad. Perfectos para manipulación intensiva y trabajos de construcción ligera.',
        category: 'guantes',
        subcategory: 'algodon',
        image: '/images/cat-guantes-algodon-65g.webp',
        material: 'Poliéster 70%, Algodón 30%',
        codes: ['BGU-00665'],
        colors: ['Gris'],
        sizes: ['M/G'],
        weight: '65g',
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 360 pares',
        applications: [
          'Carga y descarga de materiales',
          'Manipulación de materiales pesados',
          'Construcción ligera',
          'Mantenimiento industrial',
          'Trabajos de jardinería',
          'Almacenamiento'
        ],
        specifications: [
          'Peso intermedio 65g',
          'Mayor durabilidad',
          'Resistente al desgaste',
          'Excelente agarre'
        ],
        certifications: ['Calidad industrial', 'Resistencia certificada']
      },
      {
        id: 'guantes-algodon-70g',
        name: 'Guantes de Algodón 70g',
        description: 'Guantes de algodón de máximo peso para trabajos pesados industriales. Máxima resistencia frente al desgaste, ideales para uso industrial continuo y construcción.',
        category: 'guantes',
        subcategory: 'algodon',
        image: '/images/cat-guantes-algodon-70g.webp',
        material: 'Poliéster 70%, Algodón 30%',
        codes: ['BGU-00670'],
        colors: ['Gris'],
        sizes: ['M/G'],
        weight: '70g',
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 360 pares',
        applications: [
          'Trabajo pesado industrial',
          'Construcción y demolición',
          'Soldadura ligera',
          'Mantenimiento industrial pesado',
          'Minería',
          'Industria metalúrgica'
        ],
        specifications: [
          'Peso máximo 70g',
          'Máxima resistencia al desgaste',
          'Diseñado para uso continuo',
          'Protección superior'
        ],
        certifications: ['Calidad industrial pesada', 'Resistencia máxima']
      },
      {
        id: 'guantes-antiestaticos-completo',
        name: 'Guante Antiestático Completo',
        description: 'Guantes antiestáticos con recubrimiento completo para protección ESD total. Evita descargas electrostáticas y contaminación en componentes electrónicos sensibles.',
        category: 'guantes',
        subcategory: 'antiestatico',
        image: '/images/cat-guantes-antiestatico-completo.webp',
        material: 'Poliéster 70%, Poliuretano 20%, Carbono 10%',
        codes: ['BGU-0076 a BGU-00710', 'BGU-0090 a BGU-0094'],
        colors: ['Amarillo', 'Blanco', 'Verde', 'Gris', 'Café'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Evita contaminación de componentes electrónicos',
          'Ensamble de PCB y circuitos',
          'Manufactura electrónica',
          'Equipos sensibles ESD',
          'Industria de semiconductores',
          'Laboratorios electrónicos'
        ],
        specifications: [
          'Recubrimiento antiestático completo',
          'Protección ESD certificada',
          'Conductividad controlada',
          'Evita descargas electrostáticas'
        ],
        certifications: ['ESD S20.20', 'IEC 61340', 'ANSI/ESD S20.20']
      },
      {
        id: 'guantes-antiestaticos-punta',
        name: 'Guante Antiestático Punta',
        description: 'Guantes antiestáticos con recubrimiento solo en la punta para manipulación delicada de electrónicos. Máxima sensibilidad y control con protección ESD en las yemas.',
        category: 'guantes',
        subcategory: 'antiestatico',
        image: '/images/cat-guantes-antiestatico-punta.webp',
        material: 'Poliéster 75%, Poliuretano 10%, Carbono 15%',
        codes: ['BGU-0086 a BGU-00810'],
        colors: ['Amarillo', 'Blanco', 'Verde', 'Gris', 'Café'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Manipulación delicada en electrónica',
          'Componentes sensibles ESD',
          'Reparación electrónica de precisión',
          'Testing de componentes',
          'Microelectrónica',
          'Laboratorios de investigación'
        ],
        specifications: [
          'Recubrimiento antiestático solo en punta',
          'Máxima sensibilidad táctil',
          'Protección ESD en yemas',
          'Control de precisión superior'
        ],
        certifications: ['ESD S20.20', 'IEC 61340', 'Precisión certificada']
      },
      {
        id: 'guantes-nitrilo-desechables',
        name: 'Guantes Nitrilo Desechables',
        description: 'Guantes desechables de nitrilo para protección frente a bacterias, virus y químicos. Máxima comodidad y precisión en tareas delicadas con resistencia química superior.',
        category: 'guantes',
        subcategory: 'desechable',
        image: '/images/cat-guantes-nitrilo-desechable.webp',
        material: 'NBR 100%',
        codes: ['BGU-0087 (S)', 'BGU-0088 (M)', 'BGU-0089 (L)'],
        colors: ['Azul'],
        sizes: ['S (7)', 'M (8)', 'L (9)'],
        packaging: 'Caja 100 pares',
        masterBox: 'Caja máster 1000 pares',
        applications: [
          'Protección frente a bacterias y virus',
          'Manejo de sustancias químicas',
          'Alta precisión en tareas delicadas',
          'Laboratorios y análisis',
          'Industria alimentaria',
          'Sector médico y farmacéutico'
        ],
        specifications: [
          'Material NBR 100%',
          'Libre de látex',
          'Resistente a químicos',
          'Excelente sensibilidad táctil'
        ],
        certifications: ['Libre de látex', 'Resistente a químicos', 'FDA aprobado']
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
        name: 'Lentes de Seguridad Industrial',
        description: 'Protección ocular confiable en entornos de riesgo industrial. Fabricados en policarbonato de alta resistencia con diseño unitalla cómodo para máxima protección y visibilidad clara.',
        category: 'proteccion-visual-auditiva',
        subcategory: 'visual',
        image: '/images/cat-lentes-seguridad.webp',
        material: 'Policarbonato de alta resistencia',
        codes: ['BLE-001'],
        colors: ['Transparente'],
        sizes: ['Unitalla'],
        packaging: 'Caja con 12 pz',
        masterBox: 'Caja máster con 300 pz',
        applications: [
          'Protección contra partículas sólidas',
          'Salpicaduras ligeras en áreas industriales',
          'Trabajo en entornos de riesgo',
          'Manufactura y producción industrial',
          'Construcción y demolición',
          'Laboratorios y áreas químicas'
        ],
        specifications: [
          'Lentes de policarbonato de alta resistencia',
          'Diseño unitalla cómodo y ergonómico',
          'Protección contra impactos y partículas',
          'Visibilidad clara sin distorsión',
          'Resistente a rayaduras'
        ],
        certifications: ['ANSI Z87.1', 'Resistencia al impacto', 'Normas industriales']
      },
      {
        id: 'tapones-auditivos',
        name: 'Tapones Auditivos con Cordón Desechables',
        description: 'Protección auditiva ligera y desechable elaborada en espuma de poliuretano con cordón azul para mayor practicidad. Combina comodidad y practicidad en entornos de alto ruido.',
        category: 'proteccion-visual-auditiva',
        subcategory: 'auditiva',
        image: '/images/cat-tapones-auditivos.webp',
        material: 'Espuma de poliuretano',
        codes: ['BTA-001'],
        colors: ['Naranja (cordón azul)'],
        sizes: ['Unitalla'],
        packaging: 'Paquete con 200 pares',
        masterBox: 'Caja máster con 2000 pares',
        applications: [
          'Reducción de ruidos en ambientes industriales',
          'Protección auditiva en entornos de alto ruido',
          'Manufactura y producción industrial',
          'Construcción y demolición',
          'Aeropuertos y talleres mecánicos',
          'Eventos y conciertos'
        ],
        specifications: [
          'Espuma de poliuretano de alta calidad',
          'Cordón azul para mayor practicidad',
          'Diseño desechable e higiénico',
          'Ajuste perfecto y cómodo',
          'Fácil inserción y extracción'
        ],
        certifications: ['Normas de protección auditiva', 'Materiales seguros', 'Desechable certificado']
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
        id: 'trapo-industrial',
        name: 'Trapo Industrial',
        description: 'Trapo de algodón para limpieza industrial y mantenimiento.',
        category: 'empaque-consumibles',
        subcategory: 'limpieza',
        image: '/images/cat-trapo-industrial.webp',
        material: 'Algodón',
        codes: ['BTR-001'],
        packaging: 'Caja 200 pares',
        masterBox: 'Caja máster 2000 pares',
        applications: [
          'Limpieza industrial',
          'Mantenimiento',
          'Absorción de líquidos',
          'Talleres'
        ]
      },
      {
        id: 'cinta-adhesiva',
        name: 'Cinta Adhesiva Transparente',
        description: 'Cinta de alta adherencia para sellado profesional.',
        category: 'empaque-consumibles',
        subcategory: 'adhesivos',
        image: '/images/cat-cinta-adhesiva.webp',
        material: 'Poliéster',
        codes: ['BCT-001'],
        colors: ['Transparente'],
        specifications: ['48 mm x 150 m', 'Alta adherencia'],
        applications: [
          'Sellado de cajas',
          'Empaque',
          'Etiquetado',
          'Reparaciones'
        ]
      },
      {
        id: 'pelicula-poliestretch',
        name: 'Película Poliestretch',
        description: 'Film estirable de alta resistencia para asegurar cargas.',
        category: 'empaque-consumibles',
        subcategory: 'film',
        image: '/images/cat-poliestretch-pallet.webp',
        material: 'Poliestretch',
        codes: ['BPP-001 (18" cal 80, 1.6 kg)', 'BPP-002 (18" cal 80, 2 kg)', 'BPP-003 (18" cal 80, 2.5 kg)'],
        colors: ['Transparente'],
        packaging: 'Paquete 4 pz',
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
        packaging: 'Paquete 6 pz',
        applications: [
          'Empaque ecológico',
          'Industria alimentaria',
          'Productos orgánicos',
          'Cumplimiento ambiental'
        ],
        certifications: ['Biodegradable', 'Compostable']
      },
      {
        id: 'polifoam',
        name: 'Polifoam',
        description: 'Rollo de polifoam para acolchonamiento y protección.',
        category: 'empaque-consumibles',
        subcategory: 'proteccion',
        image: '/images/cat-polifoam-acolchado.webp',
        material: 'Foam de polietileno',
        thickness: '1/32" a 1/4" + Foam 3000',
        applications: [
          'Acolchonamiento',
          'Absorción de vibración',
          'Protección contra golpes',
          'Embalaje de productos delicados'
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
        description: 'Soporte lumbar con doble refuerzo y varillas de soporte.',
        category: 'ergonomia-proteccion',
        subcategory: 'soporte',
        image: '/images/cat-faja-sacrolumbar.webp',
        material: 'Nylon + Polietileno',
        codes: ['BFA-0017 (CH)', 'BFA-0018 (M)', 'BFA-0019 (G)', 'BFA-0010 (XXG)'],
        colors: ['Negro'],
        sizes: ['CH', 'M', 'G', 'XXG'],
        specifications: [
          '100% elástica',
          'Doble refuerzo',
          '8" en zona lumbar',
          '5 varillas de soporte'
        ],
        applications: [
          'Levantamiento de cargas',
          'Soporte lumbar',
          'Prevención de lesiones',
          'Trabajo pesado'
        ]
      },
      {
        id: 'mandil-mezclilla',
        name: 'Mandil de Mezclilla',
        description: 'Protección frontal resistente contra chispas y partículas.',
        category: 'ergonomia-proteccion',
        subcategory: 'vestimenta',
        image: '/images/cat-mandil-mezclilla.webp',
        material: 'Mezclilla',
        codes: ['BMM-001'],
        colors: ['Negro'],
        sizes: ['Unitalla'],
        applications: [
          'Protección contra chispas de soldadura',
          'Partículas sólidas',
          'Resistente a salpicaduras',
          'Taller mecánico'
        ]
      },
      {
        id: 'mangas-mezclilla',
        name: 'Manga de Mezclilla',
        description: 'Protección específica para brazos, resistente y lavable.',
        category: 'ergonomia-proteccion',
        subcategory: 'vestimenta',
        image: '/images/cat-mangas-mezclilla.webp',
        material: 'Mezclilla',
        codes: ['BMM-002'],
        colors: ['Negro'],
        sizes: ['Unitalla'],
        applications: [
          'Protección de brazos',
          'Resistente',
          'Lavable',
          'Ambidiestra'
        ]
      }
    ]
  },
  {
    id: 'calzado-seguridad',
    name: 'Calzado de Seguridad',
    description: 'Calzado industrial certificado para máxima protección y comodidad',
    icon: 'M19 7H18V6A6 6 0 0 0 6 6V7H5A1 1 0 0 0 4 8V20A1 1 0 0 0 5 21H19A1 1 0 0 0 20 20V8A1 1 0 0 0 19 7M8 6A4 4 0 0 1 16 6V7H8V6Z',
    products: [
      {
        id: 'calzado-punta-acero',
        name: 'Calzado de Seguridad',
        description: 'Bota industrial con punta de acero y máxima protección.',
        category: 'calzado-seguridad',
        subcategory: 'botas',
        image: '/images/cat-calzado-punta-acero.webp',
        material: 'Poliuretano + Acero',
        codes: ['BZA-0013 a BZA-0019'],
        colors: ['Negro'],
        sizes: ['Tallas 23-29'],
        norm: 'NOM-113 (punta de acero)',
        resistance: 'Resiste hasta 15 kN de presión y 200J de impacto',
        applications: [
          'Construcción',
          'Manufactura pesada',
          'Soldadura',
          'Industria en general'
        ],
        certifications: ['NOM-113', 'Punta de acero certificada']
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
        id: 'marcadores-base-aceite',
        name: 'Marcadores Base Aceite',
        description: 'Marcador permanente con tinta opaca base aceite.',
        category: 'marcadores-industriales',
        subcategory: 'permanente',
        image: '/images/cat-marcador-base-aceite.webp',
        codes: ['BMA-001 a BMA-011'],
        colors: ['Blanco', 'Negro', 'Rojo', 'Naranja', 'Rosa', 'Morado', 'Verde', 'Amarillo', 'Azul', 'Plata', 'Oro'],
        specifications: [
          'Marcador permanente',
          'Tinta opaca base aceite',
          'Punta redonda media'
        ],
        packaging: 'Caja 12 pz',
        masterBox: 'Caja máster 576 pz',
        applications: [
          'Marcado en metal',
          'Identificación permanente',
          'Control de calidad',
          'Inventarios'
        ]
      },
      {
        id: 'marcadores-base-alcohol',
        name: 'Marcadores Base Alcohol',
        description: 'Rotulador permanente tipo Sharpie con punta fina.',
        category: 'marcadores-industriales',
        subcategory: 'multiuso',
        image: '/images/cat-marcador-base-alcohol.webp',
        codes: ['BMA-012 a BMA-015'],
        colors: ['Negro', 'Verde', 'Rojo', 'Azul'],
        specifications: [
          'Rotulador permanente tipo Sharpie',
          'Punta fina 1.5 mm',
          'Tinta a base de alcohol'
        ],
        packaging: 'Caja 12 pz / Caja 144 pz',
        masterBox: 'Caja máster 864 pz',
        applications: [
          'Plásticos',
          'Cerámica',
          'Vidrio',
          'Etiquetado general'
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