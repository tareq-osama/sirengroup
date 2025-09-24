'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  university: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'د. أحمد محمد',
    role: 'طالب دكتوراه',
    university: 'جامعة دمشق',
    content: 'مركز Sirene ساعدني في إنجاز رسالتي العلمية بكفاءة عالية. الإشراف المتخصص والدعم المستمر جعلا من رحلتي الأكاديمية تجربة مميزة.',
    rating: 5
  },
  {
    id: 'testimonial-2',
    name: 'د. فاطمة علي',
    role: 'طالبة ماجستير',
    university: 'جامعة حلب',
    content: 'الدورات البحثية المتخصصة والورش التدريبية ساعدتني في تطوير مهاراتي البحثية بشكل كبير. أنصح جميع الطلاب بالانضمام إلى هذا المركز.',
    rating: 5
  },
  {
    id: 'testimonial-3',
    name: 'د. محمد حسن',
    role: 'طالب دكتوراه',
    university: 'جامعة تشرين',
    content: 'المكتبة الرقمية والموارد المتاحة ساعدتني في الوصول إلى أحدث الأبحاث والمراجع العلمية. الخدمة المقدمة تتجاوز التوقعات.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Quote className="h-4 w-4" />
            آراء طلابنا
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-h2 font-bold mb-4 text-foreground"
            dir="rtl"
          >
            ماذا يقول طلابنا؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            dir="rtl"
          >
            اكتشفوا تجارب طلابنا الذين نجحوا في إكمال دراساتهم العليا معنا
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed" dir="rtl">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold" dir="rtl">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" dir="rtl">
                    {testimonial.role} - {testimonial.university}
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
