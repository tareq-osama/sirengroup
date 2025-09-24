'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Pause, Loader2 } from 'lucide-react';
import { heroSlidesContent } from '@/lib/content';
import { useUnsplashImages } from '@/hooks/use-unsplash-images';
import { getUnsplashImageUrl, UnsplashImage } from '@/lib/unsplash';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/keyboard';

interface HeroImageSliderUnsplashProps {
  className?: string;
}

export default function HeroImageSliderUnsplash({ className = '' }: HeroImageSliderUnsplashProps) {
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const { images, loading, error, isClient } = useUnsplashImages();

  const toggleAutoplay = () => {
    if (swiperInstance) {
      if (isAutoplayActive) {
        swiperInstance.autoplay.stop();
      } else {
        swiperInstance.autoplay.start();
      }
      setIsAutoplayActive(!isAutoplayActive);
    }
  };

  // Combine slides content with Unsplash images
  const slides = heroSlidesContent.map((slideContent, index) => {
    const unsplashImage = images[index] || images[0]; // Fallback to first image
    return {
      ...slideContent,
      image: unsplashImage ? getUnsplashImageUrl(unsplashImage, 1920, 1080) : '/images/hero.jpg',
      unsplashImage: unsplashImage,
    };
  });

  // Show loading only on client-side when actually fetching Unsplash images
  if (!isClient || loading) {
    return (
      <section className={`relative min-h-screen overflow-hidden flex items-center justify-center ${className}`}>
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-white mx-auto mb-4" />
          <p className="text-white text-lg">Loading beautiful images...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative min-h-screen overflow-hidden ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.hero-swiper-button-next',
          prevEl: '.hero-swiper-button-prev',
        }}
        pagination={{
          el: '.hero-swiper-pagination',
          clickable: true,
          bulletClass: 'hero-swiper-bullet',
          bulletActiveClass: 'hero-swiper-bullet-active',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        onSwiper={setSwiperInstance}
        className="hero-swiper h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
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

                      {/* Image Attribution */}
                      {slide.unsplashImage && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="absolute bottom-4 left-4 text-white/60 text-xs"
                        >
                          Photo by{' '}
                          <a
                            href={slide.unsplashImage.links.html}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white/80"
                          >
                            {slide.unsplashImage.user.name}
                          </a>{' '}
                          on{' '}
                          <a
                            href="https://unsplash.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white/80"
                          >
                            Unsplash
                          </a>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="hero-swiper-button-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        className="hero-swiper-button-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Custom Pagination */}
      <div className="hero-swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2" />

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

      {/* Error Message */}
      {error && (
        <div className="absolute bottom-4 right-4 bg-red-500/90 text-white px-4 py-2 rounded-lg text-sm">
          {error}
        </div>
      )}
    </section>
  );
}
