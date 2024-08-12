import { Code } from "./Code"
import { Section } from "./Section"

export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl text-primary">Adrien D&aposacunto</h2>
            <h3 className="text-3xl font-caption">
                Software developer
            </h3>
            <p className="text-base">
                I love <Code>coding</Code>, currently looking for a job. Living in <Code className="inline-flex items-center gap-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" style={{width: 16, height: "auto"}} alt="France flag"></img>
                    Toulouse</Code>.
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img 
            src="images/adrien.png"
            className="w-full h-auto max-w-xs max-md:w-56 rounded-xl"
            alt="Adrien&aposs picture"
            />
        </div>
    </Section>
}