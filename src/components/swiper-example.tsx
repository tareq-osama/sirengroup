'use client';

import SwiperSlider from './swiper-slider';
import { Card } from './ui/card';

const exampleSlides = [
  <Card key={1} className="p-6 h-64 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-2">Slide 1</h3>
      <p>This is the first slide content</p>
    </div>
  </Card>,
  <Card key={2} className="p-6 h-64 flex items-center justify-center bg-gradient-to-br from-green-500 to-blue-600 text-white">
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-2">Slide 2</h3>
      <p>This is the second slide content</p>
    </div>
  </Card>,
  <Card key={3} className="p-6 h-64 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 text-white">
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-2">Slide 3</h3>
      <p>This is the third slide content</p>
    </div>
  </Card>,
  <Card key={4} className="p-6 h-64 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 text-white">
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-2">Slide 4</h3>
      <p>This is the fourth slide content</p>
    </div>
  </Card>,
  <Card key={5} className="p-6 h-64 flex items-center justify-center bg-gradient-to-br from-teal-500 to-green-600 text-white">
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-2">Slide 5</h3>
      <p>This is the fifth slide content</p>
    </div>
  </Card>,
];

export default function SwiperExample() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Swiper Slider Examples</h2>
      
      {/* Basic Slider */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Basic Slider</h3>
        <SwiperSlider 
          slides={exampleSlides}
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          pagination={true}
        />
      </div>

      {/* Multi-slide Slider */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Multi-slide Slider</h3>
        <SwiperSlider 
          slides={exampleSlides}
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          pagination={true}
          breakpoints={{
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
          }}
        />
      </div>

      {/* Autoplay Slider */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Autoplay Slider</h3>
        <SwiperSlider 
          slides={exampleSlides}
          slidesPerView={2}
          spaceBetween={30}
          navigation={true}
          pagination={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        />
      </div>
    </div>
  );
}
