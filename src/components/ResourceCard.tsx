
import { cn } from "@/lib/utils";
import { Heart, LucideIcon, Share2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
    <Card className={cn(
      "group relative overflow-hidden",
      "transition-all duration-300",
      "hover:shadow-lg hover:-translate-y-1",
      "backdrop-blur-sm bg-[#D1BEB0]/10 border border-[#D1BEB0]/20",
      "text-custom-dark-blue",
      className
    )}>
      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-custom-muted-blue" />
            <span className="text-sm font-medium text-custom-dark-blue/70">
              {category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity text-custom-dark-blue hover:text-custom-muted-blue"
            >
              <Share2 className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity text-custom-dark-blue hover:text-custom-soft-rose"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <CardTitle className="text-xl font-semibold text-custom-dark-blue">{title}</CardTitle>
        <CardDescription className="text-sm text-custom-dark-blue/60">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          className="absolute inset-0 
          bg-gradient-to-br 
          from-[#D1BEB0]/5 
          to-[#D1BEB0]/10 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity" 
        />
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
