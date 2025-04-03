
import React from 'react';
import { Home, BookOpen, Video, ShoppingCart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { Badge } from '@/components/ui/badge';

const BottomNav: React.FC = () => {
  const { cart } = useApp();
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-card shadow-lg">
      <div className="mx-auto grid h-16 max-w-lg grid-cols-5">
        <NavLink
          to="/"
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : 'text-muted-foreground'}`
          }
        >
          <Home className="mb-1 h-5 w-5" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : 'text-muted-foreground'}`
          }
        >
          <BookOpen className="mb-1 h-5 w-5" />
          <span>Books</span>
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : 'text-muted-foreground'}`
          }
        >
          <Video className="mb-1 h-5 w-5" />
          <span>Courses</span>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : 'text-muted-foreground'} relative`
          }
        >
          <ShoppingCart className="mb-1 h-5 w-5" />
          {totalItems > 0 && (
            <Badge variant="destructive" className="absolute -right-2 -top-1 h-5 w-5 rounded-full p-0 text-center text-xs">
              {totalItems}
            </Badge>
          )}
          <span>Cart</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : 'text-muted-foreground'}`
          }
        >
          <User className="mb-1 h-5 w-5" />
          <span>Profile</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNav;
