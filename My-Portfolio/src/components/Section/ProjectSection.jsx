import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Zap, Users } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import ProjectCard from "../ProjectCard";

const ProjectSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Elements – Desktop Only */}
      {/* <div className="absolute inset-0 overflow:hidden">
        <div
          className={`absolute top-10 left-1/2  transform -translate-x-1/2 w-40 h-40 md:w-70 md:h-70 rounded-full blur-1xl opacity-2 overflow:hidden
            ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`}
        />
        <div
          className={`absolute bottom-10 left-1/2  transform -translate-x-1/2 w-40 h-40 md:w-70 md:h-70 rounded-full blur-1xl opacity-2 overflow-hidden
            ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`}
        />
      </div> */}

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
            Featured Work
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light mb-6"
          >
            Recent <span className="text-blue-500 font-medium">Projects</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            A collection of Projects that showcase my expertise in building
            modern web applications and solving complex problems.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div>
              <ProjectCard
                key={project.id} project={project} index={index} isDarkMode={isDarkMode}
              />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectSection;
