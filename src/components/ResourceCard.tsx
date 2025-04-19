
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
        "group relative overflow-hidden",
        "transition-all duration-300 rounded-3xl",
        "backdrop-blur-sm bg-black/70",
        "text-white aspect-square",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
      
      <CardHeader className="relative z-10 h-full flex flex-col justify-end p-8">
        <div className="space-y-6">
          <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
            {category}
          </span>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-tight">
              {title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 bg-white/20 border-white/40 text-white hover:bg-white/30"
          >
            Learn more
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ResourceCard;
