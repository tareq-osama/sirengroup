"use client";

import React, { useState } from "react";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, Zap, BookOpen, HelpCircle, FileText, Lightbulb } from "lucide-react";
import { useGTM } from "@/hooks/use-gtm";

const solutions = [
  {
    title: "Agency Management",
    href: "/solutions/agency",
    description: "Complete platform for digital agencies and consultancies"
  },
  {
    title: "Freelancer Tools", 
    href: "/solutions/freelancer",
    description: "Everything solo professionals need to scale their business"
  },
  {
    title: "Consulting Platform",
    href: "/solutions/consulting", 
    description: "Professional consulting platform for experts"
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "See how agencies transformed with Tareq"
  }
];

const resources = [
  {
    title: "Blog",
    href: "/blog",
    description: "Latest insights on agency growth and management",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: "Help Center",
    href: "/help",
    description: "Get answers to your questions quickly",
    icon: <HelpCircle className="w-5 h-5" />
  },
  {
    title: "Templates",
    href: "/templates",
    description: "Professional templates for proposals and contracts",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Documentation",
    href: "/docs",
    description: "Complete guide to using Tareq platform",
    icon: <Lightbulb className="w-5 h-5" />
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { trackButtonClick, trackEvent } = useGTM();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackEvent('scroll_to_section', { section_id: id });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.substring(1);
      scrollToSection(id);
    } else {
      trackButtonClick('Navigation Link', 'navbar', href);
    }
  };

  const handleGetStartedClick = () => {
    trackButtonClick('Get Started', 'navbar');
    trackEvent('cta_click', { 
      button_text: 'Get Started',
      location: 'navbar'
    });
  };

  const handleLoginClick = () => {
    trackButtonClick('Login', 'navbar');
  };

  const handleLogoClick = () => {
    trackButtonClick('Logo', 'navbar', '/');
  };

  const handleMobileMenuToggle = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen);
    if (isOpen) {
      trackEvent('mobile_menu_open');
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="relative w-32 h-8" onClick={handleLogoClick}>
              <Image
                src="/tareq-logo.svg"
                alt="Tareq - Professional Agency Platform"
                fill
                className="object-contain"
                priority
                sizes="128px"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Platform Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-zinc-300 hover:text-white data-[state=open]:text-white">
                      Platform
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white/10 to-white/20 p-6 no-underline outline-none focus:shadow-md border border-white/20"
                              href="/"
                              onClick={() => handleNavigation('/')}
                            >
                              <Zap className="h-6 w-6 text-white" />
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                Tareq Platform
                              </div>
                              <p className="text-sm leading-tight text-zinc-400">
                                The complete agency management platform that transforms chaos into revenue.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {solutions.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                                onClick={() => handleNavigation(item.href)}
                              >
                                <div className="text-sm font-medium leading-none text-white">
                                  {item.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Resources Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-zinc-300 hover:text-white data-[state=open]:text-white">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {resources.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="flex items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                                onClick={() => handleNavigation(item.href)}
                              >
                                <div className="mr-3 text-zinc-400">
                                  {item.icon}
                                </div>
                                <div>
                                  <div className="text-sm font-medium leading-none text-white">
                                    {item.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-zinc-400 mt-1">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Pricing */}
                  <NavigationMenuItem>
                    <Link 
                      href="/pricing" 
                      className="text-zinc-300 hover:text-white transition-colors px-4 py-2 text-sm font-medium"
                      onClick={() => handleNavigation('/pricing')}
                    >
                      Pricing
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login">
                <Button 
                  variant="ghost" 
                  className="text-zinc-300 hover:text-white hover:bg-white/10"
                  onClick={handleLoginClick}
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button 
                  className="bg-white text-black hover:bg-zinc-200 transition-colors"
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={handleMobileMenuToggle}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] bg-black border-zinc-800">
                  <SheetHeader>
                    <SheetTitle className="text-left">
                      <div className="relative w-24 h-6">
                        <Image
                          src="/tareq-logo.svg"
                          alt="Tareq"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="mt-8 space-y-6">
                    {/* Mobile Platform Links */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
                      <div className="space-y-3">
                        {solutions.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block py-2 text-zinc-300 hover:text-white transition-colors"
                            onClick={() => {
                              handleNavigation(item.href);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <div className="font-medium">{item.title}</div>
                            <div className="text-sm text-zinc-500">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Resources Links */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                      <div className="space-y-3">
                        {resources.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center py-2 text-zinc-300 hover:text-white transition-colors"
                            onClick={() => {
                              handleNavigation(item.href);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <div className="mr-3 text-zinc-400">
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-medium">{item.title}</div>
                              <div className="text-sm text-zinc-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Pricing */}
                    <Link 
                      href="/pricing" 
                      className="block py-2 text-zinc-300 hover:text-white transition-colors font-medium"
                      onClick={() => {
                        handleNavigation('/pricing');
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Pricing
                    </Link>

                    {/* Mobile CTA Buttons */}
                    <div className="pt-6 space-y-4 border-t border-zinc-800">
                      <Link href="/login" className="block">
                        <Button 
                          variant="outline" 
                          className="w-full border-zinc-700 text-zinc-300 hover:text-white hover:bg-white/10"
                          onClick={() => {
                            handleLoginClick();
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          Login
                        </Button>
                      </Link>
                      <Link href="/signup" className="block">
                        <Button 
                          className="w-full bg-white text-black hover:bg-zinc-200"
                          onClick={() => {
                            handleGetStartedClick();
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}