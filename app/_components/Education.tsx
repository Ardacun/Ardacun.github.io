import { Badge } from "../../components/ui/badge";
import { useTranslation } from "next-i18next";

// Education props
export type EducationProps = {
    image: string;
    school: string;
    diploma: string;
    description: React.ReactNode;
    date: string;
    type: string;
    url: string;
};

// Education component
export const Education = ({ image, school, diploma, description, date, type, url }: EducationProps) => {
    
    const { t } = useTranslation('translation'); // Destructure i18n correctly
    
    return (
    <div className="flex flex-row items-center gap-4">
      <a href={url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        <img src={image} alt={school} className="w-10 h-10 object-contain rounded-md" />
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{school}</p>
            <Badge variant="outline" >{type}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{diploma}</p>
        </div>
      </a>
      <div className="flex items-center gap-2 ml-auto">
            {description}
            <p className="text-xs text-end text-muted-foreground">{date}</p>
        </div>
    </div>
    );
};