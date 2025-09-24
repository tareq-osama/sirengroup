'use client';

import { UnsplashImage, searchUnsplashImages, getUnsplashImageUrl } from './unsplash';

export interface ImageConfig {
  query: string;
  width: number;
  height: number;
  fallbackUrl?: string;
}

export interface WebsiteImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  fallbackUrl?: string;
}

// Predefined image configurations for different sections
export const IMAGE_CONFIGS: Record<string, ImageConfig> = {
  // Home page images
  'home-hero': {
    query: 'university education academic',
    width: 1920,
    height: 1080,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop'
  },
  
  // Audience page images
  'audience-students': {
    query: 'graduate students university campus',
    width: 800,
    height: 600,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
  },
  'audience-researchers': {
    query: 'researcher scientist laboratory',
    width: 800,
    height: 600,
    fallbackUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
  },
  'audience-academic': {
    query: 'academic research library study',
    width: 800,
    height: 600,
    fallbackUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop'
  },
  
  // Services page images
  'services-main': {
    query: 'academic support research guidance',
    width: 800,
    height: 600,
    fallbackUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
  },
  'training-programs': {
    query: 'training workshop education',
    width: 800,
    height: 600,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
  },
  
  // Faculty page images
  'faculty-main': {
    query: 'professor teacher academic faculty',
    width: 800,
    height: 600,
    fallbackUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
  },
  
  // Partners page images
  'partners-main': {
    query: 'university partnership collaboration',
    width: 800,
    height: 600,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
  },
  
  // Faculty member avatars
  'faculty-avatar-1': {
    query: 'professional woman academic',
    width: 200,
    height: 200,
    fallbackUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face'
  },
  'faculty-avatar-2': {
    query: 'professional man academic',
    width: 200,
    height: 200,
    fallbackUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
  },
  'faculty-avatar-3': {
    query: 'professional woman professor',
    width: 200,
    height: 200,
    fallbackUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
  },
  'faculty-avatar-4': {
    query: 'professional man professor',
    width: 200,
    height: 200,
    fallbackUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
  },

  // Services images - Basic Services
  'service-university-registration': {
    query: 'university registration enrollment graduation',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
  },
  'service-research-courses': {
    query: 'research courses academic training',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
  'service-methodology-statistics': {
    query: 'statistical analysis methodology research',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
  },
  'service-methodological-support': {
    query: 'methodological support research guidance',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
  },
  'service-academic-supervision': {
    query: 'academic supervision mentorship',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
  },

  // Services images - Special Services
  'service-specialized-lectures': {
    query: 'specialized lectures academic teaching',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
  'service-thesis-supervision': {
    query: 'thesis supervision dissertation guidance',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
  },
  'service-academic-discussions': {
    query: 'academic discussions research meetings',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
  },

  // About page images
  'about-vision': {
    query: 'vision future goals academic',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
  },
  'about-mission': {
    query: 'mission academic excellence education',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
  'about-goal-1': {
    query: 'academic excellence achievement',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
  },
  'about-goal-2': {
    query: 'research innovation development',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
  'about-goal-3': {
    query: 'student success graduation',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
  },
  'about-value-1': {
    query: 'quality excellence standards',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
  },
  'about-value-2': {
    query: 'integrity honesty ethics',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
  'about-value-3': {
    query: 'innovation creativity research',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
  },
  'about-value-4': {
    query: 'collaboration teamwork partnership',
    width: 400,
    height: 300,
    fallbackUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
  }
};

// Cache for images to avoid repeated API calls
const imageCache = new Map<string, WebsiteImage>();

export class ImageService {
  private static instance: ImageService;
  private isClient = false;

  private constructor() {
    if (typeof window !== 'undefined') {
      this.isClient = true;
    }
  }

  public static getInstance(): ImageService {
    if (!ImageService.instance) {
      ImageService.instance = new ImageService();
    }
    return ImageService.instance;
  }

  async getImage(imageKey: string): Promise<WebsiteImage> {
    // Return cached image if available
    if (imageCache.has(imageKey)) {
      return imageCache.get(imageKey)!;
    }

    // Return fallback if not on client side
    if (!this.isClient) {
      const config = IMAGE_CONFIGS[imageKey];
      if (config) {
        return {
          id: imageKey,
          url: config.fallbackUrl || '',
          alt: `Image for ${imageKey}`,
          width: config.width,
          height: config.height,
          fallbackUrl: config.fallbackUrl
        };
      }
    }

    const config = IMAGE_CONFIGS[imageKey];
    if (!config) {
      throw new Error(`Image configuration not found for key: ${imageKey}`);
    }

    try {
      // Search for images on Unsplash
      const images = await searchUnsplashImages({
        query: config.query,
        per_page: 1,
        orientation: 'landscape'
      });

      let imageUrl: string;
      let altText: string;

      if (images.length > 0) {
        const image = images[0];
        imageUrl = getUnsplashImageUrl(image, config.width, config.height);
        altText = image.alt_description || image.description || `Image related to ${config.query}`;
      } else {
        // Use fallback URL
        imageUrl = config.fallbackUrl || '';
        altText = `Fallback image for ${config.query}`;
      }

      const websiteImage: WebsiteImage = {
        id: imageKey,
        url: imageUrl,
        alt: altText,
        width: config.width,
        height: config.height,
        fallbackUrl: config.fallbackUrl
      };

      // Cache the result
      imageCache.set(imageKey, websiteImage);

      return websiteImage;
    } catch (error) {
      console.error(`Error fetching image for ${imageKey}:`, error);
      
      // Return fallback image
      const fallbackImage: WebsiteImage = {
        id: imageKey,
        url: config.fallbackUrl || '',
        alt: `Fallback image for ${config.query}`,
        width: config.width,
        height: config.height,
        fallbackUrl: config.fallbackUrl
      };

      return fallbackImage;
    }
  }

  async getMultipleImages(imageKeys: string[]): Promise<WebsiteImage[]> {
    const promises = imageKeys.map(key => this.getImage(key));
    return Promise.all(promises);
  }

  // Get a random image for a specific category
  async getRandomImage(query: string, width: number = 800, height: number = 600): Promise<WebsiteImage> {
    const cacheKey = `random-${query}-${width}-${height}`;
    
    if (imageCache.has(cacheKey)) {
      return imageCache.get(cacheKey)!;
    }

    if (!this.isClient) {
      return {
        id: cacheKey,
        url: `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=${width}&h=${height}&fit=crop`,
        alt: `Random image for ${query}`,
        width,
        height
      };
    }

    try {
      const images = await searchUnsplashImages({
        query,
        per_page: 10,
        orientation: 'landscape'
      });

      if (images.length > 0) {
        const randomIndex = Math.floor(Math.random() * images.length);
        const image = images[randomIndex];
        const imageUrl = getUnsplashImageUrl(image, width, height);
        const altText = image.alt_description || image.description || `Random image related to ${query}`;

        const websiteImage: WebsiteImage = {
          id: cacheKey,
          url: imageUrl,
          alt: altText,
          width,
          height
        };

        imageCache.set(cacheKey, websiteImage);
        return websiteImage;
      }
    } catch (error) {
      console.error(`Error fetching random image for ${query}:`, error);
    }

    // Fallback
    const fallbackImage: WebsiteImage = {
      id: cacheKey,
      url: `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=${width}&h=${height}&fit=crop`,
      alt: `Fallback image for ${query}`,
      width,
      height
    };

    return fallbackImage;
  }
}

// Export singleton instance
export const imageService = ImageService.getInstance();

// Helper function to get image with SSR safety
export async function getWebsiteImage(imageKey: string): Promise<WebsiteImage> {
  return imageService.getImage(imageKey);
}

// Helper function to get multiple images
export async function getWebsiteImages(imageKeys: string[]): Promise<WebsiteImage[]> {
  return imageService.getMultipleImages(imageKeys);
}
