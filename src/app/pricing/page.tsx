import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Star, Zap, Users, Shield } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Up to 3 clients",
        "Basic client portal",
        "Task management",
        "Email support",
        "1GB storage"
      ],
      cta: "Get started free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "Up to 50 clients",
        "White-label portal",
        "Advanced task management",
        "Priority support",
        "10GB storage",
        "Custom branding",
        "API access",
        "Webhooks"
      ],
      cta: "Start free trial",
      popular: true
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "For established businesses",
      features: [
        "Unlimited clients",
        "Advanced portal features",
        "Team collaboration",
        "Dedicated support",
        "100GB storage",
        "Custom integrations",
        "Advanced analytics",
        "SLA guarantee"
      ],
      cta: "Start free trial",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees. You only pay the monthly subscription fee."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees."
    },
    {
      question: "Do you offer discounts for annual plans?",
      answer: "Yes, annual plans come with a 20% discount compared to monthly billing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 py-24 text-center">
          {/* Small label above headline */}
          <p className="text-sm text-muted-foreground mb-8 font-medium tracking-wide">
            Pricing
          </p>
          
          {/* Main headline */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-start text-6xl md:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              Simple, transparent
              <br />
              <span className="relative">
                pricing.
                <div className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Start free, scale as you grow. No hidden fees, no surprises.
            <span className="font-semibold text-foreground"> Choose the plan that's right for your business.</span>
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="text-sm text-muted-foreground">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-muted rounded-full p-1 cursor-pointer">
                <div className="w-4 h-4 bg-primary rounded-full transition-transform"></div>
              </div>
            </div>
            <span className="text-sm text-foreground font-medium">Annual <span className="text-primary">(Save 20%)</span></span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.name} className={`border-border/20 relative ${plan.popular ? 'border-primary/20 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Compare features
            </h2>
            <p className="text-lg text-muted-foreground">
              See what's included in each plan.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/20">
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">Free</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">Pro</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">Business</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="border-b border-border/10">
                  <td className="py-4 px-6 text-sm text-muted-foreground">Clients</td>
                  <td className="py-4 px-6 text-center text-sm">3</td>
                  <td className="py-4 px-6 text-center text-sm">50</td>
                  <td className="py-4 px-6 text-center text-sm">Unlimited</td>
                </tr>
                <tr className="border-b border-border/10">
                  <td className="py-4 px-6 text-sm text-muted-foreground">Storage</td>
                  <td className="py-4 px-6 text-center text-sm">1GB</td>
                  <td className="py-4 px-6 text-center text-sm">10GB</td>
                  <td className="py-4 px-6 text-center text-sm">100GB</td>
                </tr>
                <tr className="border-b border-border/10">
                  <td className="py-4 px-6 text-sm text-muted-foreground">White-label Portal</td>
                  <td className="py-4 px-6 text-center text-sm">❌</td>
                  <td className="py-4 px-6 text-center text-sm">✅</td>
                  <td className="py-4 px-6 text-center text-sm">✅</td>
                </tr>
                <tr className="border-b border-border/10">
                  <td className="py-4 px-6 text-sm text-muted-foreground">API Access</td>
                  <td className="py-4 px-6 text-center text-sm">❌</td>
                  <td className="py-4 px-6 text-center text-sm">✅</td>
                  <td className="py-4 px-6 text-center text-sm">✅</td>
                </tr>
                <tr className="border-b border-border/10">
                  <td className="py-4 px-6 text-sm text-muted-foreground">Team Collaboration</td>
                  <td className="py-4 px-6 text-center text-sm">❌</td>
                  <td className="py-4 px-6 text-center text-sm">❌</td>
                  <td className="py-4 px-6 text-center text-sm">✅</td>
                </tr>
                <tr className="border-b border-border/10">
                  <td className="py-4 px-6 text-sm text-muted-foreground">Priority Support</td>
                  <td className="py-4 px-6 text-center text-sm">❌</td>
                  <td className="py-4 px-6 text-center text-sm">✅</td>
                  <td className="py-4 px-6 text-center text-sm">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why choose Tareq?
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for businesses that want to look professional and scale efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mx-auto mb-4">
                <Zap className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Setup</h3>
              <p className="text-sm text-muted-foreground">
                Get started in minutes, not hours. No technical knowledge required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mx-auto mb-4">
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Professional Branding</h3>
              <p className="text-sm text-muted-foreground">
                White-label everything with your domain, logo, and colors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mx-auto mb-4">
                <Shield className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level security with data encryption and privacy controls.
              </p>
            </div>
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
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of businesses using Tareq to look professional and scale efficiently.
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