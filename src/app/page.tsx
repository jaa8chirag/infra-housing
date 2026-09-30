'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { TelemetryBar } from '@/components/TelemetryBar';
import { BreadcrumbStrip } from '@/components/BreadcrumbStrip';
import { HeroShowcase } from '@/components/HeroShowcase';
import { MasterplanGis } from '@/components/MasterplanGis';
import { PortfolioSection } from '@/components/PortfolioSection';
import { SkyVillaConfigurator } from '@/components/SkyVillaConfigurator';
import { ArchitecturalFloorplanViewer } from '@/components/ArchitecturalFloorplanViewer';
import { StewardshipSection } from '@/components/StewardshipSection';
import { Footer } from '@/components/Footer';
import {
  FlightInspectionModal,
  TechnicalDossierModal,
  BiometricEscrowModal,
  Spatial3DViewerModal,
  LockedConfigModal,
} from '@/components/Modals';
import { Tower, Development, Parcel, DEVELOPMENTS } from '@/data/mockData';

export default function Home() {
  const [currentCurrency, setCurrentCurrency] = useState<string>('USD');
  const [selectedCity, setSelectedCity] = useState<string>('dubai');

  // Modals state
  const [flightModalOpen, setFlightModalOpen] = useState<boolean>(false);
  const [escrowModalOpen, setEscrowModalOpen] = useState<boolean>(false);
  const [dossierDev, setDossierDev] = useState<Development | null>(null);
  const [spatialViewer, setSpatialViewer] = useState<{
    isOpen: boolean;
    title: string;
    image: string;
  }>({
    isOpen: false,
    title: '',
    image: '',
  });
  const [lockedConfig, setLockedConfig] = useState<{
    floor: number;
    altitude: number;
    hour: number;
    archetype: string;
    sqm: number;
    sqft: number;
    price: number;
  } | null>(null);

  const handleOpen3DViewerForTower = (tower: Tower) => {
    setSpatialViewer({
      isOpen: true,
      title: tower.name,
      image: tower.image,
    });
  };

  const handleOpen3DWalk = () => {
    setSpatialViewer({
      isOpen: true,
      title: 'Volumetric Sky-Villa 360° Walk',
      image: '/images/penthouse-interior.png',
    });
  };

  const handleOpenDossierFromParcel = (parcel: Parcel) => {
    // Find matching development or default to first
    const match = DEVELOPMENTS.find((d) => d.id.includes(parcel.key)) || DEVELOPMENTS[0];
    setDossierDev(match);
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] flex flex-col selection:bg-[#725b38] selection:text-white">
      {/* 1. Sticky Navigation Header */}
      <Header
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
      />

      <main className="w-full pt-20 flex flex-col flex-1">
        {/* 2. Real-Time Telemetry Bar */}
        <TelemetryBar />

        {/* 3. Architectural Breadcrumbs & Gateway Navigation Strip */}
        <BreadcrumbStrip
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
        />

        {/* 4. Master Hero: Split Asymmetric Architectural Showcase */}
        <HeroShowcase
          currentCurrency={currentCurrency}
          onOpenFlightModal={() => setFlightModalOpen(true)}
          onOpen3DViewer={handleOpen3DViewerForTower}
        />

        {/* 5. Interactive 3D Architectural Blueprint & Spatial Visuals Inspector (New Section) */}
        <div id="floorplans-3d">
          <ArchitecturalFloorplanViewer />
        </div>

        {/* 6. Geospatial Masterplan GIS & Real 3D Building Locator */}
        <MasterplanGis
          onOpenDossierModal={handleOpenDossierFromParcel}
        />

        {/* 6. Sovereign Architectural Portfolio (Masterwork Monoliths) */}
        <PortfolioSection
          currentCurrency={currentCurrency}
          onOpenDossier={(dev) => setDossierDev(dev)}
        />

        {/* 7. Volumetric Sky-Villa Configurator (Interactive Spatial Engine) */}
        <SkyVillaConfigurator
          currentCurrency={currentCurrency}
          onOpen360Walk={handleOpen3DWalk}
          onLockConfiguration={(cfg) => setLockedConfig(cfg)}
        />

        {/* 8. Institutional Stewardship & Sovereign Capital Mosaic */}
        <StewardshipSection
          onOpenFlightModal={() => setFlightModalOpen(true)}
          onOpenEscrowModal={() => setEscrowModalOpen(true)}
        />
      </main>

      {/* 9. L'Atelier Infra Footer */}
      <Footer />

      {/* Interactive Modals */}
      <FlightInspectionModal
        isOpen={flightModalOpen}
        onClose={() => setFlightModalOpen(false)}
      />

      <TechnicalDossierModal
        isOpen={!!dossierDev}
        onClose={() => setDossierDev(null)}
        development={dossierDev}
        onBookInspection={() => setFlightModalOpen(true)}
      />

      <BiometricEscrowModal
        isOpen={escrowModalOpen}
        onClose={() => setEscrowModalOpen(false)}
      />

      <Spatial3DViewerModal
        isOpen={spatialViewer.isOpen}
        onClose={() => setSpatialViewer({ ...spatialViewer, isOpen: false })}
        title={spatialViewer.title}
        image={spatialViewer.image}
      />

      <LockedConfigModal
        isOpen={!!lockedConfig}
        onClose={() => setLockedConfig(null)}
        config={lockedConfig}
        currentCurrency={currentCurrency}
      />
    </div>
  );
}
