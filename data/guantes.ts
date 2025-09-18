// Tipos base para productos
export interface Product {
  codigo: string;
  talla?: string;
  material: string;
  color: string;
  empaque?: string;
  notas?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  products: Product[];
  usos?: string[];
  composicion?: Array<{ comp: string; pct: number }>;
  empaque?: {
    paquete: string;
    cajaMaster: string;
  };
}

// Guantes Anticorte Nivel 5
export const guantesAnticorte: ProductCategory = {
  id: 'anticorte-nivel-5',
  name: 'Guantes Anticorte Nivel 5',
  description: 'Protección máxima contra cortes y materiales filosos',
  slug: 'anticorte-nivel-5',
  usos: [
    'Corte y materiales filosos',
    'Manejo de vidrios, láminas y cerámicas',
    'Trabajo con herramientas afiladas',
    'Procesamiento de metales'
  ],
  composicion: [
    { comp: 'Polietileno', pct: 35 },
    { comp: 'Poliuretano', pct: 20 },
    { comp: 'Acero', pct: 15 },
    { comp: 'Nailon', pct: 13 },
    { comp: 'Vidrio', pct: 10 },
    { comp: 'Elastano', pct: 7 }
  ],
  empaque: {
    paquete: '12 pares',
    cajaMaster: '240 pares'
  },
  products: [
    {
      codigo: 'BGU-AC001',
      talla: 'XS (6)',
      material: 'Polietileno/Poliuretano/Acero',
      color: 'Gris',
      empaque: '12 pares',
      notas: 'Nivel 5 de protección anticorte'
    },
    {
      codigo: 'BGU-AC002',
      talla: 'S (7)',
      material: 'Polietileno/Poliuretano/Acero',
      color: 'Gris',
      empaque: '12 pares',
      notas: 'Nivel 5 de protección anticorte'
    },
    {
      codigo: 'BGU-AC003',
      talla: 'M (8)',
      material: 'Polietileno/Poliuretano/Acero',
      color: 'Gris',
      empaque: '12 pares',
      notas: 'Nivel 5 de protección anticorte'
    },
    {
      codigo: 'BGU-AC004',
      talla: 'L (9)',
      material: 'Polietileno/Poliuretano/Acero',
      color: 'Gris',
      empaque: '12 pares',
      notas: 'Nivel 5 de protección anticorte'
    },
    {
      codigo: 'BGU-AC005',
      talla: 'XL (10)',
      material: 'Polietileno/Poliuretano/Acero',
      color: 'Gris',
      empaque: '12 pares',
      notas: 'Nivel 5 de protección anticorte'
    }
  ]
};

// Guantes PU (recubiertos)
export const guantesPU: ProductCategory = {
  id: 'pu',
  name: 'Guantes PU Recubiertos',
  description: 'Guantes con recubrimiento de poliuretano para mayor agarre y resistencia',
  slug: 'pu',
  usos: [
    'Manejo de herramientas',
    'Trabajo en líneas de producción',
    'Manipulación de materiales',
    'Actividades de montaje'
  ],
  products: [
    {
      codigo: 'BGU-0036',
      talla: 'XS (6)',
      material: 'Poliéster/Poliuretano',
      color: 'Amarillo',
      empaque: '12 pares'
    },
    {
      codigo: 'BGU-0037',
      talla: 'S (7)',
      material: 'Poliéster/Poliuretano',
      color: 'Blanco',
      empaque: '12 pares'
    },
    {
      codigo: 'BGU-0038',
      talla: 'M (8)',
      material: 'Poliéster/Poliuretano',
      color: 'Verde',
      empaque: '12 pares'
    },
    {
      codigo: 'BGU-0039',
      talla: 'L (9)',
      material: 'Poliéster/Poliuretano',
      color: 'Gris',
      empaque: '12 pares'
    },
    {
      codigo: 'BGU-00310',
      talla: 'XL (10)',
      material: 'Poliéster/Poliuretano',
      color: 'Café',
      empaque: '12 pares'
    },
    {
      codigo: 'BGU-0046',
      talla: 'XS (6)',
      material: 'Poliéster/Poliuretano',
      color: 'Amarillo',
      empaque: '12 pares'
    },
    {
      codigo: 'BGU-0047',
      talla: 'S (7)',
      material: 'Poliéster/Poliuretano',
      color: 'Blanco',
      empaque: '12 pares'
    },
    {
      codigo: 'BGU-0048',
      talla: 'M (8)',
      material: 'Poliéster/Poliuretano',
      color: 'Verde',
      empaque: '12 pares'
    },
    {
      codigo: 'BGU-0049',
      talla: 'L (9)',
      material: 'Poliéster/Poliuretano',
      color: 'Gris',
      empaque: '12 pares'
    },
    {
      codigo: 'BGU-00410',
      talla: 'XL (10)',
      material: 'Poliéster/Poliuretano',
      color: 'Café',
      empaque: '12 pares'
    }
  ]
};

