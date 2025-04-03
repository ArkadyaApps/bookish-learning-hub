
import { Book } from '@/types';

export const booksData: Book[] = [
  {
    id: 'b1',
    title: 'Modern Web Development',
    author: 'Jane Smith',
    cover: '/placeholder.svg',
    price: 29.99,
    discountPrice: 19.99,
    category: 'Programming',
    language: 'en',
    rating: 4.5,
    description: 'A comprehensive guide to modern web development technologies and practices.',
    isPremium: false
  },
  {
    id: 'b2',
    title: 'Machine Learning Fundamentals',
    author: 'Alex Johnson',
    cover: '/placeholder.svg',
    price: 49.99,
    category: 'Data Science',
    language: 'en',
    rating: 4.8,
    description: 'Learn the core concepts of machine learning and artificial intelligence.',
    isPremium: true
  },
  {
    id: 'b3',
    title: 'Mobile App Design Patterns',
    author: 'Sarah Williams',
    cover: '/placeholder.svg',
    price: 34.99,
    discountPrice: 24.99,
    category: 'Design',
    language: 'en',
    rating: 4.2,
    description: 'Explore common design patterns for creating intuitive mobile applications.',
    isPremium: false
  },
  {
    id: 'b4',
    title: 'Advanced React Techniques',
    author: 'Michael Chen',
    cover: '/placeholder.svg',
    price: 39.99,
    category: 'Programming',
    language: 'en',
    rating: 4.6,
    description: 'Master advanced React concepts and patterns for building scalable applications.',
    isPremium: true
  },
  {
    id: 'b5',
    title: 'Python Data Analysis',
    author: 'Emily Davis',
    cover: '/placeholder.svg',
    price: 44.99,
    discountPrice: 29.99,
    category: 'Data Science',
    language: 'en',
    rating: 4.7,
    description: 'Practical approaches to data analysis using Python and popular libraries.',
    isPremium: false
  },
  {
    id: 'b6',
    title: 'Blockchain Essentials',
    author: 'David Miller',
    cover: '/placeholder.svg',
    price: 54.99,
    category: 'Cryptocurrency',
    language: 'en',
    rating: 4.3,
    description: 'Understand the fundamentals of blockchain technology and its applications.',
    isPremium: true
  }
];
