'use client';

import { ProductCategory } from '@/data/products';
import { cn } from '@/lib/utils';
import DetailedProductCard from './DetailedProductCard';

interface CategoryAccordionProps {
  category: ProductCategory;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export default function CategoryAccordion({ 
  category, 
  isOpen, 
  onToggle, 
  className 
}: CategoryAccordionProps) {
  return (
    <div 
      id={`category-${category.id}`}
      className={cn(
        "border border-gray-300/40 rounded-2xl overflow-hidden shadow-lg bg-gray-50/20 transition-all duration-500",
        isOpen ? "shadow-2xl shadow-accent/10 border-accent/30" : "hover:shadow-xl hover:border-accent/20",
        className
      )}
    >
      {/* Category Header - Clickable */}
      <button
        onClick={onToggle}
        className={cn(
          "w-full text-left p-8 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary",
          isOpen 
            ? "bg-gradient-to-r from-accent/10 to-accent/5 border-b border-accent/20" 
            : "bg-gray-100/80 hover:bg-gray-200/90"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className={cn(
              "flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-300",
              isOpen 
                ? "bg-accent/20 scale-110" 
                : "bg-accent-muted/80 group-hover:bg-accent/20"
            )}>
              <svg
                className={cn(
                  "w-8 h-8 transition-colors duration-300",
                  isOpen ? "text-accent-dark" : "text-accent"
                )}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={category.icon} />
              </svg>
            </div>
            <div>
              <h3 className={cn(
                "text-2xl font-bold mb-2 transition-colors duration-300",
                isOpen ? "text-accent-dark" : "text-text-dark group-hover:text-accent"
              )}>
                {category.name}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed max-w-2xl">
                {category.description}
              </p>
              <div className="mt-3 flex items-center space-x-4">
                <span className={cn(
                  "font-semibold text-sm transition-colors duration-300",
                  isOpen ? "text-accent-dark" : "text-accent"
                )}>
                  {category.products.length} productos disponibles
                </span>
                <div className={cn(
                  "h-4 w-px transition-colors duration-300",
                  isOpen ? "bg-accent-dark/50" : "bg-accent/50"
                )} />
                <span className="text-gray-600 text-sm">
                  Especificaciones técnicas completas
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className={cn(
                "font-bold text-lg transition-colors duration-300",
                isOpen ? "text-accent-dark" : "text-accent-dark"
              )}>
                {isOpen ? 'Ocultar' : 'Ver'} Productos
              </div>
              <div className="text-gray-600 text-sm">
                {isOpen ? 'Contraer lista' : 'Expandir catálogo'}
              </div>
            </div>
            <div className={cn(
              "transition-all duration-500",
              isOpen 
                ? "rotate-180 text-accent-dark scale-110" 
                : "rotate-0 text-accent hover:scale-110"
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
        "transition-all duration-700 ease-in-out overflow-hidden",
        isOpen ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="p-8 bg-gradient-to-br from-gray-100/95 to-gray-50/95">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent flex-1" />
              <span className="text-accent-dark font-semibold text-sm uppercase tracking-wider px-4">
                Catálogo Completo
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent flex-1" />
            </div>
            <p className="text-center text-gray-600 text-sm">
              Especificaciones técnicas detalladas para cada producto
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {category.products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <DetailedProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}