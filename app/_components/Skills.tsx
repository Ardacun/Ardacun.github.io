import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { Code } from "./Code";
import { PHPIcon } from "./icons/PHPIcon";
import { JavaIcon } from "./icons/JavaIcon";
import { VSCodeIcon } from "./icons/VSCodeIcon";
import { AngularIcon } from "./icons/AngularIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { JiraIcon } from "./icons/JiraIcon";
import { MySQLIcon } from "./icons/MySQLIcon";
import { HTMLIcon } from "./icons/HTMLIcon";
import { CSSIcon } from "./icons/CSSIcon";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { PythonIcon } from "./icons/PythonIcon";
import { MongoDbIcon } from "./icons/MongoDbIcon";
import { GithubIcon } from "./icons/Githubicon";
import { GitIcon } from "./icons/GitIcon";
import { NextJSIcon } from "./icons/NextJSIcon";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                What I can use...
            </h2>
            <div className="flex flex-wrap gap-9">
                <div className="flex flex-col flex-1 min-w-[250px] gap-2">
                    <div className="flex flex-row gap-3">
                        <HTMLIcon size={42} />
                        <CSSIcon size={42} />
                        <JavascriptIcon size={42} />
                        <TypescriptIcon size={42} />
                        <PHPIcon size={42} />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                        Web Technologies
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        During my professional experiences and academic training, I have used classical technologies such as <Code>HTML</Code>, <Code>CSS</Code>, <Code>JavaScript</Code>, <Code>TypeScript</Code> as well as <Code>PHP</Code> on the backend.
                    </p>
                </div>

                <div className="flex flex-col flex-1 min-w-[250px] gap-2">
                    <div className="flex flex-row gap-3">
                        <JavaIcon size={42} />
                        <PythonIcon size={42} />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                        Others Languages
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        In parallel, I have used other languages, primarily <Code>Java</Code>, and also <Code>Python</Code>.
                    </p>
                </div>

                <div className="flex flex-col flex-1 min-w-[250px] gap-2">
                    <div className="flex flex-row gap-3">
                        <MySQLIcon size={42} />
                        <MongoDbIcon size={42} />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                        Databases
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        I have worked with databases such as <Code>MySQL</Code> and <Code>MongoDB</Code>.
                    </p>
                </div>

                <div className="flex flex-col flex-1 min-w-[250px] gap-2">
                    <div className="flex flex-row gap-3">
                        <VSCodeIcon size={42} />
                        <GithubIcon size={42} />
                        <GitIcon size={42} />
                        <JiraIcon size={42} />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                        Tools
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        The tools I use are varied: <Code>Visual Studio Code</Code>, <Code>GitHub</Code>, <Code>Git</Code>, and <Code>Jira</Code>.
                    </p>
                </div>

                <div className="flex flex-col flex-1 min-w-[250px] gap-2">
                    <div className="flex flex-row gap-3">
                        <AngularIcon size={42} />
                        <ReactIcon size={42} className="animate-spin" style={{ animationDuration: "10s" }} />
                        <NextJSIcon size={42} />
                        <TailwindIcon size={42} />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                        Frameworks
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        I use various frameworks in my personal projects. The most frequent ones are <Code>Angular</Code>, <Code>React</Code>, and <Code>Next.js</Code>, as well as other libraries like <Code>Tailwind</Code>.
                    </p>
                </div>

                <div className="flex flex-col flex-1 min-w-[250px] gap-2">
                    <JiraIcon size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                        Agile Concepts
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        In a professional setting, I have worked in teams using the <Code>Scrum</Code> methodology, and I am also familiar with the <Code>SAFe</Code> concept.
                    </p>
                </div>
            </div>
        </Section>
    );
};
