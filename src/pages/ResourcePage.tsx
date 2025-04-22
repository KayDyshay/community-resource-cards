
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
import { resourceData, Resource } from "@/data/resourceData";

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
