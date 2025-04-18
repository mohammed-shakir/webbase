'use client';

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
