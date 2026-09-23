export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  shortDescription: string;
  technologies: string[];
  documentUrl: string;
  githubUrl: string;
  hotspot: {
    x: number; // percentage from left
    y: number; // percentage from top
    color: string;
    labelPos: 'top' | 'bottom' | 'left' | 'right';
  };
  frameGrid: {
    col: number; // 1, 2, 3
    row: number; // 1, 2
    x: number; // percentage from left
    y: number; // percentage from top
    width: number; // percentage
    height: number; // percentage
    accentColor: string;
  };
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    hardware: string[];
    software: string[];
    technologies: string[];
    myRole: string;
    year: string;
    specs: { label: string; value: string }[];
    schematicBadge: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: "EMBEDDED",
    skills: ["ESP32", "ESP32-S3","STM32","8051","Raspberry Pi 5","ARM Cortex-M","Embedded C","Keil uVision","PlatformIO","Arduino IDE","ESP IDF","Microcontrollers","Sensors & Actuators","RTOS-FreeRTOS","Embedded Linux","IoT & Wireless Communication-BlynkIOT,ThingSpeak,AdaFruitIO,NodeRED,HiveMQ,ThingsBoard"]
  },
  {
    title: "ELECTRONICS",
    skills: ["Analog & Digital Electronics","Circuit Design","LTspice","PCB Design-KiCad & Altium (1&2 LAYERS)","VLSI AND CHIP Design - Verilog & Microwind"]
  },
  {
    title: "ROBOTICS",
    skills: ["ROS2","Gazebo","Mathlab","Simulink","Automation","Control Systems","Scilab","Fusion360 - Rover,InfoSense,Parkq case","Blender"]
  },
  {
    title: "PROGRAMMING",
    skills: ["Python","C","C++","RUST","CUDA","JAVA","SQL","Frontend-HTML,CSS,Javascript,react.js","Backend-Django,firebase,MangoDb,node.js","Authentication","PAYMENT GATEWAYS","Data Structures & Algorithms","Git & GitHub","Linux & Shell Scripting","Sanity & QA automation - POSTMAN,Playwright","vercel","Netlify","UI&UX-Figma","PoweerBI","Google Analytics","Google Search Console"]
  },
  {
    title: "AI / ML",
    skills: ["Computer Vision-YOLO,U-NET,OpenCV","langchain-LCEL","Langgraph","RAG SYSTEM","PyTorch","TensorFlow","pandas","Numpy","LLM Models","VLM Models","Machine Learning","Deep Learning-CNN & RNN", "NLP Models","Vector Database-PgVector","LangSmith","Edge AI"]
  },
  {
    title: "COMMUNICATION",
    skills: ["LoRa","GPS","GSM","WiFi","Bluetooth","UART / SPI / I2C / MQTT"]
  }
];

export interface DesignerProfile {
  name: string;
  initials: string;
  role: string;
  subtitle: string;
  tagline: string;
  secondaryStatement: string;
  description: string;
  bioHeadline: string;
  bioParagraphs: string[];
  disciplines: string[];
  stickyNotes: {
    text: string;
    x: number; // percentage
    y: number; // percentage
    rotation: number; // deg
  }[];
  contact: {
    heading: string;
    subheading: string;
    email: string;
    location: string;
    availableForFreelance: boolean;
    socials: {
      platform: string;
      username: string;
      url: string;
    }[];
  };
}

