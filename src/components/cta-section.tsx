'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTASectionProps {
  variant?: 'primary' | 'secondary' | 'accent';
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  className?: string;
}

export default function CTASection({
  variant = 'primary',
  title,
  description,
  primaryAction,
  secondaryAction,
  className = ''
}: CTASectionProps) {
  const variants = {
    primary: {
      background: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
      textColor: 'text-white',
      cardClass: 'bg-white/10 backdrop-blur-md border-white/20 shadow-2xl shadow-blue-900/20',
      buttonPrimary: 'bg-white text-blue-700 hover:bg-white/90 shadow-lg',
      buttonSecondary: 'bg-transparent border-white/30 text-white hover:bg-white/10'
    },
    secondary: {
      background: 'bg-gradient-to-br from-muted via-muted/90 to-muted/80',
      textColor: 'text-foreground',
      cardClass: 'bg-background/60 backdrop-blur-md border-border/50 shadow-2xl shadow-foreground/10',
      buttonPrimary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg',
      buttonSecondary: 'bg-transparent border-border text-foreground hover:bg-muted/50'
    },
    accent: {
      background: 'bg-gradient-to-br from-accent via-accent/90 to-accent/80',
      textColor: 'text-accent-foreground',
      cardClass: 'bg-accent-foreground/5 backdrop-blur-md border-accent-foreground/10 shadow-2xl shadow-accent/20',
      buttonPrimary: 'bg-accent-foreground text-accent hover:bg-accent-foreground/90 shadow-lg',
      buttonSecondary: 'bg-transparent border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10'
    }
  };

  const currentVariant = variants[variant];

  return (
    <section className={`py-20 ${currentVariant.background} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className={`${currentVariant.cardClass} p-12 rounded-2xl`}>
              <div className="text-center space-y-8">
                <div className="space-y-6 text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`text-h1 font-bold leading-tight ${currentVariant.textColor} text-center`}
                  >
                    {title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`text-xl leading-relaxed max-w-3xl mx-auto ${currentVariant.textColor}/90 text-center`}
                  >
                    {description}
                  </motion.p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className={`gap-3 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${currentVariant.buttonPrimary}`}
                  >
                    <Link href={primaryAction.href}>
                      {primaryAction.text}
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </Link>
                  </Button>
                  
                  {secondaryAction && (
                    <Button 
                      variant="outline" 
                      asChild 
                      size="lg"
                      className={`gap-3 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${currentVariant.buttonSecondary}`}
                    >
                      <Link href={secondaryAction.href}>
                        {secondaryAction.text}
                      </Link>
                    </Button>
                  )}
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
