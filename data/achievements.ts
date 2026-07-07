export type AchievementType = "Award" | "Research" | "Workshop" | "Publication" | "Leadership" | "Open Source" | "Volunteer" | "Training";

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
}

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Jal Shakti Hackathon Award 2025",
    subtitle: "National Winner — 1st Place & INR 1,00,000 Grant",
    organization: "Ministry of Jal Shakti, Government of India",
    date: "2025",
    type: "Award",
    description:
      "Awarded 1st Place at the national Jal Shakti Hackathon 2025 for developing HydroHarvest AI, a software suite designed to optimize urban rooftop rainwater harvesting layouts.",
    icon: "Trophy",
    color: "cyan",
    highlight: true,
  },
  {
    id: "2",
    title: "1st Prize — TGPCB Eco Champions",
    subtitle: "First Place Winner (CampusCircle)",
    organization: "Telangana State Pollution Control Board (TGPCB)",
    date: "2026",
    type: "Award",
    description:
      "Won 1st Prize from the Telangana State Pollution Control Board (TGPCB) for creating CampusCircle, an AI-IoT-enabled waste management system designed for school and university campuses.",
    icon: "Trophy",
    color: "emerald",
    highlight: true,
  },
  {
    id: "3",
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
    id: "4",
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
    id: "5",
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
