'use client';

import { useState } from 'react';


interface ExpenseFormProps {
  onSubmit: (expense: ExpenseData) => void;
  onChange: (data: Partial<ExpenseData>) => void;
}

interface ExpenseData {
  description: string;
  amount: string;
  paidBy: string;
  splitWith: string[];
}

interface Member {
  id: string;
  name: string;
  avatar: string;
  alt: string;
}

const ExpenseForm = ({ onSubmit, onChange }: ExpenseFormProps) => {
  const [formData, setFormData] = useState<ExpenseData>({
    description: '',
    amount: '',
    paidBy: '',
    splitWith: [],
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ExpenseData, string>>>({});

  const members: Member[] = [
    { id: '1', name: 'Abhijeet', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_116ebc879-1763295731902.png", alt: 'Professional headshot of man with short brown hair in navy blazer' },
    { id: '2', name: 'Abhay', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1811b6629-1763294904146.png", alt: 'Professional woman with long dark hair smiling in white blouse' },
    { id: '3', name: 'Abhimanyu', avatar: "https://images.unsplash.com/photo-1646324799589-4eaa88a9a82a", alt: 'Young man with beard wearing casual gray shirt outdoors' },
    { id: '4', name: 'Kedar', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_110f072f4-1763295676215.png", alt: 'Asian woman with black hair in professional attire smiling' },
    { id: '5', name: 'Abhi', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_116ebc879-1763295731902.png", alt: 'Professional headshot of man with short brown hair in navy blazer' },
    { id: '6', name: 'Veer', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1811b6629-1763294904146.png", alt: 'Professional woman with long dark hair smiling in white blouse' }
  ];

  const handleChange = (field: keyof ExpenseData, value: string | string[]) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onChange(newData);
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const toggleMember = (memberId: string) => {
    const newSplit = formData.splitWith.includes(memberId)
      ? formData.splitWith.filter(id => id !== memberId)
      : [...formData.splitWith, memberId];
    handleChange('splitWith', newSplit);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ExpenseData, string>> = {};

    if (!formData.description.trim()) newErrors.description = 'Required';
    if (!formData.amount || parseFloat(formData.amount) <= 0) newErrors.amount = 'Must be greater than 0';
    if (!formData.paidBy) newErrors.paidBy = 'Select who paid';
    if (formData.splitWith.length === 0) newErrors.splitWith = 'Select at least one person';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-soft p-6 space-y-6">
      <div>
        <label className="block text-xl font-medium text-foreground mb-2">
          Description *
        </label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="e.g., Dinner at restaurant"
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.description ? 'border-error' : 'border-input'
          } focus:outline-none focus:ring-2 focus:ring-primary`}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-error">{errors.description}</p>
        )}
      </div>

      <div>
        <label className="block text-xl font-medium text-foreground mb-2">
          Amount 
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.amount}
          onChange={(e) => handleChange('amount', e.target.value)}
          placeholder="0.00"
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.amount ? 'border-error' : 'border-input'
          } focus:outline-none focus:ring-2 focus:ring-primary`}
        />
        {errors.amount && (
          <p className="mt-1 text-sm text-error">{errors.amount}</p>
        )}
      </div>

      <div>
        <label className="block text-xl font-medium text-foreground mb-2">
          Who paid? *
        </label>
        <select
          value={formData.paidBy}
          onChange={(e) => handleChange('paidBy', e.target.value)}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.paidBy ? 'border-error' : 'border-input'
          } focus:outline-none focus:ring-2 focus:ring-primary`}
        >
          <option value="">Select person</option>
          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
        {errors.paidBy && (
          <p className="mt-1 text-sm text-error">{errors.paidBy}</p>
        )}
      </div>

      <div>
        <label className="block text-xl font-medium text-foreground mb-2">
          Split with *
        </label>
        <div className="grid grid-cols-2 gap-3">
          {members.map((member) => (
            <button
              key={member.id}
              type="button"
              onClick={() => toggleMember(member.id)}
              className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                formData.splitWith.includes(member.id)
                  ? 'border-primary bg-primary/5' :'border-input hover:border-primary/50'
              }`}
            >
            
              <span className="text-sm font-medium text-foreground">
                {member.name}
              </span>
            </button>
          ))}
        </div>
        {errors.splitWith && (
          <p className="mt-1 text-sm text-error">{errors.splitWith}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full text-white text-2xl bg-red-600 px-6 py-3 bg-primary hover:bg-green-700 text-primary-foreground font-bold rounded-lg transition-colors"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;