export const DESIGNER: DesignerProfile = {
  name: "HARISH MADURAIMANI",
  initials: "HMM",

  subtitle:
    "AI • EMBEDDED SYSTEMS • ROBOTICS • STARTUPS • PRODUCT DESIGN • BRANDING",
  tagline:
    "BUILDING IDEAS ACROSS TECHNOLOGY, DESIGN, AND ENTREPRENEURSHIP.",
  secondaryStatement:
    "FROM CIRCUITS AND CODE TO AI PRODUCTS, STARTUPS, AND BRAND EXPERIENCES.",
  description:
    "Multidisciplinary engineer and product builder exploring AI, embedded systems, robotics, software and design to turn ideas into real products.",
  bioHeadline: "ENGINEERING • AI • DESIGN • STARTUPS",
  bioParagraphs: [
    "I work across hardware, software, AI and design, combining engineering fundamentals with product thinking to build practical technology solutions.",
    "My work spans embedded systems, robotics, PCB design, computer vision, machine learning, LLM/NLP systems, web development, UI/UX, branding and startup experimentation.",
    "Projects such as SafeNest, RoboCore, InfoSense, ElectroLab, ParkQ, Buzzes AI, CertZ, RSNA Knee AI and SiPO Copilot AI reflect my interest in building across different industries and technology domains.",
  ],
  disciplines: [
    "STARTUPS & PRODUCT",
    "EMBEDDED SYSTEMS",
    "AI / MACHINE LEARNING",
    "ROBOTICS & AUTOMATION",
    "PCB & ELECTRONICS",
    "SOFTWARE & WEB",
    "UI/UX & GRAPHIC DESIGN",
    "BRAND DESIGN",
  ],
  stickyNotes: [
    { text: "CIRCUITS", x: 44.5, y: 15.5, rotation: -4 },
    { text: "FIRMWARE", x: 63.5, y: 17.5, rotation: 6 },
    { text: "ROBOTICS", x: 80.5, y: 20.5, rotation: -1 },
    { text: "SENSORS", x: 45, y: 43, rotation: 5 },
    { text: "AI / EDGE", x: 77, y: 45.5, rotation: -4 }
  ],

  // THIS WAS MISSING
 contact: {
    heading: "LET'S BUILD SOMETHING MEANINGFUL.",
    subheading:
      "Open to product development, startup collaboration, engineering projects, AI integration, PCB/embedded systems and branding or design work.",
    email: "harishmaduraimani@gmail.com",
    location: "Chennai, India / Remote",
    availableForFreelance: true,
    socials: [
      {
        platform: "GitHub",
        username: "harishmaduraimani",
        url: "https://github.com/harishmaduraimani",
      },
      {
        platform: "LinkedIn",
        username: "harish-maduraimani",
        url: "https://www.linkedin.com/in/harish-maduraimani/",
      },
      {
        platform: "Resume",
        username: "View Resume",
        url: "resume.pdf",
      },
    
    ],
  },
};
export const PROJECTS: Project[] = [
 
  {
    id: "project-01",
    number: "01",
    title: "SAFENEST",
    subtitle: "Disaster-Resilient Emergency Communication",
    category: "EMBEDDED & COMMUNICATION",
    year: "2026",
    shortDescription:
      "Disaster-resilient communication platform using LoRa and embedded systems to relay information when cellular, internet, or power infrastructure is unavailable.",
    technologies: ["ESP32", "ESP32-S3", "LoRa", "GPS", "Embedded C", "KiCad"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/embedded-systems",
    hotspot: {
      x: 24,
      y: 35,
      color: "#76FF03",
      labelPos: "bottom"
    },
    frameGrid: {
      col: 1,
      row: 1,
      x: 54,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#76FF03"
    },
    caseStudy: {
      overview:
        "SafeNest is an emergency communication concept designed for disaster situations where normal communication infrastructure may be unavailable.",
      problem:
        "Survivors and rescuers can lose reliable communication after earthquakes, floods, landslides, and cyclones.",
      solution:
        "Developed a LoRa-based communication approach using embedded nodes to transmit emergency information, location data, and status information across an off-grid network.",
      hardware: [
        "ESP32 / ESP32-S3",
        "LoRa transceiver",
        "GPS module",
        "Custom PCB concepts",
        "Battery-powered embedded system"
      ],
      software: [
        "Embedded C / C++",
        "LoRa communication protocol",
        "Packet and acknowledgement handling",
        "GPS data processing",
        "Base-station monitoring concept"
      ],
      technologies: ["ESP32", "LoRa", "GPS", "Embedded C", "KiCad", "IoT"],
      myRole:
        "Product builder and embedded systems developer — communication architecture, hardware integration, firmware, and prototype development.",
      year: "2026",
      specs: [
        { label: "Application", value: "Disaster Communication" },
        { label: "Network", value: "Off-Grid LoRa" },
        { label: "Platform", value: "ESP32" },
        { label: "Focus", value: "Emergency Communication" }
      ],
      schematicBadge: "EMBEDDED // DISASTER COMMUNICATION"
    }
  },

  {
    id: "project-02",
    number: "02",
    title: "SHIELDID",
    subtitle: "Smart Safety ID & Emergency System",
    category: "IoT & SAFETY",
    year: "2025",
    shortDescription:
      "Smart safety ID concept combining tracking, SOS communication, safety zones, tamper detection, and emergency alert features.",
    technologies: ["ESP32", "STM32", "GPS", "GSM", "Embedded C", "Sensors"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/iot",
    hotspot: {
      x: 29,
      y: 72,
      color: "#00D2FF",
      labelPos: "top"
    },
    frameGrid: {
      col: 2,
      row: 1,
      x: 68.5,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#00D2FF"
    },
    caseStudy: {
      overview:
        "ShieldID is a safety-focused smart identification and tracking concept designed for students, workers, and personal safety applications.",
      problem:
        "Traditional identification cards cannot provide real-time emergency communication, tracking, or tamper awareness.",
      solution:
        "Combined an ID-card form factor with GPS, cellular communication, SOS functionality, safety-zone concepts, tamper detection, and battery monitoring.",
      hardware: [
        "Microcontroller",
        "GPS module",
        "GSM / cellular module",
        "SOS button",
        "Tamper sensor",
        "Battery and charging circuit"
      ],
      software: [
        "Embedded firmware",
        "GPS tracking logic",
        "Emergency alert handling",
        "Geofencing concepts",
        "Communication management"
      ],
      technologies: ["STM32", "ESP32", "GPS", "GSM", "Embedded C", "IoT"],
      myRole:
        "Product designer and embedded systems developer — system architecture, hardware concept, communication, and safety features.",
      year: "2025",
      specs: [
        { label: "Form Factor", value: "Smart ID Card" },
        { label: "Tracking", value: "GPS + Cellular" },
        { label: "Safety", value: "SOS + Tamper Detection" },
        { label: "Focus", value: "Personal Safety" }
      ],
      schematicBadge: "SAFETY SYSTEM // SMART ID"
    }
  },

  {
    id: "project-03",
    number: "03",
    title: "INFOSENSE",
    subtitle: "Healthcare Technology Startup",
    category: "STARTUP & HEALTHCARE",
    year: "2026",
    shortDescription:
      "Healthcare technology startup idea focused on building practical technology solutions for healthcare applications and intelligent monitoring.",
    technologies: ["AI", "Embedded Systems", "Sensors", "IoT", "Python", "Product Design"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/healthcare",
    hotspot: {
      x: 35,
      y: 42,
      color: "#FF9100",
      labelPos: "bottom"
    },
    frameGrid: {
      col: 3,
      row: 1,
      x: 83,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#FF9100"
    },
    caseStudy: {
      overview:
        "InfoSense is a healthcare-focused startup concept exploring technology-driven solutions for better healthcare interaction, monitoring, and product development.",
      problem:
        "Healthcare systems can benefit from accessible technology that combines sensing, intelligent processing, and user-friendly interfaces.",
      solution:
        "Explored a startup/product direction combining embedded systems, intelligent data processing, AI, and product design for healthcare applications.",
      hardware: [
        "Embedded sensing systems",
        "Microcontrollers",
        "Sensor interfaces",
        "Prototype electronics"
      ],
      software: [
        "Python",
        "AI/ML exploration",
        "Data processing",
        "Product software concepts"
      ],
      technologies: ["Python", "AI/ML", "Embedded Systems", "IoT", "Sensors"],
      myRole:
        "Founder / product builder — startup concept development, technology exploration, product thinking, and pitching.",
      year: "2026",
      specs: [
        { label: "Domain", value: "Healthcare Technology" },
        { label: "Role", value: "Founder / Product Builder" },
        { label: "Focus", value: "Intelligent Healthcare" },
        { label: "Stage", value: "Startup Concept" }
      ],
      schematicBadge: "STARTUP // HEALTHCARE TECHNOLOGY"
    }
  },

  {
    id: "project-04",
    number: "04",
    title: "ELECTROLAB",
    subtitle: "PCB + AI Technology Startup",
    category: "STARTUP & ELECTRONICS",
    year: "2026",
    shortDescription:
      "Technology startup concept combining PCB design, electronics engineering, embedded systems, and artificial intelligence.",
    technologies: ["PCB Design", "KiCad", "Altium", "AI", "Python", "Embedded Systems"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/pcb",
    hotspot: {
      x: 42,
      y: 38,
      color: "#FF9100",
      labelPos: "bottom"
    },
    frameGrid: {
      col: 1,
      row: 2,
      x: 54,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#FF9100"
    },
    caseStudy: {
      overview:
        "ElectroLab is a startup idea exploring the combination of PCB engineering, electronics, embedded hardware, and AI.",
      problem:
        "Modern hardware products increasingly require electronics, intelligent processing, rapid prototyping, and software integration.",
      solution:
        "Explored a product and startup direction around PCB development, embedded hardware, AI integration, and practical engineering workflows.",
      hardware: [
        "Custom PCB development",
        "ESP32-based systems",
        "Embedded electronics",
        "Sensors and interfaces"
      ],
      software: [
        "Python",
        "AI/ML integration",
        "Embedded firmware",
        "Automation workflows"
      ],
      technologies: ["KiCad", "Altium", "ESP32", "Python", "AI", "PCB Design"],
      myRole:
        "Founder / product builder — startup development, electronics direction, PCB design, AI integration, and pitching.",
      year: "2026",
      specs: [
        { label: "Domain", value: "PCB + AI" },
        { label: "Role", value: "Founder / Product Builder" },
        { label: "Platforms", value: "6+ Pitching Platforms" },
        { label: "Focus", value: "Hardware + Intelligence" }
      ],
      schematicBadge: "STARTUP // PCB + AI"
    }
  },

  {
    id: "project-05",
    number: "05",
    title: "PARKQ",
    subtitle: "Smart Mall Parking System",
    category: "STARTUP & SMART SYSTEMS",
    year: "2025",
    shortDescription:
      "Smart parking concept designed to improve parking discovery, vehicle management, and the overall mall parking experience.",
    technologies: ["IoT", "Sensors", "Embedded Systems", "Web", "Automation", "Product Design"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/smart-parking",
    hotspot: {
      x: 48,
      y: 30,
      color: "#00E5FF",
      labelPos: "bottom"
    },
    frameGrid: {
      col: 2,
      row: 2,
      x: 68.5,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#00E5FF"
    },
    caseStudy: {
      overview:
        "ParkQ is a smart mall parking startup/product concept focused on improving vehicle parking management and user experience.",
      problem:
        "Finding available parking spaces in large malls can be time-consuming and inefficient.",
      solution:
        "Explored an intelligent parking ecosystem using sensing, availability information, automation, and user-facing digital services.",
      hardware: [
        "Vehicle detection sensors",
        "Microcontrollers",
        "Parking indicators",
        "Embedded control hardware"
      ],
      software: [
        "Web interface concepts",
        "Parking availability logic",
        "Data processing",
        "Automation workflows"
      ],
      technologies: ["IoT", "Sensors", "Embedded Systems", "Web", "Automation"],
      myRole:
        "Cofounder / product builder — product concept, technology exploration, system architecture, and startup development.",
      year: "2025",
      specs: [
        { label: "Domain", value: "Smart Parking" },
        { label: "Role", value: "Cofounder" },
        { label: "Application", value: "Mall Parking" },
        { label: "Focus", value: "Smart Mobility" }
      ],
      schematicBadge: "STARTUP // SMART PARKING"
    }
  },

  {
    id: "project-06",
    number: "06",
    title: "BUZZES AI",
    subtitle: "AI Chatbot for Local Businesses",
    category: "AI & SOFTWARE",
    year: "2026",
    shortDescription:
      "AI chatbot concept designed to help local businesses automate customer conversations, information access, and digital engagement.",
    technologies: ["LLM", "NLP", "Python", "Chatbots", "n8n", "Web"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/chatbot",
    hotspot: {
      x: 58,
      y: 40,
      color: "#B026FF",
      labelPos: "top"
    },
    frameGrid: {
      col: 3,
      row: 2,
      x: 83,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#B026FF"
    },
    caseStudy: {
      overview:
        "Buzzes AI explores AI-powered chatbot solutions for local businesses.",
      problem:
        "Small businesses often need to respond to repetitive customer questions while maintaining a simple digital presence.",
      solution:
        "Explored LLM and chatbot integration to automate customer conversations and business information retrieval.",
      hardware: [
        "Computer systems",
        "Cloud or local AI infrastructure",
        "Optional edge devices"
      ],
      software: [
        "LLMs",
        "NLP",
        "Python",
        "Chatbot integration",
        "n8n automation"
      ],
      technologies: ["LLM", "NLP", "Python", "n8n", "Chatbots"],
      myRole:
        "AI product builder — chatbot concept, LLM integration, automation, and product exploration.",
      year: "2026",
      specs: [
        { label: "Domain", value: "Business AI" },
        { label: "Core", value: "LLM + NLP" },
        { label: "Users", value: "Local Businesses" },
        { label: "Focus", value: "Customer Automation" }
      ],
      schematicBadge: "AI PRODUCT // BUSINESS CHATBOT"
    }
  },

  {
    id: "project-07",
    number: "07",
    title: "CERTZ",
    subtitle: "Certificate Generation Platform",
    category: "SOFTWARE & PRODUCT",
    year: "2026",
    shortDescription:
      "Browser-based certificate generation platform designed to automate personalized certificate creation from structured data.",
    technologies: ["React", "TypeScript", "JavaScript", "ExcelJS", "HTML", "CSS"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/harishmaduraimani/certz",
    hotspot: {
      x: 65,
      y: 34,
      color: "#76FF03",
      labelPos: "bottom"
    },
    frameGrid: {
      col: 1,
      row: 1,
      x: 54,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#76FF03"
    },
    caseStudy: {
      overview:
        "CertZ is a certificate generation platform focused on making bulk personalized certificate generation easier.",
      problem:
        "Manually creating large numbers of certificates is repetitive and time-consuming.",
      solution:
        "Built a browser-based workflow that processes structured participant data and generates personalized certificate outputs.",
      hardware: [
        "Standard computer",
        "Browser-based environment"
      ],
      software: [
        "React",
        "TypeScript",
        "ExcelJS",
        "HTML/CSS",
        "Client-side processing"
      ],
      technologies: ["React", "TypeScript", "ExcelJS", "JavaScript", "CSS"],
      myRole:
        "Founder / developer — product design, frontend development, data processing, and platform architecture.",
      year: "2026",
      specs: [
        { label: "Platform", value: "Browser" },
        { label: "Input", value: "Excel / Structured Data" },
        { label: "Output", value: "Personalized Certificates" },
        { label: "Focus", value: "Workflow Automation" }
      ],
      schematicBadge: "SOFTWARE // CERTIFICATE AUTOMATION"
    }
  },

  {
    id: "project-08",
    number: "08",
    title: "COPILOT AI",
    subtitle: "Smart Single-Pilot Operations System",
    category: "AI & AVIATION",
    year: "2025",
    shortDescription:
      "AI-assisted aviation decision-support concept combining flight data, fuel analysis, route information, alerts, and alternate-airport analysis.",
    technologies: ["Python", "Machine Learning", "React", "AI", "FMS Data", "Data Processing"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/aviation",
    hotspot: {
      x: 62,
      y: 50,
      color: "#FF3366",
      labelPos: "top"
    },
    frameGrid: {
      col: 1,
      row: 2,
      x: 54,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#FF3366"
    },
    caseStudy: {
      overview:
        "Copilot AI is a Single Pilot Operations concept using AI and data analysis to support aviation decision-making.",
      problem:
        "Single-pilot operations require handling multiple sources of flight, weather, route, fuel, traffic, and airport information.",
      solution:
        "Designed a smart dashboard concept combining operational information with machine-learning models for fuel, ETA, route, and alternate-airport analysis.",
      hardware: [
        "Tablet/dashboard interface",
        "Edge-computing concept",
        "Aviation data interfaces"
      ],
      software: [
        "Python ML models",
        "Fuel prediction",
        "Route analysis",
        "Alternate-airport recommendation",
        "React dashboard"
      ],
      technologies: ["Python", "Random Forest", "Gradient Boosting", "React", "AI"],
      myRole:
        "AI developer and system designer — ML development, dashboard architecture, data integration, and aviation-system design.",
      year: "2025",
      specs: [
        { label: "Domain", value: "Aviation AI" },
        { label: "Focus", value: "Single-Pilot Operations" },
        { label: "ML", value: "Fuel / Route / ETA" },
        { label: "Interface", value: "Smart Operations Dashboard" }
      ],
      schematicBadge: "AI SYSTEM // AVIATION"
    }
  },

  {
    id: "project-09",
    number: "09",
    title: "ROBOCORE",
    subtitle: "Mining Rover Communication",
    category: "ROBOTICS & AUTOMATION",
    year: "2026",
    shortDescription:
      "Rover communication and robotics concept aimed at challenging mining environments with embedded control and reliable communication.",
    technologies: ["ESP32", "LoRa", "ROS2", "Gazebo", "Embedded C", "Robotics"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/robotics",
    hotspot: {
      x: 75,
      y: 65,
      color: "#FFD600",
      labelPos: "left"
    },
    frameGrid: {
      col: 2,
      row: 1,
      x: 68.5,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#FFD600"
    },
    caseStudy: {
      overview:
        "RoboCore explores rover communication and robotic systems for mining and challenging environments.",
      problem:
        "Industrial and mining robots require reliable communication, embedded control, sensing, and automation.",
      solution:
        "Explored rover communication, embedded controllers, wireless links, robotic control, and simulation.",
      hardware: [
        "Rover platform",
        "ESP32 systems",
        "Motors and motor drivers",
        "Sensors",
        "Wireless communication modules"
      ],
      software: [
        "Embedded C/C++",
        "ROS2",
        "Gazebo",
        "Telemetry handling",
        "Robot-control logic"
      ],
      technologies: ["ESP32", "LoRa", "ROS2", "Gazebo", "C++", "Python"],
      myRole:
        "Robotics and embedded systems developer — communication, control, embedded integration, and simulation.",
      year: "2026",
      specs: [
        { label: "Application", value: "Mining Robotics" },
        { label: "Platform", value: "Rover" },
        { label: "Communication", value: "Wireless / LoRa" },
        { label: "Simulation", value: "ROS2 + Gazebo" }
      ],
      schematicBadge: "ROBOTICS // ROVER COMMUNICATION"
    }
  },

  {
    id: "project-10",
    number: "10",
    title: "AUTONOMOUS ROBOT",
    subtitle: "Mobile Robotics & Navigation",
    category: "ROBOTICS",
    year: "2025",
    shortDescription:
      "Autonomous mobile robotics work involving sensing, control, navigation, simulation, and embedded robot integration.",
    technologies: ["ROS2", "Gazebo", "Python", "C++", "Sensors", "Control Systems"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/ros2",
    hotspot: {
      x: 82,
      y: 28,
      color: "#FFD600",
      labelPos: "left"
    },
    frameGrid: {
      col: 3,
      row: 1,
      x: 83,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#FFD600"
    },
    caseStudy: {
      overview:
        "Autonomous Robot is a robotics project focused on mobile robot control, simulation, navigation, and sensor integration.",
      problem:
        "Autonomous robots need coordinated perception, motion control, navigation, and software integration.",
      solution:
        "Worked with ROS2, Gazebo, sensors, controllers, and embedded systems to explore autonomous robot behavior.",
      hardware: [
        "Mobile robot chassis",
        "Motors",
        "Motor drivers",
        "Sensors",
        "Microcontroller"
      ],
      software: [
        "ROS2",
        "Gazebo",
        "Python",
        "C++",
        "Control algorithms"
      ],
      technologies: ["ROS2", "Gazebo", "Python", "C++", "Control Systems"],
      myRole:
        "Robotics developer — simulation, control, sensor integration, and autonomous-system development.",
      year: "2025",
      specs: [
        { label: "Platform", value: "Mobile Robot" },
        { label: "Framework", value: "ROS2" },
        { label: "Simulation", value: "Gazebo" },
        { label: "Focus", value: "Autonomous Navigation" }
      ],
      schematicBadge: "ROBOTICS // AUTONOMOUS SYSTEM"
    }
  },

  {
    id: "project-11",
    number: "11",
    title: "ROBOTIC ARM",
    subtitle: "Robotic Control & Automation",
    category: "ROBOTICS & CONTROL",
    year: "2025",
    shortDescription:
      "Robotic arm project exploring motion control, servo systems, embedded programming, and automation.",
    technologies: ["Embedded C", "C", "STM32", "ESP32", "Servo Motors", "Control Systems"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/robotic-arm",
    hotspot: {
      x: 30,
      y: 55,
      color: "#FF6D00",
      labelPos: "right"
    },
    frameGrid: {
      col: 1,
      row: 2,
      x: 54,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#FF6D00"
    },
    caseStudy: {
      overview:
        "Robotic Arm explores multi-axis robotic motion and embedded control.",
      problem:
        "Robotic manipulators require precise control of multiple actuators and coordinated movement.",
      solution:
        "Worked on embedded control concepts for servo-driven robotic movement and automation.",
      hardware: [
        "Servo motors",
        "Microcontroller",
        "Motor drivers",
        "Mechanical arm structure"
      ],
      software: [
        "Embedded C",
        "C programming",
        "Motion-control logic",
        "Servo control"
      ],
      technologies: ["STM32", "ESP32", "Embedded C", "Servo Motors"],
      myRole:
        "Robotics developer — embedded control, motion logic, hardware integration, and automation.",
      year: "2025",
      specs: [
        { label: "System", value: "Robotic Manipulator" },
        { label: "Control", value: "Embedded" },
        { label: "Actuation", value: "Servo Motors" },
        { label: "Focus", value: "Automation" }
      ],
      schematicBadge: "ROBOTICS // ARM CONTROL"
    }
  },

  {
    id: "project-12",
    number: "12",
    title: "SMART DUSTBIN",
    subtitle: "Smart Waste Management",
    category: "IoT & AUTOMATION",
    year: "2024",
    shortDescription:
      "Smart waste-management prototype using sensors and embedded control to automate bin interaction and monitoring.",
    technologies: ["Arduino", "ESP32", "Sensors", "Embedded C", "IoT"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/smart-dustbin",
    hotspot: {
      x: 40,
      y: 67,
      color: "#00C853",
      labelPos: "right"
    },
    frameGrid: {
      col: 2,
      row: 2,
      x: 68.5,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#00C853"
    },
    caseStudy: {
      overview:
        "Smart Dustbin is an automation project using sensors and embedded systems to improve waste-bin interaction.",
      problem:
        "Traditional waste bins require manual interaction and provide little information about usage.",
      solution:
        "Explored sensor-based detection and embedded automation for hands-free operation and smarter waste handling.",
      hardware: [
        "Ultrasonic sensor",
        "Microcontroller",
        "Servo motor",
        "Power supply"
      ],
      software: [
        "Embedded C",
        "Sensor processing",
        "Motor-control logic"
      ],
      technologies: ["Arduino", "ESP32", "Sensors", "Embedded C"],
      myRole:
        "Embedded developer — sensor integration, automation logic, and prototype development.",
      year: "2024",
      specs: [
        { label: "Domain", value: "Smart Waste" },
        { label: "Controller", value: "Microcontroller" },
        { label: "Sensing", value: "Ultrasonic" },
        { label: "Focus", value: "Automation" }
      ],
      schematicBadge: "IOT // SMART WASTE"
    }
  },

  {
    id: "project-13",
    number: "13",
    title: "RSNA KNEE AI",
    subtitle: "Medical Imaging & Abnormality Detection",
    category: "AI / ML / COMPUTER VISION",
    year: "2026",
    shortDescription:
      "Medical imaging project exploring deep-learning-based knee abnormality detection using the RSNA dataset and PyTorch.",
    technologies: ["Python", "PyTorch", "DINOv3", "Computer Vision", "Deep Learning", "GPU"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/medical-imaging",
    hotspot: {
      x: 88,
      y: 78,
      color: "#B026FF",
      labelPos: "left"
    },
    frameGrid: {
      col: 3,
      row: 2,
      x: 83,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#B026FF"
    },
    caseStudy: {
      overview:
        "RSNA Knee AI explores deep learning for automated analysis of knee medical images.",
      problem:
        "Medical imaging datasets contain complex visual patterns that can be difficult to analyze manually at scale.",
      solution:
        "Experimented with deep-learning models and computer-vision pipelines for multi-label knee abnormality classification.",
      hardware: [
        "GPU-based training environment",
        "Machine-learning workstation"
      ],
      software: [
        "Python",
        "PyTorch",
        "Deep-learning models",
        "Training and validation pipelines"
      ],
      technologies: ["PyTorch", "DINOv3", "Python", "Computer Vision"],
      myRole:
        "ML practitioner — model experimentation, training, evaluation, and computer-vision research.",
      year: "2026",
      specs: [
        { label: "Domain", value: "Medical AI" },
        { label: "Task", value: "Knee Abnormality Detection" },
        { label: "Framework", value: "PyTorch" },
        { label: "Approach", value: "Deep Learning" }
      ],
      schematicBadge: "AI LAB // MEDICAL IMAGING"
    }
  },

  {
    id: "project-14",
    number: "14",
    title: "FACE DETECTION AI",
    subtitle: "Computer Vision Experiment",
    category: "AI & COMPUTER VISION",
    year: "2025",
    shortDescription:
      "Computer-vision experiment exploring automated face detection and visual recognition pipelines.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Deep Learning"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/face-detection",
    hotspot: {
      x: 22,
      y: 48,
      color: "#00E5FF",
      labelPos: "right"
    },
    frameGrid: {
      col: 1,
      row: 1,
      x: 54,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#00E5FF"
    },
    caseStudy: {
      overview:
        "Face Detection AI is a computer-vision project focused on detecting faces from image or camera input.",
      problem:
        "Automated visual systems require reliable methods to identify relevant objects or regions within images.",
      solution:
        "Explored image-processing and AI-based face detection workflows.",
      hardware: [
        "Camera",
        "Computer / edge device"
      ],
      software: [
        "Python",
        "OpenCV",
        "Computer vision models",
        "Image-processing pipeline"
      ],
      technologies: ["Python", "OpenCV", "Computer Vision"],
      myRole:
        "AI/ML developer — computer-vision implementation, experimentation, and model integration.",
      year: "2025",
      specs: [
        { label: "Domain", value: "Computer Vision" },
        { label: "Task", value: "Face Detection" },
        { label: "Framework", value: "OpenCV / Python" },
        { label: "Focus", value: "Visual Recognition" }
      ],
      schematicBadge: "AI // FACE DETECTION"
    }
  },

  {
    id: "project-15",
    number: "15",
    title: "NUMBER PLATE AI",
    subtitle: "Vehicle Number Plate Detection",
    category: "AI & COMPUTER VISION",
    year: "2025",
    shortDescription:
      "Computer-vision project exploring vehicle number-plate detection and recognition from visual input.",
    technologies: ["Python", "OpenCV", "Computer Vision", "OCR", "AI"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/number-plate-recognition",
    hotspot: {
      x: 52,
      y: 74,
      color: "#FFAB00",
      labelPos: "top"
    },
    frameGrid: {
      col: 2,
      row: 1,
      x: 68.5,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#FFAB00"
    },
    caseStudy: {
      overview:
        "Number Plate AI explores automated vehicle number-plate detection and recognition.",
      problem:
        "Manual identification of vehicle registration information is difficult to scale for automated systems.",
      solution:
        "Explored image-processing, plate localization, and recognition workflows for vehicle images.",
      hardware: [
        "Camera",
        "Computer / edge device"
      ],
      software: [
        "Python",
        "OpenCV",
        "Image processing",
        "OCR concepts"
      ],
      technologies: ["Python", "OpenCV", "OCR", "Computer Vision"],
      myRole:
        "Computer-vision developer — image processing, detection logic, and AI experimentation.",
      year: "2025",
      specs: [
        { label: "Domain", value: "Computer Vision" },
        { label: "Task", value: "Number Plate Detection" },
        { label: "Input", value: "Vehicle Images / Video" },
        { label: "Focus", value: "Automated Recognition" }
      ],
      schematicBadge: "AI // VEHICLE VISION"
    }
  },

  {
    id: "project-16",
    number: "16",
    title: "ESP32-S3 PCB",
    subtitle: "Custom Embedded Hardware Design",
    category: "PCB & ELECTRONICS",
    year: "2026",
    shortDescription:
      "Custom PCB design work focused on building compact ESP32-S3-based embedded hardware instead of relying only on development boards.",
    technologies: ["ESP32-S3", "KiCad", "Altium", "PCB Design", "Embedded C", "Electronics"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/esp32",
    hotspot: {
      x: 69,
      y: 47,
      color: "#76FF03",
      labelPos: "top"
    },
    frameGrid: {
      col: 3,
      row: 1,
      x: 83,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#76FF03"
    },
    caseStudy: {
      overview:
        "ESP32-S3 PCB is a custom embedded-hardware design project focused on creating dedicated PCB-based ESP32 systems.",
      problem:
        "Prototype development boards are useful for experimentation but often need to evolve into purpose-built hardware.",
      solution:
        "Explored custom one-layer and two-layer PCB design using professional EDA tools for embedded applications.",
      hardware: [
        "ESP32-S3",
        "Custom PCB",
        "Power-management circuitry",
        "Connectors and sensor interfaces"
      ],
      software: [
        "Embedded C",
        "Firmware development",
        "Hardware testing"
      ],
      technologies: ["ESP32-S3", "KiCad", "Altium", "Embedded C", "PCB Design"],
      myRole:
        "PCB and embedded developer — schematic design, PCB layout, component integration, and firmware direction.",
      year: "2026",
      specs: [
        { label: "Controller", value: "ESP32-S3" },
        { label: "PCB", value: "1-Layer / 2-Layer" },
        { label: "EDA", value: "KiCad + Altium" },
        { label: "Focus", value: "Custom Embedded Hardware" }
      ],
      schematicBadge: "HARDWARE // ESP32-S3 PCB"
    }
  },

  {
    id: "project-17",
    number: "17",
    title: "MAGNETOMETER VEHICLE DETECTION",
    subtitle: "Vehicle Detection with MQTT",
    category: "EMBEDDED & IoT",
    year: "2025",
    shortDescription:
      "Sensor-based vehicle detection concept using magnetometer sensing and MQTT communication.",
    technologies: ["Magnetometer", "ESP32", "MQTT", "Python", "IoT", "Sensors"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/mqtt",
    hotspot: {
      x: 37,
      y: 76,
      color: "#00C853",
      labelPos: "top"
    },
    frameGrid: {
      col: 1,
      row: 2,
      x: 54,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#00C853"
    },
    caseStudy: {
      overview:
        "Magnetometer Vehicle Detection explores using magnetic-field changes to detect nearby vehicles and communicate detection events.",
      problem:
        "Vehicle detection can require compact sensors and reliable wireless event transmission.",
      solution:
        "Explored magnetometer-based vehicle sensing combined with MQTT messaging for remote communication.",
      hardware: [
        "Magnetometer sensor",
        "ESP32",
        "Sensor interface",
        "Power system"
      ],
      software: [
        "Embedded firmware",
        "MQTT communication",
        "Event processing",
        "Data monitoring"
      ],
      technologies: ["Magnetometer", "ESP32", "MQTT", "Python"],
      myRole:
        "Embedded IoT developer — sensor integration, detection logic, MQTT communication, and prototype development.",
      year: "2025",
      specs: [
        { label: "Sensor", value: "Magnetometer" },
        { label: "Controller", value: "ESP32" },
        { label: "Protocol", value: "MQTT" },
        { label: "Application", value: "Vehicle Detection" }
      ],
      schematicBadge: "IOT // VEHICLE DETECTION"
    }
  },

  {
    id: "project-18",
    number: "18",
    title: "AI / LLM / NLP LAB",
    subtitle: "AI Models, Chatbots & Intelligent Systems",
    category: "AI / LLM / NLP",
    year: "2026",
    shortDescription:
      "Ongoing experimentation with AI/ML models, LLMs, NLP, chatbot integration, automation, and Edge AI applications.",
    technologies: ["Python", "PyTorch", "LLM", "NLP", "n8n", "Edge AI"],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/artificial-intelligence",
    hotspot: {
      x: 84,
      y: 52,
      color: "#B026FF",
      labelPos: "left"
    },
    frameGrid: {
      col: 2,
      row: 2,
      x: 68.5,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#B026FF"
    },
    caseStudy: {
      overview:
        "The AI / LLM / NLP Lab represents ongoing experimentation across different artificial-intelligence models and applications.",
      problem:
        "Different products and workflows require different combinations of language AI, computer vision, automation, and edge inference.",
      solution:
        "Worked hands-on with AI/ML algorithms, LLMs, NLP models, chatbot systems, automation workflows, and Edge AI concepts.",
      hardware: [
        "GPU computing",
        "Raspberry Pi",
        "ESP32",
        "Edge AI hardware"
      ],
      software: [
        "Python",
        "PyTorch",
        "LLMs",
        "NLP",
        "Chatbot integration",
        "n8n"
      ],
      technologies: ["Python", "PyTorch", "LLM", "NLP", "n8n", "Edge AI"],
      myRole:
        "AI explorer and developer — model experimentation, AI integration, chatbot development, automation, and product research.",
      year: "2026",
      specs: [
        { label: "AI", value: "Machine Learning + Deep Learning" },
        { label: "Language", value: "LLM + NLP" },
        { label: "Integration", value: "Chatbots + Automation" },
        { label: "Deployment", value: "Edge AI Exploration" }
      ],
      schematicBadge: "AI LAB // LLM + NLP + EDGE"
    }
  },
    {
    id: "project-19",
    number: "19",
    title: "MACHINE GRID",
    subtitle: "Industrial Machine Health Monitoring IoT",
    category: "IoT & INDUSTRIAL AUTOMATION",
    year: "2026",
    shortDescription:
      "IoT-based industrial monitoring system designed to track machine health conditions and provide useful condition data for industrial maintenance and monitoring.",
    technologies: [
      "IoT",
      "ESP32",
     "Sensors",
      "I2C",
      "Embedded C"
    ],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/iot",
    hotspot: {
      x: 46,
      y: 62,
      color: "#00E5FF",
      labelPos: "top"
    },
    frameGrid: {
      col: 3,
      row: 1,
      x: 83,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#00E5FF"
    },
    caseStudy: {
      overview:
        "Machine Grid is an industrial IoT project focused on monitoring machine health conditions and collecting machine-related data.",
      problem:
        "Industrial machines need continuous condition monitoring to help identify abnormal operating conditions and support maintenance activities.",
      solution:
        "Developed an IoT monitoring concept using sensors, embedded processing, and communication to observe machine health conditions.",
      hardware: [
        "ESP32",
        "DS18B20",
        "MPU6050",
        "Sensor interfaces",
        "Power system"
      ],
      software: [
        "Embedded firmware",
        "MQTT communication",
        "Machine-data processing",
        "Monitoring dashboard concept"
      ],
      technologies: [
        "ESP32",
        "IoT",
        "MQTT",
        "Sensors",
        "Python",
        "Embedded C"
      ],
      myRole:
        "IoT and embedded systems developer — sensor integration, machine monitoring, communication, and system development.",
      year: "2026",
      specs: [
        { label: "Domain", value: "Industrial IoT" },
        { label: "Application", value: "Machine Health Monitoring" },
        { label: "Communication", value: "MQTT" },
        { label: "Focus", value: "Condition Monitoring" }
      ],
      schematicBadge: "INDUSTRIAL IOT // MACHINE HEALTH"
    }
  },

  {
    id: "project-20",
    number: "21",
    title: "COW COTTAGE MONITORING",
    subtitle: "Livestock Health & Movement Tracking",
    category: "IoT & AGRITECH",
    year: "2026",
    shortDescription:
      "Smart livestock monitoring system designed to track cow health conditions, movement, and activity within a cattle-cottage environment.",
    technologies: [
      "IoT",
      "ESP32",
      "GPS",
      "GSM",
      "WIFI AND SMS",
      "Sensors",
      "MQTT",
      "Embedded C"
    ],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/iot",
    hotspot: {
      x: 58,
      y: 76,
      color: "#76FF03",
      labelPos: "top"
    },
    frameGrid: {
      col: 2,
      row: 2,
      x: 68.5,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#76FF03"
    },
    caseStudy: {
      overview:
        "Cow Cottage Monitoring is an IoT and agritech concept for monitoring cattle health conditions, movement, and activity.",
      problem:
        "Monitoring livestock health and movement manually can be difficult when managing multiple animals.",
      solution:
        "Explored a connected monitoring system using sensors, location tracking, embedded devices, and communication to collect cattle-related information.",
      hardware: [
        "ESP32",
        "GPS module",
        "Wearable / animal sensors",
        "Environmental sensors",
        "Wireless communication hardware"
      ],
      software: [
        "Embedded firmware",
        "GPS tracking",
        "Sensor data processing",
        "MQTT communication",
        "Monitoring dashboard concept"
      ],
      technologies: [
        "ESP32",
        "GPS",
        "IoT",
        "MQTT",
        "Sensors",
        "Embedded C"
      ],
      myRole:
        "IoT and embedded systems developer — livestock-monitoring concept, sensor integration, tracking, and connected-system development.",
      year: "2026",
      specs: [
        { label: "Domain", value: "Agritech / Livestock" },
        { label: "Monitoring", value: "Health + Movement" },
        { label: "Tracking", value: "GPS / Connected Sensors" },
        { label: "Focus", value: "Smart Livestock Monitoring" }
      ],
      schematicBadge: "AGRITECH // LIVESTOCK MONITORING"
    }
  },
  {
  id: "project-21",
  number: "22",

  title: "FUNDVISION",

  subtitle: "Client-Side Mutual Fund Analytics Browser Extension",

  category: "BROWSER EXTENSION & FINTECH",

  year: "2026",

  shortDescription:
    "Browser-based mutual fund analytics tool that imports fund data and provides interactive performance, risk, portfolio, and comparative analysis directly on the client side.",

  technologies: [
    "React",
    "TypeScript",
    "JavaScript",
    "Excel / XLSX",
    "Browser Extension",
    "Data Visualization",
    "Financial Analytics"
  ],

  documentUrl: "/resume.pdf",

  githubUrl: "https://github.com/topics/browser-extension",

  hotspot: {
    x: 67,
    y: 58,
    color: "#00E5FF",
    labelPos: "top"
  },

  frameGrid: {
    col: 3,
    row: 2,
    x: 83,
    y: 62,
    width: 12.5,
    height: 24,
    accentColor: "#00E5FF"
  },

  caseStudy: {
    overview:
      "FundVision is a client-side browser extension designed to make mutual fund data analysis faster and more accessible through an interactive analytics dashboard.",

    problem:
      "Fund data often comes in large spreadsheets containing performance, risk, portfolio, valuation, and allocation metrics that are difficult to analyze manually.",

    solution:
      "Built a browser-based analytics workflow that imports fund spreadsheets, detects available data fields, and dynamically presents relevant performance, risk, portfolio, allocation, and comparative analytics without requiring a backend database.",

    hardware: [
      "Computer / Laptop",
      "Web Browser"
    ],

    software: [
      "React",
      "TypeScript",
      "JavaScript",
      "Excel / XLSX data processing",
      "Browser Extension APIs",
      "Interactive data visualization"
    ],

    technologies: [
      "React",
      "TypeScript",
      "Browser Extension",
      "Excel Data Processing",
      "Data Visualization",
      "Financial Analytics"
    ],

    myRole:
      "Product developer — browser-extension architecture, fund-data processing, dynamic dashboard design, analytics workflow, and user experience.",

    year: "2026",

    specs: [
      { label: "Product", value: "Browser Extension" },
      { label: "Data", value: "BSE Mutual Fund Data" },
      { label: "Processing", value: "Client-Side" },
      { label: "Output", value: "Interactive Fund Analytics" }
    ],

    schematicBadge: "PRODUCT // FUNDVISION // FINTECH"
  }
},
  {
    id: "project-22",
    number: "23",
    title: "HOME EXPENSE TRACKER",
    subtitle: "Personal Finance & Expense Management",
    category: "SOFTWARE & FINTECH",
    year: "2023",
    shortDescription:
      "Personal expense-tracking system for recording, organizing, and analyzing household spending and financial patterns.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Data Visualization",
      "Local Storage"
    ],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/expense-tracker",
    hotspot: {
      x: 31,
      y: 64,
      color: "#00E5FF",
      labelPos: "top"
    },
    frameGrid: {
      col: 1,
      row: 1,
      x: 54,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#00E5FF"
    },
    caseStudy: {
      overview:
        "Home Expense Tracker is a personal finance application designed to make everyday expense recording and spending analysis easier.",
      problem:
        "Tracking household expenses manually can make it difficult to understand spending patterns and manage budgets.",
      solution:
        "Created a structured expense-management workflow for recording transactions, organizing categories, and visualizing spending patterns.",
      hardware: [
        "Computer or mobile device"
      ],
      software: [
        "React",
        "TypeScript",
        "JavaScript",
        "Data visualization",
        "Local data management"
      ],
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Data Visualization"
      ],
      myRole:
        "Product and software developer — application design, frontend development, data handling, and user experience.",
      year: "2023",
      specs: [
        { label: "Domain", value: "Personal Finance" },
        { label: "Core", value: "Expense Tracking" },
        { label: "Analytics", value: "Spending Insights" },
        { label: "Focus", value: "Simple Finance Management" }
      ],
      schematicBadge: "SOFTWARE // EXPENSE TRACKER"
    }
  },

  {
    id: "project-23",
    number: "24",
    title: "QR TRACK",
    subtitle: "QR-Based Tracking & Management System",
    category: "SOFTWARE & AUTOMATION",
    year: "2024",
    shortDescription:
      "QR-based tracking and management system for identifying, updating, and monitoring records through scannable digital identifiers.",
    technologies: [
      "QR Code",
      "React",
      "TypeScript",
      "JavaScript",
      "Database",
      "Web Development"
    ],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/qr-code",
    hotspot: {
      x: 54,
      y: 41,
      color: "#76FF03",
      labelPos: "bottom"
    },
    frameGrid: {
      col: 2,
      row: 1,
      x: 68.5,
      y: 33,
      width: 12.5,
      height: 24,
      accentColor: "#76FF03"
    },
    caseStudy: {
      overview:
        "QR Track is a QR-based management concept that connects physical objects or records with digital tracking information.",
      problem:
        "Managing physical items or records can become difficult when identification and status updates are handled manually.",
      solution:
        "Uses QR codes as unique identifiers so users can scan, access, update, and track associated information through a web-based system.",
      hardware: [
        "QR codes",
        "Smartphone or QR scanner"
      ],
      software: [
        "React",
        "TypeScript",
        "QR generation and scanning",
        "Web application",
        "Data management"
      ],
      technologies: [
        "QR Code",
        "React",
        "TypeScript",
        "JavaScript",
        "Web Development"
      ],
      myRole:
        "Software and product developer — workflow design, QR-based identification, web development, and management-system architecture.",
      year: "2024",
      specs: [
        { label: "Technology", value: "QR Identification" },
        { label: "Application", value: "Tracking & Management" },
        { label: "Interface", value: "Web Application" },
        { label: "Focus", value: "Digital Record Tracking" }
      ],
      schematicBadge: "SOFTWARE // QR TRACKING"
    }
  },

  {
    id: "project-24",
    number: "25",
    title: "CYBER THREAT AI",
    subtitle: "AI-Based Cyber Threat Detection",
    category: "AI / CYBERSECURITY",
    year: "2025",
    shortDescription:
      "AI and machine-learning concept for identifying suspicious patterns, anomalies, and potential cyber threats from security-related data.",
    technologies: [
      "Python",
      "Machine Learning",
      "Cybersecurity",
      "Anomaly Detection",
      "NLP",
      "Data Analysis"
    ],
    documentUrl: "/resume.pdf",
    githubUrl: "https://github.com/topics/cybersecurity",
    hotspot: {
      x: 77,
      y: 67,
      color: "#FF3366",
      labelPos: "left"
    },
    frameGrid: {
      col: 3,
      row: 2,
      x: 83,
      y: 62,
      width: 12.5,
      height: 24,
      accentColor: "#FF3366"
    },
    caseStudy: {
      overview:
        "Cyber Threat AI explores the use of artificial intelligence and machine learning for detecting suspicious activity and potential cyber threats.",
      problem:
        "Large volumes of security events can make manual identification of unusual or potentially malicious activity difficult.",
      solution:
        "Explored machine-learning and anomaly-detection approaches for identifying unusual patterns in security-related data.",
      hardware: [
        "Computer / ML workstation",
        "Optional GPU for model experimentation"
      ],
      software: [
        "Python",
        "Machine-learning models",
        "Anomaly detection",
        "Security-data processing",
        "Data visualization"
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "Cybersecurity",
        "Anomaly Detection",
        "Data Analysis"
      ],
      myRole:
        "AI/ML developer — security-data analysis, model experimentation, anomaly detection, and intelligent threat-monitoring concepts.",
      year: "2025",
      specs: [
        { label: "Domain", value: "Cybersecurity" },
        { label: "Core", value: "AI + Machine Learning" },
        { label: "Method", value: "Anomaly Detection" },
        { label: "Focus", value: "Threat Identification" }
      ],
      schematicBadge: "AI // CYBER THREAT DETECTION"
    }
  },
  {
  id: "project-25",
  number: "26",

  title: "ML FUND ANALYSIS",

  subtitle: "Machine Learning-Based Mutual Fund Analysis",

  category: "AI / ML / FINANCIAL ANALYTICS",

  year: "2025",

  shortDescription:
    "Machine-learning project for analyzing mutual fund data, identifying performance and risk patterns, and generating data-driven fund insights.",

  technologies: [
    "Python",
    "Machine Learning",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Data Analysis",
    "Financial Analytics"
  ],

  documentUrl: "/resume.pdf",

  githubUrl: "https://github.com/topics/machine-learning",

  hotspot: {
    x: 43,
    y: 52,
    color: "#B026FF",
    labelPos: "top"
  },

  frameGrid: {
    col: 1,
    row: 1,
    x: 54,
    y: 33,
    width: 12.5,
    height: 24,
    accentColor: "#B026FF"
  },

  caseStudy: {
    overview:
      "ML Fund Analysis is a machine-learning research project focused on applying data analysis and machine-learning techniques to mutual fund datasets.",

    problem:
      "Mutual fund datasets contain multiple performance, risk, valuation, and portfolio parameters that can be difficult to interpret together.",

    solution:
      "Developed an ML-based analysis workflow to process fund data, study relationships between financial metrics, identify patterns, and support comparative fund analysis.",

    hardware: [
      "Computer / ML workstation",
      "Optional GPU for model experimentation"
    ],

    software: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine-learning models",
      "Data analysis pipelines"
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Financial Analytics"
    ],

    myRole:
      "ML developer — data preprocessing, feature analysis, machine-learning experimentation, financial-data analysis, and result interpretation.",

    year: "2025",

    specs: [
      { label: "Domain", value: "Financial Analytics" },
      { label: "Data", value: "Mutual Fund Dataset" },
      { label: "Core", value: "Machine Learning" },
      { label: "Focus", value: "Fund Pattern & Risk Analysis" }
    ],

    schematicBadge: "AI / ML // MUTUAL FUND ANALYSIS"
  }
},

    

];

