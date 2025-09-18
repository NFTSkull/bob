'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { trackClick } from '@/lib/analytics';
import { contactInfo, industries } from '@/data';

export default function Footer() {
  const handleFooterClick = (element: string) => {
    trackClick(element, 'footer');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-light border-t border-secondary-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-dark font-bold text-xl">B</span>
              </div>
              <span className="text-white font-bold text-xl">BobCoperation</span>
            </div>
            
            <p className="text-secondary text-sm leading-relaxed">
              EPP y consumibles industriales con cumplimiento y entrega a tiempo. 
              Abasto confiable para empresas, maquila y almacenes.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                onClick={() => handleFooterClick('instagram')}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/20 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
              
              <a
                href={`mailto:${contactInfo.email}`}
                onClick={() => handleFooterClick('email')}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/20 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Soluciones */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Soluciones</h3>
            <nav className="space-y-2" role="navigation">
              <Link
                href="/soluciones/guantes"
                onClick={() => handleFooterClick('guantes')}
                className="block text-secondary hover:text-accent transition-colors text-sm"
              >
                Guantes Industriales
              </Link>
              <Link
                href="/soluciones/proteccion-visual-auditiva"
                onClick={() => handleFooterClick('proteccion_visual')}
                className="block text-secondary hover:text-accent transition-colors text-sm"
              >
                Protección Visual y Auditiva
              </Link>
              <Link
                href="/soluciones/empaque-consumibles"
                onClick={() => handleFooterClick('empaque')}
                className="block text-secondary hover:text-accent transition-colors text-sm"
              >
                Empaque y Consumibles
              </Link>
              <Link
                href="/soluciones/ergonomia-proteccion"
                onClick={() => handleFooterClick('ergonomia')}
                className="block text-secondary hover:text-accent transition-colors text-sm"
              >
                Ergonomía y Protección
              </Link>
              <Link
                href="/soluciones/calzado-seguridad"
                onClick={() => handleFooterClick('calzado')}
                className="block text-secondary hover:text-accent transition-colors text-sm"
              >
                Calzado de Seguridad
              </Link>
              <Link
                href="/soluciones/marcadores-industriales"
                onClick={() => handleFooterClick('marcadores')}
                className="block text-secondary hover:text-accent transition-colors text-sm"
              >
                Marcadores Industriales
              </Link>
            </nav>
          </div>

          {/* Industrias */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Industrias</h3>
            <nav className="space-y-2" role="navigation">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industrias/${industry.slug}`}
                  onClick={() => handleFooterClick(industry.name)}
                  className="block text-secondary hover:text-accent transition-colors text-sm"
                >
                  {industry.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-secondary text-sm">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-secondary text-sm">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <p className="text-secondary text-sm">{contactInfo.contact}</p>
                </div>
              </div>
            </div>
            
            {/* CTA de contacto */}
            <div className="pt-4">
              <Link
                href="/contacto"
                onClick={() => handleFooterClick('contacto_footer')}
                className="btn-secondary text-sm px-6 py-3"
                aria-label="Ir a página de contacto"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-secondary-dark mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-secondary text-sm">
              © {currentYear} BobCoperation. Todos los derechos reservados.
            </div>
            
            {/* Enlaces legales */}
            <nav className="flex space-x-6" role="navigation">
              <Link
                href="/aviso-privacidad"
                onClick={() => handleFooterClick('aviso_privacidad')}
                className="text-secondary hover:text-accent transition-colors text-sm"
              >
                Aviso de Privacidad
              </Link>
              <Link
                href="/terminos-condiciones"
                onClick={() => handleFooterClick('terminos')}
                className="text-secondary hover:text-accent transition-colors text-sm"
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/sitemap.xml"
                onClick={() => handleFooterClick('sitemap')}
                className="text-secondary hover:text-accent transition-colors text-sm"
              >
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
