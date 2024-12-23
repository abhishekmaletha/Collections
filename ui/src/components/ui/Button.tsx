import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
  icon?: LucideIcon;
  loading?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  loading, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center gap-2 font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50';
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        'Loading...'
      ) : (
        <>
          {Icon && <Icon size={20} />}
          {children}
        </>
      )}
    </button>
  );
}