'use client';

import Image from "next/image";
import { ReactNode } from "react";
import { useWebsiteImage } from "@/hooks/use-website-images";
import { Loader2 } from "lucide-react";

interface TwoColumnProps {
  title: string;
  description: string;
  imageSrc?: string; // Direct image URL (optional)
  imageKey?: string; // Image key for Unsplash service (optional)
  imageAlt: string;
  reverse?: boolean;
  children?: ReactNode;
  className?: string;
}

export function TwoColumn({ 
  title, 
  description, 
  imageSrc, 
  imageKey,
  imageAlt, 
  reverse = false,
  children,
  className = ""
}: TwoColumnProps) {
  // Use image service if imageKey is provided, otherwise use direct imageSrc
  const { image, loading, error } = useWebsiteImage(imageKey || '');
  
  // Determine which image source to use
  const finalImageSrc = imageKey ? (image?.url || '') : imageSrc;
  const finalImageAlt = imageKey ? (image?.alt || imageAlt) : imageAlt;

  return (
    <div className={`w-full ${className}`}>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Content */}
            <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>
              {children}
            </div>
            
            {/* Image */}
            <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-lg">
                {loading && imageKey ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                  </div>
                ) : error && imageKey ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="text-center text-muted-foreground">
                      <p className="text-sm">Image unavailable</p>
                    </div>
                  </div>
                ) : finalImageSrc ? (
                  <Image
                    src={finalImageSrc}
                    alt={finalImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="text-center text-muted-foreground">
                      <p className="text-sm">No image provided</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
