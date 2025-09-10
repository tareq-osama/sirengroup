import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Users, TrendingUp, Shield, Zap, Clock, DollarSign } from "lucide-react";

export default function SmallBusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 py-24 text-center">
          {/* Small label above headline */}
          <p className="text-sm text-muted-foreground mb-8 font-medium tracking-wide">
            For Small Businesses
          </p>
          
          {/* Main headline */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-start text-6xl md:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              Complete business management
              <br />
              <span className="relative">
                for solo entrepreneurs.
                <div className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Everything you need to run your business efficiently. 
            <span className="font-semibold text-foreground"> From client management to payments, all in one place.</span>
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
              Start your free trial
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-3 text-base font-semibold group">
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Everything a small business needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for solo entrepreneurs and small teams who want to look professional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Client Portal</h3>
                <p className="text-sm text-muted-foreground">
                  Professional client portal with your branding. Impress clients and streamline communication.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <DollarSign className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Payment Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Accept payments online with Stripe integration. Get paid faster and more reliably.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Clock className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Task Management</h3>
                <p className="text-sm text-muted-foreground">
                  Keep track of projects and deadlines. Stay organized without the complexity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Shield className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Professional Branding</h3>
                <p className="text-sm text-muted-foreground">
                  White-label everything with your domain, logo, and colors. Look bigger than you are.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Zap className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Easy Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Get started in minutes, not hours. No technical knowledge required.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <TrendingUp className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Grow Your Business</h3>
                <p className="text-sm text-muted-foreground">
                  Scale efficiently with tools that grow with you. No need to switch platforms later.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why small businesses choose Tareq?
            </h2>
            <p className="text-lg text-muted-foreground">
              Built by entrepreneurs, for entrepreneurs.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Affordable Pricing</h3>
                <p className="text-muted-foreground">Start for free, scale as you grow. No hidden fees or surprises.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">No Technical Hassle</h3>
                <p className="text-muted-foreground">Simple setup that anyone can do. Focus on your business, not the tools.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Professional Appearance</h3>
                <p className="text-muted-foreground">Look like a big company with enterprise-grade tools at small business prices.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Personal Support</h3>
                <p className="text-muted-foreground">Get help when you need it. Our team is here to support your success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start free, pay only when you're ready to scale.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-border/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Free</h3>
                <p className="text-3xl font-bold text-foreground mb-4">$0<span className="text-sm text-muted-foreground">/month</span></p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Up to 3 clients</li>
                  <li>• Basic client portal</li>
                  <li>• Task management</li>
                  <li>• Email support</li>
                </ul>
                <Button variant="outline" className="w-full">Get started free</Button>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 border-2">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Pro</h3>
                <p className="text-3xl font-bold text-foreground mb-4">$29<span className="text-sm text-muted-foreground">/month</span></p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Unlimited clients</li>
                  <li>• White-label portal</li>
                  <li>• Advanced features</li>
                  <li>• Priority support</li>
                </ul>
                <Button className="w-full">Start free trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of small businesses using Tareq to look professional and scale efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
              Start your free trial
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-3 text-base font-semibold group">
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 