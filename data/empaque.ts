// Tipos para empaque y consumibles
export interface EmpaqueConsumible {
  id: string;
  name: string;
  description: string;
  slug: string;
  categoria: 'cinta' | 'pelicula' | 'poliestretch' | 'trapo' | 'polifoam';
  productos: ProductoEmpaque[];
}

export interface ProductoEmpaque {
  codigo: string;
  medida?: string;
  calibre?: string;
  peso?: string;
  material: string;
  color: string;
  empaque: string;
  notas?: string;
  aplicaciones?: string[];
}

// Película Poliestretch
export const poliestretch: EmpaqueConsumible = {
  id: 'poliestretch',
  name: 'Película Poliestretch',
  description: 'Película estirable para empaque y protección de productos',
  slug: 'poliestretch',
  categoria: 'poliestretch',
  productos: [
    {
      codigo: 'BPP-003',
      medida: '18"',
      calibre: '80',
      peso: '2.5 kg',
      material: 'Polietileno',
      color: 'Transparente',
      empaque: 'C/4 pz',
      aplicaciones: [
        'Empaque de productos',
        'Protección contra humedad',
        'Estabilización de carga',
        'Almacenamiento'
      ]
    },
    {
      codigo: 'BPP-004',
      medida: '20"',
      calibre: '80',
      peso: '3.0 kg',
      material: 'Polietileno',
      color: 'Transparente',
      empaque: 'C/4 pz',
      aplicaciones: [
        'Empaque de productos',
        'Protección contra humedad',
        'Estabilización de carga',
        'Almacenamiento'
      ]
    },
    {
      codigo: 'BPP-005',
      medida: '12"',
      calibre: '60',
      peso: '1.8 kg',
      material: 'Polietileno',
      color: 'Transparente',
      empaque: 'C/6 pz',
      aplicaciones: [
        'Empaque de productos pequeños',
        'Protección contra humedad',
        'Estabilización de carga',
        'Almacenamiento'
      ]
    }
  ]
};

// Cinta Adhesiva
export const cintaAdhesiva: EmpaqueConsumible = {
  id: 'cinta-adhesiva',
  name: 'Cinta Adhesiva',
  description: 'Cinta adhesiva para sellado y empaque',
  slug: 'cinta-adhesiva',
  categoria: 'cinta',
  productos: [
    {
      codigo: 'BCA-001',
      medida: '48mm x 50m',
      material: 'PVC',
      color: 'Transparente',
      empaque: 'C/12 rollos',
      aplicaciones: [
        'Sellado de cajas',
        'Empaque general',
        'Protección temporal',
        'Identificación'
      ]
    },
    {
      codigo: 'BCA-002',
      medida: '48mm x 50m',
      material: 'PVC',
      color: 'Blanco',
      empaque: 'C/12 rollos',
      aplicaciones: [
        'Sellado de cajas',
        'Empaque general',
        'Protección temporal',
        'Identificación'
      ]
    },
    {
      codigo: 'BCA-003',
      medida: '24mm x 50m',
      material: 'PVC',
      color: 'Transparente',
      empaque: 'C/24 rollos',
      aplicaciones: [
        'Sellado de cajas pequeñas',
        'Empaque general',
        'Protección temporal',
        'Identificación'
      ]
    }
  ]
};

// Película Biodegradable
export const peliculaBiodegradable: EmpaqueConsumible = {
  id: 'pelicula-biodegradable',
  name: 'Película Biodegradable',
  description: 'Película biodegradable para empaque sustentable',
  slug: 'pelicula-biodegradable',
  categoria: 'pelicula',
  productos: [
    {
      codigo: 'BPB-001',
      medida: '30cm',
      calibre: '20 micras',
      material: 'PLA Biodegradable',
      color: 'Transparente',
      empaque: 'C/100 pz',
      aplicaciones: [
        'Empaque sustentable',
        'Protección de alimentos',
        'Empaque biodegradable',
        'Cuidado del medio ambiente'
      ]
    },
    {
      codigo: 'BPB-002',
      medida: '45cm',
      calibre: '20 micras',
      material: 'PLA Biodegradable',
      color: 'Transparente',
      empaque: 'C/100 pz',
      aplicaciones: [
        'Empaque sustentable',
        'Protección de alimentos',
        'Empaque biodegradable',
        'Cuidado del medio ambiente'
      ]
    }
  ]
};

