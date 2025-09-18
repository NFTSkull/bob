'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { trackClick } from '@/lib/analytics';
import { navigation } from '@/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    trackClick('mobile_menu_toggle', 'navigation');
  };

  const handleNavClick = (itemName: string) => {
    trackClick(itemName, 'navigation');
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-primary/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleNavClick('logo')}
            className="flex items-center space-x-3"
            aria-label="BobCoperation - Inicio"
          >
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-dark font-bold text-xl">B</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              BobCoperation
            </span>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={cn(
                    'text-white hover:text-accent transition-colors font-medium',
                    pathname === item.href && 'text-accent'
                  )}
                >
                  {item.name}
                </Link>
                
                {/* Mega menú para Soluciones */}
                {item.children && item.name === 'Soluciones' && (
                  <div className="absolute top-full left-0 w-96 bg-primary-light border border-secondary-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-4">Nuestras Soluciones</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => handleNavClick(child.name)}
                            className="text-secondary hover:text-accent transition-colors text-sm py-2"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Mega menú para Industrias */}
                {item.children && item.name === 'Industrias' && (
                  <div className="absolute top-full left-0 w-96 bg-primary-light border border-secondary-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-4">Industrias que Servimos</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => handleNavClick(child.name)}
                            className="text-secondary hover:text-accent transition-colors text-sm py-2"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA y menú móvil */}
          <div className="flex items-center space-x-4">
            {/* CTA principal */}
            <Link
              href="/contacto"
              onClick={() => handleNavClick('cotizar_ahora')}
              className="btn-primary hidden sm:inline-flex"
              aria-label="Cotizar ahora"
            >
              Cotizar Ahora
            </Link>

            {/* Botón menú móvil */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors"
              aria-label="Abrir menú de navegación"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden bg-primary-light border-t border-secondary-dark">
            <nav className="py-4 space-y-2" role="navigation">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={cn(
                      'block px-4 py-2 text-white hover:text-accent transition-colors',
                      pathname === item.href && 'text-accent bg-primary/50'
                    )}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Submenú móvil */}
                  {item.children && (
                    <div className="pl-8 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => handleNavClick(child.name)}
                          className="block px-4 py-2 text-secondary hover:text-accent transition-colors text-sm"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* CTA móvil */}
              <div className="px-4 pt-4 border-t border-secondary-dark">
                <Link
                  href="/contacto"
                  onClick={() => handleNavClick('cotizar_ahora_mobile')}
                  className="btn-primary w-full text-center"
                  aria-label="Cotizar ahora"
                >
                  Cotizar Ahora
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
