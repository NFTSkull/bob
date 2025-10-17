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
      "group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-bob-blue-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
      className
    )}>
      <div className="aspect-video bg-gradient-to-br from-bob-blue-50 to-bob-blue-100 relative overflow-hidden">
        {product.image && (
          <img 
            src={product.image} 
            alt={`${product.name} - ${product.description}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-xs text-bob-green-500 font-semibold uppercase tracking-wider mb-1">
            {product.subcategory || product.category}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-bob-blue-500 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-bob-gray-500 mb-4 line-clamp-3">
          {product.description}
        </p>

        {product.specifications && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-bob-green-500 uppercase tracking-wide mb-2">
              Especificaciones
            </h4>
            <ul className="text-xs text-bob-gray-500 space-y-1">
              {product.specifications.slice(0, 3).map((spec, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1 h-1 bg-bob-green-500 rounded-full mr-2 flex-shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.applications && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-bob-green-500 uppercase tracking-wide mb-2">
              Aplicaciones
            </h4>
            <div className="flex flex-wrap gap-1">
              {product.applications.slice(0, 3).map((app, index) => (
                <span
                  key={index}
                  className="text-xs bg-bob-green-50 text-bob-green-600 px-2 py-1 rounded-md"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-xs text-bob-gray-500">
            {product.codes && product.codes.length > 0 && (
              <span className="font-mono">Código: {product.codes[0]}</span>
            )}
          </div>
          <button className="text-xs bg-bob-blue-500 text-white font-semibold px-3 py-1.5 rounded-md hover:bg-bob-green-500 transition-colors">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
}