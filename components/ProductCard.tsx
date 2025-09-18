'use client';

import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={cn(
      "group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10",
      className
    )}>
      <div className="aspect-video bg-gradient-to-br from-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">
            {product.subcategory || product.category}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {product.description}
        </p>

        {product.specifications && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
              Especificaciones
            </h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {product.specifications.slice(0, 3).map((spec, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1 h-1 bg-accent rounded-full mr-2 flex-shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.applications && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
              Aplicaciones
            </h4>
            <div className="flex flex-wrap gap-1">
              {product.applications.slice(0, 3).map((app, index) => (
                <span
                  key={index}
                  className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="text-xs text-gray-400">
            {product.code && (
              <span className="font-mono">Código: {product.code}</span>
            )}
          </div>
          <button className="text-xs bg-accent text-primary font-semibold px-3 py-1.5 rounded-md hover:bg-accent-dark transition-colors">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
}