import React from 'react';
import { Category } from '../types';
import { AppCard } from './AppCard';
import { AppCounts } from '../services/tracking';

interface CategorySectionProps {
  category: Category;
  onAppAction?: (id: string) => void;
  onAppLogin?: (id: string) => void;
  appCounts: AppCounts;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, onAppAction, onAppLogin, appCounts }) => {
  return (
    <section className="mb-12 sm:mb-16">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 sm:mb-8 px-4">
        <div className="w-full">
          <div className="flex items-center space-x-3 mb-2">
            {category.icon && (
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-sky-500 group-hover:scale-110 transition-transform">
                {React.cloneElement(category.icon as React.ReactElement, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
              </div>
            )}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-outfit relative inline-block uppercase tracking-tight text-glow">
              {category.name}
              <span className="absolute -bottom-1 left-0 w-full h-1 sm:h-1.5 bg-sky-500/20 dark:bg-sky-400/30 rounded-full -z-10"></span>
            </h2>
          </div>
          <p className="text-slate-800 dark:text-slate-100 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-bold leading-relaxed whitespace-nowrap truncate overflow-hidden text-glow">
            {category.description}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
        {category.apps.map((app) => (
          <AppCard 
            key={app.id} 
            app={app} 
            onAction={onAppAction} 
            onLogin={onAppLogin} 
            count={appCounts[app.title as string] || 0}
          />
        ))}
      </div>
    </section>
  );
};
