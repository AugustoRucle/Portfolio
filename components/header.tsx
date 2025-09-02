"use client"

import { useEffect, useState } from 'react';

import { downloadFile, scrollToSection } from '@/utils/functions';

import { AlipayOutlined, AuditOutlined, CalendarOutlined, CloseOutlined, FileTextOutlined, HomeOutlined, MenuOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';

import MobileNavItem from './mobileNavItem';
import NavItem from "./navItem";

export default function Header() {
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [currentSection, setCurrentSection] = useState("home");

    /**
     * Download CV
     * 
     * @return
     */
    const downloadCV = () => {
        if (selectedLanguage === 'EN') {
            downloadFile('CV_ENGLISH_JOSE_AUGUSTO_RUIZ_CLEMENTE.pdf', '/CV_ENGLISH_JOSE_AUGUSTO_RUIZ_CLEMENTE.pdf')
        } else {
            downloadFile('CV_SPANISH_JOSE_AUGUSTO_RUIZ_CLEMENTE.pdf', '/CV_SPANISH_JOSE_AUGUSTO_RUIZ_CLEMENTE.pdf')
        }
    }

    /**
     * Open mobile menu
     * 
     * @description This function open the mobile menu state
     * @return
     */
    const openMobileMenu = () => {
        setIsMobileMenuOpen(true)
    }

    /**
      * Close mobile menu
      * 
      * @description This function open the mobile menu state
      * @return
      */
    const closeMobileMenu = (): void => {
        setIsMobileMenuOpen(false);
    }

    /**
     * Navigate specific section
     * 
     * @param sectionId {string} The ID of the section to scroll to
     * @returns {void}
     */
    const navigateToSection = (sectionId: string): void => {
        closeMobileMenu();
        scrollToSection(sectionId);
        setCurrentSection(sectionId);
    }

    /**
     * @description Handle language change
     * @param language {string} 
     * @returns {void}
     */
    const handleLanguageChange = (language: string): void => {
        setSelectedLanguage(language)
        setIsLanguageDropdownOpen(false)
    }

    /**
     * Update current section based on scroll position
     * 
     * @returns {void}
     */
    useEffect(() => {
        const updateSection = () => {
            const sections = ['home', 'aboutme', 'portfolio', 'skills', 'experience', 'events'];
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const sectionId = sections[i];
                const section = document.getElementById(sectionId);

                if (section && section.offsetTop <= scrollPosition) {
                    setCurrentSection(sectionId);
                    break;
                }
            }
        };

        window.addEventListener('scroll', updateSection);

        return () => {
            window.removeEventListener('scroll', updateSection);
        };
    }, []);

    return <header className="backdrop-blur-sm border-b border-gray-800 fixed top-0 right-0 left-0 z-50 shadow-lg shadow-neutral-300/2">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="font-heading text-xl font-black text-white">Augusto Ruiz</div>

                <nav className="hidden 2xl:flex items-center space-x-8">
                    <NavItem
                        onClick={() => navigateToSection('home')}
                        active={currentSection === 'home'}
                        icon={HomeOutlined}
                        label="Home"
                    />

                    <NavItem
                        onClick={() => navigateToSection('aboutme')}
                        active={currentSection === 'aboutme'}
                        icon={UserOutlined}
                        label="About me"
                    />

                    <NavItem
                        onClick={() => navigateToSection('portfolio')}
                        active={currentSection === 'portfolio'}
                        icon={AuditOutlined}
                        label="Portfolio"
                    />

                    <NavItem
                        onClick={() => navigateToSection('skills')}
                        active={currentSection === 'skills'}
                        icon={StarOutlined}
                        label="Skills"
                    />

                    <NavItem
                        onClick={() => navigateToSection('experience')}
                        active={currentSection === 'experience'}
                        icon={CalendarOutlined}
                        label="Experience"
                    />

                    <NavItem
                        onClick={downloadCV}
                        icon={FileTextOutlined}
                        label={`CV (${selectedLanguage})`}
                    />

                    <div className="relative">
                        <button
                            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                            className="flex items-center space-x-2 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
                        >
                            <AlipayOutlined className="w-4 h-4" />

                            <span className="text-sm font-heading">
                                {selectedLanguage}
                            </span>

                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isLanguageDropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 w-24 bg-neutral-800 border border-gray-700 rounded-lg shadow-lg z-50">
                                <button
                                    onClick={() => handleLanguageChange("EN")}
                                    className={`w-full px-3 py-2 text-left text-sm font-heading hover:bg-white/10 transition-colors rounded-t-lg ${selectedLanguage === "EN" ? "text-blue-500 bg-blue-500/10" : "text-white"}`}
                                >
                                    EN
                                </button>

                                <button
                                    onClick={() => handleLanguageChange("ES")}
                                    className={`w-full px-3 py-2 text-left text-sm font-heading hover:bg-white/10 transition-colors rounded-b-lg ${selectedLanguage === "ES" ? "text-blue-500 bg-blue-500/10" : "text-white"}`}
                                >
                                    ES
                                </button>
                            </div>
                        )}
                    </div>
                </nav>

                <button
                    onClick={openMobileMenu}
                    className="2xl:hidden py-2 px-3 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-center"
                    aria-label="Toggle mobile menu"
                >
                    <MenuOutlined className="text-lg" />
                </button>
            </div>
        </div>

        <div className={`fixed flex bg-neutral-900/60 h-dvh w-dvh transition-all transition-discrete ${isMobileMenuOpen ? 'opacity-100 z-40 visible' : 'opacity-0 z-[-1] invisible'}`}>
            <div className='grow' onClick={closeMobileMenu} />

            <div className={`2xl:hidden fixed inset-y-0 right-0 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0 z-[0]" : "translate-x-full z-[100]"}`}>
                <div className="p-6 h-dvh bg-neutral-800 backdrop-blur-lg shadow-2xl shadow-black/50 w-80">
                    <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-700">
                        <h3 className="text-lg font-heading font-bold text-white">Menu</h3>

                        <button
                            onClick={closeMobileMenu}
                            className="py-2 px-3 text-white hover:bg-white/10 rounded-lg transition-colors text-center cursor-pointer"
                        >
                            <CloseOutlined className="text-lg" />
                        </button>
                    </div>

                    <nav className="space-y-4">
                        <MobileNavItem
                            onClick={() => navigateToSection('home')}
                            active={currentSection === 'home'}
                            icon={HomeOutlined}
                            label="Home"
                        />

                        <MobileNavItem
                            onClick={() => navigateToSection('aboutme')}
                            active={currentSection === 'aboutme'}
                            icon={UserOutlined}
                            label="About me"
                        />

                        <MobileNavItem
                            onClick={() => navigateToSection('portfolio')}
                            active={currentSection === 'portfolio'}
                            icon={AuditOutlined}
                            label="Portfolio"
                        />

                        <MobileNavItem
                            onClick={() => navigateToSection('skills')}
                            active={currentSection === 'skills'}
                            icon={StarOutlined}
                            label="Skills"
                        />

                        <MobileNavItem
                            onClick={() => navigateToSection('experience')}
                            active={currentSection === 'experience'}
                            icon={CalendarOutlined}
                            label="Experience"
                        />

                        <MobileNavItem
                            icon={FileTextOutlined}
                            label="CV"
                            onClick={closeMobileMenu}
                        />

                        <div className="pt-4 border-t border-gray-700">
                            <div className="space-y-2">
                                <div className="flex items-center space-x-3 px-4 py-2 text-white">
                                    <AlipayOutlined className="w-5 h-5" />
                                    <span className="font-heading">Language</span>
                                </div>

                                <div className="pl-4 space-y-1">
                                    <button
                                        onClick={() => {
                                            handleLanguageChange("EN")
                                            closeMobileMenu()
                                        }}
                                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-heading ${selectedLanguage === "EN"
                                            ? "text-blue-500 bg-blue-500/10"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                            }`}
                                    >
                                        English
                                    </button>

                                    <button
                                        onClick={() => {
                                            handleLanguageChange("ES")
                                            closeMobileMenu()
                                        }}
                                        className={`w-full text-left    px-4 py-2 rounded-lg transition-colors font-heading ${selectedLanguage === "ES"
                                            ? "text-blue-500 bg-blue-500/10"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                            }`}
                                    >
                                        Español
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
}