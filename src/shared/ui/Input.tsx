import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/shared/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-gray-700 mb-0.5"
          >
            {label} 
            {props.required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              // Base styles
              'w-full px-4 py-3 text-body',
              'bg-white border-2 rounded-xl',
              'text-gray-900 placeholder:text-gray-400',
              'transition-all duration-200',
              'focus:outline-none focus:ring-4 focus:ring-primary-500/10',
              'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
              // Icon padding
              leftIcon && 'pl-12',
              rightIcon && 'pr-12',
              // Error state
              hasError
                ? 'border-error-500 focus:border-error-500 focus:ring-error-500/10'
                : 'border-gray-200 focus:border-primary-500 hover:border-gray-300',
              className
            )}
            aria-invalid={hasError}
            aria-describedby={
              error || helperText
                ? `${inputId}-${error ? 'error' : 'helper'}`
                : undefined
            }
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p
            id={`${inputId}-${error ? 'error' : 'helper'}`}
            className={cn(
              'text-caption',
              error ? 'text-error-500' : 'text-gray-500'
            )}
            role={error ? 'alert' : undefined}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

