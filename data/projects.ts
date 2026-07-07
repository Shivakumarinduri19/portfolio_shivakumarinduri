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
      "Secured 1st Place at the Jal Shakti Hackathon 2025",
      "Awarded INR 1,00,000 grant by the Ministry of Jal Shakti to scale the Proof-of-Concept",
      "Refined under the mentorship of Prof. Thatiparthi Vijaya Lakshmi and Dr. T. Ravi Shanker at JNTUH",
    ],
    period: "March 2026 – Present",
  },
  {
    id: "2",
    slug: "urban-heat-island",
    title: "Urban Heat Island Spatio-Temporal Analysis",
    subtitle: "Landsat-based Surface Urban Heat Island Intensity Assessment",
    description:
      "Processed Landsat 8/9 TIRS data in GEE to quantify surface urban heat island (SUHI) intensity across the Hyderabad metropolitan region.",
    longDescription: `This project implements a spatio-temporal analysis of the Surface Urban Heat Island (SUHI) intensity across the Hyderabad metropolitan region using Landsat 8/9 OLI-TIRS thermal data.

The processing pipeline was built in Google Earth Engine (GEE). A spatial buffer algorithm was developed to analyze the exact correlation between urban density (NDBI), vegetation index (NDVI), and land surface temperature (LST) thermal retention.

The analysis confirmed a strong negative correlation between NDVI and LST, providing a validated, data-driven spatial model for targeted urban cooling interventions and microclimate landscaping.`,
    category: "Urban Analytics",
    tags: ["GEE", "Landsat 8/9", "NDVI", "NDBI", "LST", "SUHI", "Spatial Buffer"],
    techStack: ["Google Earth Engine", "JavaScript", "Landsat TIRS", "GIS Analysis"],
    status: "Completed",
    featured: true,
    image: "/images/projects/coolcity.jpg",
    demoUrl: "#", // Live link placeholder
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
    ],
    results: [
      "Produced multi-temporal LST heat mapping of the Hyderabad metropolitan region",
      "Confirmed statistically strong negative correlation between NDVI and LST",
      "Designed data-driven guidelines for urban greening cooling zones",
    ],
    period: "2024",
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
