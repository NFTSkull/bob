'use client';

import { useState } from 'react';
import { ProductCategory } from '@/data/products';
import { cn } from '@/lib/utils';
import DetailedProductCard from './DetailedProductCard';

interface CategoryAccordionProps {
  category: ProductCategory;
  className?: string;
}

export default function CategoryAccordion({ category, className }: CategoryAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("border border-white/10 rounded-2xl overflow-hidden", className)}>
      {/* Category Header - Clickable */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
              <svg
                className="w-8 h-8 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={category.icon} />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                {category.description}
              </p>
              <div className="mt-3 flex items-center space-x-4">
                <span className="text-accent font-semibold text-sm">
                  {category.products.length} productos disponibles
                </span>
                <div className="h-4 w-px bg-accent/30" />
                <span className="text-gray-400 text-sm">
                  Especificaciones técnicas completas
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-accent font-bold text-lg">
                {isOpen ? 'Ocultar' : 'Ver'} Productos
              </div>
              <div className="text-gray-400 text-sm">
                {isOpen ? 'Contraer lista' : 'Expandir catálogo'}
              </div>
            </div>
            <div className={cn(
              "text-accent transition-transform duration-300",
              isOpen ? "rotate-180" : "rotate-0"
            )}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      <div className={cn(
        "transition-all duration-500 overflow-hidden",
        isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="p-8 bg-gradient-to-br from-primary-light/50 to-primary/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {category.products.map((product) => (
              <DetailedProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}