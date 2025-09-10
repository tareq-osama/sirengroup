import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { IconTitle } from "@/components/icon-title";
import { FeatureGrid } from "@/components/feature-grid";
import { Eye, Send, Target, Sparkles, Award } from "lucide-react";
import { aboutContent } from "@/lib/content";

export default function AboutPage() {
  const goalsItems = aboutContent.goals.map(goal => ({
    title: goal,
    description: "",
    icon: <Target className="h-8 w-8" />
  }));

  const valuesItems = aboutContent.values.map(value => ({
    title: value.title,
    description: value.description,
    icon: <Award className="h-8 w-8" />
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="من نحن"
        description="مركز متخصص في دعم طلاب الماجستير والدكتوراه، حضوريًا وعن بُعد"
      />

      {/* Vision Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Card
            icon={<Eye className="h-12 w-12" />}
            title={aboutContent.vision.title}
            description={aboutContent.vision.description}
            className="text-center"
          />
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <Card
            icon={<Send className="h-12 w-12" />}
            title={aboutContent.mission.title}
            description={aboutContent.mission.description}
            className="text-center"
          />
        </div>
      </Section>

      {/* Goals Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <IconTitle
              icon={<Target className="h-8 w-8" />}
              title="الأهداف"
              className="justify-center"
            />
          </div>
          <FeatureGrid 
            items={goalsItems} 
            columns={3}
          />
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <IconTitle
              icon={<Sparkles className="h-8 w-8" />}
              title="القيم المضافة"
              className="justify-center"
            />
          </div>
          <FeatureGrid 
            items={valuesItems} 
            columns={2}
          />
        </div>
      </Section>
    </div>
  );
}
