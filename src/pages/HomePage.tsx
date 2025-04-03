
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Book, Course } from '@/types';
import BookCard from '@/components/BookCard';
import CourseCard from '@/components/CourseCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book as BookIcon, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { books, courses } = useApp();
  const navigate = useNavigate();
  
  // Get featured items (top rated)
  const featuredBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  
  const featuredCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  
  // Get items on sale
  const booksOnSale = books.filter(book => book.discountPrice !== undefined);
  const coursesOnSale = courses.filter(course => course.discountPrice !== undefined);

  return (
    <div className="container px-4 pb-20 pt-6">
      <section className="mb-8">
        <div className="mb-6 rounded-lg bg-gradient-to-r from-brand-600 to-brand-400 p-6 text-white">
          <h1 className="mb-2 text-2xl font-bold">Welcome to BookishHub</h1>
          <p className="mb-4">Discover premium books and courses to enhance your skills.</p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => navigate('/books')} variant="secondary">
              Browse Books
            </Button>
            <Button onClick={() => navigate('/courses')} variant="secondary">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Featured Content</h2>
        </div>
        
        <Tabs defaultValue="books" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="books" className="flex items-center">
              <BookIcon className="mr-2 h-4 w-4" />
              Books
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center">
              <Video className="mr-2 h-4 w-4" />
              Courses
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="books" className="mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredBooks.map((book: Book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" onClick={() => navigate('/books')}>
                View All Books
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="courses" className="mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course: Course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" onClick={() => navigate('/courses')}>
                View All Courses
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Special Offers</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...booksOnSale.slice(0, 1), ...coursesOnSale.slice(0, 2)].map((item) => (
            'author' in item ? (
              <BookCard key={item.id} book={item as Book} />
            ) : (
              <CourseCard key={item.id} course={item as Course} />
            )
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
