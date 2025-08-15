"use client"

import { Mail, Linkedin, Phone, Github, Globe, Menu, CheckCircle, Clock } from "lucide-react" // Added Download icon
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRef, useState } from "react"
import { translations } from "@/lib/translations"

type Language = "en" | "es"

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("en") // Default language is English
  const t = translations[lang]

  const accordionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const handleAccordionChange = (index: number, isOpen: boolean) => {
    if (isOpen && accordionRefs.current[index]) {
      setTimeout(() => {
        accordionRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        })
      }, 150)
    }
  }

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "en" ? "es" : "en"))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Fixed Hamburger Menu for all screen sizes */}
      <div className="fixed top-4 left-4 z-50 print-hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors text-sm"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-gray-800 border-gray-700 p-6">
            <div className="flex flex-col gap-6 pt-8">
              {/* Navigation Links */}
              <a
                href="#professional-experience"
                className="text-lg font-semibold text-gray-200 hover:text-white transition-colors"
              >
                {t.sections.professionalExperience}
              </a>
              <a href="#tech-stack" className="text-lg font-semibold text-gray-200 hover:text-white transition-colors">
                {t.sections.techStack}
              </a>
              <a
                href="#education-certifications"
                className="text-lg font-semibold text-gray-200 hover:text-white transition-colors"
              >
                {t.sections.educationCertifications}
              </a>
              <a href="#about-me" className="text-lg font-semibold text-gray-200 hover:text-white transition-colors">
                {t.sections.aboutMe}
              </a>

              {/* Language Toggle inside menu */}
              <div className="border-t border-gray-700 pt-6 mt-6">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors text-sm"
                  aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
                >
                  <Globe className="w-5 h-5" />
                  <span className="font-semibold">{lang === "en" ? "Español" : "English"}</span>
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-200">{t.header.title}</h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 px-4">{t.header.subtitle}</p>

          {/* Social Links */}
          <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 print-hidden">
            <a
              href="mailto:arielonnis@gmail.com"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm sm:text-base">{t.socialLinks.email}</span>
            </a>
            <a
              href="https://linkedin.com/in/arielonnis"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm sm:text-base">{t.socialLinks.linkedin}</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm sm:text-base">{t.socialLinks.whatsapp}</span>
            </a>
            <a
              href="https://github.com/caonnis"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm sm:text-base">{t.socialLinks.github}</span>
            </a>
          </div>
        </div>

        {/* Professional Experience */}
        <section id="professional-experience" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{t.sections.professionalExperience}</h2>
          <div className="relative space-y-4">
            {t.experiences.map((exp, index) => (
              <div key={index} className="relative">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3 sm:gap-0">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-gray-300 text-sm sm:text-base">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400">{exp.location}</p>
                        <p className="text-xs sm:text-sm text-gray-400">{exp.period}</p>
                      </div>
                      <div className="flex items-center gap-2 self-start">
                        {exp.status === "current" ? (
                          <>
                            <Clock className="w-4 h-4 text-blue-400 animate-pulse-blink" />
                            <span className="text-blue-400 text-xs sm:text-sm animate-pulse-blink">
                              {t.experienceDetails.current}
                            </span>
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 text-xs sm:text-sm">{t.experienceDetails.completed}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div
                      ref={(el) => {
                        accordionRefs.current[index] = el
                      }}
                      className="mt-2 pt-3 border-t border-gray-700/50"
                    >
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        onValueChange={(value) => handleAccordionChange(index, value === "details")}
                      >
                        <AccordionItem value="details" className="border-none">
                          <AccordionTrigger className="text-gray-500 hover:text-gray-300 text-xs py-1 justify-center hover:no-underline transition-colors duration-200 [&>svg]:animate-bounce-subtle">
                            {/* The default chevron from shadcn/ui's AccordionTrigger is used here */}
                          </AccordionTrigger>
                          <AccordionContent className="accordion-content text-gray-400 text-sm pt-3">
                            <ul className="space-y-2 sm:space-y-3">
                              {exp.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-2">
                                  <span className="text-gray-600 mt-1 text-xs">·</span>
                                  <span className="text-xs sm:text-sm leading-relaxed">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </CardContent>
                </Card>
                {index < t.experiences.length - 1 && (
                  <div className="absolute left-1/2 top-[calc(100%+0.5rem)] h-4 w-0.5 bg-gray-600 -translate-x-1/2 z-0" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{t.sections.techStack}</h2>
          <div className="space-y-6">
            {Object.entries(t.techStackCategories).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-200">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-700 text-gray-200 hover:bg-gray-600 text-xs sm:text-sm px-2 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education-certifications" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{t.sections.educationCertifications}</h2>
          <div className="space-y-4">
            {t.education.map((edu, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white">{edu.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{edu.institution}</p>
                      {edu.focus && <p className="text-xs sm:text-sm text-gray-400 mt-1">{edu.focus}</p>}
                    </div>
                    <div className="flex items-center gap-2 self-start">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-xs sm:text-sm">{edu.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills & Interests */}
        <section id="about-me">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{t.sections.aboutMe}</h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{t.aboutMeContent}</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
