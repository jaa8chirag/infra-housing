'use client';

import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#ffffff] pt-12 sm:pt-16 pb-12 border-t border-[#c5c6ca]/40">
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#05080b] text-[#c5a880] flex items-center justify-center border border-[#725b38]/40 shadow-xs">
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 9h6M9 13h6M9 17h6" />
                </svg>
              </div>
              <span className="font-telemetry text-xs uppercase tracking-widest text-[#725b38] font-bold pl-2 border-l border-[#c5c6ca]">
                L’Atelier Infra
              </span>
            </div>

            <p className="font-serif-luxury text-lg text-[#44474a] max-w-sm italic">
              Curating transcendental residences, vertical penthouses, and signature architectural landmarks across premier global metropolises.
            </p>

            <div className="flex items-center gap-2 text-[#725b38] font-telemetry text-[11px] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Coordinates 25.1972° N, 55.2744° E</span>
            </div>
          </div>

          {/* Architectural Portfolio (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-technical text-xs uppercase tracking-widest text-[#725b38] font-bold">
              Architectural Portfolio
            </span>
            <ul className="flex flex-col gap-2 mt-1">
              <li className="font-sans text-xs sm:text-sm text-[#44474a] hover:text-[#05080b] cursor-pointer transition-colors flex items-center justify-between">
                <span>The Elysian Monolith</span>
                <ArrowUpRight className="w-3 h-3 text-[#c5c6ca]" />
              </li>
              <li className="font-sans text-xs sm:text-sm text-[#44474a] hover:text-[#05080b] cursor-pointer transition-colors flex items-center justify-between">
                <span>Lumina Oceanfront Peninsula</span>
                <ArrowUpRight className="w-3 h-3 text-[#c5c6ca]" />
              </li>
              <li className="font-sans text-xs sm:text-sm text-[#44474a] hover:text-[#05080b] cursor-pointer transition-colors flex items-center justify-between">
                <span>Vertex Central Park Heights</span>
                <ArrowUpRight className="w-3 h-3 text-[#c5c6ca]" />
              </li>
              <li className="font-sans text-xs sm:text-sm text-[#44474a] hover:text-[#05080b] cursor-pointer transition-colors flex items-center justify-between">
                <span>Aura Minato Sky Pavilion</span>
                <ArrowUpRight className="w-3 h-3 text-[#c5c6ca]" />
              </li>
            </ul>
          </div>

          {/* Spatial Intelligence (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-technical text-xs uppercase tracking-widest text-[#725b38] font-bold">
              Spatial Intelligence
            </span>
            <ul className="flex flex-col gap-2 mt-1">
              <li className="font-sans text-xs sm:text-sm text-[#44474a] hover:text-[#05080b] cursor-pointer transition-colors">
                Blueprint GIS Registry
              </li>
              <li className="font-sans text-xs sm:text-sm text-[#44474a] hover:text-[#05080b] cursor-pointer transition-colors">
                3D Volumetric Models
              </li>
              <li className="font-sans text-xs sm:text-sm text-[#44474a] hover:text-[#05080b] cursor-pointer transition-colors">
                Solar Horizon Analysis
              </li>
              <li className="font-sans text-xs sm:text-sm text-[#44474a] hover:text-[#05080b] cursor-pointer transition-colors">
                Structural Dossiers
              </li>
            </ul>
          </div>

          {/* Private Client Desk (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-technical text-xs uppercase tracking-widest text-[#725b38] font-bold">
              Private Client Desk
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#44474a]">
              Direct acquisition inquiries and confidential portfolio viewings arranged globally.
            </p>
            <div className="flex flex-col gap-1.5 mt-1">
              <a
                href="mailto:concierge@infrahousing.luxe"
                className="font-telemetry text-xs text-[#05080b] uppercase font-bold hover:text-[#725b38] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#725b38]" />
                <span>CONCIERGE@INFRAHOUSING.LUXE</span>
              </a>
              <span className="font-telemetry text-[11px] text-[#44474a] uppercase flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#725b38]" />
                <span>+1 (800) 892-7482 • MONACO • DUBAI • NYC</span>
              </span>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl bg-[#f5f4f0] px-6 py-4 border border-[#c5c6ca]/40 text-xs shadow-xs">
          <span className="font-technical text-[11px] text-[#44474a]">
            © {new Date().getFullYear()} Infra Housing Luxury Estates Corp. All Rights Reserved. Master Architect Specifications.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="font-technical text-[11px] text-[#44474a] hover:text-[#05080b] transition-colors">
              Terms of Appraisal
            </a>
            <a href="#" className="font-technical text-[11px] text-[#44474a] hover:text-[#05080b] transition-colors">
              Confidentiality Protocol
            </a>
            <a href="#" className="font-technical text-[11px] text-[#44474a] hover:text-[#05080b] transition-colors">
              Regulatory Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
