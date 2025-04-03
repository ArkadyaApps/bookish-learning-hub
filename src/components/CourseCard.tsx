
import React from 'react';
import { Course } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Star, BookOpen } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { addToCart, user } = useApp();

  const handleAddToCart = () => {
    addToCart(course, 'course');
  };

  const isPremiumAndUserNotPremium = course.isPremium && (!user || user.membership !== 'premium');

  return (
    <Card className="book-card">
      {course.isPremium && (
        <Badge className="absolute top-2 right-2 z-10 bg-amber-500">Premium</Badge>
      )}
      {course.discountPrice && (
        <Badge className="absolute top-2 left-2 z-10 bg-green-500">Sale</Badge>
      )}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={course.cover}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-1 text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-500">{course.instructor}</p>
        <div className="mt-2 flex items-center">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 text-sm">{course.rating}</span>
          <span className="ml-2 text-xs text-gray-500">{course.category}</span>
        </div>
        <div className="mt-2 flex items-center text-xs text-gray-500">
          <Clock className="mr-1 h-3 w-3" />
          <span className="mr-2">{course.duration}</span>
          <BookOpen className="mr-1 h-3 w-3" />
          <span>{course.lessons} lessons</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start border-t p-4 pt-2">
        <div className="mb-2 flex items-center">
          {course.discountPrice ? (
            <>
              <span className="text-lg font-bold text-primary">${course.discountPrice}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">${course.price}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-primary">${course.price}</span>
          )}
        </div>
        <Button 
          onClick={handleAddToCart} 
          className="w-full"
          disabled={isPremiumAndUserNotPremium}
          variant={isPremiumAndUserNotPremium ? "outline" : "default"}
        >
          {isPremiumAndUserNotPremium ? "Premium Required" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
