'use client';

import { useState, useCallback } from 'react';

export interface CategoryState {
  [categoryId: string]: boolean;
}

export function useCategoryNavigation() {
  const [openCategories, setOpenCategories] = useState<CategoryState>({});

  const toggleCategory = useCallback((categoryId: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  }, []);

  const openCategory = useCallback((categoryId: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: true
    }));
  }, []);

  const closeCategory = useCallback((categoryId: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: false
    }));
  }, []);

  const closeAllCategories = useCallback(() => {
    setOpenCategories({});
  }, []);

  const isCategoryOpen = useCallback((categoryId: string) => {
    return openCategories[categoryId] || false;
  }, [openCategories]);

  const scrollToCategory = useCallback((categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }, []);

  const navigateToCategory = useCallback((categoryId: string) => {
    // Abrir la categoría
    openCategory(categoryId);
    
    // Scroll suave después de un pequeño delay para que la animación funcione
    setTimeout(() => {
      scrollToCategory(categoryId);
    }, 100);
  }, [openCategory, scrollToCategory]);

  return {
    openCategories,
    toggleCategory,
    openCategory,
    closeCategory,
    closeAllCategories,
    isCategoryOpen,
    scrollToCategory,
    navigateToCategory
  };
}
