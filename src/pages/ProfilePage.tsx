
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookOpen, LogOut, CreditCard, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MembershipType } from '@/types';

const ProfilePage: React.FC = () => {
  const { user, logout, isAuthenticated } = useApp();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
            <CardDescription>
              Please login or create an account to view your profile.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button onClick={() => navigate('/register')}>
              Create Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const getMembershipBadge = () => {
    if (!user?.membership) return null;
    
    switch (user.membership) {
      case MembershipType.PREMIUM:
        return <Badge className="ml-2 bg-amber-500">Premium</Badge>;
      case MembershipType.BASIC:
        return <Badge className="ml-2 bg-blue-500">Basic</Badge>;
      default:
        return <Badge className="ml-2">Free</Badge>;
    }
  };

  const handleUpgrade = () => {
    // In a real app, this would navigate to a payment page
    alert('This would navigate to a payment/upgrade page in a real implementation');
  };

  return (
    <div className="container pb-20 pt-6">
      <div className="mx-auto max-w-3xl px-4">
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user?.avatar} alt={user?.name} />
              <AvatarFallback className="text-lg">{user?.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center">
                <CardTitle>{user?.name}</CardTitle>
                {getMembershipBadge()}
              </div>
              <CardDescription>{user?.email}</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
            <Button variant="outline" onClick={logout} className="w-full sm:w-auto">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
            
            {user?.membership !== MembershipType.PREMIUM && (
              <Button onClick={handleUpgrade} className="w-full sm:w-auto">
                <Star className="mr-2 h-4 w-4" />
                Upgrade to Premium
              </Button>
            )}
          </CardFooter>
        </Card>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" /> My Library
              </CardTitle>
              <CardDescription>
                Access your purchased books and courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Your purchases will appear here
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => navigate('/')}>
                Browse Content
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5" /> Membership
              </CardTitle>
              <CardDescription>
                Manage your membership plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Current Plan:</span>
                  <span className="font-medium">{user?.membership}</span>
                </div>
                {user?.membership === MembershipType.PREMIUM && (
                  <p className="text-sm text-muted-foreground">
                    You have access to all premium content
                  </p>
                )}
                {user?.membership !== MembershipType.PREMIUM && (
                  <p className="text-sm text-muted-foreground">
                    Upgrade to access premium content
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              {user?.membership !== MembershipType.PREMIUM && (
                <Button className="w-full" onClick={handleUpgrade}>
                  Upgrade Plan
                </Button>
              )}
              {user?.membership === MembershipType.PREMIUM && (
                <Button variant="outline" className="w-full">
                  Manage Subscription
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
