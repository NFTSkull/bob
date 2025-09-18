'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { trackClick } from '@/lib/analytics';

interface ContactBlockProps {
  title?: string;
  subtitle?: string;
  showMap?: boolean;
  className?: string;
}

const contactInfo = {
  email: 'ventas@bobsolution.com',
  phone: '81 2509 0913',
  instagram: '@bobcoperation',
  contact: 'Ing. Edgar Castillo',
  address: 'Monterrey, Nuevo León, México',
  hours: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
};

export default function ContactBlock({
  title = 'Contáctanos',
  subtitle = 'Estamos aquí para ayudarte con tus necesidades de EPP y consumibles industriales',
  showMap = true,
  className
}: ContactBlockProps) {
  const handleContactClick = (type: string, value: string) => {
    trackClick(`Contact ${type}`, 'contact_info');
  };

  return (
    <section className={cn('py-16', className)}>
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      onClick={() => handleContactClick('email', contactInfo.email)}
                      className="text-accent hover:text-accent-dark transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Teléfono</h4>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      onClick={() => handleContactClick('phone', contactInfo.phone)}
                      className="text-accent hover:text-accent-dark transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Instagram</h4>
                    <a
                      href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                      onClick={() => handleContactClick('instagram', contactInfo.instagram)}
                      className="text-accent hover:text-accent-dark transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contactInfo.instagram}
                    </a>
                  </div>
                </div>

                {/* Contacto */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Contacto</h4>
                    <p className="text-secondary">{contactInfo.contact}</p>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                    <p className="text-secondary">{contactInfo.address}</p>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Horarios</h4>
                    <p className="text-secondary">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA de contacto */}
            <div className="card text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                ¿Necesitas una Cotización?
              </h3>
              <p className="text-secondary mb-6">
                Nuestro equipo está listo para ayudarte con tus necesidades de EPP y consumibles industriales.
              </p>
              <Link
                href="/contacto"
                onClick={() => handleContactClick('contact_page', 'contacto')}
                className="btn-primary text-lg px-8 py-4"
                aria-label="Ir a página de contacto"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>

          {/* Mapa */}
          {showMap && (
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-6">
                Ubicación
              </h3>
              
              <div className="relative w-full h-96 bg-primary-light rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.123456789!2d-100.3161!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c0b8c0c0c0c0%3A0x0c0c0c0c0c0c0c0c!2sMonterrey%2C%20Nuevo%20Le%C3%B3n%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                  className="w-full h-full border-0"
                  title="Ubicación de BobCoperation en Monterrey"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              
              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=Monterrey,Nuevo+León,México"
                  onClick={() => handleContactClick('map', 'google_maps')}
                  className="text-accent hover:text-accent-dark transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
