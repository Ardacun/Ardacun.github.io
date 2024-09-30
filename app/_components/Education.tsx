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
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
      <a href={url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        <img src={image} alt={school} className="w-10 h-10 object-contain rounded-md" />
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{school}</p>
            {/* Centered Badge */}
            <Badge
              variant="outline"
              className="flex items-center justify-center text-center text-xs sm:text-xs max-w-[100px] sm:max-w-none px-2 py-1"
            >
              {type}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{diploma}</p>
        </div>
      </a>
      <div className="flex sm:flex-row items-center text-center gap-2 mt-2 sm:mt-0 sm:ml-auto">
        <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">{description}</p>
        <p className="text-[12px] sm:text-xs text-muted-foreground text-center sm:text-left">
          <span className="block sm:hidden">{date.split(" - ")[1]}</span>
          <span className="block sm:hidden">-</span>
          <span className="block sm:hidden">{date.split(" - ")[0]}</span>
          <span className="hidden sm:inline">{date}</span>
        </p>
      </div>
    </div>

    );
};