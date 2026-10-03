export type AchievementType = "Award" | "Research" | "Workshop" | "Publication" | "Leadership" | "Open Source" | "Volunteer" | "Training" | "Special Mention";

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  date: string;
  type: AchievementType;
  description: string;
  icon: string;
  color: string;
  highlight?: boolean;
  link?: string;
  linkText?: string;
  image?: string;
}

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "National Space Day 2026 — Research Poster Presentation",
    subtitle: "Chandrayaan-3 ILSA Seismic Observations at Lunar South Pole",
    organization: "G. P. Birla Archaeological, Astronomical & Scientific Research Institute (GPBAASRI) & ISG, Hyderabad",
    date: "August 2026",
    type: "Research",
    description:
      'Presented research poster (NSD26-G-17) titled "REAL SIGNAL, OR JUST NOISE? Chandrayaan-3 ILSA Seismic Observations at the Lunar South Pole", evaluating ground-vibration detection, distinguishing genuine lunar seismic events from lander/rover-induced thermal & mechanical micro-vibrations. Co-presented with teammate Akhil Kumar M.',
    icon: "Rocket",
    color: "purple",
    highlight: true,
    image: "/images/chandrayaan3-poster-presentation.png",
  },
  {
    id: "2",
    title: "UN Mappers Special Mention & Mapathon Lead",
    subtitle: "Featured in UN Maps News & Humanitarian Sessions Lead",
    organization: "United Nations (UN Maps / UN Mappers) & JNTUH",
    date: "March – May 2026",
    type: "Special Mention",
    description:
      "Received official Special Mention in UN Maps global publication for playing a vital role in organizing humanitarian mapping sessions at JNTU Hyderabad and developing Hydro Harvest AI for drought resilience.",
    icon: "Users",
    color: "cyan",
    highlight: true,
    link: "https://maps.un.org/news/un-mappers-humanitarian-mapping-sessions-jntu-hyderabad",
    linkText: "Official UN Maps News",
    image: "/images/unmappers-special-mention.png",
  },
  {
    id: "3",
    title: "Jal Shakti Hackathon Award 2025",
    subtitle: "National Winner — 1st Place & INR 1,00,000 Grant (HydroHarvest AI)",
    organization: "Ministry of Jal Shakti, Government of India (World Water Day Conclave)",
    date: "2025",
    type: "Award",
    description:
      "Awarded 1st Place at the national Jal Shakti Hackathon 2025 by the Ministry of Jal Shakti for developing HydroHarvest AI, an automated geospatial suite optimizing urban rooftop rainwater harvesting layouts.",
    icon: "Trophy",
    color: "cyan",
    highlight: true,
    image: "/images/jalshakti-award-ceremony.png",
  },
  {
    id: "4",
    title: "1st Prize — TGPCB Eco Champions",
    subtitle: "First Place Winner (CampusCircle)",
    organization: "Telangana State Pollution Control Board (TGPCB)",
    date: "2026",
    type: "Award",
    description:
      "Won 1st Prize from the Telangana State Pollution Control Board (TGPCB) at the Eco Champions Hackathon for creating CampusCircle, an AI-IoT-enabled waste management system designed for school and university campuses.",
    icon: "Trophy",
    color: "emerald",
    highlight: true,
    image: "/images/campuscircle-award-ceremony.png",
  },
  {
    id: "5",
    title: "Meritorious Student Award",
    subtitle: "Award for Academic Excellence in Civil Engineering",
    organization: "S.G. Govt Polytechnic, Adilabad",
    date: "2024",
    type: "Award",
    description:
      "Awarded the Meritorious Student Award for achieving academic excellence during my Diploma in Civil Engineering (Overall CGPA: 8.77/10).",
    icon: "Medal",
    color: "purple",
    highlight: true,
  },
  {
    id: "6",
    title: "UN Mappers Mapathon",
    subtitle: "Mapping Forest Fire Prone Areas in Adilabad",
    organization: "UN Mappers & JNTUH",
    date: "March 18, 2026",
    type: "Volunteer",
    description:
      "Mapped forest fire-prone zones in Adilabad, Telangana to support United Nations mapping programs and disaster mitigation initiatives.",
    icon: "Users",
    color: "blue",
  },
  {
    id: "7",
    title: "NRSC Training",
    subtitle: "Specialized Training on Bhuvan Geoportal & NISAR SAR Data",
    organization: "ISRO Shadnagar / National Remote Sensing Centre (NRSC)",
    date: "2026",
    type: "Training",
    description:
      "Completed specialized geospatial and satellite training focusing on the Bhuvan Geoportal and Synthetic Aperture Radar (SAR) data (NISAR) trends at the ISRO Shadnagar facility.",
    icon: "GraduationCap",
    color: "orange",
  },
];
