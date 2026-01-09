import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
}

export function Card({
  children,
  hoverable = false,
  padding = 'md',
  shadow = 'md',
  border = false,
  className,
  ...props
}: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-card',
    lg: 'shadow-lg',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-xl',
        paddings[padding],
        shadows[shadow],
        border && 'border border-gray-200',
        hoverable &&
          'transition-all duration-250 cursor-pointer hover:shadow-card-hover hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

