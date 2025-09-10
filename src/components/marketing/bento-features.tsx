"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, TrendingUp, Zap, Users, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const mainFeatures = [
  {
    title: "Client Experience Revolution",
    subtitle: "From scattered chaos to premium professional service",
    description: "Transform client relationships overnight with branded portals that make YOU look like the premium agency you are. Watch clients go from frustrated questioners to raving advocates.",
    image: "/corvex-dashboard.jpg",
    results: [
      "87% reduction in status update emails",
      "98.7% client satisfaction rate",
      "3x higher client retention",
      "40% premium pricing justified"
    ],
    icon: <Users className="w-6 h-6" />,
    layout: "default"
  },
  {
    title: "AI-Powered Proposals That Win",
    subtitle: "Stop losing deals to faster competitors",
    description: "Generate professional, winning proposals in minutes instead of days. Our AI learns from million-dollar agencies to create proposals that close deals and command premium rates.",
    image: "/corvex-dashboard.jpg",
    results: [
      "73% higher proposal win rate",
      "5x faster proposal generation",
      "Average 34% higher project values",
      "Zero late proposal deliveries"
    ],
    icon: <Zap className="w-6 h-6" />,
    layout: "large"
  },
  {
    title: "Smart Invoicing & Payments",
    subtitle: "End cash flow nightmares forever",
    description: "Automated invoicing with intelligent payment reminders that actually work. Get paid 23 days faster while spending zero time chasing payments.",
    image: "/corvex-dashboard.jpg",
    results: [
      "23 days faster payment collection",
      "94% reduction in late payments",
      "Zero manual invoice creation",
      "$47K average annual cash flow improvement"
    ],
    icon: <DollarSign className="w-6 h-6" />,
    layout: "wide"
  }
];

const bentoFeatures = [
  {
    title: "Project Management Made Simple",
    description: "Never miss another deadline or scope creep again",
    icon: <CheckCircle className="w-5 h-5" />,
    benefit: "95% on-time delivery rate",
    layout: "default"
  },
  {
    title: "Time Tracking That Actually Works", 
    description: "Automatic time capture and billing integration",
    icon: <Clock className="w-5 h-5" />,
    benefit: "31 hours saved weekly",
    layout: "default"
  },
  {
    title: "Team Collaboration Hub",
    description: "Keep everyone aligned without endless meetings",
    icon: <Users className="w-5 h-5" />,
    benefit: "67% fewer internal meetings",
    layout: "default"
  },
  {
    title: "Revenue Analytics Dashboard",
    description: "See exactly where your money comes from and goes",
    icon: <TrendingUp className="w-5 h-5" />,
    benefit: "289% average revenue growth",
    layout: "large"
  },
  {
    title: "Document & Asset Management",
    description: "Never lose important files or struggle with versions again",
    icon: <Star className="w-5 h-5" />,
    benefit: "Zero lost documents",
    layout: "default"
  },
  {
    title: "Client Communication Center",
    description: "All client conversations in one professional place",
    icon: <Users className="w-5 h-5" />,
    benefit: "Professional image boost",
    layout: "default"
  }
];

export default function BentoFeatures() {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300 tracking-wide uppercase">
              THE TRANSFORMATION FEATURES
            </span>
          </div>
          
                      <h2 className="text-h2 font-bold text-white leading-tight tracking-tight">
            From chaotic mess to
            <span className="block mt-2 text-emerald-300">revenue-generating machine</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Every feature is designed with one goal: 
            <span className="text-white font-semibold"> make you more money while working less</span>. 
            Here's how successful agencies are transforming their operations.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="space-y-32 mb-32">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid gap-16 items-center ${
                index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
              } ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      {feature.icon}
                    </div>
                    <div className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                      GAME CHANGER #{index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-emerald-300 font-semibold">
                    {feature.subtitle}
                  </p>
                  
                  <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {feature.results.map((result, resultIndex) => (
                    <motion.div
                      key={resultIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: resultIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <div className="text-sm text-zinc-300 leading-tight">{result}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg h-auto rounded-xl group shadow-lg"
                >
                  Experience This Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl"
                >
                  <Image
                    src={feature.image}
                    alt={`${feature.title} - See the transformation in action`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent" />
                  
                  {/* Floating Success Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute top-6 right-6 bg-black/90 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-4 py-2 shadow-xl"
                  >
                    <div className="text-center">
                      <div className="text-sm font-bold text-emerald-400">
                        {feature.results[0].split(' ')[0]}
                      </div>
                      <div className="text-xs text-zinc-300">
                        {feature.results[0].split(' ').slice(1).join(' ').replace(/^\d+%\s*/, '')}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* ROI Indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-6 left-6 bg-white text-black rounded-full px-4 py-2 shadow-xl"
                  >
                    <div className="text-sm font-bold">
                      ✅ {index === 0 ? "Client Love" : index === 1 ? "More Wins" : "Faster Pay"}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Features Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              Plus everything else you need to dominate
            </h3>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              These supporting features ensure you never fall back into chaos
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bentoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${
                  feature.layout === 'large' ? 'md:col-span-2' : ''
                } ${
                  feature.layout === 'wide' ? 'lg:col-span-3' : ''
                }`}
              >
                <Card className="bg-zinc-900/50 border-zinc-700 h-full hover:bg-zinc-800/50 transition-colors group">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                        {feature.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-emerald-400">{feature.benefit}</div>
                        <div className="text-xs text-zinc-500">Typical result</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-zinc-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mt-20"
        >
          <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Ready to stop managing chaos and start 
                  <span className="block text-emerald-300">generating revenue?</span>
                </h3>
                
                <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                  Every feature works together to transform your agency into a 
                  <span className="text-white font-semibold"> professional, profitable, scalable business</span>. 
                  See the difference in your first week.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg h-auto rounded-xl group shadow-lg"
                >
                  Start Your Transformation FREE
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-zinc-600 text-white hover:bg-zinc-800/50 px-8 py-6 text-lg h-auto rounded-xl"
                >
                  See 2-Minute Demo
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800 text-sm text-zinc-400">
                <div>✓ 5-minute setup</div>
                <div>✓ Free until first client</div>
                <div>✓ Cancel anytime</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 