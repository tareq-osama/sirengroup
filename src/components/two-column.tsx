import Image from "next/image";
import { ReactNode } from "react";

interface TwoColumnProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  children?: ReactNode;
  className?: string;
}

export function TwoColumn({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  reverse = false,
  children,
  className = ""
}: TwoColumnProps) {
  return (
    <div className={`py-16 ${className}`}>
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
