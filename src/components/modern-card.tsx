'use client';

import { Card as ShadCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import Image from "next/image";
import { useWebsiteImage } from "@/hooks/use-website-images";
import { Loader2 } from "lucide-react";

interface ModernCardProps {
  icon?: ReactNode;
  imageKey?: string; // Image key for Unsplash service
  imageSrc?: string; // Direct image URL
  title: string;
  description: string;
  actions?: ReactNode;
  className?: string;
  variant?: 'default' | 'image-top' | 'image-overlay';
}

export function ModernCard({ 
  icon, 
  imageKey,
  imageSrc,
  title, 
  description, 
  actions, 
  className = "",
  variant = 'image-top'
}: ModernCardProps) {
  // Use image service if imageKey is provided
  const { image, loading, error } = useWebsiteImage(imageKey || '');
  
  // Determine which image source to use
  const finalImageSrc = imageKey ? (image?.url || '') : imageSrc;
  const finalImageAlt = imageKey ? (image?.alt || title) : title;

  if (variant === 'image-overlay') {
    return (
      <ShadCard className={`h-full overflow-hidden group hover:shadow-xl transition-all duration-300 ${className}`}>
        {/* Image with overlay */}
        <div className="relative h-48 overflow-hidden">
          {loading && imageKey ? (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : error && imageKey ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
              <div className="text-center text-muted-foreground">
                <p className="text-sm">Image unavailable</p>
              </div>
            </div>
          ) : finalImageSrc ? (
            <Image
              src={finalImageSrc}
              alt={finalImageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
              <div className="text-center text-muted-foreground">
                <p className="text-sm">No image provided</p>
              </div>
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Title overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
          </div>
        </div>
        
        <CardContent className="p-6">
          <CardDescription className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </CardDescription>
          {actions && (
            <div className="pt-2">
              {actions}
            </div>
          )}
        </CardContent>
      </ShadCard>
    );
  }

  if (variant === 'image-top') {
    return (
      <ShadCard className={`h-full overflow-hidden group hover:shadow-xl transition-all duration-300 ${className}`}>
        {/* Image at top */}
        <div className="relative h-40 overflow-hidden">
          {loading && imageKey ? (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : error && imageKey ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
              <div className="text-center text-muted-foreground">
                <p className="text-sm">Image unavailable</p>
              </div>
            </div>
          ) : finalImageSrc ? (
            <Image
              src={finalImageSrc}
              alt={finalImageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
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
          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        
        {actions && (
          <CardContent className="pt-0">
            {actions}
          </CardContent>
        )}
      </ShadCard>
    );
  }

  // Default variant with icon
  return (
    <ShadCard className={`h-full group hover:shadow-xl transition-all duration-300 ${className}`}>
      <CardHeader>
        {icon && (
          <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      {actions && (
        <CardContent className="pt-0">
          {actions}
        </CardContent>
      )}
    </ShadCard>
  );
}
