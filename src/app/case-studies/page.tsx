"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Star, TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    company: "Velocity Digital",
    founder: "Marcus Rodriguez",
    title: "From $500K Chaos to $2.1M Professional Powerhouse",
    results: [
      { metric: "+320%", label: "Revenue Growth" },
      { metric: "23 days", label: "Faster Payments" },
      { metric: "87%", label: "Fewer Status Emails" },
      { metric: "4.9★", label: "Client Satisfaction" }
    ],
            quote: "Tareq didn't just organize our chaos—it transformed us into the professional agency we always wanted to be. Our clients actually thank us for the experience now.",
    image: "/corvex-dashboard.jpg",
    featured: true
  },
  {
    company: "Digital Spark",
    founder: "Sarah Chen",
    title: "Doubling Team Productivity While Scaling to $1.2M",
    results: [
      { metric: "+240%", label: "Team Productivity" },
      { metric: "$1.2M", label: "Annual Revenue" }
    ],
            quote: "The day I switched to Tareq was the day I stopped losing sleep over client management.",
    image: "/corvex-dashboard.jpg"
  },
  {
    company: "Growth Labs",
    founder: "Jessica Thompson",
    title: "From Near Bankruptcy to 7-Figure Success",
    results: [
      { metric: "$1.8M", label: "Annual Revenue" },
      { metric: "95%", label: "On-Time Delivery" }
    ],
    quote: "This platform literally saved my business from failure. 6 months later: $1.8M revenue, 95% on-time delivery.",
    image: "/corvex-dashboard.jpg"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 py-24 text-center">
          {/* Small label above headline */}
          <p className="text-sm text-muted-foreground mb-8 font-medium tracking-wide">
            Case Studies
          </p>
          
          {/* Main headline */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-start text-6xl md:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              From chaos to excellence:
              <br />
              <span className="relative">
                Real business success stories.
                <div className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            See how businesses like yours transformed their operations, delighted clients, and 
            <span className="font-semibold text-foreground"> multiplied their revenue</span> with Tareq.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Card className="border-primary/20 border-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                      <span className="text-primary font-semibold text-sm tracking-wider">
                        Featured success story
                      </span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      {caseStudies[0].title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {caseStudies[0].results.map((result, index) => (
                      <div key={index} className="bg-muted/50 border border-border rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{result.metric}</div>
                        <div className="text-sm text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
                    "{caseStudies[0].quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-semibold text-foreground">{caseStudies[0].founder}</div>
                      <div className="text-sm text-muted-foreground">Founder, {caseStudies[0].company}</div>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[400px] lg:min-h-full">
                  <Image
                    src={caseStudies[0].image}
                    alt={`${caseStudies[0].company} dashboard`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              More success stories
            </h2>
            <p className="text-lg text-muted-foreground">
              See how other businesses transformed with Tareq.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.slice(1).map((study, index) => (
              <Card key={index} className="border-border/20 hover:border-primary/20 transition-colors">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {study.title}
                    </h3>
                    <div className="text-primary font-medium">{study.company}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-muted/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-primary">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="text-sm text-muted-foreground italic">
                    "{study.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-foreground">{study.founder}</div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              The numbers speak for themselves
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real businesses using Tareq.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Businesses transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Revenue generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24hrs</div>
              <div className="text-muted-foreground">Average setup time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="border-primary/20 border-2">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-foreground leading-tight">
                  Ready to write your success story?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join these successful businesses and transform your operations from chaos to excellence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="px-8 py-3 text-base font-semibold group" asChild>
                  <Link href="/pricing">
                    Start Your Transformation FREE
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="ghost" className="px-8 py-3 text-base font-semibold group" asChild>
                  <Link href="/contact">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 