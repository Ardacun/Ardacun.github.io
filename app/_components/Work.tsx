import { Badge } from "@/components/ui/badge";
import { useTranslation } from "next-i18next";

// Work experience props
export type WorkProps = {
    image: string;
    title: string;
    description: React.ReactNode;
    role: string;
    date: string;
    type: string;
    url: string;
};

// Work experience component
export const Work = ({ image, title, description, role, date, type, url }: WorkProps) => {
  const { t } = useTranslation(); // Specify the namespace
  
  return (
      <div className="flex flex-row items-center gap-4">
        <a href={url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
          <img src={image} alt={title} className="w-10 h-10 object-contain rounded-md" />
          
          <div className="mr-auto">
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold">{title}</p>
              <Badge variant="outline" >{type}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </a>
        <div className="flex items-center gap-2 ml-auto">
          {description}
          <p className="text-xs text-end text-muted-foreground">{date}</p>
        </div>
      </div>
    );
};