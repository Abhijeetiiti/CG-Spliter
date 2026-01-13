"use client";

import Image from "next/image";

interface User {
  name: string;
  avatar: string;
}

interface Settlement {
  id: string;
  from: User;
  to: User;
  amount: number;
  date: string;
  group: string;
  method: string;
}

interface Props {
  data: Settlement[];
  currency?: string;
}

export default function SettlementHistory({
  data,
  currency = "₹",
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-5">Recent Settlements</h2>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50 transition">
         
            <div className="flex items-center gap-4">
            
              <div className="flex items-center gap-2">
                <Avatar src={item.from.avatar} />
                <span className="text-gray-400">→</span>
                <Avatar src={item.to.avatar} />
              </div>

            
              <div>
                <p className="font-medium text-sm">
                  {item.from.name} paid {item.to.name}
                </p>
                <p className="text-xs text-gray-500">
                  {item.group} • {item.method}
                </p>
              </div>
            </div>

           
            <div className="text-right">
              <p className="font-bold text-green-600">
                {currency}
                {item.amount.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Avatar({ src }: { src: string }) {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full border">
      <Image src={src} alt="avatar" fill className="object-cover" />
    </div>
  );
}
