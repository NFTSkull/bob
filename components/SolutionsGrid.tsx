'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { trackClick } from '@/lib/analytics';

interface SolutionCard {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  icon: string;
  bullets: string[];
  cta: string;
}

interface SolutionsGridProps {
  solutions: SolutionCard[];
  title?: string;
  subtitle?: string;
}

export default function SolutionsGrid({
  solutions,
  title = 'Nuestras Soluciones',
  subtitle = 'Equipos de protección personal y consumibles industriales para todas las industrias'
}: SolutionsGridProps) {
  const handleCardClick = (solutionTitle: string) => {
    trackClick(solutionTitle, 'solution_card');
  };

  const handleCTAClick = (ctaText: string, solutionTitle: string) => {
    trackClick(`${ctaText} - ${solutionTitle}`, 'solution_cta');
  };

  return (
    <section className="py-16 bg-primary-light">
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

        {/* Grid de soluciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={cn(
                'card group hover:scale-105 transition-all duration-300',
                'bg-primary-light border-secondary-dark'
              )}
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
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-secondary text-sm leading-relaxed">
                  {solution.description}
                </p>

                {/* Bullets de uso */}
                <ul className="space-y-2">
                  {solution.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-secondary text-sm">{bullet}</span>
                    </li>
                  ))}
                  {solution.bullets.length > 3 && (
                    <li className="text-secondary text-sm italic">
                      +{solution.bullets.length - 3} aplicaciones más
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <div className="pt-4">
                  <Link
                    href={solution.href}
                    onClick={() => handleCTAClick(solution.cta, solution.title)}
                    className="inline-flex items-center justify-center w-full bg-accent text-primary-dark font-semibold py-3 px-4 rounded-lg hover:bg-accent-dark transition-colors group-hover:shadow-lg"
                    aria-label={`${solution.cta} - ${solution.title}`}
                  >
                    {solution.cta}
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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

        {/* CTA adicional */}
        <div className="text-center mt-12">
          <Link
            href="/soluciones"
            onClick={() => handleCardClick('Ver todas las soluciones')}
            className="btn-secondary text-lg px-8 py-4"
            aria-label="Ver todas las soluciones"
          >
            Ver todas las soluciones
          </Link>
        </div>
      </div>
    </section>
  );
}
