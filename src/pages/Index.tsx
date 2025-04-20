import { useState } from "react";
import ResourceCard from "@/components/ResourceCard";
import Layout from "@/components/Layout";
import ChatBot from "@/components/ChatBot";
import { 
  Shield, 
  Code, 
  Database, 
  Users, 
  Server,
  ChartLine,
  User,
  Network
} from "lucide-react";

const communities = [
  {
    title: "Product Management Essentials",
    description: "Essential resources, tools and best practices for modern product managers.",
    category: "Product Management",
    Icon: Users,
    subcategories: {
      resources: 2,
      courses: 1,
      certifications: 1
    }
  },
  {
    title: "Full Stack Development Hub",
    description: "Comprehensive resources for full stack developers covering frontend and backend.",
    category: "Full Stack Development",
    Icon: Code,
    subcategories: {
      resources: 1,
      courses: 1,
      certifications: 1
    }
  },
  {
    title: "Software Architecture Patterns",
    description: "Learn about software architecture patterns, principles and best practices.",
    category: "Software Architecture",
    Icon: Network,
    subcategories: {
      resources: 2,
      courses: 1,
      certifications: 1
    }
  },
  {
    title: "UX Research & Design",
    description: "User experience design principles, research methodologies and tools.",
    category: "UX Design",
    Icon: User,
    subcategories: {
      resources: 2,
      courses: 1,
      certifications: 1
    }
  },
  {
    title: "IT Infrastructure",
    description: "Resources for IT professionals covering infrastructure, cloud and systems.",
    category: "IT",
    Icon: Server,
    subcategories: {
      resources: 2,
      courses: 1,
      certifications: 1
    }
  },
  {
    title: "DevOps Practices",
    description: "Modern DevOps tools, practices and automation techniques.",
    category: "DevOps",
    Icon: Database,
    subcategories: {
      resources: 2,
      courses: 1,
      certifications: 1
    }
  },
  {
    title: "Data Science Insights",
    description: "Data science methodologies, machine learning and analytics resources.",
    category: "Data Science",
    Icon: ChartLine,
    subcategories: {
      resources: 2,
      courses: 1,
      certifications: 1
    }
  },
  {
    title: "Cybersecurity Guide",
    description: "Security best practices, tools and frameworks for modern applications.",
    category: "Cybersecurity",
    Icon: Shield,
    subcategories: {
      resources: 2,
      courses: 1,
      certifications: 1
    }
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(communities.map(item => item.category))];

  const filteredCommunities = communities.filter(
    (community) => activeCategory === "All" || community.category === activeCategory
  );

  return (
    <Layout
      categories={categories}
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
    >
      <div className="p-4 sm:p-6 md:p-8">
        <header className="border-b-4 border-black mb-8 md:mb-12 pb-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
              THE TECH TRIBUNE
            </h1>
            <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto italic">
              Curated resources for different technology communities
            </p>
            <div className="text-xs sm:text-sm mt-4 font-sans">
              EDITION 2025 • VOLUME 1 • ISSUE 1
            </div>
          </div>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredCommunities.map((community) => (
              <ResourceCard
                key={community.title}
                {...community}
                className="animate-fade-in"
              />
            ))}
          </div>
        </main>
      </div>
      <ChatBot />
    </Layout>
  );
};

export default Index;
