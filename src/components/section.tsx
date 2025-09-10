import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ 
  title, 
  description, 
  children, 
  className = "",
  containerClassName = ""
}: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
