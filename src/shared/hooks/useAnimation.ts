import { useEffect, useRef } from 'react';

interface UseAnimationOptions {
  duration?: number;
  delay?: number;
  trigger?: boolean;
}

export function useAnimation({
  duration = 200,
  delay = 0,
  trigger = true,
}: UseAnimationOptions = {}) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!trigger || !elementRef.current) return;

    const element = elementRef.current;
    const timeoutId = setTimeout(() => {
      element.style.transition = `all ${duration}ms cubic-bezier(0, 0, 0.2, 1)`;
      element.classList.add('animate-fade-in');
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [trigger, duration, delay]);

  return elementRef;
}

