'use client';

import { useState, useEffect } from 'react';


interface RecentExpense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  paidBy: {
    name: string;
    avatar: string;
    alt: string;
  };
  splitCount: number;
}

const RecentExpenses = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const recentExpenses: RecentExpense[] = [
  {
    id: '1',
    description: 'Dominos Pizza',
    amount: 400,
    category: 'Pizza',
    date: '2026-01-12',
    paidBy: {
      name: 'Abhijeet',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_116ebc879-1763295731902.png",
      alt: 'Professional headshot of man with short brown hair in navy blazer'
    },
    splitCount: 8
  },
  {
    id: '2',
    description: '5 Star',
    amount: 38.00,
    category: 'Food',
    date: '2026-01-11',
    paidBy: {
      name: 'Veer',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1811b6629-1763294904146.png",
      alt: 'Professional woman with long dark hair smiling in white blouse'
    },
    splitCount: 2
  },
  {
    id: '3',
    description: 'Abhay Birthday Gift',
    amount: 900,
    category: 'groceries',
    date: '2026-01-10',
    paidBy: {
      name: 'Veer',
      avatar: "https://images.unsplash.com/photo-1646324799589-4eaa88a9a82a",
      alt: 'Young man with beard wearing casual gray shirt outdoors'
    },
    splitCount: 8
    ,
    },{
     id: '3',
    description: 'Shopping',
    amount: 500,
    category: 'Travel',
    date: '2026-01-10',
    paidBy: {
      name: 'Milthlesh',
      avatar: "https://images.unsplash.com/photo-1646324799589-4eaa88a9a82a",
      alt: 'Young man with beard wearing casual gray shirt outdoors'
    },
    splitCount: 8
  }];


  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      food: 'ShoppingBagIcon',
      transport: 'TruckIcon',
      entertainment: 'FilmIcon',
      utilities: 'BoltIcon',
      groceries: 'ShoppingCartIcon',
      rent: 'HomeIcon',
      other: 'EllipsisHorizontalIcon'
    };
    return icons[category] || 'EllipsisHorizontalIcon';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      food: 'bg-orange-500',
      transport: 'bg-blue-500',
      entertainment: 'bg-purple-500',
      utilities: 'bg-yellow-500',
      groceries: 'bg-green-500',
      rent: 'bg-red-500',
      other: 'bg-gray-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const formatDate = (dateString: string) => {
    if (!isHydrated) return '';
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg shadow-soft p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-muted rounded w-1/3" />
          {[1, 2, 3].map((i) =>
          <div key={i} className="h-20 bg-muted rounded" />
          )}
        </div>
      </div>);

  }

  return (
    <div className="bg-card rounded-lg shadow-soft p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Recent Expenses</h3>
        <button className="text-sm text-primary hover:text-primary-dark font-medium transition-colors duration-300">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {recentExpenses.map((expense) =>
        <div
          key={expense.id}
          className="flex items-center gap-4 p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-all duration-300 cursor-pointer group">

            

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                {expense.description}
              </p>
              <div className="flex items-center gap-2 mt-1">
              

                <p className="text-xs text-muted-foreground">
                  {expense.paidBy.name} • {expense.splitCount} people
                </p>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="text-lg font-bold text-foreground">
                {expense.amount.toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDate(expense.date)}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total this week</span>
          <span className="font-bold text-foreground">
            {recentExpenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2)}
          </span>
        </div>
      </div>
    </div>);

};

export default RecentExpenses;