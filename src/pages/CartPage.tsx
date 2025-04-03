
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import CartItem from '@/components/CartItem';
import { ShoppingCart, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cart, clearCart, getCartTotal, isAuthenticated } = useApp();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      // Simulate successful checkout
      alert('Checkout successful! This would process payment in a real app.');
      clearCart();
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container flex h-[70vh] flex-col items-center justify-center px-4 pb-20 pt-6">
        <ShoppingCart className="mb-4 h-16 w-16 text-muted-foreground" />
        <h1 className="mb-2 text-2xl font-bold">Your cart is empty</h1>
        <p className="mb-6 text-center text-muted-foreground">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button onClick={() => navigate('/')}>
          Browse Content
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 pb-20 pt-6">
      <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>
      
      <div className="rounded-lg border shadow-sm">
        <div className="p-4">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="border-t bg-gray-50 p-4">
          <div className="mb-4 flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium">${getCartTotal().toFixed(2)}</span>
          </div>
          
          {!isAuthenticated && (
            <div className="mb-4 flex items-start rounded-md bg-yellow-50 p-3 text-sm text-yellow-800">
              <AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
              <p>Please login or create an account to complete your purchase.</p>
            </div>
          )}
          
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button onClick={handleCheckout}>
              {isAuthenticated ? 'Checkout' : 'Login to Checkout'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
