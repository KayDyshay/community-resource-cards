
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import {
  Code,
  Layers,
  LineChart,
  Palette,
  Server,
  ShieldCheck,
  Terminal,
  SlidersHorizontal,
} from "lucide-react";
import ResourceCard from "@/components/ResourceCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { resourceData } from "@/data/resourceData";

const categoryIcons: { [key: string]: any } = {
  "Product Management": SlidersHorizontal,
  "Full Stack Development": Code,
  "Software Architecture": Layers,
  "UX Design": Palette,
  "IT": Server,
  "DevOps": Terminal,
  "Data Science": LineChart,
  "Cybersecurity": ShieldCheck,
};

// Helper function to get category descriptions
const getCategoryDescription = (category: string): string => {
  switch (category) {
    case "Product Management":
      return "Learn to drive product strategy, roadmap planning, and feature prioritization.";
    case "Full Stack Development":
      return "Master both frontend and backend technologies for complete web applications.";
    case "Software Architecture":
      return "Design scalable, maintainable software systems and infrastructure.";
    case "UX Design":
      return "Create user-centered digital experiences that solve real problems.";
    case "IT":
      return "Build and maintain critical technology infrastructure and systems.";
    case "DevOps":
      return "Automate and optimize software delivery and infrastructure management.";
    case "Data Science":
      return "Extract insights and create value from complex data using analytics and ML.";
    case "Cybersecurity":
      return "Protect systems, networks, and data from digital attacks and threats.";
    default:
      return "Explore resources across multiple technology disciplines.";
  }
};

// Helper function to count resources in a category
const countCategoryResources = (category: string) => {
  if (!resourceData[category]) return { resources: 0, courses: 0, certifications: 0 };
  
  return {
    resources: resourceData[category].resources.length,
    courses: resourceData[category].courses.length,
    certifications: resourceData[category].certifications.length,
  };
};

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Object.keys(resourceData)];
  const isMobile = useIsMobile();
  
  // Filter categories based on the active category
  const filteredCategories = activeCategory === "All" 
    ? Object.keys(resourceData) 
    : [activeCategory];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Layout
      categories={categories}
      activeCategory={activeCategory}
      onCategoryChange={handleCategoryChange}
    >
      <div className="p-4 md:p-8">
        <header className="border-b-4 border-black mb-8 pb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">THE TECH TRIBUNE</h1>
          <p className="text-lg md:text-xl text-black/70 italic font-serif">
            Essential resources for the modern technologist
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCategories.map(category => (
            <ResourceCard
              key={category}
              title={category}
              description={getCategoryDescription(category)}
              category={category}
              Icon={categoryIcons[category]}
              subcategories={countCategoryResources(category)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
