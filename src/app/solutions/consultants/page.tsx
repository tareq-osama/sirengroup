import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Users, Briefcase, Shield, Zap, Clock, DollarSign, Award } from "lucide-react";

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 py-24 text-center">
          {/* Small label above headline */}
          <p className="text-sm text-muted-foreground mb-8 font-medium tracking-wide">
            For Consultants
          </p>
          
          {/* Main headline */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-start text-6xl md:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              Professional consulting platform
              <br />
              <span className="relative">
                for experts.
                <div className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Deliver exceptional value to your clients with a platform designed for consultants. 
            <span className="font-semibold text-foreground"> Manage projects, track time, and build lasting relationships.</span>
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
              Built for consulting professionals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to deliver exceptional consulting services and grow your practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Briefcase className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Project Management</h3>
                <p className="text-sm text-muted-foreground">
                  Organize consulting projects, track deliverables, and manage client expectations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Clock className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Time Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track billable hours, generate reports, and ensure accurate invoicing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Client Portal</h3>
                <p className="text-sm text-muted-foreground">
                  Professional client portal with your branding. Share insights and deliverables securely.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <DollarSign className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Invoicing & Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Generate professional invoices, accept payments, and track revenue.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Award className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Expert Branding</h3>
                <p className="text-sm text-muted-foreground">
                  White-label everything with your domain and branding. Look like the expert you are.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Zap className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Automate repetitive tasks and focus on delivering value to your clients.
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
              Why consultants choose Tareq?
            </h2>
            <p className="text-lg text-muted-foreground">
              Built by consultants, for consultants.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Professional Appearance</h3>
                <p className="text-muted-foreground">Impress clients with a polished, branded experience that reflects your expertise.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Client Communication</h3>
                <p className="text-muted-foreground">Keep clients informed and engaged with transparent project updates and deliverables.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Time Management</h3>
                <p className="text-muted-foreground">Track billable hours accurately and ensure you're compensated for all your work.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Scalable Growth</h3>
                <p className="text-muted-foreground">Scale your consulting practice efficiently without outgrowing your tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-relaxed italic">
            "Tareq has transformed how I deliver consulting services. My clients love the professional portal, 
            and I can focus on delivering value instead of managing tools."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-foreground">SC</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Sarah Chen</p>
              <p className="text-sm text-muted-foreground">Management Consultant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Pricing that scales with your practice
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start free, upgrade as you grow your consulting business.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-border/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Starter</h3>
                <p className="text-3xl font-bold text-foreground mb-4">$0<span className="text-sm text-muted-foreground">/month</span></p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Up to 3 clients</li>
                  <li>• Basic project management</li>
                  <li>• Time tracking</li>
                  <li>• Email support</li>
                </ul>
                <Button variant="outline" className="w-full">Get started free</Button>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 border-2">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Professional</h3>
                <p className="text-3xl font-bold text-foreground mb-4">$49<span className="text-sm text-muted-foreground">/month</span></p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Up to 20 clients</li>
                  <li>• White-label portal</li>
                  <li>• Advanced reporting</li>
                  <li>• Priority support</li>
                </ul>
                <Button className="w-full">Start free trial</Button>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-foreground mb-4">$99<span className="text-sm text-muted-foreground">/month</span></p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Unlimited clients</li>
                  <li>• Team collaboration</li>
                  <li>• Custom integrations</li>
                  <li>• Dedicated support</li>
                </ul>
                <Button variant="outline" className="w-full">Contact sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to elevate your consulting practice?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of consultants using Tareq to deliver exceptional client experiences.
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