"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for agencies just getting started",
    ctaText: "Start free",
    features: [
      "Up to 3 active clients",
      "Basic client portal",
      "Project management tools",
      "Automated invoicing",
      "Email support",
      "White-label branding"
    ]
  },
  {
    name: "Professional",
    price: "$49",
    period: "per month",
    description: "Everything serious agencies need to scale",
    ctaText: "Start trial",
    popular: true,
    features: [
      "Unlimited clients & projects",
      "Advanced client portals",
      "AI-powered proposal generation",
      "Smart invoicing & payments",
      "Team collaboration tools",
      "Advanced reporting & analytics",
      "Priority support",
      "Custom domain & branding",
      "Client feedback system",
      "Time tracking & billing",
      "Contract management",
      "API access & integrations"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For agencies doing $100K+ monthly revenue",
    ctaText: "Contact sales",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations & workflows",
      "Advanced security & compliance",
      "Multi-brand management",
      "Priority feature requests",
      "1-on-1 onboarding & training",
      "Custom reporting dashboards",
      "White-glove migration service"
    ]
  }
];

const faqs = [
  {
    question: "How quickly can I see results?",
    answer: "Most agencies see immediate improvements in client communication within 24 hours. Revenue improvements typically show within 30-60 days as clients experience your new professional systems."
  },
  {
    question: "What if my clients don't like the change?",
    answer: "In 3+ years, we've never had a client complain about more professional service. In fact, 94% of agencies report their clients specifically compliment the improved experience within the first month."
  },
  {
    question: "Can I really start completely free?",
    answer: "Absolutely. No credit card required. You only pay when you're ready to add your 4th client."
  }
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center component-spacing">
          <h2 className="text-h2 font-bold text-white mb-4">
            Simple pricing that scales with you
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Start free, upgrade when you need more. No contracts, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={plan.popular ? 'lg:scale-105' : ''}
            >
              <Card className={`h-full relative ${
                plan.popular 
                  ? 'bg-zinc-900/30 border-zinc-700' 
                  : 'bg-transparent border-zinc-800'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-white text-black px-4 py-1 text-sm font-medium rounded-full">
                      Most popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-left space-y-4">
                  <CardTitle className="text-xl font-semibold text-white">{plan.name}</CardTitle>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">
                        {plan.price}
                      </span>
                      {plan.period !== "contact us" && (
                        <span className="text-zinc-400">/{plan.period}</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-zinc-400">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-zinc-500" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href="#"
                      className={plan.popular ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                    >
                      {plan.ctaText}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-left space-y-4">
            <h3 className="text-h3 font-semibold text-white">
              Frequently asked questions
            </h3>
            <p className="text-zinc-400">
              Get answers to common questions about Tareq
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left p-0 h-auto"
                  >
                    <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-pointer w-full">
                      <CardContent className="p-6">
                        <h4 className="font-medium text-white">{faq.question}</h4>
                      </CardContent>
                    </Card>
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-zinc-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">{faq.question}</DialogTitle>
                    <DialogDescription className="text-zinc-400 leading-relaxed pt-4">
                      {faq.answer}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="text-left pt-8">
            <p className="text-zinc-500 mb-4 text-sm">
              Still have questions?
            </p>
            <a href="#" className="btn-secondary">
              Contact support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

