"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/marketing/mode-toggle";
import { navigationItems } from "@/lib/content";

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
                  <span className="text-2xl font-bold text-primary">Sirene</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center">
                  {navigationItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-foreground whitespace-nowrap ${
                        pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
                      } ${index > 0 ? 'mr-8' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center space-x-4">
                  <ModeToggle />
                  <Button size="sm" asChild>
                    <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="h-4 w-4 ml-2" />
                      تواصل عبر واتساب
                    </Link>
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
                
                {/* Mobile Navigation Links */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">القائمة الرئيسية</h3>
                  <div className="space-y-2 pr-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block py-2 transition-colors hover:text-foreground whitespace-nowrap ${
                          pathname === item.href ? 'text-foreground font-medium' : 'text-muted-foreground'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-border/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">المظهر</span>
                    <ModeToggle />
                  </div>
                  <Button size="sm" asChild>
                    <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                      <MessageSquare className="h-4 w-4 ml-2" />
                      تواصل عبر واتساب
                    </Link>
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