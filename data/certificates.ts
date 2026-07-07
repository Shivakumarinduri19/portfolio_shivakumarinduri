export interface Certificate {
  id: string;
  title: string;
  organization: string;
  orgLogo?: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  category: string;
  color: string;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    organization: "Oracle Cloud Infrastructure",
    date: "2025",
    category: "Machine Learning",
    color: "blue",
    skills: ["Oracle Cloud", "AI Foundations", "Machine Learning"],
    credentialUrl: "#",
  },
  {
    id: "2",
    title: "Supply Chain of Agriculture",
    organization: "Agriculture Ministry / Coursera",
    date: "2024",
    category: "Agriculture",
    color: "emerald",
    skills: ["Precision Agriculture", "GIS in Supply Chains", "Crop Mapping"],
    credentialUrl: "#",
  },
  {
    id: "3",
    title: "Introduction to RS & GIS using QGIS",
    organization: "QGIS Org / Academic Portal",
    date: "2023",
    category: "GIS",
    color: "cyan",
    skills: ["QGIS", "Remote Sensing", "GIS Analysis"],
    credentialUrl: "#",
  },
  {
    id: "4",
    title: "UN Mappers Mapathon: Mapping Forest Fire Prone Areas in Adilabad",
    organization: "UN Mappers & JNTUH",
    date: "March 18, 2026",
    category: "Disaster Management",
    color: "purple",
    skills: ["UN Mappers", "Fire Risk Mapping", "Adilabad Spatial Data"],
    credentialUrl: "#",
  },
  {
    id: "5",
    title: "NRSC Training: Specialized training on Bhuvan Geoportal and SAR data (NISAR) trends",
    organization: "ISRO Shadnagar / National Remote Sensing Centre (NRSC)",
    date: "2024",
    category: "Remote Sensing",
    color: "orange",
    skills: ["Bhuvan Geoportal", "SAR Data Processing", "NISAR Trends"],
    credentialUrl: "#",
  },
];
