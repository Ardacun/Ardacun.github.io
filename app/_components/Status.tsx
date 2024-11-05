import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Code, Coins, Landmark } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { SideProject, SideProjectProps} from "./SideProject";
import { Work, WorkProps } from "./Work";
import { EducationProps, Education } from "./Education";
import { useTranslation } from "react-i18next";
import DiplomaSTI2D from "./DiplomaSTI2D";
import DiplomaSNIR from "./DiplomaSNIR";
import DiplomaRPI from "./DiplomaRPI";
import DiplomaESI from "./DiplomaESI";
import ThirdJob from "./ThirdJob";
import SecondJob from "./SecondJob";
import FirstJob from "./FirstJob";

// Status component
export const Status = () => {
   const { t } = useTranslation();
   return (
      <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[2] w-full flex flex-col h-full gap-4">
          <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">{t('side_projects')}</p>
            <div className="flex flex-col gap-4">
              {SIDE_PROJECTS.map((project, index) => (
                <SideProject
                  key={index}
                  {...project}
                  description={t(project.description)}
                />
              ))}
            </div>
          </Card>
          <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">Education</p>
            <div className="flex flex-col gap-4">
              {EDUCATIONS.map((education, index) => (
                <Education
                  key={index}
                  {...education}
                  type={t(education.type)}
                  description={education.description}
                />
              ))}
            </div>
          </Card>
        </div>
        <div className="flex-[2] w-full flex flex-col h-full gap-4">
            <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Experiences</p>
                <div className="flex flex-col gap-4">
                    {WORKS.map((work, index) => (
                        <Work
                        key={index}
                        {...work}
                        type={t(work.type)}
                        role={t(work.role)}
                        description={work.description}
                        />
                    ))}
                </div>
            </Card>
          <Card className="p-4 flex-1 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">{t('contact')}</p>
            <ContactCard 
                name="AdrienDacunto" 
                image="images/adrien_linkedin.png"
                imageMedium="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC"
                description="Linkedin"
                url="https://www.linkedin.com/in/adriendacunto/"
            />
          </Card>
        </div>
      </Section>
    );
  };

// Side projects
const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "TicTacToe",
        description: "tictactoe",
        url: "https://github.com/Ardacun/TicTacToe"
    },
    {
        Logo: Coins,
        title: "MoneyFlow-Monitor",
        description: "moneyflow",
        url: "https://github.com/Ardacun/MoneyFlow-Monitor"
    },
    {
        Logo: Landmark,
        title: "Stocktaking",
        description: "stocktaking",
        url: "https://github.com/Ardacun/Stocktaking"
    }
]

// Work experiences
const WORKS: WorkProps[] = [
    {
        image: "./images/airbus_logo.png",
        title: "Airbus",
        role: "web_dev",
        description: <ThirdJob />,
        date: "2021 - 2023",
        type: "apprenticeship",
        url: "https://www.airbus.com/en"
    },
    {
        image: "./images/roulez-ecolo_logo.png",
        description: <SecondJob />,
        title: "Roulezecolo",
        role: "c#_dev",
        date: "2020 - 2020",
        type: "study_project",
        url: "https://www.roulezecolo.com/"
    },
    {
        image: "./images/airbus_logo.png",
        title: "Airbus",
        description: <FirstJob />,
        role: "web_dev",
        date: "2019 - 2019",
        type: "internship",
        url: "https://www.airbus.com/en"
    }
]

// Education
const EDUCATIONS: EducationProps[] = [
    {
        image: "./images/institut_limayrac_logo.png",
        school: "Institut Limayrac",
        diploma: "ESI",
        description: <DiplomaESI />,
        date: "2021 - 2023",
        type: "Master",
        url: "https://www.francecompetences.fr/recherche/RNCP/34471/"
    },
    {
        image: "./images/institut_limayrac_logo.png",
        school: "Institut Limayrac",
        diploma: "RPI",
        description: <DiplomaRPI />,
        date: "2020 - 2021",
        type: "Bachelor",
        url: "https://www.francecompetences.fr/recherche/rncp/13387/"
    },
    {
        image: "./images/institut_limayrac_logo.png",
        school: "Institut Limayrac",
        diploma: "SN-IR",
        description: <DiplomaSNIR />,
        date: "2018 - 2020",
        type: "advanced_technician",
        url: "https://www.francecompetences.fr/recherche/rncp/35341/"
    },
    {
        image: "./images/josep_galliani.png",
        school: "Lycée Joseph Gallieni",
        diploma: "STI2D",
        description: <DiplomaSTI2D />,
        date: "2015 - 2018",
        type: "baccalaureate",
        url: "https://www.onisep.fr/formation/apres-la-3-la-voie-generale-et-technologique/qu-est-ce-que-la-voie-generale-et-technologique/la-voie-technologique-en-premiere-et-terminale/le-bac-sti2d-sciences-et-technologies-de-l-industrie-et-du-developpement-durable"
    }
]
