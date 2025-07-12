import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Section/Navbar";
import HeroSection from "./components/Section/HeroSection";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar/>
        <HeroSection/>
      </div>
    </ThemeProvider>
  );
};

export default App;
