"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/marketing/mode-toggle";

const solutions = [
  {
    title: "For Small Businesses",
    href: "/solutions/small-business",
    description: "Complete business management platform for solo entrepreneurs"
  },
  {
    title: "For Consultants",
    href: "/solutions/consultants",
    description: "Professional consulting platform for experts"
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "See how businesses transformed with Tareq"
  }
];

const resources = [
  {
    title: "Help Center",
    href: "/help",
    description: "Get answers to your questions quickly"
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest insights on business growth and management"
  },
  {
    title: "Documentation",
    href: "/docs",
    description: "Complete guide to using Tareq platform"
  }
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll-based navigation visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navigation when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // Hide navigation when scrolling down (but not at the very top)
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.3
            }}
          >
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/tareq-logo.svg" alt="Tareq Logo" width={80} height={100} />
            </Link>


            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <ModeToggle />
              <Button size="sm" asChild>
                <Link href="https://tareqosama.com/contact">Let's work together</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300" 
            onClick={() => setIsMobileMenuOpen(false)} 
          />
          
          {/* Mobile Menu Container */}
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-background border-b border-border/20 shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out">
            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto">
              <div className="max-w-7xl mx-auto px-6 py-6 space-y-6 pb-8">
                
                {/* Mobile Platform 
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Platform</h3>
                  <div className="space-y-2 pl-4">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="font-medium">{solution.title}</div>
                        <div className="text-sm text-muted-foreground">{solution.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>*/}

                {/* Mobile Resources 
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Resources</h3>
                  <div className="space-y-2 pl-4">
                    {resources.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="font-medium">{resource.title}</div>
                        <div className="text-sm text-muted-foreground">{resource.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>*/}

                {/* Mobile Pricing 
                <div className="space-y-2">
                  <Link
                    href="/pricing"
                    className="block py-2 font-semibold text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </div>
                  */}
                {/* Mobile CTA */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-border/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Theme</span>
                    <ModeToggle />
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://tareqosama.com/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Join Newsletter
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://tareqosama.com/consultation" onClick={() => setIsMobileMenuOpen(false)}>
                    Get a Consultation                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}