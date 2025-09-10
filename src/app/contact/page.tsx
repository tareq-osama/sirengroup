import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="تواصل معنا"
        description="نحن هنا لمساعدتك في رحلتك الأكاديمية"
      />

      {/* Contact Form Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </Section>

      {/* Contact Information */}
      <Section className="bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">معلومات التواصل</h2>
            <p className="text-lg text-muted-foreground">
              يمكنك التواصل معنا عبر القنوات التالية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">الهاتف</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">+123 456 7890</p>
                <p className="text-sm text-muted-foreground mt-1">متاح من 9 صباحاً - 6 مساءً</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">البريد الإلكتروني</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">info@sirene.edu</p>
                <p className="text-sm text-muted-foreground mt-1">الرد خلال 24 ساعة</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">واتساب</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">+123 456 7890</p>
                <p className="text-sm text-muted-foreground mt-1">متاح 24/7</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">العنوان</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">دمشق، سوريا</p>
                <p className="text-sm text-muted-foreground mt-1">مركز المدينة</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Office Hours */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle>ساعات العمل</CardTitle>
              </div>
              <CardDescription>
                أوقات استقبال الطلاب والزوار
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">الأيام العادية</h4>
                  <p className="text-muted-foreground">السبت - الخميس: 9:00 ص - 6:00 م</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">الجمعة</h4>
                  <p className="text-muted-foreground">9:00 ص - 2:00 م</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">الاستشارات عن بُعد</h4>
                  <p className="text-muted-foreground">متاحة 24/7 عبر واتساب</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">المواعيد الخاصة</h4>
                  <p className="text-muted-foreground">حسب الطلب مع موعد مسبق</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* WhatsApp CTA */}
      <Section className="bg-green-50 dark:bg-green-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            تواصل عبر واتساب
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            للحصول على استجابة سريعة، تواصل معنا مباشرة عبر واتساب
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            <MessageSquare className="h-5 w-5 ml-2" />
            ابدأ المحادثة الآن
          </a>
        </div>
      </Section>
    </div>
  );
}