import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import proj1 from "../assets/images/harmonize.jpg";

export const SKILLS_CATEGORY = [
  {
    title: "Programming languages",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "Java", level: 95, color: "bg-blue-500" },
      { name: "JavaScript", level: 90, color: "bg-blue-600" },
      { name: "Python", level: 80, color: "bg-pink-800/80" },
      { name: "C", level: 70, color: "bg-cyan-500" },
      { name: "SQL", level: 80, color: "bg-pink-500" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-400" },
      { name: "React.js", level: 85, color: "bg-yellow-500" },
      { name: "Tailwind CSS", level: 80, color: "bg-pink-600" },
      { name: "Framer Motion", level: 92, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-600" },
      { name: "MongoDB", level: 85, color: "bg-blue-700" },
      { name: "Firebase", level: 78, color: "bg-yellow-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-green-600" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-green-700" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-green-400" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Sass",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "Figma",
  "Adobe XD",
  "Notion",
  "Slack",
];

export const STATS = [
  { number: "7+", label: "Projects Completed" },
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Harmonize",
    description:
      "A music streaming android application built on the concept of native development using Kotlin.",
    image: proj1,
    tags: ["Kotlin", "Firebase", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Android Dev",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image: proj1,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image: proj1,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image: proj1,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with coding.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Internship",
    company: "TechStart Inc.",
    description:
      "Joined as a frontend intern, working with React and learning modern development practices. Contributed to real-world projects.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Computer Science Degree",
    company: "University of Technology",
    description:
      "Started my undergraduate studies in Computer Science, deepening my understanding of algorithms, data structures, and software engineering.",
    icon: GraduationCap,
    color: "bg-yellow-500",
  },
  {
    year: "2023",
    title: "Hackathon Winner",
    company: "TechFest",
    description:
      "Led a team to victory in a national hackathon, building an innovative solution under tight deadlines and presenting to industry experts.",
    icon: Award,
    color: "bg-pink-500",
  },
  {
    year: "2024",
    title: "Launched First Product",
    company: "StartupX",
    description:
      "Developed and launched my first SaaS product, handling everything from design to deployment and customer support.",
    icon: Rocket,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com",
    color: "hover:text-gray-200",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-600/30",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://twitter.com",
    color: "hover:text-sky-500",
    bgColor: "hover:bg-sky-500/30",
  },
  {
    name: "Email",
    icon: Mail,
    url: "ghoshmayukh.hooghly@gmail.com",
    color: "hover:text-green-600",
    bgColor: "hover:bg-green-400/40",
  },
];

export const CONTACT_INFO = [
  {
    type: "Location",
    icon: MapPin,
    value: "Bengaluru, India",
  },
  {
    type: "Email",
    icon: Mail,
    value: "ghoshmayukh.hooghly@gmail.com",
  },
  {
    type: "Phone",
    icon: Phone,
    value: "+91 8101708638",
  },
];
