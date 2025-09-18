'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, generateBreadcrumbs } from '@/lib/utils';

interface BreadcrumbProps {
  className?: string;
}

export default function Breadcrumb({ className }: BreadcrumbProps) {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  // No mostrar breadcrumbs en la página de inicio
  if (pathname === '/') {
    return null;
  }

  return (
    <nav
      className={cn('py-4 bg-primary-light border-b border-secondary-dark', className)}
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 text-secondary mx-2"
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
              )}
              
              {index === breadcrumbs.length - 1 ? (
                <span className="text-white font-medium" aria-current="page">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-secondary hover:text-accent transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

// Componente para breadcrumbs estructurados (JSON-LD)
interface StructuredBreadcrumbProps {
  breadcrumbs: Array<{ name: string; href: string }>;
}

export function StructuredBreadcrumb({ breadcrumbs }: StructuredBreadcrumbProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bobcoperation.com'}${crumb.href}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
