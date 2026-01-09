import { useState } from 'react';
import { MarketTab } from '@/types';
import { PropertyCard } from './PropertyCard';
import { SECONDARY_PROPERTIES } from '@/constants';
import { Button } from '@/shared/ui/Button';
import { cn } from '@/shared/utils';

export function SecondaryMarketSection() {
  const [activeTab, setActiveTab] = useState<MarketTab>('secondary');

  return (
    <section id="ikkilamchi" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 mb-8 border-b">
          <button
            onClick={() => setActiveTab('secondary')}
            className={cn(
              'px-1 py-4 text-2xl font-black border-b-4 transition',
              activeTab === 'secondary'
                ? 'border-primary text-gray-900'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            )}
            aria-label="Ikkilamchi bozor"
            aria-selected={activeTab === 'secondary'}
          >
            Ikkilamchi
          </button>
          <button
            onClick={() => setActiveTab('rent')}
            className={cn(
              'px-1 py-4 text-2xl font-black border-b-4 transition',
              activeTab === 'rent'
                ? 'border-primary text-gray-900'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            )}
            aria-label="Ijara"
            aria-selected={activeTab === 'rent'}
          >
            Ijara
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SECONDARY_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} variant="small" />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline">Ko'proq ko'rish</Button>
        </div>
      </div>
    </section>
  );
}

