export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  name: string;
  level: SkillLevel;
  percent: number;
}

export interface SkillCategory {
  category: string;
  color: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Geospatial Analysis",
    color: "cyan",
    icon: "Map",
    skills: [
      { name: "QGIS", level: "Expert", percent: 92 },
      { name: "ArcGIS Pro", level: "Advanced", percent: 85 },
      { name: "Google Earth Engine (GEE)", level: "Expert", percent: 90 },
      { name: "Bhuvan Geoportal", level: "Advanced", percent: 85 },
      { name: "PostGIS", level: "Advanced", percent: 80 },
    ],
  },
  {
    category: "Programming & Stack",
    color: "blue",
    icon: "Code2",
    skills: [
      { name: "Python (NumPy, Pandas)", level: "Expert", percent: 90 },
      { name: "GeoPandas & Rasterio", level: "Advanced", percent: 85 },
      { name: "OpenCV", level: "Advanced", percent: 80 },
      { name: "SQL (PostgreSQL/MySQL)", level: "Advanced", percent: 82 },
      { name: "JavaScript (GEE API)", level: "Advanced", percent: 85 },
    ],
  },
  {
    category: "Development & Tools",
    color: "purple",
    icon: "Brain",
    skills: [
      { name: "HTML & CSS", level: "Advanced", percent: 85 },
      { name: "Git / GitHub", level: "Advanced", percent: 88 },
    ],
  },
];
