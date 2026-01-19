"use client";

import { useMemo } from "react";

interface RecentExpense {
  id: string;
  description: string;
  amount: number;
  category: "food" | "groceries" | "travel" | "other";
  date: string;
  paidBy: {
    name: string;
    avatar: string;
    alt: string;
  };
  splitCount: number;
}

const RecentExpenses = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const recentExpenses: RecentExpense[] = [
    {
      id: "1",
      description: "Dominos Pizza",
      amount: 400,
      category: "food",
      date: "2026-01-12",
      paidBy: {
        name: "Abhijeet",
        avatar:
          "avatars/Abhijeet.jpeg",
        alt: "Abhijeet avatar",
      },
      splitCount: 8,
    },
    {
      id: "2",
      description: "5 Star",
      amount: 38,
      category: "food",
      date: "2026-01-11",
      paidBy: {
        name: "Veer",
        avatar:
          "avatars/Veer.jpeg",
        alt: "Veer avatar",
      },
      splitCount: 2,
    },
    {
      id: "3",
      description: "Abhay Birthday Gift",
      amount: 900,
      category: "groceries",
      date: "2026-01-10",
      paidBy: {
        name: "Veer",
        avatar:
          "avatars/Veer.jpeg",
        alt: "Veer avatar",
      },
      splitCount: 8,
    },
    {
      id: "4",
      description: "Shopping",
      amount: 500,
      category: "travel",
      date: "2026-01-10",
      paidBy: {
        name: "Milthlesh",
        avatar:
          "avatars/Mithlesh.jpeg",
        alt: "Milthlesh avatar",
      },
      splitCount: 8,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === yesterday.toDateString())
      return "Yesterday";

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const totalAmount = useMemo(
    () => recentExpenses.reduce((sum, exp) => sum + exp.amount, 0),
    [recentExpenses]
  );

  return (
    <div className="bg-card rounded-lg shadow-soft p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Recent Expenses
        </h3>
        <button className="text-sm text-primary hover:text-primary-dark font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {recentExpenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center gap-4 p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-all"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">
                {expense.description}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {expense.paidBy.name} • {expense.splitCount} people
              </p>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold">
                ₹{expense.amount.toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDate(expense.date)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total this week</span>
          <span className="font-bold">₹{totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default RecentExpenses;
