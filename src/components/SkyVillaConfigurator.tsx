'use client';

import React, { useState } from 'react';
import { CURRENCIES } from '@/data/mockData';
import {
  Sliders,
  Sun,
  Layers,
  Sparkles,
  Maximize2,
  Lock,
  Eye,
  CheckCircle,
} from 'lucide-react';

interface SkyVillaConfiguratorProps {
  currentCurrency: string;
  onOpen360Walk: () => void;
  onLockConfiguration: (config: {
    floor: number;
    altitude: number;
    hour: number;
    archetype: string;
    sqm: number;
    sqft: number;
    price: number;
  }) => void;
}

export const SkyVillaConfigurator: React.FC<SkyVillaConfiguratorProps> = ({
  currentCurrency,
  onOpen360Walk,
  onLockConfiguration,
}) => {
  const [floor, setFloor] = useState<number>(74);
  const [sunHour, setSunHour] = useState<number>(17);
  const [archetype, setArchetype] = useState<'grand' | 'penthouse'>('grand');

  const currencyInfo = CURRENCIES[currentCurrency] || CURRENCIES.USD;

  // Real-time calculations
  const elevationMeters = Math.round(floor * 4.6);
  const baseSqm = archetype === 'grand' ? 620 + floor * 4.2 : 940 + floor * 6.5;
  const sqft = Math.round(baseSqm * 10.764);
  const lumens = Math.min(99.4, 75 + floor * 0.25).toFixed(1);
  const basePriceUSD = (archetype === 'grand' ? 22.5 + floor * 0.14 : 34.0 + floor * 0.22) * 1000000;
  const convertedPrice = (basePriceUSD * currencyInfo.rate) / 1000000;

  // Format hour string
  const hourInt = Math.floor(sunHour);
  const minStr = sunHour % 1 === 0 ? '00' : '30';
  const hourStr = hourInt.toString().padStart(2, '0');
  const daylightName =
    sunHour < 10
      ? 'Morning Dawn Ray'
      : sunHour > 16
      ? 'Golden Hour Solstice Lux'
      : 'Solar Zenith Pure Lux';

  // Sunlight overlay style based on hour
  let sunlightOverlayClass = 'bg-transparent';
  if (sunHour <= 8) {
    sunlightOverlayClass = 'bg-amber-100/15 mix-blend-screen';
  } else if (sunHour >= 16 && sunHour < 18.5) {
    sunlightOverlayClass = 'bg-amber-500/25 mix-blend-color-burn';
  } else if (sunHour >= 18.5) {
    sunlightOverlayClass = 'bg-indigo-950/45 mix-blend-multiply';
  }

  const handleLock = () => {
    onLockConfiguration({
      floor,
      altitude: elevationMeters,
      hour: sunHour,
      archetype: archetype === 'grand' ? 'Grand Duplex' : 'Full-Floor Sky Villa',
      sqm: Math.round(baseSqm),
      sqft,
      price: convertedPrice,
    });
  };

  return (
    <section id="sky-villas" className="w-full bg-[#faf9f5] px-4 sm:px-8 lg:px-16 py-12 sm:py-16 border-t border-[#c5c6ca]/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto">
        
        {/* Left Configurator Controls (4 cols) */}
        <div className="lg:col-span-4 luxury-card rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-xl border border-[#c5c6ca]/60">
          <div className="flex flex-col gap-5">
            
            <div className="flex items-center gap-2 text-[#725b38] font-telemetry text-xs uppercase tracking-widest font-semibold">
              <Sliders className="w-4 h-4 text-[#725b38]" />
              <span>Interactive Spatial Engine</span>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-display text-2xl sm:text-3xl text-[#05080b] font-normal leading-snug">
                Volumetric Sky-Villa Configurator
              </h2>
              <p className="font-serif-luxury text-xl text-[#725b38] italic font-normal">
                Private Penthouse Strata & Golden Solstice Lux
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#44474a] leading-relaxed">
                Simulate ambient daylight conditions across seasonal solstice angles, adjust floor altitude, and view updated interior spatial metrics in real time.
              </p>
            </div>

            {/* Floor Level Selector Slider */}
            <div className="flex flex-col gap-1.5 pt-2">
              <div className="flex items-center justify-between">
                <label htmlFor="floor-slider" className="font-telemetry text-[11px] uppercase text-[#05080b] font-bold">
                  Vertical Elevation
                </label>
                <span className="font-technical text-xs text-[#725b38] font-bold">
                  Floor {floor} ({elevationMeters}m Elevation)
                </span>
              </div>
              <input
                id="floor-slider"
                type="range"
                min="40"
                max="98"
                value={floor}
                onChange={(e) => setFloor(parseInt(e.target.value))}
                className="w-full accent-[#05080b] cursor-pointer h-2 bg-[#e3e2df] rounded-full"
              />
              <div className="flex justify-between font-telemetry text-[10px] text-[#44474a]">
                <span>Strata 40 (Lower Sky)</span>
                <span>Strata 70</span>
                <span>Strata 98 (Crown)</span>
              </div>
            </div>

            {/* Sunlight Hour Slider */}
            <div className="flex flex-col gap-1.5 pt-2">
              <div className="flex items-center justify-between">
                <label htmlFor="sun-slider" className="font-telemetry text-[11px] uppercase text-[#05080b] font-bold">
                  Sunlight Azimuth & Hour
                </label>
                <span className="font-technical text-xs text-[#725b38] font-bold">
                  {hourStr}:{minStr} • {daylightName}
                </span>
              </div>
              <input
                id="sun-slider"
                type="range"
                min="6"
                max="19"
                step="0.5"
                value={sunHour}
                onChange={(e) => setSunHour(parseFloat(e.target.value))}
                className="w-full accent-[#725b38] cursor-pointer h-2 bg-[#e3e2df] rounded-full"
              />
              <div className="flex justify-between font-telemetry text-[10px] text-[#44474a]">
                <span>06:00 Dawn</span>
                <span>12:00 Zenith</span>
                <span>19:00 Dusk</span>
              </div>
            </div>

            {/* Layout Type Toggle */}
            <div className="flex flex-col gap-1.5 pt-2">
              <span className="font-telemetry text-[11px] uppercase text-[#05080b] font-bold">
                Configuration Archetype
              </span>
              <div className="grid grid-cols-2 gap-2 bg-[#efeeea] p-1 rounded-2xl border border-[#c5c6ca]/40">
                <button
                  type="button"
                  onClick={() => setArchetype('grand')}
                  className={`py-2 px-3 rounded-xl font-technical text-xs uppercase tracking-wider text-center transition-all cursor-pointer ${
                    archetype === 'grand'
                      ? 'bg-[#05080b] text-white font-bold shadow-xs'
                      : 'text-[#44474a] hover:text-[#05080b]'
                  }`}
                >
                  Grand Duplex
                </button>
                <button
                  type="button"
                  onClick={() => setArchetype('penthouse')}
                  className={`py-2 px-3 rounded-xl font-technical text-xs uppercase tracking-wider text-center transition-all cursor-pointer ${
                    archetype === 'penthouse'
                      ? 'bg-[#05080b] text-white font-bold shadow-xs'
                      : 'text-[#44474a] hover:text-[#05080b]'
                  }`}
                >
                  Full-Floor Sky Villa
                </button>
              </div>
            </div>
          </div>

          {/* Calculated Live Metrics Summary */}
          <div className="pt-4 flex flex-col gap-2.5 luxury-subcard rounded-2xl p-5 shadow-md mt-6 border border-[#c5c6ca]/50">
            <div className="flex items-center justify-between">
              <span className="font-telemetry text-[10px] uppercase text-[#44474a] font-semibold">
                Calculated Living Area
              </span>
              <span className="font-technical text-sm text-[#05080b] font-bold">
                {Math.round(baseSqm)} M² ({sqft.toLocaleString()} SQ FT)
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-telemetry text-[10px] uppercase text-[#44474a] font-semibold">
                Daylight Factor
              </span>
              <span className="font-technical text-sm text-[#725b38] font-bold">
                {lumens}% Natural Lumens
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-telemetry text-[10px] uppercase text-[#44474a] font-semibold">
                Indicative Allocation
              </span>
              <span className="font-technical text-base text-[#05080b] font-bold">
                {currencyInfo.symbol}{convertedPrice.toFixed(1)}M {currentCurrency}
              </span>
            </div>

            <button
              onClick={handleLock}
              className="w-full mt-2 py-3.5 rounded-full bg-[#725b38] text-white hover:bg-[#584323] font-telemetry text-xs uppercase tracking-widest transition-all font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Lock Spatial Configuration</span>
            </button>
          </div>
        </div>

        {/* Right Render Preview Viewport (8 cols) */}
        <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 flex flex-col justify-between p-4 sm:p-6 border border-[#c5c6ca]/60 group">
          
          {/* Main Penthouse Render Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-[1.01]"
            style={{
              backgroundImage: `url('/images/penthouse-interior.png')`,
            }}
          />

          {/* Dynamic Sunlight Shader Filter */}
          <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${sunlightOverlayClass}`} />

          {/* Dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080b]/80 via-transparent to-[#05080b]/25 pointer-events-none" />

          {/* Render Viewport Top Bar */}
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg text-white font-telemetry text-[10px] uppercase border border-white/15">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>
                Rendering: Floor {floor} • {archetype === 'grand' ? 'Duplex Grand Salon' : 'Full-Floor Sky Villa'} • Solstice {hourStr}:{minStr}
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg text-zinc-200 font-telemetry text-[10px] uppercase border border-white/15">
              <Sun className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Unobstructed 270° Coastal Horizon</span>
            </div>
          </div>

          {/* Render Viewport Bottom Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="bg-black/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex items-center gap-4 border border-white/15 text-white flex-wrap">
              <div>
                <span className="font-telemetry text-[9px] text-zinc-400 uppercase block font-semibold">
                  Ceiling Clearance
                </span>
                <span className="font-technical text-xs text-white font-bold">
                  {archetype === 'grand' ? '5.8M Double-Height' : '6.4M Atrium Gallery'}
                </span>
              </div>

              <div className="h-6 w-px bg-white/20 hidden sm:block" />

              <div>
                <span className="font-telemetry text-[9px] text-zinc-400 uppercase block font-semibold">
                  HVAC Acoustic
                </span>
                <span className="font-technical text-xs text-white font-bold">
                  NC 18 Whisper Quiet
                </span>
              </div>

              <div className="h-6 w-px bg-white/20 hidden sm:block" />

              <div>
                <span className="font-telemetry text-[9px] text-zinc-400 uppercase block font-semibold">
                  Sculptural Stair
                </span>
                <span className="font-technical text-xs text-[#fedeb2] font-bold">
                  Cast Bronze Monocoque
                </span>
              </div>
            </div>

            <button
              onClick={onOpen360Walk}
              className="px-5 py-3 rounded-full bg-white/95 hover:bg-white text-[#05080b] shadow-2xl font-technical text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 font-bold cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#725b38]" />
              <span>Launch 360° Spatial Walk</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
