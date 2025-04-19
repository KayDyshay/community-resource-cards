
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
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
}

const ResourceCard = ({ title, description, category, Icon, className }: ResourceCardProps) => {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg bg-white border-2 border-black",
      "cursor-pointer overflow-hidden",
      className
    )}>
      <CardHeader className="font-serif">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-5 h-5 text-black" />
          <span className="text-sm font-medium uppercase tracking-wide">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl font-bold border-b-2 border-black pb-2 mb-2">
          {title}
        </CardTitle>
        <CardDescription className="text-black/80 font-serif">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="font-serif">
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
