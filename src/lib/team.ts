export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Armel V. Manipol",
    role: "Founder & Lead Builder",
    description:
      "Armel founded 3AM Construction with a hands-on approach to every project. He personally oversees design decisions, material selection, and quality standards — ensuring each build reflects the craftsmanship the company is known for. With over a decade of field experience and a background in structural engineering, he leads from the construction site, not just the office. His commitment to quality has earned 3AM a reputation for delivering projects that exceed expectations.",
    image: "/images/team/armel-manipol.png",
  },
  {
    name: "Michelle Manipol",
    role: "Project Manager",
    description:
      "Michelle manages the complete project lifecycle — from initial consultation and documentation to scheduling, contractor coordination, and final turnover. She is the single point of contact for every client, ensuring nothing falls through the cracks and every deadline is met. Her attention to detail and proactive communication style have made her an invaluable partner to clients navigating complex construction projects.",
    image: "/images/team/michelle-manipol.jpg",
  },
];
