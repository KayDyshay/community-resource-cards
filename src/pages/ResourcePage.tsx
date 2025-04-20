
import { useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Resource {
  title: string;
  description: string;
  keywords: string[];
  link: string;
}

const resourceData: Record<string, Resource[]> = {
  "Product Management": [
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
    }
  ],
  "Full Stack Development": [
    {
      title: "Modern Web Architecture",
      description: "Understanding frontend and backend integration in modern web applications.",
      keywords: ["architecture", "integration", "web development"],
      link: "https://example.com/web-arch"
    },
    {
      title: "API Design Patterns",
      description: "Best practices for designing scalable and maintainable APIs.",
      keywords: ["API", "REST", "GraphQL"],
      link: "https://example.com/api-design"
    }
  ],
  "Software Architecture": [
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
    }
  ],
  "UX Design": [
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
    }
  ],
  "IT": [
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
    }
  ],
  "DevOps": [
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
    }
  ],
  "Data Science": [
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
    }
  ],
  "Cybersecurity": [
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
    }
  ]
};

const ResourcePage = () => {
  const { category } = useParams();
  const resources = category ? resourceData[category] : [];

  if (!category || !resources) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] p-8 font-serif">
      <div className="max-w-6xl mx-auto">
        <header className="border-b-4 border-black mb-12 pb-4">
          <h1 className="text-6xl font-bold mb-4">{category}</h1>
          <p className="text-xl text-black/70 italic">
            Essential resources and materials
          </p>
        </header>

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
      </div>
    </div>
  );
};

export default ResourcePage;
