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
    title: "Eco Champions Project",
    event: "Eco Champions Hackathon",
    organizer: "EPA / Local Innovation Cell",
    date: "2026-05",
    year: 2026,
    teamSize: 2,
    myRole: "GIS Analyst & Lead Developer",
    problemStatement:
      "Develop innovative geospatial applications targeting regional microclimate variations or ecological conservation.",
    solution:
      "Created a spatial analysis platform mapping forest protection criteria and assessing environmental sustainability variables.",
    techStack: ["QGIS", "Python", "Spatial Analysis", "Cartography"],
    outcome: "Winner",
    achievement: "🏆 1st Prize — Eco Champions",
    description:
      "Won 1st Prize for designing and presenting an interactive spatial planning map resolving forestry and vegetation health factors.",
    color: "emerald",
    badge: "🏆",
  },
];
