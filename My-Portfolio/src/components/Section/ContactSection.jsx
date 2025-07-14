import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { itemVariants, containerVariants } from "../../utils/helper";
import { useTheme } from "../../context/ThemeContext";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import TextInput from "../Input/TextInput";
import SuccessModel from "../SuccessModel";
import { Send } from "lucide-react";

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });

    // Auto hide success modal after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Element */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-6 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-6 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            Let's Connect{" "}
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light mb-6"
          >
            Get In <span className="text-blue-500 font-medium">Touch</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            Have a project in mind or want to collaborate? Fill out the form or
            connect with me directly.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-15 items-start">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className={`p-7 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-xl font-medium mb-8">Send Me a message</h3>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <TextInput
                    isDarkMode={isDarkMode}
                    label="Your Name"
                    value={form.name}
                    handleChange={(text) => handleChange("name", text)}
                  />
                  <TextInput
                    isDarkMode={isDarkMode}
                    label="Email Address"
                    value={form.email}
                    handleChange={(text) => handleChange("email", text)}
                  />
                </div>
                <TextInput
                  textarea={60}
                  isDarkMode={isDarkMode}
                  label="Your Message"
                  value={form.message}
                  handleChange={(text) => handleChange("message", text)}
                />

                <motion.button
                  disabled={isSubmitting}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-500 hover:bg-blue-700 disabled:bg-green-400 text-white py-4 text-sm 
                  rounded-xl uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl border mt-8 ${
                isDarkMode
                  ? "bg-green-500/10 border-green-500/20"
                  : "bg-green-50 border-green-200"
              }`}
            >
              <div className="flex items-center mb-2 space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium text-green-600 ">
                  Available for work
                </span>
              </div>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I,m currently available for Internship , freelance Projects and
                full time Job oppurtunities.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact & Social Links */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-medium mb-9">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-gray-800/30 hover:bg-gray-800/50"
                        : "bg-gray-200/50 hover:bg-gray-400/50"
                    } transition-easeIn duration-300`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      }`}
                    >
                      <info.icon size={20} className="text-blue-500" />
                    </div>

                    <div>
                      <div
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-700"
                        }`}
                      >
                        {info.type}
                      </div>
                      <div className="font-light text-sm">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-medium mb-8 relative ">Follow Me</h3>
              <div className="grid grid-cols-2 gap-5 text-sm ">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={
                      `flex items-center space-x-3 p-4 rounded-xl border transition-colors duration-300 ` +
                      (isDarkMode
                        ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                        : "bg-white/80 border-gray-200 hover:border-gray-300") +
                      ` ${social.bgColor} ${social.color}`
                    }
                  >
                    <social.icon size={20} className="text-blue-400" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className={`max-w-2xl mx-auto p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700"
                : "bg-gray-50/50 border-gray-200"
            }`}
          >
            <h3 className="text-xl font-medium mb-4">Prefer a quick call?</h3>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mb-6`}
            >
              Sometimes a conversation is worth a thousand messages. Feel free
              to schedule a call to discuss your project.
            </p>
            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full border font-medium transition-easeIn duration-300 ${
                isDarkMode
                  ? "border-gray-600 hover:border-blue-500 hover:text-blue-400"
                  : "border-gray-300 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              Schedule a Call
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <SuccessModel
        submitted={submitted}
        setSubmitted={setSubmitted}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};

export default ContactSection;
