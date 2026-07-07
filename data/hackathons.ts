export type HackathonOutcome = "Winner" | "Runner-Up" | "Finalist" | "Top 10" | "Participant";

export interface Hackathon {
  id: string;
  title: string;
  event: string;
  organizer: string;
  date: string;
  year: number;
  teamSize: number;
  myRole: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  outcome: HackathonOutcome;
  achievement: string;
  description: string;
  color: string;
  badge: string;
  certificateUrl?: string;
  projectUrl?: string;
  linkedProject?: string;
}

export const hackathons: Hackathon[] = [
  {
    id: "1",
    title: "HydroHarvest AI",
    event: "Jal Shakti Hackathon 2025",
    organizer: "Ministry of Jal Shakti, Government of India",
    date: "2025-12",
    year: 2025,
    teamSize: 1,
    myRole: "Founder & Lead Developer",
    problemStatement:
      "Design a scalable geospatial system utilizing GeoAI to optimize urban rooftop rainwater harvesting layouts and predict yields.",
    solution:
      "Developed HydroHarvest AI, which integrates geospatial technologies and machine learning models to analyze rooftop spatial data and predict rainwater harvesting yields.",
    techStack: ["Python", "Google Earth Engine", "Machine Learning", "PostGIS", "GIS Analysis"],
    outcome: "Winner",
    achievement: "🏆 1st Place & INR 1,00,000 Development Grant",
    description:
      "Secured 1st Place at the national hackathon and was awarded a development grant by the Ministry of Jal Shakti to develop and scale the project's Proof-of-Concept.",
    color: "cyan",
    badge: "🏆",
    linkedProject: "hydroharvest-ai",
  },
  {
    id: "2",
    title: "CampusCircle",
    event: "Eco Champions Hackathon",
    organizer: "Telangana State Pollution Control Board (TGPCB)",
    date: "2026-05",
    year: 2026,
    teamSize: 2,
    myRole: "AI-IoT System Developer",
    problemStatement:
      "Design sustainable, automated waste management solutions for schools and university campuses to minimize environmental impact.",
    solution:
      "Created CampusCircle, an AI-IoT-enabled waste management system that automates waste sorting, level tracking, and recycling schedules.",
    techStack: ["AI Models", "IoT Sensors", "Python", "Embedded Systems", "Web Dashboard"],
    outcome: "Winner",
    achievement: "🏆 1st Prize — TGPCB Eco Champions",
    description:
      "Won 1st Prize from the Telangana State Pollution Control Board (TGPCB) for creating CampusCircle, an AI-IoT-enabled waste management system designed for school and university campuses.",
    color: "emerald",
    badge: "🏆",
  },
];
