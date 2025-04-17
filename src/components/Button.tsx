import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // The content of the button
  children: React.ReactNode;
  // Button style variant (primary, secondary, etc.)
  variant?: ButtonVariant;
  // Button size (sm, md, lg)
  size?: ButtonSize;
  // Makes the button take full width of its container
  fullWidth?: boolean;
  // Disabled state 
  disabled?: boolean;
  // Shows loading spinner
  loading?: boolean;
  // Icon before the text
  leftIcon?: React.ReactNode;
  // Icon after the text
  rightIcon?: React.ReactNode;
}

// Button component with multiple variants, sizes and states
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}: ButtonProps) => {
  // Base classes for all buttons
  const baseClasses = 'relative inline-flex items-center justify-center rounded-full font-medium transition-colors transition-transform transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400';
  
  // Size classes 
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs h-8',
    md: 'px-5 py-2.5 text-sm h-10',
    lg: 'px-6 py-3 text-base h-12',
  };
  
  // Variant styling
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 shadow-sm',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 shadow-sm',
    tertiary: 'bg-tertiary-500 text-white hover:bg-tertiary-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 shadow-sm',
    outline: 'border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-white hover:border-primary-500 hover:text-primary-500 dark:hover:text-primary-400 disabled:border-gray-200 dark:disabled:border-gray-700 disabled:text-gray-400 dark:disabled:text-gray-600',
    ghost: 'bg-transparent text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-500 dark:hover:text-primary-400 disabled:text-gray-400 dark:disabled:text-gray-600',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const stateClasses = disabled ? 'cursor-not-allowed opacity-70' : '';
  const loadingClass = loading ? 'cursor-wait' : '';
  const hoverClass = !disabled && !loading ? 'hover:shadow-md active:shadow-inner active:translate-y-[1px] active:scale-[0.99]' : '';
  
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${stateClasses} ${loadingClass} ${hoverClass} ${className}`}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      <span className="relative flex items-center justify-center">
        {loading && (
          <svg className="animate-spin mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {leftIcon && !loading && <span className="mr-2 flex items-center">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button; 