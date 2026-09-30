export interface Tower {
  id: string;
  name: string;
  code: string;
  tagline: string;
  desc: string;
  city: string;
  height: string;
  strata: string;
  glass: string;
  glassDesc: string;
  villas: string;
  villasDesc: string;
  basePriceUSD: number;
  sun: string;
  image: string;
  helipad: string;
  coordinates: string;
}

export interface Parcel {
  id: string;
  key: string;
  title: string;
  code: string;
  desc: string;
  topPercent: number;
  leftPercent: number;
  priceRange: string;
  elevation: string;
  bedrock: string;
  moorage: string;
  category: 'waterfront' | 'penthouses' | 'transit';
  icon: string;
  highlightText: string;
}

export interface Development {
  id: string;
  title: string;
  location: string;
  city: string;
  desc: string;
  certification: string;
  handover: string;
  livingAreaM2: string;
  terraceAreaM2: string;
  priceUSD: number;
  image: string;
  features: string[];
  specs: {
    architect: string;
    structuralEngineer: string;
    acousticRating: string;
    privateElevators: number;
    ceilingHeight: string;
  };
}

export const CITIES = [
  { id: 'dubai', name: 'Dubai', coords: '25.1972° N', region: 'Arabian Gulf', active: true },
  { id: 'newyork', name: 'New York', coords: '40.7128° N', region: 'Central Park South', active: false },
  { id: 'london', name: 'London', coords: '51.5074° N', region: 'Hyde Park Gateway', active: false },
  { id: 'tokyo', name: 'Tokyo', coords: '35.6762° N', region: 'Minato Waterfront', active: false },
];

export const CURRENCIES: Record<string, { symbol: string; rate: number; name: string }> = {
  USD: { symbol: '$', rate: 1.0, name: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, name: 'EUR (€)' },
  AED: { symbol: 'AED ', rate: 3.67, name: 'AED (د.إ)' },
  CHF: { symbol: 'CHF ', rate: 0.88, name: 'CHF (₣)' },
  GBP: { symbol: '£', rate: 0.78, name: 'GBP (£)' },
};

export const TOWERS: Record<string, Tower> = {
  spire: {
    id: 'spire',
    name: 'The Grand Spire',
    code: 'TOWER SPECIFICATION CODE // GS-01',
    tagline: '"A sculpted vertical sanctuary suspended above the Arabian Gulf."',
    desc: 'A pure aerodynamic prism piercing the skyline at 580 meters. Featuring cantilevered double-height sky courts, triple-laminated acoustic daylight curtain walls, and direct high-altitude private helipad connectivity.',
    city: 'Dubai',
    height: '580m',
    strata: '128 Habitable Strata',
    glass: 'SHGC 0.22',
    glassDesc: 'Acoustic Class 54 STC',
    villas: '04 Units',
    villasDesc: 'Floors 88 through 116',
    basePriceUSD: 28400000,
    sun: 'Sun Vector: 48° Elevation • Azimuth 214° SW',
    image: '/images/hero-spire.png',
    helipad: 'FL 116 / 480M • AW139 Ready',
    coordinates: '25°11\'49.9"N 55°16\'27.8"E',
  },
  lumina: {
    id: 'lumina',
    name: 'Lumina Oceanfront',
    code: 'TOWER SPECIFICATION CODE // LO-04',
    tagline: '"Sculptural horizon terraces where liquid light meets cast travertine."',
    desc: 'An organic undulating waterfront masterpiece bathed in oceanic reflection. Low-profile super-structure with 180-meter private marina frontage and private submarine docking slips.',
    city: 'Dubai',
    height: '240m',
    strata: '54 Exclusive Strata',
    glass: 'SHGC 0.18',
    glassDesc: 'Marine Salt-Mist Hydrophobic',
    villas: '02 Units',
    villasDesc: 'Duplex Penthouse 48 & 52',
    basePriceUSD: 36000000,
    sun: 'Sun Vector: 32° Elevation • Azimuth 190° S',
    image: '/images/towers-explorer.png',
    helipad: 'Maritime Heliport Mooring',
    coordinates: '25°07\'12.4"N 55°08\'33.1"E',
  },
  vertex: {
    id: 'vertex',
    name: 'Vertex Heights',
    code: 'TOWER SPECIFICATION CODE // VH-09',
    tagline: '"Monolithic limestone geometry suspended over Manhattan\'s crown."',
    desc: 'Manhattan\'s crown architectural landmark soaring over Central Park. Built with honed Indiana limestone cladding, internal seismic damper rings, and dedicated high-speed private biometric lifts.',
    city: 'New York',
    height: '432m',
    strata: '92 Habitable Strata',
    glass: 'SHGC 0.25',
    glassDesc: 'Low-E Quadruple Glaze',
    villas: '03 Units',
    villasDesc: 'Floors 72 through 90',
    basePriceUSD: 48500000,
    sun: 'Sun Vector: 55° Elevation • Azimuth 170° SE',
    image: '/images/penthouse-interior.png',
    helipad: 'Direct Sky-Bridge Terminal',
    coordinates: '40°45\'53.2"N 73°58\'25.6"W',
  },
};

