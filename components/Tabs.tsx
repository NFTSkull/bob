'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { trackClick } from '@/lib/analytics';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  onTabChange?: (tabId: string) => void;
}

export default function Tabs({
  tabs,
  defaultTab,
  className,
  onTabChange
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
    trackClick(`Tab: ${tabId}`, 'tab_navigation');
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={cn('w-full', className)}>
      {/* Navegación de tabs */}
      <div className="border-b border-secondary-dark mb-6">
        <nav className="flex space-x-8 overflow-x-auto" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary',
                activeTab === tab.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-secondary hover:text-white hover:border-secondary'
              )}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Contenido de tabs */}
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className={cn(
              'transition-all duration-300',
              activeTab === tab.id
                ? 'opacity-100 block'
                : 'opacity-0 hidden'
            )}
          >
            {activeTab === tab.id && (
              <div className="animate-fade-in">
                {tab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente para tabs verticales
interface VerticalTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  onTabChange?: (tabId: string) => void;
}

export function VerticalTabs({
  tabs,
  defaultTab,
  className,
  onTabChange
}: VerticalTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
    trackClick(`Vertical Tab: ${tabId}`, 'tab_navigation');
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={cn('flex gap-8', className)}>
      {/* Navegación vertical */}
      <div className="w-64 flex-shrink-0">
        <nav className="space-y-2" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                'w-full text-left py-3 px-4 rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary',
                activeTab === tab.id
                  ? 'bg-accent text-primary-dark'
                  : 'text-secondary hover:text-white hover:bg-primary-light'
              )}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Contenido */}
      <div className="flex-1">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className={cn(
              'transition-all duration-300',
              activeTab === tab.id
                ? 'opacity-100 block'
                : 'opacity-0 hidden'
            )}
          >
            {activeTab === tab.id && (
              <div className="animate-fade-in">
                {tab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
