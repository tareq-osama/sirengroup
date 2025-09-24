'use client';

import { Card as ShadCard, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Award, Loader2 } from "lucide-react";
import { useWebsiteImage } from "@/hooks/use-website-images";

interface FacultyCardProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string; // Direct image URL (optional)
  avatarKey?: string; // Image key for Unsplash service (optional)
  badges: string[];
  className?: string;
}

export function FacultyCard({ 
  name, 
  role, 
  bio, 
  avatar,
  avatarKey,
  badges, 
  className = "" 
}: FacultyCardProps) {
  // Use image service if avatarKey is provided, otherwise use direct avatar
  const { image, loading, error } = useWebsiteImage(avatarKey || '');
  
  // Determine which image source to use
  const finalAvatarSrc = avatarKey ? (image?.url || '') : avatar;
  const finalAvatarAlt = avatarKey ? (image?.alt || name) : name;

  return (
    <ShadCard className={`h-full ${className}`}>
      <CardHeader className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4 bg-muted rounded-full overflow-hidden">
          {loading && avatarKey ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : error && avatarKey ? (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-primary">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          ) : finalAvatarSrc ? (
            <Image
              src={finalAvatarSrc}
              alt={finalAvatarAlt}
              fill
              className="rounded-full object-cover"
              sizes="96px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-primary">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          )}
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
