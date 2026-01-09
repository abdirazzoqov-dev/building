import { FaHome, FaChevronDown, FaHeart, FaPlus, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { MegaMenu } from './MegaMenu';
import { Button } from '@/shared/ui/Button';
import { scrollToElement } from '@/shared/utils';

interface NavbarProps {
  onMobileMenuOpen: () => void;
}

export function Navbar({ onMobileMenuOpen }: NavbarProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToElement(href.replace('#', ''));
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="UYSOT bosh sahifa"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform shadow-lg">
              <FaHome className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-gray-900 leading-none">UYSOT</span>
              <span className="text-[9px] font-semibold text-primary uppercase tracking-widest">
                Qashqadaryo
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <MegaMenu
              trigger={
                <a
                  href="#yangi-binolar"
                  className="px-4 py-2 text-gray-700 hover:text-primary font-semibold transition rounded-lg hover:bg-gray-50 flex items-center gap-1"
                  onClick={(e) => handleNavClick(e, '#yangi-binolar')}
                >
                  Yangi binolar
                  <FaChevronDown className="text-xs" />
                </a>
              }
            >
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Turar joy majmualari</h4>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    QARSHI CITY RESIDENCE
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    NASAF PLAZA
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    SHAHRISABZ GARDENS
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Quruvchilar</h4>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    QARSHI BUILD
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    GOLDEN CITY
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    NASAF STROY
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Foydali</h4>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Ipoteka kalkulyatori
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Xaritada ko'rish
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Yangiliklar
                  </a>
                </div>
              </div>
            </MegaMenu>

            <MegaMenu
              trigger={
                <a
                  href="#ikkilamchi"
                  className="px-4 py-2 text-gray-700 hover:text-primary font-semibold transition rounded-lg hover:bg-gray-50 flex items-center gap-1"
                  onClick={(e) => handleNavClick(e, '#ikkilamchi')}
                >
                  Ikkilamchi
                  <FaChevronDown className="text-xs" />
                </a>
              }
            >
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Kvartiralar</h4>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    1 xonali
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    2 xonali
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    3 xonali
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    4+ xonali
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Uylar</h4>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Hovli-uy
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Kottej
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Dacha
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Narx bo'yicha</h4>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    100 mln gacha
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    100-300 mln
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    300 mln+
                  </a>
                </div>
              </div>
            </MegaMenu>

            <MegaMenu
              trigger={
                <a
                  href="#ijara"
                  className="px-4 py-2 text-gray-700 hover:text-primary font-semibold transition rounded-lg hover:bg-gray-50 flex items-center gap-1"
                  onClick={(e) => handleNavClick(e, '#ijara')}
                >
                  Ijara
                  <FaChevronDown className="text-xs" />
                </a>
              }
            >
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Muddat bo'yicha</h4>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Kunlik
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Oylik
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Uzoq muddatli
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Tur bo'yicha</h4>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Kvartira
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Hovli-uy
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Kottej
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Qo'shimcha</h4>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Jihozli
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-primary transition"
                  >
                    Ta'mirlangan
                  </a>
                </div>
              </div>
            </MegaMenu>

            <a
              href="#tijorat"
              className="px-4 py-2 text-gray-700 hover:text-primary font-semibold transition rounded-lg hover:bg-gray-50"
              onClick={(e) => handleNavClick(e, '#tijorat')}
            >
              Tijorat
            </a>
            <a
              href="#jurnal"
              className="px-4 py-2 text-gray-700 hover:text-primary font-semibold transition rounded-lg hover:bg-gray-50"
              onClick={(e) => handleNavClick(e, '#jurnal')}
            >
              Jurnal
            </a>
            <a
              href="#ipoteka"
              className="px-4 py-2 text-gray-700 hover:text-primary font-semibold transition rounded-lg hover:bg-gray-50"
              onClick={(e) => handleNavClick(e, '#ipoteka')}
            >
              Ipoteka
            </a>
            <a
              href="#hamkorlar"
              className="px-4 py-2 text-gray-700 hover:text-primary font-semibold transition rounded-lg hover:bg-gray-50"
              onClick={(e) => handleNavClick(e, '#hamkorlar')}
            >
              Hamkorlar
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-primary transition"
              aria-label="Saralangan"
            >
              <FaHeart className="text-lg" />
              <span className="hidden xl:inline font-semibold">Saralangan</span>
            </button>
            <button
              onClick={onMobileMenuOpen}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition"
              aria-label="Menu ochish"
            >
              <FaBars className="text-xl" />
            </button>
            <Button className="hidden md:flex items-center gap-2">
              <FaPlus />
              <span>E'lon berish</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

