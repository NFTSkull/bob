'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { trackClick } from '@/lib/analytics';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage = '/images/hero-industrial.jpg',
  overlay = true
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCTAClick = (ctaText: string) => {
    trackClick(ctaText, 'cta_button');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Operación industrial"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {overlay && (
          <div className="absolute inset-0 bg-primary/60" />
        )}
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={cn(
          'max-w-4xl mx-auto space-y-8 transform transition-all duration-1000',
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}>
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href={primaryCTA.href}
              onClick={() => handleCTAClick(primaryCTA.text)}
              className="btn-primary text-lg px-8 py-4 min-w-[200px]"
              aria-label={`${primaryCTA.text} - ${title}`}
            >
              {primaryCTA.text}
            </Link>
            
            <Link
              href={secondaryCTA.href}
              onClick={() => handleCTAClick(secondaryCTA.text)}
              className="btn-secondary text-lg px-8 py-4 min-w-[200px]"
              aria-label={`${secondaryCTA.text} - ${title}`}
            >
              {secondaryCTA.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
