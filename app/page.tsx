"use client"

import { FormattedMessage, IntlProvider, } from 'react-intl'
import Header from "@/components/header"
import Home from "@/components/sections/home"
import AboutMe from "@/components/sections/aboutme"
import Portfolio from "@/components/sections/portfolio"
import Skills from "@/components/sections/skills"
import ExperienceCard from "@/components/experienceCard"
import { useLanguageContext } from '@/context/laguageContext'
import MESSAGES_ES from '@/utils/es.json'
import MESSAGES_EN from '@/utils/en.json'

export default function Page() {
  const { language } = useLanguageContext();

  return (
    <IntlProvider
      messages={language === 'ES' ? MESSAGES_ES : MESSAGES_EN}
      locale="fr"
      defaultLocale="es"
    >
      <div className="min-h-screen bg-neutral-900 text-foreground overflow-x-hidden">
        <Header />

        <main className="relative overflow-hidden">
          <Home />

          <AboutMe />

          <Portfolio />

          <Skills />

          <section id='experience' className="py-20 bg-neutral-900">
            <div className="container mx-auto px-6">
              <h2 className="text-5xl font-heading font-black text-white mb-16 text-center">
                <FormattedMessage id="experence" />
              </h2>

              <div className="max-w-4xl mx-auto space-y-12">
                <ExperienceCard
                  company="Realhost"
                  website="https://www1.realhost.com.mx/"
                  period={<FormattedMessage id="present" />}
                  logo="🌐"
                  isActive={true} />

                <ExperienceCard
                  company="Código Facilito"
                  website="https://codigofacilito.com/"
                  period=""
                  logo="💻"
                  isActive={false}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </IntlProvider>
  )
}