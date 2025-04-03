
import React from 'react';
import { Book } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart, user } = useApp();

  const handleAddToCart = () => {
    addToCart(book, 'book');
  };

  const isPremiumAndUserNotPremium = book.isPremium && (!user || user.membership !== 'premium');

  return (
    <Card className="book-card">
      {book.isPremium && (
        <Badge className="absolute top-2 right-2 z-10 bg-amber-500">Premium</Badge>
      )}
      {book.discountPrice && (
        <Badge className="absolute top-2 left-2 z-10 bg-green-500">Sale</Badge>
      )}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-1 text-lg font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-500">{book.author}</p>
        <div className="mt-2 flex items-center">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 text-sm">{book.rating}</span>
          <span className="ml-2 text-xs text-gray-500">{book.category}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start border-t p-4 pt-2">
        <div className="mb-2 flex items-center">
          {book.discountPrice ? (
            <>
              <span className="text-lg font-bold text-primary">${book.discountPrice}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">${book.price}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-primary">${book.price}</span>
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

export default BookCard;
