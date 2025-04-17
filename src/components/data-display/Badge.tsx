import React from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'error';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  // The content displayed inside the badge
  children: React.ReactNode;
  // Visual style of the badge (primary, success, error, etc.)
  variant?: BadgeVariant;
  // Size of the badge (sm, md, lg)
  size?: BadgeSize;
  // Whether to show a colored dot indicator
  withDot?: boolean;
  // Additional CSS classes to apply
  className?: string;
  // Makes the badge fully rounded (pill shape)
  pill?: boolean;
  // Creates an outlined version with transparent background
  outline?: boolean;
}

// Badge component for highlighting statuses, counts, or categories
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withDot = false,
  className = '',
  pill = false,
  outline = false,
}) => {
  // Base classes for all badges
  const baseClasses = 'inline-flex items-center font-medium';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };
  
  // Shape class
  const shapeClass = pill ? 'rounded-full' : 'rounded';
  
  // Variant classes with dark mode support
  const variantClasses = {
    primary: outline 
      ? 'bg-transparent text-primary-600 border border-primary-500 dark:text-primary-300 dark:border-primary-400' 
      : 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:bg-opacity-40 dark:text-primary-200',
    secondary: outline 
      ? 'bg-transparent text-secondary-600 border border-secondary-500 dark:text-secondary-300 dark:border-secondary-400' 
      : 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:bg-opacity-40 dark:text-secondary-200',
    tertiary: outline 
      ? 'bg-transparent text-tertiary-600 border border-tertiary-500 dark:text-tertiary-300 dark:border-tertiary-400' 
      : 'bg-tertiary-100 text-tertiary-800 dark:bg-tertiary-900 dark:bg-opacity-40 dark:text-tertiary-200',
    success: outline 
      ? 'bg-transparent text-success-dark border border-success dark:text-success-light dark:border-success' 
      : 'bg-success-light text-success-dark dark:bg-success-dark dark:bg-opacity-40 dark:text-green-200',
    info: outline 
      ? 'bg-transparent text-info-dark border border-info dark:text-info-light dark:border-info' 
      : 'bg-info-light text-info-dark dark:bg-info-dark dark:bg-opacity-40 dark:text-blue-200',
    warning: outline 
      ? 'bg-transparent text-warning-dark border border-warning dark:text-warning-light dark:border-warning' 
      : 'bg-warning-light text-warning-dark dark:bg-warning-dark dark:bg-opacity-40 dark:text-yellow-200',
    error: outline 
      ? 'bg-transparent text-error-dark border border-error dark:text-error-light dark:border-error' 
      : 'bg-error-light text-error-dark dark:bg-error-dark dark:bg-opacity-40 dark:text-red-200',
  };
  
  // Dot indicator color
  const dotColorClasses = {
    primary: 'bg-primary-500 dark:bg-primary-400',
    secondary: 'bg-secondary-500 dark:bg-secondary-400',
    tertiary: 'bg-tertiary-500 dark:bg-tertiary-400',
    success: 'bg-success dark:bg-success',
    info: 'bg-info dark:bg-info',
    warning: 'bg-warning dark:bg-warning',
    error: 'bg-error dark:bg-error',
  };

  return (
    <span 
      className={`${baseClasses} ${sizeClasses[size]} ${shapeClass} ${variantClasses[variant]} ${className}`}
    >
      {withDot && (
        <span className={`mr-1.5 h-2 w-2 rounded-full ${dotColorClasses[variant]}`}></span>
      )}
      {children}
    </span>
  );
};

export default Badge; 