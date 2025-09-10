import { ReactNode } from "react";

interface IconTitleProps {
  icon: ReactNode;
  title: string;
  className?: string;
}

export function IconTitle({ icon, title, className = "" }: IconTitleProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
    </div>
  );
}
