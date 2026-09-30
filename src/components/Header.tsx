'use client';

import React, { useState } from 'react';
import { CURRENCIES } from '@/data/mockData';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCurrency,
  onCurrencyChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header transition-all duration-300">
      <div className="h-20 w-full px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-4 sm:gap-6">
        
        {/* Brand Monogram */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group">
            {/* Architectural Monogram Icon */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1c2024] to-[#05080b] text-[#c5a880] flex items-center justify-center border border-[#725b38]/40 shadow-sm transition-all duration-300 group-hover:scale-105 shrink-0">
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 9h6M9 13h6M9 17h6" />
                <path d="M12 3v18" strokeDasharray="2 2" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="flex flex-col border-l border-[#c5c6ca]/70 pl-3 sm:pl-3.5">
              <span className="font-telemetry text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#725b38] font-bold">
                Sovereign Asset Class
              </span>
              <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#05080b]">
                INFRA HOUSING
              </span>
            </div>
          </a>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          <a
            href="#developments"
            className="font-sans text-xs sm:text-[13px] font-semibold text-[#05080b] tracking-wide py-1 border-b-2 border-[#725b38] transition-all"
          >
            Developments
          </a>
          <a
            href="#floorplans-3d"
            className="font-sans text-xs sm:text-[13px] font-medium text-[#1b1c1a] hover:text-[#725b38] transition-all py-1 border-b-2 border-transparent hover:border-[#725b38]/60"
          >
            3D Floorplans
          </a>
          <a
            href="#city-masterplan"
            className="font-sans text-xs sm:text-[13px] font-medium text-[#1b1c1a] hover:text-[#725b38] transition-all py-1 border-b-2 border-transparent hover:border-[#725b38]/60"
          >
            3D Masterplan GIS
          </a>
          <a
            href="#sky-villas"
            className="font-sans text-xs sm:text-[13px] font-medium text-[#1b1c1a] hover:text-[#725b38] transition-all py-1 border-b-2 border-transparent hover:border-[#725b38]/60"
          >
            Sky Villas & Configurator
          </a>
          <a
            href="#portfolio-section"
            className="font-sans text-xs sm:text-[13px] font-medium text-[#1b1c1a] hover:text-[#725b38] transition-all py-1 border-b-2 border-transparent hover:border-[#725b38]/60"
          >
            Portfolio
          </a>
          <a
            href="#private-inspection"
            className="font-sans text-xs sm:text-[13px] font-medium text-[#1b1c1a] hover:text-[#725b38] transition-all py-1 border-b-2 border-transparent hover:border-[#725b38]/60"
          >
            Acquisitions & Fiduciary
          </a>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Glass FX Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-2 glass-pill px-4 py-2 text-[#05080b] transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <Globe className="w-3.5 h-3.5 text-[#725b38]" />
              <span className="font-telemetry text-[10px] uppercase text-[#725b38] font-bold tracking-wider">
                FX:
              </span>
              <span className="font-technical text-xs text-[#05080b] uppercase font-bold">
                {CURRENCIES[currentCurrency]?.name || currentCurrency}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#44474a]" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 glass-dropdown py-2 z-50 shadow-2xl">
                {Object.keys(CURRENCIES).map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      onCurrencyChange(c);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-technical uppercase flex items-center justify-between transition-colors cursor-pointer ${
                      currentCurrency === c
                        ? 'bg-[#725b38]/10 text-[#725b38] font-bold border-l-2 border-[#725b38]'
                        : 'text-[#1b1c1a] hover:bg-[#f5f4f0] hover:text-[#05080b]'
                    }`}
                  >
                    <span>{CURRENCIES[c].name}</span>
                    <span className="text-[#725b38] font-bold font-telemetry">{CURRENCIES[c].symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Executive VIP CTA */}
          <a
            href="#private-inspection"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#05080b] text-white hover:bg-[#725b38] font-telemetry text-xs uppercase tracking-wider font-bold transition-all shadow-sm cursor-pointer shrink-0"
          >
            <span>Client Desk</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 glass-pill text-[#05080b] hover:bg-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-header border-b border-[#c5c6ca]/50 px-6 py-6 flex flex-col gap-4 shadow-2xl">
          <a
            href="#developments"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans text-sm font-semibold text-[#05080b] py-2.5 border-b border-[#c5c6ca]/40"
          >
            Developments
          </a>
          <a
            href="#floorplans-3d"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans text-sm font-medium text-[#1b1c1a] hover:text-[#725b38] py-2.5 border-b border-[#c5c6ca]/40"
          >
            3D Floorplans
          </a>
          <a
            href="#city-masterplan"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans text-sm font-medium text-[#1b1c1a] hover:text-[#725b38] py-2.5 border-b border-[#c5c6ca]/40"
          >
            3D Masterplan GIS
          </a>
          <a
            href="#sky-villas"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans text-sm font-medium text-[#1b1c1a] hover:text-[#725b38] py-2.5 border-b border-[#c5c6ca]/40"
          >
            Sky Villas & Configurator
          </a>
          <a
            href="#portfolio-section"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans text-sm font-medium text-[#1b1c1a] hover:text-[#725b38] py-2.5 border-b border-[#c5c6ca]/40"
          >
            Portfolio
          </a>
          <a
            href="#private-inspection"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans text-sm font-medium text-[#1b1c1a] hover:text-[#725b38] py-2.5 border-b border-[#c5c6ca]/40"
          >
            Acquisitions & Fiduciary
          </a>

          <div className="flex items-center justify-between glass-pill p-3.5 mt-2 border border-[#c5c6ca]/60">
            <span className="font-telemetry text-xs uppercase text-[#725b38] font-bold">Currency:</span>
            <select
              value={currentCurrency}
              onChange={(e) => {
                onCurrencyChange(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="bg-transparent font-technical text-xs text-[#05080b] font-bold uppercase focus:outline-none"
            >
              {Object.keys(CURRENCIES).map((c) => (
                <option key={c} value={c} className="bg-white text-[#05080b]">
                  {CURRENCIES[c].name}
                </option>
              ))}
            </select>
          </div>

          <a
            href="#private-inspection"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center mt-2 py-3 rounded-full bg-[#05080b] text-white hover:bg-[#725b38] font-telemetry text-xs uppercase tracking-wider font-bold shadow-md"
          >
            Access Client Desk
          </a>
        </div>
      )}
    </header>
  );
};
