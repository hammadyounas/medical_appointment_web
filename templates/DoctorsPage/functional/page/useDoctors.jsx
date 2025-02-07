'use client';
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translations";

const useDoctors = () => {
    const { locale } = useLanguage();
    const t = translations[locale];
    return { t };
}

export default useDoctors;
