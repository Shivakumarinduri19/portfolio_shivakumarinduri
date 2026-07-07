import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Hackathons from "@/components/sections/Hackathons";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Me Section */}
      <About />

      {/* 3. Skills Dashboard Section */}
      <Skills />

      {/* 4. Featured Projects Section */}
      <Projects />

      {/* 6. Hackathons & Competitions Section */}
      <Hackathons />

      {/* 7. Certifications Section */}
      <Certifications />

      {/* 8. Achievements Section */}
      <Achievements />

      {/* 9. Resume Section */}
      <Resume />

      {/* 10. Contact Section */}
      <Contact />

      {/* 11. Blog Preview Section */}
      <Blog />
    </div>
  );
}
