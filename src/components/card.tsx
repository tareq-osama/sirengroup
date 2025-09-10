import { Card as ShadCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  actions?: ReactNode;
  className?: string;
}

export function Card({ icon, title, description, actions, className = "" }: CardProps) {
  return (
    <ShadCard className={`h-full ${className}`}>
      <CardHeader>
        {icon && (
          <div className="mb-4 text-primary">
            {icon}
          </div>
        )}
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      {actions && (
        <CardContent className="pt-0">
          {actions}
        </CardContent>
      )}
    </ShadCard>
  );
}
