import type { Metadata } from 'next';
import { generateMetadata as generatePageMetadata, generateFAQStructuredData } from '@/lib/metadata';
import { pageMetadata, faqData } from '@/data';

export const metadata: Metadata = generatePageMetadata(pageMetadata.faq);

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateFAQStructuredData(faqData)
        }}
      />

      {/* Hero Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Respuestas a las preguntas más comunes sobre nuestros productos, 
              entregas y servicios
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqData.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte con cualquier 
            pregunta adicional que puedas tener.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="btn-primary text-lg px-8 py-4"
            >
              Contactar Soporte
            </a>
            <a
              href="mailto:ventas@bobsolution.com"
              className="btn-secondary text-lg px-8 py-4"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
