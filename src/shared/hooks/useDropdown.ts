import { useState, useRef, useCallback } from 'react';
import { useClickOutside } from './useClickOutside';

export function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useClickOutside(dropdownRef, close);

  return {
    isOpen,
    toggle,
    open,
    close,
    dropdownRef,
  };
}

