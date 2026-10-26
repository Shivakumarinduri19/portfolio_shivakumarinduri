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
  image?: string;
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
      "Secured 1st Place at the national hackathon and was awarded a development grant by the Ministry of Jal Shakti at the World Water Day Conclave to scale the project's Proof-of-Concept.",
    color: "cyan",
    badge: "🏆",
    linkedProject: "hydroharvest-ai",
    image: "/images/jalshakti-award-ceremony.png",
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
    image: "/images/campuscircle-award-ceremony.png",
  },
  {
    id: "3",
    title: "CoolCity AI",
    event: "ISRS I-CON / WebCon Contest (47th ACRS 2026)",
    organizer: "Indian Society of Remote Sensing (ISRS), ISG & Nakagawa Lab (Japan)",
    date: "2026-10",
    year: 2026,
    teamSize: 2,
    myRole: "Lead GeoAI & WebGIS Developer",
    problemStatement:
      "Design and deploy an open-source GeoAI and WebGIS architecture to quantify surface urban heat islands (SUHI) and model mitigation strategies using earth observation.",
    solution:
      "Architected CoolCity AI using Google Earth Engine, Landsat 8/9 thermal radiance, and Sentinel-2 multispectral indices with spatial buffer algorithms for real-time microclimate analytics.",
    techStack: ["Google Earth Engine", "Python", "JavaScript", "GeoAI", "Landsat TIRS", "WebGIS"],
    outcome: "Winner",
    achievement: "🏆 Gold Prize (Rs. 25,000 Cash Prize)",
    description:
      "Awarded the Gold Prize at the 47th Asian Conference on Remote Sensing (ACRS 2026) in New Delhi in the ISRS I-CON / WebCon contest for pioneering open-source GeoAI & WebGIS innovation.",
    color: "cyan",
    badge: "🏆",
    linkedProject: "urban-heat-island",
    projectUrl: "http://www.db.shibaura-it.ac.jp/~nakagawa/webcon/",
    image: "/images/acrs-2026-gold-prize.jpg",
  },
];

