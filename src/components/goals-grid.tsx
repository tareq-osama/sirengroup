'use client';

import { Card as ShadCard, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useWebsiteImage } from "@/hooks/use-website-images";
import { Loader2 } from "lucide-react";

interface GoalItem {
  title: string;
  description: string;
  imageKey: string;
}

interface GoalsGridProps {
  items: GoalItem[];
  className?: string;
}

export function GoalsGrid({ items, className = "" }: GoalsGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((item, index) => (
        <GoalCard
          key={index}
          title={item.title}
          description={item.description}
          imageKey={item.imageKey}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}

interface GoalCardProps {
  title: string;
  description: string;
  imageKey: string;
  isLast: boolean;
}

function GoalCard({ title, description, imageKey, isLast }: GoalCardProps) {
  const { image, loading, error } = useWebsiteImage(imageKey);
  
  return (
    <ShadCard className={`h-full rounded-none border-0 ${!isLast ? 'border-r border-border' : ''} hover:shadow-lg transition-shadow duration-300`}>
      {/* Image */}
      <div className="relative min-h-72 w-full overflow-hidden">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
            <div className="text-center text-muted-foreground">
              <p className="text-sm">Image unavailable</p>
            </div>
          </div>
        ) : image?.url ? (
          <Image
            src={image.url}
            alt={image.alt || title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
            <div className="text-center text-muted-foreground">
              <p className="text-sm">No image provided</p>
            </div>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0 max-w-md min-h-48">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </ShadCard>
  );
}
