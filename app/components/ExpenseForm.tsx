"use client";

import { useState, type FormEvent } from "react";

interface ExpenseData {
  description: string;
  amount: string;
  paidBy: string;
  splitWith: string[];
}

interface ExpenseFormProps {
  onSubmit: (expense: ExpenseData) => void;
  onChange: (data: Partial<ExpenseData>) => void;
}

interface Member {
  id: string;
  name: string;
  avatar: string;
  alt: string;
}

const members: Member[] = [
  { id: "1", name: "Abhijeet", avatar: "/avatars/Abhijeet.jpeg", alt: "Profile" },
  { id: "2", name: "Abhay", avatar: "./avatars/Abhay.jpg", alt: "Profile" },
  { id: "3", name: "Abhimanyu", avatar: "/avatars/Abhimanyu.jpeg", alt: "Profile" },
  { id: "4", name: "Kedar", avatar: "/avatars/Kedar.jpeg", alt: "Profile" },
  { id: "5", name: "Veer", avatar: "/avatars/Veer.jpeg", alt: "Profile" },
  { id: "6", name: "Mithlesh", avatar: "/avatars/Mithlesh.jpeg", alt: "Profile" },
  { id: "7", name: "Abhishek", avatar: "/avatars/Abhishek.jpeg", alt: "Profile" },
  { id: "8", name: "Abhi", avatar: "/avatars/Abhi.jpeg", alt: "Profile" },
];

const ExpenseForm = ({ onSubmit, onChange }: ExpenseFormProps) => {
  const [formData, setFormData] = useState<ExpenseData>({
    description: "",
    amount: "",
    paidBy: "",
    splitWith: members.map(m => m.id), // Default to splitting with everyone
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ExpenseData, string>>>({});

  // Fixed handleChange to handle union types correctly
  const handleChange = (field: keyof ExpenseData, value: string | string[]) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onChange(newData);

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const toggleMember = (memberId: string) => {
    const currentSplit = formData.splitWith;
    const updated = currentSplit.includes(memberId)
      ? currentSplit.filter((id) => id !== memberId)
      : [...currentSplit, memberId];

    handleChange("splitWith", updated);
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof ExpenseData, string>> = {};

    if (!formData.description.trim()) newErrors.description = "Description required";
    if (!formData.amount || Number(formData.amount) <= 0) newErrors.amount = "Amount must be greater than 0";
    if (!formData.paidBy) newErrors.paidBy = "Select who paid";
    if (formData.splitWith.length === 0) newErrors.splitWith = "Select at least one member";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-6">
      {/* Description */}
      <div>
        <label className="block text-lg font-semibold mb-2">Description *</label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      {/* Amount */}
      <div>
        <label className="block text-lg font-semibold mb-2">Amount *</label>
        <input
          type="number"
          step="0.01"
          value={formData.amount}
          onChange={(e) => handleChange("amount", e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
      </div>

      {/* Who Paid */}
      <div>
        <label className="block text-lg font-semibold mb-2">Who Paid *</label>
        <select
          value={formData.paidBy}
          onChange={(e) => handleChange("paidBy", e.target.value)}
          className="w-full border rounded-lg px-4 py-2 bg-white"
        >
          <option value="">Select person</option>
          {members.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>
        {errors.paidBy && <p className="text-red-500 text-sm mt-1">{errors.paidBy}</p>}
      </div>

      {/* Split With */}
      <div>
        <label className="block text-lg font-semibold mb-2">Split With *</label>
        <div className="grid grid-cols-2 gap-3">
          {members.map((m) => {
            const isSelected = formData.splitWith.includes(m.id);
            return (
              <button
                type="button"
                key={m.id}
                onClick={() => toggleMember(m.id)}
                className={`flex items-center gap-2 border rounded-lg p-3 text-sm font-medium transition-colors ${
                  isSelected 
                    ? "bg-blue-600 text-white border-blue-600" 
                    : "bg-gray-50 text-gray-700 hover:border-blue-300"
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-current" />
                {m.name}
              </button>
            );
          })}
        </div>
        {errors.splitWith && <p className="text-red-500 text-sm mt-1">{errors.splitWith}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white text-xl py-3 rounded-lg font-bold hover:bg-red-700 active:scale-95 transition-all"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;