import { Badge } from "@/components/ui/badge";

export type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    type: string;
    url: string;
};

export const Work = ({ image, title, role, date, type, url }: WorkProps) => {
    return (
      <a href={url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        
        <img src={image} alt={title} className="w-10 h-10 object-contain rounded-md" />
        
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{title}</p>
            <Badge variant="outline" >{type}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <div className="ml-auto">
            <p className="text-xs text-end text-muted-foreground">{date}</p>
        </div>
      </a>
    );
};