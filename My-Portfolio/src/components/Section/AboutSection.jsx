import { useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

import SIGNATURE from "../../assets/images/signature.png";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  // Detect when section and timeline are in view
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });

  // Scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transform
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Element */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-10 left-1/2  transform -translate-x-1/2 w-40 h-40 md:w-70 md:h-70 rounded-full blur-3xl opacity-6 overflow-hidden ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-10 left-1/2  transform -translate-x-1/2 w-40 h-40 md:w-70 md:h-70 rounded-full blur-3xl opacity-6 overflow-hidden ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            About Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Get To <span className="text-blue-500 font-medium"> Know Me !</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-gray-200/70  border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3
                className={`text-2xl font-medium mb-6 ${
                  isDarkMode ? "text-blue-400" : "text-blue-700"
                }`}
              >
                Meet the Developer
              </h3>
              <p
                className={`text- leading-relaxed mb-6 py-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I’m a results-driven Full Stack Developer with hands-on
                experience in building & deploying scalable, and
                performance-optimized web applications. With a strong foundation
                in both frontend and backend development, I enjoy collaborating
                with teams to bring projects from concept to launch.
              </p>
              <p
                className={`text- leading-relaxed mb-6  py-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                My goal? To contribute to impactful projects where I can grow as
                a developer, solve meaningful problems, and build digital
                experiences that make people’s lives easier. Let’s connect if
                you're looking for someone who’s tech-savvy, team-oriented, and
                always ready to tackle the next challenge!
              </p>
            </motion.div>

            {/* Timeline of My Journey*/}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-medium mb-6 ml-2 text-gray-500">
                What are my Objectives
              </h3>
              <div className="grid gap-4">
                {PASSIONS.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-gray-800/30  hover:bg-gray-800/50"
                        : "bg-gray-200/70  hover:bg-gray-400/40"
                    } transition-all duration-100`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      }`}
                    >
                      <passion.icon size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <h4
                        className={`font-medium mb-1 ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {passion.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {passion.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Digital Signature */}
            <motion.div variants={itemVariants} className="text-center py-8">
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-2`}
              >
                Crafted with passion by
              </div>
              {/* <DigitalSignature /> */}
              <div className="flex justify-center">
                <img src={SIGNATURE} alt="Alex" className="w-30" />
              </div>
              <div className="text-lg font-medium text-blue-400 mt-1">
                Mayukh Ghosh
              </div>
            </motion.div>
          </motion.div>

          {/* Developer Journey Timeline */}
          <motion.div
            ref={timelineRef}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            variants={timelineVariants}
            className="relative"
          >
            <h3 className="text-2xl font-medium mb-8 text-center lg:text-left">
              My Learning Journey
            </h3>

            {/* Timeline Line */}
            <div
              className={`absolute left-8 top-16 bottom-0 w-px ${
                isDarkMode ? "bg-gray-700" : "bg-gray-300"
              }`}
            />

            {/* Timeline Steps */}
            <div className="space-y-8">
              {JOURNEY_STEPS.map((step, index) => (
                <motion.div
                  key={step.year}
                  variants={stepVariants}
                  whileHover={{ x: 4 }}
                  className="relative flex items-start space-x-6 group"
                >
                  {/* Dot */}
                  <div
                    className={`relative flex-shrink-0 z-10 w-16 h-16 rounded-full ${step.color}
                              flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon size={24} className="text-white" />
                  </div>

                  {/* Step Content */}
                  <div
                    className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                        : "bg-gray-200/70 border-gray-200 group-hover:border-gray-300 group-hover:bg-gray-400/40"
                    } backdrop-blur-sm `}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-medium">{step.title}</h4>
                      <span
                        className={`text-sm  px-3 py-1 rounded-full ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-400/30 text-gray-800"
                        }`}
                      >
                        {step.year}
                      </span>
                    </div>

                    <div
                      className={`text-sm font-medium mb-3 ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {step.company}
                    </div>

                    <p
                      className={`text-sm leading-relaxed ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-4"
          >
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Ready to bring your ideas to life?
            </p>

            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-200"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
