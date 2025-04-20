
import React, { useState } from 'react';
import Layout from "@/components/Layout";
import { Link, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const categories = ["All", "Web Development", "AI", "Cybersecurity", "Design", "DevOps"];

const About = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category !== "All") {
      navigate(`/resource/${encodeURIComponent(category)}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Layout 
      categories={categories} 
      activeCategory={activeCategory} 
      onCategoryChange={handleCategoryChange}
    >
      <div className="py-4">
        <Breadcrumb className="mb-4 px-2 sm:px-0">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                About
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="border-b-4 border-black mb-6 md:mb-8 pb-4 px-2 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 font-serif">About The Tech Tribune</h1>
          <p className="text-md sm:text-lg md:text-xl text-black/70 max-w-2xl italic">
            Your trusted source for curated technology resources and communities
          </p>
        </header>
        
        <div className="prose prose-lg max-w-4xl font-serif mx-auto px-4">
          <p>
            The Tech Tribune is a curated collection of resources for various technology communities. 
            Our mission is to provide high-quality, relevant content for professionals across different 
            technical domains.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
