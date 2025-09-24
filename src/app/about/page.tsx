import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { TwoColumn } from "@/components/two-column";
import { ModernFeatureGrid } from "@/components/modern-feature-grid";
import { GoalsGrid } from "@/components/goals-grid";
import { IconTitle } from "@/components/icon-title";
import { Button } from "@/components/ui/button";
import { Target, Sparkles, ArrowRight } from "lucide-react";
import { aboutContent } from "@/lib/content";
import Link from "next/link";

export default function AboutPage() {
  // Prepare goals items for card display
  const goalsItems = aboutContent.goals.map((goal, index) => ({
    title: goal,
    description: "نعمل على تحقيق هذا الهدف من خلال برامجنا المتخصصة وخدماتنا المتميزة التي تواكب أحدث المعايير الدولية في البحث العلمي والأكاديمي.",
    imageKey: `about-goal-${index + 1}`
  }));

  // Prepare values items for card display
  const valuesItems = aboutContent.values.map((value, index) => ({
    title: value.title,
    description: value.description,
    imageKey: `about-value-${index + 1}`
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="من نحن"
        description="مركز متخصص في دعم طلاب الماجستير والدكتوراه، حضوريًا وعن بُعد"
      />

      {/* Vision Section */}
      <TwoColumn
        title={aboutContent.vision.title}
        description={aboutContent.vision.description}
        imageKey="about-vision"
        imageAlt="رؤية مركز Sirene للدراسات العليا"
        reverse={false}
        className="bg-gradient-to-br from-muted/40 via-muted/20 to-background"
      />

      {/* Mission Section */}
      <TwoColumn
        title={aboutContent.mission.title}
        description={aboutContent.mission.description}
        imageKey="about-mission"
        imageAlt="رسالة مركز Sirene للدراسات العليا"
        reverse={true}
        className="bg-gradient-to-br from-background via-muted/10 to-muted/30"
      />

      {/* Goals Section - Using 3-Column Cards with Right Borders */}
      <div className="w-full bg-gradient-to-br from-muted/30 via-muted/20 to-background">
        <div className="py-16">
          <div className="text-center mb-16 px-4">
            <IconTitle
              icon={<Target className="h-8 w-8" />}
              title="الأهداف"
              className="justify-center"
            />
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              نسعى لتحقيق أهدافنا من خلال برامجنا المتخصصة وخدماتنا المتميزة
            </p>
          </div>
          
          <GoalsGrid items={goalsItems} />
          
          {/* CTA Button */}
          <div className="text-center mt-16 px-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link href="/services">
                اكتشف خدماتنا
                <ArrowRight className="h-5 w-5 mr-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Values Section - Using Cards */}
      <Section className="bg-gradient-to-br from-muted/60 via-muted/40 to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <IconTitle
              icon={<Sparkles className="h-8 w-8" />}
              title="القيم المضافة"
              className="justify-center"
            />
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              نؤمن بقيم أساسية تشكل أساس عملنا وتميز خدماتنا في مجال الدراسات العليا
            </p>
          </div>
          
          <ModernFeatureGrid 
            items={valuesItems} 
            columns={2}
            variant="image-top"
            className="gap-8"
          />
        </div>
      </Section>
    </div>
  );
}
