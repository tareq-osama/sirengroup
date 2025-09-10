import Link from "next/link";
import { MessageSquare, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary">Sirene</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              مركز متخصص في دعم طلاب الماجستير والدكتوراه، حضوريًا وعن بُعد. 
              نقدم برامج تعليمية تفاعلية ودورات تدريبية متخصصة لتمكين الباحثين 
              من تطوير مهاراتهم البحثية وإنجاز أبحاثهم الأكاديمية بكفاءة عالية.
            </p>
            <div className="flex items-center space-x-4">
              <Button asChild size="sm">
                <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-4 w-4 ml-2" />
                  تواصل عبر واتساب
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {navigationItems.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@sirene.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 مركز Sirene للدراسات العليا. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
