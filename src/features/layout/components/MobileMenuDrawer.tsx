import { useEffect } from 'react';
import { FaTimes, FaBuilding, FaHome, FaKey, FaBriefcase, FaNewspaper, FaCalculator } from 'react-icons/fa';
import { cn } from '@/shared/utils';
import { Button } from '@/shared/ui/Button';
import { scrollToElement } from '@/shared/utils';
import { useScrollLock, useEscape } from '@/shared/hooks';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  useScrollLock(isOpen);
  useEscape(onClose, isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    scrollToElement(href.replace('#', ''));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50"
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl animate-slide-right"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="p-6 border-b flex justify-between items-center">
          <span className="text-xl font-bold">Menu</span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            aria-label="Menu yopish"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-6 space-y-2">
          <a
            href="#yangi-binolar"
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 font-semibold text-gray-700 transition"
            onClick={(e) => handleNavClick(e, '#yangi-binolar')}
          >
            <FaBuilding className="w-5 text-primary" />
            Yangi binolar
          </a>
          <a
            href="#ikkilamchi"
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 font-semibold text-gray-700 transition"
            onClick={(e) => handleNavClick(e, '#ikkilamchi')}
          >
            <FaHome className="w-5 text-primary" />
            Ikkilamchi
          </a>
          <a
            href="#ijara"
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 font-semibold text-gray-700 transition"
            onClick={(e) => handleNavClick(e, '#ijara')}
          >
            <FaKey className="w-5 text-primary" />
            Ijara
          </a>
          <a
            href="#tijorat"
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 font-semibold text-gray-700 transition"
            onClick={(e) => handleNavClick(e, '#tijorat')}
          >
            <FaBriefcase className="w-5 text-primary" />
            Tijorat
          </a>
          <a
            href="#jurnal"
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 font-semibold text-gray-700 transition"
            onClick={(e) => handleNavClick(e, '#jurnal')}
          >
            <FaNewspaper className="w-5 text-primary" />
            Jurnal
          </a>
          <a
            href="#ipoteka"
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 font-semibold text-gray-700 transition"
            onClick={(e) => handleNavClick(e, '#ipoteka')}
          >
            <FaCalculator className="w-5 text-primary" />
            Ipoteka
          </a>
          <div className="pt-6 border-t mt-6">
            <Button className="w-full mb-3">+ E'lon joylash</Button>
            <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-bold border">
              Kirish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

