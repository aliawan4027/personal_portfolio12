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
        "MS Software Engineering student at NUST | Flutter Developer | AI/ML Engineer | IEEE Researcher. I build production-grade mobile apps, train AI models, and architect scalable full-stack solutions that deliver real-world impact.",
    email: "clashwithme1122@gmail.com",
    city: "Rawalpindi",
    linkedin: "https://www.linkedin.com/in/muhammad-ali-b64386264/",
    github: "https://github.com/aliawan4027",
    profileImage: "/assets/NewDp.png",
};

export const skillCategories: SkillCategory[] = [
    {
        id: "flutter-framework",
        name: "Flutter Framework",
        skills: [
            "Custom UI & Widget Development",
            "Responsive & Adaptive Design",
            "Navigation & Routing (Navigator)",
            "REST API Integration",
            "JSON Parsing & Serialization",
            "Firebase Integration (Auth, Firestore, Storage)",
            "Git & GitHub",
            "Android Studio / VS Code",
            "Figma to Flutter UI Implementation",
            "Material Design & Cupertino UI",
            "Push Notifications (Firebase Cloud Messaging)",
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
    {
        id: "software-engineering",
        name: "Software Engineering",
        skills: [
            "Object-Oriented Programming (OOP)",
            "SOLID Principles",
            "Error Handling & Debugging",
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
    {
        id: "generative-ai",
        name: "Generative AI",
        skills: [
            "Cursor",
            "Windsurf",
            "ChatGPT",
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
    {
        id: "languages-frameworks",
        name: "Languages & Frameworks",
        skills: [
            "Python",
            "Dart",
            "React",
            "LaTeX",
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
    {
        id: "ai-ml",
        name: "AI/ML & Data Science",
        skills: [
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
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
    {
        id: "devops-tools",
        name: "DevOps & Tools",
        skills: [
            "Git",
            "StarUML",
        ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name })),
    },
    {
        id: "web-design",
        name: "Web & Design",
        skills: ["Technical Documentation"].map((name) => ({
            id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            name,
        })),
    },
];

export const experiences: Experience[] = [
    {
        id: "lads-technology-seo",
        company: "Lads Technology",
        position: "SEO Specialist",
        period: "Nov 2025 – Present",
        description:
            "Drive organic growth through technical SEO audits, keyword strategy, and data-driven optimisation campaigns. Leverage Semrush and HubSpot Analytics to increase search visibility and improve domain authority for client digital products.",
        technologies: ["SEO", "Semrush", "HubSpot", "Analytics"],
        certificateUrl: "/assets/Lads%20Certificate.pdf",
        current: true,
    },
    {
        id: "ispr-winter-intern-2026",
        company: "ISPR",
        position: "ISPR Winter Intern 2026",
        period: "January 2026 – February 2026",
        description:
            "Selected for the prestigious ISPR Winter Internship 2026, contributing to media and communications projects. Collaborated with a cross-functional team while representing the Rawalpindi cohort as a key point of contact.",
        technologies: ["Media", "Communications", "Coordination"],
        certificateUrl: "/assets/ISPR%202026%20Certificate.jpg",
        current: false,
    },
    {
        id: "inotech-ai-intern",
        company: "InoTech Solutions",
        position: "AI Intern",
        period: "Jun 2025 – Oct 2025",
        description:
            "Engineered AI solutions end-to-end using Python, RAG pipelines, and fine-tuned Meta Llama LLMs via Ollama. Deployed YOLO-based computer vision models on AWS, integrated Odoo automation workflows, and containerised services with Docker — reducing manual processing time significantly.",
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
        certificateUrl: "/assets/inotech%20certificate.jpeg",
        current: false,
    },
    {
        id: "ispr-winter-intern",
        company: "ISPR",
        position: "Winter Intern (Media)",
        period: "Jan 2025 – Feb 2025",
        description:
            "Completed a competitive media-focused internship at ISPR, gaining hands-on experience in strategic communications and content operations. Elected Class Representative (CR) for the entire Rawalpindi batch, demonstrating leadership and organisational ability.",
        technologies: ["Media", "Coordination", "Communication"],
        certificateUrl: "/assets/ISPR%20Certificate.jpg",
        current: false,
    },
    {
        id: "kaps-academy",
        company: "KAPS Academy",
        position: "Computer Science Teacher",
        period: "Sep 2024 – Dec 2024",
        description:
            "Designed and delivered CS curriculum for grades 9–12, translating complex programming concepts into engaging lessons. Mentored 50+ students in Python and computational thinking, achieving measurable improvement in problem-solving assessments.",
        technologies: ["Teaching", "Python", "CS Curriculum"],
        current: false,
    },
    {
        id: "tech-net-cloud",
        company: "Tech Net Cloud",
        position: "Web Developer (Remote)",
        period: "Jun 2024 – Sep 2024",
        description:
            "Delivered responsive, performance-optimised portfolio and business websites using Next.js and React. Applied SEO best practices and modern design systems, resulting in client sites achieving faster load times and improved Core Web Vitals scores.",
        technologies: ["Next.js", "React", "HTML", "CSS"],
        certificateUrl: "/assets/TECHNET%20CLOUD.pdf",
        current: false,
    },
    {
        id: "sco-intern",
        company: "SCO 62 CSB Rawalpindi",
        position: "Telecommunication Intern",
        period: "Jul 2024 – Aug 2024",
        description:
            "Gained practical exposure to enterprise-grade Huawei telecommunication systems and large-scale network operations at a military signals unit, strengthening understanding of critical infrastructure architecture.",
        technologies: ["Telecom", "Huawei Systems"],
        certificateUrl: "/assets/SCO%20Certificate.jpg",
        current: false,
    },
    {
        id: "dha-multan",
        company: "DHA Multan",
        position: "Application Developer Intern (Flutter)",
        period: "Jun 2023 – Oct 2023",
        description:
            "Built and maintained production Flutter applications for DHA Multan's internal operations, integrating Firebase for real-time data synchronisation and user authentication — improving internal process efficiency across departments.",
        technologies: ["Flutter", "Firebase"],
        certificateUrl: "/assets/DHA%20Multan.jpg",
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
        githubUrl: "https://github.com/aliawan4027/FYP1",
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
        githubUrl: "https://github.com/aliawan4027/carx",
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
        githubUrl: "https://github.com/aliawan4027/Chatapp",
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
        githubUrl: "https://github.com/softwareengineer698-glitch/ASE/tree/Demo",
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
        image: "/assets/dummy/acadamic%20projects.jpg",
        technologies: ["C++"],
        category: "academic",
        isFeatured: false,
    },
    {
        id: "train-reservation",
        title: "Train Reservation System",
        description: "Data-structures heavy train reservation system in C++.",
        image: "/assets/dummy/acadamic%20projects.jpg",
        technologies: ["C++", "DSA"],
        category: "academic",
        isFeatured: false,
    },
    {
        id: "ping-pong-java",
        title: "Ping Pong Game (Java)",
        description: "2D ping pong game implemented in Java.",
        image: "/assets/dummy/acadamic%20projects.jpg",
        technologies: ["Java"],
        category: "academic",
        isFeatured: false,
    },
    {
        id: "water-filtration-db",
        title: "Water Filtration Database",
        description: "Relational database for a water filtration plant.",
        image: "/assets/dummy/acadamic%20projects.jpg",
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
            "Graduate studies focusing on advanced software engineering, AI-driven systems, and research. Currently publishing IEEE research on AI-based sign language recognition.",
        transcriptUrl: "/assets/Result%201st%20semester.pdf",
    },
    {
        id: "numl-bsse",
        institution: "National University of Modern Languages (NUML)",
        degree: "BS Software Engineering (CGPA 3.21/4.00)",
        period: "2021 – 2025",
        description:
            "Core courses: OOP, Data Structures & Algorithms, Software Requirements, Formal Methods, Software Design & Architecture, Operating Systems, Web Engineering, HCI, AI, Networks, Information Security, Mobile App Development, Software Quality, Project Management, and more.",
        degreeUrl: "/assets/Degree.jpg",
        transcriptUrl: "/assets/ORIGNAL%20TRANCSCRIPT.pdf",
    },
    {
        id: "aps-kohat",
        institution: "APS Kohat",
        degree: "F.Sc (Pre‑Engineering: Physics, Chemistry, Mathematics)",
        period: "2018 – 2021",
        description: "Secured 63% overall.",
        certificateUrl: "/assets/FSC%20CERTIFICATE_page-0001.jpg",
    },
    {
        id: "aps-sgd",
        institution: "APS SGD",
        degree: "Matriculation (Physics, Chemistry, Computer Science)",
        period: "2016 – 2018",
        description: "Secured 83% overall.",
        certificateUrl: "/assets/MATRIC%20CERTIFICATE_page-0001.jpg",
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
        assetUrl: "/assets/3rd%20position%20open%20house%20numl.jpg",
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
        assetUrl: "/assets/flutter%20certificate.jpg",
    },
    {
        id: "react-great-learning",
        title: "React JS Tutorials",
        issuer: "Great Learning",
        category: "development",
        assetUrl: "/assets/react%20js%20certificate.jpg",
    },
    {
        id: "html-css-openweaver",
        title: "HTML and CSS Basics",
        issuer: "Open Weaver",
        category: "development",
        assetUrl: "/assets/html%20and%20css%20basics.pdf",
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
        assetUrl: "/assets/organic%20marketing%20certificate.pdf",
    },
    {
        id: "seo-foundations",
        title: "SEO Foundations",
        issuer: "David Booth / LinkedIn Learning",
        category: "seo",
        assetUrl: "/assets/SEO%20FOUNDATIONS.jpg",
    },
    {
        id: "semrush-1",
        title: "Semrush SEO Certification",
        issuer: "Semrush",
        category: "seo",
        assetUrl: "/assets/SEO%20Certificate1.pdf",
    },
    {
        id: "semrush-2",
        title: "Semrush Advanced SEO Course",
        issuer: "Semrush",
        category: "seo",
        assetUrl: "/assets/SEO%20CERTIFICATE%202.pdf",
    },
    {
        id: "hubspot-seo",
        title: "SEO Certification",
        issuer: "HubSpot",
        category: "seo",
        assetUrl: "/assets/hubspot%20certificate.jpg",
    },
    {
        id: "ispr-2026",
        title: "ISPR Winter Internship Certificate 2026",
        issuer: "ISPR (Inter Services Public Relations)",
        category: "development",
        assetUrl: "/assets/ISPR%202026%20Certificate.jpg",
    },
];

export const skillDescriptions: Record<string, string> = {
    // Flutter Framework
    "custom-ui-widget-development": "Creating custom, reusable UI components and widgets in Flutter with tailored designs and functionality. **Projects**: Developed custom widgets for SIGNEASE app including gesture recognition interfaces and animated feedback components in SignLang App.",
    "responsive-adaptive-design": "Building responsive layouts that adapt to different screen sizes and orientations for optimal user experience. **Projects**: Ensured cross-device compatibility for CarX booking app and FoodBridge platform, adapting UI for both tablets and mobile phones.",
    "navigation-routing-navigator": "Implementing complex navigation patterns and routing systems for multi-page Flutter applications. **Projects**: Designed navigation flows for JobQuest app with multi-step job application process and deep linking for CarX booking system.",
    "rest-api-integration": "Connecting Flutter apps to RESTful APIs for data fetching, updates, and real-time synchronization. **Projects**: Integrated booking APIs in CarX app, job search APIs in JobQuest, and location services in AddSpotter billboard tracking.",
    "json-parsing-serialization": "Handling JSON data parsing and serialization for efficient data exchange between app and backend. **Projects**: Managed complex JSON responses from AI models in SIGNEASE and job listing data in JobQuest platform.",
    "firebase-integration": "Integrating Firebase services including Authentication, Firestore database, and Cloud Storage. **Projects**: Used Firebase Auth in SIGNEASE, ChatApp, and CarX; Firestore for real-time data in FoodBridge and job listings in JobQuest.",
    "git-github": "Version control and collaborative development using Git and GitHub for project management. **Projects**: Managed all Flutter app repositories, maintained branching strategies for SIGNEASE AI features and collaborated on web development projects.",
    "android-studio-vs-code": "Proficient in using Android Studio and VS Code for Flutter development with debugging and productivity tools. **Projects**: Used Android Studio for Flutter app development and VS Code for web projects including the Journal website.",
    "figma-to-flutter-ui": "Converting Figma designs into pixel-perfect Flutter UI implementations with design system integration. **Projects**: Translated Figma mockups into Flutter UI for SIGNEASE app interface and CarX booking platform design.",
    "material-design-cupertino-ui": "Implementing both Material Design and Cupertino (iOS) design systems for platform-specific UI. **Projects**: Applied Material Design in Android versions of apps and Cupertino patterns for iOS builds of TicTacToe game.",
    "push-notifications-firebase-cloud-messaging": "Implementing push notifications using Firebase Cloud Messaging for user engagement. **Projects**: Added booking confirmations in CarX app and job alert notifications in JobQuest platform.",

    // Software Engineering
    "object-oriented-programming-oop": "Applying OOP principles including encapsulation, inheritance, and polymorphism for robust code design. **Projects**: Used OOP patterns in Student Management System (C++) and Train Reservation System with proper class hierarchies.",
    "solid-principles": "Following SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion). **Projects**: Implemented SOLID principles in all major projects including SIGNEASE and academic systems.",
    "error-handling-debugging": "Implementing comprehensive error handling and debugging techniques for reliable software applications. **Projects**: Added error handling for AI model failures in SIGNEASE and network issues in CarX booking system.",

    // Generative AI
    "cursor": "Using Cursor AI-powered code editor for enhanced productivity and intelligent code completion. **Projects**: Leveraged Cursor for rapid development of SIGNEASE app features and debugging complex Flutter animations.",
    "windsurf": "Leveraging Windsurf AI tools for development assistance and code optimization. **Projects**: Used Windsurf for code refactoring in Journal website and optimizing Flutter widget performance.",
    "chatgpt": "Utilizing ChatGPT for problem-solving, code generation, and learning new programming concepts. **Projects**: Used ChatGPT for algorithm optimization in JobQuest and resolving complex state management issues.",

    // Languages & Frameworks
    "python": "Proficient in Python for backend development, data analysis, and automation tasks. **Projects**: Developed AI model training scripts for SIGNEASE, data processing for YOLO object detection, and backend APIs for web experiments.",
    "dart": "Programming language for Flutter development with strong typing and modern features. **Projects**: Core language for all Flutter apps including SIGNEASE, CarX, JobQuest, and ChatApp with advanced async programming.",
    "react": "Building interactive user interfaces with React component-based architecture. **Projects**: Developed Journal website and To-Do List app with React hooks and modern component patterns.",
    "latex": "Document preparation system for academic and technical writing. **Projects**: Used for IEEE paper formatting for SIGNEASE research publication and academic documentation.",

    // AI/ML & Data Science
    "rag": "Retrieval-Augmented Generation for enhanced AI responses with knowledge integration. **Projects**: Implemented RAG pipelines in AI web experiments for context-aware responses and enhanced search capabilities.",
    "llm-llama": "Working with Large Language Models like Llama for natural language processing tasks. **Projects**: Integrated Llama models in AI web experiments and explored LLM capabilities for intelligent features.",
    "yolo": "Object detection using YOLO (You Only Look Once) for computer vision applications. **Projects**: Implemented YOLO for object detection in AI web experiments and explored computer vision capabilities.",
    "hugging-face": "Using Hugging Face libraries and models for NLP and machine learning tasks. **Projects**: Leveraged Hugging Face transformers for NLP tasks in AI experiments and model fine-tuning.",
    "google-colab": "Cloud-based Jupyter notebook environment for machine learning and data science. **Projects**: Used for training and testing AI models for SIGNEASE app and experimenting with YOLO object detection.",
    "kaggle": "Data science competition platform for practical ML experience and datasets. **Projects**: Utilized datasets for ML model training and participated in competitions to enhance AI skills.",

    // Databases & Backend
    "sql": "Relational database management and query optimization with SQL. **Projects**: Designed Water Filtration Plant database schema and optimized queries for academic systems.",
    "nosql": "Working with NoSQL databases for flexible data storage and retrieval. **Projects**: Used Firestore NoSQL database in Firebase for real-time data in ChatApp and FoodBridge.",
    "mongodb": "NoSQL document database for scalable data storage solutions. **Projects**: Implemented MongoDB for flexible data structures in web projects and API backends.",
    "firebase": "Backend-as-a-Service platform providing database, authentication, and cloud functions. **Projects**: Comprehensive Firebase integration in SIGNEASE, CarX, JobQuest, ChatApp, and FoodBridge for complete backend solutions.",

    // DevOps & Tools
    "git": "Version control system for tracking changes and collaborative development. **Projects**: Managed version control for all projects including Flutter apps, web development, and academic systems with proper branching strategies.",
    "staruml": "UML modeling tool for software design and architecture planning. **Projects**: Created UML diagrams for academic projects including Student Management System and Train Reservation System.",

    // Web & Design
    "technical-documentation": "Creating comprehensive technical documentation for software projects and APIs. **Projects**: Documented SIGNEASE AI app architecture, API endpoints for web projects, and user manuals for mobile applications.",
};

export const publications: Publication[] = [
    {
        id: "signease-ieee",
        title: "SignEase: An AI-Based Application for Voice and Sign Recognition",
        venue: "IEEE CMT 2025 (upcoming)",
        year: "2025",
        description:
            "Research paper accepted for presentation at IEEE CMT 2025, describing the design and evaluation of the SignEase application.",
        link: "/assets/signease_manuscript.pdf",
    },
];
