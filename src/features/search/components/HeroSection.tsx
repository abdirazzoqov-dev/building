import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchTab, Location } from '@/types';
import { SearchTabs, LocationDropdown, RoomsDropdown, PriceDropdown, QuickFilters } from './';
import { Button } from '@/shared/ui/Button';
import { LOCATIONS } from '@/constants';

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<SearchTab>('sotib');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(LOCATIONS[0]);
  const [selectedRooms, setSelectedRooms] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<{ min: string; max: string; currency: 'uzs' | 'usd' } | null>(null);

  const handleSearch = () => {
    // TODO: Implement search logic
    console.log('Search:', { activeTab, selectedLocation, selectedRooms, selectedPrice });
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1920&q=80&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Butun O'zbekiston bo'ylab 10,000+ e'lonlar
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Hozir orzuingizdagi<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
              uyni toping
            </span>
          </h1>
        </div>

        {/* Search Box */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-8 animate-slide-up">
          <SearchTabs activeTab={activeTab} onChange={setActiveTab} />

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <LocationDropdown value={selectedLocation} onChange={setSelectedLocation} />
            <RoomsDropdown value={selectedRooms} onChange={setSelectedRooms} />
            <PriceDropdown value={selectedPrice} onChange={setSelectedPrice} />
          </div>

          {/* Search Button Row */}
          <div className="mt-6">
            <Button onClick={handleSearch} className="w-full md:w-auto px-12 py-5 text-lg flex items-center justify-center gap-3">
              <FaSearch className="text-xl" />
              <span>Qidirish</span>
            </Button>
          </div>

          <QuickFilters />
        </div>
      </div>
    </section>
  );
}

