import { Achievement, Certification, Education, Experience, Project, ProjectCategory, Publication, SkillCategory } from "@/src/types";

export const heroData = {
    name: "Muhammad Ali",
    titleVariants: [
        "Software Engineer",
        "AI Developer",
        "Flutter Specialist",
        "App Developer",
    ],
    pitch:
        "Leveraging technical skills in software engineering and AI to develop innovative solutions and contribute to impactful projects in a dynamic environment.",
    phone: "03109766879",
    email: "aliawan1170@gmail.com",
    city: "Rawalpindi",
    linkedin: "https://www.linkedin.com/in/muhammad-ali-b64386264/",
    resumeUrl: "/assets/Muhammad%20Ali%20Resume.pdf",
    profileImage: "/assets/dp.jpg",
};

export const skillCategories: SkillCategory[] = [
    {
        id: "languages-frameworks",
        name: "Languages & Frameworks",
        skills: [
            "Python",
            "Java",
            "C++",
            "PHP",
            "Dart",
            "Flutter",
            "React",
            "Next.js",
            "HTML",
            "CSS",
            "LaTeX",
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
    {
        id: "ai-ml",
        name: "AI/ML & Data Science",
        skills: [
            "TensorFlow",
            "AI Model Training",
            "RAG",
            "LLM (Llama)",
            "YOLO",
            "Hugging Face",
            "Google Colab",
            "Kaggle",
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
    {
        id: "databases-backend",
        name: "Databases & Backend",
        skills: [
            "SQL",
            "NoSQL",
            "MongoDB",
            "Firebase",
            "Entity Framework",
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
    {
        id: "devops-tools",
        name: "DevOps & Tools",
        skills: [
            "Docker",
            "AWS",
            "Ollama",
            "Odoo",
            "Git",
            "StarUML",
            "Cisco",
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
    {
        id: "web-design",
        name: "Web & Design",
        skills: ["Wireframing", "Technical Documentation"].map((name) => ({
            id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            name,
        })),
    },
    {
        id: "seo-marketing",
        name: "SEO & Marketing",
        skills: [
            "Semrush",
            "HubSpot",
            "SEO Foundations",
            "Organic Marketing",
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
];

export const experiences: Experience[] = [
    {
        id: "lads-technology-seo",
        company: "Lads Technology",
        position: "SEO Specialist",
        period: "Nov 2025 – Present",
        description:
            "Driving organic growth, technical SEO, and analytics‑driven strategies for digital products.",
        technologies: ["SEO", "Semrush", "HubSpot", "Analytics"],
        current: true,
    },
    {
        id: "inotech-ai-intern",
        company: "InoTech Solutions",
        position: "AI Intern",
        period: "Jun 2025 – Oct 2025",
        description:
            "Working on AI solutions using Python, model training, RAG, LLMs, Docker, Ollama, Meta Llama models, YOLO, AWS, and Odoo.",
        technologies: [
            "Python",
            "Model Training",
            "RAG",
            "LLM",
            "Docker",
            "Ollama",
            "YOLO",
            "AWS",
            "Odoo",
        ],
        current: false,
    },
    {
        id: "ispr-winter-intern",
        company: "ISPR",
        position: "Winter Intern (Media)",
        period: "Jan 2025 – Feb 2025",
        description:
            "Media‑focused internship; served as class representative (CR) for the entire Rawalpindi batch.",
        technologies: ["Media", "Coordination", "Communication"],
        certificateUrl: "/assets/ISPR Certificate.jpg",
        current: false,
    },
    {
        id: "tech-net-cloud",
        company: "Tech Net Cloud",
        position: "Web Developer (Remote)",
        period: "Jun 2024 – Sep 2024",
        description:
            "Worked on web‑based projects including personal portfolio websites using modern web stacks.",
        technologies: ["Next.js", "React", "HTML", "CSS"],
        certificateUrl: "/assets/TECHNET CLOUD.pdf",
        current: false,
    },
    {
        id: "sco-intern",
        company: "SCO 62 CSB Rawalpindi",
        position: "Telecommunication Intern",
        period: "Jul 2024 – Aug 2024",
        description:
            "Observed Huawei telecommunication systems and workflows, gaining exposure to large‑scale network operations.",
        technologies: ["Telecom", "Huawei Systems"],
        certificateUrl: "/assets/SCO Certificate.jpg",
        current: false,
    },
    {
        id: "dha-multan",
        company: "DHA Multan",
        position: "Application Developer Intern (Flutter)",
        period: "Jun 2023 – Oct 2023",
        description:
            "Developed and maintained Flutter‑based internal applications for DHA Multan.",
        technologies: ["Flutter", "Firebase"],
        certificateUrl: "/assets/DHA Multan.jpg",
        current: false,
    },
    {
        id: "kaps-academy",
        company: "KAPS Academy",
        position: "Computer Science Teacher",
        period: "Sep 2024 – Dec 2024",
        description:
            "Taught Computer Science to classes 9–12, focusing on programming fundamentals and problem solving.",
        technologies: ["Teaching", "CS Curriculum"],
        current: false,
    },
];

export const projects: Project[] = [
    // Flagship AI + Mobile project (IEEE paper)
    {
        id: "signease",
        title: "SIGNEASE – AI Voice & Sign Recognition App",
        description:
            "Flagship AI-based mobile application for voice and sign recognition, accepted as an IEEE research paper.",
        image: "/assets/dummy/machine_learning_projects.webp",
        technologies: ["Flutter", "Python", "AI", "Firebase", "TensorFlow"],
        category: "ai-ml",
        isFeatured: true,
    },
    // Final Year Project
    {
        id: "signlang-app",
        title: "SignLang App – AI Sign Language Translator",
        description:
            "Final year project (3rd position in Open House): an AI-powered sign language translation app built with Flutter, using ASL dataset and MobileNetV4 for real-time recognition.",
        image: "/assets/dummy/mobileapps.webp",
        technologies: ["Flutter", "Python", "TensorFlow", "MobileNetV4", "Firebase"],
        category: "mobile",
        isFeatured: false,
    },
    // Mobile apps
    {
        id: "carx-app",
        title: "CarX – Car Booking Application",
        description:
            "End-to-end vehicle booking platform with authentication, booking management, and real-time status tracking.",
        image: "/assets/dummy/mobileapps.webp",
        technologies: ["Flutter", "Firebase", "REST APIs"],
        category: "mobile",
        isFeatured: false,
    },
    {
        id: "jobquest-app",
        title: "JobQuest – Job Search Platform",
        description:
            "Job search and recommendation app helping users discover and apply to relevant opportunities seamlessly.",
        image: "/assets/dummy/mobileapps.webp",
        technologies: ["Flutter", "Firebase", "AI", "Recommendation Systems"],
        category: "mobile",
        isFeatured: false,
    },
    {
        id: "addspotter-app",
        title: "AddSpotter – Billboard Posting & Tracking",
        description:
            "Location-based billboard posting and tracking app for planning and monitoring advertising campaigns.",
        image: "/assets/dummy/mobileapps.webp",
        technologies: ["Flutter", "Maps SDK", "Geo-location"],
        category: "mobile",
        isFeatured: false,
    },
    {
        id: "tictactoe-app",
        title: "TicTacToe Game",
        description:
            "Interactive two-player TicTacToe game with a clean UI and encapsulated game logic.",
        image: "/assets/dummy/mobileapps.webp",
        technologies: ["Flutter"],
        category: "mobile",
        isFeatured: false,
    },
    {
        id: "chatapp-app",
        title: "ChatApp – Real-time Messaging",
        description:
            "Real-time chat application enabling communication between users using Firebase as backend.",
        image: "/assets/dummy/mobileapps.webp",
        technologies: ["Flutter", "Firebase", "Realtime Database"],
        category: "mobile",
        isFeatured: false,
    },
    {
        id: "foodbridge-app",
        title: "FoodBridge – Food Redistribution Platform (In Progress)",
        description:
            "In-progress platform aimed at reducing food waste by connecting donors with nearby recipients.",
        image: "/assets/dummy/mobileapps.webp",
        technologies: ["Flutter", "Firebase", "Maps SDK"],
        category: "mobile",
        isFeatured: false,
    },
    // Web and academic projects from original list
    {
        id: "journal-website",
        title: "Journal Website",
        description: "Academic journal website built with Next.js.",
        image: "/assets/dummy/Web-Development-Projects.png",
        technologies: ["Next.js", "React", "TypeScript"],
        category: "web",
        isFeatured: false,
    },
    {
        id: "dynamic-portfolio-php",
        title: "Dynamic Portfolio (PHP)",
        description: "Dynamic personal portfolio built with PHP and MySQL.",
        image: "/assets/dummy/Web-Development-Projects.png",
        technologies: ["PHP", "MySQL", "HTML", "CSS"],
        category: "web",
        isFeatured: false,
    },
    {
        id: "todo-react",
        title: "To-Do List (React)",
        description: "Modern to-do list application using React.",
        image: "/assets/dummy/Web-Development-Projects.png",
        technologies: ["React", "TypeScript"],
        category: "web",
        isFeatured: false,
    },
    {
        id: "student-management",
        title: "Student Management System",
        description: "CLI-based student management system in C++.",
        image: "/assets/dummy/acadamic projects.jpg",
        technologies: ["C++"],
        category: "academic",
        isFeatured: false,
    },
    {
        id: "train-reservation",
        title: "Train Reservation System",
        description: "Data-structures heavy train reservation system in C++.",
        image: "/assets/dummy/acadamic projects.jpg",
        technologies: ["C++", "DSA"],
        category: "academic",
        isFeatured: false,
    },
    {
        id: "ping-pong-java",
        title: "Ping Pong Game (Java)",
        description: "2D ping pong game implemented in Java.",
        image: "/assets/dummy/acadamic projects.jpg",
        technologies: ["Java"],
        category: "academic",
        isFeatured: false,
    },
    {
        id: "water-filtration-db",
        title: "Water Filtration Database",
        description: "Relational database for a water filtration plant.",
        image: "/assets/dummy/acadamic projects.jpg",
        technologies: ["SQL"],
        category: "academic",
        isFeatured: false,
    },
    // Summary of broader AI/Next.js experimentation
    {
        id: "ai-web-experience",
        title: "AI & Web Experiments",
        description:
            "Multiple websites built with Next.js featuring responsive UI, plus hands-on work with Python, RAG pipelines, LLMs, and YOLO models for object detection.",
        image: "/assets/dummy/machine_learning_projects.webp",
        technologies: ["Next.js", "React", "TypeScript", "Python", "RAG", "YOLO"],
        category: "ai-ml",
        isFeatured: false,
    },
];

export const educations: Education[] = [
    {
        id: "nust-ms",
        institution: "National University of Sciences and Technology (NUST)",
        degree: "MS Software Engineering",
        period: "2025 – Present",
        description:
            "Graduate studies focusing on advanced software engineering and AI‑driven systems.",
    },
    {
        id: "numl-bsse",
        institution: "National University of Modern Languages (NUML)",
        degree: "BS Software Engineering (CGPA 3.21/4.00)",
        period: "2021 – 2025",
        description:
            "Core courses: OOP, Data Structures & Algorithms, Software Requirements, Formal Methods, Software Design & Architecture, Operating Systems, Web Engineering, HCI, AI, Networks, Information Security, Mobile App Development, Software Quality, Project Management, and more.",
    },
    {
        id: "aps-kohat",
        institution: "APS Kohat",
        degree: "F.Sc (Pre‑Engineering: Physics, Chemistry, Mathematics)",
        period: "2018 – 2021",
        description: "Secured 63% overall.",
    },
    {
        id: "aps-sgd",
        institution: "APS SGD",
        degree: "Matriculation (Physics, Chemistry, Computer Science)",
        period: "2016 – 2018",
        description: "Secured 83% overall.",
    },
];

export const achievements: Achievement[] = [
    {
        id: "open-house-fyp",
        title: "3rd Place in Open House FYP (2025)",
        description:
            "Final Year Project 'SignEase' – an AI-based voice and sign recognition app that secured 3rd position in the NUML Open House 2025.",
        year: "2025",
        type: "academic",
        assetUrl: "/assets/3rd position open house numl.jpg",
    },
    {
        id: "swimming-medals",
        title: "Swimming Medals",
        description:
            "Won three medals at garrison-level swimming competitions in 2022: gold in freestyle, silver in medley race, and bronze in backstroke.",
        year: "2022",
        type: "sport",
    },
    {
        id: "basketball-award",
        title: "Basketball Award",
        description:
            "Awarded Best Player of the Tournament trophy in garrison-level basketball competition.",
        year: "2021",
        type: "sport",
    },
];

export const certifications: Certification[] = [
    {
        id: "flutter-essential",
        title: "Flutter Essential Training: Build for Multiple Platforms",
        issuer: "Online Platform",
        category: "development",
        assetUrl: "/assets/flutter certificate.jpg",
    },
    {
        id: "react-great-learning",
        title: "React JS Tutorials",
        issuer: "Great Learning",
        category: "development",
        assetUrl: "/assets/react js certificate.jpg",
    },
    {
        id: "html-css-openweaver",
        title: "HTML and CSS Basics",
        issuer: "Open Weaver",
        category: "development",
        assetUrl: "/assets/html and css basics.pdf",
    },
    {
        id: "wix-coursera",
        title: "Website Development with WIX",
        issuer: "Coursera",
        category: "development",
    },
    {
        id: "organic-marketing",
        title: "Organic Marketing",
        issuer: "Coursera",
        category: "seo",
        assetUrl: "/assets/organic marketing certificate.pdf",
    },
    {
        id: "seo-foundations",
        title: "SEO Foundations",
        issuer: "David Booth / LinkedIn Learning",
        category: "seo",
        assetUrl: "/assets/SEO FOUNDATIONS.jpg",
    },
    {
        id: "semrush-1",
        title: "Semrush SEO Certification",
        issuer: "Semrush",
        category: "seo",
        assetUrl: "/assets/SEO Certificate1.pdf",
    },
    {
        id: "semrush-2",
        title: "Semrush Advanced SEO Course",
        issuer: "Semrush",
        category: "seo",
        assetUrl: "/assets/SEO CERTIFICATE 2.pdf",
    },
    {
        id: "hubspot-seo",
        title: "SEO Certification",
        issuer: "HubSpot",
        category: "seo",
        assetUrl: "/assets/hubspot certificate.jpg",
    },
];

export const publications: Publication[] = [
    {
        id: "signease-ieee",
        title: "SignEase: An AI-Based Application for Voice and Sign Recognition",
        venue: "IEEE CMT 2025 (upcoming)",
        year: "2025",
        description:
            "Research paper accepted for presentation at IEEE CMT 2025, describing the design and evaluation of the SignEase application.",
        link: "/assets/FINAL MENUSCRIPT SIGNEASE IEEECMT revision id 83.pdf",
    },
];
