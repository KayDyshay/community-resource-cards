
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "justify-start text-left font-serif rounded-none border-b border-gray-300 transition-all duration-300 px-4 py-3 h-auto",
            activeCategory === category 
              ? "bg-white text-black hover:bg-black/10" 
              : category === "All" 
                ? "bg-[#f3f3f3] text-black hover:bg-black/10" 
                : "bg-white text-black hover:bg-black/10"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
