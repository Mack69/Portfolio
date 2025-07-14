import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Section/HeroSection";
import SkillSection from "./components/Section/SkillSection";
import ProjectSection from "./components/Section/ProjectSection";
import AboutSection from "./components/Section/AboutSection";
import ContactSection from "./components/Section/ContactSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectSection/>
        <AboutSection/>
        <ContactSection/>
      </div>
    </ThemeProvider>
  );
};

export default App;
