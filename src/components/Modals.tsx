'use client';

import React, { useState } from 'react';
import { Tower, Development, Parcel } from '@/data/mockData';
import {
  X,
  Plane,
  ShieldCheck,
  Fingerprint,
  FileText,
  Download,
  Eye,
  CheckCircle,
  Layers,
  Building,
  Calendar,
  Lock,
  Compass,
  ArrowRight,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 1. FLIGHT INSPECTION MODAL                                                */
/* -------------------------------------------------------------------------- */
interface FlightInspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlightInspectionModal: React.FC<FlightInspectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    office: '',
    email: '',
    phone: '',
    gateway: 'Dubai International (DXB) • Marina Heliport',
    aircraft: 'AgustaWestland AW139 (Twin-Turbine VIP)',
    date: '2025-06-15',
    ndaAccepted: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#ffffff] rounded-3xl p-6 sm:p-10 border border-[#c5c6ca]/60 shadow-2xl my-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-[#725b38] font-telemetry text-xs uppercase tracking-widest font-bold mb-2">
              <Plane className="w-4 h-4" />
              <span>Direct Flight Inspection Protocol // VIP-FLIGHT</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-[#05080b] font-light">
              Schedule Confidential Architectural Inspection by Helicopter
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#44474a] mt-2 leading-relaxed">
              Direct private aviation reception with rooftop helipad transfer. Complete Swiss banking confidentiality and biometric vetting strictly enforced.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-telemetry text-[10px] uppercase text-[#05080b] font-bold block mb-1">
                    Principal Representative / Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Harrington / Al-Maktoum Family Office"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#f5f4f0] px-3.5 py-2.5 text-xs text-[#05080b] border border-[#c5c6ca]/50 focus:border-[#725b38] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-telemetry text-[10px] uppercase text-[#05080b] font-bold block mb-1">
                    Family Office / Institution
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sovereign Fund / Private Trust"
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                    className="w-full bg-[#f5f4f0] px-3.5 py-2.5 text-xs text-[#05080b] border border-[#c5c6ca]/50 focus:border-[#725b38] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-telemetry text-[10px] uppercase text-[#05080b] font-bold block mb-1">
                    Confidential Email Desk
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="office@sovereign-holdings.ch"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#f5f4f0] px-3.5 py-2.5 text-xs text-[#05080b] border border-[#c5c6ca]/50 focus:border-[#725b38] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-telemetry text-[10px] uppercase text-[#05080b] font-bold block mb-1">
                    Direct Private Line
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+41 22 819 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#f5f4f0] px-3.5 py-2.5 text-xs text-[#05080b] border border-[#c5c6ca]/50 focus:border-[#725b38] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-telemetry text-[10px] uppercase text-[#05080b] font-bold block mb-1">
                    Gateway Helipad Hub
                  </label>
                  <select
                    value={formData.gateway}
                    onChange={(e) => setFormData({ ...formData, gateway: e.target.value })}
                    className="w-full bg-[#f5f4f0] px-3.5 py-2.5 text-xs text-[#05080b] border border-[#c5c6ca]/50 focus:border-[#725b38] focus:outline-none"
                  >
                    <option>Dubai International (DXB) • Marina Heliport</option>
                    <option>New York (TEB) • Manhattan Pier 6 Helipad</option>
                    <option>London Farnborough (FAB) • Battersea Heliport</option>
                    <option>Tokyo Haneda (HND) • Minato Marine Pad</option>
                  </select>
                </div>

                <div>
                  <label className="font-telemetry text-[10px] uppercase text-[#05080b] font-bold block mb-1">
                    Aviation Asset Configuration
                  </label>
                  <select
                    value={formData.aircraft}
                    onChange={(e) => setFormData({ ...formData, aircraft: e.target.value })}
                    className="w-full bg-[#f5f4f0] px-3.5 py-2.5 text-xs text-[#05080b] border border-[#c5c6ca]/50 focus:border-[#725b38] focus:outline-none"
                  >
                    <option>AgustaWestland AW139 (Twin-Turbine VIP)</option>
                    <option>Sikorsky S-76D Executive Shuttle</option>
                    <option>Gulfstream G700 + Helicopter Transfer</option>
                    <option>Bell 525 Relentless Luxury Interior</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="nda-check"
                  checked={formData.ndaAccepted}
                  onChange={(e) => setFormData({ ...formData, ndaAccepted: e.target.checked })}
                  className="accent-[#725b38] w-4 h-4 cursor-pointer"
                  required
                />
                <label htmlFor="nda-check" className="font-sans text-xs text-[#44474a] cursor-pointer">
                  I confirm biometric security vetting and acknowledge Swiss Non-Disclosure covenants.
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-3 py-3.5 rounded-full bg-[#05080b] text-white hover:bg-[#725b38] font-telemetry text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                <span>Submit Flight Clearance Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-[#05080b] text-[#c5a880] flex items-center justify-center border border-[#725b38]">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>

            <span className="font-telemetry text-xs uppercase tracking-[0.2em] text-[#725b38] font-bold">
              Flight Clearance Authorized // CODE: #AW139-DXB-984
            </span>

            <h4 className="font-display text-3xl text-[#05080b]">
              Inspection Scheduled Successfully
            </h4>

            <p className="font-sans text-sm text-[#44474a] max-w-md">
              Thank you, <span className="font-semibold text-[#05080b]">{formData.name}</span>. Our Sovereign Aviation Officer has reserved your AW139 flight path from <span className="font-semibold text-[#05080b]">{formData.gateway}</span>. An encrypted briefing packet has been dispatched to {formData.email}.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-8 py-3 bg-[#05080b] text-white hover:bg-[#725b38] font-telemetry text-xs uppercase tracking-wider cursor-pointer"
            >
              Return to Sovereign Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. TECHNICAL DOSSIER INSPECTOR MODAL                                      */
/* -------------------------------------------------------------------------- */
interface TechnicalDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  development: Development | null;
  onBookInspection: () => void;
}

export const TechnicalDossierModal: React.FC<TechnicalDossierModalProps> = ({
  isOpen,
  onClose,
  development,
  onBookInspection,
}) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'materials' | 'structural'>('blueprint');

  if (!isOpen || !development) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#faf9f5] rounded-3xl border border-[#c5c6ca]/60 shadow-2xl my-8 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-[#f5f4f0] border-b border-[#c5c6ca]/40">
          <div className="flex flex-col">
            <span className="font-telemetry text-[10px] uppercase tracking-widest text-[#725b38] font-bold">
              Engineering Dossier // {development.certification}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#05080b] font-light">
              {development.title} Specifications
            </h3>
            <span className="font-technical text-xs text-[#44474a]">
              {development.location} • {development.city}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 px-6 pt-4 bg-[#f5f4f0] border-b border-[#c5c6ca]/40">
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`py-2 px-4 font-telemetry text-xs uppercase tracking-wider border-b-2 cursor-pointer ${
              activeTab === 'blueprint'
                ? 'border-[#05080b] text-[#05080b] font-bold'
                : 'border-transparent text-[#44474a] hover:text-[#05080b]'
            }`}
          >
            Blueprint Schematics
          </button>
          <button
            onClick={() => setActiveTab('structural')}
            className={`py-2 px-4 font-telemetry text-xs uppercase tracking-wider border-b-2 cursor-pointer ${
              activeTab === 'structural'
                ? 'border-[#05080b] text-[#05080b] font-bold'
                : 'border-transparent text-[#44474a] hover:text-[#05080b]'
            }`}
          >
            Structural & Engineering
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`py-2 px-4 font-telemetry text-xs uppercase tracking-wider border-b-2 cursor-pointer ${
              activeTab === 'materials'
                ? 'border-[#05080b] text-[#05080b] font-bold'
                : 'border-transparent text-[#44474a] hover:text-[#05080b]'
            }`}
          >
            Materiality & Acoustics
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {activeTab === 'blueprint' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="h-64 sm:h-80 bg-zinc-950 relative overflow-hidden border border-[#c5c6ca]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/blueprint-map.png')` }}
                />
                <div className="absolute inset-0 bg-[#007a87]/15 mix-blend-color pointer-events-none" />
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-white font-telemetry text-[9px] uppercase tracking-wider border border-white/20">
                  LOD-400 Vector CAD Scale 1:200
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="font-telemetry text-xs uppercase text-[#725b38] font-bold">
                  Floorplate Dimensions
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between py-2 border-b border-[#e3e2df] text-xs">
                    <span className="text-[#44474a]">Living Strata Enclosure</span>
                    <span className="font-technical font-bold text-[#05080b]">{development.livingAreaM2}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#e3e2df] text-xs">
                    <span className="text-[#44474a]">Terrace & Sky Garden</span>
                    <span className="font-technical font-bold text-[#05080b]">{development.terraceAreaM2}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#e3e2df] text-xs">
                    <span className="text-[#44474a]">Ceiling Clearance</span>
                    <span className="font-technical font-bold text-[#05080b]">{development.specs.ceilingHeight}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#e3e2df] text-xs">
                    <span className="text-[#44474a]">Dedicated Biometric Elevators</span>
                    <span className="font-technical font-bold text-[#05080b]">{development.specs.privateElevators} Private Lifts</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {development.features.map((f, i) => (
                    <span key={i} className="px-2.5 py-1 bg-[#efeeea] text-[#05080b] font-technical text-[10px] uppercase">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'structural' && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#ffffff] p-4 border border-[#c5c6ca]/40">
                  <span className="font-telemetry text-[10px] text-[#725b38] uppercase font-bold block">
                    Lead Architectural Studio
                  </span>
                  <span className="font-display text-xl text-[#05080b] mt-1 block">
                    {development.specs.architect}
                  </span>
                  <span className="font-technical text-xs text-[#44474a]">Pritzker Laureate Atelier</span>
                </div>

                <div className="bg-[#ffffff] p-4 border border-[#c5c6ca]/40">
                  <span className="font-telemetry text-[10px] text-[#725b38] uppercase font-bold block">
                    Structural & Facade Engineering
                  </span>
                  <span className="font-display text-xl text-[#05080b] mt-1 block">
                    {development.specs.structuralEngineer}
                  </span>
                  <span className="font-technical text-xs text-[#44474a]">Extreme Seismic & Wind Dampers</span>
                </div>
              </div>

              <div className="p-4 bg-[#f5f4f0] border border-[#c5c6ca]/40 text-xs text-[#44474a] leading-relaxed">
                Engineered with deep bedrock caissons reaching down 78 meters into marine limestone substrata. Features tuned mass dampers located on upper structural strata to absorb aerodynamic wind buffeting with zero perceptible vibration.
              </div>
            </div>
          )}

          {activeTab === 'materials' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#ffffff] p-4 border border-[#c5c6ca]/40 flex flex-col gap-1">
                <span className="font-telemetry text-[10px] text-[#725b38] uppercase font-bold">
                  Curtain Envelope
                </span>
                <span className="font-display text-lg text-[#05080b]">Triple Acoustic Quad-Glaze</span>
                <p className="font-sans text-xs text-[#44474a]">
                  {development.specs.acousticRating} sound attenuation preventing all external marine and aviation decibels.
                </p>
              </div>

              <div className="bg-[#ffffff] p-4 border border-[#c5c6ca]/40 flex flex-col gap-1">
                <span className="font-telemetry text-[10px] text-[#725b38] uppercase font-bold">
                  Stone Cladding
                </span>
                <span className="font-display text-lg text-[#05080b]">Honed Roman Travertine</span>
                <p className="font-sans text-xs text-[#44474a]">
                  Hand-quarried in Tivoli, Italy. Milled to 40mm thick structural veneer panels with brushed champagne titanium reveal channels.
                </p>
              </div>

              <div className="bg-[#ffffff] p-4 border border-[#c5c6ca]/40 flex flex-col gap-1">
                <span className="font-telemetry text-[10px] text-[#725b38] uppercase font-bold">
                  Environmental Core
                </span>
                <span className="font-display text-lg text-[#05080b]">Geothermal Radiant Array</span>
                <p className="font-sans text-xs text-[#44474a]">
                  Closed-loop seawater heat pumps providing 100% net-zero thermal conditioning with whisper-quiet floor delivery.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-[#f5f4f0] border-t border-[#c5c6ca]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              alert('Full Architectural CAD Package (.DWG & High-Res PDF) downloaded.');
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#efeeea] text-[#05080b] hover:bg-[#e3e2df] font-telemetry text-xs uppercase tracking-wider border border-[#c5c6ca]/50 cursor-pointer shadow-xs"
          >
            <Download className="w-4 h-4 text-[#725b38]" />
            <span>Download Engineering Pack (.DWG & PDF)</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onBookInspection();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#05080b] text-white hover:bg-[#725b38] font-telemetry text-xs uppercase tracking-widest font-bold cursor-pointer shadow-md transition-all"
          >
            <span>Book Private Inspection</span>
            <ArrowRight className="w-4 h-4 text-[#c5a880]" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. BIOMETRIC ESCROW VAULT MODAL                                           */
/* -------------------------------------------------------------------------- */
interface BiometricEscrowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BiometricEscrowModal: React.FC<BiometricEscrowModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [scanned, setScanned] = useState(false);

  if (!isOpen) return null;

  const handleScanFingerprint = () => {
    setScanned(true);
    setTimeout(() => {
      setStep(3);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-lg bg-[#ffffff] rounded-3xl p-6 sm:p-8 border border-[#c5c6ca]/60 shadow-2xl overflow-hidden">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#725b38] font-telemetry text-xs uppercase tracking-widest font-bold mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Swiss Depository Trust // Custodial Ledger</span>
        </div>

        <h3 className="font-display text-2xl text-[#05080b] font-light">
          Biometric Escrow & Title Deed Vault
        </h3>

        <p className="font-sans text-xs text-[#44474a] mt-1">
          Direct institutional depository covenants certified under Swiss Fiduciary Law and DIFC Title Registry.
        </p>

        {/* Step Indicator */}
        <div className="flex items-center justify-between my-6 py-2 border-y border-[#e3e2df] text-xs font-telemetry uppercase tracking-wider">
          <span className={step >= 1 ? 'text-[#05080b] font-bold' : 'text-[#75777b]'}>
            1. Custody Audit
          </span>
          <span>→</span>
          <span className={step >= 2 ? 'text-[#05080b] font-bold' : 'text-[#75777b]'}>
            2. Biometric Auth
          </span>
          <span>→</span>
          <span className={step === 3 ? 'text-emerald-600 font-bold' : 'text-[#75777b]'}>
            3. Safe Deposit
          </span>
        </div>

        {step === 1 && (
          <div className="flex flex-col gap-4">
            <div className="bg-[#f5f4f0] p-4 border border-[#c5c6ca]/40 text-xs flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-[#44474a]">Escrow Depository:</span>
                <span className="font-technical font-semibold text-[#05080b]">Banque Cantonale de Genève</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474a]">Ledger Block Hash:</span>
                <span className="font-technical font-semibold text-[#007a87]">#BCGE-7492-SHA256</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474a]">Institutional Covenant:</span>
                <span className="font-technical font-semibold text-emerald-600">AAA Sovereign Guaranteed</span>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3 bg-[#05080b] text-white hover:bg-[#725b38] font-telemetry text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
            >
              Proceed to Biometric Verification
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <div
              onClick={handleScanFingerprint}
              className={`w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                scanned
                  ? 'bg-emerald-500/20 text-emerald-600 border-2 border-emerald-500 scale-105'
                  : 'bg-[#efeeea] text-[#725b38] hover:bg-[#fedeb2] border border-[#c5c6ca]'
              }`}
            >
              <Fingerprint className={`w-12 h-12 ${scanned ? 'animate-pulse' : ''}`} />
            </div>

            <span className="font-telemetry text-xs uppercase text-[#44474a] font-semibold">
              {scanned ? 'Verifying Cryptographic Biometrics...' : 'Touch sensor or click icon to authenticate identity'}
            </span>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center text-center gap-3 py-4">
            <CheckCircle className="w-12 h-12 text-emerald-500" />
            <h4 className="font-display text-2xl text-[#05080b]">
              Identity & Escrow Vault Certified
            </h4>
            <p className="font-sans text-xs text-[#44474a] max-w-sm">
              Your biometric signature has been anchored into the Swiss sovereign custodian ledger. You have priority escrow pre-clearance for all 18 Monolith developments.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#05080b] text-white hover:bg-[#725b38] font-telemetry text-xs uppercase tracking-wider cursor-pointer"
            >
              Close Vault
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. 360° SPATIAL WALK & 3D VIEWER MODAL                                   */
/* -------------------------------------------------------------------------- */
interface Spatial3DViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
}

export const Spatial3DViewerModal: React.FC<Spatial3DViewerModalProps> = ({
  isOpen,
  onClose,
  title,
  image,
}) => {
  const [wireframe, setWireframe] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string>('helipad');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <div className="relative w-full max-w-5xl h-[80vh] bg-zinc-950 rounded-3xl border border-white/20 shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between p-4 bg-black/70 backdrop-blur-md border-b border-white/10 text-white">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-telemetry text-xs uppercase tracking-widest text-[#fedeb2] font-bold">
              360° Volumetric Spatial Walk // WebGL 60 FPS
            </span>
            <span className="text-zinc-400 font-technical text-xs hidden sm:inline">
              | {title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setWireframe(!wireframe)}
              className={`px-3 py-1 font-telemetry text-[10px] uppercase border cursor-pointer ${
                wireframe ? 'bg-cyan-500 text-black border-cyan-400' : 'bg-white/10 text-white border-white/20'
              }`}
            >
              {wireframe ? 'Wireframe Mode: ON' : 'Photorealistic BIM'}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/15 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Canvas with interactive pan & hotspots */}
        <div className="relative w-full h-full overflow-hidden">
          <div
            className={`w-full h-full bg-cover bg-center transition-all duration-700 ${
              wireframe ? 'filter contrast-200 hue-rotate-180 invert' : ''
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />

          {/* Simulated 3D Hotspots */}
          <div
            onClick={() => setActiveHotspot('helipad')}
            className="absolute top-[28%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-8 h-8 rounded-full bg-[#c5a880]/50 animate-ping absolute" />
              <div className="w-6 h-6 rounded-full bg-[#725b38] border-2 border-white flex items-center justify-center text-white text-[10px]">
                +
              </div>
              <div className="absolute left-8 whitespace-nowrap bg-black/80 px-2.5 py-1 text-white font-telemetry text-[10px] uppercase tracking-wider border border-white/20">
                Helipad Apex • FL 116
              </div>
            </div>
          </div>

          <div
            onClick={() => setActiveHotspot('salon')}
            className="absolute top-[60%] left-[38%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-8 h-8 rounded-full bg-cyan-400/50 animate-ping absolute" />
              <div className="w-6 h-6 rounded-full bg-cyan-700 border-2 border-white flex items-center justify-center text-white text-[10px]">
                +
              </div>
              <div className="absolute left-8 whitespace-nowrap bg-black/80 px-2.5 py-1 text-white font-telemetry text-[10px] uppercase tracking-wider border border-white/20">
                Duplex Grand Salon • 6.4m Ceiling
              </div>
            </div>
          </div>

          <div
            onClick={() => setActiveHotspot('pool')}
            className="absolute top-[72%] left-[68%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-8 h-8 rounded-full bg-white/40 animate-ping absolute" />
              <div className="w-6 h-6 rounded-full bg-zinc-800 border-2 border-white flex items-center justify-center text-white text-[10px]">
                +
              </div>
              <div className="absolute left-8 whitespace-nowrap bg-black/80 px-2.5 py-1 text-white font-telemetry text-[10px] uppercase tracking-wider border border-white/20">
                Cantilever Infinity Sky Pool
              </div>
            </div>
          </div>
        </div>

        {/* Bottom HUD controls */}
        <div className="relative z-10 flex items-center justify-between p-4 bg-black/75 backdrop-blur-md border-t border-white/10 text-white flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-telemetry text-[10px] text-[#fedeb2] uppercase">
              Current Focal Point:
            </span>
            <span className="font-technical text-white font-bold uppercase">
              {activeHotspot === 'helipad' && 'Private Apex Helipad Reception (480m)'}
              {activeHotspot === 'salon' && 'Duplex Grand Salon & Sculptural Italian Marble'}
              {activeHotspot === 'pool' && '45M Cantilever Ocean View Sky Pool'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-telemetry text-[10px] text-zinc-400 uppercase">
              Drag to orbit • Scroll to zoom
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. LOCKED CONFIGURATION MODAL                                             */
/* -------------------------------------------------------------------------- */
interface LockedConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: {
    floor: number;
    altitude: number;
    hour: number;
    archetype: string;
    sqm: number;
    sqft: number;
    price: number;
  } | null;
  currentCurrency: string;
}

export const LockedConfigModal: React.FC<LockedConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  currentCurrency,
}) => {
  if (!isOpen || !config) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-lg bg-[#ffffff] rounded-3xl p-6 sm:p-8 border border-[#c5c6ca]/60 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#725b38] font-telemetry text-xs uppercase tracking-widest font-bold mb-1">
          <Lock className="w-4 h-4" />
          <span>Spatial Certificate Locked // CERT-SV-DXB</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl text-[#05080b] font-light">
          Sky-Villa Configuration Locked
        </h3>

        <p className="font-sans text-xs text-[#44474a] mt-1 leading-relaxed">
          Your volumetric strata configuration has been temporarily locked in the custodial queue.
        </p>

        <div className="bg-[#f5f4f0] p-4 border border-[#c5c6ca]/40 my-5 text-xs flex flex-col gap-2">
          <div className="flex justify-between py-1 border-b border-[#e3e2df]">
            <span className="text-[#44474a]">Archetype:</span>
            <span className="font-technical font-bold text-[#05080b]">{config.archetype}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#e3e2df]">
            <span className="text-[#44474a]">Elevation:</span>
            <span className="font-technical font-bold text-[#05080b]">
              Floor {config.floor} ({config.altitude}m Above Sea Datum)
            </span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#e3e2df]">
            <span className="text-[#44474a]">Living Dimensions:</span>
            <span className="font-technical font-bold text-[#05080b]">
              {config.sqm} M² ({config.sqft.toLocaleString()} SQ FT)
            </span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#e3e2df]">
            <span className="text-[#44474a]">Indicative Allocation:</span>
            <span className="font-technical font-bold text-[#725b38]">
              {config.price.toFixed(1)}M {currentCurrency}
            </span>
          </div>
          <div className="flex justify-between py-1 text-[#007a87]">
            <span className="font-semibold">Cryptographic Hold:</span>
            <span className="font-technical">48 Hours Priority Escrow</span>
          </div>
        </div>

        <button
          onClick={() => {
            alert('Spatial Certificate PDF generated and sent to private client queue.');
            onClose();
          }}
          className="w-full py-3.5 bg-[#05080b] text-white hover:bg-[#725b38] font-telemetry text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#c5a880]" />
          <span>Export Sovereign Reservation Certificate</span>
        </button>
      </div>
    </div>
  );
};
