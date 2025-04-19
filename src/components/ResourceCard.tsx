
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
        "transition-all duration-300 rounded-xl shadow-md hover:shadow-xl",
        "bg-white text-gray-800",
        "border border-gray-100",
        "transform hover:-translate-y-1",
        className
      )}
    >
      <CardHeader className="pt-6 px-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-md bg-primary/10 text-primary mr-3">
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h2 className="text-2xl font-bold leading-tight text-gray-900 mb-2">
          {title}
        </h2>
      </CardHeader>
      <CardContent className="pb-6 px-6">
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <Button 
          variant="outline" 
          className="w-full bg-white border-gray-200 text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
