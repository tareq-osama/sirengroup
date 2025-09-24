'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ProcessStep {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  details: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=face',
    imageAlt: 'التسجيل والاستشارة الأكاديمية',
    title: 'التسجيل والاستشارة',
    description: 'نبدأ بفهم احتياجاتك الأكاديمية',
    details: [
      'تقييم ملفك الأكاديمي',
      'تحديد التخصص المناسب',
      'وضع خطة دراسية مخصصة'
    ]
  },
  {
    id: 'step-2',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=face',
    imageAlt: 'البرنامج التعليمي والتدريب',
    title: 'البرنامج التعليمي',
    description: 'نقدم لك أفضل البرامج والدورات',
    details: [
      'دورات منهجية متخصصة',
      'ورش عمل تطبيقية',
      'متابعة مستمرة للتقدم'
    ]
  },
  {
    id: 'step-3',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    imageAlt: 'الإشراف العلمي والبحث',
    title: 'الإشراف العلمي',
    description: 'نرافقك في رحلة البحث العلمي',
    details: [
      'إشراف أكاديمي متخصص',
      'مراجعة دورية للعمل',
      'توجيه مستمر ومتابعة'
    ]
  },
  {
    id: 'step-4',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face',
    imageAlt: 'التخرج والنجاح الأكاديمي',
    title: 'التخرج والنجاح',
    description: 'نحتفل بإنجازك الأكاديمي',
    details: [
      'إكمال الرسالة العلمية',
      'التحضير للمناقشة',
      'الاحتفال بالتخرج'
    ]
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-h2 font-bold mb-4 text-foreground"
            dir="rtl"
          >
            كيف نعمل؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            dir="rtl"
          >
            رحلة أكاديمية مخططة بعناية لضمان نجاحك في الدراسات العليا
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
                dir="rtl"
              >
             
                {/* Image */}
                <div className="overflow-hidden rounded-md mb-6 shadow-lg group-hover:shadow-xl transition-shadow border border-border">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Details */}
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Arrow for mobile */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
