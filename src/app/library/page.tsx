"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ResourceCard } from "@/components/resource-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { resources } from "@/lib/content";

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const resourceTypes = ["كتاب", "مرجع", "بحث", "مقال", "أداة", "رابط", "فيديو"];
  
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === null || resource.kind === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="المكتبة الرقمية"
        description="مجموعة شاملة من الكتب والمراجع العلمية والأدوات البحثية"
      />

      {/* Search and Filters */}
      <Section className="bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">البحث في المكتبة</h2>
            
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="ابحث في الكتب والمراجع..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 text-right"
              />
            </div>

            {/* Type Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge
                variant={selectedType === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType(null)}
              >
                جميع الأنواع
              </Badge>
              {resourceTypes.map((type) => (
                <Badge
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedType(selectedType === type ? null : type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Resources Count */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              عرض {filteredResources.length} من {resources.length} مورد
            </p>
          </div>

          {/* Resources Grid */}
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  kind={resource.kind}
                  description={resource.description}
                  tags={resource.tags}
                  href={resource.href}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">لم يتم العثور على موارد</h3>
              <p className="text-muted-foreground">
                جرب تغيير مصطلحات البحث أو نوع المورد
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Library Categories */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">أقسام المكتبة</h2>
            <p className="text-lg text-muted-foreground">
              موارد متنوعة لدعم البحث العلمي والأكاديمي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">الكتب العلمية</h3>
              <p className="text-sm text-muted-foreground">مراجع أساسية في مختلف التخصصات</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">الأبحاث المنشورة</h3>
              <p className="text-sm text-muted-foreground">أبحاث حديثة في المجلات المحكمة</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">أدوات البحث</h3>
              <p className="text-sm text-muted-foreground">برامج وتطبيقات للتحليل الإحصائي</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">المواد التعليمية</h3>
              <p className="text-sm text-muted-foreground">فيديوهات ودروس تفاعلية</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            هل تحتاج مساعدة في العثور على مورد معين؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            فريقنا متاح لمساعدتك في العثور على الموارد المناسبة لبحثك
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
