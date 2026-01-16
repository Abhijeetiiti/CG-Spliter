"use client";

import Image from "next/image";

interface Member {
  id: string;
  name: string;
  email: string;
  avatar: string;
  paid: number;
  owed: number;
  expenses: number;
}

export default function GroupMemberCard({
  member,
  currency = "₹",
}: {
  member: Member;
  currency?: string;
}) {
  const balance = member.paid - member.owed;

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm ml-10 w-full max-w-md">
      <div className="flex items-center gap-4">
    <div className="relative h-14 w-14 rounded-full overflow-hidden border">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.email}</p>

          <p
            className={`text-sm font-medium mt-1 ${
              balance > 0
                ? "text-green-600"
                : balance < 0
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {balance > 0 && `Gets back ${currency}${balance.toFixed(2)}`}
            {balance < 0 && `Owes ${currency}${Math.abs(balance).toFixed(2)}`}
            {balance === 0 && "Settled up"}
          </p>
        </div>
      </div>

    
      <div className="my-4 border-t" />

     
      <div className="grid grid-cols-3 text-center">
        <Stat label="Paid" value={`${currency}${member.paid.toFixed(2)}`} />
        <Stat label="Owed" value={`${currency}${member.owed.toFixed(2)}`} />
        <Stat label="Expenses" value={member.expenses.toString()} />
      </div>

      
      <button className="mt-4 bg-green-500 text-black px-4 ml-35 py-2 rounded-full font-semibold hover:bg-red-500 transition">
        View Details
      </button>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
