
import { useState } from "react";
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
import ResourceCard from "@/components/ResourceCard";
import Sidebar from "@/components/Sidebar";

const communities = [
  {
    title: "Product Management Essentials",
    description: "Essential resources, tools and best practices for modern product managers.",
    category: "Product Management",
    Icon: Users
  },
  {
    title: "Full Stack Development Hub",
    description: "Comprehensive resources for full stack developers covering frontend and backend.",
    category: "Full Stack Development",
    Icon: Code
  },
  {
    title: "Software Architecture Patterns",
    description: "Learn about software architecture patterns, principles and best practices.",
    category: "Software Architecture",
    Icon: Network
  },
  {
    title: "UX Research & Design",
    description: "User experience design principles, research methodologies and tools.",
    category: "UX Design",
    Icon: User
  },
  {
    title: "IT Infrastructure",
    description: "Resources for IT professionals covering infrastructure, cloud and systems.",
    category: "IT",
    Icon: Server
  },
  {
    title: "DevOps Practices",
    description: "Modern DevOps tools, practices and automation techniques.",
    category: "DevOps",
    Icon: Database
  },
  {
    title: "Data Science Insights",
    description: "Data science methodologies, machine learning and analytics resources.",
    category: "Data Science",
    Icon: ChartLine
  },
  {
    title: "Cybersecurity Guide",
    description: "Security best practices, tools and frameworks for modern applications.",
    category: "Cybersecurity",
    Icon: Shield
  }
];

const categories = ["All", ...new Set(communities.map(item => item.category))];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCommunities = communities.filter(
    (community) => activeCategory === "All" || community.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-serif">
      <Sidebar 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="ml-64 p-8">
        <header className="border-b-4 border-black mb-12 pb-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 font-serif">
              THE TECH TRIBUNE
            </h1>
            <p className="text-xl text-black/70 max-w-2xl mx-auto italic">
              Curated resources for different technology communities
            </p>
            <div className="text-sm mt-4 font-sans">
              EDITION 2025 • VOLUME 1 • ISSUE 1
            </div>
          </div>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
};

export default Index;
