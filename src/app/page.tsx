import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { TwoColumn } from "@/components/two-column";
import { FeatureGrid } from "@/components/feature-grid";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, BrainCircuit } from "lucide-react";
import { basicServices, heroContent } from "@/lib/content";
import Link from "next/link";

export default function Home() {
  const highlightServices = basicServices.slice(0, 3).map(service => ({
    title: service.title,
    description: service.description,
    icon: <service.icon className="h-8 w-8" />
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={heroContent.title}
        description={heroContent.description}
        cta={{
          text: heroContent.cta,
          href: heroContent.ctaLink
        }}
        className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
      />

      {/* Two Column Section */}
      <TwoColumn
        title="أبرز الخدمات"
        description="نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لطلاب الدراسات العليا"
        imageSrc="/images/hero.jpg"
        imageAlt="مركز Sirene للدراسات العليا"
        reverse={false}
      >
        <FeatureGrid 
          items={highlightServices} 
          columns={3}
          className="mt-8"
        />
      </TwoColumn>

      {/* Callout Section */}
      <Section className="bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <Card
            title="تابعوا أحدث الأخبار والفعاليات العلمية"
            description="تابعوا أحدث الأخبار والفعاليات العلمية عبر هذا الموقع، واكتشفوا الفرص التعليمية المتاحة لكم."
            className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20"
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