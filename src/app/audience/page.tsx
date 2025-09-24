import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { FeatureGrid } from "@/components/feature-grid";
import { TwoColumn } from "@/components/two-column";
import { audienceItems } from "@/lib/content";

export default function AudiencePage() {
  const audienceItemsWithIcons = audienceItems.map(item => ({
    title: item.title,
    description: item.description,
    icon: <item.icon className="h-8 w-8" />
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="الجمهور المستهدف"
        description="نخدم مجموعة متنوعة من الطلاب والباحثين المهتمين بالدراسات العليا والبحث العلمي"
      />

      {/* Audience Grid */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <FeatureGrid 
            items={audienceItemsWithIcons} 
            columns={3}
          />
        </div>
      </Section>

      {/* Two Column Section 1 */}
      <TwoColumn
        title="طلاب مرحلة ما بعد التعليم الجامعي"
        description="نركز على الطلاب المتميزين الذين يمتلكون معدلات عالية في البكالوريوس ويرغبون في متابعة دراساتهم العليا. نقدم لهم الدعم الكامل في اختيار التخصص المناسب والجامعة الملائمة، بالإضافة إلى الإشراف المستمر على أبحاثهم."
        imageKey="audience-students"
        imageAlt="طلاب الدراسات العليا"
        reverse={false}
        className="bg-muted/50"
      />

      {/* Two Column Section 2 */}
      <TwoColumn
        title="الباحثون المستقلون"
        description="نقدم خدمات متخصصة للباحثين المستقلين الذين يهدفون إلى تطوير قدراتهم البحثية ونشر أعمالهم في المجلات المحكمة. نركز على صقل مهاراتهم في المناهج البحثية والتحليل الإحصائي."
        imageKey="audience-researchers"
        imageAlt="الباحثون المستقلون"
        reverse={true}
      />

      {/* Two Column Section 3 */}
      <TwoColumn
        title="المهتمون بالبحث العلمي الأكاديمي"
        description="نستقبل جميع المهتمين بالبحث العلمي الأكاديمي، سواء كانوا خريجي جامعات أو مهتمين بالمجال الأكاديمي. نقدم لهم برامج تدريبية شاملة لصقل مهاراتهم البحثية وتمكينهم من المشاركة الفعالة في المجتمع الأكاديمي."
        imageKey="audience-academic"
        imageAlt="المهتمون بالبحث العلمي"
        reverse={false}
        className="bg-muted/50"
      />

      {/* Call to Action */}
      <Section className="bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            هل أنت من الجمهور المستهدف؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            إذا كنت من أي من هذه الفئات، فنحن هنا لمساعدتك في تحقيق أهدافك الأكاديمية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              اكتشف خدماتنا
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
