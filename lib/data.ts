// ---------------------------------------------------------------------------
// Portfolio Data extracted directly from Anshuman Kushwaha's Resume
// ---------------------------------------------------------------------------

export const personalInfo = {
  name: "Anshuman Kushwaha",
  role: "Full-Stack Developer (MERN Stack) | Software Development Intern Candidate",
  heroHeading: "Hi, I'm Anshuman Kushwaha.",
  heroSubheading: "Full-Stack Developer (MERN) & Software Development Intern Candidate",
  heroDescription:
    "Third-year Computer Science student specializing in the MERN stack, with hands-on experience building and deploying 4+ production web applications and AI-integrated products.",
  introLong:
    "Third-year Computer Science student specializing in the MERN stack, with hands-on experience building and deploying full-stack web applications, including AI-integrated projects. Skilled in JavaScript, Python, and REST API development, with a track record of independently shipping 4+ production applications. Seeking a Software Development / Full-Stack Development internship.",
  about: [
    "I'm a third-year Computer Science student at AKTU University, Lucknow, specializing in the MERN stack (MongoDB, Express.js, React, Node.js) with strong foundation in CS fundamentals and clean code architecture.",
    "With a track record of independently shipping 4+ production-ready web applications, I build seamless full-stack applications with responsive frontends, secure JWT authentication, and intelligent AI features.",
    "I have gained hands-on industry experience as a MERN Stack Intern at SRDT Pvt. Ltd. and as a Python Full Stack Intern & Trainee, delivering full-stack features, building RESTful APIs, and collaborating in agile teams.",
    "I'm actively seeking a Software Development / Full-Stack Development internship where I can contribute to real-world products, solve meaningful challenges, and grow with a great engineering team.",
  ],
  location: "Lucknow, India",
  phone: "+91 9410447618",
  email: "anshumankushwaha2005@gmail.com",
  linkedin: "https://linkedin.com/in/anshuman-kushwaha-3a383240b",
  github: "https://github.com/anshumankushwaha-2005",
  resumeUrl: "/resume/Anshuman-Kushwaha-Resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "MERN & Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Next.js", "HTML5 / CSS3", "Chart.js"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication", "Socket.IO", "Python / Django", "SQL"],
  },
  {
    title: "CS Fundamentals",
    skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "OOP (Object-Oriented Programming)"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code", "npm"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem-Solving", "Analytical Thinking", "Debugging", "Communication", "Team Collaboration", "Time Management"],
  },
  {
    title: "Languages",
    skills: ["Hindi (Native / Fluent)", "English (Professional)"],
  },
];

export type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  points: string[];
  tech?: string[];
};

