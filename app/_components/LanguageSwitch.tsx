"use client"

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch"; // Adjust this path based on your structure
import { useTranslation } from "next-i18next";
import i18n from "../../i18n";

// Language switch component
export const LanguageSwitch = () => {
  const { t } = useTranslation(); // Destructure i18n correctly
  const [isFrench, setIsFrench] = useState(i18n?.language === "fr"); // State to store the current language

  useEffect(() => {
    // You can dynamically change language on the client side
    i18n.changeLanguage('en');
  }, [i18n]);
  
  // Function to change language
  const changeLanguage = (language: string) => {
      i18n.changeLanguage(language); // Ensure changeLanguage is called properly
      console.log(i18n.language);
  };

  // Function to toggle language
  const toggleLanguage = () => {
    const newLanguage = isFrench ? "en" : "fr";
    changeLanguage(newLanguage); // Change the language
    setIsFrench(!isFrench); // Toggle the language
  };

  return (
    <div className="flex items-center space-x-2">
      <span>{isFrench ? "fr" : "en"}</span>
      <Switch checked={isFrench} onCheckedChange={toggleLanguage} />
    </div>
  );
};
