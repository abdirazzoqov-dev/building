import { ReactNode } from 'react';
import { cn } from '@/shared/utils';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = 'gray',
  size = 'md',
  dot = false,
  className,
}: BadgeProps) {
  const variants = {
    primary:
      'bg-primary-50 text-primary-700 border-primary-200',
    secondary:
      'bg-secondary-50 text-secondary-700 border-secondary-200',
    success:
      'bg-success-50 text-success-700 border-success-200',
    warning:
      'bg-warning-50 text-warning-700 border-warning-200',
    error:
      'bg-error-50 text-error-700 border-error-200',
    gray:
      'bg-gray-100 text-gray-700 border-gray-200',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-caption',
    md: 'px-3 py-1 text-body-sm',
    lg: 'px-4 py-1.5 text-body-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-semibold rounded-lg border',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'primary' && 'bg-primary-500',
            variant === 'secondary' && 'bg-secondary-500',
            variant === 'success' && 'bg-success-500',
            variant === 'warning' && 'bg-warning-500',
            variant === 'error' && 'bg-error-500',
            variant === 'gray' && 'bg-gray-500'
          )}
        />
      )}
      {children}
    </span>
  );
}

