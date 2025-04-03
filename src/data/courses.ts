
import { Course } from '@/types';

export const coursesData: Course[] = [
  {
    id: 'c1',
    title: 'Full Stack JavaScript Development',
    instructor: 'Mark Thompson',
    cover: '/placeholder.svg',
    price: 89.99,
    discountPrice: 69.99,
    category: 'Web Development',
    language: 'en',
    rating: 4.7,
    description: 'Learn to build complete web applications with modern JavaScript frameworks.',
    duration: '40 hours',
    lessons: 48,
    isPremium: false
  },
  {
    id: 'c2',
    title: 'Data Science with Python',
    instructor: 'Lisa Rodriguez',
    cover: '/placeholder.svg',
    price: 119.99,
    category: 'Data Science',
    language: 'en',
    rating: 4.9,
    description: 'Comprehensive course covering data analysis, visualization, and machine learning with Python.',
    duration: '35 hours',
    lessons: 42,
    isPremium: true
  },
  {
    id: 'c3',
    title: 'UI/UX Design Masterclass',
    instructor: 'Chris Anderson',
    cover: '/placeholder.svg',
    price: 79.99,
    discountPrice: 49.99,
    category: 'Design',
    language: 'en',
    rating: 4.6,
    description: 'Learn to create intuitive and beautiful user interfaces for websites and mobile apps.',
    duration: '25 hours',
    lessons: 30,
    isPremium: false
  },
  {
    id: 'c4',
    title: 'Cloud Computing with AWS',
    instructor: 'Robert Wilson',
    cover: '/placeholder.svg',
    price: 129.99,
    category: 'Cloud Computing',
    language: 'en',
    rating: 4.8,
    description: 'Master Amazon Web Services and learn to deploy scalable cloud applications.',
    duration: '45 hours',
    lessons: 52,
    isPremium: true
  },
  {
    id: 'c5',
    title: 'Mobile App Development with React Native',
    instructor: 'Natalie Park',
    cover: '/placeholder.svg',
    price: 99.99,
    discountPrice: 79.99,
    category: 'Mobile Development',
    language: 'en',
    rating: 4.5,
    description: 'Build cross-platform mobile applications using React Native framework.',
    duration: '30 hours',
    lessons: 36,
    isPremium: false
  },
  {
    id: 'c6',
    title: 'DevOps Engineering & CI/CD',
    instructor: 'James Wilson',
    cover: '/placeholder.svg',
    price: 149.99,
    category: 'DevOps',
    language: 'en',
    rating: 4.7,
    description: 'Learn DevOps practices and implement continuous integration/deployment pipelines.',
    duration: '50 hours',
    lessons: 60,
    isPremium: true
  }
];
