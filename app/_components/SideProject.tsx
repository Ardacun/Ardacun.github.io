import { LucideIcon } from "lucide-react";

export type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

export const SideProject = ({ Logo, title, description, url }: SideProjectProps) => {
    return (
      <a href={url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
          <Logo size={16} />
        </span>
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </a>
    );
};
