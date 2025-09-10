import { Card as ShadCard, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Award } from "lucide-react";

interface FacultyCardProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  badges: string[];
  className?: string;
}

export function FacultyCard({ 
  name, 
  role, 
  bio, 
  avatar, 
  badges, 
  className = "" 
}: FacultyCardProps) {
  return (
    <ShadCard className={`h-full ${className}`}>
      <CardHeader className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full object-cover"
            sizes="96px"
          />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              <Award className="h-3 w-3 ml-1" />
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </ShadCard>
  );
}
