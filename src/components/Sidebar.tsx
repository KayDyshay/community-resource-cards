
import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import CategoryFilter from "@/components/CategoryFilter";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Sidebar = ({ categories, activeCategory, onCategoryChange }: SidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  
  // Auto-collapse sidebar on mobile when component mounts
  useEffect(() => {
    setIsExpanded(!isMobile);
  }, [isMobile]);
  
  const filteredCategories = categories.filter(category => 
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Mobile toggle button that appears at the top left corner */}
      {isMobile && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="fixed top-[14px] left-4 z-[60] p-2 text-black"
          aria-label={isExpanded ? "Close sidebar" : "Open sidebar"}
        >
          {isExpanded ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* Main sidebar */}
      <div className={`fixed top-0 left-0 h-full border-r-2 border-black bg-[#f5f5f0] transition-all duration-300 z-50
        ${isExpanded ? 'w-64 translate-x-0' : isMobile ? 'w-64 -translate-x-full' : 'w-16'}
        ${isMobile ? 'shadow-lg' : ''}
      `}>
        <div className="p-4 pt-20 md:pt-4">
          {!isMobile && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full mb-4 px-3 py-2 border-2 border-black font-serif font-bold hover:bg-black hover:text-white transition-colors"
            >
              {isExpanded ? '« Close' : '»'}
            </button>
          )}
          
          {isExpanded && (
            <>
              <div className="relative mb-6">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 border-2 border-black focus-visible:ring-0 font-serif"
                />
              </div>
              
              <h3 className="font-serif font-bold text-lg border-b-2 border-black pb-2 mb-4">
                Categories
              </h3>
              
              <CategoryFilter
                categories={filteredCategories}
                activeCategory={activeCategory}
                onCategoryChange={(category) => {
                  onCategoryChange(category);
                  if (isMobile) setIsExpanded(false);
                }}
              />
            </>
          )}
        </div>
      </div>
      
      {/* Overlay that closes the sidebar when clicked (mobile only) */}
      {isMobile && isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
