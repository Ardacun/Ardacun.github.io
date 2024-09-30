import { Section } from "./Section"

// Footer component
export const Footer = () => {
    return <footer className="bg-card">
        <Section className="py-8">
            <p className="text-muted-foreground text-sm">
                2024 Adrien D&apos;acunto - Powered by <a href="https://nextjs.org" className="text-foreground">Next.js</a>
            </p>
        </Section>
    </footer>
}