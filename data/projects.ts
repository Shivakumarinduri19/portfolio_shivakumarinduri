export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  techStack: string[];
  status: "Completed" | "In Progress" | "Research";
  featured: boolean;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  location?: {
    lat: number;
    lng: number;
    label: string;
  };
  datasets?: string[];
  results?: string[];
  objectives?: string[];
  period: string;
  awardImage?: string;
  awardTitle?: string;
  awardLocation?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "hydroharvest-ai",
    title: "Hydro Harvest AI",
    subtitle: "Automated Geospatial Design Suite",
    description:
      "Engineered a software-only suite to automate Rooftop Rainwater Harvesting (RWH) designs using high-resolution satellite imagery.",
    longDescription: `Hydro Harvest AI is an automated geospatial design suite developed to optimize urban rooftop rainwater harvesting (RWH) designs using high-resolution satellite imagery.

The GIS-driven pipeline was developed using React Native, Django, and PostGIS to enable automated rooftop boundary extraction and runoff modeling. 

By integrating 30-year historical rainfall datasets and soil permeability layers, the system optimizes water storage tank sizing. This software-only approach secured 1st Place at the national Jal Shakti Hackathon 2025 organized by the Ministry of Jal Shakti, Government of India, receiving an INR 1,00,000 grant to scale the Proof-of-Concept under JNTUH academic mentorship.`,
    category: "Water Resources",
    tags: ["React Native", "Django", "PostGIS", "GeoAI", "Rainwater Harvesting", "Jal Shakti Winner"],
    techStack: ["React Native", "Django", "PostGIS", "Python", "GIS Analysis"],
    status: "In Progress",
    featured: true,
    image: "/images/projects/hydroharvest.jpg",
    awardImage: "/images/jalshakti-award-ceremony.png",
    awardTitle: "World Water Day Conclave Award Ceremony",
    awardLocation: "DAIC, New Delhi",
    githubUrl: "https://github.com/Shivakumarinduri19/hydroharvest-ai",
    location: { lat: 17.385, lng: 78.4867, label: "Hyderabad, JNTUH" },
    datasets: [
      "High-Resolution Satellite Imagery",
      "Urban Rooftop Vector Layers",
      "30-Year Historical Rainfall Datasets",
      "Regional Soil Permeability Matrices",
    ],
    objectives: [
      "Automate Rooftop Rainwater Harvesting (RWH) designs using high-resolution satellite imagery",
      "Develop GIS-driven pipeline for rooftop boundary extraction and runoff modeling",
      "Integrate 30-year historical rainfall data and soil permeability layers to optimize tank sizing",
    ],
    results: [
      "Secured 1st Place at the Jal Shakti Hackathon 2025 (National Winner)",
      "Awarded INR 1,00,000 grant by the Ministry of Jal Shakti at the World Water Day Conclave, New Delhi",
      "Refined under the mentorship of Prof. Thatiparthi Vijaya Lakshmi and Dr. T. Ravi Shanker at JNTUH",
    ],
    period: "March 2026 – Present",
  },
  {
    id: "2",
    slug: "urban-heat-island",
    title: "CoolCity AI: Urban Heat Island GeoAI & WebGIS",
    subtitle: "A Scalable Open-Source GeoAI and WebGIS Architecture for Monitoring and Mitigating Urban Heat Islands",
    description:
      "Award-winning GeoAI and WebGIS architecture processing Landsat 8/9 TIRS and Sentinel data in Google Earth Engine to monitor, analyze, and mitigate surface urban heat island (SUHI) intensity.",
    longDescription: `CoolCity AI is an award-winning, open-source GeoAI and WebGIS architecture designed to monitor, analyze, and mitigate surface urban heat island (SUHI) intensity across expanding metropolitan regions.

Secured the Gold Prize (Rs. 25,000 Cash Prize) at the 47th Asian Conference on Remote Sensing (ACRS 2026) in New Delhi in the ISRS I-CON / WebCon contest organized by the Indian Society of Remote Sensing, Indian Society of Geomatics, and Prof. Chiharu Nakagawa Lab (Shibaura Institute of Technology, Japan).

The processing engine is built on Google Earth Engine (GEE), integrating Landsat 8/9 OLI-TIRS thermal data with Sentinel-2 multispectral imagery. A custom spatial buffer algorithm models the statistical correlation between urban density (NDBI), vegetation index (NDVI), and land surface temperature (LST) thermal retention to generate actionable spatial intervention plans for urban planners.`,
    category: "Urban Analytics",
    tags: ["GEE", "Landsat 8/9", "GeoAI", "WebGIS", "SUHI", "LST", "ACRS 2026 Gold Prize Winner"],
    techStack: ["Google Earth Engine", "JavaScript", "Python", "Landsat TIRS", "GeoAI", "WebGIS"],
    status: "Completed",
    featured: true,
    image: "/images/projects/coolcity.jpg",
    awardImage: "/images/acrs-2026-gold-prize.jpg",
    awardTitle: "ACRS 2026 Gold Prize Ceremony — ISRS WebCon / I-CON",
    awardLocation: "New Delhi, India",
    demoUrl: "https://ee-shivakumarinduri19.projects.earthengine.app/view/uhi",
    location: { lat: 17.385, lng: 78.4867, label: "Hyderabad, Telangana" },
    datasets: [
      "Landsat 8/9 OLI-TIRS Thermal Imagery (USGS)",
      "Sentinel-2 Multispectral Imagery (Copernicus)",
      "Urban Density Indexes (NDBI/NDVI)",
    ],
    objectives: [
      "Quantify surface urban heat island (SUHI) intensity using Landsat thermal bands in GEE",
      "Analyze the correlation between NDBI (urban density), NDVI (vegetation), and LST (thermal retention)",
      "Establish spatial buffer algorithms to map heat retention relative to urban build layouts",
      "Deploy open-source GeoAI & WebGIS dashboards for microclimate mitigation decision-support",
    ],
    results: [
      "Awarded Gold Prize (Rs. 25,000) at the 47th Asian Conference on Remote Sensing (ACRS 2026) in the ISRS I-CON / WebCon Contest",
      "Produced multi-temporal LST heat mapping of the Hyderabad metropolitan region",
      "Confirmed statistically strong negative correlation between NDVI and LST",
      "Designed data-driven guidelines for urban greening cooling zones",
    ],
    period: "2024 – 2026",
  },
  {
    id: "3",
    slug: "digi-hand-gis",
    title: "Digi-Hand GIS",
    subtitle: "The Digitalization of Motion",
    description:
      "Digi-Hand GIS is an innovative, browser-based Geospatial Information System (GIS) that translates physical hand movements into high-precision digital commands. By leveraging Computer Vision (AI) to digitalize skeletal hand landmarks, this project eliminates the need for traditional input devices, offering a touchless, intuitive way to interact with global spatial data.",
    longDescription: `Digi-Hand GIS is an innovative, browser-based Geospatial Information System (GIS) that translates physical hand movements into high-precision digital commands. By leveraging Computer Vision (AI) to digitalize skeletal hand landmarks, this project eliminates the need for traditional input devices, offering a touchless, intuitive way to interact with global spatial data.

The system uses advanced computer vision libraries (such as MediaPipe and OpenCV) to track real-time skeletal hand coordinates. These streams are mapped directly onto spatial navigation vectors in a WebGIS interface, enabling the user to pan, zoom, query, and manipulate maps through physical gestures in front of a standard web camera. This represents a major leap in accessibility and interactive spatial displays.`,
    category: "Computer Vision & GIS",
    tags: ["Computer Vision", "Gesture Recognition", "WebGIS", "MediaPipe", "Geospatial UI"],
    techStack: ["Python", "OpenCV", "MediaPipe", "JavaScript", "WebGIS"],
    status: "Completed",
    featured: true,
    image: "/images/projects/digihand.jpg",
    githubUrl: "https://github.com/Shivakumarinduri19/digi-hand-gis",
    location: { lat: 17.385, lng: 78.4867, label: "Hyderabad, JNTUH" },
    datasets: [
      "Real-time Skeletal Hand Tracking Streams",
      "Dynamic Vector Mapping Matrix Coordinates",
      "WebGIS Leaflet Navigation Maps",
    ],
    objectives: [
      "Digitalize skeletal hand landmarks using computer vision to eliminate physical controllers",
      "Develop real-time gesture recognition interface translating hand motion into WebGIS navigation commands (pan, zoom, query)",
      "Create touchless, highly intuitive user interaction workflows for global spatial datasets",
    ],
    results: [
      "Successfully built and deployed real-time gesture controller running directly in the browser",
      "Mapped skeletal hand coordinate streams directly into spatial pan and zoom vectors",
      "Enhanced touchless accessibility for field GIS engineers and research presentation displays",
    ],
    period: "2025",
  },
];
