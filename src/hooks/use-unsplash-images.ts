'use client';

import { useState, useEffect } from 'react';
import { UnsplashImage, getHeroSliderImages, placeholderImages } from '@/lib/unsplash';

export function useUnsplashImages() {
  const [images, setImages] = useState<UnsplashImage[]>(placeholderImages);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const unsplashImages = await getHeroSliderImages();
        
        if (unsplashImages.length > 0) {
          setImages(unsplashImages);
        } else {
          // Fallback to placeholder images if Unsplash fails
          setImages(placeholderImages);
        }
      } catch (err) {
        console.error('Error fetching Unsplash images:', err);
        setError('Failed to load images');
        // Use placeholder images as fallback
        setImages(placeholderImages);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [isClient]);

  return { images, loading, error, isClient };
}
