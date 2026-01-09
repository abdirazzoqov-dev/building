import { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { useClickOutside } from '@/shared/hooks';
import { cn } from '@/shared/utils';
import { LOCATIONS, Location } from '@/constants';

interface LocationDropdownProps {
  value: Location | null;
  onChange: (location: Location) => void;
}

export function LocationDropdown({ value, onChange }: LocationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const filteredLocations = LOCATIONS.filter((loc) =>
    loc.name.toLowerCase().includes(filter.toLowerCase())
  );

  const groupedLocations = filteredLocations.reduce((acc, loc) => {
    if (loc.region) {
      if (!acc[loc.region]) acc[loc.region] = [];
      acc[loc.region].push(loc);
    } else {
      if (!acc._other) acc._other = [];
      acc._other.push(loc);
    }
    return acc;
  }, {} as Record<string, Location[]>);

  return (
    <div className="dropdown md:col-span-2 relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-xl hover:border-primary transition text-left font-semibold text-base"
        aria-label="Manzilni tanlash"
        aria-expanded={isOpen}
      >
        <FaMapMarkerAlt className="text-primary text-xl" />
        <span className="flex-1 text-gray-700">
          {value?.name || "Butun O'zbekiston bo'ylab"}
        </span>
        <FaChevronDown className="text-gray-400" />
      </button>
      <div
        className={cn(
          'absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-2xl max-h-96 overflow-y-auto z-[1000] transition-all duration-300',
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        )}
      >
        <div className="p-3 border-b sticky top-0 bg-white">
          <input
            type="text"
            placeholder="Qidirish..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg text-sm search-input focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          {Object.entries(groupedLocations).map(([region, locations]) => (
            <div key={region}>
              {region !== '_other' && (
                <div className="px-5 py-3 text-xs font-bold text-gray-500 uppercase bg-gray-50">
                  {region}
                </div>
              )}
              {locations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => {
                    onChange(location);
                    setIsOpen(false);
                    setFilter('');
                  }}
                  className="w-full text-left px-5 py-4 hover:bg-primary hover:text-white transition text-gray-700"
                >
                  <div className="font-semibold">{location.name}</div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

