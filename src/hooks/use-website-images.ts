'use client';

import { useState, useEffect } from 'react';
import { WebsiteImage, imageService } from '@/lib/image-service';

export function useWebsiteImage(imageKey: string) {
  const [image, setImage] = useState<WebsiteImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await imageService.getImage(imageKey);
        setImage(result);
      } catch (err) {
        console.error(`Error loading image ${imageKey}:`, err);
        setError(err instanceof Error ? err.message : 'Failed to load image');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imageKey]);

  return { image, loading, error };
}

export function useWebsiteImages(imageKeys: string[]) {
  const [images, setImages] = useState<WebsiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const results = await imageService.getMultipleImages(imageKeys);
        setImages(results);
      } catch (err) {
        console.error('Error loading images:', err);
        setError(err instanceof Error ? err.message : 'Failed to load images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [imageKeys.join(',')]);

  return { images, loading, error };
}

export function useRandomImage(query: string, width: number = 800, height: number = 600) {
  const [image, setImage] = useState<WebsiteImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await imageService.getRandomImage(query, width, height);
        setImage(result);
      } catch (err) {
        console.error(`Error loading random image for ${query}:`, err);
        setError(err instanceof Error ? err.message : 'Failed to load image');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [query, width, height]);

  return { image, loading, error };
}
