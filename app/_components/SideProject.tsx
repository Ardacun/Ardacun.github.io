import { LucideIcon } from "lucide-react";

// Side project props
export type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    stack: string;
    url: string;
};

// Side project component
export const SideProject = ({ Logo, title, description, stack, url }: SideProjectProps) => {
    return (
      <a href={url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
          <Logo size={16} />
        </span>
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground">
            {description}<br/> <span className="mx-2 text-gray-400">|</span> {stack}
          </p>
        </div>
      </a>
    );
};
