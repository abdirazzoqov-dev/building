import { ReactNode, useState, useRef } from 'react';
import { useClickOutside } from '@/shared/hooks';
import { cn } from '@/shared/utils';

interface MegaMenuProps {
  trigger: ReactNode;
  children: ReactNode;
}

export function MegaMenu({ trigger, children }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <div
      className="mega-menu-trigger relative"
      ref={containerRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}>
        {trigger}
      </div>
      <div
        className={cn(
          'absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 border w-[900px] max-w-[90vw] z-[1000] transition-all duration-300',
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        )}
      >
        {children}
      </div>
    </div>
  );
}

