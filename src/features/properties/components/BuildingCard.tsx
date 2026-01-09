import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { Building } from '@/types';
import { formatPrice } from '@/shared/utils';
import { cn } from '@/shared/utils';

interface BuildingCardProps {
  building: Building;
}

const badgeColors = {
  primary: 'bg-primary',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
};

export function BuildingCard({ building }: BuildingCardProps) {
  const displayPrice =
    building.startingPrice < 100
      ? `${building.startingPrice} oy`
      : formatPrice(building.startingPrice);

  return (
    <div className="bg-white/5 backdrop-blur rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={building.image}
          alt={building.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        {building.badge && (
          <div
            className={cn(
              'absolute top-4 left-4 text-white px-3 py-1.5 rounded-lg text-xs font-bold',
              badgeColors[building.badge.color]
            )}
          >
            {building.badge.text}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{building.name}</h3>
        <p className="text-gray-400 text-sm mb-4">
          <FaMapMarkerAlt className="inline text-primary mr-1" />
          {building.location}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">Boshlanish narxi</div>
            <div className="text-2xl font-bold text-white">{displayPrice}</div>
          </div>
          <button
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primaryDark transition text-white"
            aria-label={`${building.name} haqida ko'proq`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

