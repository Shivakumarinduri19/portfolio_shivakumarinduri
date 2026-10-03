import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiva Kumar Induri | GeoAI & Geoinformatics Specialist Portfolio",
  description:
    "Professional portfolio of Shiva Kumar Induri, final year Geoinformatics & AIML student at JNTUH specializing in Remote Sensing, Google Earth Engine, GeoAI, and WebGIS. National Winner of Jal Shakti Hackathon 2025 (₹1,00,000 Grant).",
  keywords: [
    "Shiva Kumar Induri",
    "Geoinformatics",
    "GIS Analyst",
    "Remote Sensing",
    "GeoAI",
    "Google Earth Engine",
    "JNTUH",
    "HydroHarvest AI",
    "Jal Shakti Hackathon",
    "WebGIS",
    "PostGIS",
  ],
  authors: [{ name: "Shiva Kumar Induri", url: "https://github.com/Shivakumarinduri19" }],
  creator: "Shiva Kumar Induri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiva-portfolio.vercel.app",
    title: "Shiva Kumar Induri | GeoAI & Geoinformatics Specialist Portfolio",
    description:
      "Explore featured GIS, Remote Sensing, and machine learning research projects by Shiva Kumar Induri.",
    siteName: "Shiva Kumar Induri Geoinformatics Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full scroll-smooth" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-full flex flex-col bg-[#030712] text-[#f8fafc] font-sans antialiased selection:bg-cyan-500/25 selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Animated Loading Screen */}
          <LoadingScreen />

          {/* Floating Glass Navbar */}
          <Navbar />

          {/* Main page content */}
          <main className="flex-grow">{children}</main>

          {/* Site Footer */}
          <Footer />

          {/* Back to top floating trigger */}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
