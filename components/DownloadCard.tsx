'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { trackCatalogDownload } from '@/lib/analytics';

interface DownloadCardProps {
  title: string;
  description: string;
  fileUrl: string;
  fileName: string;
  fileSize?: string;
  fileType?: string;
  icon?: string;
  className?: string;
}

export default function DownloadCard({
  title,
  description,
  fileUrl,
  fileName,
  fileSize,
  fileType = 'PDF',
  icon = '📄',
  className
}: DownloadCardProps) {
  const handleDownload = () => {
    trackCatalogDownload();
    
    // Crear enlace temporal para descarga
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={cn('card group hover:scale-105 transition-all duration-300', className)}>
      <div className="flex items-start space-x-4">
        {/* Icono */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center text-3xl">
            {icon}
          </div>
        </div>

        {/* Contenido */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          
          <p className="text-secondary text-sm mb-4 leading-relaxed">
            {description}
          </p>

          {/* Información del archivo */}
          <div className="flex items-center space-x-4 text-sm text-secondary mb-4">
            <span className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{fileType}</span>
            </span>
            
            {fileSize && (
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                <span>{fileSize}</span>
              </span>
            )}
          </div>

          {/* Botón de descarga */}
          <button
            onClick={handleDownload}
            className="inline-flex items-center space-x-2 bg-accent text-primary-dark font-semibold py-3 px-6 rounded-lg hover:bg-accent-dark transition-colors group-hover:shadow-lg"
            aria-label={`Descargar ${fileName}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Descargar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente para múltiples descargas
interface DownloadGridProps {
  downloads: DownloadCardProps[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function DownloadGrid({
  downloads,
  title = 'Documentos Descargables',
  subtitle = 'Catálogos y fichas técnicas disponibles',
  className
}: DownloadGridProps) {
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

        {/* Grid de descargas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((download, index) => (
            <DownloadCard
              key={index}
              {...download}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente para vista previa de PDF
interface PDFPreviewProps {
  fileUrl: string;
  title: string;
  className?: string;
}

export function PDFPreview({ fileUrl, title, className }: PDFPreviewProps) {
  return (
    <div className={cn('card', className)}>
      <h3 className="text-xl font-semibold text-white mb-4">
        Vista Previa: {title}
      </h3>
      
      <div className="relative w-full h-96 bg-primary-light rounded-lg overflow-hidden">
        <iframe
          src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full h-full border-0"
          title={`Vista previa de ${title}`}
          loading="lazy"
        />
        
        {/* Overlay para indicar que es una vista previa */}
        <div className="absolute top-4 right-4 bg-accent text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
          Vista Previa
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <button
          onClick={() => {
            trackCatalogDownload();
            window.open(fileUrl, '_blank');
          }}
          className="btn-primary"
          aria-label={`Abrir ${title} en nueva ventana`}
        >
          Abrir en Nueva Ventana
        </button>
      </div>
    </div>
  );
}