export const GIS_PARCELS: Parcel[] = [
  {
    id: 'gis-01',
    key: 'spire',
    title: 'The Grand Spire Marina Sector',
    code: 'ID: #GIS-DXB-04',
    desc: 'Direct deep-water berth access with private superyacht slipway, integrated subterranean arterial highway ramp, and 3-minute transit to international heliport.',
    topPercent: 42,
    leftPercent: 48,
    priceRange: '$28.4M — $85.0M',
    elevation: '+14.2m Above Sea Datum',
    bedrock: '78m Bedrock Piles',
    moorage: 'Up to 65m Vessel',
    category: 'waterfront',
    icon: 'building',
    highlightText: 'LOT 104-A // The Grand Spire • Apex Helipad Ready',
  },
  {
    id: 'gis-02',
    key: 'lumina',
    title: 'Lumina Foreshore Peninsula Enclave',
    code: 'ID: #GIS-DXB-08',
    desc: 'Exclusive barrier-island parcel with private 400-meter sandy beach buffer, private sea-plane mooring, and zero through-traffic security envelope.',
    topPercent: 58,
    leftPercent: 72,
    priceRange: '$19.2M — $62.0M',
    elevation: '+4.5m Waterfront Grade',
    bedrock: '52m Marine Geothermal Columns',
    moorage: 'Direct 80m Mooring Berth',
    category: 'waterfront',
    icon: 'waves',
    highlightText: 'Lumina Peninsula • 65M Moorage Slip',
  },
  {
    id: 'gis-03',
    key: 'vertex',
    title: 'Sky Spire District • Sovereign Parcel 09',
    code: 'ID: #GIS-DXB-09',
    desc: 'Unobstructed view corridor over 843 acres of park greenery. Direct sub-level access to private vehicle elevator and biometric transit vault.',
    topPercent: 30,
    leftPercent: 34,
    priceRange: '$42.0M — $110.0M',
    elevation: '+26.8m Elevated Ridge',
    bedrock: '95m Granite Socketed Caissons',
    moorage: 'Heli-transfer link',
    category: 'penthouses',
    icon: 'mountain',
    highlightText: 'Parcel 09 • Sovereign Reserve',
  },
  {
    id: 'gis-04',
    key: 'marina-gate',
    title: 'Sanctuary Marina Gate Berth 12',
    code: 'ID: #GIS-DXB-12',
    desc: 'Bespoke deep-water anchorage engineered for mega-yachts up to 110 meters, with on-dock private customs clearance and sovereign fueling conduit.',
    topPercent: 70,
    leftPercent: 52,
    priceRange: '$15.5M — $34.0M',
    elevation: '+2.1m Quay Level',
    bedrock: '44m Sub-sea Anchor Monoliths',
    moorage: 'Up to 110m Mega-Yacht',
    category: 'waterfront',
    icon: 'anchor',
    highlightText: 'Berth 12 • Deep Sea Superyacht Hub',
  },
  {
    id: 'gis-05',
    key: 'crown-sky',
    title: 'Apex Flight Corridor Quad 01',
    code: 'ID: #GIS-DXB-16',
    desc: 'High-altitude civil aviation certified airspace reserved for eVTOL commuter shuttles and twin-turbine VIP helicopters with radar telemetry handoff.',
    topPercent: 22,
    leftPercent: 62,
    priceRange: '$52.0M — $135.0M',
    elevation: '+480m Aerial Strata',
    bedrock: 'Structural Core Tethering',
    moorage: 'AW139 / H160 Dedicated Helipad',
    category: 'transit',
    icon: 'plane',
    highlightText: 'Flight Quad 01 • Sovereign Airspace',
  },
];

