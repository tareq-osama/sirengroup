"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const agencyFeatures = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "White-Labeled Client Portals",
    description: "Professional, branded client experiences that reflect your agency's quality and attention to detail."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI-Powered Proposals",
    description: "Generate winning proposals in minutes using AI trained on successful agency methodologies."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Revenue Optimization",
    description: "Smart invoicing, payment automation, and financial insights that accelerate cash flow."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise-Grade Security",
    description: "Bank-level security with SOC 2 compliance, perfect for high-value client relationships."
  }
];

const benefits = [
  "Eliminate 87% of status update emails",
  "Get paid 23 days faster on average",
  "Increase project margins by 35%",
  "Reduce admin time by 40%",
  "Improve client satisfaction by 95%",
  "Scale team productivity by 240%"
];

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300 tracking-wide uppercase">
                FOR DIGITAL AGENCIES
              </span>
            </div>
            
            <h1 className="text-h1 font-bold leading-tight tracking-tight">
              Stop losing clients to
              <span className="block mt-2 text-emerald-300">unprofessional chaos</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Transform your agency from scattered spreadsheets to professional powerhouse. 
              <span className="text-white font-semibold"> 800+ agencies already scaled with Tareq</span> - 
              average revenue growth of 289%.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg h-auto rounded-xl group shadow-lg"
                asChild
              >
                <Link href="/#pricing">
                  Transform Your Agency FREE
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-zinc-600 text-white hover:bg-zinc-800/50 px-8 py-6 text-lg h-auto rounded-xl"
                asChild
              >
                <Link href="/case-studies">
                  See Success Stories
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Your agency is bleeding money
                  <span className="block text-red-400">while you sleep</span>
                </h2>
                
                <div className="space-y-4 text-lg text-zinc-400">
                  <p>
                    Every day without professional systems costs you <span className="text-red-400 font-bold">$128 in lost revenue</span>.
                  </p>
                  <p>
                    Clients are frustrated with constant status emails, late payments pile up, 
                    and your team drowns in manual busywork instead of delivering great work.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-red-400 font-semibold">Daily losses from unprofessional operations:</div>
                <ul className="space-y-2 text-zinc-400">
                  <li>• $47 lost to payment delays</li>
                  <li>• $31 wasted on admin overhead</li>
                  <li>• $28 from client communication chaos</li>
                  <li>• $22 in team productivity loss</li>
                </ul>
                <div className="text-lg font-bold text-red-400">= $128/day = $47,000/year bleeding</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-red-500/20">
                <Image
                  src="/corvex-dashboard.jpg"
                  alt="Chaotic agency operations"
                  fill
                  className="object-cover grayscale"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg p-4">
                  <div className="text-red-300 font-bold">CHAOS MODE</div>
                  <div className="text-red-200 text-sm">Scattered, unprofessional, bleeding money</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="py-20 px-6 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              The professional agency platform
              <span className="block mt-2 text-emerald-300">that changes everything</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Stop the bleeding. Start professional operations that clients love and pay premium for.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {agencyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-700 h-full">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-500/20">
                <Image
                  src="/corvex-dashboard.jpg"
                  alt="Professional agency operations with Tareq"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4">
                  <div className="text-emerald-300 font-bold">PROFESSIONAL MODE</div>
                  <div className="text-emerald-200 text-sm">Organized, branded, revenue-generating</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Results agencies see within 30 days:
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
                <div className="text-emerald-300 font-bold mb-2">Average transformation:</div>
                <div className="text-2xl font-bold text-white">From $500K chaos to $2.1M powerhouse</div>
                <div className="text-emerald-400 text-sm mt-1">Based on 800+ successful agencies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Your competitors are already
                    <span className="block mt-2 text-red-400">stealing your clients</span>
                  </h3>
                  <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                    Every minute you wait, you lose <span className="text-red-400 font-bold">$5.33</span> to unprofessional systems. 
                    Your competitors using Tareq are closing deals you're losing.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg"
                    className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg h-auto rounded-xl group shadow-lg"
                    asChild
                  >
                    <Link href="/#pricing">
                      Stop the bleeding - Start free now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-zinc-600 text-white hover:bg-zinc-800/50 px-8 py-6 text-lg h-auto rounded-xl"
                    asChild
                  >
                    <Link href="/contact">
                      Schedule Emergency Demo
                    </Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800 text-sm text-zinc-400">
                  <div>✓ 5-minute setup</div>
                  <div>✓ Free until first client</div>
                  <div>✓ 289% average growth</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 