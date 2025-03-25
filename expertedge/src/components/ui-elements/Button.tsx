import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    disabled,
    ...props 
  }, ref) => {
    const variants = {
      primary: 'bg-blue-400 hover:bg-blue-500 text-white',
      secondary: 'bg-secondary hover:bg-secondary/80 text-white',
      outline: 'border border-white/20 bg-transparent hover:bg-white/5 text-white',
      ghost: 'bg-transparent hover:bg-white/5 text-white',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 rounded-md',
      md: 'text-sm px-4 py-2 rounded-lg',
      lg: 'text-base px-6 py-3 rounded-xl',
    };

    return (
      <button
        className={cn(
          'relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
            </svg>
          </span>
        )}
        <span className={isLoading ? 'invisible' : 'flex items-center gap-2'}>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };