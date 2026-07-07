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
  title: "Shiva Kumar | Geoinformatics & GeoAI Specialist Portfolio",
  description:
    "Professional portfolio of Shiva Kumar, a Geoinformatics student specializing in GIS, Remote Sensing, GeoAI, Machine Learning, and WebGIS applications. Winner of national hackathons.",
  keywords: [
    "Geoinformatics",
    "GIS Analyst",
    "Remote Sensing",
    "GeoAI",
    "Machine Learning",
    "Shiva Kumar",
    "Google Earth Engine",
    "WebGIS",
    "PostGIS",
    "Hyderabad GIS",
  ],
  authors: [{ name: "Shiva Kumar", url: "https://github.com/shivakumarenduri" }],
  creator: "Shiva Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiva-portfolio.vercel.app",
    title: "Shiva Kumar | Geoinformatics & GeoAI Portfolio",
    description:
      "Explore featured GIS, Remote Sensing, and machine learning research projects by Shiva Kumar.",
    siteName: "Shiva Kumar Geoinformatics Portfolio",
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
    <html lang="en" className="dark h-full scroll-smooth" style={{ colorScheme: "dark" }}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-full flex flex-col bg-[#030712] text-[#f0f4ff] font-sans antialiased selection:bg-cyan-500/30 selection:text-white noise-overlay`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Global animated Loading screen */}
          <LoadingScreen />

          {/* Sticky glass Header */}
          <Navbar />

          {/* Main page content container */}
          <main className="flex-grow pt-16">{children}</main>

          {/* Site footer */}
          <Footer />

          {/* Back to top bubble */}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
