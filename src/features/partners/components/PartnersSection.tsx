import React from 'react';
import {
  FaBuilding,
  FaCity,
  FaHome,
  FaLandmark,
} from 'react-icons/fa';
import { PARTNERS } from '@/constants';
import { cn } from '@/shared/utils';

interface IconComponentProps {
  className?: string;
}

const iconComponents: Record<string, React.FC<IconComponentProps>> = {
  FaBuilding: ({ className }) => <FaBuilding className={className} />,
  FaCity: ({ className }) => <FaCity className={className} />,
  FaHome: ({ className }) => <FaHome className={className} />,
  FaLandmark: ({ className }) => <FaLandmark className={className} />,
};

const colorClasses: Record<string, string> = {
  primary: 'text-primary',
  'blue-600': 'text-blue-600',
  'green-600': 'text-green-600',
  'purple-600': 'text-purple-600',
  'yellow-600': 'text-yellow-600',
};

export function PartnersSection() {
  return (
    <section id="hamkorlar" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Bizning hamkorlar</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {PARTNERS.map((partner) => {
            const [firstPart, secondPart] = partner.name.split(' ');
            const IconComponent = iconComponents[partner.icon] || iconComponents.FaBuilding;
            const iconColorClass = colorClasses[partner.color] || colorClasses.primary;

            return (
              <div
                key={partner.id}
                className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition group"
              >
                <div className="text-center">
                  <IconComponent className={cn('text-3xl mb-2 block', iconColorClass)} />
                  <div className={cn('text-2xl font-black text-gray-800 group-hover:text-primary transition')}>
                    {firstPart}
                    <span className={iconColorClass}>{secondPart}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

