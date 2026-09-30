'use client';

import React, { useState, useEffect } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  RotateCcw,
  Play,
  Pause,
  Layers,
  Box,
  Compass,
  Video,
  Eye,
  Maximize2,
  ChevronRight,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface Room {
  id: string;
  name: string;
  sqm: number;
  sqft: number;
  ceiling: string;
  flooring: string;
  image: string;
  description: string;
  topPercent: number;
  leftPercent: number;
}

interface FloorPlanProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  owner: string;
  address: string;
  totalArea: string;
  scale: string;
  date: string;
  image3D: string;
  image2D: string;
  videoId: string;
  rooms: Room[];
}

const FLOOR_PLANS: FloorPlanProject[] = [
  {
    id: 'villa-ground',
    title: 'Ground Floor Plan + Spatial Visuals',
    subtitle: 'Contemporary Courtyard Villa & Floating Staircase Strata',
    category: 'Private Residence',
    owner: 'Mr. & Mrs. Smith / Sovereign Client',
    address: '132 My Street, Kingston, New York 12401',
    totalArea: '540 M² (5,812 SQ FT)',
    scale: 'Arch B 1/4" : 1\'',
    date: '05/14/2025',
    image3D: '/images/floorplan-3d-villa.jpg',
    image2D: '/images/floorplan-2d-villa.jpg',
    videoId: 'ib7hltMjpZI',
    rooms: [
      {
        id: 'living',
        name: 'Grand Double-Height Living Salon',
        sqm: 115,
        sqft: 1238,
        ceiling: '5.8M Double-Height Span',
        flooring: 'Honed French Limestone & Floating Oak',
        image: '/images/room-living.jpg',
        description: 'Features an open cantilevered oak floating staircase, minimalist low-profile Italian sectional, and panoramic floor-to-ceiling glass looking onto the private courtyard.',
        topPercent: 54,
        leftPercent: 44,
      },
      {
        id: 'kitchen',
        name: 'Gourmet Kitchen & Marble Island Bar',
        sqm: 68,
        sqft: 732,
        ceiling: '3.4M Recessed Acoustic Tray',
        flooring: 'Polished Travertine & Smoked Oak',
        image: '/images/room-kitchen.jpg',
        description: 'Monolithic Calacatta marble waterfall island with custom brass barstools, concealed Gaggenau appliances, and soft perimeter cove lighting.',
        topPercent: 36,
        leftPercent: 62,
      },
      {
        id: 'bedroom',
        name: 'Master Sanctuary Bedroom Suite',
        sqm: 78,
        sqft: 840,
        ceiling: '3.6M Flush Plaster',
        flooring: 'Wide-Plank White Oak & Wool Carpet',
        image: '/images/room-bedroom.jpg',
        description: 'Natural vertical fluted oak slat feature wall, sage green architectural acoustics, custom floating nightstands, and private walk-in wardrobe.',
        topPercent: 68,
        leftPercent: 78,
      },
      {
        id: 'terrace',
        name: 'Outdoor Landscaped Courtyard & Terrace',
        sqm: 145,
        sqft: 1560,
        ceiling: 'Open Sky Pergola (3.8M Clearance)',
        flooring: 'Thermal Basalt Pavers & Teak Decking',
        image: '/images/floorplan-3d-villa.jpg',
        description: 'Deep terrace with integrated summer kitchen, sculpted Zen plantings, and acoustic barrier glass walls.',
        topPercent: 26,
        leftPercent: 28,
      },
      {
        id: 'garage',
        name: 'Private Climate-Controlled Automotive Vault',
        sqm: 58,
        sqft: 624,
        ceiling: '3.2M Epoxy Coated',
        flooring: 'Polished Industrial Terrazzo',
        image: '/images/floorplan-3d-villa.jpg',
        description: 'Direct interior vestibule access, EV rapid charging station, and integrated storage lockers.',
        topPercent: 74,
        leftPercent: 20,
      },
    ],
  },
  {
    id: 'penthouse-triplex',
    title: 'Crown Penthouse Triplex Level 82-84',
    subtitle: 'Super-Tall Aerodynamic Sky Haven with Private Helipad',
    category: 'Penthouse Strata',
    owner: 'Sovereign Family Office Custody',
    address: 'Central Park South Tower 01, New York',
    totalArea: '1,120 M² (12,055 SQ FT)',
    scale: 'Metric 1:100 BIM',
    date: '06/20/2025',
    image3D: '/images/floorplan-3d-penthouse.jpg',
    image2D: '/images/floorplan-2d-penthouse.jpg',
    videoId: '_agnuY-hyQY',
    rooms: [
      {
        id: 'helipad',
        name: 'Apex Aviation Deck & Helipad Level 84',
        sqm: 240,
        sqft: 2583,
        ceiling: 'Open Sky Strata (480M Elevation)',
        flooring: 'Reinforced Flight Grade Composite',
        image: '/images/floorplan-3d-penthouse.jpg',
        description: 'Civil aviation certified private helipad accommodating twin-engine AW139 transfers, with VIP sky lounge and cocktail terrace.',
        topPercent: 16,
        leftPercent: 66,
      },
      {
        id: 'pool',
        name: 'Cantilever Glass-Bottom Sky Pool',
        sqm: 85,
        sqft: 915,
        ceiling: 'Horizon Infinity Sky Span',
        flooring: 'Laminated Acoustic Structural Acrylic',
        image: '/images/floorplan-3d-penthouse.jpg',
        description: 'Cantilevers 14 meters out over the city skyline at floor 83, providing thrilling vertical vistas into the metropolis below.',
        topPercent: 52,
        leftPercent: 22,
      },
      {
        id: 'stair',
        name: 'Sculptural Helical Spiral Atrium',
        sqm: 110,
        sqft: 1184,
        ceiling: '11.8M Triple-Height Atrium',
        flooring: 'Cast Champagne Bronze & Honed Marble',
        image: '/images/room-living.jpg',
        description: 'Monumental architectural centerpiece connecting all three penthouse strata with continuous frameless curved glass balustrade.',
        topPercent: 58,
        leftPercent: 48,
      },
      {
        id: 'penthouse-suite',
        name: 'Upper Sky Bedchamber Suite',
        sqm: 95,
        sqft: 1022,
        ceiling: '4.2M Acoustic Timber Ceiling',
        flooring: 'Custom Silk-Wool Carpet & Teak',
        image: '/images/room-bedroom.jpg',
        description: '270-degree floor-to-ceiling glass facing sunrise horizons with private biometric vault and steam spa ensuite.',
        topPercent: 42,
        leftPercent: 72,
      },
    ],
  },
  {
    id: 'marina-sanctuary',
    title: 'Waterfront Marina Residence & Subterranean Crypt',
    subtitle: 'Deep-Water Superyacht Mooring & Cliffside Waterfall Pool',
    category: 'Coastal Estate',
    owner: 'Maritime Holdings Trust',
    address: 'Dubai Marina Gateway Slip 04, UAE',
    totalArea: '1,450 M² (15,607 SQ FT)',
    scale: 'Metric 1:75 Detail',
    date: '08/10/2025',
    image3D: '/images/floorplan-3d-marina.jpg',
    image2D: '/images/floorplan-2d-marina.jpg',
    videoId: 'T1ouqhJf6cM',
    rooms: [
      {
        id: 'yacht-dock',
        name: 'Deep-Water 65M Superyacht Berth',
        sqm: 320,
        sqft: 3444,
        ceiling: 'Direct Coastal Marine Grade',
        flooring: 'Burmese Marine Teak Pontoon',
        image: '/images/floorplan-3d-marina.jpg',
        description: 'Engineered for direct mega-yacht moorings with high-capacity fueling conduit and private shore-power terminal.',
        topPercent: 42,
        leftPercent: 18,
      },
      {
        id: 'waterfall-pool',
        name: 'Cascading Infinity Edge Waterfall Pool',
        sqm: 130,
        sqft: 1400,
        ceiling: 'Coastal Horizon Cantilever',
        flooring: 'Bisazza Glass Mosaic & French Plinth',
        image: '/images/floorplan-3d-marina.jpg',
        description: 'Double-tier heated saltwater pool with subterranean acoustic waterfall wall cooling the wine tasting pavilion beneath.',
        topPercent: 54,
        leftPercent: 32,
      },
      {
        id: 'wine-crypt',
        name: 'Subterranean Sommelier Wine Crypt & Vault',
        sqm: 90,
        sqft: 968,
        ceiling: '3.6M Bedrock Vaulted Stone',
        flooring: 'Antique French Terracotta & Oak',
        image: '/images/floorplan-3d-marina.jpg',
        description: 'Temperature and humidity controlled room housing up to 4,500 grand cru vintages with central sommelier tasting table.',
        topPercent: 74,
        leftPercent: 46,
      },
      {
        id: 'cinema',
        name: 'Private Dolby Atmos Screening Cinema',
        sqm: 85,
        sqft: 915,
        ceiling: 'Acoustic Micro-Perforated Velvet',
        flooring: 'Tiered Deep Wool Carpet',
        image: '/images/floorplan-3d-marina.jpg',
        description: 'Twelve custom reclining cashmere armchairs, 4K laser projection, and THX Dominus certified surround audio array.',
        topPercent: 74,
        leftPercent: 68,
      },
    ],
  },
];

