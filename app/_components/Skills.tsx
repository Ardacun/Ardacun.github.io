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
import { AzureIcon } from "./icons/AzureIcon";
import { AWSIcon } from "./icons/AWSIcon";
import { NextJSIcon } from "./icons/NextJSIcon";
import { Trans, useTranslation } from "react-i18next";
import { CSharpIcon } from "./icons/CSharpIcon";

// Skills component
export const Skills = () => {
    
    const { t } = useTranslation(); // Specify the namespace
    
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>{t('skills')}</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {t('use')}
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
                        {t('web')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        <Trans i18nKey="web_tech">
                            During my professional experiences and academic training, I have used classical technologies such as <Code>HTML</Code>, <Code>CSS</Code>, <Code>JavaScript</Code>, <Code>TypeScript</Code> as well as <Code>PHP</Code> on the backend.
                        </Trans>
                    </p>
                </div>

                <div className="flex flex-col flex-1 min-w-[250px] gap-2">
                    <div className="flex flex-row gap-3">
                        <CSharpIcon size={42} />
                        <JavaIcon size={42} />
                        <PythonIcon size={42} />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                        {t('others')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        <Trans i18nKey="others_lang">
                            In parallel, I have used other languages, primarily <Code>C#</Code>,<Code>Java</Code>, and also <Code>Python</Code>.
                        </Trans>
                    </p>
                </div>

                <div className="flex flex-col flex-1 min-w-[250px] gap-2">
                    <div className="flex flex-row gap-3">
                        <MySQLIcon size={42} />
                        <MongoDbIcon size={42} />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                        {t('databases')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        <Trans i18nKey="databases_used">
                            I have worked with databases such as <Code>MySQL</Code> and <Code>MongoDB</Code>.
                        </Trans>
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
                        {t('tools')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        <Trans i18nKey="tools_used">
                            The tools I use are varied: <Code>Visual Studio Code</Code>, <Code>GitHub</Code>, <Code>Git</Code>, and <Code>Jira</Code>.
                        </Trans>
                    </p>
                </div>
                <div className="flex flex-col flex-1 min-w-[250px] gap-2">
                    <div className="flex flex-row gap-3">
                        <AzureIcon size={42} />
                        <AWSIcon size={42} />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                        {t('cloud')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        <Trans i18nKey="cloud_used">
                            I have worked with cloud services like <Code>Azure</Code> and <Code>AWS</Code> for deploying and managing applications in scalable environments.
                        </Trans>
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
                        {t('frameworks')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        <Trans i18nKey="frameworks_used">
                            I use various frameworks in my personal projects. The most frequent ones are <Code>Angular</Code>, <Code>React</Code>, and <Code>Next.js</Code>, as well as other libraries like <Code>Tailwind</Code>.
                        </Trans>
                    </p>
                </div>

                <div className="flex flex-col flex-1 min-w-[250px] gap-2">
                    <JiraIcon size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                        {t('agile')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        <Trans i18nKey="agile_concepts">
                            In a professional setting, I have worked in teams using the <Code>Scrum</Code> methodology, and I am also familiar with the <Code>SAFe</Code> concept.
                        </Trans>
                    </p>
                </div>
            </div>
        </Section>
    );
};
