export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  image: string;
  gallery: string[];
  description: string;
  details: {
    scope: string;
    duration: string;
    area: string;
  };
  challenges: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    slug: "modern-kitchen-renovation",
    title: "Modern Kitchen Renovation",
    category: "Residential",
    client: "Private Homeowner",
    location: "Metro Manila",
    year: "2024",
    image: "/images/projects/kitchen-modern.jpg",
    gallery: ["/images/projects/kitchen-modern.jpg", "/images/projects/luxury-kitchen.jpg"],
    description:
      "A complete kitchen transformation for a family home in Metro Manila. The project involved restructuring the layout to maximize space, installing custom cabinetry, and upgrading to premium countertops and fixtures.",
    details: {
      scope: "Full kitchen renovation including layout restructure, custom cabinetry, countertops, lighting, and plumbing",
      duration: "8 weeks",
      area: "35 sqm",
    },
    challenges: [
      "Limited space required creative storage solutions",
      "Existing plumbing needed rerouting for new island layout",
      "Client requested specific imported materials with long lead times",
    ],
    solutions: [
      "Designed custom floor-to-ceiling cabinetry to maximize vertical space",
      "Coordinated plumbing rerouting during off-peak hours to minimize disruption",
      "Ordered materials 6 weeks in advance to align with project timeline",
    ],
  },
  {
    slug: "contemporary-living-space",
    title: "Contemporary Living Space",
    category: "Residential",
    client: "Private Homeowner",
    location: "Luzon",
    year: "2024",
    image: "/images/projects/living-room.jpg",
    gallery: ["/images/projects/living-room.jpg", "/images/projects/open-living.jpg"],
    description:
      "A modern living room redesign featuring open-plan layout, custom wood paneling, and integrated smart home lighting. The space was transformed from a traditional layout to a contemporary entertaining area.",
    details: {
      scope: "Interior redesign, custom woodwork, smart lighting integration, flooring upgrade",
      duration: "6 weeks",
      area: "45 sqm",
    },
    challenges: [
      "Load-bearing wall limited open-plan possibilities",
      "Smart home wiring needed to be concealed within existing walls",
    ],
    solutions: [
      "Installed steel beam to replace load-bearing wall, enabling open-plan layout",
      "Routed wiring through existing wall cavities with minimal surface disruption",
    ],
  },
  {
    slug: "luxury-kitchen-fit-out",
    title: "Luxury Kitchen Fit-Out",
    category: "Fit-Out",
    client: "Private Homeowner",
    location: "Metro Manila",
    year: "2023",
    image: "/images/projects/luxury-kitchen.jpg",
    gallery: ["/images/projects/luxury-kitchen.jpg", "/images/projects/cabinetry.jpg"],
    description:
      "Premium kitchen fit-out for a high-end condominium unit. Featured imported Italian appliances, quartz countertops, and custom soft-close cabinetry throughout.",
    details: {
      scope: "Full kitchen fit-out with imported appliances, custom cabinetry, quartz countertops, backsplash installation",
      duration: "10 weeks",
      area: "28 sqm",
    },
    challenges: [
      "Condo building had strict delivery and noise restrictions",
      "Imported appliances required precise measurements and coordination",
    ],
    solutions: [
      "Scheduled all deliveries and heavy work during approved building hours",
      "Created detailed 3D models to verify appliance fit before ordering",
    ],
  },
  {
    slug: "modern-bathroom-design",
    title: "Modern Bathroom Design",
    category: "Residential",
    client: "Private Homeowner",
    location: "Luzon",
    year: "2024",
    image: "/images/projects/bathroom-modern.jpg",
    gallery: ["/images/projects/bathroom-modern.jpg"],
    description:
      "Complete bathroom renovation featuring walk-in rain shower, floating vanity, and floor-to-ceiling porcelain tiles. Designed for both functionality and a spa-like aesthetic.",
    details: {
      scope: "Full demolition and rebuild, waterproofing, tiling, fixtures, vanity installation",
      duration: "5 weeks",
      area: "12 sqm",
    },
    challenges: [
      "Old plumbing required complete replacement",
      "Waterproofing critical due to unit below",
    ],
    solutions: [
      "Replaced all supply and drainage lines with PEX piping",
      "Applied multi-layer waterproofing system with 48-hour flood testing",
    ],
  },
  {
    slug: "premium-cabinetry-work",
    title: "Premium Cabinetry Work",
    category: "Fit-Out",
    client: "Private Homeowner",
    location: "Metro Manila",
    year: "2023",
    image: "/images/projects/cabinetry.jpg",
    gallery: ["/images/projects/cabinetry.jpg", "/images/projects/interior-wood.jpg"],
    description:
      "Custom cabinetry installation across multiple rooms including bedroom wardrobes, kitchen cabinets, and entertainment unit. All pieces designed to match a cohesive modern aesthetic.",
    details: {
      scope: "Design, fabrication, and installation of custom cabinetry for 3 rooms",
      duration: "4 weeks",
      area: "60 sqm total",
    },
    challenges: [
      "Irregular wall dimensions required fully custom solutions",
      "Client wanted matching finishes across different room functions",
    ],
    solutions: [
      "Laser-measured all spaces for precision fabrication",
      "Developed custom stain formula to ensure consistent finish across all pieces",
    ],
  },
  {
    slug: "urban-condo-interior",
    title: "Urban Condo Interior",
    category: "Residential",
    client: "Private Homeowner",
    location: "Metro Manila",
    year: "2024",
    image: "/images/projects/interior-wood.jpg",
    gallery: ["/images/projects/interior-wood.jpg", "/images/projects/living-room.jpg"],
    description:
      "Full interior fit-out for a studio condo unit. Designed to maximize limited space with multi-functional furniture, built-in storage, and a cohesive neutral palette.",
    details: {
      scope: "Complete interior fit-out including furniture design, built-ins, lighting, and styling",
      duration: "7 weeks",
      area: "32 sqm",
    },
    challenges: [
      "Extremely limited space required every piece to serve dual purposes",
      "Budget constraints while maintaining premium feel",
    ],
    solutions: [
      "Designed custom Murphy bed with integrated desk and shelving",
      "Used high-quality laminates that mimic natural wood at fraction of cost",
    ],
  },
  {
    slug: "open-plan-living",
    title: "Open Plan Living",
    category: "Residential",
    client: "Private Homeowner",
    location: "Luzon",
    year: "2023",
    image: "/images/projects/open-living.jpg",
    gallery: ["/images/projects/open-living.jpg", "/images/projects/living-room.jpg"],
    description:
      "Transformation of a traditional closed-layout home into an open-plan living area. Combined kitchen, dining, and living spaces into one flowing area with consistent design language.",
    details: {
      scope: "Structural modification, kitchen redesign, flooring, lighting, furniture layout",
      duration: "12 weeks",
      area: "85 sqm",
    },
    challenges: [
      "Two load-bearing walls needed removal",
      "Existing electrical panel needed relocation",
    ],
    solutions: [
      "Engineered steel beam system to support upper floor while removing walls",
      "Relocated electrical panel to utility room with upgraded capacity",
    ],
  },
  {
    slug: "executive-office-suite",
    title: "Executive Office Suite",
    category: "Commercial",
    client: "Corporate Client",
    location: "Metro Manila",
    year: "2024",
    image: "/images/projects/office-desk.jpg",
    gallery: ["/images/projects/office-desk.jpg"],
    description:
      "Executive office fit-out for a corporate headquarters. Featured custom mahogany desk, ergonomic workstations, glass partition walls, and integrated AV system for presentations.",
    details: {
      scope: "Complete office fit-out including custom furniture, glass partitions, AV integration, and lighting",
      duration: "9 weeks",
      area: "120 sqm",
    },
    challenges: [
      "Occupied building required work during off-hours only",
      "Complex AV wiring needed to integrate with existing IT infrastructure",
    ],
    solutions: [
      "Shifted construction crew to night shifts (6PM–6AM) for critical phases",
      "Coordinated with client's IT team for seamless AV integration",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
