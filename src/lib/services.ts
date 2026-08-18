export interface Service {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Residential Construction",
    shortTitle: "Residential",
    description:
      "Ground-up home builds, major renovations, and structural improvements. We manage the entire process — from foundation to finish — ensuring your home is built to last.",
    image: "/images/projects/living-room.jpg",
  },
  {
    number: "02",
    title: "Interior & Exterior Design",
    shortTitle: "Design",
    description:
      "Space planning, material selection, and design development for both interiors and building exteriors. Every decision is guided by how you actually use the space.",
    image: "/images/projects/interior-wood.jpg",
  },
  {
    number: "03",
    title: "Fit-Out Works",
    shortTitle: "Fit-Out",
    description:
      "Kitchen renovations, bathroom remodels, custom cabinetry, and complete room transformations. We handle the details that make a space function beautifully.",
    image: "/images/projects/kitchen-modern.jpg",
  },
  {
    number: "04",
    title: "Construction & Repairs",
    shortTitle: "Repairs",
    description:
      "Structural repairs, roofing, flooring, plumbing, and electrical upgrades. We fix what's broken and improve what needs upgrading — with lasting results.",
    image: "/images/projects/bathroom-modern.jpg",
  },
  {
    number: "05",
    title: "Private & Public Projects",
    shortTitle: "Projects",
    description:
      "Commercial spaces, government infrastructure, and private developments. We deliver to the same standard whether it's a family home or a public facility.",
    image: "/images/projects/office-desk.jpg",
  },
  {
    number: "06",
    title: "Project Management",
    shortTitle: "Management",
    description:
      "Planning, scheduling, budgeting, quality control, and final turnover. We keep your project on track so you don't have to manage the complexity yourself.",
    image: "/images/services-plans.jpg",
  },
];
