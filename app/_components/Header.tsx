import { buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/Githubicon"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">Adrien D&aposacunto</h1>
                <div className="flex-1"></div>
                <ul className="flex items-center gap-2">
                    <Link 
                    href="https://github.com"
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <GithubIcon size={12} className="text-foreground"></GithubIcon>
                    </Link>
                    
                    <Link 
                    href="https://www.linkedin.com/in/adriendacunto/"
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <LinkedInIcon size={12} className="text-foreground"></LinkedInIcon>
                    </Link>
                </ul>
            </Section>
        </header>
    );
};