import HeroSliderSSRSafe from "@/components/hero-slider-ssr-safe";
import TestimonialsSection from "@/components/testimonials-section";
import ProcessSection from "@/components/process-section";
import FeaturesShowcase from "@/components/features-showcase";
import CTASection from "@/components/cta-section";
import { Section } from "@/components/section";
import { TwoColumn } from "@/components/two-column";
import { FeatureGrid } from "@/components/feature-grid";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, BrainCircuit } from "lucide-react";
import { basicServices } from "@/lib/content";
import Link from "next/link";

export default function Home() {
  const highlightServices = basicServices.slice(0, 3).map(service => ({
    title: service.title,
    description: service.description,
    icon: <service.icon className="h-8 w-8 text-blue-600" />
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Image Slider */}
      <HeroSliderSSRSafe />

      {/* Two Column Section */}
      <TwoColumn
        title="أبرز الخدمات"
        description="نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لطلاب الدراسات العليا"
        imageKey="home-hero"
        imageAlt="مركز Sirene للدراسات العليا"
        reverse={false}
      >
        <FeatureGrid 
          items={highlightServices} 
          columns={3}
          className="mt-8"
        />
      </TwoColumn>

      {/* CTA Section 1 */}
      <CTASection
        variant="primary"
        title="ابدأ رحلتك الأكاديمية اليوم"
        description="انضم إلى مئات الطلاب الذين نجحوا في إكمال دراساتهم العليا معنا. احجز استشارتك المجانية الآن."
        primaryAction={{
          text: "احجز استشارة مجانية",
          href: "/contact"
        }}
        secondaryAction={{
          text: "اكتشف خدماتنا",
          href: "/services"
        }}
        iconName="calendar"
      />

      {/* Features Showcase */}
      <FeaturesShowcase />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section 2 */}
      <CTASection
        variant="secondary"
        title="هل لديك أسئلة؟"
        description="فريقنا الأكاديمي المتخصص جاهز للإجابة على جميع استفساراتك ومساعدتك في اتخاذ القرار المناسب."
        primaryAction={{
          text: "تواصل معنا",
          href: "/contact"
        }}
        secondaryAction={{
          text: "اتصل بنا مباشرة",
          href: "tel:+1234567890"
        }}
        iconName="phone"
      />

      {/* Final Callout Section */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <Card
            title="تابعوا أحدث الأخبار والفعاليات العلمية"
            description="تابعوا أحدث الأخبار والفعاليات العلمية عبر هذا الموقع، واكتشفوا الفرص التعليمية المتاحة لكم."
            className="bg-background/80 backdrop-blur-sm border-border"
            actions={
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/services">اكتشف خدماتنا</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">تواصل معنا</Link>
                </Button>
              </div>
            }
          />
        </div>
      </Section>
    </div>
  );
}