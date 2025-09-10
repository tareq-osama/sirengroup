import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  className?: string;
}

export function PageHero({ 
  title, 
  eyebrow, 
  description, 
  cta, 
  className = "" 
}: PageHeroProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {eyebrow && (
            <p className="text-sm font-medium text-muted-foreground mb-4">
              {eyebrow}
            </p>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
          
          {cta && (
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href={cta.href}>
                  {cta.text}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
