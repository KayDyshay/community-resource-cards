
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  Icon: LucideIcon;
  className?: string;
  subcategories: {
    resources: number;
    courses: number;
    certifications: number;
  };
}

const ResourceCard = ({ 
  title, 
  description, 
  category, 
  Icon, 
  className,
  subcategories 
}: ResourceCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/resource/${encodeURIComponent(category)}`);
  };

  return (
    <Card 
      onClick={handleClick}
      className={cn(
        "transition-all duration-300 hover:shadow-lg bg-white border-2 border-black",
        "cursor-pointer overflow-hidden relative",
        "hover:transform hover:scale-105 hover:rotate-1",
        "after:absolute after:inset-0 after:opacity-0 after:transition-opacity",
        "after:bg-gradient-to-r after:from-[#ebff58] after:via-[#d946ef] after:to-[#8b5cf6]",
        "hover:after:opacity-20",
        "before:absolute before:inset-0 before:z-10 before:opacity-0",
        "before:shadow-[0_0_30px_10px_rgba(217,70,239,0.3)]",
        "hover:before:opacity-100",
        "transition-all duration-300 ease-out",
        className
      )}>
      <CardHeader className="font-serif relative z-20">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-5 h-5 text-black" />
          <span className="text-sm font-medium uppercase tracking-wide line-clamp-1">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl font-bold border-b-2 border-black pb-2 mb-2 line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-black/80 font-serif line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="font-serif relative z-20">
        <div className="flex gap-2 text-sm flex-wrap justify-center">
          <div className="flex flex-col items-center min-w-[80px]">
            <span className="font-bold text-lg">{subcategories.resources}</span>
            <span className="text-black/60 text-xs sm:text-sm">Resources</span>
          </div>
          <div className="flex flex-col items-center min-w-[80px]">
            <span className="font-bold text-lg">{subcategories.courses}</span>
            <span className="text-black/60 text-xs sm:text-sm">Courses</span>
          </div>
          <div className="flex flex-col items-center min-w-[80px]">
            <span className="font-bold text-lg">{subcategories.certifications}</span>
            <span className="text-black/60 text-xs sm:text-sm">Certifications</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
