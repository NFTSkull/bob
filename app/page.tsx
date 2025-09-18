import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SolutionsGrid from '@/components/SolutionsGrid';
import TrustBar from '@/components/TrustBar';
import ContactBlock from '@/components/ContactBlock';
import DownloadCard from '@/components/DownloadCard';
import QuoteForm from '@/components/QuoteForm';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { pageMetadata, pillars, industries } from '@/data';

export const metadata: Metadata = generatePageMetadata(pageMetadata.home);

// Datos para el hero
const heroData = {
  title: 'EPP y consumibles industriales con cumplimiento y entrega a tiempo.',
  subtitle: 'Abasto confiable para empresas, maquila y almacenes.',
  primaryCTA: {
    text: 'Cotizar ahora',
    href: '#cotizar'
  },
  secondaryCTA: {
    text: 'Descargar catálogo',
    href: '/docs/catalogo-bobcoperation.pdf'
  }
};

// Datos para el grid de soluciones
const solutionsData = [
  {
    id: 'guantes',
    title: 'Guantes Industriales',
    description: 'Protección completa para las manos con guantes especializados para diferentes aplicaciones industriales.',
    href: '/soluciones/guantes',
    image: '/images/guantes-industriales.jpg',
    icon: '🧤',
    bullets: [
      'Guantes anticorte nivel 5',
      'Guantes PU recubiertos',
      'Guantes antiestático',
      'Guantes de algodón',
      'Guantes nitrilo desechable'
    ],
    cta: 'Ver Guantes'
  },
  {
    id: 'proteccion-visual',
    title: 'Protección Visual y Auditiva',
    description: 'Lentes de protección y tapones auditivos para ambientes industriales ruidosos.',
    href: '/soluciones/proteccion-visual-auditiva',
    image: '/images/proteccion-visual.jpg',
    icon: '👓',
    bullets: [
      'Lentes de policarbonato',
      'Tapones con cordón',
      'Protección UV',
      'Resistente a impactos'
    ],
    cta: 'Ver Protección'
  },
  {
    id: 'empaque',
    title: 'Empaque y Consumibles',
    description: 'Soluciones de empaque y consumibles industriales para protección y organización.',
    href: '/soluciones/empaque-consumibles',
    image: '/images/empaque-consumibles.jpg',
    icon: '📦',
    bullets: [
      'Película poliestretch',
      'Cinta adhesiva',
      'Película biodegradable',
      'Polifoam de protección'
    ],
    cta: 'Ver Empaque'
  },
  {
    id: 'ergonomia',
    title: 'Ergonomía y Protección',
    description: 'Equipos de protección corporal para trabajos pesados y actividades industriales.',
    href: '/soluciones/ergonomia-proteccion',
    image: '/images/ergonomia-proteccion.jpg',
    icon: '🦺',
    bullets: [
      'Fajas sacrolumbares',
      'Mandiles de mezclilla',
      'Mangas de protección',
      'Prevención de lesiones'
    ],
    cta: 'Ver Ergonomía'
  },
  {
    id: 'calzado',
    title: 'Calzado de Seguridad',
    description: 'Calzado con punta de acero conforme a NOM-113 para protección de los pies.',
    href: '/soluciones/calzado-seguridad',
    image: '/images/calzado-seguridad.jpg',
    icon: '👢',
    bullets: [
      'Punta de acero',
      'Conforme NOM-113',
      'Suela antideslizante',
      'Resistente a impactos'
    ],
    cta: 'Ver Calzado'
  },
  {
    id: 'marcadores',
    title: 'Marcadores Industriales',
    description: 'Marcadores permanentes base aceite y alcohol para marcado industrial.',
    href: '/soluciones/marcadores-industriales',
    image: '/images/marcadores-industriales.jpg',
    icon: '🖊️',
    bullets: [
      'Base aceite permanente',
      'Base alcohol tipo Sharpie',
      'Múltiples colores',
      'Resistente al agua'
    ],
    cta: 'Ver Marcadores'
  }
];

// Datos para industrias
const industriesData = industries.map(industry => ({
  icon: industry.icon,
  title: industry.name,
  description: industry.description
}));

// Datos para descargas
const downloadsData = [
  {
    title: 'Catálogo Completo',
    description: 'Catálogo completo de productos EPP y consumibles industriales con especificaciones técnicas.',
    fileUrl: '/docs/catalogo-bobcoperation.pdf',
    fileName: 'catalogo-bobcoperation.pdf',
    fileSize: '2.5 MB',
    fileType: 'PDF',
    icon: '📄'
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero {...heroData} />
      
      {/* Grid de Soluciones */}
      <SolutionsGrid solutions={solutionsData} />
      
      {/* Industrias Servidas */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industrias que Servimos
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              EPP especializado para diferentes sectores industriales
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industriesData.map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <span className="text-2xl">{industry.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-sm group-hover:text-accent transition-colors">
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Por qué BobCoperation */}
      <TrustBar
        items={pillars.map(pillar => ({
          icon: pillar.icon,
          title: pillar.title,
          description: pillar.description
        }))}
      />
      
      {/* Sección de confianza */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Confianza y Cumplimiento
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Todos nuestros productos cumplen con las normas y estándares internacionales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Normas NOM-113
              </h3>
              <p className="text-secondary text-sm">
                Calzado con punta de acero conforme a estándares mexicanos e internacionales
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Calidad Garantizada
              </h3>
              <p className="text-secondary text-sm">
                Todos nuestros productos pasan por rigurosos controles de calidad
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Entregas a Tiempo
              </h3>
              <p className="text-secondary text-sm">
                Comprometidos con entregas puntuales para mantener tu operación sin interrupciones
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Formulario de Cotización */}
      <section id="cotizar" className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solicita tu Cotización
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Completa el formulario y nuestro equipo se pondrá en contacto contigo en las próximas 24 horas
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>
      
      {/* Documentos Descargables */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Documentos Descargables
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Catálogos y fichas técnicas disponibles para descarga
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <DownloadCard {...downloadsData[0]} />
          </div>
        </div>
      </section>
      
      {/* Información de Contacto */}
      <ContactBlock />
    </>
  );
}
