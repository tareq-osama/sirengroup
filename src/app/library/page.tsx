"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ResourceCard } from "@/components/resource-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, BookOpen, FileText, Search as SearchIcon, Link as LinkIcon, Play, Download } from "lucide-react";
import { resources } from "@/lib/content";

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const resourceTypes = [
    { name: "كتاب", icon: BookOpen, count: resources.filter(r => r.kind === "كتاب").length },
    { name: "مرجع", icon: FileText, count: resources.filter(r => r.kind === "مرجع").length },
    { name: "بحث", icon: SearchIcon, count: resources.filter(r => r.kind === "بحث").length },
    { name: "مقال", icon: FileText, count: resources.filter(r => r.kind === "مقال").length },
    { name: "أداة", icon: Download, count: resources.filter(r => r.kind === "أداة").length },
    { name: "رابط", icon: LinkIcon, count: resources.filter(r => r.kind === "رابط").length },
    { name: "فيديو", icon: Play, count: resources.filter(r => r.kind === "فيديو").length }
  ];
  
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

      {/* Main Content with Two Columns */}
      <Section className="bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Filters Sidebar - 1/3 */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-6">
                
                {/* Search Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5" />
                      البحث
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        type="text"
                        placeholder="ابحث في الكتب والمراجع..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pr-10 text-right"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Type Filters Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Filter className="h-5 w-5" />
                      نوع المورد
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedType === null 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                      onClick={() => setSelectedType(null)}
                    >
                      <span className="font-medium">جميع الأنواع</span>
                      <Badge variant="secondary">{resources.length}</Badge>
                    </div>
                    
                    <Separator />
                    
                    {resourceTypes.map((type) => (
                      <div
                        key={type.name}
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedType === type.name 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted hover:bg-muted/80'
                        }`}
                        onClick={() => setSelectedType(selectedType === type.name ? null : type.name)}
                      >
                        <div className="flex items-center gap-3">
                          <type.icon className="h-4 w-4" />
                          <span className="font-medium">{type.name}</span>
                        </div>
                        <Badge variant="secondary">{type.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Stats Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>إحصائيات سريعة</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">إجمالي الموارد</span>
                      <span className="font-semibold">{resources.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">النتائج المفلترة</span>
                      <span className="font-semibold">{filteredResources.length}</span>
                    </div>
                    <Separator />
                    <div className="text-xs text-muted-foreground">
                      آخر تحديث: اليوم
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content Area - 2/3 */}
            <div className="lg:w-2/3">
              <div className="space-y-6">
                
                {/* Results Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">الموارد المتاحة</h2>
                    <p className="text-muted-foreground mt-1">
                      عرض {filteredResources.length} من {resources.length} مورد
                    </p>
                  </div>
                  {selectedType && (
                    <Badge variant="outline" className="text-sm">
                      {selectedType}
                    </Badge>
                  )}
                </div>

                {/* Resources Grid */}
                {filteredResources.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <Card className="text-center py-12">
                    <CardContent>
                      <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">لم يتم العثور على موارد</h3>
                      <p className="text-muted-foreground">
                        جرب تغيير مصطلحات البحث أو نوع المورد
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
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
