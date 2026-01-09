import { FaFire, FaArrowRight } from 'react-icons/fa';
import { PropertyCard } from './PropertyCard';
import { PROPERTIES } from '@/constants';
import { Button } from '@/shared/ui/Button';

export function HotOffersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-2 text-secondary mb-2">
              <FaFire />
              <span className="text-sm font-bold uppercase">Eng qaynoq takliflar</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900">Keshbek 0.5% gacha</h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            aria-label="Barcha takliflar"
          >
            Barchasi
            <FaArrowRight />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} variant="large" />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline">Ko'proq ko'rish</Button>
        </div>
      </div>
    </section>
  );
}

