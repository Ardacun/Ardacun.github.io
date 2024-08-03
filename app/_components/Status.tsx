import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Code, Coins, Landmark } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { SideProject, SideProjectProps} from "./SideProject";
import { Work, WorkProps } from "./Work";

export const Status = () => {
    return (
      <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
          <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">Side, fun projects</p>
            <div className="flex flex-col gap-4">
              {SIDE_PROJECTS.map((project, index) => (
                <SideProject
                  key={index}
                  Logo={project.Logo}
                  title={project.title}
                  description={project.description}
                  url={project.url}
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
                        />
                    ))}
                </div>
            </Card>
          <Card className="p-4 flex-1 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">Contact me</p>
            <ContactCard 
                name="AdrienDacunto" 
                image="https://media.licdn.com/dms/image/D4E35AQEl-yXSEWfUJg/profile-framedphoto-shrink_100_100/0/1696066190245?e=1723021200&v=beta&t=wnCs-7RGZti54Uf7ZMJvjDfyCmT8RwpxpJO9BF2qWtc" 
                imageMedium="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC"
                description="Linkedin"
                url="https://www.linkedin.com/in/adriendacunto/"
            />
          </Card>
        </div>
      </Section>
    );
  };

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "TicTacToe",
        description: "an online Tic Tac Toe application 🎮",
        url: "https://github.com/Ardacun/TicTacToe"
    },
    {
        Logo: Coins,
        title: "MoneyFlow-Monitor",
        description: "a financial monitor application 💥",
        url: "https://github.com/Ardacun/MoneyFlow-Monitor"
    },
    {
        Logo: Landmark,
        title: "Stocktaking",
        description: "an inventory management application 💲",
        url: "https://github.com/Ardacun/Stocktaking"
    }
]

const WORKS: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/C4D0BAQF2j_LDG_TOzg/company-logo_100_100/0/1631375371456/airbusgroup_logo?e=1730332800&v=beta&t=BD4f6zuUFw6qdY-GpYxJOWqFeSVDHERI-6mC9gE_i8Y",
        title: "Airbus",
        role: "Web Developer",
        date: "2021 - 2023",
        type: "Apprenticeship",
        url: "https://www.airbus.com/en"
    },
    {
        image: "https://media.cdnws.com/_i/125303/805/3979/8/roulez-ecolo.png.webp",
        title: "Roulezecolo",
        role: "C# Developer",
        date: "2020 - 2020",
        type: "Study project",
        url: "https://www.roulezecolo.com/"
    },
    {
        image: "https://media.licdn.com/dms/image/C4D0BAQF2j_LDG_TOzg/company-logo_100_100/0/1631375371456/airbusgroup_logo?e=1730332800&v=beta&t=BD4f6zuUFw6qdY-GpYxJOWqFeSVDHERI-6mC9gE_i8Y",
        title: "Airbus",
        role: "Web Developer",
        date: "2019 - 2019",
        type: "Internship",
        url: "https://www.airbus.com/en"
    }
]
