import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Section/HeroSection";
import SkillSection from "./components/Section/SkillSection";
import ProjectSection from "./components/Section/ProjectSection";
import AboutSection from "./components/Section/AboutSection";
import ContactSection from "./components/Section/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectSection/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default App;
