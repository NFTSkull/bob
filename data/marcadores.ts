// Tipos para marcadores industriales
export interface MarcadoresIndustriales {
  id: string;
  name: string;
  description: string;
  slug: string;
  base: 'aceite' | 'alcohol';
  presentacion: {
    paquete: string;
    caja?: string;
    cajaMaster: string;
  };
  productos: ProductoMarcador[];
}

export interface ProductoMarcador {
  codigo: string;
  material: string;
  color: string;
  empaque?: string;
  caracteristicas?: string[];
  aplicaciones?: string[];
}

// Marcadores Base Aceite
export const marcadoresBaseAceite: MarcadoresIndustriales = {
  id: 'marcadores-base-aceite',
  name: 'Marcadores Base Aceite',
  description: 'Marcador permanente a base de aceite con tinta opaca',
  slug: 'marcadores-base-aceite',
  base: 'aceite',
  presentacion: {
    paquete: '12 pz',
    cajaMaster: '576 pz'
  },
  productos: [
    {
      codigo: 'BMA-001',
      material: 'Base de aceite',
      color: 'Blanco',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    },
    {
      codigo: 'BMA-002',
      material: 'Base de aceite',
      color: 'Negro',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    },
    {
      codigo: 'BMA-003',
      material: 'Base de aceite',
      color: 'Rojo',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    },
    {
      codigo: 'BMA-004',
      material: 'Base de aceite',
      color: 'Naranja',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    },
    {
      codigo: 'BMA-005',
      material: 'Base de aceite',
      color: 'Rosa',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    },
    {
      codigo: 'BMA-006',
      material: 'Base de aceite',
      color: 'Morado',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    },
    {
      codigo: 'BMA-007',
      material: 'Base de aceite',
      color: 'Verde',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    },
    {
      codigo: 'BMA-008',
      material: 'Base de aceite',
      color: 'Amarillo',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    },
    {
      codigo: 'BMA-009',
      material: 'Base de aceite',
      color: 'Azul',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    },
    {
      codigo: 'BMA-010',
      material: 'Base de aceite',
      color: 'Plata',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    },
    {
      codigo: 'BMA-011',
      material: 'Base de aceite',
      color: 'Oro',
      caracteristicas: [
        'Tinta opaca',
        'Punta redonda media',
        'Permanente',
        'Resistente al agua'
      ],
      aplicaciones: [
        'Marcado en metal',
        'Marcado en vidrio',
        'Marcado en plástico',
        'Marcado en madera',
        'Marcado en papel',
        'Marcado en caucho',
        'Marcado en piedra',
        'Funciona en superficies húmedas',
        'Funciona en superficies secas',
        'Funciona en superficies grasosas',
        'Funciona en superficies ásperas',
        'Funciona en superficies lisas'
      ]
    }
  ]
};

// Marcadores Base Alcohol
export const marcadoresBaseAlcohol: MarcadoresIndustriales = {
  id: 'marcadores-base-alcohol',
  name: 'Marcadores Base Alcohol',
  description: 'Rotulador permanente punta fina tipo Sharpie',
  slug: 'marcadores-base-alcohol',
  base: 'alcohol',
  presentacion: {
    paquete: '12 pz',
    caja: '144 pz',
    cajaMaster: '864 pz'
  },
  productos: [
    {
      codigo: 'BMA-012',
      material: 'Base de alcohol',
      color: 'Negro',
      caracteristicas: [
        'Punta fina 1.5mm',
        'Tinta permanente',
        'Tipo Sharpie',
        'Secado rápido'
      ],
      aplicaciones: [
        'Escribe en papel',
        'Escribe en metal',
        'Escribe en plástico',
        'Escribe en cerámica',
        'Escribe en caucho',
        'Escribe en cuero',
        'Escribe en OHP'
      ]
    },
    {
      codigo: 'BMA-013',
      material: 'Base de alcohol',
      color: 'Verde',
      caracteristicas: [
        'Punta fina 1.5mm',
        'Tinta permanente',
        'Tipo Sharpie',
        'Secado rápido'
      ],
      aplicaciones: [
        'Escribe en papel',
        'Escribe en metal',
        'Escribe en plástico',
        'Escribe en cerámica',
        'Escribe en caucho',
        'Escribe en cuero',
        'Escribe en OHP'
      ]
    },
    {
      codigo: 'BMA-014',
      material: 'Base de alcohol',
      color: 'Rojo',
      caracteristicas: [
        'Punta fina 1.5mm',
        'Tinta permanente',
        'Tipo Sharpie',
        'Secado rápido'
      ],
      aplicaciones: [
        'Escribe en papel',
        'Escribe en metal',
        'Escribe en plástico',
        'Escribe en cerámica',
        'Escribe en caucho',
        'Escribe en cuero',
        'Escribe en OHP'
      ]
    },
    {
      codigo: 'BMA-015',
      material: 'Base de alcohol',
      color: 'Azul',
      caracteristicas: [
        'Punta fina 1.5mm',
        'Tinta permanente',
        'Tipo Sharpie',
        'Secado rápido'
      ],
      aplicaciones: [
        'Escribe en papel',
        'Escribe en metal',
        'Escribe en plástico',
        'Escribe en cerámica',
        'Escribe en caucho',
        'Escribe en cuero',
        'Escribe en OHP'
      ]
    }
  ]
};

// Exportar todas las categorías de marcadores
export const marcadoresIndustriales: MarcadoresIndustriales[] = [
  marcadoresBaseAceite,
  marcadoresBaseAlcohol
];
