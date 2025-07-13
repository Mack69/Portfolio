import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Section/HeroSection";
import SkillSection from "./components/Section/SkillSection";
import ProjectSection from "./components/Section/ProjectSection";
import AboutSection from "./components/Section/AboutSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectSection/>
        <AboutSection/>
      </div>
    </ThemeProvider>
  );
};

export default App;
