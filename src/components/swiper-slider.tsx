'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SwiperSliderProps {
  slides: React.ReactNode[];
  className?: string;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  navigation?: boolean;
  pagination?: boolean | { clickable?: boolean };
  scrollbar?: boolean;
  autoplay?: boolean | { delay?: number; disableOnInteraction?: boolean };
  loop?: boolean;
  breakpoints?: {
    [width: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
}

export default function SwiperSlider({
  slides,
  className = '',
  slidesPerView = 1,
  spaceBetween = 30,
  navigation = true,
  pagination = true,
  scrollbar = false,
  autoplay = false,
  loop = false,
  breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
}: SwiperSliderProps) {
  const modules = [Navigation, Pagination, Scrollbar, A11y];

  return (
    <Swiper
      modules={modules}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      scrollbar={scrollbar ? { draggable: true } : false}
      autoplay={autoplay}
      loop={loop}
      breakpoints={breakpoints}
      className={`swiper-container ${className}`}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
