import { Code } from "./Code"
import { Section } from "./Section"
import { Trans, useTranslation } from "next-i18next";

// Hero component
export const Hero = () => {
    
    const { t } = useTranslation(); // Destructure i18n correctly

    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl text-primary">Adrien D&apos;acunto</h2>
            <h3 className="text-3xl font-caption">
                {t('soft_dev')}
            </h3>
            <p className="text-base">
                    <Trans i18nKey="love_code">
                        I love <Code>coding</Code>, currently looking for a job. Living in 
                    </Trans>
                    <Code className="inline-flex items-center gap-1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" style={{ width: 16, height: "auto" }} alt="France flag" />
                            Toulouse
                    </Code>.
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img 
            src="images/adrien.png"
            className="w-full h-auto max-w-xs max-md:w-56 rounded-xl"
            alt="Adrien's picture"
            />
        </div>
    </Section>
}
