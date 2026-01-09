import { FaPhoneAlt, FaClock, FaChartLine, FaChevronDown } from 'react-icons/fa';
import { useDropdown } from '@/shared/hooks';
import { cn } from '@/shared/utils';

export function TopBar() {
  const { isOpen, toggle, dropdownRef } = useDropdown();

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2.5 text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a
            href="tel:+998781136353"
            className="flex items-center gap-2 hover:text-primary transition"
            aria-label="Telefon raqam"
          >
            <FaPhoneAlt />
            <span>+998 78 113 63 53</span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            <FaClock className="text-primary" />
            <span>Dush-Shan: 9:00 - 18:00</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
            <FaChartLine className="text-primary" />
            <span className="text-xs">$1 = 12,450 UZS</span>
          </div>
          <div className="dropdown relative" ref={dropdownRef}>
            <button
              onClick={toggle}
              className="flex items-center gap-2 hover:text-primary transition"
              aria-label="Til tanlash"
              aria-expanded={isOpen}
            >
              <img
                src="https://flagcdn.com/w20/uz.png"
                alt="UZ"
                className="w-5"
                width="20"
                height="15"
              />
              <span className="hidden sm:inline">O'zbekcha</span>
              <FaChevronDown className="text-xs" />
            </button>
            <div
              className={cn(
                'absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl min-w-[200px] transition-all duration-300 z-[1000]',
                isOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              )}
            >
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 transition border-b"
              >
                <img
                  src="https://flagcdn.com/w20/uz.png"
                  alt="UZ"
                  className="w-5"
                  width="20"
                  height="15"
                />
                <span>O'zbekcha</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 transition"
              >
                <img
                  src="https://flagcdn.com/w20/ru.png"
                  alt="RU"
                  className="w-5"
                  width="20"
                  height="15"
                />
                <span>Русский</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

