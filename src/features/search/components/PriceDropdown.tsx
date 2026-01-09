import { useState, useRef } from 'react';
import { FaDollarSign, FaChevronDown } from 'react-icons/fa';
import { useClickOutside } from '@/shared/hooks';
import { cn } from '@/shared/utils';

interface PriceDropdownProps {
  value: { min: string; max: string; currency: 'uzs' | 'usd' } | null;
  onChange: (price: { min: string; max: string; currency: 'uzs' | 'usd' }) => void;
}

export function PriceDropdown({ value, onChange }: PriceDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [min, setMin] = useState(value?.min || '');
  const [max, setMax] = useState(value?.max || '');
  const [currency, setCurrency] = useState<'uzs' | 'usd'>(value?.currency || 'uzs');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleApply = () => {
    onChange({ min, max, currency });
    setIsOpen(false);
  };

  return (
    <div className="dropdown relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-xl hover:border-primary transition text-left font-semibold text-base"
        aria-label="Narxni tanlash"
        aria-expanded={isOpen}
      >
        <FaDollarSign className="text-primary text-xl" />
        <span className="flex-1 text-gray-700">
          {value ? `${value.min || '0'} - ${value.max || '0'} ${value.currency === 'usd' ? '$' : "so'm"}` : 'Narxi'}
        </span>
        <FaChevronDown className="text-gray-400" />
      </button>
      <div
        className={cn(
          'absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-2xl p-6 z-[1000] transition-all duration-300 min-w-[280px]',
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        )}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">dan</label>
            <input
              type="text"
              placeholder="0"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none text-base"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">gacha</label>
            <input
              type="text"
              placeholder="0"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none text-base mb-2"
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as 'uzs' | 'usd')}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none text-base"
            >
              <option value="uzs">so'm</option>
              <option value="usd">$</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleApply}
            className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primaryDark transition text-base"
          >
            Qo'llash
          </button>
        </div>
      </div>
    </div>
  );
}

