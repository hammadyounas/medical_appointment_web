import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translations";
import { useState } from "react";

const useLandingPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { locale } = useLanguage();
    const t = translations[locale];
    
    return {selectedIndex, setSelectedIndex, t}
}

export default useLandingPage