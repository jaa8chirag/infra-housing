'use client';

import React, { useState } from 'react';
import { DEVELOPMENTS, CURRENCIES, Development } from '@/data/mockData';
import {
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';

interface PortfolioSectionProps {
  currentCurrency: string;
  onOpenDossier: (dev: Development) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  currentCurrency,
  onOpenDossier,
}) => {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [filterCity, setFilterCity] = useState<string>('all');

  const currencyInfo = CURRENCIES[currentCurrency] || CURRENCIES.USD;

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((item) => item !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const filteredDevs =
    filterCity === 'all'
      ? DEVELOPMENTS
      : DEVELOPMENTS.filter((d) => d.city.toLowerCase() === filterCity.toLowerCase());

  return (
    <section id="portfolio-section" className="w-full bg-[#f5f4f0] px-4 sm:px-8 lg:px-16 py-12 sm:py-16 border-t border-[#c5c6ca]/40">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="font-telemetry text-xs uppercase tracking-widest text-[#725b38] font-bold">
              Masterwork Monoliths
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-[#05080b] tracking-tight font-light">
              The Sovereign Architectural Portfolio
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#44474a] max-w-xl">
              Each development is an individual engineering feat conceived by Pritzker-laureate studios with net-zero carbon lifecycle certification and proprietary acoustic insulation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-[#c5c6ca]/50 shadow-sm overflow-x-auto">
              <button
                onClick={() => setFilterCity('all')}
                className={`px-3.5 py-1.5 rounded-full font-telemetry text-[10px] sm:text-[11px] uppercase tracking-wider cursor-pointer transition-all ${
                  filterCity === 'all' ? 'bg-[#05080b] font-bold text-white shadow-sm' : 'text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea]'
                }`}
              >
                All Metropolises
              </button>
              <button
                onClick={() => setFilterCity('Dubai')}
                className={`px-3.5 py-1.5 rounded-full font-telemetry text-[10px] sm:text-[11px] uppercase tracking-wider cursor-pointer transition-all ${
                  filterCity === 'Dubai' ? 'bg-[#05080b] font-bold text-white shadow-sm' : 'text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea]'
                }`}
              >
                Dubai
              </button>
              <button
                onClick={() => setFilterCity('New York')}
                className={`px-3.5 py-1.5 rounded-full font-telemetry text-[10px] sm:text-[11px] uppercase tracking-wider cursor-pointer transition-all ${
                  filterCity === 'New York' ? 'bg-[#05080b] font-bold text-white shadow-sm' : 'text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea]'
                }`}
              >
                New York
              </button>
              <button
                onClick={() => setFilterCity('Tokyo')}
                className={`px-3.5 py-1.5 rounded-full font-telemetry text-[10px] sm:text-[11px] uppercase tracking-wider cursor-pointer transition-all ${
                  filterCity === 'Tokyo' ? 'bg-[#05080b] font-bold text-white shadow-sm' : 'text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea]'
                }`}
              >
                Tokyo
              </button>
            </div>
          </div>
        </div>

        {/* Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDevs.map((dev) => {
            const isBookmarked = bookmarkedIds.includes(dev.id);
            const convertedPrice = (dev.priceUSD * currencyInfo.rate) / 1000000;

            return (
              <div
                key={dev.id}
                className="group luxury-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-[#c5c6ca]/60 cursor-pointer"
                onClick={() => onOpenDossier(dev)}
              >
                {/* Image and Badges */}
                <div className="relative h-72 w-full overflow-hidden bg-zinc-900">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${dev.image}')` }}
                  />

                  {/* Certification Pill */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-[#c5c6ca]/40">
                    <Award className="w-3.5 h-3.5 text-[#725b38]" />
                    <span className="font-telemetry text-[10px] uppercase tracking-wider text-[#05080b] font-bold">
                      {dev.certification}
                    </span>
                  </div>

                  {/* Handover Pill */}
                  <div className="absolute bottom-3.5 right-3.5 bg-[#05080b]/85 backdrop-blur-md text-white px-3 py-1 rounded-full font-telemetry text-[10px] uppercase tracking-wide shadow-md">
                    {dev.handover}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-telemetry text-[10px] uppercase text-[#725b38] tracking-widest font-bold">
                      {dev.location}
                    </span>
                    <h3 className="font-display text-2xl text-[#05080b] font-normal group-hover:text-[#725b38] transition-colors">
                      {dev.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#44474a] line-clamp-2 leading-relaxed">
                      {dev.desc}
                    </p>
                  </div>

                  {/* Floor Plan Metric Telemetry Row */}
                  <div className="grid grid-cols-3 gap-2 bg-[#f5f4f0]/70 p-3.5 rounded-2xl border border-[#c5c6ca]/40 shadow-xs">
                    <div className="flex flex-col">
                      <span className="font-telemetry text-[9px] text-[#44474a] uppercase font-semibold">
                        Living Area
                      </span>
                      <span className="font-technical text-xs text-[#05080b] font-semibold mt-0.5">
                        {dev.livingAreaM2}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-telemetry text-[9px] text-[#44474a] uppercase font-semibold">
                        Terrace
                      </span>
                      <span className="font-technical text-xs text-[#05080b] font-semibold mt-0.5">
                        {dev.terraceAreaM2}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-telemetry text-[9px] text-[#44474a] uppercase font-semibold">
                        Valuation
                      </span>
                      <span className="font-technical text-xs text-[#725b38] font-bold mt-0.5">
                        From {currencyInfo.symbol}{convertedPrice.toFixed(1)}M
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-technical text-xs uppercase tracking-wider text-[#05080b] group-hover:text-[#725b38] inline-flex items-center gap-1 font-semibold">
                      <span>Inspect Technical Dossier</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>

                    <button
                      onClick={(e) => toggleBookmark(dev.id, e)}
                      className="p-2.5 rounded-full hover:bg-[#efeeea] text-[#44474a] hover:text-[#05080b] transition-colors cursor-pointer"
                      title={isBookmarked ? 'Bookmarked' : 'Bookmark Unit'}
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 text-[#725b38] fill-[#725b38]" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
