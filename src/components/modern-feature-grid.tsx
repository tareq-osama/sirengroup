'use client';

import { ModernCard } from "./modern-card";
import { ReactNode } from "react";

interface ModernFeatureGridProps {
  items: Array<{
    title: string;
    description: string;
    icon?: ReactNode;
    imageKey?: string; // Image key for Unsplash service
    imageSrc?: string; // Direct image URL
    actions?: ReactNode;
  }>;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  variant?: 'default' | 'image-top' | 'image-overlay';
}

export function ModernFeatureGrid({ 
  items, 
  columns = 3, 
  className = "",
  variant = 'image-top'
}: ModernFeatureGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {items.map((item, index) => (
        <ModernCard
          key={index}
          icon={item.icon}
          imageKey={item.imageKey}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
          actions={item.actions}
          variant={variant}
        />
      ))}
    </div>
  );
}
