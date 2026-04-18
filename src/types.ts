export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  subscriptionPrice: number;
  image: string;
  color: string;
  ingredients: string[];
  benefits: string[];
  description: string;
  nutrition: {
    calories: number;
    sugar: number;
    vitaminC: string;
  };
  category: 'Energy' | 'Detox' | 'Immunity' | 'Hydration';
}

export interface CartItem extends Product {
  quantity: number;
  isSubscription: boolean;
}
