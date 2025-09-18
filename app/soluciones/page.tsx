import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { pageMetadata } from '@/data';

export const metadata: Metadata = generatePageMetadata(pageMetadata.solutions);

const solutions = [
  {
    id: 'guantes',
    title: 'Guantes Industriales',
    description: 'Protección completa para las manos con guantes especializados para diferentes aplicaciones industriales.',
    href: '/soluciones/guantes',
    image: '/images/guantes-industriales.jpg',
    icon: '🧤',
    categories: [
      'Guantes anticorte nivel 5',
      'Guantes PU recubiertos',
      'Guantes PU sin recubrimiento',
      'Guantes de algodón',
      'Guantes antiestático',
      'Guantes nitrilo desechable'
    ]
  },
  {
    id: 'proteccion-visual',
    title: 'Protección Visual y Auditiva',
    description: 'Lentes de protección y tapones auditivos para ambientes industriales ruidosos.',
    href: '/soluciones/proteccion-visual-auditiva',
    image: '/images/proteccion-visual.jpg',
    icon: '👓',
    categories: [
      'Lentes de policarbonato',
      'Tapones con cordón',
      'Protección UV',
      'Resistente a impactos'
    ]
  },
  {
    id: 'empaque',
    title: 'Empaque y Consumibles',
    description: 'Soluciones de empaque y consumibles industriales para protección y organización.',
    href: '/soluciones/empaque-consumibles',
    image: '/images/empaque-consumibles.jpg',
    icon: '📦',
    categories: [
      'Película poliestretch',
      'Cinta adhesiva',
      'Película biodegradable',
      'Trapo industrial',
      'Polifoam de protección'
    ]
  },
  {
    id: 'ergonomia',
    title: 'Ergonomía y Protección',
    description: 'Equipos de protección corporal para trabajos pesados y actividades industriales.',
    href: '/soluciones/ergonomia-proteccion',
    image: '/images/ergonomia-proteccion.jpg',
    icon: '🦺',
    categories: [
      'Fajas sacrolumbares',
      'Mandiles de mezclilla',
      'Mangas de protección',
      'Prevención de lesiones'
    ]
  },
  {
    id: 'calzado',
    title: 'Calzado de Seguridad',
    description: 'Calzado con punta de acero conforme a NOM-113 para protección de los pies.',
    href: '/soluciones/calzado-seguridad',
    image: '/images/calzado-seguridad.jpg',
    icon: '👢',
    categories: [
      'Punta de acero',
      'Conforme NOM-113',
      'Suela antideslizante',
      'Resistente a impactos'
    ]
  },
  {
    id: 'marcadores',
    title: 'Marcadores Industriales',
    description: 'Marcadores permanentes base aceite y alcohol para marcado industrial.',
    href: '/soluciones/marcadores-industriales',
    image: '/images/marcadores-industriales.jpg',
    icon: '🖊️',
    categories: [
      'Base aceite permanente',
      'Base alcohol tipo Sharpie',
      'Múltiples colores',
      'Resistente al agua'
    ]
  }
];

export default function SolucionesPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestras Soluciones
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Catálogo completo de equipos de protección personal y consumibles industriales 
              para todas las industrias. Calidad, cumplimiento y entrega a tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Soluciones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="card group hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Imagen */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  
                  {/* Icono */}
                  <div className="absolute top-4 right-4 bg-accent text-primary-dark p-3 rounded-full">
                    <span className="text-2xl">{solution.icon}</span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                    {solution.title}
                  </h2>
                  
                  <p className="text-secondary text-sm leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Categorías */}
                  <div className="space-y-2">
                    <h3 className="text-white font-medium text-sm">Categorías disponibles:</h3>
                    <ul className="space-y-1">
                      {solution.categories.slice(0, 3).map((category, catIndex) => (
                        <li key={catIndex} className="flex items-start space-x-2">
                          <span className="text-accent mt-1">•</span>
                          <span className="text-secondary text-sm">{category}</span>
                        </li>
                      ))}
                      {solution.categories.length > 3 && (
                        <li className="text-secondary text-sm italic">
                          +{solution.categories.length - 3} categorías más
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link
                      href={solution.href}
                      className="inline-flex items-center justify-center w-full bg-accent text-primary-dark font-semibold py-3 px-4 rounded-lg hover:bg-accent-dark transition-colors group-hover:shadow-lg"
                    >
                      Ver {solution.title}
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos puede ayudarte a encontrar la solución perfecta 
            para tus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="btn-primary text-lg px-8 py-4"
            >
              Contactar Especialista
            </Link>
            <Link
              href="/docs/catalogo-bobcoperation.pdf"
              className="btn-secondary text-lg px-8 py-4"
            >
              Descargar Catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
