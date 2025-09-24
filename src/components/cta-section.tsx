'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
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
  iconName?: string;
  className?: string;
}

export default function CTASection({
  variant = 'primary',
  title,
  description,
  primaryAction,
  secondaryAction,
  iconName,
  className = ''
}: CTASectionProps) {
  const variants = {
    primary: {
      background: 'bg-gradient-to-br from-primary via-primary/90 to-primary/80',
      textColor: 'text-primary-foreground',
      cardClass: 'bg-primary-foreground/5 backdrop-blur-md border-primary-foreground/10 shadow-2xl shadow-primary/20',
      iconBg: 'bg-primary-foreground/10 border-primary-foreground/20',
      buttonPrimary: 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg',
      buttonSecondary: 'bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10'
    },
    secondary: {
      background: 'bg-gradient-to-br from-muted via-muted/90 to-muted/80',
      textColor: 'text-foreground',
      cardClass: 'bg-background/60 backdrop-blur-md border-border/50 shadow-2xl shadow-foreground/10',
      iconBg: 'bg-muted/20 border-border/30',
      buttonPrimary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg',
      buttonSecondary: 'bg-transparent border-border text-foreground hover:bg-muted/50'
    },
    accent: {
      background: 'bg-gradient-to-br from-accent via-accent/90 to-accent/80',
      textColor: 'text-accent-foreground',
      cardClass: 'bg-accent-foreground/5 backdrop-blur-md border-accent-foreground/10 shadow-2xl shadow-accent/20',
      iconBg: 'bg-accent-foreground/10 border-accent-foreground/20',
      buttonPrimary: 'bg-accent-foreground text-accent hover:bg-accent-foreground/90 shadow-lg',
      buttonSecondary: 'bg-transparent border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10'
    }
  };

  const currentVariant = variants[variant];

  // Icon mapping
  const getIcon = (iconName?: string) => {
    const iconColor = variant === 'secondary' ? 'text-primary' : 'text-primary-foreground';
    switch (iconName) {
      case 'calendar':
        return <Calendar className={`h-10 w-10 ${iconColor}`} />;
      case 'mail':
        return <Mail className={`h-10 w-10 ${iconColor}`} />;
      default:
        return null;
    }
  };

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
                {iconName && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center border-2 ${currentVariant.iconBg}`}
                  >
                    {getIcon(iconName)}
                  </motion.div>
                )}
                
                <div className="space-y-6 text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`text-h1 font-bold leading-tight ${currentVariant.textColor} text-center`}
                    dir="rtl"
                  >
                    {title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className={`text-xl leading-relaxed max-w-3xl mx-auto ${currentVariant.textColor}/90 text-center`}
                    dir="rtl"
                  >
                    {description}
                  </motion.p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className={`gap-3 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${currentVariant.buttonPrimary}`}
                  >
                    <Link href={primaryAction.href}>
                      {primaryAction.text}
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  
                  {secondaryAction && (
                    <Button 
                      variant="outline" 
                      asChild 
                      size="lg"
                      className={`gap-3 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${currentVariant.buttonSecondary}`}
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
