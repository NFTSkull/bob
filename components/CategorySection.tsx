'use client';

import { ProductCategory } from '@/data/products';
import { cn } from '@/lib/utils';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  category: ProductCategory;
  className?: string;
}

export default function CategorySection({ category, className }: CategorySectionProps) {
  return (
    <section className={cn("py-16 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-bob-blue-50 rounded-lg mb-6">
            <svg
              className="w-8 h-8 text-bob-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={category.icon} />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {category.name}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {category.description}
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-bob-blue-500 to-transparent w-24" />
            <span className="text-bob-blue-500 font-semibold text-sm uppercase tracking-wider">
              {category.products.length} Productos
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-bob-blue-500 to-transparent w-24" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}