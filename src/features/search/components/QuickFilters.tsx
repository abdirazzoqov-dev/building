import { FaLayerGroup, FaMapMarkerAlt, FaPercent } from 'react-icons/fa';

export function QuickFilters() {
  return (
    <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
      <button
        className="px-5 py-3 bg-gray-100 hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition flex items-center gap-2"
        aria-label="Reels"
      >
        <FaLayerGroup />
        Reels
      </button>
      <button
        className="px-5 py-3 bg-gray-100 hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition flex items-center gap-2"
        aria-label="Xaritada ko'rish"
      >
        <FaMapMarkerAlt />
        Xaritada
      </button>
      <button
        className="px-5 py-3 bg-gray-100 hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition flex items-center gap-2"
        aria-label="Keshbek 0.5%"
      >
        <FaPercent />
        Keshbek 0.5%
      </button>
    </div>
  );
}

