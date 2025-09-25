'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Users, 
  BookOpen, 
  BrainCircuit, 
  Award, 
  Clock, 
  Shield,
  Globe,
  Target
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    icon: Users,
    title: 'فريق أكاديمي متخصص',
    description: 'نخبة من الأساتذة والخبراء في مختلف التخصصات',
    benefits: [
 
    ]
  },
  {
    icon: BookOpen,
    title: 'مكتبة رقمية شاملة',
    description: 'مجموعة ضخمة من المراجع والموارد العلمية',
    benefits: [
 
    ]
  },
  {
    icon: BrainCircuit,
    title: 'دورات بحثية متقدمة',
    description: 'برامج تدريبية متخصصة في المنهجية البحثية',
    benefits: [

    ]
  },
  {
    icon: Award,
    title: 'معدل نجاح عالي',
    description: 'نتائج متميزة في إنجاز الرسائل العلمية',
    benefits: [
    
    ]
  },
  {
    icon: Clock,
    title: 'مرونة في المواعيد',
    description: 'برامج مرنة تناسب جميع الطلاب',
    benefits: [

    ]
  },
  {
    icon: Shield,
    title: 'ضمان الجودة',
    description: 'معايير أكاديمية عالية وضمان للجودة',
    benefits: [
 
    ]
  }
];

export default function FeaturesShowcase() {
  return (
    <section className="py-16 bg-background">
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
            لماذا تختار مركز Sirene؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            dir="rtl"
          >
            مميزاتنا الفريدة التي تجعلنا الخيار الأمثل لطلاب الدراسات العليا
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2" dir="rtl">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm" dir="rtl">
                      {feature.description}
                    </p>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground" dir="rtl">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
