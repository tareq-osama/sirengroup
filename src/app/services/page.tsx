"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ModernFeatureGrid } from "@/components/modern-feature-grid";
import { TwoColumn } from "@/components/two-column";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";
import { basicServices, specialServices } from "@/lib/content";
import Link from "next/link";

export default function ServicesPage() {
  const basicServicesItems = basicServices.map((service, index) => {
    // Map specific services to their image keys
    const imageKeyMap = {
      "تأمين التسجيل في الجامعات": "service-university-registration",
      "دورات بحثية متخصصة": "service-research-courses", 
      "دورات منهجية وورش إحصاء وتحليل": "service-methodology-statistics",
      "الدعم المنهجي": "service-methodological-support",
      "الإشراف العلمي": "service-academic-supervision"
    };
    
    return {
      title: service.title,
      description: service.description,
      imageKey: imageKeyMap[service.title as keyof typeof imageKeyMap] || `service-basic-${index + 1}`,
      actions: (
        <div className="flex flex-col gap-2">
          <Button asChild size="sm" className="w-full">
            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4 ml-2" />
              تواصل عبر واتساب
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/contact">
              <Phone className="h-4 w-4 ml-2" />
              استشارة مجانية
            </Link>
          </Button>
        </div>
      )
    };
  });

  const specialServicesItems = specialServices.map((service, index) => {
    // Map specific services to their image keys
    const imageKeyMap = {
      "محاضرات علمية في المواد التخصصية": "service-specialized-lectures",
      "الإشراف الكامل على الرسائل العلمية (ماجستير ودكتوراه)": "service-thesis-supervision",
      "إقامة مناقشات علمية": "service-academic-discussions"
    };
    
    return {
      title: service.title,
      description: service.description,
      imageKey: imageKeyMap[service.title as keyof typeof imageKeyMap] || `service-special-${index + 1}`,
      actions: (
        <div className="flex flex-col gap-2">
          <Button asChild size="sm" className="w-full">
            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4 ml-2" />
              تواصل عبر واتساب
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/contact">
              <Phone className="h-4 w-4 ml-2" />
              استشارة مجانية
            </Link>
          </Button>
        </div>
      )
    };
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="الخدمات والبرامج"
        description="نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لطلاب الدراسات العليا"
      />

      {/* Services Tabs */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="basic">الخدمات الأساسية</TabsTrigger>
              <TabsTrigger value="special">الخدمات الخاصة</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic">
              <ModernFeatureGrid 
                items={basicServicesItems} 
                columns={3}
                variant="image-top"
              />
            </TabsContent>
            
            <TabsContent value="special">
              <ModernFeatureGrid 
                items={specialServicesItems} 
                columns={3}
                variant="image-top"
              />
            </TabsContent>
          </Tabs>
        </div>
      </Section>

      {/* Two Column Section 1 */}
      <TwoColumn
        title="دعم شامل للبحث العلمي"
        description="نقدم دعمًا شاملاً لطلاب الدراسات العليا في جميع مراحل البحث العلمي، من اختيار الموضوع وحتى المناقشة النهائية. فريقنا من الخبراء المتخصصين يضمن لك الحصول على أفضل النتائج."
        imageKey="services-main"
        imageAlt="دعم البحث العلمي"
        reverse={false}
        className="bg-muted/50"
      />

      {/* Two Column Section 2 */}
      <TwoColumn
        title="برامج تدريبية متخصصة"
        description="نقدم برامج تدريبية متخصصة في المناهج البحثية والإحصاء والتحليل، باستخدام أحدث البرامج والتقنيات. جميع برامجنا مصممة لتواكب المعايير الدولية في البحث العلمي."
        imageKey="training-programs"
        imageAlt="البرامج التدريبية"
        reverse={true}
      />

      {/* Call to Action */}
      <Section className="bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            هل تريد معرفة المزيد عن خدماتنا؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            تواصل معنا اليوم واحصل على استشارة مجانية حول احتياجاتك الأكاديمية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              تواصل عبر واتساب
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
            >
              املأ نموذج التواصل
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
