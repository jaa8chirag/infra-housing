'use client';

import React from 'react';
import { CITIES } from '@/data/mockData';
import { ChevronRight, MapPin } from 'lucide-react';

interface BreadcrumbStripProps {
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
}

export const BreadcrumbStrip: React.FC<BreadcrumbStripProps> = ({
  selectedCity,
  onSelectCity,
}) => {
  return (
    <section className="w-full bg-[#f5f4f0] px-4 sm:px-8 lg:px-16 py-2.5 border-b border-[#c5c6ca]/40 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
        
        {/* Architectural Register Path */}
        <div className="flex items-center gap-1.5 font-technical text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-[#44474a] overflow-x-auto whitespace-nowrap py-0.5">
          <a href="#" className="hover:text-[#05080b] transition-colors font-medium">
            Register
          </a>
          <ChevronRight className="w-3 h-3 text-[#c5c6ca] shrink-0" />
          <a href="#" className="hover:text-[#05080b] transition-colors font-medium">
            Super-Talls
          </a>
          <ChevronRight className="w-3 h-3 text-[#c5c6ca] shrink-0" />
          <span className="text-[#05080b] font-semibold">
            {selectedCity === 'dubai' && 'Dubai Marina Sanctuary'}
            {selectedCity === 'newyork' && 'Manhattan Central Park'}
            {selectedCity === 'london' && 'Hyde Park Royal Enclave'}
            {selectedCity === 'tokyo' && 'Minato Bay Pacific'}
          </span>
        </div>

        {/* Global Cities Selector Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap pb-1 sm:pb-0">
          {CITIES.map((city) => {
            const isActive = selectedCity === city.id;
            return (
              <button
                key={city.id}
                onClick={() => onSelectCity(city.id)}
                className={`px-2.5 py-1 text-[9px] sm:text-[10px] font-telemetry uppercase tracking-wider transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#e3e2df] text-[#05080b] font-bold border border-[#725b38]/50 shadow-xs'
                    : 'bg-[#ffffff] text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea]'
                }`}
              >
                <span className="inline-flex items-center gap-1">
                  <MapPin className={`w-2.5 h-2.5 ${isActive ? 'text-[#725b38]' : 'text-[#75777b]'}`} />
                  {city.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
