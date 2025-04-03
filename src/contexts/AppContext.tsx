
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Book, CartItem, Course, Language, MembershipType, User } from '@/types';
import { booksData } from '@/data/books';
import { coursesData } from '@/data/courses';

interface AppContextType {
  user: User | null;
  books: Book[];
  courses: Course[];
  cart: CartItem[];
  language: Language;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
  addToCart: (item: Book | Course, type: 'book' | 'course') => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  setLanguage: (lang: Language) => void;
  getCartTotal: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Mock user for development
  const [user, setUser] = useState<User | null>(null);
  const [books, setBooks] = useState<Book[]>(booksData);
  const [courses, setCourses] = useState<Course[]>(coursesData);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [language, setLanguage] = useState<Language>('en');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }

    // Load cart from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    // Load language preference
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const login = async (email: string, password: string) => {
    // Mock login
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password') {
          const user: User = {
            id: '1',
            name: 'John Doe',
            email: 'user@example.com',
            membership: MembershipType.BASIC
          };
          setUser(user);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(user));
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // Mock registration
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const newUser: User = {
            id: Date.now().toString(),
            name,
            email,
            membership: MembershipType.FREE
          };
          setUser(newUser);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(newUser));
          resolve();
        } else {
          reject(new Error('Invalid information'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const addToCart = (item: Book | Course, type: 'book' | 'course') => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      const newItem: CartItem = {
        id: item.id,
        title: item.title,
        type,
        price: item.discountPrice || item.price,
        quantity: 1
      };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        books,
        courses,
        cart,
        language,
        isAuthenticated,
        login,
        logout,
        register,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        setLanguage,
        getCartTotal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
