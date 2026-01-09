import { FaArrowRight } from 'react-icons/fa';
import { BuildingCard } from './BuildingCard';
import { BUILDINGS } from '@/constants';

export function NewBuildingsSection() {
  return (
    <section id="yangi-binolar" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="text-primary text-sm font-bold uppercase mb-2">Ishonchli quruvchilar</div>
            <h2 className="text-3xl font-black">Yangi binolar</h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            aria-label="Barcha yangi binolar"
          >
            Barchasi
            <FaArrowRight />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUILDINGS.map((building) => (
            <BuildingCard key={building.id} building={building} />
          ))}
        </div>
      </div>
    </section>
  );
}

