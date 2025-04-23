import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations (tip move them in a JSON file and import them, or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "close": "Close",
      "skills": "Skills",
      "soft_dev": "Software Developer",
      "web_dev": "Web Developer",
      "c#_dev": "C# Developer",
      "apprenticeship": "Apprenticeship",
      "study_project": "Study Project",
      "internship": "Internship",
      "advanced_technician": "Advanced Technician",
      "baccalaureate": "Baccalaureate",
      "side_projects": "Side Projects",
      "tictactoe": "an online Tic Tac Toe application 🎮",
      "moneyflow": "a financial monitor application 💥",
      "stocktaking": "an inventory management application 💲",
      "homelabcontrolcenter": "Centralized dashboard for self-hosted homelab supervision",
      "homelab": "Virtualized personal infrastructure for self-hosted services",
      "pdfassistant": "Intelligent assistant capable of analyzing PDF files, extracting key elements and answering contextual questions in natural language",
      "web": "Web Technologies",
      "others": "Others Languages",
      "databases": "Databases",
      "tools": "Tools",
      "frameworks": "Frameworks",
      "agile": "Agile Concepts",
      "use": "What I can use...",
      "contact": "Contact me",
      "email": "Send me an email for job offers.",
      "happy": "Happy to work with you.",
      "love_code": "I love <1>coding</1>, currently looking for a job. Living in ",
      "web_tech": "During my professional experiences and academic training, I have used classical technologies such as <1>HTML</1>, <1>CSS</1>, <1>JavaScript</1>, <1>TypeScript</1> as well as <1>PHP</1> on the backend.",
      "others_lang": "In parallel, I have used other languages, primarily <1>C#</1>, <1>Java</1>, and also <1>Python</1>.",
      "databases_used": "I have worked with databases such as <1>MySQL</1> and <1>MongoDB</1>.",
      "tools_used": "The tools I use are varied: <1>Visual Studio Code</1>, <1>GitHub</1>, <1>Git</1>, and <1>Jira</1>.",
      "frameworks_used": "I use various frameworks in my personal projects. The most frequent ones are <1>Angular</1>, <1>React</1>, and <1>Next.js</1>, as well as other libraries like <1>Tailwind</1>.",
      "agile_concepts": "In a professional setting, I have worked in teams using the <1>Scrum</1> methodology, and I am also familiar with the <1>SAFe</1> concept.",
      "cloud": "Cloud",
      "cloud_used": "I have worked with cloud services like <1>Azure</1> and <1>AWS</1> for deploying and managing applications in scalable environments.",
      "at": "at",
      
      education: {
        diplomas: {
          esi: {
            title: "Master of Information Systems Expert",
            description: "The Master of Information Systems Expert (Bac+5 degree) is a degree that prepares students to become experts in the management and development of information systems (IS). It forms a framework that can design, deploy, and secure complex information systems in relation to strategic goals of an organization.",
            specialties: "Specialties of the ESI",
            architecture_label: "Architecture of information systems",
            architecture: "In-depth study of SI infrastructures, with modules on software integration, virtualization, and Cloud environments.",
            databases_label: "Advanced database management",
            databases: "Study of relational databases (SQL) and non-relational databases (NoSQL), optimization of queries, and data security.",
            cybersecurity_label: "Cybersecurity and data management",
            cybersecurity: "Security of information systems, with modules on data protection, incident management, and cyber threat prevention.",
            data_management_label: "Big Data and Artificial Intelligence",
            data_management: "Use of massive data to aid decision-making in companies, with a focus on technologies such as machine learning and predictive analytics.",
            development_label: "Software development",
            development: "Development of large-scale applications with modern languages (Java, C#, Python), using methods such as DevOps.",
            project_management_label: "Management of complex IT projects",
            project_management: "Piloting of large-scale integration of information systems, budget management, delays, and multidisciplinary teams.",
            degital_transformation_label: "Digital transformation",
            degital_transformation: "Study of digitalization of companies, with a focus on emerging technologies (blockchain, IoT).",
            audit_label: "Audit and governance of information systems",
            audit: "Techniques for evaluating the performance, security, and compliance of information systems."
          },
          rpi: {
            title: "IT Project Management",
            description: "IT Project Management is a Bac+3 degree. It prepares students to manage and coordinate IT projects in the field of information systems and computer science, with a strong management focus.",
            specialities: "Specialties of the RPI",
            needs_analysis_label: "Needs analysis and design",
            needs_analysis: "Techniques for collecting and formalizing the needs of users, and designing software solutions that are adapted to them.",
            project_management_label: "IT project management",
            project_management: "Teaching of project management methodologies (such as Agile, Scrum), with a focus on the development of applications or computer infrastructures.",
            languages_label: "Programming languages",
            languages: "Learning or furthering the languages such as Java, PHP, or Python, often used for software development projects.",
            databases_label: "Information systems and databases",
            databases: "Study of databases (SQL, NoSQL) and their management, in relation to complex information systems.",
            infrastructure_label: "Networks and security",
            infrastructure: "Concepts of computer networks and cybersecurity to ensure the security and performance of deployed systems.",
            management_label: "Team management",
            management: "Management of human resources and technical aspects in the context of an IT project, in coordination with the different services of the company.",
            it_rights_label: "Intellectual property",
            it_rights: "Regulations around data protection, intellectual property, and IT contracts.",
            technical_english_label: "Technical English",
            technical_english: "Skills in technical terms and the ability to communicate in English in a professional context."
          },
          snir: {
            title: "The BTS Systèmes Numériques (SN), option Informatique et Réseaux",
            description: "The BTS Systèmes Numériques (SN), option Informatique et Réseaux, is a Bac+2 diploma. It prepares students for careers in the management of computer systems and networks, giving them technical skills in the fields of computing, networks and digital systems.",
            subjects: "Subjects taught:",
            it_re_label: "Computing and networks",
            it_re: "The heart of the BTS, this subject covers the installation, management and maintenance of computer networks. Students learn to configure servers and routers, manage network security, and administer operating systems (Windows, Linux).",
            archi_label: "Hardware and software architecture",
            archi: "The study of the physical components of digital systems and the software that makes them work",
            languages_label: "Programming languages",
            languages: "Introduction to various programming languages (C, C#, C++, PHP, etc.) for designing and developing software applications",
            maths_label: "Applied mathematics",
            maths: "Mathematics related to computer science and networks, with concepts such as algorithms, cryptography and statistics",
            physics_label: "Applied physics",
            physics: "Understanding digital signals, electronics and electricity in computer systems",
            project_management_label: "Project management",
            project_management: "Methodologies for managing IT projects, from needs analysis to implementation.",
            culture_label: "Culture generale et expression",
            culture: "Enhancement of communication written and oral skills."
          },
          sti2d: {
            title: "STI2D (Sciences and Technologies of Industry and Sustainable Development)",
            description: "The STI2D Bac (Sciences and Technologies of Industry and Sustainable Development) is a technological baccalaureate focusing on technological innovation and sustainable development. It is intended for students interested in engineering, technology, the environment, and ecology. This Bac offers a balance between theoretical and practical teaching, with a strong technical component.",
            specialties: "Specialties of the STI2D Bac",
            itec_label: "Technological Innovation and Eco-design (ITEC)",
            itec: "Focused on product design, this specialty covers industrial design, mechanics, materials, and manufacturing processes, while considering environmental challenges.",
            sin_label: "Information Systems and Digital (SIN)",
            sin: "Focused on electronics and computer science, it allows students to work on digital systems and networks while addressing programming and data management.",
            ee_label: "Energy and Environment (EE)",
            ee: "Focuses on managing renewable and non-renewable energy, and technologies aimed at improving energy efficiency while respecting the environment.",
            ac_label: "Architecture and Construction (AC)",
            ac: "Focuses on urban planning and building, studying sustainable materials and construction techniques with an emphasis on energy efficiency.",
            common_subjects: "Common Subjects",
            mathematics: "Mathematics adapted to technological context.",
            physics_label: "Physics-Chemistry",
            physics: "Mechanics, electricity, and chemistry related to technology.",
            engineering_label: "Engineering, Innovation, and Sustainable Development",
            engineering: "Central subject of the STI2D bac covering engineering concepts and digital tools to solve environmental problems."
          }
        }
      },
      jobs: {
        first_job: {
          title: "Airbus – Louis Breguet | 05/2019 – 06/2019",
          project_label: "Project",
          project: "Development of a web interface for cable ordering.",
          role_label: "Role",
          role: "Web Developer / Internship",
          realisations_label: "Realisations",
          realisations: {
            "1": "• Development of a web interface for cable ordering, including a feature prioritization.",
            "2": "• Development of a program to test the functionality of a product (VU Cockpit).",
          },
          environment_label: "Technical environment",
          environment: {
            "1": "• Technologies : PHP, Javascript, CSS, HTML, SQL",
            "2": "• Softwares : EasyPHP, MySQL",
          },
        },
        second_job: {
          title: "Roulezecolo.com – Toulouse | 01/2020 – 06/2020",
          project_label: "Project",
          project: "Development of a C# application for the acquisition of trolleys on a camping.",
          role_label: "Role",
          role: "Developer C# / Study project",
          realisations_label: "Realisations",
          realisations: {
            "1": "• Design a NoSQL database.",
            "2": "• Create access and update functions for the database (Azure Functions).",
            "3": "• Create a callback and configure a message (JSON) Sigfox",
          },
          environment_label: "Technical environment",
          environment: {
            "1": "• Technologies : C#, Visual Studio, Azure (Cosmos Db and Functions C#), NoSQL",
            "2": "• Methodology : Agile (Scrum)",
          },
        },
        third_job: {
          title: "Airbus – Saint-Martin-Du-Touch | 09/2021 – 09/2023",
          project_label: "Project",
          project: "Development of a web application (POC) allowing to demonstrate that the acquisition and display of data on the airport engineering test stand is possible with web technologies in accordance with specific criteria (latency, look & feel, reliability).",
          role_label: "Role",
          role: "Web Developer / Apprenticeship",
          realisations_label: "Realisations",
          realisations: {
            "1": "•	Research on different frameworks: Angular, React, VueJS, EmberJS, ElectronJS.",
            "2": "•	Creation of a web application allowing the display of data on the airport engineering test stand on the real-time flight station.",
          },
          environment_label: "Technical environment",
          environment: {
            "1": "•	Technologies : HTML, CSS, Javascript, PHP, Websocket, Zoho Project, Miro, Git, Github, Visual Studio Code, Virtual Box",
            "2": "•	Methodology : Agile (Scrum)",
          },
        }
      }
    }
  },
  fr: {
    translation: {
      "close": "Fermer",
      "skills": "Compétences",
      "soft_dev": "Développeur logiciel",
      "web_dev": "Développeur Web",
      "c#_dev": "Développeur C#",
      "apprenticeship": "Apprentissage",
      "study_project": "Projet d'étude",
      "internship": "Stage",
      "advanced_technician": "Technicien avancé",
      "baccalaureate": "Baccalauréat",
      "side_projects": "Projets tiers",
      "tictactoe": "une application Tic Tac Toe en ligne 🎮",
      "moneyflow": "une application de surveillance financière 💥",
      "stocktaking": "une application de gestion d'inventaire 💲",
      "homelabcontrolcenter": "Dashboard centralisé pour la supervision d’un homelab auto-hébergé",
      "homelab": "Infrastructure personnelle virtualisée pour l’auto-hébergement de services",
      "pdfassistant": "Assistant intelligent capable d’analyser des fichiers PDF, d’en extraire les éléments clés et de répondre à des questions contextuelles en langage naturel",
      "web": "Technologies Web",
      "others": "Autres langages",
      "databases": "Bases de données",
      "tools": "Outils",
      "frameworks": "Frameworks",
      "agile": "Concepts d'agilité",
      "use": "Ce que je peux utiliser...",
      "contact": "Contactez-moi",
      "email": "Envoyez-moi un email pour des offres d'emploi.",
      "happy": "Heureux de travailler avec vous.",
      "love_code": "J'aime <1>coder</1>, recherche actuellement un emploi. Vivant à ",
      "web_tech": "Pendant mes expériences professionnelles et mon entraînement académique, j'ai utilisé des technologies classiques telles que <1>HTML</1>, <1>CSS</1>, <1>JavaScript</1>, <1>TypeScript</1> ainsi que <1>PHP</1> sur le backend.",
      "others_lang": "En parallèle, j'ai utilisé d'autres langages, principalement <1>C#</1>,<1>Java</1>, et également <1>Python</1>.",
      "databases_used": "J'ai travaillé avec des bases de données telles que <1>MySQL</1> et <1>MongoDB</1>.",
      "tools_used": "Les outils que j'utilise sont variés: <1>Visual Studio Code</1>, <1>GitHub</1>, <1>Git</1>, et <1>Jira</1>.",
      "frameworks_used": "J'utilise des frameworks personnels dans mes projets. Les plus fréquents sont <1>Angular</1>, <1>React</1>, et <1>Next.js</1>, ainsi que d'autres bibliothèques comme <1>Tailwind</1>.",
      "agile_concepts": "Dans un cadre professionnel, j'ai travaillé au sein d'équipes utilisant la méthodologie <1>Scrum</1>, et je suis également familier avec le concept <1>SAFe</1>.",
      "cloud": "Cloud",
      "cloud_used": "J'ai travaillé avec des services cloud comme <1>Azure</1> et <1>AWS</1> pour déployer et gérer des applications dans des environnements évolutifs.",
      "at": "à",

      education: {
        diplomas: {
          esi: {
            title: "Master Expert en Systèmes d'Information",
            description: "Le Master Expert en Systèmes d'Information (Bac+5 degree) est un diplôme qui prépare les étudiants à devenir des experts dans la gestion et le développement des systèmes d'information (IS). Il forme un cadre qui peut concevoir, déployer et sécuriser des systèmes d'information complexes en relation avec les objectifs stratégiques d'une organisation.",
            specialties: "Spécialités de l'ESI",
            architecture_label: "Architecture des systèmes d'information",
            architecture: "Étude approfondie des infrastructures SI, avec modules sur l'intégration de logiciels, la virtualisation et les environnements Cloud.",
            databases_label: "Administration avancée des bases de données",
            databases: "Étude des relations de bases de données (SQL) et NoSQL, optimisation des requêtes, et sécurité des données.",
            cybersecurity_label: "Cybersécurité et sécurité des données",
            cybersecurity: "Sécurité des systèmes d'information, avec modules sur la protection des données, incidents de gestion, et cyber-attaques.",
            data_management_label: "Big Data et Artificial Intelligence",
            data_management: "Utilisation massive des données pour aider les décisions de l'entreprise, avec une perspective sur les technologies telles que la machine learning et la reconnaissance automatique.",
            development_label: "Développement logiciel",
            development: "Conception de grandes applications avec des langages modernes (Java, C#, Python), en utilisant des méthodes tels que DevOps.",
            project_management_label: "Gestion de projets complexes",
            project_management: "Pilotage de projets d'intégration de systèmes d'information, budget, délais, et multi-disciplines.",
            degital_transformation_label: "Transformation digitale",
            degital_transformation: "Étude de la transformation digitale de l'entreprise, avec une perspective sur les technologies innovantes (blockchain, IoT).",
            audit_label: "Audit et gouvernance des systèmes d'information",
            audit: "Techniques pour évaluer la performance, la sécurité et la conformité des systèmes d'information."
          },
          rpi: {
            title: "Bachelor Responsable de Projets Informatiques",
            description: "Le Bachelor Responsable de Projets Informatiques est un diplôme de niveau Bac+3. Il forme des étudiants capables de gérer et coordonner des projets dans le domaine des systèmes d'information et de l'informatique, avec une forte dimension managériale.",
            specialities: "Les Spécialités du RPI",
            needs_analysis_label: "Analyse des besoins et conception",
            needs_analysis: "Techniques pour recueillir et formaliser les besoins des utilisateurs, et concevoir des solutions logicielles adaptées.",
            project_management_label: "Gestion de projets informatiques",
            project_management: "Enseignement des méthodologies de gestion de projets (comme Agile, Scrum), avec une approche centrée sur le développement d'applications ou d'infrastructures informatiques.",
            languages_label: "Langages de programmation",
            languages: "Apprentissage ou approfondissement des langages comme Java, PHP, ou Python, souvent utilisés pour le développement de projets informatiques.",
            databases_label: "Systèmes d’information et bases de données",
            databases: "Étude des bases de données (SQL, NoSQL) et de leur gestion, en lien avec des systèmes d’information complexes.",
            infrastructure_label: "Infrastructures réseaux et sécurité",
            infrastructure: "Notions de réseaux informatiques et de cybersécurité pour garantir la sécurité et la performance des systèmes déployés.",
            management_label: "Management d’équipes",
            management: "Gestion des ressources humaines et techniques dans le cadre d’un projet informatique, en coordination avec les différents services de l’entreprise.",
            it_rights_label: "Droit de l’informatique",
            it_rights: "Règlements autour de la protection des données, de la propriété intellectuelle, et des contrats IT.",
            technical_english_label: "Anglais technique",
            technical_english: "Maitrise des termes techniques et capacité à communiquer en anglais dans un contexte professionnel."
          },
          snir: {
            title: "BTS Systèmes Numériques Option Informatique et Réseaux",
            description: "Le BTS Systèmes Numériques (SN), option Informatique et Réseaux, est un diplôme de niveau Bac+2. Il prépare les étudiants aux métiers de la gestion des systèmes informatiques et des réseaux, en leur donnant des compétences techniques dans les domaines de l'informatique, des réseaux, et des systèmes numériques.",
            subjects: "Les Matières Enseignées :",
            itec_label: "Informatique et réseaux",
            itec: "Cœur du BTS, cette matière aborde la mise en place, la gestion, et la maintenance de réseaux informatiques. Les étudiants apprennent à configurer des serveurs, des routeurs, à gérer la sécurité des réseaux, et à administrer des systèmes d'exploitation (Windows, Linux).",
            archi_label: "Architecture matérielle et logicielle",
            archi: "Étude des composants physiques des systèmes numériques et des logiciels qui permettent leur fonctionnement.",
            languages_label: "Langage de programmation",
            languages: "Introduction à divers langages de programmation (C, C#, C++, PHP,...) pour concevoir et développer des applications logicielles.",
            maths_label: "Mathématiques appliquées",
            maths: "Mathématiques liées à l'informatique et aux réseaux, avec des notions comme l'algorithmique, la cryptographie, ou les statistiques.",
            physics_label: "Physique appliquée",
            physics: "Compréhension des signaux numériques, de l'électronique, et de l'électricité dans les systèmes informatiques.",
            project_management_label: "Gestion de projet",
            project_management: "Méthodologies pour gérer des projets informatiques, de l'analyse des besoins à la mise en œuvre des solutions.",
            culture_label: "Culture générale et expression",
            culture: "Renforcement des compétences en communication écrite et orale."
          },
          sti2d: {
            title: "STI2D (Sciences et Technologies de l'Industrie et du Développement Durable)",
            description: "Le Bac STI2D (Sciences et Technologies de l'Industrie et du Développement Durable) est un baccalauréat technologique qui met l'accent sur l'innovation technologique et le développement durable. Il s'adresse aux élèves qui s'intéressent à l'ingénierie, à la technologie, à l'environnement et à l'écologie. Ce bac propose un équilibre entre enseignement théorique et pratique, avec une forte dimension technique.",
            specialties: "Les Spécialités du Bac STI2D",
            itec_label: "Innovation technologique et éco-conception (ITEC)",
            itec: "Axée sur la conception de produits, cette spécialité aborde le design industriel, la mécanique, les matériaux, et les procédés de fabrication, tout en tenant compte des enjeux environnementaux.",
            sin_label: "Systèmes d'information et numérique (SIN)",
            sin: "Focalisée sur l'électronique et l'informatique, elle permet aux élèves de travailler sur des systèmes numériques et des réseaux, tout en abordant la programmation et la gestion de données.",
            ee_label: "Énergies et environnement (EE)",
            ee: "Cette spécialité se concentre sur la gestion des énergies renouvelables et non renouvelables et les technologies visant à améliorer l'efficacité énergétique dans le respect de l'environnement.",
            ac_label: "Architecture et construction (AC)",
            ac: "Orientée vers l'urbanisme et le bâtiment, cette spécialité étudie les matériaux et les techniques de construction durables, avec un souci d'efficacité énergétique.",
            common_subjects: "Les Matières Enseignées",
            mathematics: "Mathématiques adaptées à un contexte technologique.",
            physics_label: "Physique-Chimie",
            physics: "Mécanique, électricité, et chimie en lien avec les technologies.",
            engineering_label: "Ingénierie, Innovation et Développement Durable",
            engineering: "Matière centrale du bac STI2D, elle aborde les concepts d'ingénierie et les outils numériques pour résoudre des problèmes en lien avec l'environnement."
          }
        }
      },
      jobs: {
        first_job: {
          title: "Airbus – Louis Breguet | 05/2019 – 06/2019",
          project_label: "Projet",
          project: "Développement d’une interface web pour la commande de câbles",
          role_label: "Rôle",
          role: "Développeur web / Stage",
          realisations_label: "Realisations",
          realisations: {
            "1": "•	Développement d’une interface web pour la commande de câbles, incluant une fonctionnalité de priorisation.",
            "2": "•	Développement d’un programme pour tester le fonctionnement d’un produit électrique (VU Cockpit).",
          },
          environment_label: "Environnement technique",
          environment: {
            "1": "•	Technologies : PHP, Javascript, CSS, HTML, SQL",
            "2": "•	Logiciels : EasyPHP, MySQL",
          },
        },
        second_job: {
          title: "Roulezecolo.com – Toulouse | 01/2020 – 06/2020",
          project_label: "Projet",
          project: "Développement d’une application C# pour permettre l’emprunt des trottinettes sur un camping",
          role_label: "Rôle",
          role: "Développeur C# / Projet d’étude",
          realisations_label: "Realisations",
          realisations: {
            "1": "•	Conception d’une base de données NoSQL.",
            "2": "• Création des fonctions d’accès et de mise à jour de la base de données (Fonctions Azure).",
            "3": "•	Création d’un callback et configuration d’un message (JSON) Sigfox",
          },
          environment_label: "Environnement technique",
          environment: {
            "1": "•	Technologies : C#, Visual Studio, Azure (Cosmos Db et Fonctions C#), NoSQL",
            "2": "•	Méthodologie : Agile (Scrum)",
          },
        },
        third_job: {
          title: "Airbus – Saint-Martin-Du-Touch | 09/2021 – 09/2023",
          project_label: "Projet",
          project: "Développement d’une interface web (POC) permettant de démontrer que l’acquisition et l’affichage des données de vol est possible avec des technologies web en respectant des critères spécifiques (latence, look & feel, fiabilité).",
          role_label: "Rôle",
          role: "Développeur web / Contrat d'alternance",
          realisations_label: "Realisations",
          realisations: {
            "1": "•	Recherche sur différents frameworks : Angular, React, VueJS, EmberJS, ElectronJS.",
            "2": "•	Création d’une interface web permettant l’affichage des données de vol sur la station d’ingénierie des essais en vol en temps réel.",
          },
          environment_label: "Environnement technique",
          environment: {
            "1": "• Technologies : HTML, CSS, Javascript, PHP, Websocket, Zoho Project, Miro, Git, Github, Visual Studio Code, Virtual Box",
            "2": "• Méthodologie : Agile (Scrum)",
          },
        }
      }
    }
  }
};

i18n 
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
