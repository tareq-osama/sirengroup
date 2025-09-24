// Unsplash API utility functions
export interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    full: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
    username: string;
  };
  links: {
    html: string;
  };
}

export interface UnsplashSearchParams {
  query: string;
  orientation?: 'landscape' | 'portrait' | 'squarish';
  color?: 'black_and_white' | 'black' | 'white' | 'yellow' | 'orange' | 'red' | 'purple' | 'magenta' | 'green' | 'teal' | 'blue';
  per_page?: number;
  page?: number;
}

// Get Unsplash access key from environment variables
const getUnsplashAccessKey = (): string => {
  // Always use the public key for client-side usage
  return process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '';
};

// Search for images on Unsplash
export async function searchUnsplashImages(params: UnsplashSearchParams): Promise<UnsplashImage[]> {
  // Only run on client-side
  if (typeof window === 'undefined') {
    return [];
  }

  const accessKey = getUnsplashAccessKey();
  
  if (!accessKey) {
    console.warn('Unsplash access key not found. Using placeholder images.');
    return [];
  }

  const searchParams = new URLSearchParams({
    query: params.query,
    per_page: (params.per_page || 10).toString(),
    page: (params.page || 1).toString(),
  });

  if (params.orientation) {
    searchParams.append('orientation', params.orientation);
  }

  if (params.color) {
    searchParams.append('color', params.color);
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?${searchParams}`,
      {
        headers: {
          'Authorization': `Client-ID ${accessKey}`,
          'Accept-Version': 'v1',
        },
      }
    );

    if (!response.ok) {
      if (response.status === 403) {
        console.warn('Unsplash API access denied. This might be due to missing API key or app not being approved yet.');
      } else {
        console.warn(`Unsplash API error: ${response.status}`);
      }
      return [];
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching Unsplash images:', error);
    return [];
  }
}

// Get a random image from Unsplash
export async function getRandomUnsplashImage(query: string): Promise<UnsplashImage | null> {
  const images = await searchUnsplashImages({ 
    query, 
    per_page: 1,
    page: Math.floor(Math.random() * 100) + 1 // Random page for variety
  });
  
  return images.length > 0 ? images[0] : null;
}

// Get multiple random images for hero slider
export async function getHeroSliderImages(): Promise<UnsplashImage[]> {
  const queries = [
    'university education',
    'graduate students',
    'academic research',
    'library study',
    'scientific research',
    'academic writing',
    'university campus',
    'student learning'
  ];

  const images: UnsplashImage[] = [];
  
  for (const query of queries) {
    const image = await getRandomUnsplashImage(query);
    if (image) {
      images.push(image);
    }
  }

  return images;
}

// Generate Unsplash image URL with specific dimensions
export function getUnsplashImageUrl(image: UnsplashImage, width: number = 1920, height: number = 1080): string {
  return `${image.urls.regular}&w=${width}&h=${height}&fit=crop&crop=center`;
}

// Fallback placeholder images for when Unsplash is not available
export const placeholderImages = [
  {
    id: 'placeholder-1',
    urls: {
      regular: '/images/hero.jpg',
      full: '/images/hero.jpg',
      small: '/images/hero.jpg',
      thumb: '/images/hero.jpg',
    },
    alt_description: 'University education and research',
    description: 'Academic research and education',
    user: {
      name: 'Placeholder',
      username: 'placeholder',
    },
    links: {
      html: '#',
    },
  },
  {
    id: 'placeholder-2',
    urls: {
      regular: '/images/hero.jpg',
      full: '/images/hero.jpg',
      small: '/images/hero.jpg',
      thumb: '/images/hero.jpg',
    },
    alt_description: 'Graduate students studying',
    description: 'Students engaged in academic work',
    user: {
      name: 'Placeholder',
      username: 'placeholder',
    },
    links: {
      html: '#',
    },
  },
  {
    id: 'placeholder-3',
    urls: {
      regular: '/images/hero.jpg',
      full: '/images/hero.jpg',
      small: '/images/hero.jpg',
      thumb: '/images/hero.jpg',
    },
    alt_description: 'Academic library and research',
    description: 'Library and academic research environment',
    user: {
      name: 'Placeholder',
      username: 'placeholder',
    },
    links: {
      html: '#',
    },
  },
  {
    id: 'placeholder-4',
    urls: {
      regular: '/images/hero.jpg',
      full: '/images/hero.jpg',
      small: '/images/hero.jpg',
      thumb: '/images/hero.jpg',
    },
    alt_description: 'Scientific research and study',
    description: 'Scientific research and academic study',
    user: {
      name: 'Placeholder',
      username: 'placeholder',
    },
    links: {
      html: '#',
    },
  },
];
