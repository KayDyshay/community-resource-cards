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
import CategoryFilter from "@/components/CategoryFilter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Tech Community Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated resources for different technology communities
          </p>
        </header>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {filteredCommunities.map((community) => (
                <CarouselItem key={community.title} className="basis-full">
                  <div className="p-1">
                    <ResourceCard
                      {...community}
                      className="animate-fade-in mx-auto max-w-xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white" />
            <CarouselNext className="border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Index;
