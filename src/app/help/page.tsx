"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Search, HelpCircle, Book, MessageCircle, Video, FileText, Mail, Clock } from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    question: "How quickly can I set up Tareq for my business?",
    answer: "Most businesses are up and running in under 5 minutes. Our setup wizard guides you through creating your first client portal, and you can invite clients immediately."
  },
  {
    question: "What if my clients don't want to use a new system?",
    answer: "Our client portals are designed to be intuitive and valuable from day one. Clients love having a central place to track their projects, see progress, and communicate. We provide templates to help introduce the system."
  },
  {
    question: "Can I customize the branding to match my business?",
    answer: "Absolutely! Every client portal is fully white-labeled with your logo, colors, and branding. Your clients will see a professional extension of your business, not a third-party tool."
  },
  {
    question: "How does the payment processing work?",
    answer: "We integrate with Stripe to handle all payments securely. Your clients can pay directly through your branded portal, and funds are deposited directly to your connected bank account."
  },
  {
    question: "What happens if I need to cancel my subscription?",
    answer: "You can cancel anytime with one click. Your data remains accessible for 30 days, and we provide export tools to take your information with you. No contracts or cancellation fees."
  },
  {
    question: "Do you integrate with tools we're already using?",
    answer: "Yes! Tareq integrates with popular tools like Slack, Trello, Asana, QuickBooks, and more. We also have a robust API for custom integrations."
  }
];

const supportCategories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Step-by-step guides to set up your business",
    link: "/docs"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch detailed walkthroughs of key features",
    link: "/docs"
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Complete reference for all Tareq features",
    link: "/docs"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    link: "#chat"
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 py-24 text-center">
          {/* Small label above headline */}
          <p className="text-sm text-muted-foreground mb-8 font-medium tracking-wide">
            Help Center
          </p>
          
          {/* Main headline */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-start text-6xl md:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              How can we
              <br />
              <span className="relative">
                help you today?
                <div className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Find answers to common questions, explore our documentation, or get in touch with our support team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or guides..."
                className="w-full pl-12 pr-4 py-4 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Quick help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the type of help you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <Card key={index} className="border-border/20 hover:border-primary/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary" asChild>
                    <Link href={category.link}>
                      Explore
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to the most common questions about Tareq
            </p>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-border/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground leading-tight">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="border-primary/20 border-2">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-foreground leading-tight">
                  Still need help?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Our support team is here to help you succeed. Get in touch and we'll respond within 2 hours during business hours.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="px-8 py-3 text-base font-semibold" asChild>
                  <Link href="/contact">
                    Contact Support
                  </Link>
                </Button>
                
                <Button size="lg" variant="ghost" className="px-8 py-3 text-base font-semibold group">
                  Live Chat
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/20 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>2-hour response time</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  <span>Expert support team</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>Available Mon-Fri</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 