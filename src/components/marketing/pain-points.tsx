"use client";

import React from 'react';
import { X, Check } from 'lucide-react';

export default function PainPoints() {
  const comparisons = [
    {
      problem: "Scattered communication across 15+ tools",
      solution: "All client communication in one place"
    },
    {
      problem: "Manual invoices taking 2+ hours each",
      solution: "Automated invoicing in under 5 minutes"
    },
    {
      problem: "Clients constantly asking for project updates",
      solution: "Real-time project dashboard for clients"
    },
    {
      problem: "Losing track of deadlines and deliverables",
      solution: "Automated deadline tracking and reminders"
    },
    {
      problem: "Unprofessional experience hurting reputation",
      solution: "White-label portal with your branding"
    },
    {
      problem: "Chasing payments for 30+ days",
      solution: "Faster payments with automated reminders"
    }
  ];

  return (
    <section className="bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center component-spacing">
          <h2 className="text-h2 font-bold text-white mb-4">
            The hidden cost of chaos
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Every day without professional systems costs your agency money and reputation
          </p>
        </div>

        <div className="card-minimal overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-zinc-900/50 border-b border-zinc-800">
            <div className="p-6 border-r border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-300">Without Tareq</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white">With Tareq</h3>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <div key={index} className="grid grid-cols-2 border-b border-zinc-800 last:border-b-0">
              <div className="p-6 border-r border-zinc-800">
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-zinc-600 mt-1 flex-shrink-0" />
                  <p className="text-zinc-400">{item.problem}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-zinc-400 mt-1 flex-shrink-0" />
                  <p className="text-zinc-200">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-zinc-500 mb-4">
            Every day you wait costs you $128 in lost efficiency
          </p>
          <a href="#pricing" className="btn-primary">
            Stop the bleeding
          </a>
        </div>
      </div>
    </section>
  );
}

