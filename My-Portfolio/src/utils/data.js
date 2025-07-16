import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Heart,
  Coffee,
  BookOpen,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
  Book,
  School,
  BookOpenCheck,
  UniversityIcon,
} from "lucide-react";
import { FaCubes } from "react-icons/fa";
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

import proj1 from "../assets/images/harmonize.jpg";
import proj2 from "../assets/images/SocioSphere.png";
import proj3 from "../assets/images/to-do list.png";
import proj4 from "../assets/images/weather app.png";
import proj5 from "../assets/images/currency app.png";
import proj6 from "../assets/images/amazon-clone.png";

export const SKILLS_CATEGORY = [
  {
    title: "Programming languages",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "Java", level: 95, color: "bg-emerald-500" },
      { name: "JavaScript", level: 85, color: "bg-yellow-500" },
      { name: "Python", level: 80, color: "bg-rose-600" },
      { name: "C", level: 70, color: "bg-sky-600" },
      { name: "SQL", level: 80, color: "bg-purple-600" },
    ],
  },
  {
    title: "Frontend ",
    icon: FaCubes,
    description: "Crafting responsive user interfaces with modern frameworks.",
    skills: [
      { name: "React.js", level: 85, color: "bg-red-700" },
      { name: "Next.js", level: 85, color: "bg-orange-300" },
      { name: "Tailwind CSS", level: 80, color: "bg-blue-800" },
      { name: "Framer Motion", level: 92, color: "bg-lime-600" },
      { name: "Aceternity", level: 92, color: "bg-orange-600" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description:
      "Engineering scalable, efficient server-side architectures and APIs.",
    skills: [
      { name: "Node.js", level: 90, color: "bg-cyan-500" },
      { name: "Express.js", level: 88, color: "bg-fuchsia-500" },
      { name: "REST API", level: 90, color: "bg-green-600" },
      { name: "Microservices", level: 95, color: "bg-pink-600" },
      { name: "Postman", level: 75, color: "bg-blue-600" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 85, color: "bg-violet-800" },
      { name: "MySQL", level: 85, color: "bg-purple-700" },
      { name: "Firebase", level: 80, color: "bg-violet-500" },
      { name: "PostgreSQL", level: 75, color: "bg-violet-400" },
    ],
  },
  // {
  //   title: "Cloud Services",
  //   icon: Cloud,
  //   description: "Deploying and scaling applications",
  //   skills: [
  //     { name: "AWS EC2", level: 78, color: "bg-orange-600" },
  //     { name: "AWS S3", level: 90, color: "bg-green-400" },
  //     { name: "AWS Cognito", level: 95, color: "bg-orange-700" },
  //     { name: "AWS RDS", level: 75, color: "bg-purple-600" },
  //     { name: "AWS Lambda", level: 75, color: "bg-purple-600" },
  //     { name: "AWS VPC", level: 75, color: "bg-purple-600" },
  //   ],
  // },
  {
    title: "Deployment",
    icon: Cloud,
    description: "Deploying and scaling applications through cloud services",
    skills: [
      { name: "GitHub", level: 85, color: "bg-red-700" },
      { name: "Vercel", level: 80, color: "bg-red-500" },
      { name: "AWS Services", level: 75, color: "bg-rose-400" },
      { name: "CI/CD", level: 70, color: "bg-pink-400" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Book,
    description:
      "Collaborating and communicating for team and project success.",
    skills: [
      { name: "Agile Development", level: 85, color: "bg-green-600" },
      { name: "Problem Solving", level: 80, color: "bg-emerald-400" },
      { name: "Team Collaboration", level: 85, color: "bg-sky-500" },
      { name: "Project Management", level: 95, color: "bg-yellow-500" },
    ],
  },
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
    githubUrl: "https://github.com/Mack69/Harmonize--A-Music-Streaming-App",
    featured: false,
    category: "Android Dev",
  },
  {
    id: 3,
    title: "SocioSphere",
    description:
      "A Smart Society Management System for enhancing the management of residential societies or communities.",
    image: proj2,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mack69/SocioSphere",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "To-Do List",
    description:
      "Organize daily tasks efficiently with a simple, responsive and intuitive to-do list application.",
    image: proj3,
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mack69/Project-To-Do-List",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Weather Application",
    description:
      "Check current weather conditions and forecasts for any location with a clean, interactive application.",
    image: proj4,
    tags: ["HTML5", "CSS3", "JavaScript", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mack69/Project-Weather-App",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Currency Converter",
    description:
      "Instantly convert between currencies with real-time exchange rates in a user-friendly interface.",
    image: proj5,
    tags: ["HTML5", "CSS3", "JavaScript", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mack69/Project-Currency-Converter",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Amazone Clone",
    description:
      "A full-stack e-commerce web application, built with frontend technologies to replicate core functionalities.",
    image: proj6,
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://mack69.github.io/Amazon-Clone/",
    githubUrl: "https://github.com/Mack69/Amazon-Clone",
    featured: false,
    category: "Full Stack",
  },
];

export const EXPERIENCE_STEPS = [
  {
    year: "Apr 25 - May 25 ",
    title: "Software Developer Intern",
    company: "BlueStocks.in",
    description:
      "Developed and maintained a stock market-focused web platform that streamlined IPO listings for newly registered companies, enhancing accessibility for investors. ",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    year: "Jun 24 - Aug 24",
    title: "Software Developer Intern",
    company: "Afame Technologies",
    description:
      "Developed and maintained scalable web applications using modern tech stacks i.e. React.js, Node.js, and contributing to the company’s core product suite. ",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "Jun 23 - Jul 23",
    title: "Frontend Web Developer Intern",
    company: "TechnoHacks EduTech Pvt Ltd.",
    description:
      "Developed responsive static websites like e-commerce stores, weather apps, etc. using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility.",
    icon: Briefcase,
    color: "bg-yellow-500",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2019 - 2021",
    title: "Methodist School",
    company: "Higher Secondary (ISC)",
    description:
      "Focused on building strong fundamentals in science and mathematics, and took an active interest in computers and the basics of programming.",
    icon: BookOpenCheck,
    color: "bg-blue-500",
  },
  {
    year: "2021- 2024",
    title: "Kristu Jayanti Deemed University",
    company: "Bachelor of Computer Applications (BCA)",
    description:
      "Learned core computer science subjects and got hands-on practice with coding, making websites and small software projects as part of the coursework.",
    icon: School,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Ideathon Winner",
    company: "Synchronize TechFest",
    description:
      "Participated in a college tech competitions and, as a team, design a simple but problem solving application, winning first prize for innovation & idea presentation.",
    icon: Award,
    color: "bg-pink-500",
  },
  {
    year: "2024",
    title: "Computer Science Degree",
    company: "Kristu Jayanti University",
    description:
      "Graduated with a computer science degree, consolidating knowledge in algorithms, databases, and software design through projects and exams.",
    icon: GraduationCap,
    color: "bg-yellow-500",
  },

  {
    year: "2024- 2026",
    title: "VIT Bhopal University",
    company: "Masters of Computer Application (MCA)",
    description:
      "Started a master’s program to learn advanced topics in technology, with a focus on practical skills for building and managing software and applications.",
    icon: UniversityIcon,
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
    url: "https://github.com/Mack69",
    color: "hover:text-gray-200",
    bgColor: "hover:bg-violet-500/60",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/mayukh-ghosh-2b5705224/",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-500/50",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: " https://twitter.com/MayukhG11467943 ",
    color: "hover:text-sky-500",
    bgColor: "hover:bg-sky-400/60",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    url: "https://instagram.com/mayukh_ghosh108",
    color: "hover:text-pink-300",
    bgColor: "hover:bg-pink-500/85",
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
