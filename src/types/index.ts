
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  membership?: MembershipType;
}

export enum MembershipType {
  FREE = 'free',
  BASIC = 'basic',
  PREMIUM = 'premium'
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: number;
  discountPrice?: number;
  category: string;
  language: string;
  rating: number;
  description: string;
  isPremium: boolean;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  cover: string;
  price: number;
  discountPrice?: number;
  category: string;
  language: string;
  rating: number;
  description: string;
  duration: string;
  lessons: number;
  isPremium: boolean;
}

export interface CartItem {
  id: string;
  title: string;
  type: 'book' | 'course';
  price: number;
  quantity: number;
}

export type Language = 'en' | 'es' | 'fr';
