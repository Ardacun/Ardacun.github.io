"use client"

import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { appWithTranslation } from "next-i18next";
import "../i18n" // Import the translations

// Home page
function Home() {
  return (
    <main>
      <Header />

      <Spacing size="md" />

      <Hero />

      <Spacing size="md" />

      <Status />

      <Spacing size="md" />

      <Skills />

      <Spacing size="md" />

      <Contact />

      <Spacing size="md" />

      <Footer />
    </main>
  );
}

export default Home; // translate the page