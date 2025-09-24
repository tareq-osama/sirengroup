import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { TwoColumn } from "@/components/two-column";
import { FeatureGrid } from "@/components/feature-grid";
import { Card } from "@/components/card";
import { BadgeCheck, ShieldCheck, GraduationCap } from "lucide-react";
import { partners } from "@/lib/content";
import Image from "next/image";

export default function PartnersPage() {
  const partnerItems = partners.map(partner => ({
    title: partner.name,
    description: partner.description,
    icon: partner.type === "university" ? <GraduationCap className="h-8 w-8" /> : 
          partner.type === "accreditation" ? <ShieldCheck className="h-8 w-8" /> :
          <BadgeCheck className="h-8 w-8" />
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="الاعتمادات والشراكات"
        description="نحرص على بناء شبكة واسعة من الشراكات الأكاديمية مع كبرى الجامعات العالمية"
      />

      {/* Two Column Hero */}
      <TwoColumn
        title="شراكات أكاديمية متميزة"
        description="يحرص المركز على بناء شبكة واسعة من الشراكات الأكاديمية مع كبرى الجامعات العالمية، مع التركيز على التعاون مع جامعات الداخل السوري. كما نضمن لجميع برامجنا أن تكون معتمدة دوليًا، عبر شهادات رسمية تحمل أختامًا وتصديقات موثوقة، لتوفير قيمة أكاديمية ومهنية عالية لطلابنا."
        imageKey="partners-main"
        imageAlt="الشراكات الأكاديمية"
        reverse={false}
      />

      {/* Partners Grid */}
      <Section className="bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">اعتماداتنا</h2>
            <p className="text-lg text-muted-foreground">
              شهادات رسمية تحمل أختامًا وتصديقات موثوقة
            </p>
          </div>
          <FeatureGrid 
            items={partnerItems} 
            columns={3}
          />
        </div>
      </Section>

      {/* Accreditation Details */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              icon={<ShieldCheck className="h-12 w-12" />}
              title="الاعتماد الدولي"
              description="جميع برامجنا معتمدة دوليًا من قبل هيئات اعتماد معترف بها عالميًا، مما يضمن جودة التعليم والتدريب المقدم لطلابنا."
            />
            <Card
              icon={<BadgeCheck className="h-12 w-12" />}
              title="الشهادات المعتمدة"
              description="نقدم شهادات رسمية معتمدة لجميع خريجينا، مع إمكانية التحقق من صحتها عبر قواعد البيانات الرسمية."
            />
          </div>
        </div>
      </Section>

      {/* University Partnerships */}
      <Section className="bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">شراكاتنا الجامعية</h2>
            <p className="text-lg text-muted-foreground">
              تعاون وثيق مع جامعات محلية ودولية متميزة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.filter(p => p.type === "university").map((partner, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{partner.name}</h3>
                <p className="text-muted-foreground text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            هل تريد معرفة المزيد عن شراكاتنا؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            تواصل معنا لمعرفة المزيد عن برامجنا المعتمدة وشراكاتنا الأكاديمية
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
