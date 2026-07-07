# Shiva Kumar | Geoinformatics & GeoAI Portfolio Website

A premium, open-source personal portfolio website designed for Geoinformatics students and professionals. The design is inspired by NASA, Google Earth, and ArcGIS, featuring deep dark themes, glowing glassmorphism, smooth scroll animations, an interactive 3D Earth globe, and a fully functional GIS web map.

---

* **3D Earth Globe**: A custom interactive Earth sphere running on WebGL (Three.js / React Three Fiber) with satellite orbital paths.
* **Featured Projects**: Geospatial & GeoAI research projects (like HydroHarvest AI) with custom dynamic detail routes (`/projects/[slug]`).
* **Interactive Hackathons Timeline**: Timeline filtering by outcome (Winner, Runner-Up, etc.) and year.
* **Skills Dashboard**: Animated skill-bars categorizing Geospatial Analysis, Programming, and Development tools.

---

## 🛠️ Technology Stack

* **Core**: Next.js 16 (App Router), React 19, TypeScript
* **Styling**: Tailwind CSS v4, custom utility classes for Glassmorphism & glows
* **3D Animation**: React Three Fiber (`@react-three/fiber`), `@react-three/drei`, Three.js
* **Maps**: MapLibre GL JS (`maplibre-gl`)
* **Animations**: Framer Motion
* **Icons**: Lucide React
* **Hosting**: Vercel

---

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router (Layouts, Pages, Routes)
│   ├── blog/             # Blog index page
│   ├── projects/[slug]/  # Dynamic project details route
│   ├── globals.css       # Design system tokens and custom CSS classes
│   ├── layout.tsx        # Main layout wrapper (SEO, Themes, Layout)
│   ├── not-found.tsx     # Custom 404Coordinate Lost page
│   └── page.tsx          # Main assembly page with all 11 sections
├── components/           # Reusable React components
│   ├── layout/           # Global elements (Navbar, Footer)
│   ├── sections/         # Individual sections (Hero, About, Skills, Projects, Hackathons, Certifications, Achievements, Resume, Contact, Blog)
│   ├── three/            # WebGL 3D Globe components (EarthGlobe)
│   └── ui/               # Modular UI blocks (GlowCard, SectionTitle, LoadingScreen, BackToTop)
├── data/                 # Content layer (easily update projects / credentials here)
│   ├── profile.ts        # General profile bio, experience, and contact
│   ├── projects.ts       # 3 detailed projects metadata
│   ├── hackathons.ts     # 2 competition entries details
│   ├── certificates.ts   # 5 certification logs
│   ├── achievements.ts   # 5 awards and milestones
│   └── skills.ts         # Technical skills taxonomy
├── lib/                  # Helper utilities (Tailwind class merger, formatters)
└── public/               # Static assets (images, PDF resume, PWA manifest)
```

---

## 💻 Local Development

Follow these steps to run the website locally:

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd shiva_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local dev server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

---

## 📝 Customizing Content

You do not need to modify any UI code to change the text content of your portfolio. Simply edit the TS/JSON files in the `data/` folder:

* **General Info / Contact**: Edit `data/profile.ts`
* **Skills List**: Edit `data/skills.ts`
* **Projects Catalog**: Edit `data/projects.ts`
* **Hackathons Logs**: Edit `data/hackathons.ts`
* **Certifications**: Edit `data/certificates.ts`
* **Awards & Milestones**: Edit `data/achievements.ts`

### Setting up Assets
* **Profile Picture**: Place your portrait photo at `public/images/profile.jpg` to replace the generated placeholder.
* **Resume PDF**: Save your resume PDF as `public/resume.pdf` to make the download button work immediately.

---

## 🌍 Production Build & Deployment

### 1. Deploying to Vercel (Recommended)
1. Commit your codebase to a GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click **Add New** > **Project**.
3. Import your repository.
4. Keep the default settings and click **Deploy**. Vercel will automatically configure the build commands (`npm run build`).

### 2. Deploying to GitHub Pages
To deploy as a static website to GitHub Pages:
1. Enable static export in your `next.config.ts` by adding `output: 'export'`:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true }, // Required for static export
   };
   ```
2. Build the project locally:
   ```bash
   npm run build
   ```
   This will output a static bundle in the `out/` folder, which can be deployed to any static host (like GitHub Pages or Netlify).
