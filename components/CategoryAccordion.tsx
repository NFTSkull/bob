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
        "border border-gray-300/60 rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-500",
        isOpen ? "shadow-2xl shadow-yellow-500/10 border-yellow-500/30" : "hover:shadow-xl hover:border-yellow-500/20",
        className
      )}
    >
      {/* Category Header - Clickable */}
      <button
        onClick={onToggle}
        className={cn(
          "w-full text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary",
          "p-4 sm:p-6 lg:p-8", // Responsive padding
          isOpen 
            ? "bg-gradient-to-r from-yellow-50 to-yellow-100/50 border-b border-yellow-200" 
            : "bg-gray-50/80 hover:bg-gray-100/90"
        )}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left side - Icon and content */}
          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 lg:space-x-6">
            <div className={cn(
              "flex items-center justify-center rounded-xl transition-all duration-300 flex-shrink-0 overflow-hidden",
              "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16", // Responsive image size
              isOpen 
                ? "bg-yellow-200 scale-110 shadow-md" 
                : "bg-yellow-100 group-hover:bg-yellow-200 shadow-sm"
            )}>
              <img
                src={category.image}
                alt={`${category.name} - ${category.description}`}
                className={cn(
                  "transition-all duration-300 object-cover",
                  "w-full h-full rounded-xl",
                  isOpen ? "scale-110" : "scale-100"
                )}
                loading="lazy"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-gray-900 heading-transition leading-tight">
                {category.name}
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed paragraph-transition mb-2 sm:mb-3">
                {category.description}
              </p>
              
              {/* Mobile: Stack vertically, Desktop: Horizontal */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className={cn(
                  "font-semibold text-xs sm:text-sm text-hover-gentle",
                  isOpen ? "text-yellow-700" : "text-yellow-600"
                )}>
                  {category.products.length} productos disponibles
                </span>
                <div className={cn(
                  "hidden sm:block h-4 w-px transition-colors duration-300",
                  isOpen ? "bg-yellow-700/50" : "bg-yellow-600/50"
                )} />
                <span className="text-gray-700 text-xs sm:text-sm font-medium text-hover-gentle">
                  Especificaciones técnicas completas
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Action button and arrow */}
          <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
            <div className="text-left sm:text-right">
              <div className={cn(
                "font-bold text-sm sm:text-base lg:text-lg transition-colors duration-300",
                isOpen ? "text-yellow-700" : "text-yellow-600"
              )}>
                {isOpen ? 'Ocultar' : 'Ver'} Productos
              </div>
              <div className="text-gray-700 text-xs sm:text-sm font-medium text-hover-gentle">
                {isOpen ? 'Contraer lista' : 'Expandir catálogo'}
              </div>
            </div>
            <div className={cn(
              "transition-all duration-500 flex-shrink-0",
              "ml-2 sm:ml-0", // Margin adjustment for mobile
              isOpen 
                ? "rotate-180 text-yellow-700 scale-110" 
                : "rotate-0 text-yellow-600 hover:scale-110"
            )}>
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="p-8 bg-gradient-to-br from-gray-50/95 to-white/95">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1" />
              <span className="text-gray-800 font-bold text-sm uppercase tracking-wider px-4 heading-transition">
                Catálogo Completo
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1" />
            </div>
            <p className="text-center text-gray-700 text-sm font-medium paragraph-transition">
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