'use client';

import React from 'react';
import { Shield, Radio, CheckCircle2 } from 'lucide-react';

export const TelemetryBar: React.FC = () => {
  return (
    <section className="w-full bg-[#14171a] text-[#faf9f5] px-4 sm:px-8 lg:px-16 py-2 border-b border-[#05080b]/30">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 sm:gap-3 text-xs">
        
        {/* Left Telemetry Feeds */}
        <div className="flex items-center gap-2 sm:gap-3.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/10 text-[#fedeb2] font-telemetry text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold border border-[#725b38]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            LOD-400 BIM Live
          </span>
          
          <div className="flex items-center gap-2 font-technical text-[10px] sm:text-[11px] text-zinc-400 flex-wrap">
            <span className="text-zinc-200 font-medium">18 Monoliths</span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline">4 Gateways (DXB • NYC • LDN • HND)</span>
            <span className="text-zinc-600">|</span>
            <span className="text-[#e0c298] font-medium">$24.8B Assets Under Stewardship</span>
          </div>
        </div>

        {/* Right Certification Stamp */}
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline font-telemetry text-[10px] uppercase text-zinc-400 tracking-widest">
            Swiss Escrow • Banque Cantonale de Genève Certified
          </span>
          <div className="flex items-center gap-1.5 bg-[#1f2429] px-2.5 py-0.5 text-[#fedeb2] font-technical text-[10px] uppercase tracking-wider border border-[#725b38]/30">
            <CheckCircle2 className="w-3 h-3 text-[#e0c298]" />
            <span>AAA Institutional Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};
