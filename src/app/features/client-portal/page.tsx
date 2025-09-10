import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Globe, Zap, Users, Shield, MessageSquare, CreditCard } from "lucide-react";

export default function ClientPortalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 py-24 text-center">
          {/* Small label above headline */}
          <p className="text-sm text-muted-foreground mb-8 font-medium tracking-wide">
            White-label client portal
          </p>
          
          {/* Main headline */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-start text-6xl md:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              Professional client portal
              <br />
              <span className="relative">
                with your branding.
                <div className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Give your clients a professional experience with your own branded portal. 
            <span className="font-semibold text-foreground"> Custom domain, your colors, your logo.</span>
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
              Try client portal live
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
              Everything your clients need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete client portal that handles payments, communication, and project management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Globe className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">White Labelled</h3>
                <p className="text-sm text-muted-foreground">
                  Add your own domain name and branding. Your clients will never know they're using Tareq.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <CreditCard className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Payment Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Accept payments directly through your portal with Stripe integration.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <MessageSquare className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Communication</h3>
                <p className="text-sm text-muted-foreground">
                  Built-in messaging system for seamless client communication.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Team Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Invite team members and clients to collaborate on projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Shield className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Secure & Private</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security with data encryption and privacy controls.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Zap className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Easy Onboarding</h3>
                <p className="text-sm text-muted-foreground">
                  Simple client onboarding process that takes just a few clicks.
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
              Why choose a branded client portal?
            </h2>
            <p className="text-lg text-muted-foreground">
              Stand out from competitors and provide a professional experience.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Professional Branding</h3>
                <p className="text-muted-foreground">Your clients see your brand, not a generic tool.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Better Client Experience</h3>
                <p className="text-muted-foreground">Provide a seamless, branded experience that builds trust.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Increased Credibility</h3>
                <p className="text-muted-foreground">Professional tools signal professionalism to your clients.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Streamlined Workflow</h3>
                <p className="text-muted-foreground">Everything in one place - payments, communication, and projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to upgrade your client experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with your branded client portal today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
              Get started now
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