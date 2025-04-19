
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
    <div className="min-h-screen bg-page-bg font-vina-sans text-dark-grey">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-dark-grey mb-4">
            Professional <span className="text-primary">Resources</span>
          </h1>
          <p className="text-dark-grey max-w-2xl mx-auto mb-8">
            Discover curated resources and communities for professionals across various technology domains.
          </p>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </header>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filteredCommunities.map((community) => (
                <CarouselItem key={community.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ResourceCard
                    {...community}
                    className="h-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-4 h-10 w-10 rounded-full shadow-md hover:shadow-lg transition-shadow border-none" />
              <CarouselNext className="h-10 w-10 rounded-full shadow-md hover:shadow-lg transition-shadow border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Index;
