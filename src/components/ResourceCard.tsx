
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
      "backdrop-blur-sm bg-white/90 border border-gray-100",
      className
    )}>
      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Share2 className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
