import { delay, motion, stagger, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { containerVariants, itemVariants } from "../../utils/helper";

import Profile_Pic from "../../assets/images/User_dp.png";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        <div className=" absolute insert-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute top-40 left-1/2  transform -translate-x-1/2 w-40 h-40 md:w-70 md:h-70 rounded-full blur-2xl opacity-5 overflow-hidden ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute bottom-40 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-80 md:h-80 rounded-full blur-3xl opacity-5 overflow-hidden 
              ${isDarkMode ? "bg-purple-500" : "bg-purple-400"}`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Mobile Layout – Centered */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Profile Image */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-32 h-32 rounded-2xl overflow-hidden border-4 ${
                      isDarkMode ? "border-gray-800" : "border-gray-300"
                    } shadow-2xl`}
                  >
                    <img
                      src={Profile_Pic}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                  {/* Decorative ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-3xl border border-blue-500/20"
                  />
                </div>
              </motion.div>

              {/* Content – Mobile */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-6`}
              >
                Software Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-7 leading-tight"
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Turning Ideas into Responsive
                </span>
                <br />
                <span className="text-3xl font-bold text-blue-500 leading-tight ml-2">
                  Web Experiences
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                I’m a results-driven Full Stack Developer with hands-on
                experience in building and deploying scalable, responsive and
                performance-optimized web applications.
              </motion.p>

              {/* CTA Buttons – Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-800 text-white px-9 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "hover:bg-gray-800 hover:text-white text-gray-400"
                      : "hover:bg-gray-200 hover:text-gray-900 text-gray-700"
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-mec`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links – Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-7 mb-8"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/Mack69" },
                  {
                    icon: FiLinkedin,
                    href: "https://www.linkedin.com/in/mayukh-ghosh-2b5705224/",
                  },
                  { icon: Mail, href: "mailto:ghoshmayukh.janai@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-900"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Tech Stack – Mobile */}
            </motion.div>
          </div>

          {/* Desktop Layout – Split */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
            {/* Left Column – Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left ml-8"
            >
              <motion.div
                variants={textVariants}
                className={`text-xl uppercase tracking-widest font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-4`}
              >
                Software Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl max-lg:6xl  font-light mb-8 leading-tight"
              >
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Turning Ideas into
                </span>
                <br />
                <span className="text-blue-500 font-medium">
                  Responsive Web
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Experiences
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                } mb-12 font-light leading relaxed max-w-lg`}
              >
                I’m a results-driven Full Stack Developer with hands-on
                experience in building and deploying scalable, responsive and
                performance-optimized web applications.
              </motion.p>

              {/* CTA Buttons desktop */}
              <motion.div variants={itemVariants} className="flex gap-6 mb-8">
                {/* View Work Button */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("projects")}
                  className=" bg-blue-500 hover:bg-blue-700 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>

                {/* Get in Touch Button */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 hover:bg-gray-800 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 hover:bg-gray-200 text-gray-700"
                  } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links – Desktop Only */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-7 mb-8"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/Mack69" },
                  {
                    icon: FiLinkedin,
                    href: "https://www.linkedin.com/in/mayukh-ghosh-2b5705224/",
                  },
                  { icon: Mail, href: "mailto:ghoshmayukh.janai@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-900"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right coloumn - Profile Img */}
            <motion.div
              initial="hidden"
              animate="visible"
              vartiants={imageVariants}
              className="flex justify-center lg:justify-end mr-6"
            >
              <div className="relative">
                {/* Tech Stack – Desktop */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-6 text-xs uppercase tracking-widest absolute -top-25 -left-30"
                ></motion.div>

                {/* Profile Card – Desktop Only */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`hidden md:flex w-80 h-96 rounded-3xl overflow-hidden border-4 ${
                    isDarkMode ? "border-gray-800" : "border-gray-300"
                  } shadow-2xl`}
                >
                  <img
                    src={Profile_Pic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative Elements */}
                {/* Clockwise Rotation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-4xl border border-blue-500/20 "
                />
                {/* Counter-Clockwise Rotation */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 rounded-4xl border border-purple-500/20"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 "
        >
          <ArrowDown
            size={20}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
