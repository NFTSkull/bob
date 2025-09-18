import type { Metadata } from 'next';
import TrustBar from '@/components/TrustBar';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { pageMetadata, pillars } from '@/data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Por qué BobCoperation - Ventajas y Beneficios',
  description: 'Descubre por qué BobCoperation es tu mejor opción para EPP y consumibles industriales. Cumplimiento, disponibilidad, entregas a tiempo y asesoría consultiva.',
  keywords: ['ventajas bobcoperation', 'beneficios EPP', 'cumplimiento', 'disponibilidad', 'entregas tiempo', 'asesoría consultiva']
});

export default function PorQueBobCoperationPage() {
  const trustItems = pillars.map(pillar => ({
    icon: pillar.icon,
    title: pillar.title,
    description: pillar.description
  }));

  const additionalBenefits = [
    {
      icon: '🏆',
      title: 'Experiencia Comprobada',
      description: 'Años de experiencia sirviendo a empresas de diferentes industrias con soluciones efectivas.'
    },
    {
      icon: '🔒',
      title: 'Confidencialidad',
      description: 'Manejamos tu información con la máxima confidencialidad y respeto a la privacidad.'
    },
    {
      icon: '📞',
      title: 'Soporte 24/7',
      description: 'Nuestro equipo está disponible para resolver cualquier duda o emergencia que puedas tener.'
    },
    {
      icon: '💰',
      title: 'Precios Competitivos',
      description: 'Ofrecemos los mejores precios del mercado sin comprometer la calidad de nuestros productos.'
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por qué BobCoperation
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Descubre las ventajas que nos hacen tu mejor opción para EPP y consumibles industriales. 
              Comprometidos con la excelencia en cada aspecto de nuestro servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares principales */}
      <TrustBar
        items={trustItems}
        title="Nuestros Pilares Fundamentales"
        subtitle="Los valores que nos distinguen en el mercado"
      />

      {/* Beneficios adicionales */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Beneficios Adicionales
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Más razones para elegir BobCoperation como tu proveedor de confianza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="card text-center group hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Testimonios reales de empresas que confían en nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.017-9.57V2.5C16.731 2.5 12.5 6.731 12.5 12.5V21h1.517zm-10.017 0v-7.391c0-5.704 3.731-9.57 9.017-9.57V2.5C6.731 2.5 2.5 6.731 2.5 12.5V21H4z"/>
                </svg>
              </div>
              <blockquote className="text-lg text-secondary mb-6 italic">
                "Excelente servicio y productos de calidad. Siempre cumplen con los tiempos de entrega."
              </blockquote>
              <div className="text-white font-semibold">
                María González
              </div>
              <div className="text-secondary text-sm">
                Gerente de Compras - Industria Automotriz
              </div>
            </div>

            <div className="card text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.017-9.57V2.5C16.731 2.5 12.5 6.731 12.5 12.5V21h1.517zm-10.017 0v-7.391c0-5.704 3.731-9.57 9.017-9.57V2.5C6.731 2.5 2.5 6.731 2.5 12.5V21H4z"/>
                </svg>
              </div>
              <blockquote className="text-lg text-secondary mb-6 italic">
                "La asesoría técnica que nos brindan es invaluable. Nos ayudan a elegir los productos correctos."
              </blockquote>
              <div className="text-white font-semibold">
                Carlos Rodríguez
              </div>
              <div className="text-secondary text-sm">
                Director de Operaciones - Maquiladora
              </div>
            </div>

            <div className="card text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.017-9.57V2.5C16.731 2.5 12.5 6.731 12.5 12.5V21h1.517zm-10.017 0v-7.391c0-5.704 3.731-9.57 9.017-9.57V2.5C6.731 2.5 2.5 6.731 2.5 12.5V21H4z"/>
                </svg>
              </div>
              <blockquote className="text-lg text-secondary mb-6 italic">
                "Productos que cumplen con todas las normas. La calidad es consistente en cada pedido."
              </blockquote>
              <div className="text-white font-semibold">
                Ana Martínez
              </div>
              <div className="text-secondary text-sm">
                Coordinadora de Seguridad - Planta Industrial
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Números que Hablan
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Resultados que respaldan nuestra experiencia y compromiso
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                500+
              </div>
              <div className="text-white font-semibold mb-1">
                Clientes Satisfechos
              </div>
              <div className="text-secondary text-sm">
                Empresas que confían en nosotros
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                15+
              </div>
              <div className="text-white font-semibold mb-1">
                Años de Experiencia
              </div>
              <div className="text-secondary text-sm">
                En el mercado industrial
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                99%
              </div>
              <div className="text-white font-semibold mb-1">
                Entregas a Tiempo
              </div>
              <div className="text-secondary text-sm">
                Cumplimiento garantizado
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                24h
              </div>
              <div className="text-white font-semibold mb-1">
                Tiempo de Respuesta
              </div>
              <div className="text-secondary text-sm">
                Para cotizaciones
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para Experimentar la Diferencia?
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Únete a las cientos de empresas que ya confían en BobCoperation 
            para sus necesidades de EPP y consumibles industriales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="btn-primary text-lg px-8 py-4"
            >
              Solicitar Cotización
            </a>
            <a
              href="/docs/catalogo-bobcoperation.pdf"
              className="btn-secondary text-lg px-8 py-4"
            >
              Descargar Catálogo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
