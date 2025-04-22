import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronRight, GraduationCap, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Resource {
  title: string;
  description: string;
  keywords: string[];
  link: string;
}

interface CategoryData {
  resources: Resource[];
  courses: Resource[];
  certifications: Resource[];
}

// New: Shared communication resource to be included in all categories
const communicationResource = {
  title: "Communication & Presentations for Corporate Politics",
  description: "Sharpen your skills to communicate persuasively, navigate corporate politics, and speak the language of business.",
  keywords: ["communication", "presentations", "corporate politics", "business acumen"],
  link: "https://hbr.org/2018/07/how-to-speak-the-language-of-business"
};

const resourceData: Record<string, CategoryData> = {
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
    ]
  }
};

const ResourceSection = ({ title, resources, icon: Icon }: { title: string; resources: Resource[]; icon: any }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  if (resources.length === 0) return null;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-8">
      <CollapsibleTrigger className="flex items-center gap-2 w-full text-xl font-bold mb-4 hover:text-gray-600">
        <Icon className="w-6 h-6" />
        {title}
        <ChevronRight className={`ml-auto h-5 w-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="grid gap-6">
          {resources.map((resource, index) => (
            <a 
              key={index} 
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="transition-all duration-300 hover:shadow-lg bg-white border-2 border-black
                cursor-pointer overflow-hidden relative
                hover:transform hover:scale-105 hover:rotate-1
                after:absolute after:inset-0 after:opacity-0 after:transition-opacity
                after:bg-gradient-to-r after:from-[#ebff58] after:via-[#d946ef] after:to-[#8b5cf6]
                hover:after:opacity-20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {resource.title}
                    <ChevronRight className="h-5 w-5" />
                  </CardTitle>
                  <CardDescription className="text-black/80">
                    {resource.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {resource.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-black text-white text-sm rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const ResourcePage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const categoryData = category ? resourceData[category] : null;
  const [activeCategory, setActiveCategory] = useState(category || "All");
  const categories = ["All", ...Object.keys(resourceData)];

  const handleCategoryChange = (newCategory: string) => {
    setActiveCategory(newCategory);
    if (newCategory !== "All") {
      navigate(`/resource/${encodeURIComponent(newCategory)}`);
    } else {
      navigate('/');
    }
  };

  if (!category || !categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <Layout
      categories={categories}
      activeCategory={activeCategory}
      onCategoryChange={handleCategoryChange}
    >
      <div className="p-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                {category}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="border-b-4 border-black mb-12 pb-4">
          <h1 className="text-6xl font-bold mb-4">{category}</h1>
          <p className="text-xl text-black/70 italic">
            Essential resources and materials
          </p>
        </header>

        <ResourceSection title="Resources" resources={categoryData.resources} icon={ChevronRight} />
        <ResourceSection title="Courses" resources={categoryData.courses} icon={GraduationCap} />
        <ResourceSection title="Certifications" resources={categoryData.certifications} icon={Award} />
      </div>
    </Layout>
  );
};

export default ResourcePage;
