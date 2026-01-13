"use client";

import {
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle,
} from "lucide-react";

interface StatCardProps {
  title: string;
  amount: string;
  change?: string;
  changeType?: "up" | "down";
  icon: React.ReactNode;
  iconBg: string;
}

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1   m-10 md:grid-cols-3 gap-6">
      <StatCard
        title="You Are Owed"
        amount="₹400"
        change="12% vs last month"
        changeType="up"
        icon={<ArrowUpRight className="text-white" />}
        iconBg="bg-green-500"
      />

      <StatCard
        title="You Owe"
        amount="₹1200"
        change="8% vs last month"
        changeType="down"
        icon={<ArrowDownRight className="text-white" />}
        iconBg="bg-orange-500"
      />

      <StatCard
        title="Settled This Month"
        amount="₹600.00"
        icon={<CheckCircle className="text-white" />}
        iconBg="bg-blue-500"
      />
    </div>
  );
}

function StatCard({
  title,
  amount,
  change,
  changeType,
  icon,
  iconBg,
}: StatCardProps) {
  return (
    <div className="flex justify-between items-start rounded-2xl hover:bg-amber-50 p-6 shadow-sm border">
      <div>
        <p className="text-3xl text-blue-500">{title}</p>
        <h3 className="text-3xl font-bold mt-1">{amount}</h3>

        {change && (
          <p
            className={`text-sm mt-2 ${
              changeType === "up"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {changeType === "up" ? "↑" : "↓"} {change}
          </p>
        )}
      </div>

      <div
        className={`h-12 w-12 rounded-full flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>
    </div>
  );
}
