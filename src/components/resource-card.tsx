import { Card as ShadCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText, BookOpen, Search, Link as LinkIcon, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  kind: "كتاب" | "مرجع" | "بحث" | "مقال" | "أداة" | "رابط" | "فيديو";
  description: string;
  tags: string[];
  href?: string;
  className?: string;
}

const kindIcons = {
  "كتاب": BookOpen,
  "مرجع": FileText,
  "بحث": Search,
  "مقال": FileText,
  "أداة": Download,
  "رابط": LinkIcon,
  "فيديو": Play
};

export function ResourceCard({ 
  title, 
  kind, 
  description, 
  tags, 
  href, 
  className = "" 
}: ResourceCardProps) {
  const Icon = kindIcons[kind];
  
  return (
    <ShadCard className={`h-full ${className}`}>
      {/* Book Image */}
      <div className="relative w-full min-h-72 overflow-hidden rounded-t-lg">
        <Image
          src="/images/book.jpg"
          alt={`${title} - ${kind}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay with kind badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="text-xs bg-white/90 text-black">
            <Icon className="h-3 w-3 ml-1" />
            {kind}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {href && (
          <Button asChild size="sm" className="w-full">
            <Link href={href} target={kind === "رابط" ? "_blank" : "_self"}>
              {kind === "رابط" ? (
                <>
                  <ExternalLink className="h-4 w-4 ml-2" />
                  زيارة الرابط
                </>
              ) : kind === "فيديو" ? (
                <>
                  <Play className="h-4 w-4 ml-2" />
                  مشاهدة الفيديو
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 ml-2" />
                  تحميل
                </>
              )}
            </Link>
          </Button>
        )}
      </CardContent>
    </ShadCard>
  );
}
