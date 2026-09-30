'use client';

import React from 'react';
import {
  Landmark,
  Building2,
  Leaf,
  ShieldAlert,
  ShieldCheck,
  Lock,
  PhoneCall,
  PlaneTakeoff,
  Award,
} from 'lucide-react';

interface StewardshipSectionProps {
  onOpenFlightModal: () => void;
  onOpenEscrowModal: () => void;
}

export const StewardshipSection: React.FC<StewardshipSectionProps> = ({
  onOpenFlightModal,
  onOpenEscrowModal,
}) => {
  return (
    <section id="private-inspection" className="w-full bg-[#e9e8e4] px-4 sm:px-8 lg:px-16 py-12 sm:py-16 border-t border-[#c5c6ca]/40">
      <div className="flex flex-col gap-8 sm:gap-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="font-telemetry text-xs uppercase tracking-widest text-[#725b38] font-bold">
              Institutional Stewardship
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-[#05080b] tracking-tight font-light">
              Sovereign Capital & Architectural Endurance
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#44474a] max-w-xl">
              Structured for royal family offices, sovereign wealth allocations, and ultra-high-net-worth real asset reserves with ring-fenced international custodial trust protocols.
            </p>
          </div>

          <button
            onClick={onOpenEscrowModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#05080b] text-white hover:bg-[#725b38] rounded-full shadow-md font-telemetry text-xs uppercase tracking-widest transition-all cursor-pointer"
          >
            <Lock className="w-4 h-4 text-[#c5a880]" />
            <span>Access Private Client Portal</span>
          </button>
        </div>

        {/* 4-Pillar Metric Mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="luxury-card rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#c5c6ca]/50 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="font-telemetry text-[10px] text-[#725b38] uppercase tracking-widest font-bold">
                TOTAL VALUATION
              </span>
              <div className="p-2 rounded-full bg-[#f5f4f0] text-[#44474a]">
                <Landmark className="w-4 h-4 text-[#44474a]" />
              </div>
            </div>
            <div className="my-5">
              <span className="font-display text-4xl sm:text-5xl text-[#05080b] font-light block leading-none">
                $24.8B
              </span>
              <span className="font-sans text-xs sm:text-sm text-[#44474a] mt-2 block">
                Global assets under direct stewardship
              </span>
            </div>
            <span className="font-technical text-xs text-[#725b38] font-semibold bg-[#725b38]/10 px-3 py-1 rounded-full w-fit">
              +14.2% 5-Yr Compound ARR
            </span>
          </div>

          {/* Card 2 */}
          <div className="luxury-card rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#c5c6ca]/50 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="font-telemetry text-[10px] text-[#725b38] uppercase tracking-widest font-bold">
                ICONIC TOWERS
              </span>
              <div className="p-2 rounded-full bg-[#f5f4f0] text-[#44474a]">
                <Building2 className="w-4 h-4 text-[#44474a]" />
              </div>
            </div>
            <div className="my-5">
              <span className="font-display text-4xl sm:text-5xl text-[#05080b] font-light block leading-none">
                18 Towers
              </span>
              <span className="font-sans text-xs sm:text-sm text-[#44474a] mt-2 block">
                Super-tall landmarks across 4 metropolises
              </span>
            </div>
            <span className="font-technical text-xs text-[#05080b] font-semibold bg-[#05080b]/5 px-3 py-1 rounded-full w-fit">
              100% Core Equity Financed
            </span>
          </div>

          {/* Card 3 */}
          <div className="luxury-card rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#c5c6ca]/50 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="font-telemetry text-[10px] text-[#725b38] uppercase tracking-widest font-bold">
                GREEN HORIZON
              </span>
              <div className="p-2 rounded-full bg-[#f5f4f0] text-[#44474a]">
                <Leaf className="w-4 h-4 text-[#44474a]" />
              </div>
            </div>
            <div className="my-5">
              <span className="font-display text-4xl sm:text-5xl text-[#05080b] font-light block leading-none">
                Net Zero
              </span>
              <span className="font-sans text-xs sm:text-sm text-[#44474a] mt-2 block">
                Embodied carbon offsets on all structures
              </span>
            </div>
            <span className="font-technical text-xs text-[#725b38] font-semibold bg-[#725b38]/10 px-3 py-1 rounded-full w-fit">
              LEED & BREEAM Platinum 100%
            </span>
          </div>

          {/* Card 4 */}
          <div className="luxury-card rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#c5c6ca]/50 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="font-telemetry text-[10px] text-[#725b38] uppercase tracking-widest font-bold">
                ESCROW FIDUCIARY
              </span>
              <div className="p-2 rounded-full bg-[#f5f4f0] text-[#44474a]">
                <ShieldCheck className="w-4 h-4 text-[#44474a]" />
              </div>
            </div>
            <div className="my-5">
              <span className="font-display text-4xl sm:text-5xl text-[#05080b] font-light block leading-none">
                AAA Rated
              </span>
              <span className="font-sans text-xs sm:text-sm text-[#44474a] mt-2 block">
                Tier-1 Swiss & DIFC custodial covenants
              </span>
            </div>
            <span className="font-technical text-xs text-[#05080b] font-semibold bg-[#05080b]/5 px-3 py-1 rounded-full w-fit">
              Direct Title Registry Custody
            </span>
          </div>
        </div>

        {/* Private Helipad Tour & VIP Concierge Banner */}
        <div className="bg-[#05080b] text-white p-8 lg:p-12 rounded-3xl relative overflow-hidden shadow-2xl border border-[#725b38]/40">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#725b38]/15 pointer-events-none blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-telemetry text-[10px] uppercase tracking-widest text-[#fceba6] font-bold">
                Direct Sovereign Acquisition & Inspection Protocol
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-light">
                Schedule Confidential Architectural Inspection by Helicopter
              </h3>
              <p className="font-serif-luxury text-xl text-zinc-300 italic font-light">
                Direct private aviation connection to tower-top landing coordinates.
              </p>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                Private executive transfers arranged from Dubai International (DXB), Teterboro (TEB), London Farnborough (FAB), or Haneda (HND). Complete non-disclosure and biometric vetting maintained.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={onOpenFlightModal}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#725b38] text-white hover:bg-[#c5a880] hover:text-[#05080b] font-telemetry text-xs uppercase tracking-widest font-bold transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <PlaneTakeoff className="w-4 h-4" />
                <span>Initiate VIP Acquisition Request</span>
              </button>
              
              <a
                href="tel:+18008927482"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#05080b] font-telemetry text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 text-center border border-white/20 backdrop-blur-md"
              >
                <PhoneCall className="w-4 h-4 text-[#c5a880]" />
                <span>Direct Desk: +1 (800) 892-7482</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
