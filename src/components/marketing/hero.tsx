"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-24 gap-16">
          {/* Left Column - Content */}
          <div className="flex-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm font-medium text-zinc-300">
                  Used by 800+ agencies worldwide
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-h1 font-bold text-white leading-tight">
                Stop losing clients to
                <span className="block text-zinc-400 mt-2">
                  unprofessional chaos
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                The platform that transforms scattered agencies into 
                <span className="text-white font-medium"> professional powerhouses</span>. 
                Grow your revenue while working less.
              </p>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                  <span>Setup in 5 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                  <span>Free until first client</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                  <span>No contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                  <span>Cancel anytime</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#pricing" className="btn-primary gap-2">
                  Get started free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link href="#features" className="btn-secondary gap-2">
                  <Play className="w-4 h-4" />
                  See demo
                </Link>
              </div>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-zinc-800">
                <div>
                  <div className="text-2xl font-bold text-white">289%</div>
                  <div className="text-sm text-zinc-500">Average revenue increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-zinc-500">Customer rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">$4.2M</div>
                  <div className="text-sm text-zinc-500">Revenue processed</div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="card-minimal p-6">
                <p className="text-zinc-300 mb-3">
                  "Tareq transformed my chaotic agency into a streamlined operation. 
                  My clients actually thank me for the professional experience now."
                </p>
                <div className="text-sm">
                  <span className="text-white font-medium">Sarah Chen</span>
                  <span className="text-zinc-500"> — Digital Spark Agency</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-800">
                <Image
                                  src="/corvex-dashboard.jpg"
                alt="Tareq Agency Dashboard"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* Simple Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-800 rounded-lg p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm text-white">Live portal</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 bg-white text-black rounded-lg p-3"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">3x</div>
                  <div className="text-xs">ROI</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}