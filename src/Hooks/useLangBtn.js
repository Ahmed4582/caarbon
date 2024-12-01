import { useEffect, useState } from "react";
import i18n from "../Utils/i18n";

const useLangBtn = () => {
  const [currentLang, setCurrentLang] = useState(() => {
    // Initialize from localStorage if available, default to English if not
    const savedLang = window.localStorage.getItem("i18nextLng");
    return savedLang === "ar" ? "Ar" : "Eng";
  });

  const languages = [
    { code: "Eng", label: "English" },
    { code: "Ar", label: "Arabic" },
  ];

  // Language handler to switch between languages and save selection
  const langHandler = (lang) => {
    const newLang = lang === "Eng" ? "en" : "ar";
    const newDir = newLang === "ar" ? "rtl" : "ltr";

    i18n.changeLanguage(newLang).then(() => {
      window.localStorage.setItem("i18nextLng", newLang);
      window.localStorage.setItem("dir", newDir);
      document.documentElement.dir = newDir;
      setCurrentLang(lang); // Update the current language state
      window.location.reload();
    });
  };

  useEffect(() => {
    const savedLang = window.localStorage.getItem("i18nextLng") || "en";
    const dir = savedLang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    i18n.changeLanguage(savedLang);
    setCurrentLang(savedLang === "ar" ? "Ar" : "Eng");
  }, []);

  return { langHandler, currentLang, languages };
};

export default useLangBtn;
