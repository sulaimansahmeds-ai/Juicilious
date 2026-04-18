import { Product } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Liquid Gold',
    tagline: 'Immunity Powerhouse',
    price: 8.99,
    subscriptionPrice: 7.20,
    image: 'https://picsum.photos/seed/juice1/800/1000',
    color: '#FBBF24', // Amber/Yellow
    ingredients: ['Turmeric', 'Ginger', 'Orange', 'Lemon', 'Black Pepper'],
    benefits: ['Anti-inflammatory', 'Immune Support', 'Metabolism Boost'],
    description: 'Our signature immunity blend. Cold-pressed citrus meets the earthy warmth of turmeric and ginger.',
    nutrition: { calories: 120, sugar: 12, vitaminC: '120%' },
    category: 'Immunity'
  },
  {
    id: 'p2',
    name: 'Deep Green',
    tagline: 'Master Detox',
    price: 9.49,
    subscriptionPrice: 7.60,
    image: 'https://picsum.photos/seed/juice2/800/1000',
    color: '#10B981', // Emerald
    ingredients: ['Kale', 'Spinach', 'Cucumber', 'Green Apple', 'Celery'],
    benefits: ['Alkalizing', 'Rich in iron', 'Digestive Health'],
    description: 'The ultimate green machine. Packed with chlorophyll and dark leafy greens to reset your system.',
    nutrition: { calories: 85, sugar: 8, vitaminC: '45%' },
    category: 'Detox'
  },
  {
    id: 'p3',
    name: 'Berry Blast',
    tagline: 'Natural Energy',
    price: 8.99,
    subscriptionPrice: 7.20,
    image: 'https://picsum.photos/seed/juice3/800/1000',
    color: '#EF4444', // Red
    ingredients: ['Beetroot', 'Pomegranate', 'Blueberry', 'Apple'],
    benefits: ['Endurance', 'Heart Health', 'Antioxidant Rich'],
    description: 'Pre-workout or post-lunch, this vibrant blend provides steady energy without the crash.',
    nutrition: { calories: 140, sugar: 18, vitaminC: '30%' },
    category: 'Energy'
  },
  {
    id: 'p4',
    name: 'Ocean Chill',
    tagline: 'Pure Hydration',
    price: 7.99,
    subscriptionPrice: 6.40,
    image: 'https://picsum.photos/seed/juice4/800/1000',
    color: '#60A5FA', // Blue
    ingredients: ['Blue Spirulina', 'Coconut Water', 'Pineapple', 'Lime'],
    benefits: ['Electrolytes', 'Skin Health', 'Anti-aging'],
    description: 'Refreshingly light and tropical. Spirulina brings the color; coconut water brings the hydration.',
    nutrition: { calories: 95, sugar: 11, vitaminC: '25%' },
    category: 'Hydration'
  }
];
