'use client';

import { ReactNode } from 'react';
import { useScrollReveal, useStaggeredScrollReveal, useTextReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInScale' | 'slideInBottom';
  delay?: number;
  duration?: number;
}

export function ScrollReveal({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 600
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8';
    
    switch (animation) {
      case 'fadeInUp':
        return 'opacity-100 translate-y-0';
      case 'fadeInLeft':
        return 'opacity-100 translate-x-0';
      case 'fadeInRight':
        return 'opacity-100 translate-x-0';
      case 'fadeInScale':
        return 'opacity-100 scale-100';
      case 'slideInBottom':
        return 'opacity-100 translate-y-0';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'fadeInLeft':
        return 'opacity-0 -translate-x-8';
      case 'fadeInRight':
        return 'opacity-0 translate-x-8';
      case 'fadeInScale':
        return 'opacity-0 scale-95';
      case 'slideInBottom':
        return 'opacity-0 translate-y-12';
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...(isVisible ? {} : {})
      }}
    >
      <div className={`${isVisible ? getAnimationClass() : getInitialClass()} transition-all ease-out`}
           style={{ transitionDuration: `${duration}ms` }}>
        {children}
      </div>
    </div>
  );
}

interface StaggeredRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
}

export function StaggeredReveal({ 
  children, 
  className = '', 
  staggerDelay = 100,
  animation = 'fadeInUp'
}: StaggeredRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fadeInLeft':
          return 'opacity-0 -translate-x-8';
        case 'fadeInRight':
          return 'opacity-0 translate-x-8';
        case 'scaleIn':
          return 'opacity-0 scale-95';
        default:
          return 'opacity-0 translate-y-8';
      }
    }
    
    switch (animation) {
      case 'fadeInLeft':
        return 'opacity-100 translate-x-0';
      case 'fadeInRight':
        return 'opacity-100 translate-x-0';
      case 'scaleIn':
        return 'opacity-100 scale-100';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-500 ease-out ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${staggerDelay}ms`
      }}
    >
      {children}
    </div>
  );
}

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const { ref, isVisible } = useTextReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 ease-out`}>
        {children}
      </div>
    </div>
  );
}

interface CounterRevealProps {
  children: ReactNode;
  className?: string;
  triggerValue?: number;
}

export function CounterReveal({ children, className = '', triggerValue = 0.5 }: CounterRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: triggerValue });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
    >
      <div className={`${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-1000 ease-out`}>
        {children}
      </div>
    </div>
  );
}


