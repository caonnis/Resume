"use client"

import { Mail, Linkedin, Phone, CheckCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useRef } from "react"

export default function Portfolio() {
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

  const experiences = [
    {
      title: "IoT Quality Assurance Specialist",
      company: "Fortune Brands",
      location: "Argentina",
      period: "2023 - Present",
      status: "current",
      description: "Comprehensive testing for IoT-enabled lock systems, Bluetooth connectivity, and E2E testing.",
      details: [
        "Conducted comprehensive testing for IoT-enabled lock systems focusing on message reliability, Bluetooth connectivity, and system responsiveness",
        "Validated product acceptance criteria and functionalities through rigorous E2E and regression testing",
        "Participated in grooming sessions and contributed to estimation processes",
        "Collaborated closely with development and product teams to align testing efforts with project timelines and business goals",
      ],
    },
    {
      title: "IoT Test Engineer",
      company: "Cloud Studio",
      location: "Argentina",
      period: "Feb 2023 - Sep 2023",
      status: "confirmed",
      description: "MQTT protocol testing, QoS validation, and API testing with Jira tracking.",
      details: [
        "Designed and executed test scenarios focused on MQTT protocol behavior, QoS levels, and message retention",
        "Verified data transmission accuracy and broker functionality across connected devices and cloud infrastructure",
        "Executed web and mobile regression, integration, E2E, smoke, and API testing",
        "Tracked and reported bugs using Jira and Confluence; generated KPIs to evaluate test outcomes",
      ],
    },
    {
      title: "QA & Test Lead",
      company: "Boehringer Ingelheim",
      location: "Argentina",
      period: "Jul 2019 - Feb 2023",
      status: "confirmed",
      description: "Led QA activities in pharmaceutical sector, mentored junior engineers.",
      details: [
        "Led QA activities across multiple projects in the pharmaceutical and healthcare sectors",
        "Implemented quality assurance metrics and conducted root cause analysis to support corrective actions",
        "Coordinated test execution and managed defect tracking via Jira and HPQC",
        "Mentored junior QA engineers and contributed to performance evaluations",
      ],
    },
    {
      title: "Quality Assurance Lead",
      company: "OSDE",
      location: "Argentina",
      period: "Jan 2017 - Jul 2019",
      status: "confirmed",
      description: "Directed QA initiatives in regulated healthcare environment.",
      details: [
        "Directed QA initiatives in a regulated healthcare environment, ensuring compliance with industry standards",
        "Designed and executed test strategies to validate mission-critical applications",
        "Facilitated collaboration between QA, development, and business teams to ensure alignment of testing with requirements",
      ],
    },
    {
      title: "Senior User Acceptance Analyst",
      company: "Kapsch TrafficCom",
      location: "Argentina",
      period: "May 2010 - Dec 2016",
      status: "confirmed",
      description: "UAT scenarios for intelligent transportation systems, Python reporting.",
      details: [
        "Designed and executed UAT scenarios for intelligent transportation systems",
        "Conducted A/B, integration, regression, and E2E testing; reported findings using Python scripts",
        "Maintained daily communication with stakeholders and led SIT/SAT phases to obtain customer sign-off",
      ],
    },
    {
      title: "Team Leader – QA Division",
      company: "IntelligenX",
      location: "Argentina",
      period: "Dec 2009 - Apr 2010",
      status: "confirmed",
      description: "Managed QA team of 9 professionals, budgeting and risk management.",
      details: [
        "Managed a QA team of 9 professionals; responsible for budgeting, risk management, and defining quality policies",
        "Promoted best practices in software testing and ensured adherence to established QA methodologies",
      ],
    },
  ]

  const education = [
    {
      title: "Postgraduate: Data Governance & Compliance",
      institution: "University of Buenos Aires",
      year: "2024",
      focus: "Data Ethics, Cybersecurity, E-Discovery",
    },
    {
      title: "Diploma: Legal Blockchain & Crypto Assets",
      institution: "UCEMA",
      year: "2023",
    },
    {
      title: "Law Degree (JD Equivalent)",
      institution: "University of Belgrano",
      year: "2016",
    },
    {
      title: "Certified ScrumMaster® (CSM)",
      institution: "UTN",
      year: "2019",
    },
    {
      title: "ISTQB® Foundation Level",
      institution: "ISTQB",
      year: "2020",
    },
  ]

  const techStack = {
    Testing: ["HPQC", "Zephyr", "Applause", "BrowserStack", "TestRail", "Cypress", "Playwright", "Postman", "Swagger"],
    "Languages & DBs": ["Python", "SQL", "PostgreSQL", "Bash", "XML", "JSON", "Gherkin"],
    "CI/CD & DevOps": ["Jenkins", "Git", "GitLab", "Docker", "SDLC", "STLC"],
    "Agile & Management": ["Scrum", "Azure", "Jira", "Confluence", "Trello", "Azure DevOps", "OKRs", "KPIs"],
    Specialized: [
      "IoT (MQTT, Bluetooth)",
      "Healthcare (GxP, HIPAA)",
      "Legal Compliance",
      "Data Governance",
      "API Testing",
      "ETL",
      "UAT",
    ],
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Ariel Onnis</h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            QA Engineer & CSM® | Lawyer 🧑‍💼 | IoT Testing Specialist 🔧 | Data Governance Expert 📊
          </p>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <a
              href="mailto:ariel@example.com"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm sm:text-base">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/arielonnis"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm sm:text-base">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Professional Experience */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Professional Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3 sm:gap-0">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{exp.location}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{exp.period}</p>
                    </div>
                    <div className="flex items-center gap-2 self-start">
                      {exp.status === "current" ? (
                        <>
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-blue-400 text-xs sm:text-sm">Current</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 text-xs sm:text-sm">Completed</span>
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
                        <AccordionTrigger className="text-gray-500 hover:text-gray-300 text-xs py-1 justify-center gap-2 hover:no-underline transition-all duration-300">
                          <span className="flex items-center gap-2">
                            <span className="indicator-pulse">···</span>
                            <span>more details</span>
                            <div className="flex items-center gap-1 ml-1">
                              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                              <span className="text-xs text-gray-600">{exp.details.length}</span>
                            </div>
                          </span>
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
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Tech Stack</h2>
          <div className="space-y-6">
            {Object.entries(techStack).map(([category, skills]) => (
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
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Education & Certifications</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
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
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">About Me</h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Analytical mindset with a keen interest in UX/UI design and data visualization using tools like Power
                BI. Actively engaged in QA communities and committed to continuous learning in emerging technologies.
                Passionate about driving innovation in Quality Assurance, IoT ecosystems, and data security practices.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
