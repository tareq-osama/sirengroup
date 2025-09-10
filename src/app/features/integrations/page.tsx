import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Link, Zap, Database, Webhook, Code, Shield, RefreshCw, Settings } from "lucide-react";

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 py-24 text-center">
          {/* Small label above headline */}
          <p className="text-sm text-muted-foreground mb-8 font-medium tracking-wide">
            Integrations & webhooks
          </p>
          
          {/* Main headline */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-start text-6xl md:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              Connect with your
              <br />
              <span className="relative">
                favorite tools.
                <div className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Integrate Tareq with your existing workflow. 
            <span className="font-semibold text-foreground"> Connect to 100+ apps and automate your business processes.</span>
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
              Explore integrations
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-3 text-base font-semibold group">
              View API docs
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
              Powerful integrations & webhooks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect, automate, and extend your workflow with our comprehensive integration platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Link className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">100+ Integrations</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with popular tools like Slack, Zapier, Notion, and more.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Webhook className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Webhooks</h3>
                <p className="text-sm text-muted-foreground">
                  Get real-time notifications when events happen in your Tareq account.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Code className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">REST API</h3>
                <p className="text-sm text-muted-foreground">
                  Build custom integrations with our comprehensive REST API.
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
                  Automate repetitive tasks and workflows across your tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Database className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Data Sync</h3>
                <p className="text-sm text-muted-foreground">
                  Keep your data synchronized across all your business tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Shield className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Secure</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security for all your integrations and data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Popular integrations
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with the tools you already use and love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Stripe", "Slack", "Zapier", "Notion",
              "Google Workspace", "Microsoft 365", "Dropbox", "Box",
              "Trello", "Asana", "Monday.com", "ClickUp",
              "Mailchimp", "ConvertKit", "HubSpot", "Salesforce"
            ].map((tool) => (
              <Card key={tool} className="border-border/20 hover:border-primary/20 transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-sm font-medium text-muted-foreground">{tool.charAt(0)}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{tool}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why integrate with Tareq?
            </h2>
            <p className="text-lg text-muted-foreground">
              Build a connected ecosystem that works for your business.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">No More Data Silos</h3>
                <p className="text-muted-foreground">Keep all your business data connected and synchronized.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Automate Everything</h3>
                <p className="text-muted-foreground">Reduce manual work with powerful automation workflows.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Real-time Updates</h3>
                <p className="text-muted-foreground">Get instant notifications and updates across all your tools.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Custom Solutions</h3>
                <p className="text-muted-foreground">Build exactly what you need with our flexible API.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to connect your tools?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start integrating and automating your workflow today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
              Explore integrations
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-3 text-base font-semibold group">
              View API docs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 