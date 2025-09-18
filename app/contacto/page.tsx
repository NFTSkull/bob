import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import ContactBlock from '@/components/ContactBlock';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { pageMetadata } from '@/data';

export const metadata: Metadata = generatePageMetadata(pageMetadata.contact);

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contacto
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Estamos aquí para ayudarte con tus necesidades de EPP y consumibles industriales. 
              Contacta con nuestro equipo de expertos para obtener la mejor solución.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de Cotización */}
      <section id="cotizar" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solicita tu Cotización
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Completa el formulario y nuestro equipo se pondrá en contacto contigo 
              en las próximas 24 horas
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <ContactBlock />
    </div>
  );
}
