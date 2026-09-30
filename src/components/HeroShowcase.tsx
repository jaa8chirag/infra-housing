'use client';

import React, { useState } from 'react';
import { TOWERS, CURRENCIES, Tower } from '@/data/mockData';
import {
  RotateCcw,
  Sun,
  Maximize2,
  ShieldCheck,
  Plane,
  Box,
  Layers,
  Sparkles,
  Compass,
} from 'lucide-react';

interface HeroShowcaseProps {
  currentCurrency: string;
  onOpenFlightModal: () => void;
  onOpen3DViewer: (tower: Tower) => void;
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({
  currentCurrency,
  onOpenFlightModal,
  onOpen3DViewer,
}) => {
  const [selectedTowerKey, setSelectedTowerKey] = useState<string>('spire');
  const [lightMode, setLightMode] = useState<'daylight' | 'golden' | 'dusk'>('daylight');
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const tower = TOWERS[selectedTowerKey] || TOWERS.spire;
  const currencyInfo = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const convertedPrice = (tower.basePriceUSD * currencyInfo.rate) / 1000000;

  // Rotate camera pitch
  const handleRotatePitch = () => {
    setRotationAngle((prev) => (prev + 90) % 360);
  };

  // Toggle sunlight exposure
  const handleToggleLight = () => {
    if (lightMode === 'daylight') setLightMode('golden');
    else if (lightMode === 'golden') setLightMode('dusk');
    else setLightMode('daylight');
  };

  const sunText =
    lightMode === 'daylight'
      ? 'Sun Vector: 48° Elevation • Azimuth 214° SW'
      : lightMode === 'golden'
      ? 'Sun Vector: 18° Elevation • Golden Solstice Lux'
      : 'Sun Vector: 04° Horizon • Twilight Astrophotometric';

  return (
    <section id="developments" className="w-full bg-[#faf8f5] px-4 sm:px-8 lg:px-16 py-8 sm:py-12 relative overflow-hidden">
      {/* Soft Ambient Depth Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#007a87]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto relative z-10">
        
        {/* Left: Architectural Master Narrative & HUD Metrics (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between luxury-card rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xl">
          <div className="flex flex-col gap-5">
            
            {/* Building Navigation Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#efeeea] rounded-full border border-[#e3e2df]">
              {Object.keys(TOWERS).map((key) => {
                const isSelected = selectedTowerKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedTowerKey(key)}
                    className={`flex-1 py-2 px-3 text-center font-telemetry text-[11px] uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#ffffff] text-[#05080b] shadow-sm font-bold scale-[1.02]'
                        : 'text-[#44474a] hover:text-[#05080b]'
                    }`}
                  >
                    {TOWERS[key].name}
                  </button>
                );
              })}
            </div>

            {/* Master Title & Classification */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="font-telemetry text-[10px] uppercase tracking-[0.25em] text-[#725b38] font-bold">
                  {tower.code}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#725b38]"></span>
                <span className="font-telemetry text-[10px] text-[#44474a] uppercase bg-[#efeeea] px-2 py-0.5 rounded-full">
                  LEED Platinum Core
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-[#05080b] font-bold leading-tight sm:leading-none">
                {tower.name}
              </h1>

              <p className="font-serif-luxury text-lg sm:text-2xl italic text-[#725b38] leading-snug font-light mt-1">
                {tower.tagline}
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#44474a] leading-relaxed max-w-lg mt-1">
                {tower.desc}
              </p>
            </div>

            {/* Dynamic HUD Telemetry Matrix */}
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div className="luxury-subcard rounded-2xl p-4">
                <span className="font-telemetry text-[9px] sm:text-[10px] text-[#725b38] uppercase tracking-widest block font-bold">
                  Structural Apex Height
                </span>
                <span className="font-display text-2xl sm:text-3xl text-[#05080b] font-bold block mt-0.5">
                  {tower.height}
                </span>
                <span className="font-technical text-[10px] sm:text-[11px] text-[#44474a]">
                  {tower.strata}
                </span>
              </div>

              <div className="luxury-subcard rounded-2xl p-4">
                <span className="font-telemetry text-[9px] sm:text-[10px] text-[#725b38] uppercase tracking-widest block font-bold">
                  Glass Envelope Rating
                </span>
                <span className="font-display text-2xl sm:text-3xl text-[#05080b] font-bold block mt-0.5">
                  {tower.glass}
                </span>
                <span className="font-technical text-[10px] sm:text-[11px] text-[#44474a]">
                  {tower.glassDesc}
                </span>
              </div>

              <div className="luxury-subcard rounded-2xl p-4">
                <span className="font-telemetry text-[9px] sm:text-[10px] text-[#725b38] uppercase tracking-widest block font-bold">
                  Available Sky-Villas
                </span>
                <span className="font-display text-2xl sm:text-3xl text-[#05080b] font-bold block mt-0.5">
                  {tower.villas}
                </span>
                <span className="font-technical text-[10px] sm:text-[11px] text-[#44474a]">
                  {tower.villasDesc}
                </span>
              </div>

              <div className="luxury-subcard rounded-2xl p-4">
                <span className="font-telemetry text-[9px] sm:text-[10px] text-[#725b38] uppercase tracking-widest block font-bold">
                  Baseline Acquisition
                </span>
                <span className="font-display text-2xl sm:text-3xl text-[#725b38] font-bold block mt-0.5">
                  {currencyInfo.symbol}
                  {convertedPrice.toFixed(1)}M
                </span>
                <span className="font-technical text-[10px] sm:text-[11px] text-[#44474a]">
                  Direct Escrow Custody
                </span>
              </div>
            </div>
          </div>

          {/* Hero Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 pt-5 border-t border-[#e3e2df]">
            <button
              onClick={() => onOpen3DViewer(tower)}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#05080b] text-[#ffffff] hover:bg-[#725b38] rounded-full shadow-lg hover:shadow-[#05080b]/25 font-telemetry text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 cursor-pointer font-bold"
            >
              <Box className="w-4 h-4 text-[#c5a880]" />
              <span>Explore Realistic 3D Model</span>
            </button>

            <button
              onClick={onOpenFlightModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ffffff] text-[#05080b] hover:bg-[#efeeea] rounded-full shadow-md font-telemetry text-xs uppercase tracking-widest transition-all duration-300 border border-[#c5c6ca]/50 hover:-translate-y-0.5 cursor-pointer font-semibold"
            >
              <Plane className="w-4 h-4 text-[#725b38]" />
              <span>Book Helipad Tour</span>
            </button>
          </div>
        </div>

        {/* Right: Immersive 3D Architectural Viewport (7 cols) */}
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 flex flex-col justify-between p-5 sm:p-7 border border-white/30 ring-1 ring-black/10 group">
          
          {/* Main Daylight Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-[1.02]"
            style={{
              backgroundImage: `url('${tower.image}')`,
              transform: `rotate(${rotationAngle * 0.05}deg) scale(${1 + (rotationAngle % 180) * 0.0005})`,
            }}
          />

          {/* Light Mode Overlay Shader */}
          {lightMode === 'golden' && (
            <div className="absolute inset-0 bg-amber-500/20 mix-blend-color-burn pointer-events-none transition-all duration-500" />
          )}
          {lightMode === 'dusk' && (
            <div className="absolute inset-0 bg-indigo-950/40 mix-blend-multiply pointer-events-none transition-all duration-500" />
          )}

          {/* Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080b]/85 via-transparent to-[#05080b]/35 pointer-events-none" />

          {/* Overlay HUD: Top Status Indicators */}
          <div className="relative z-10 flex items-center justify-between w-full flex-wrap gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md shadow-lg border border-white/10 text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-telemetry text-[10px] uppercase tracking-wider font-semibold text-zinc-100">
                Live Volumetric BIM Stream
              </span>
              <span className="text-[#fedeb2] font-telemetry text-[10px]">// 60 FPS WebGL</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md shadow-lg border border-white/10 text-[#fceba6] font-telemetry text-[10px] uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{sunText}</span>
            </div>
          </div>

          {/* Floating Glassmorphic Architectural Pin Tag */}
          <div className="relative z-10 self-center max-w-sm p-4 bg-black/65 backdrop-blur-xl border border-white/20 text-white shadow-2xl transition-all duration-300 hover:bg-black/80">
            <div className="flex items-center justify-between text-[10px] font-telemetry text-[#fedeb2] tracking-widest uppercase mb-1">
              <span>Private Apex Helipad</span>
              <span className="text-emerald-400 font-bold">{tower.helipad}</span>
            </div>
            <p className="font-serif-luxury text-lg text-white font-normal leading-tight">
              Executive AW139 flight reception with direct VIP elevator access to penthouse floorplates.
            </p>
          </div>

          {/* Overlay HUD: Bottom Spatial Controls & Crosshairs */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full">
            <div className="flex items-center gap-3 p-2 bg-black/60 backdrop-blur-md shadow-xl border border-white/15 text-white">
              <div className="flex flex-col">
                <span className="font-telemetry text-[9px] text-[#fedeb2] uppercase tracking-widest font-semibold">
                  Satellite Calibration
                </span>
                <span className="font-technical text-[10px] text-zinc-200">
                  {tower.coordinates}
                </span>
              </div>

              <div className="h-6 w-px bg-white/20" />

              <div className="flex items-center gap-1">
                <button
                  onClick={handleRotatePitch}
                  className="p-1.5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                  title="Rotate Camera Orientation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={handleToggleLight}
                  className="p-1.5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                  title="Toggle Daylight / Golden / Dusk Mode"
                >
                  <Sun className={`w-4 h-4 ${lightMode !== 'daylight' ? 'text-amber-400' : ''}`} />
                </button>
                <button
                  onClick={() => onOpen3DViewer(tower)}
                  className="p-1.5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                  title="Full Volumetric Spatial Mode"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-[#725b38]/90 text-white shadow-xl font-technical text-[10px] uppercase tracking-wider backdrop-blur-sm border border-[#e0c298]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#fceba6]" />
              <span>Sovereign Title Deed Registered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
