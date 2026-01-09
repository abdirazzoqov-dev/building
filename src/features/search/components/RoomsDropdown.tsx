import { useState, useRef } from 'react';
import { FaDoorOpen, FaChevronDown } from 'react-icons/fa';
import { useClickOutside } from '@/shared/hooks';
import { cn } from '@/shared/utils';
import { ROOM_OPTIONS } from '@/constants';

interface RoomsDropdownProps {
  value: string | null;
  onChange: (rooms: string) => void;
}

export function RoomsDropdown({ value, onChange }: RoomsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="dropdown relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-xl hover:border-primary transition text-left font-semibold text-base"
        aria-label="Xonalar sonini tanlash"
        aria-expanded={isOpen}
      >
        <FaDoorOpen className="text-primary text-xl" />
        <span className="flex-1 text-gray-700">{value || 'Xonalar'}</span>
        <FaChevronDown className="text-gray-400" />
      </button>
      <div
        className={cn(
          'absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-2xl z-[1000] transition-all duration-300',
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        )}
      >
        <div className="py-2">
          {ROOM_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option === 'Xonalar' ? '' : option);
                setIsOpen(false);
              }}
              className="w-full text-left px-5 py-4 hover:bg-primary hover:text-white transition text-gray-700"
            >
              {option === 'Xonalar' ? 'Barcha' : option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

