
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CategoryFilter from "@/components/CategoryFilter";

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Sidebar = ({ categories, activeCategory, onCategoryChange }: SidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);
  
  const filteredCategories = categories.filter(category => 
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`fixed top-0 left-0 h-full border-r-2 border-black bg-[#f5f5f0] transition-all duration-300 z-10
      ${isExpanded ? 'w-64' : 'w-16'}
    `}>
      <div className="p-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mb-4 px-3 py-2 border-2 border-black font-serif font-bold hover:bg-black hover:text-white transition-colors"
        >
          {isExpanded ? '« Close' : '»'}
        </button>
        
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
              onCategoryChange={onCategoryChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
