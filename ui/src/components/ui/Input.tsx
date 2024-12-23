import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
}

export function Input({ 
  label, 
  icon: Icon, 
  className = '', 
  ...props 
}: InputProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        )}
        <input
          className={`${Icon ? 'pl-10' : 'pl-3'} w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}