// Guantes PU sin recubrimiento
export const guantesPUSinRecubrimiento: ProductCategory = {
  id: 'pu-sin-recubrimiento',
  name: 'Guantes PU sin Recubrimiento',
  description: 'Guantes de poliéster para manejo delicado sin recubrimiento',
  slug: 'pu-sin-recubrimiento',
  usos: [
    'Manejo de piezas delicadas',
    'Inspección de productos',
    'Evita rayaduras y huellas',
    'Alta sensibilidad táctil'
  ],
  products: [
    {
      codigo: 'BGU-PU001',
      talla: 'XS (6)',
      material: 'Poliéster 100%',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Sin recubrimiento, alta sensibilidad'
    },
    {
      codigo: 'BGU-PU002',
      talla: 'S (7)',
      material: 'Poliéster 100%',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Sin recubrimiento, alta sensibilidad'
    },
    {
      codigo: 'BGU-PU003',
      talla: 'M (8)',
      material: 'Poliéster 100%',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Sin recubrimiento, alta sensibilidad'
    },
    {
      codigo: 'BGU-PU004',
      talla: 'L (9)',
      material: 'Poliéster 100%',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Sin recubrimiento, alta sensibilidad'
    },
    {
      codigo: 'BGU-PU005',
      talla: 'XL (10)',
      material: 'Poliéster 100%',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Sin recubrimiento, alta sensibilidad'
    },
    {
      codigo: 'BGU-PU006',
      talla: 'XS (6)',
      material: 'Poliéster 100%',
      color: 'Blanco',
      empaque: '12 pares',
      notas: 'Sin recubrimiento, alta sensibilidad'
    },
    {
      codigo: 'BGU-PU007',
      talla: 'S (7)',
      material: 'Poliéster 100%',
      color: 'Blanco',
      empaque: '12 pares',
      notas: 'Sin recubrimiento, alta sensibilidad'
    },
    {
      codigo: 'BGU-PU008',
      talla: 'M (8)',
      material: 'Poliéster 100%',
      color: 'Blanco',
      empaque: '12 pares',
      notas: 'Sin recubrimiento, alta sensibilidad'
    },
    {
      codigo: 'BGU-PU009',
      talla: 'L (9)',
      material: 'Poliéster 100%',
      color: 'Blanco',
      empaque: '12 pares',
      notas: 'Sin recubrimiento, alta sensibilidad'
    },
    {
      codigo: 'BGU-PU010',
      talla: 'XL (10)',
      material: 'Poliéster 100%',
      color: 'Blanco',
      empaque: '12 pares',
      notas: 'Sin recubrimiento, alta sensibilidad'
    }
  ]
};

