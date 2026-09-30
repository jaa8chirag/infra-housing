'use client';

import React, { useState } from 'react';
import { GIS_PARCELS, Parcel } from '@/data/mockData';
import {
  Globe,
  Compass,
  FileDown,
  TrendingUp,
  MapPin,
  Waves,
  Building,
  Anchor,
  Plane,
  CheckCircle,
} from 'lucide-react';

interface MasterplanGisProps {
  onOpenDossierModal: (parcel: Parcel) => void;
}

export const MasterplanGis: React.FC<MasterplanGisProps> = ({ onOpenDossierModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'waterfront' | 'penthouses' | 'transit'>('all');
  const [selectedParcel, setSelectedParcel] = useState<Parcel>(GIS_PARCELS[0]);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredParcels =
    activeFilter === 'all'
      ? GIS_PARCELS
      : GIS_PARCELS.filter((p) => p.category === activeFilter);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    }, 1200);
  };

  const getPinIcon = (iconName: string) => {
    switch (iconName) {
      case 'waves':
        return <Waves className="w-3.5 h-3.5" />;
      case 'mountain':
        return <Building className="w-3.5 h-3.5" />;
      case 'anchor':
        return <Anchor className="w-3.5 h-3.5" />;
      case 'plane':
        return <Plane className="w-3.5 h-3.5" />;
      default:
        return <Building className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="city-masterplan" className="w-full bg-[#faf9f5] px-4 sm:px-8 lg:px-16 py-12 sm:py-16 border-t border-[#c5c6ca]/40">
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[#725b38] font-telemetry text-xs uppercase tracking-widest font-semibold">
              <Globe className="w-4 h-4 text-[#725b38]" />
              <span>Geospatial Intelligence Module // GIS 2.8</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-[#05080b] tracking-tight font-light">
              Metropolitan Geospatial Footprints
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#44474a] max-w-xl">
              Vector satellite topography mapping direct coastal proximity, private maritime marina moorings, high-capacity transit links, and verified available parcel footprints.
            </p>
          </div>

          {/* Filter Layers */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-[#c5c6ca]/50 shadow-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full font-telemetry text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#05080b] text-[#ffffff] shadow-md font-bold'
                  : 'text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea]'
              }`}
            >
              All Parcels (18)
            </button>
            <button
              onClick={() => setActiveFilter('waterfront')}
              className={`px-3.5 py-1.5 rounded-full font-telemetry text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'waterfront'
                  ? 'bg-[#05080b] text-[#ffffff] shadow-md font-bold'
                  : 'text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea]'
              }`}
            >
              Waterfront Marina
            </button>
            <button
              onClick={() => setActiveFilter('penthouses')}
              className={`px-3.5 py-1.5 rounded-full font-telemetry text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'penthouses'
                  ? 'bg-[#05080b] text-[#ffffff] shadow-md font-bold'
                  : 'text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea]'
              }`}
            >
              Sky Villas Active
            </button>
            <button
              onClick={() => setActiveFilter('transit')}
              className={`px-3.5 py-1.5 rounded-full font-telemetry text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'transit'
                  ? 'bg-[#05080b] text-[#ffffff] shadow-md font-bold'
                  : 'text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea]'
              }`}
            >
              Helipad Ready
            </button>
          </div>
        </div>

        {/* GIS Map & Live Parcels Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-2">
          
          {/* Interactive Map Container (8 cols) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 h-[380px] sm:h-[480px] lg:h-[620px] border border-[#c5c6ca]/60 group">
            {/* High-Res 3D Satellite Masterplan View */}
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-[1.01]"
              style={{
                backgroundImage: `url('/images/gis-satellite-map.png')`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#05080b]/60 via-transparent to-[#05080b]/30 pointer-events-none" />

            {/* Topographic Vector HUD Overlays */}
            <div className="absolute inset-0 pointer-events-none p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg text-white font-telemetry text-[10px] uppercase tracking-widest flex items-center gap-2 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse"></span>
                  <span>Vector Layer: Satellite Optical 0.3m Ground Sampling</span>
                </div>
                <div className="bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg text-zinc-300 font-telemetry text-[10px] uppercase border border-white/15">
                  Grid: EPSG 3857 • Real Time Tide: +0.42m
                </div>
              </div>

              {/* Compass and Scale Bar */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-telemetry text-[10px] uppercase border border-white/15">
                  <Compass className="w-3.5 h-3.5 text-[#fedeb2]" />
                  <span>N 000° TRUE (DXB RADIAL)</span>
                </div>
                <div className="bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-telemetry text-[10px] flex items-center gap-2 border border-white/15">
                  <span className="w-12 h-1 bg-[#c5a880] rounded-full inline-block"></span>
                  <span>500 METERS SATELLITE RANGE</span>
                </div>
              </div>
            </div>

            {/* Interactive Clickable Pins (Geo-Anchors) */}
            {filteredParcels.map((parcel) => {
              const isSelected = selectedParcel.id === parcel.id;
              return (
                <div
                  key={parcel.id}
                  onClick={() => setSelectedParcel(parcel)}
                  style={{
                    top: `${parcel.topPercent}%`,
                    left: `${parcel.leftPercent}%`,
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/pin"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <span
                      className={`absolute rounded-full transition-all ${
                        isSelected
                          ? 'w-12 h-12 bg-[#c5a880]/60 animate-ping'
                          : 'w-8 h-8 bg-white/30 group-hover/pin:animate-ping'
                      }`}
                    />

                    {/* Pin Circle */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 ${
                        isSelected
                          ? 'bg-[#725b38] text-white scale-125 border-2 border-white ring-2 ring-[#c5a880]'
                          : 'bg-[#05080b] text-white border-2 border-[#c5a880] group-hover/pin:scale-110'
                      }`}
                    >
                      {getPinIcon(parcel.icon)}
                    </div>

                    {/* Tooltip callout */}
                    <div
                      className={`absolute left-9 whitespace-nowrap bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-2xl border text-left transition-all duration-300 pointer-events-none ${
                        isSelected
                          ? 'border-[#c5a880] opacity-100 translate-x-0'
                          : 'border-white/20 opacity-0 group-hover/pin:opacity-100 -translate-x-1'
                      }`}
                    >
                      <span className="font-telemetry text-[9px] uppercase text-[#fedeb2] font-bold block">
                        {parcel.highlightText}
                      </span>
                      <span className="font-technical text-[11px] text-white font-semibold">
                        {parcel.priceRange}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Parcel Detail Sidebar Feed (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
            <div className="luxury-card rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col gap-4 border border-[#c5c6ca]/60">
              
              <div className="flex items-center justify-between">
                <span className="font-telemetry text-[11px] uppercase tracking-wider text-[#725b38] font-bold">
                  Active Parcel Dossier
                </span>
                <span className="px-3 py-1 bg-[#efeeea] rounded-full font-telemetry text-[10px] text-[#05080b] font-bold">
                  {selectedParcel.code}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-display text-2xl text-[#05080b] font-normal">
                  {selectedParcel.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#44474a] leading-relaxed">
                  {selectedParcel.desc}
                </p>
              </div>

              {/* Parcel Key Specifications Table */}
              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-center justify-between py-2.5 px-3.5 bg-white/80 rounded-xl border border-[#c5c6ca]/40 shadow-xs">
                  <span className="font-technical text-xs text-[#44474a]">Valuation Bracket</span>
                  <span className="font-technical text-xs text-[#05080b] font-bold">
                    {selectedParcel.priceRange}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2.5 px-3.5 bg-white/80 rounded-xl border border-[#c5c6ca]/40 shadow-xs">
                  <span className="font-technical text-xs text-[#44474a]">Plot Elevation</span>
                  <span className="font-technical text-xs text-[#05080b] font-semibold">
                    {selectedParcel.elevation}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2.5 px-3.5 bg-white/80 rounded-xl border border-[#c5c6ca]/40 shadow-xs">
                  <span className="font-technical text-xs text-[#44474a]">Structural Core Depth</span>
                  <span className="font-technical text-xs text-[#05080b] font-semibold">
                    {selectedParcel.bedrock}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2.5 px-3.5 bg-white/80 rounded-xl border border-[#c5c6ca]/40 shadow-xs">
                  <span className="font-technical text-xs text-[#44474a]">Private Maritime Mooring</span>
                  <span className="font-technical text-xs text-[#725b38] font-bold">
                    {selectedParcel.moorage}
                  </span>
                </div>
              </div>

              {/* Download / Action CTA */}
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="w-full mt-2 py-3.5 rounded-full bg-[#05080b] text-white hover:bg-[#725b38] shadow-md font-telemetry text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {downloading ? (
                  <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                ) : downloadSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Dossier Package Transferred</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-4 h-4 text-[#c5a880]" />
                    <span>Download Full GIS Master Dossier (.dwg & PDF)</span>
                  </>
                )}
              </button>
            </div>

            {/* Global Registry Valuation Index */}
            <div className="luxury-subcard rounded-2xl p-6 shadow-md border border-[#c5c6ca]/50">
              <span className="font-telemetry text-[11px] uppercase tracking-wider text-[#44474a] block mb-2 font-semibold">
                Global Registry Valuation Index
              </span>
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="font-display text-3xl text-[#05080b] font-light">+8.4%</span>
                  <span className="font-telemetry text-xs text-[#44474a] ml-1 font-semibold">
                    YoY Prime Ultra-Luxury
                  </span>
                </div>
                <span className="font-technical text-xs text-[#725b38] font-semibold bg-[#725b38]/10 px-2.5 py-1 rounded-full">
                  Q1 2025 Audited
                </span>
              </div>

              {/* Sparkline SVG */}
              <div className="mt-3 w-full h-10">
                <svg className="w-full h-full overflow-visible text-[#725b38]" fill="none" viewBox="0 0 300 40">
                  <path
                    d="M0,32 Q50,28 100,24 T200,12 T300,4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <circle cx="300" cy="4" fill="currentColor" r="4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
