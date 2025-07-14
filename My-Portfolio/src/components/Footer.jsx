import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Mail, ArrowUp } from "lucide-react";
import { containerVariants, itemVariants } from "../utils/helper";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/",
      color: "hover:text-violet-500",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com/",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://twitter.com/",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your@email.com",
      color: "hover:text-green-600",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const AnimatedGradientLine = ({ isDarkMode }) => (
    <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
      <motion.div
        className={`h-px bg-gradient-to-r ${
          isDarkMode
            ? "from-transparent via-blue-300 to-transparent"
            : "from-transparent via-blue-600 to-transparent"
        }`}
        initial={{ width: "0%", opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-0 h-px w-32 bg-gradient-to-r ${
          isDarkMode
            ? "from-blue-400 via-purple-500 to-blue-400"
            : "from-blue-500 via-purple-600 to-blue-500"
        } blur-sm`}
        animate={{
          x: ["-50%", "calc(100vw + 50%)"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 9,
            ease: "linear",
            delay: 1,
          },
        }}
      />
    </div>
  );

  return (
    <footer
      ref={footerRef}
      className={`relative py-8 px-4 text-center  ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <AnimatedGradientLine />

      {/* Background elements */}
      <motion.div
        style={{ y: scrollY }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div
          className={`absolute top-30 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-0 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-30 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-0 ${
            isDarkMode ? "bg-purple-600" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <motion.footer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 py-12 max-w-6xl mx-auto"
      >
        {/* Name and Tagline */}
        <motion.div variants={itemVariants}>
          <div className="text-2xl font-semibold mb-4">Mayukh Ghosh</div>
          <div className="text-sm opacity-70 mb-3">
            Crafting digital experiences with passion, precision, and a touch of
            magic.
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mt-5"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className={`p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${social.color}`}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider and Heart */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-6 mt-6"
        >
          <div className="h-px w-18 bg-gray-400/50 " />
          <span className="text-red-600/80 text-lg">
            <FaHeart size={18} className="inline" />
          </span>
          <div className="h-px w-18 bg-gray-400/50" />
        </motion.div>

        {/* Copyright */}
        <motion.div variants={itemVariants} className="text-sm opacity-60 mb-3">
          © 2025 Mayukh Ghosh- Portfolio. All rights reserved.
        </motion.div>
        <motion.div variants={itemVariants} className="text-xs opacity-40">
          Built with React & Framer Motion · Designed with care
        </motion.div>
      </motion.footer>

      {/* Back to Top Button */}
      <motion.div variants={itemVariants}>
        <motion.button
          onClick={scrollToTop}
          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
      ${
        isDarkMode
          ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white"
          : "bg-gray-100/50 hover:bg-gray-300/70 text-gray-600 hover:text-gray-900"
      }
      backdrop-blur-sm border ${
        isDarkMode ? "border-gray-700" : "border-gray-300"
      }`}
          whileHover={{
            y: -2,
            scale: 1.05,
            boxShadow: isDarkMode
              ? "0 10px 25px rgba(59, 130, 246, 0.15)"
              : "0 10px 25px rgba(59, 130, 246, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={16} />
          <span>Back to top</span>
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;
