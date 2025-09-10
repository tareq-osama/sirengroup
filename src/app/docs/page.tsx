import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Book, Code, Settings, Users, Zap, Shield } from "lucide-react";

export default function DocsPage() {
  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick setup and first steps with Tareq",
      icon: Book,
      articles: [
        "Quick Start Guide",
        "Account Setup",
        "First Client Portal",
        "Basic Configuration"
      ]
    },
    {
      title: "Client Portal",
      description: "Everything about creating and managing client portals",
      icon: Users,
      articles: [
        "Portal Setup",
        "Custom Branding",
        "Client Onboarding",
        "Portal Features"
      ]
    },
    {
      title: "API & Integrations",
      description: "Connect Tareq with your existing tools",
      icon: Code,
      articles: [
        "API Overview",
        "Webhooks",
        "Stripe Integration",
        "Third-party Apps"
      ]
    },
    {
      title: "Automation",
      description: "Automate your workflow and save time",
      icon: Zap,
      articles: [
        "Workflow Automation",
        "Email Templates",
        "Scheduled Tasks",
        "Custom Rules"
      ]
    },
    {
      title: "Security & Privacy",
      description: "Keep your data safe and compliant",
      icon: Shield,
      articles: [
        "Security Overview",
        "Data Privacy",
        "User Permissions",
        "Compliance"
      ]
    },
    {
      title: "Advanced Settings",
      description: "Customize Tareq for your specific needs",
      icon: Settings,
      articles: [
        "Custom Fields",
        "Workflow Templates",
        "Advanced Reporting",
        "System Settings"
      ]
    }
  ];

  const popularArticles = [
    "How to set up your first client portal",
    "Customizing your portal branding",
    "Setting up Stripe payments",
    "Creating automated workflows",
    "Managing client permissions",
    "API authentication guide"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 py-24 text-center">
          {/* Small label above headline */}
          <p className="text-sm text-muted-foreground mb-8 font-medium tracking-wide">
            Documentation
          </p>
          
          {/* Main headline */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-start text-6xl md:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              Complete guide to
              <br />
              <span className="relative">
                using Tareq.
                <div className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Everything you need to know about setting up, configuring, and getting the most out of Tareq.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="border-primary/20 border-2">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Quick Start Guide</h2>
                <p className="text-muted-foreground">Get up and running with Tareq in 5 minutes</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    1
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Create Account</h3>
                  <p className="text-sm text-muted-foreground">Sign up and verify your email address</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    2
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Add Branding</h3>
                  <p className="text-sm text-muted-foreground">Upload your logo and set your colors</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    3
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Invite Clients</h3>
                  <p className="text-sm text-muted-foreground">Start inviting clients to your portal</p>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg">Start the guide</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Browse documentation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the information you need to get the most out of Tareq.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category) => (
              <Card key={category.title} className="border-border/20 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {category.articles.map((article) => (
                      <li key={article} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                        {article}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    View all articles
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Popular articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Most frequently viewed documentation articles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="border-border/20 hover:border-primary/20 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{article}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            API Reference
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Build custom integrations with our comprehensive API documentation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-border/20">
              <CardContent className="p-6">
                <Code className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">REST API</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete REST API reference with examples
                </p>
                <Button variant="outline" size="sm" className="w-full">View API docs</Button>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Webhooks</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Set up webhooks for real-time notifications
                </p>
                <Button variant="outline" size="sm" className="w-full">View webhooks</Button>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Authentication</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about API authentication and security
                </p>
                <Button variant="outline" size="sm" className="w-full">View auth docs</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Need help?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
              Contact support
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-3 text-base font-semibold group">
              Join community
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 