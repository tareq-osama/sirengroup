import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, X, Play, Globe, Zap, Users, BarChart3, Clock, Star } from "lucide-react";
import FeaturesSlider from "@/components/marketing/features";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className=" pt-6 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 h-svh flex text-center">
   
          {/* Main headline */}
          <div className="flex flex-col items-center justify-center">
          <h1 className="   text-start text-6xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
          Digital Designer 
          & Web Developer
          </h1>
          </div>

          {/* Subtitle */}
          <p className=" text-left md:text-center text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Tareq is a Digital Designer and Web Developer, focused on merging web technologies, AI, marketing and branding strategies to build innovative solutions that drive business growth and elevate brands presence.

          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
            Join Newsletter
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-3 text-base font-semibold group">
            Get a Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* <FeaturesSlider/> */}





    </div>
  );
}