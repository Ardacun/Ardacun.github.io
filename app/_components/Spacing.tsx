import { cn } from "@/lib/utils";

// Spacing props with different sizes : sm, md, lg
export type SpacingProps = {
    size?: "sm" | "md" | "lg";
};

// Spacing component
export const Spacing = ({size = "md"}: SpacingProps) => {
    return (
        <div className={cn({
            "h-8 lg:h-16": size === "sm",
            "h-16 lg:h-24": size === "md",
            "h-24 lg:h-32": size === "lg",
        })} /> 
    )
}