// Trapo Industrial
export const trapoIndustrial: EmpaqueConsumible = {
  id: 'trapo-industrial',
  name: 'Trapo Industrial',
  description: 'Trapo para limpieza y mantenimiento industrial',
  slug: 'trapo-industrial',
  categoria: 'trapo',
  productos: [
    {
      codigo: 'BTR-001',
      medida: '30cm x 30cm',
      material: 'Microfibra',
      color: 'Blanco',
      empaque: 'C/50 pz',
      aplicaciones: [
        'Limpieza industrial',
        'Mantenimiento',
        'Absorción de líquidos',
        'Limpieza de superficies'
      ]
    },
    {
      codigo: 'BTR-002',
      medida: '40cm x 40cm',
      material: 'Microfibra',
      color: 'Azul',
      empaque: 'C/50 pz',
      aplicaciones: [
        'Limpieza industrial',
        'Mantenimiento',
        'Absorción de líquidos',
        'Limpieza de superficies'
      ]
    }
  ]
};

// Polifoam/Espuma de Polietileno
export const polifoam: EmpaqueConsumible = {
  id: 'polifoam',
  name: 'Polifoam - Espuma de Polietileno',
  description: 'Espuma de polietileno con celdas cerradas para protección y acolchonamiento',
  slug: 'polifoam',
  categoria: 'polifoam',
  productos: [
    {
      codigo: 'BPF-001',
      medida: '1m x 1m',
      calibre: '6mm',
      material: 'Polietileno expandido',
      color: 'Blanco',
      empaque: 'C/10 hojas',
      aplicaciones: [
        'Productos químicos',
        'Pinchazos',
        'Ensambles',
        'Inspección',
        'Fabricación ligera',
        'Movimiento de materiales',
        'Manejo de objetos abrasivos',
        'Salpicaduras de partículas candentes',
        'Almacenes',
        'Talleres'
      ],
      notas: 'Celdas cerradas con aire atrapado; provee acolchonamiento, absorción de vibración, compresión y golpe'
    },
    {
      codigo: 'BPF-002',
      medida: '1m x 1m',
      calibre: '10mm',
      material: 'Polietileno expandido',
      color: 'Blanco',
      empaque: 'C/10 hojas',
      aplicaciones: [
        'Productos químicos',
        'Pinchazos',
        'Ensambles',
        'Inspección',
        'Fabricación ligera',
        'Movimiento de materiales',
        'Manejo de objetos abrasivos',
        'Salpicaduras de partículas candentes',
        'Almacenes',
        'Talleres'
      ],
      notas: 'Celdas cerradas con aire atrapado; provee acolchonamiento, absorción de vibración, compresión y golpe'
    },
    {
      codigo: 'BPF-003',
      medida: '1m x 1m',
      calibre: '20mm',
      material: 'Polietileno expandido',
      color: 'Blanco',
      empaque: 'C/5 hojas',
      aplicaciones: [
        'Productos químicos',
        'Pinchazos',
        'Ensambles',
        'Inspección',
        'Fabricación ligera',
        'Movimiento de materiales',
        'Manejo de objetos abrasivos',
        'Salpicaduras de partículas candentes',
        'Almacenes',
        'Talleres'
      ],
      notas: 'Celdas cerradas con aire atrapado; provee acolchonamiento, absorción de vibración, compresión y golpe'
    }
  ]
};

// Exportar todas las categorías de empaque
export const empaqueConsumibles: EmpaqueConsumible[] = [
  poliestretch,
  cintaAdhesiva,
  peliculaBiodegradable,
  trapoIndustrial,
  polifoam
];
