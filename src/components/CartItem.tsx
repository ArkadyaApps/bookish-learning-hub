
import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/types';
import { useApp } from '@/contexts/AppContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useApp();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex flex-1 items-center">
        <div className="flex-1">
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-sm text-muted-foreground">
            {item.type === 'book' ? 'eBook' : 'Course'}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="icon" onClick={handleDecrement} className="h-8 w-8">
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button variant="outline" size="icon" onClick={handleIncrement} className="h-8 w-8">
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        
        <div className="w-20 text-right">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => removeFromCart(item.id)}
          className="h-8 w-8 text-muted-foreground"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