export const DEVELOPMENTS: Development[] = [
  {
    id: 'elysian',
    title: 'The Elysian Monolith',
    location: 'Dubai Marina Gateway',
    city: 'Dubai',
    desc: 'Sculpted from honed Roman travertine and warm champagne titanium mullions. Features a 45-meter cantilever infinity sky pool on floor 72.',
    certification: 'LEED Zero Carbon',
    handover: 'Q4 2025 Handover',
    livingAreaM2: '640 - 1,220 M²',
    terraceAreaM2: '180 M² 270°',
    priceUSD: 24500000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClUegZ-a7Hj45sfsPuwStqqfDIlEPZYvQx2QBXa7eTuq4QBL-8hRVP103kqixIw9wZOC3B5J5Zq9bKVRy26CxZQ2uPsNMlFmJzoOBeWBfm-H1V8qE6CxnurgaiRvxWTvDKgP-p7qe7gbszxIQtJlGhrZ9zYk19N_-2-iH2AsOHcF9hDMNgnFmFPurRjiRE0DaqpUX8O4XoknXPNP2Q4ctszZCrK_highQtFTnyDMAydOfBI-tuHcWmzQ',
    features: ['45m Cantilever Infinity Pool', 'Subterranean Car Vault', 'Private Wine Crypt', 'Direct Helipad Link'],
    specs: {
      architect: 'Foster & Partners Laureate Studio',
      structuralEngineer: 'Arup Global Facade Engineering',
      acousticRating: 'STC 58 Silent Core',
      privateElevators: 3,
      ceilingHeight: '4.8m Clear Span',
    },
  },
  {
    id: 'lumina-dev',
    title: 'Lumina Oceanfront',
    location: 'Palm Jumeirah Foreshore',
    city: 'Dubai',
    desc: 'Direct oceanfront residences with private yacht moorage berths, geothermal cooling arrays, and triple-height gallery foyers built for museum-grade art installations.',
    certification: 'BREEAM Outstanding',
    handover: 'Immediate Occupancy',
    livingAreaM2: '820 - 1,840 M²',
    terraceAreaM2: '340 M² Private',
    priceUSD: 36000000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDroGneMP-Oa_QNryXhkO0cUeQTNoM9-LKTWAJm-VWWU6HwwcyiMpYSTzF-OWVSlu027xTmLtHYsN9tHsAZM6LeQxe14eRZpAu8B4fzJ_TwBtAVmGsPMzuqroGO9l0yTfbYX6RCKaoU5_-a1eHN2yzlgTMJJ8_1iHtgDD7sK-WDgRqM5SWQ0iP0qgvRtt_J_ETCmZ3fJ33zRu2OplRHcbW1ZAoh75XkrYBzaNZ42k6frHoL1OVxCdS11A',
    features: ['65m Deep Sea Mooring', 'Geothermal Cooling Array', 'Curated Art Vault', 'Private Butler Strata'],
    specs: {
      architect: 'Zaha Hadid Architects Studio',
      structuralEngineer: 'Thornton Tomasetti',
      acousticRating: 'STC 60 Marine Envelope',
      privateElevators: 4,
      ceilingHeight: '5.2m Double-Height',
    },
  },
  {
    id: 'vertex-dev',
    title: 'Vertex Heights',
    location: 'Manhattan Central Park South',
    city: 'New York',
    desc: 'A monolithic spire of fluted limestone and oxidized bronze framing panoramic park horizons. Dedicated private elevator vestibules and biometric vault security.',
    certification: 'WELL Platinum Certified',
    handover: 'Q2 2026 Handover',
    livingAreaM2: '510 - 1,490 M²',
    terraceAreaM2: '110 M² Loggia',
    priceUSD: 48500000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDayAa199DdjpXQE5ORcetBrasbI0hqs21zdXZBLIyFW7XrcDxPnxgPtP9dRa55iZ9XSEJOAu1I_JYib0y9eL9ZpNbThq66O19fkqkqCM06sDE6ogyvEqmAQhr9KgjKxZcAyveLL1-8Vdbo0tLnfJiIW8-TknP6X9VnR8lfopb1X3czSAe7gAkRU0WUfRqcqcZgSBU2Wc7ZSxU8F9gW1MSZP8oPjEWL1kanH-o1k9jBKSt2GUCWXlpW4w',
    features: ['Park-Front Loggias', 'Private Car Elevator to Penthouse', 'Biometric Safe Room', 'Cryotherapy Spa'],
    specs: {
      architect: 'Robert A.M. Stern Architects',
      structuralEngineer: 'DeSimone Consulting Engineers',
      acousticRating: 'STC 62 Soundproof Quad-Glaze',
      privateElevators: 2,
      ceilingHeight: '5.8m Monumental Ceiling',
    },
  },
  {
    id: 'aura-dev',
    title: 'Aura Sky Pavilion',
    location: 'Minato Bay & Mount Fuji Horizon',
    city: 'Tokyo',
    desc: 'Crafted with centuries-old Japanese Hinoki timber, carbon fiber earthquake isolation dampers, and thermal onsen pools suspended 300 meters above Tokyo.',
    certification: 'CASBEE S-Class',
    handover: 'Q1 2026 Handover',
    livingAreaM2: '480 - 1,150 M²',
    terraceAreaM2: '140 M² Zen Terrace',
    priceUSD: 31000000,
    image: '/images/penthouse-interior.png',
    features: ['Suspended Natural Onsen', 'Base-Isolated Seismic Dampers', 'Tea Ceremony Pavilion', 'Private Zen Garden'],
    specs: {
      architect: 'Kengo Kuma & Associates',
      structuralEngineer: 'Nikken Sekkei Structural Lab',
      acousticRating: 'STC 56 Whisper Quiet',
      privateElevators: 2,
      ceilingHeight: '4.5m Hinoki Beam Clearance',
    },
  },
  {
    id: 'bastion-dev',
    title: 'The Belgravia Bastion',
    location: 'Hyde Park Gateway',
    city: 'London',
    desc: 'Portland limestone monumental facade with custom bronze grillwork, temperature-regulated collector car gallery, and private subterranean shooting range.',
    certification: 'BREEAM Outstanding',
    handover: 'Ready for Acquisition',
    livingAreaM2: '720 - 1,600 M²',
    terraceAreaM2: '95 M² Park View',
    priceUSD: 52000000,
    image: '/images/portal-preview.png',
    features: ['Subterranean Car Museum', 'Private Sommelier Cellar', 'Ballistics Grade Security', 'Hyde Park Garden Access'],
    specs: {
      architect: 'David Chipperfield Architects',
      structuralEngineer: 'Buro Happold Engineering',
      acousticRating: 'STC 64 Triple Acoustic Wall',
      privateElevators: 3,
      ceilingHeight: '4.9m Georgian Proportions',
    },
  },
  {
    id: 'solis-dev',
    title: 'Solis Horizon Penthouse',
    location: 'Port Hercule Seafront',
    city: 'Monaco',
    desc: 'An unparalleled triplex crowning the principality with cascading private botanical gardens, infinity glass edge pool overlooking the Grand Prix circuit.',
    certification: 'HQE Exceptionnel',
    handover: 'Private Treaty Handover',
    livingAreaM2: '980 - 2,400 M²',
    terraceAreaM2: '550 M² Triplex Roof',
    priceUSD: 88000000,
    image: '/images/towers-explorer.png',
    features: ['F1 Grand Prix Trackside View', 'Cascading Roof Garden', 'Glass-Bottom Sky Pool', 'Superyacht Tender Slip'],
    specs: {
      architect: 'Renzo Piano Building Workshop',
      structuralEngineer: 'Eckersley O’Callaghan',
      acousticRating: 'STC 62 Coastal Barrier',
      privateElevators: 4,
      ceilingHeight: '6.2m Triplex Atrium',
    },
  },
];
