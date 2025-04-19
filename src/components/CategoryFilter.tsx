
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
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "transition-all duration-300 rounded-full px-6 text-sm",
            activeCategory === category 
              ? "bg-primary text-white shadow-md" 
              : "bg-white border-gray-200 text-gray-600 hover:bg-primary/10 hover:text-primary"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
