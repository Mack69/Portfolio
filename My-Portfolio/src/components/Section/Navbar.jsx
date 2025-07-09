import React , {useState} from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  // Example usage of useScroll and useTheme
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [ isMenuopen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
        style={{opacity:1}}
        className={`fixed top-0 w-full z-50 px-6 py-4 
        ${isDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"} 
        backdrop-blur-md border-b 
        ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
          <Code2 size={24} className="text-blue-600"/>{" "}
          <span className={`text-lg ml-1  ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}>Mayukh Ghosh</span>
        </motion.div>

        {/* Desktop navigation list */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Skills", "Experience", "Projects", "About", "Contact"].map(
            (item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-blue-500"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item}
              </motion.button>
            )
          )}

            <motion.button
                whileHover={{scale :1.05}}
                whileTap={{scale:0.95}}
                onClick={() => toggleDarkMode(isDarkMode ? "Light" : "dark")}
                className={`p-2 rounded-full transition-colors ${
                    isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
            >
                {isDarkMode ? <Sun size={18} />: <Moon size={18}/>}
            </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
