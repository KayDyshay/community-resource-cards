
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  Icon: LucideIcon;
  className?: string;
}

const ResourceCard = ({ title, description, category, Icon, className }: ResourceCardProps) => {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden cursor-pointer",
        "transition-all duration-300 rounded-3xl",
        "bg-white text-gray-800", // White background, dark grey text
        "aspect-square",
        className
      )}
    >
      <CardHeader className="relative z-10 h-full flex flex-col justify-end p-8">
        <div className="space-y-6">
          <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
            {category}
          </span>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-tight text-gray-900">
              {title}
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {description}
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 bg-gray-100 border-gray-200 text-gray-800 hover:bg-gray-200"
          >
            Learn more
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ResourceCard;
