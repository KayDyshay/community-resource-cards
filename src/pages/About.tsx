
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
                About
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="border-b-4 border-black mb-12 pb-4">
          <h1 className="text-6xl font-bold mb-4 font-serif">About The Tech Tribune</h1>
          <p className="text-xl text-black/70 max-w-2xl italic">
            Your trusted source for curated technology resources and communities
          </p>
        </header>
        
        <div className="prose prose-lg max-w-4xl font-serif">
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
