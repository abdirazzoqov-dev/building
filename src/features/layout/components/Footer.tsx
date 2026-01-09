import { FaHome, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaTelegram, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <a
              href="#"
              className="flex items-center gap-3 mb-6 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center text-white group-hover:rotate-6 transition-transform">
                <FaHome className="text-2xl" />
              </div>
              <span className="text-2xl font-black">UYSOT</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Qashqadaryo viloyatidagi eng yirik va ishonchli ko'chmas mulk platformasi.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Kategoriyalar</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Yangi binolar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Ikkilamchi bozor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Ijara
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Tijorat mulklari
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Yer uchastkalari
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Kompaniya</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Hamkorlar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Jurnal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Reklama berish
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Maxfiylik siyosati
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Aloqa</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>Qarshi shahri, Mustaqillik ko'chasi</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <a
                  href="tel:+998781136353"
                  className="hover:text-primary transition font-bold"
                >
                  +998 78 113 63 53
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:info@uysot.uz"
                  className="hover:text-primary transition"
                >
                  info@uysot.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2025 UYSOT. Barcha huquqlar himoyalangan.</p>
          <p>
            Sayt ishlab chiquvchi:{' '}
            <a href="#" className="text-primary hover:underline">
              WebDev UZ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