// Guantes de Algodón
export const guantesAlgodon: ProductCategory = {
  id: 'algodon',
  name: 'Guantes de Algodón',
  description: 'Guantes de algodón para protección general y comodidad',
  slug: 'algodon',
  usos: [
    'Protección general',
    'Trabajo ligero',
    'Comodidad y transpirabilidad',
    'Actividades de limpieza'
  ],
  composicion: {
    poliester: '70%',
    algodon: '30%'
  },
  empaque: {
    paquete: '12 pares',
    cajaMaster: '360 pares'
  },
  products: [
    {
      codigo: 'BGU-00550',
      talla: 'XS/S',
      material: 'Algodón/Poliéster',
      color: 'Blanco',
      empaque: '12 pares',
      notas: '45-50g'
    },
    {
      codigo: 'BGU-00665',
      talla: 'M/G',
      material: 'Algodón/Poliéster',
      color: 'Gris',
      empaque: '12 pares',
      notas: '65g'
    },
    {
      codigo: 'BGU-00670',
      talla: 'M/G',
      material: 'Algodón/Poliéster',
      color: 'Gris',
      empaque: '12 pares',
      notas: '70g'
    }
  ]
};

// Guantes Antiestático
export const guantesAntiestatico: ProductCategory = {
  id: 'antiestatico',
  name: 'Guantes Antiestático',
  description: 'Guantes para protección contra descargas electrostáticas',
  slug: 'antiestatico',
  usos: [
    'Trabajo con componentes electrónicos',
    'Protección contra ESD',
    'Industria electrónica',
    'Manejo de circuitos'
  ],
  products: [
    {
      codigo: 'BGU-AE001',
      talla: 'S (7)',
      material: 'Poliéster/Antiestático',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Recubrimiento completo antiestático'
    },
    {
      codigo: 'BGU-AE002',
      talla: 'M (8)',
      material: 'Poliéster/Antiestático',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Recubrimiento completo antiestático'
    },
    {
      codigo: 'BGU-AE003',
      talla: 'L (9)',
      material: 'Poliéster/Antiestático',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Recubrimiento completo antiestático'
    },
    {
      codigo: 'BGU-AE004',
      talla: 'S (7)',
      material: 'Poliéster/Antiestático',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Recubrimiento solo en punta'
    },
    {
      codigo: 'BGU-AE005',
      talla: 'M (8)',
      material: 'Poliéster/Antiestático',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Recubrimiento solo en punta'
    },
    {
      codigo: 'BGU-AE006',
      talla: 'L (9)',
      material: 'Poliéster/Antiestático',
      color: 'Negro',
      empaque: '12 pares',
      notas: 'Recubrimiento solo en punta'
    }
  ]
};

// Guantes Nitrilo Desechable
export const guantesNitriloDesechable: ProductCategory = {
  id: 'nitrilo-desechable',
  name: 'Guantes Nitrilo Desechable',
  description: 'Guantes de nitrilo para precisión e higiene',
  slug: 'nitrilo-desechable',
  usos: [
    'Precisión e higiene',
    'Industria alimentaria',
    'Laboratorios',
    'Protección química'
  ],
  products: [
    {
      codigo: 'BGU-NI001',
      talla: 'XS (6)',
      material: 'NBR 100%',
      color: 'Azul',
      empaque: '100 pares',
      notas: 'Desechable, alta resistencia química'
    },
    {
      codigo: 'BGU-NI002',
      talla: 'S (7)',
      material: 'NBR 100%',
      color: 'Azul',
      empaque: '100 pares',
      notas: 'Desechable, alta resistencia química'
    },
    {
      codigo: 'BGU-NI003',
      talla: 'M (8)',
      material: 'NBR 100%',
      color: 'Azul',
      empaque: '100 pares',
      notas: 'Desechable, alta resistencia química'
    },
    {
      codigo: 'BGU-NI004',
      talla: 'L (9)',
      material: 'NBR 100%',
      color: 'Azul',
      empaque: '100 pares',
      notas: 'Desechable, alta resistencia química'
    },
    {
      codigo: 'BGU-NI005',
      talla: 'XL (10)',
      material: 'NBR 100%',
      color: 'Azul',
      empaque: '100 pares',
      notas: 'Desechable, alta resistencia química'
    }
  ]
};

// Exportar todas las categorías de guantes
export const guantesCategories: ProductCategory[] = [
  guantesAnticorte,
  guantesPU,
  guantesPUSinRecubrimiento,
  guantesAlgodon,
  guantesAntiestatico,
  guantesNitriloDesechable
];