export const experiences: Experience[] = [
  {
    role: "MERN Stack Intern",
    company: "SRDT Pvt. Ltd.",
    type: "Internship",
    period: "June 2026",
    points: [
      "Built and deployed full-stack web applications using MongoDB, Express.js, React.js, and Node.js with responsive UI design.",
      "Developed RESTful APIs with comprehensive error handling and input validation, integrating frontend and backend seamlessly.",
      "Implemented JWT-based authentication and authorization for secure user management.",
      "Collaborated in an agile environment using Git/GitHub for version control and code reviews.",
      "Debugged and optimized application performance through iterative testing, profiling, and code reviews.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT", "Git"],
  },
  {
    role: "Python Full Stack Intern & Trainee",
    company: "Python Full Stack Training Program",
    type: "Internship & Trainee",
    period: "September 2025",
    points: [
      "Gained hands-on experience in full-stack Python web development using the Django framework.",
      "Built dynamic web applications combining HTML, CSS, and JavaScript frontends with Python backends.",
      "Implemented CRUD operations and database integration across multiple application features.",
      "Contributed to real-world projects, strengthening debugging and problem-solving skills.",
    ],
    tech: ["Python", "Django", "JavaScript", "HTML5", "CSS3", "SQL", "CRUD"],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export const educationList: Education[] = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "AKTU University, Lucknow",
    period: "2023 – Present",
    details: "Third-year Computer Science student specializing in Full-Stack MERN Development & Software Engineering.",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "CBSE / State Board",
    period: "Completed",
    details: "Score: 70.8% with focus on Mathematics & Sciences.",
  },
  {
    degree: "Secondary School (Class X)",
    institution: "CBSE / State Board",
    period: "Completed",
    details: "Score: 84.5% with strong academic distinction.",
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageSrc?: string;
};

export const projects: Project[] = [
  {
    id: "nutri-ai",
    name: "NutriAI",
    tagline: "AI-Powered Nutrition & Fitness Tracker",
    description:
      "A full-stack nutrition tracking application that allows users to log meals, monitor macronutrient intake, and receive personalized AI diet and workout plans based on their fitness goals.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Chart.js", "Groq AI"],
    features: [
      "Built a full-stack nutrition tracking app for logging meals and monitoring macronutrient intake",
      "Integrated AI to generate personalized diet and exercise recommendations based on user fitness goals",
      "Designed a responsive React frontend with Chart.js data visualization and a scalable Node.js/MongoDB backend",
    ],
    liveUrl: "https://nutri-ai-gray-chi.vercel.app",
    githubUrl: "https://github.com/anshumankushwaha-2005",
    imageSrc: "/projects/nutri-ai.jpg",
  },
  {
    id: "codepilot",
    name: "Codepilot",
    tagline: "AI-Powered Code Assistant Platform",
    description:
      "A full-stack MERN platform built to help developers explore, comprehend, and improve repositories with automated AI code analysis and intelligent fix suggestions.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "AI Integration", "Vercel"],
    features: [
      "Built a full-stack MERN application to help developers navigate and understand codebases using AI-assisted analysis",
      "Implemented AI-powered repository analysis and code correction with intelligent fix suggestions",
      "Designed an interactive React frontend and a Node.js/Express + MongoDB backend with RESTful APIs",
      "Deployed to production on Vercel",
    ],
    liveUrl: "https://github.com/anshumankushwaha-2005",
    githubUrl: "https://github.com/anshumankushwaha-2005",
    imageSrc: "/projects/codepilot.jpg",
  },
  {
    id: "credlink",
    name: "Credlink",
    tagline: "Digital Credit Ledger with NLP Voice Interface",
    description:
      "A digital credit/lending ledger built for merchants to log and track credits, featuring an NLP-powered hands-free voice interface for quick query and record updates.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "NLP Voice", "REST APIs", "Vercel"],
    features: [
      "Built a full-stack MERN application for digitally tracking and managing credit/lending transactions",
      "Built an NLP-powered voice interface enabling merchants to log and query transactions hands-free via voice input and voice response",
      "Developed an intuitive React ledger UI and a secure Node.js/Express + MongoDB REST API backend",
      "Deployed to production on Vercel",
    ],
    liveUrl: "https://credlink-six.vercel.app",
    githubUrl: "https://github.com/anshumankushwaha-2005/Credlink",
    imageSrc: "/projects/credlink.jpg",
  },
];

export const achievements = [
  "Completed Python Full Stack Internship & Trainee program with hands-on project experience",
  "Independently built and deployed 4+ full-stack MERN applications with AI integration",
  "Proficient across full web stack: Frontend, Backend, Database, Authentication & Cloud Deployment",
  "Strong foundation in Computer Science fundamentals: DSA, DBMS, OS, Computer Networks & OOP",
];

export const valueProps = [
  "Shipped 4+ production-ready full-stack applications independently",
  "Real internship experience in MERN stack development & API optimization",
  "Hands-on expertise integrating AI & NLP voice capabilities into web products",
  "Solid CS fundamentals: Data Structures, Algorithms, DBMS, OOP & Networks",
  "Clean, maintainable code following modern agile and Git workflows",
  "Fast learner with strong problem-solving mindset and positive work ethic",
];
