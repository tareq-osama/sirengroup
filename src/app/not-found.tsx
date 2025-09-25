import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowRight, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* Content */}
      <div className="text-center px-6 max-w-4xl mx-auto space-y-8">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-bold text-muted-foreground/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-muted rounded-full border border-border flex items-center justify-center">
              <Search className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" dir="rtl">
            الصفحة غير موجودة
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" dir="rtl">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. 
            يمكنك العودة إلى الصفحة الرئيسية أو استكشاف خدماتنا.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            asChild
            size="lg"
            className="px-8 py-4 text-lg font-semibold"
          >
            <Link href="/">
              <Home className="w-5 h-5 ml-2" />
              العودة للصفحة الرئيسية
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold"
          >
            <Link href="/services">
              استكشاف خدماتنا
              <ArrowRight className="w-5 h-5 mr-2" />
            </Link>
          </Button>
        </div>

        {/* Additional Links */}
        <div className="pt-8">
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <Link 
              href="/about" 
              className="hover:text-foreground transition-colors"
            >
              من نحن
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-foreground transition-colors"
            >
              تواصل معنا
            </Link>
            <Link 
              href="/library" 
              className="hover:text-foreground transition-colors"
            >
              المكتبة الرقمية
            </Link>
            <Link 
              href="/faculty" 
              className="hover:text-foreground transition-colors"
            >
              أعضاء الهيئة
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
