export interface Resource {
  title: string;
  description: string;
  keywords: string[];
  link: string;
}

export interface CategoryData {
  resources: Resource[];
  courses: Resource[];
  certifications: Resource[];
  podcasts: Resource[];
}

// Shared communication resource to be included in all categories
export const communicationResource = {
  title: "Communication & Presentations for Corporate Politics",
  description: "Sharpen your skills to communicate persuasively, navigate corporate politics, and speak the language of business.",
  keywords: ["communication", "presentations", "corporate politics", "business acumen"],
  link: "https://hbr.org/2018/07/how-to-speak-the-language-of-business"
};

export const resourceData: Record<string, CategoryData> = {
  "Product Management": {
    resources: [
      {
        title: "Product Roadmap Planning",
        description: "Learn effective techniques for creating and managing product roadmaps.",
        keywords: ["strategy", "planning", "prioritization"],
        link: "https://example.com/roadmap"
      },
      {
        title: "User Story Mapping",
        description: "Master the art of user story creation and mapping for better product development.",
        keywords: ["agile", "user stories", "requirements"],
        link: "https://example.com/user-stories"
      },
      communicationResource
    ],
    courses: [
      {
        title: "Product Management Fundamentals",
        description: "Comprehensive course covering core product management concepts.",
        keywords: ["basics", "fundamentals", "product strategy"],
        link: "https://example.com/pm-course"
      }
    ],
    certifications: [
      {
        title: "Professional Product Manager (PPM)",
        description: "Industry-recognized certification for product managers.",
        keywords: ["certification", "professional", "career"],
        link: "https://example.com/ppm-cert"
      }
    ],
    podcasts: [
      {
        title: "Masters of Scale",
        description: "Podcast by Reid Hoffman about scale, entrepreneurship, and product leadership.",
        keywords: ["startup", "leadership", "product"],
        link: "https://mastersofscale.com/"
      },
      {
        title: "Product Love Podcast",
        description: "Interviews with top product leaders and experts.",
        keywords: ["product management", "interviews", "leadership"],
        link: "https://productlovepodcast.com/"
      },
      {
        title: "Lenny's Newsletter",
        description: "In-depth conversations with product leaders about building and scaling successful products.",
        keywords: ["product management", "startup", "product strategy"],
        link: "https://www.lennysnewsletter.com/podcast"
      }
    ]
  },
  "Full Stack Development": {
    resources: [
      {
        title: "Modern Web Architecture",
        description: "Understanding frontend and backend integration in modern web applications.",
        keywords: ["architecture", "integration", "web development"],
        link: "https://example.com/web-arch"
      },
      communicationResource
    ],
    courses: [
      {
        title: "Full Stack Web Development Bootcamp",
        description: "Intensive program covering both frontend and backend development.",
        keywords: ["bootcamp", "comprehensive", "hands-on"],
        link: "https://example.com/fullstack-bootcamp"
      }
    ],
    certifications: [
      {
        title: "Certified Full Stack Developer",
        description: "Complete certification program for full stack development.",
        keywords: ["certification", "full stack", "professional"],
        link: "https://example.com/fullstack-cert"
      }
    ],
    podcasts: [
      {
        title: "Syntax",
        description: "A Tasty Treats Podcast for Web Developers",
        keywords: ["web development", "full stack", "frontend", "backend"],
        link: "https://syntax.fm/"
      },
      {
        title: "Full Stack Radio",
        description: "Conversations about building software products.",
        keywords: ["software", "development", "full stack"],
        link: "https://fullstackradio.com/"
      }
    ]
  },
  "Software Architecture": {
    resources: [
      {
        title: "Microservices Design",
        description: "Learn about microservices architecture and implementation strategies.",
        keywords: ["microservices", "distributed systems", "scalability"],
        link: "https://example.com/microservices"
      },
      {
        title: "System Design Fundamentals",
        description: "Core principles of designing large-scale software systems.",
        keywords: ["design patterns", "architecture", "scaling"],
        link: "https://example.com/system-design"
      },
      communicationResource
    ],
    courses: [
      {
        title: "Software Architecture and Design",
        description: "Comprehensive course on software architecture principles.",
        keywords: ["architecture", "design", "patterns"],
        link: "https://example.com/arch-course"
      }
    ],
    certifications: [
      {
        title: "Certified Software Architect",
        description: "Industry-standard certification for software architects.",
        keywords: ["certification", "architect", "professional"],
        link: "https://example.com/arch-cert"
      }
    ],
    podcasts: [
      {
        title: "Software Engineering Daily",
        description: "Interviews and stories about modern software engineering.",
        keywords: ["software engineering", "tech", "architecture"],
        link: "https://softwareengineeringdaily.com/"
      }
    ]
  },
  "UX Design": {
    resources: [
      {
        title: "User Research Methods",
        description: "Comprehensive guide to conducting effective user research.",
        keywords: ["research", "user testing", "interviews"],
        link: "https://example.com/user-research"
      },
      {
        title: "Design Systems",
        description: "Creating and maintaining scalable design systems.",
        keywords: ["design systems", "consistency", "components"],
        link: "https://example.com/design-systems"
      },
      communicationResource
    ],
    courses: [
      {
        title: "UX Design Course",
        description: "Learn the fundamentals of UX design.",
        keywords: ["ux", "design", "fundamentals"],
        link: "https://example.com/ux-course"
      }
    ],
    certifications: [
      {
        title: "Certified UX Designer",
        description: "Industry-recognized certification for UX designers.",
        keywords: ["certification", "ux", "designer"],
        link: "https://example.com/ux-cert"
      }
    ],
    podcasts: [
      {
        title: "UI Breakfast",
        description: "Practical UI/UX design advice for designers and product people.",
        keywords: ["ux", "ui", "design"],
        link: "https://uibreakfast.com/"
      }
    ]
  },
  "IT": {
    resources: [
      {
        title: "Cloud Infrastructure",
        description: "Managing and scaling cloud infrastructure effectively.",
        keywords: ["cloud", "infrastructure", "DevOps"],
        link: "https://example.com/cloud"
      },
      {
        title: "Security Best Practices",
        description: "Essential security practices for IT infrastructure.",
        keywords: ["security", "compliance", "risk management"],
        link: "https://example.com/security"
      },
      communicationResource
    ],
    courses: [
      {
        title: "IT Infrastructure Management",
        description: "Course on managing IT infrastructure.",
        keywords: ["it", "infrastructure", "management"],
        link: "https://example.com/it-course"
      }
    ],
    certifications: [
      {
        title: "Certified IT Professional",
        description: "Industry-recognized certification for IT professionals.",
        keywords: ["certification", "it", "professional"],
        link: "https://example.com/it-cert"
      }
    ],
    podcasts: [
      {
        title: "Packet Pushers",
        description: "Datacenter, cloud, and networking podcasts for IT pros.",
        keywords: ["it", "networking", "cloud"],
        link: "https://packetpushers.net/"
      }
    ]
  },
  "DevOps": {
    resources: [
      {
        title: "CI/CD Pipeline Design",
        description: "Building efficient continuous integration and deployment pipelines.",
        keywords: ["CI/CD", "automation", "deployment"],
        link: "https://example.com/cicd"
      },
      {
        title: "Container Orchestration",
        description: "Managing containerized applications with Kubernetes.",
        keywords: ["containers", "Kubernetes", "orchestration"],
        link: "https://example.com/containers"
      },
      communicationResource
    ],
    courses: [
      {
        title: "DevOps Fundamentals",
        description: "Course on DevOps principles and practices.",
        keywords: ["devops", "fundamentals", "practices"],
        link: "https://example.com/devops-course"
      }
    ],
    certifications: [
      {
        title: "Certified DevOps Engineer",
        description: "Industry-recognized certification for DevOps engineers.",
        keywords: ["certification", "devops", "engineer"],
        link: "https://example.com/devops-cert"
      }
    ],
    podcasts: [
      {
        title: "DevOps Cafe",
        description: "Conversations about DevOps, tools, and culture.",
        keywords: ["devops", "culture", "tools"],
        link: "https://devopscafe.org/"
      }
    ]
  },
  "Data Science": {
    resources: [
      {
        title: "Machine Learning Fundamentals",
        description: "Core concepts and applications of machine learning.",
        keywords: ["ML", "algorithms", "data analysis"],
        link: "https://example.com/ml"
      },
      {
        title: "Data Visualization",
        description: "Creating effective data visualizations for insights.",
        keywords: ["visualization", "analytics", "reporting"],
        link: "https://example.com/data-viz"
      },
      communicationResource
    ],
    courses: [
      {
        title: "Data Science Course",
        description: "Learn the fundamentals of data science.",
        keywords: ["data science", "fundamentals", "course"],
        link: "https://example.com/data-course"
      }
    ],
    certifications: [
      {
        title: "Certified Data Scientist",
        description: "Industry-recognized certification for data scientists.",
        keywords: ["certification", "data scientist", "professional"],
        link: "https://example.com/data-cert"
      }
    ],
    podcasts: [
      {
        title: "Data Skeptic",
        description: "Big data, data science, and machine learning.",
        keywords: ["data science", "machine learning", "analytics"],
        link: "https://dataskeptic.com/"
      }
    ]
  },
  "Cybersecurity": {
    resources: [
      {
        title: "Threat Detection",
        description: "Modern approaches to identifying and preventing security threats.",
        keywords: ["security", "monitoring", "threats"],
        link: "https://example.com/threats"
      },
      {
        title: "Security Architecture",
        description: "Designing secure system architectures and implementations.",
        keywords: ["architecture", "security", "design"],
        link: "https://example.com/sec-arch"
      },
      communicationResource
    ],
    courses: [
      {
        title: "Cybersecurity Fundamentals",
        description: "Course on cybersecurity principles and practices.",
        keywords: ["cybersecurity", "fundamentals", "course"],
        link: "https://example.com/cyber-course"
      }
    ],
    certifications: [
      {
        title: "Certified Cybersecurity Professional",
        description: "Industry-recognized certification for cybersecurity professionals.",
        keywords: ["certification", "cybersecurity", "professional"],
        link: "https://example.com/cyber-cert"
      }
    ],
    podcasts: [
      {
        title: "Smashing Security",
        description: "A fun take on cybersecurity, hacking and privacy.",
        keywords: ["cybersecurity", "hacking", "podcast"],
        link: "https://www.smashingsecurity.com/"
      }
    ]
  }
};
