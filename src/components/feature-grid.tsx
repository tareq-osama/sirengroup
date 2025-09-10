import { Card } from "./card";
import { ReactNode } from "react";

interface FeatureGridProps {
  items: Array<{
    title: string;
    description: string;
    icon?: ReactNode;
    actions?: ReactNode;
  }>;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({ 
  items, 
  columns = 3, 
  className = "" 
}: FeatureGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {items.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          actions={item.actions}
        />
      ))}
    </div>
  );
}
