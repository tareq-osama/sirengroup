import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const footerLinks = {
  Links: [
  ],
  Features: [
    { title: "White label client portal for businesses", href: "/features/client-portal" },
    { title: "Task management for businesses", href: "/features/tasks" },
    { title: "Integrations & webhooks", href: "/features/integrations" },
  ],
  "Free resources": [
    { title: "Productized service AI idea generator", href: "/tools/idea-generator" },
    { title: "Productized service course", href: "/course" },
  ],
  Legal: [
    { title: "Terms", href: "/terms" },
    { title: "Privacy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/20 bg-background/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">


     

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/20">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
          
                      {/* Logo */}
                      <Link href="/" className="flex items-center gap-2">
                        <Image src="/tareq-logo.svg" alt="Tareq Logo" width={100} height={100} />
                      </Link>

          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 tareqosama.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}