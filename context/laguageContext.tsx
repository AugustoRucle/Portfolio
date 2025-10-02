"use client"

import { createContext, ReactNode, useContext, useState } from 'react';


interface LanguageContextType {
    language: string;
    setLanguage: Function;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguageContext = () => {
    const ctx = useContext(LanguageContext);

    if (!ctx) {
        throw new Error("useLanguageContext must be used within a LanguageContextProvider");
    }
    
    return ctx;
};

export const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState('ES');

    return <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
    </LanguageContext.Provider>
}