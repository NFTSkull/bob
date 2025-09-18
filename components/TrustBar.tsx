'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TrustBarProps {
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function TrustBar({
  items,
  title = 'Por qué Confiar en BobCoperation',
  subtitle = 'Comprometidos con la calidad y cumplimiento',
  className
}: TrustBarProps) {
  return (
    <section className={cn('py-16 bg-primary-light', className)}>
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

        {/* Grid de elementos de confianza */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Icono */}
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <span className="text-3xl">{item.icon}</span>
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              
              <p className="text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente para mostrar normas y certificaciones
interface CertificationsProps {
  certifications: Array<{
    name: string;
    description: string;
    logo?: string;
  }>;
  className?: string;
}

export function Certifications({ certifications, className }: CertificationsProps) {
  return (
    <div className={cn('py-12', className)}>
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Normas y Certificaciones
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="card text-center">
              {cert.logo && (
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              
              <h4 className="text-lg font-semibold text-white mb-2">
                {cert.name}
              </h4>
              
              <p className="text-secondary text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente para estadísticas
interface StatsProps {
  stats: Array<{
    number: string;
    label: string;
    description?: string;
  }>;
  className?: string;
}

export function Stats({ stats, className }: StatsProps) {
  return (
    <div className={cn('py-12 bg-accent/10', className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-secondary text-sm">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente para testimonios
interface TestimonialProps {
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar?: string;
  };
  className?: string;
}

export function Testimonial({ testimonial, className }: TestimonialProps) {
  return (
    <div className={cn('card text-center', className)}>
      <div className="mb-6">
        <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.017-9.57V2.5C16.731 2.5 12.5 6.731 12.5 12.5V21h1.517zm-10.017 0v-7.391c0-5.704 3.731-9.57 9.017-9.57V2.5C6.731 2.5 2.5 6.731 2.5 12.5V21H4z"/>
        </svg>
      </div>
      
      <blockquote className="text-lg text-secondary mb-6 italic">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flex items-center justify-center space-x-4">
        {testimonial.avatar && (
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div className="text-left">
          <div className="text-white font-semibold">
            {testimonial.author}
          </div>
          <div className="text-secondary text-sm">
            {testimonial.position} - {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}
