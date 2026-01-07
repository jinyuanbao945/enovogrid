import { 
  Zap, 
  Activity, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Leaf, 
  Droplets, 
  Sun, 
  Battery, 
  Wind, 
  Monitor, 
  Wifi,
  Factory,
  Home,
  Palmtree,
  Briefcase,
  HardHat,
  LifeBuoy
} from "lucide-react";

export const solutions = [
  {
    id: "rural",
    icon: Home,
    image: "/images/solution-rural.jpg",
    translationKey: "rural"
  },
  {
    id: "weak-grid",
    icon: Activity,
    image: "/images/hero-main.jpg", // Placeholder, reuse hero
    translationKey: "weak_grid"
  },
  {
    id: "island",
    icon: Palmtree,
    image: "/images/solution-island.jpg",
    translationKey: "island"
  },
  {
    id: "industrial",
    icon: Factory,
    image: "/images/solution-industrial.jpg",
    translationKey: "industrial"
  },
  {
    id: "hydro-owner",
    icon: Droplets,
    image: "/images/hero-main.jpg", // Placeholder
    translationKey: "hydro_owner"
  },
  {
    id: "finance",
    icon: Briefcase,
    image: "/images/tech-scada.jpg", // Placeholder
    translationKey: "finance"
  },
  {
    id: "epc",
    icon: HardHat,
    image: "/images/solution-industrial.jpg", // Placeholder
    translationKey: "epc"
  },
  {
    id: "emergency",
    icon: LifeBuoy,
    image: "/images/solution-rural.jpg", // Placeholder
    translationKey: "emergency"
  }
];

export const technologies = [
  {
    id: "vsg",
    icon: Activity,
    image: "/images/tech-scada.jpg",
    translationKey: "vsg"
  },
  {
    id: "hydro",
    icon: Droplets,
    image: "/images/hero-main.jpg",
    translationKey: "hydro"
  },
  {
    id: "pv",
    icon: Sun,
    image: "/images/solution-rural.jpg",
    translationKey: "pv"
  },
  {
    id: "bess",
    icon: Battery,
    image: "/images/solution-industrial.jpg",
    translationKey: "bess"
  },
  {
    id: "ems",
    icon: Cpu,
    image: "/images/tech-scada.jpg",
    translationKey: "ems"
  },
  {
    id: "wind",
    icon: Wind,
    image: "/images/hero-main.jpg",
    translationKey: "wind"
  },
  {
    id: "scada",
    icon: Monitor,
    image: "/images/tech-scada.jpg",
    translationKey: "scada"
  }
];
