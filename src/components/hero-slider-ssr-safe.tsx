'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { heroSlidesContent } from '@/lib/content';

interface HeroSliderSSRSafeProps {
  className?: string;
}

export default function HeroSliderSSRSafe({ className = '' }: HeroSliderSSRSafeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Prepare slides with background options
  const slides = heroSlidesContent.map((slideContent, index) => ({
    ...slideContent,
    // Use different gradient backgrounds for each slide
    background: `bg-gradient-to-br ${
      index === 0 ? 'from-blue-900 via-blue-800 to-indigo-900' :
      index === 1 ? 'from-purple-900 via-purple-800 to-pink-900' :
      index === 2 ? 'from-green-900 via-emerald-800 to-teal-900' :
      'from-orange-900 via-red-800 to-pink-900'
    }`,
  }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !isAutoplayActive) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isClient, isAutoplayActive, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const toggleAutoplay = () => {
    setIsAutoplayActive(!isAutoplayActive);
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!isClient) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isClient]);

  if (!isClient) {
    // SSR fallback - show first slide without animations
    const slide = slides[0];
    return (
      <section className={`relative min-h-screen overflow-hidden ${className}`}>
        <div className="absolute inset-0">
          {/* Dynamic Gradient Background */}
          <div className={`absolute inset-0 ${slide.background}`} />
          {slide.overlay && (
            <div className="absolute inset-0 bg-black/50" />
          )}
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <div className="text-white space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm font-medium">
                    مركز Sirene للدراسات العليا
                  </span>
                </div>
                <h1 className="text-h1 font-bold leading-tight" dir="rtl">
                  {slide.title}
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-white/90" dir="rtl">
                  {slide.subtitle}
                </h2>
                <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl" dir="rtl">
                  {slide.description}
                </p>
                <div className="pt-4">
                  <Link
                    href={slide.cta.href}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg"
                  >
                    {slide.cta.text}
                    <ChevronLeft className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Slides Container */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background */}
            <div className="absolute inset-0">
              {/* Dynamic Gradient Background */}
              <div className={`absolute inset-0 ${slide.background}`} />
              {/* Overlay */}
              {slide.overlay && (
                <div className="absolute inset-0 bg-black/50" />
              )}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="max-w-4xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8 }}
                      className="text-white space-y-8"
                    >
                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-sm font-medium">
                          مركز Sirene للدراسات العليا
                        </span>
                      </motion.div>

                      {/* Title */}
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-h1 font-bold leading-tight"
                        dir="rtl"
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl lg:text-3xl font-semibold text-white/90"
                        dir="rtl"
                      >
                        {slide.subtitle}
                      </motion.h2>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl"
                        dir="rtl"
                      >
                        {slide.description}
                      </motion.p>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="pt-4"
                      >
                        <Link
                          href={slide.cta.href}
                          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg"
                        >
                          {slide.cta.text}
                          <ChevronLeft className="w-5 h-5" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Autoplay Control */}
      <button
        onClick={toggleAutoplay}
        className="absolute bottom-8 right-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label={isAutoplayActive ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoplayActive ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>
    </section>
  );
}