export const ArchitecturalFloorplanViewer: React.FC = () => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'3d' | '2d' | 'video'>('3d');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  const [activeRoomId, setActiveRoomId] = useState<string>('living');

  const currentPlan = FLOOR_PLANS[selectedPlanIndex];
  const activeRoom = currentPlan.rooms.find((r) => r.id === activeRoomId) || currentPlan.rooms[0];

  // Auto 360 Turntable Orbit
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoRotate && viewMode !== 'video') {
      interval = setInterval(() => {
        setRotationAngle((prev) => (prev + 1) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [autoRotate, viewMode]);

  // Reset room on plan change
  const handleSelectPlan = (idx: number) => {
    setSelectedPlanIndex(idx);
    setActiveRoomId(FLOOR_PLANS[idx].rooms[0].id);
    setRotationAngle(0);
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.2, 2.2));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.2, 0.7));
  const handleResetView = () => {
    setZoomLevel(1);
    setRotationAngle(0);
    setAutoRotate(false);
  };

  return (
    <section id="floorplans-3d" className="w-full bg-[#f7f6f2] px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 border-t border-[#c5c6ca]/50">
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[#725b38] font-telemetry text-xs uppercase tracking-widest font-bold">
              <Layers className="w-4 h-4 text-[#725b38]" />
              <span>Architectural Blueprint GIS & 3D Spatial Inspector</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#05080b] tracking-tight font-light">
              Interactive 3D Floorplan & Spatial Visuals
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#44474a] max-w-2xl leading-relaxed">
              Explore authentic 2D AutoCAD blueprint drafts, photorealistic 3D cutaway isometric models, and full 3D cinematic walkthrough videos.
            </p>
          </div>

          {/* Project Switcher Tabs (3 models) */}
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-[#c5c6ca]/60 shadow-sm overflow-x-auto w-full md:w-auto">
            {FLOOR_PLANS.map((plan, idx) => {
              const isSelected = selectedPlanIndex === idx;
              return (
                <button
                  key={plan.id}
                  onClick={() => handleSelectPlan(idx)}
                  className={`px-3.5 py-1.5 rounded-full font-telemetry text-[10px] sm:text-[11px] uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#05080b] text-[#ffffff] shadow-md font-bold'
                      : 'text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea]'
                  }`}
                >
                  <span className="text-[#c5a880] mr-1.5 font-mono">0{idx + 1}.</span>
                  {plan.title.split('+')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Architectural Layout Canvas (Left 7 cols, Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Interactive 2D / 3D / Video Viewer Canvas (7 cols) */}
          <div className="lg:col-span-7 luxury-card rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl border border-[#c5c6ca]/60">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-[#fbfbfa]/90 border-b border-[#c5c6ca]/40 flex-wrap gap-2">
              
              {/* 3D / 2D / Video Mode Toggle */}
              <div className="flex items-center bg-[#eae8e3] p-1 rounded-full flex-wrap gap-1">
                <button
                  onClick={() => setViewMode('3d')}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full font-telemetry text-[9px] sm:text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === '3d'
                      ? 'bg-[#05080b] text-white font-bold shadow-xs'
                      : 'text-[#44474a] hover:text-[#05080b]'
                  }`}
                >
                  <Box className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>3D Isometric</span>
                </button>

                <button
                  onClick={() => setViewMode('2d')}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full font-telemetry text-[9px] sm:text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === '2d'
                      ? 'bg-[#05080b] text-white font-bold shadow-xs'
                      : 'text-[#44474a] hover:text-[#05080b]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-[#007a87]" />
                  <span>2D CAD Blueprint</span>
                </button>

                <button
                  onClick={() => setViewMode('video')}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full font-telemetry text-[9px] sm:text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'video'
                      ? 'bg-[#725b38] text-white font-bold shadow-xs'
                      : 'text-[#44474a] hover:text-[#05080b]'
                  }`}
                >
                  <Video className="w-3.5 h-3.5 text-emerald-400" />
                  <span>3D Video Walk</span>
                </button>
              </div>

              {/* Zoom & 360 Turntable Controls (Visible in 3D & 2D modes) */}
              {viewMode !== 'video' && (
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    onClick={handleZoomIn}
                    className="p-2 bg-[#ffffff] hover:bg-[#efeeea] rounded-full border border-[#c5c6ca]/50 text-[#05080b] cursor-pointer shadow-xs transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleZoomOut}
                    className="p-2 bg-[#ffffff] hover:bg-[#efeeea] rounded-full border border-[#c5c6ca]/50 text-[#05080b] cursor-pointer shadow-xs transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setRotationAngle((r) => (r - 45 + 360) % 360)}
                    className="p-2 bg-[#ffffff] hover:bg-[#efeeea] rounded-full border border-[#c5c6ca]/50 text-[#05080b] cursor-pointer shadow-xs transition-colors"
                    title="Rotate Left 45°"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setRotationAngle((r) => (r + 45) % 360)}
                    className="p-2 bg-[#ffffff] hover:bg-[#efeeea] rounded-full border border-[#c5c6ca]/50 text-[#05080b] cursor-pointer shadow-xs transition-colors"
                    title="Rotate Right 45°"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-telemetry uppercase tracking-wider border cursor-pointer flex items-center gap-1.5 shadow-xs transition-colors ${
                      autoRotate
                        ? 'bg-[#725b38] text-white border-[#725b38]'
                        : 'bg-[#ffffff] text-[#05080b] border-[#c5c6ca]/50 hover:bg-[#efeeea]'
                    }`}
                  >
                    {autoRotate ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span className="hidden sm:inline">360° Orbit</span>
                  </button>

                  <button
                    onClick={handleResetView}
                    className="px-2.5 py-1.5 rounded-full text-[9px] sm:text-[10px] font-telemetry uppercase text-[#44474a] hover:text-[#05080b] hover:bg-[#efeeea] cursor-pointer transition-colors"
                  >
                    Reset
                  </button>
                </div>
              )}
            </div>

            {/* Viewport Screen */}
            <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] bg-[#faf9f5] overflow-hidden flex items-center justify-center p-2 sm:p-4">
              
              {/* Technical Drawing Blueprint Grid */}
              <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

              {/* Status Badges */}
              {viewMode !== 'video' ? (
                <>
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-[#ffffff]/90 backdrop-blur-md px-2.5 py-1 border border-[#c5c6ca]/40 text-[#05080b] font-telemetry text-[9px] sm:text-[10px] uppercase shadow-xs">
                    <Compass className="w-3 h-3 text-[#725b38]" />
                    <span>N 000° • Yaw {rotationAngle}°</span>
                  </div>

                  <div className="absolute top-3 right-3 z-20 bg-[#ffffff]/90 backdrop-blur-md px-2.5 py-1 border border-[#c5c6ca]/40 text-[#44474a] font-telemetry text-[9px] sm:text-[10px] uppercase shadow-xs">
                    Scale: {Math.round(zoomLevel * 100)}%
                  </div>
                </>
              ) : (
                <div className="absolute top-3 left-3 z-30 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 border border-white/20 text-white font-telemetry text-[10px] uppercase shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>3D Spatial Flythrough [4K UHD]</span>
                </div>
              )}

              {/* Main Canvas Area */}
              {viewMode === 'video' ? (
                /* 3D Cinematic Walkthrough Video Player */
                <div className="relative w-full h-full bg-black overflow-hidden shadow-2xl z-10 border border-white/10">
                  <iframe
                    className="w-full h-full object-cover"
                    src={`https://www.youtube.com/embed/${currentPlan.videoId}?autoplay=1&mute=1&loop=1&playlist=${currentPlan.videoId}&controls=1&modestbranding=1&rel=0`}
                    title="3D Architectural Walkthrough Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  {/* Cinematic Camera HUD Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 pointer-events-none z-20 hidden sm:flex items-center justify-between text-white font-telemetry text-[9px] uppercase bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
                    <span>Camera: Focal 24mm Cinema Lens</span>
                    <span>Lighting: Daylight Ray-Tracing Global Illumination</span>
                    <span className="text-emerald-400">UNREAL ENGINE 5 LOD-400</span>
                  </div>
                </div>
              ) : (
                /* 3D Isometric or 2D CAD Blueprint Mode */
                <div
                  className="relative transition-transform duration-300 ease-out origin-center max-w-full max-h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                  style={{
                    transform: `scale(${zoomLevel}) rotate(${rotationAngle}deg)`,
                  }}
                >
                  {viewMode === '3d' ? (
                    /* 3D Isometric Cutaway Model */
                    <div className="relative w-[320px] sm:w-[480px] md:w-[560px] h-[240px] sm:h-[340px] md:h-[380px] shadow-2xl overflow-hidden border border-[#c5c6ca]">
                      <div
                        className="w-full h-full bg-cover bg-center transition-all duration-700"
                        style={{ backgroundImage: `url('${currentPlan.image3D}')` }}
                      />
                      
                      {/* Interactive Room Hotspots */}
                      {currentPlan.rooms.map((room) => {
                        const isRoomActive = room.id === activeRoomId;
                        return (
                          <div
                            key={room.id}
                            onClick={() => setActiveRoomId(room.id)}
                            style={{
                              top: `${room.topPercent}%`,
                              left: `${room.leftPercent}%`,
                            }}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group"
                          >
                            <div className="relative flex items-center justify-center">
                              <span
                                className={`absolute rounded-full transition-all ${
                                  isRoomActive
                                    ? 'w-9 h-9 sm:w-10 sm:h-10 bg-[#c5a880]/60 animate-ping'
                                    : 'w-5 h-5 sm:w-6 sm:h-6 bg-white/30 group-hover:animate-ping'
                                }`}
                              />
                              <div
                                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-telemetry text-[9px] font-bold shadow-xl border-2 transition-transform ${
                                  isRoomActive
                                    ? 'bg-[#725b38] text-white scale-125 border-white ring-2 ring-[#c5a880]'
                                    : 'bg-[#05080b] text-white border-[#c5a880] group-hover:scale-110'
                                }`}
                              >
                                +
                              </div>

                              <div
                                className={`absolute left-7 sm:left-8 whitespace-nowrap bg-black/85 backdrop-blur-md px-3 py-1 rounded-full text-white text-[9px] sm:text-[10px] font-telemetry uppercase tracking-wider border border-white/20 shadow-lg transition-all ${
                                  isRoomActive ? 'opacity-100 scale-105' : 'opacity-0 group-hover:opacity-100'
                                }`}
                              >
                                {room.name}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* 2D CAD Blueprint Draft Mode */
                    <div className="relative w-[320px] sm:w-[480px] md:w-[560px] h-[240px] sm:h-[340px] md:h-[380px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-[#c5c6ca]/60 p-2">
                      <div
                        className="w-full h-full bg-contain bg-center bg-no-repeat rounded-xl"
                        style={{ backgroundImage: `url('${currentPlan.image2D}')` }}
                      />
                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#c5c6ca] text-[8px] sm:text-[9px] font-telemetry uppercase text-[#44474a] shadow-xs">
                        AutoCAD Vector Sheet // 1:50 Scale
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Room Selector Buttons Strip */}
            <div className="p-3 sm:p-3.5 bg-[#fbfbfa]/90 border-t border-[#c5c6ca]/40 flex items-center gap-2 overflow-x-auto">
              <span className="font-telemetry text-[9px] sm:text-[10px] uppercase text-[#725b38] font-bold whitespace-nowrap pl-1">
                Focal Strata:
              </span>
              {currentPlan.rooms.map((room) => {
                const isActive = room.id === activeRoomId;
                return (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoomId(room.id)}
                    className={`px-3.5 py-1.5 rounded-full font-telemetry text-[9px] sm:text-[10px] uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#05080b] text-white font-bold shadow-xs'
                        : 'bg-[#ffffff] text-[#44474a] hover:text-[#05080b] border border-[#c5c6ca]/40 hover:bg-[#efeeea]'
                    }`}
                  >
                    {room.name.split(' ')[0]} {room.name.split(' ')[1]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Visuals & Room Elevation Dossier (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* 3 Visuals Stack */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <div className="flex items-center justify-between">
                <span className="font-telemetry text-xs uppercase tracking-widest text-[#725b38] font-bold">
                  Photorealistic Spatial Renderings
                </span>
                <span className="font-telemetry text-[9px] sm:text-[10px] uppercase text-[#44474a]">
                  Daylight Solstice Lux
                </span>
              </div>

              {/* Visual 1: Living Salon with Floating Stair */}
              <div
                onClick={() => setActiveRoomId('living')}
                className={`relative h-36 sm:h-40 md:h-44 w-full rounded-2xl overflow-hidden border shadow-md transition-all duration-300 cursor-pointer group ${
                  activeRoomId === 'living' ? 'border-[#725b38] ring-2 ring-[#c5a880]' : 'border-[#c5c6ca]/50 hover:border-[#05080b]'
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('/images/room-living.jpg')` }}
                />
                <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-white font-telemetry text-[8px] sm:text-[9px] uppercase tracking-wider border border-white/20 shadow-md">
                  01. Grand Double-Height Salon & Floating Stair
                </div>
              </div>

              {/* Visual 2: Gourmet Kitchen with Island */}
              <div
                onClick={() => setActiveRoomId('kitchen')}
                className={`relative h-36 sm:h-40 md:h-44 w-full rounded-2xl overflow-hidden border shadow-md transition-all duration-300 cursor-pointer group ${
                  activeRoomId === 'kitchen' ? 'border-[#725b38] ring-2 ring-[#c5a880]' : 'border-[#c5c6ca]/50 hover:border-[#05080b]'
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('/images/room-kitchen.jpg')` }}
                />
                <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-white font-telemetry text-[8px] sm:text-[9px] uppercase tracking-wider border border-white/20 shadow-md">
                  02. Gourmet Waterfall Island & Bar Seating
                </div>
              </div>

              {/* Visual 3: Master Bedroom Suite */}
              <div
                onClick={() => setActiveRoomId('bedroom')}
                className={`relative h-36 sm:h-40 md:h-44 w-full rounded-2xl overflow-hidden border shadow-md transition-all duration-300 cursor-pointer group ${
                  activeRoomId === 'bedroom' ? 'border-[#725b38] ring-2 ring-[#c5a880]' : 'border-[#c5c6ca]/50 hover:border-[#05080b]'
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('/images/room-bedroom.jpg')` }}
                />
                <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-white font-telemetry text-[8px] sm:text-[9px] uppercase tracking-wider border border-white/20 shadow-md">
                  03. Master Suite with Fluted Oak Headboard
                </div>
              </div>
            </div>

            {/* Active Room Telemetry Card */}
            <div className="luxury-subcard rounded-2xl p-5 border border-[#c5c6ca]/60 shadow-lg flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-telemetry text-[9px] sm:text-[10px] uppercase tracking-wider text-[#725b38] font-bold">
                  Active Strata Detail
                </span>
                <span className="font-telemetry text-[9px] sm:text-[10px] text-[#007a87] font-semibold uppercase bg-[#007a87]/10 px-2.5 py-0.5 rounded-full">
                  {activeRoom.sqm} M² // {activeRoom.sqft} SQ FT
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl text-[#05080b] font-medium">
                {activeRoom.name}
              </h4>

              <p className="font-sans text-xs text-[#44474a] leading-relaxed">
                {activeRoom.description}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#e3e2df] text-[10px] sm:text-[11px]">
                <div className="bg-[#f5f4f0]/60 p-2.5 rounded-xl">
                  <span className="text-[#75777b] uppercase font-telemetry text-[8px] sm:text-[9px] block">Clearance</span>
                  <span className="font-technical text-[#05080b] font-semibold">{activeRoom.ceiling}</span>
                </div>
                <div className="bg-[#f5f4f0]/60 p-2.5 rounded-xl">
                  <span className="text-[#75777b] uppercase font-telemetry text-[8px] sm:text-[9px] block">Flooring Finish</span>
                  <span className="font-technical text-[#05080b] font-semibold">{activeRoom.flooring}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural Title Block Document Banner (Mobile Responsive) */}
        <div className="w-full bg-[#ffffff] rounded-2xl overflow-hidden border border-[#c5c6ca]/60 shadow-lg flex flex-col md:flex-row items-stretch text-xs">
          
          {/* Sheet Number */}
          <div className="w-full md:w-20 bg-[#f5f4f0] p-4 flex items-center justify-center font-display text-xl sm:text-2xl font-light text-[#05080b] border-b md:border-b-0 md:border-r border-[#c5c6ca]/60">
            - {selectedPlanIndex + 1} -
          </div>

          {/* Project Details */}
          <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 border-b md:border-b-0 md:border-r border-[#c5c6ca]/60">
            <div>
              <span className="text-[#75777b] font-telemetry text-[9px] sm:text-[10px] uppercase block font-semibold">Project Owner:</span>
              <span className="font-technical text-[#05080b] font-bold text-xs">{currentPlan.owner}</span>
            </div>
            <div>
              <span className="text-[#75777b] font-telemetry text-[9px] sm:text-[10px] uppercase block font-semibold">Project Address:</span>
              <span className="font-technical text-[#05080b] font-bold text-xs">{currentPlan.address}</span>
            </div>
          </div>

          {/* Title Banner */}
          <div className="flex-1 bg-[#c5a880]/15 p-4 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#c5c6ca]/60">
            <span className="font-telemetry text-[9px] sm:text-[10px] uppercase tracking-widest text-[#725b38] font-bold">
              Preliminary Architectural Draft
            </span>
            <span className="font-display text-sm sm:text-base text-[#05080b] font-medium">
              {currentPlan.title}
            </span>
          </div>

          {/* Format & Builder Name */}
          <div className="w-full md:w-72 p-4 grid grid-cols-2 gap-2 bg-[#f5f4f0]">
            <div>
              <span className="text-[#75777b] font-telemetry text-[8px] sm:text-[9px] uppercase block">Format: {currentPlan.scale}</span>
              <span className="text-[#75777b] font-telemetry text-[8px] sm:text-[9px] uppercase block">Date: {currentPlan.date}</span>
            </div>
            <div className="border-l border-[#c5c6ca]/60 pl-3">
              <span className="text-[#75777b] font-telemetry text-[8px] sm:text-[9px] uppercase block">Architect Studio:</span>
              <span className="font-technical text-[9px] sm:text-[10px] text-[#05080b] font-bold">L'Atelier Infra Corp</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
