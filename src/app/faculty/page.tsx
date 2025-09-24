import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { FacultyCard } from "@/components/faculty-card";
import { TwoColumn } from "@/components/two-column";
import { facultyMembers } from "@/lib/content";

export default function FacultyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="أعضاء الهيئة التدريسية"
        description="نخبة من الأساتذة والخبراء المتخصصين في مختلف المجالات الأكاديمية"
      />

      {/* Two Column Introduction */}
      <TwoColumn
        title="فريق أكاديمي متميز"
        description="يضم مركزنا نخبة من الأساتذة والخبراء المتخصصين في مختلف المجالات الأكاديمية، مع خبرات واسعة في الإشراف على الرسائل العلمية وتدريب الباحثين. جميع أعضاء الفريق حاصلون على درجات علمية عالية من جامعات مرموقة، ولديهم سجل حافل من الإنجازات البحثية والأكاديمية."
        imageKey="faculty-main"
        imageAlt="أعضاء الهيئة التدريسية"
        reverse={false}
      />

      {/* Faculty Grid */}
      <Section className="bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">فريقنا الأكاديمي</h2>
            <p className="text-lg text-muted-foreground">
              أساتذة وخبراء متخصصون في دعم طلاب الدراسات العليا
            </p>
          </div>
          
          {facultyMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facultyMembers.map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  avatarKey={member.avatar}
                  badges={member.badges}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                سيتم إضافة معلومات أعضاء الهيئة التدريسية قريباً
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Faculty Expertise Areas */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">مجالات التخصص</h2>
            <p className="text-lg text-muted-foreground">
              خبرات متنوعة تغطي جميع التخصصات الأكاديمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">العلوم الإدارية</h3>
              <p className="text-sm text-muted-foreground">إدارة الأعمال، التسويق، الموارد البشرية</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">العلوم الاجتماعية</h3>
              <p className="text-sm text-muted-foreground">علم الاجتماع، علم النفس، التربية</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">العلوم التطبيقية</h3>
              <p className="text-sm text-muted-foreground">الهندسة، التكنولوجيا، الحاسوب</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">العلوم الإنسانية</h3>
              <p className="text-sm text-muted-foreground">الأدب، التاريخ، الفلسفة</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            هل تريد التعرف على فريقنا أكثر؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            تواصل معنا لمعرفة المزيد عن خبرات فريقنا وكيف يمكنهم مساعدتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              تواصل معنا
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
            >
              اكتشف خدماتنا
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
