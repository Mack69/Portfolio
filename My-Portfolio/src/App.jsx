import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Section/Navbar";
import HeroSection from "./components/Section/HeroSection";
import SkillSection from "./components/Section/SkillSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar/>
        <HeroSection/>
        <SkillSection/>
      </div>
    </ThemeProvider>
  );
};

export default App;
