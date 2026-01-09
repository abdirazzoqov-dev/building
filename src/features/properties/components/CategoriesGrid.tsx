import {
  FaBuilding,
  FaCalculator,
  FaMapMarkerAlt,
  FaHome,
  FaNewspaper,
  FaInstagram,
} from 'react-icons/fa';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  href: string;
}

const categories: Category[] = [
  {
    id: 'yangi-binolar',
    title: 'YANGI BINOLAR',
    description: 'Turar-joy majmualari katalogi',
    icon: <FaBuilding className="text-4xl opacity-80 group-hover:scale-110 transition-transform" />,
    gradient: 'from-cyan-500 to-blue-500',
    href: '#yangi-binolar',
  },
  {
    id: 'kalkulyator',
    title: 'KALKULYATOR',
    description: "Ipoteka va oylik to'lovlarni oson hisoblang",
    icon: <FaCalculator className="text-4xl opacity-80 group-hover:scale-110 transition-transform" />,
    gradient: 'from-blue-600 to-blue-700',
    href: '#ipoteka',
  },
  {
    id: 'xarita',
    title: 'XARITA',
    description: 'Turar-joy majmualarini xaritadan toping',
    icon: <FaMapMarkerAlt className="text-4xl opacity-80 group-hover:scale-110 transition-transform" />,
    gradient: 'from-rose-500 to-red-500',
    href: '#xarita',
  },
  {
    id: 'xonadon',
    title: 'XONADON',
    description: "Sizning orzu qilgan uyingiz shu yerda",
    icon: <FaHome className="text-4xl opacity-80 group-hover:scale-110 transition-transform" />,
    gradient: 'from-slate-700 to-slate-900',
    href: '#xonadon',
  },
  {
    id: 'jurnal',
    title: 'JURNAL',
    description: "Ko'chmas mulk bozorida yangilik va tahlillar",
    icon: <FaNewspaper className="text-4xl opacity-80 group-hover:scale-110 transition-transform" />,
    gradient: 'from-orange-500 to-orange-600',
    href: '#jurnal',
  },
  {
    id: 'reels',
    title: 'REELS',
    description: "Qiziqarli qo'shimcha daymiq yangliklar",
    icon: <FaInstagram className="text-4xl opacity-80 group-hover:scale-110 transition-transform" />,
    gradient: 'from-purple-500 to-purple-600',
    href: '#reels',
  },
];

export function CategoriesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-gray-900 mb-8">Kategoriyalar</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className={`
                category-card group bg-gradient-to-br ${category.gradient} rounded-2xl p-6 text-white hover:shadow-xl transition-all
              `}
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="font-bold text-lg mb-1">{category.title}</h3>
              <p className="text-xs opacity-90">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

