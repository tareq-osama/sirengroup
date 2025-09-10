"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const successMetrics = [
  { 
    number: "289%", 
    label: "Average Revenue Growth",
    subtext: "In first 6 months"
  },
  { 
    number: "4.9★", 
    label: "Customer Satisfaction", 
    subtext: "From 2,847+ reviews"
  },
  { 
    number: "$4.2M", 
    label: "Revenue Processed",
    subtext: "Last 30 days alone"
  },
  { 
    number: "23 Days", 
    label: "Faster Payments",
    subtext: "Average collection time"
  }
];

const testimonials = [
  {
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "Velocity Digital",
    revenue: "$2.1M ARR",
    image: "/api/placeholder/60/60",
            quote: "I was bleeding money on manual processes and unprofessional client experiences. Tareq saved my agency. We went from struggling to scale past $500K to hitting $2.1M in 18 months. My clients actually BEG me to work with them now.",
    results: "+320% revenue growth",
    featured: true
  },
  {
    name: "Sarah Chen",
    role: "Agency Owner",
    company: "Digital Spark",
    revenue: "$1.2M ARR",
    image: "/api/placeholder/60/60",
            quote: "The day I switched to Tareq was the day I stopped losing sleep over client management. My team productivity doubled, client complaints disappeared, and I finally started charging what I'm worth.",
    results: "Doubled team productivity"
  },
  {
    name: "David Kim",
    role: "Creative Director",
    company: "Apex Creative",
    revenue: "$850K ARR",
    image: "/api/placeholder/60/60",
            quote: "Tareq didn't just organize my chaos—it transformed my entire business model. I went from firefighting daily crises to strategic growth planning. Best investment I've ever made.",
    results: "Zero daily crises"
  },
  {
    name: "Jessica Thompson",
    role: "Founder",
    company: "Growth Labs",
    revenue: "$1.8M ARR",
    image: "/api/placeholder/60/60",
            quote: "My agency was drowning in spreadsheets and missed deadlines. 6 months with Tareq later: $1.8M revenue, 95% on-time delivery, and clients who refer us constantly. This platform literally saved my business from failure.",
    results: "95% on-time delivery",
    success: true
  }
];

const companyLogos = [
  { name: "Velocity Digital", logo: "VD" },
  { name: "Digital Spark", logo: "DS" },
  { name: "Apex Creative", logo: "AC" },
  { name: "Growth Labs", logo: "GL" },
  { name: "Peak Performance", logo: "PP" },
  { name: "Storm Digital", logo: "SD" },
  { name: "Bright Future", logo: "BF" },
  { name: "NextGen Agency", logo: "NG" }
];

export default function SocialProof() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700">
            <Award className="w-4 h-4 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide">Proven success stories</span>
          </div>
          
          <h2 className="text-h2 font-bold text-white leading-tight tracking-tight">
            Real agencies, real results,
            <span className="block mt-2 text-zinc-300">real revenue growth</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Don't take our word for it. Here's what happens when agencies stop accepting chaos 
            and start <span className="text-white font-semibold">demanding excellence from their systems</span>.
          </p>
        </motion.div>

        {/* Success Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-900/50 border-zinc-700 text-center p-6 group hover:bg-zinc-800/50 transition-colors">
                <CardContent className="p-0 space-y-3">
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-400 group-hover:scale-105 transition-transform">
                    {metric.number}
                  </div>
                  <div className="text-sm font-medium text-white">{metric.label}</div>
                  <div className="text-xs text-zinc-400">{metric.subtext}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Large Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <Card className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/20 h-full relative overflow-hidden">
              <CardContent className="p-10 space-y-8">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-emerald-400 font-semibold ml-2">Featured success</span>
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed">
                  "{testimonials[0].quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonials[0].image} alt={testimonials[0].name} />
                      <AvatarFallback className="bg-emerald-500/20 text-emerald-400">
                        {testimonials[0].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{testimonials[0].name}</div>
                      <div className="text-sm text-zinc-400">{testimonials[0].role}, {testimonials[0].company}</div>
                      <div className="text-sm font-medium text-emerald-400">{testimonials[0].revenue}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-400">{testimonials[0].results}</div>
                    <div className="text-sm text-zinc-400">Results achieved</div>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <TrendingUp className="w-full h-full text-emerald-400" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Medium Testimonials */}
          <div className="lg:col-span-4 space-y-8">
            {testimonials.slice(1, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-700 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-zinc-300 leading-relaxed text-sm">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-zinc-700 text-zinc-300 text-xs">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">{testimonial.name}</div>
                        <div className="text-xs text-zinc-400">{testimonial.company}</div>
                      </div>
                      <div className="text-xs font-semibold text-emerald-400">{testimonial.results}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border-zinc-700 relative overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold text-sm tracking-wider">
                      From near bankruptcy to 7-figures
                    </span>
                  </div>
                  
                  <blockquote className="text-lg lg:text-xl text-white leading-relaxed">
                    "{testimonials[3].quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonials[3].image} alt={testimonials[3].name} />
                      <AvatarFallback className="bg-emerald-500/20 text-emerald-400">
                        {testimonials[3].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{testimonials[3].name}</div>
                      <div className="text-sm text-zinc-400">{testimonials[3].role}, {testimonials[3].company}</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center lg:text-right space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold text-sm">Success metrics</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-emerald-400">{testimonials[3].revenue}</div>
                    <div className="text-sm text-zinc-400">Annual Recurring Revenue</div>
                    <div className="text-lg font-semibold text-white">{testimonials[3].results}</div>
                  </div>
                  
                  {/* Visual proof overlay */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-400/20 text-xs">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-yellow-400 font-medium">Verified results</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Company Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Trusted by 800+ successful agencies worldwide
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Join the elite group of agencies that have transformed their operations 
              and <span className="text-white font-semibold">multiplied their revenue</span> with Tareq.
            </p>
          </div>
          
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-6 opacity-60 hover:opacity-100 transition-opacity">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center font-bold text-zinc-400 text-sm lg:text-base hover:bg-zinc-700/50 hover:text-white transition-colors">
                  {company.logo}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-zinc-500 pt-8 border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>289% average revenue growth</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>4.9★ customer satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>23 days faster payments</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

