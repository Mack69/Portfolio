import { useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE_STEPS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const ExperienceSection = () => {
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

  const stepVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? 100 : -100,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } `}
    >
      {/* Background Element */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-6 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-6 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header*/}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          {/* Technical Expertise */}
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Featured Experience
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light mb-6"
          >
            Professional{" "}
            <span className="text-blue-500 font-medium">Experiences</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            Explore how my experience in diverse environments has shaped my
            expertise in delivering results and solving complex challenges.
          </motion.p>
        </motion.div>

        {/* Developer Journey Timeline */}
        <motion.div
          ref={timelineRef}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          variants={timelineVariants}
          className="relative max-w-8xl mx-auto py-12"
        >
          {/* Timeline Line: Centered */}
          <div
            className={`absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2`}
          />

          {/* Timeline Steps: Alternating Sides */}
          <div className="space-y-16">
            {EXPERIENCE_STEPS.map((step, index) => (
              <motion.div
                key={step.year}
                variants={stepVariants(index)}
                whileHover={{ x: index % 2 === 0 ? 8 : -8 }}
                className={`relative flex flex-col items-center w-full max-w-5xl mx-auto 
                ${
                  index % 2 === 0
                    ? "md:justify-start md:flex-row-reverse"
                    : "md:justify-start md:flex-row"
                }`}
              >
                {/* Dot: Centered on Line */}
                <div
                  className={`relative mb-4 w-14 h-14 rounded-full ${step.color} flex items-center justify-center z-10 
                              md:absolute md:left-1/2 md:top-4 md:-translate-x-1/2`}
                >
                  <step.icon size={25} className="text-white" />
                </div>

                {/* Step Content: Alternates Left/Right */}
                <div
                  className={`w-full md:w-5/12 p-6 rounded-xl border transition-all duration-300 backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800/70"
                      : "bg-gray-200/60 border-gray-200 hover:border-gray-200 hover:bg-gray-400/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">{step.title}</h4>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
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
    </section>
  );
};

export default ExperienceSection;
