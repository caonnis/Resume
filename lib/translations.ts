export const translations = {
  en: {
    header: {
      title: "Ariel Onnis",
      subtitle: "IoT QA Engineer & CSM® | Data Driven | Lawyer",
    },
    socialLinks: {
      email: "Email",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      github: "GitHub",
    },
    sections: {
      professionalExperience: "Professional Experience",
      techStack: "Tech Stack",
      educationCertifications: "Education & Certifications",
      aboutMe: "About Me",
    },
    experienceDetails: {
      current: "Current",
      completed: "Completed",
    },
    experiences: [
      {
        title: "IoT Quality Assurance Specialist",
        company: "Fortune Brands",
        companyUrl: "https://www.fortunebrands.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "2023 - Present",
        status: "current",
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
        companyUrl: "https://www.cloudstudio.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "Feb 2023 - Sep 2023",
        status: "completed",
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
        companyUrl: "https://www.boehringer-ingelheim.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "Jul 2019 - Feb 2023",
        status: "completed",
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
        companyUrl: "https://www.osde.com.ar/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "Jan 2017 - Jul 2019",
        status: "completed",
        details: [
          "Directed QA initiatives in a regulated healthcare environment, ensuring compliance with industry standards",
          "Designed and executed test strategies to validate mission-critical applications",
          "Facilitated collaboration between QA, development, and business teams to ensure alignment of testing with requirements",
        ],
      },
      {
        title: "Senior User Acceptance Analyst",
        company: "Kapsch TrafficCom",
        companyUrl: "https://www.kapsch.net/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "May 2010 - Dec 2016",
        status: "completed",
        details: [
          "Designed and executed UAT scenarios for intelligent transportation systems",
          "Conducted A/B, integration, regression, and E2E testing; reported findings using Python scripts",
          "Maintained daily communication with stakeholders and led SIT/SAT phases to obtain customer sign-off",
        ],
      },
      {
        title: "Team Leader – QA Division",
        company: "IntelligenX",
        companyUrl: "https://www.intelligenx.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "Dec 2009 - Apr 2010",
        status: "completed",
        details: [
          "Managed a QA team of 9 professionals; responsible for budgeting, risk management, and defining quality policies",
          "Promoted best practices in software testing and ensured adherence to established QA methodologies",
        ],
      },
      {
        title: "Senior Software Quality Analyst (SQA)",
        company: "Accenture",
        companyUrl: "https://www.accenture.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "Sept 2007 – Dec 2009",
        status: "completed",
        details: [
          "Developed and executed test cases for banking and finance applications",
          "Tracked defects and performed root cause analysis using HP Quality Center (HPQC)",
          "Generated KPIs and reports to monitor progress and support decision-making",
        ],
      },
      {
        title: "Internship – Quality Assurance",
        company: "Hewlett-Packard",
        companyUrl: "https://www.hp.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "May 2006 - Ago 2007",
        status: "completed",
        details: [
          "Assisted the QA team with functional and regression testing, defect documentation, and product validation support",
          "Participated in test case creation and used tools such as Mercury Quality Center, Bugzilla, and QuickTest Professional (QTP) in a structured corporate environment",
        ],
      },
    ],
    education: [
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
        title: "ISTQB® Foundation Level",
        institution: "ISTQB",
        year: "2020",
      },
      {
        title: "Certified ScrumMaster® (CSM)",
        institution: "UTN",
        year: "2019",
      },
      {
        title: "Law Degree (JD Equivalent)",
        institution: "University of Belgrano",
        year: "2016",
      },
    ].sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year)), // Sort by year descending
    techStackCategories: {
      Testing: [
        "HPQC",
        "Zephyr",
        "Applause",
        "BrowserStack",
        "TestRail",
        "Cypress",
        "Playwright",
        "Postman",
        "Swagger",
      ],
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
    },
    aboutMeContent:
      "Analytical mindset with a keen interest in UX/UI design and data visualization using tools like Power BI. Actively engaged in QA communities and committed to continuous learning in emerging technologies. Passionate about driving innovation in Quality Assurance, IoT ecosystems, and data security practices.",
  },
  es: {
    header: {
      title: "Ariel Onnis",
      subtitle: "Ingeniero QA IoT & CSM® | Orientado a Datos | Abogado",
    },
    socialLinks: {
      email: "Correo",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      github: "GitHub",
    },
    sections: {
      professionalExperience: "Experiencia Profesional",
      techStack: "Tecnologías",
      educationCertifications: "Educación y Certificaciones",
      aboutMe: "Sobre Mí",
    },
    experienceDetails: {
      current: "Actual",
      completed: "Completado",
    },
    experiences: [
      {
        title: "Especialista en Aseguramiento de Calidad IoT",
        company: "Fortune Brands",
        companyUrl: "https://www.fortunebrands.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "2023 - Presente",
        status: "current",
        details: [
          "Realicé pruebas exhaustivas para sistemas de cerraduras habilitados para IoT, centrándome en la fiabilidad de los mensajes, la conectividad Bluetooth y la capacidad de respuesta del sistema.",
          "Validé los criterios de aceptación del producto y las funcionalidades a través de rigurosas pruebas E2E y de regresión.",
          "Participé en sesiones de grooming y contribuí a los procesos de estimación.",
          "Colaboré estrechamente con los equipos de desarrollo y producto para alinear los esfuerzos de prueba con los plazos del proyecto y los objetivos comerciales.",
        ],
      },
      {
        title: "Ingeniero de Pruebas IoT",
        company: "Cloud Studio",
        companyUrl: "https://www.cloudstudio.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "Feb 2023 - Sep 2023",
        status: "completed",
        details: [
          "Diseñé y ejecuté escenarios de prueba centrados en el comportamiento del protocolo MQTT, los niveles de QoS y la retención de mensajes.",
          "Verifiqué la precisión de la transmisión de datos y la funcionalidad del broker en dispositivos conectados e infraestructura en la nube.",
          "Ejecuté pruebas de regresión web y móvil, integración, E2E, smoke y API.",
          "Rastree y reporté errores usando Jira y Confluence; generé KPIs para evaluar los resultados de las pruebas.",
        ],
      },
      {
        title: "Líder de QA y Pruebas",
        company: "Boehringer Ingelheim",
        companyUrl: "https://www.boehringer-ingelheim.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "Jul 2019 - Feb 2023",
        status: "completed",
        details: [
          "Lideré actividades de QA en múltiples proyectos en los sectores farmacéutico y de la salud.",
          "Implementé métricas de aseguramiento de calidad y realicé análisis de causa raíz para apoyar acciones correctivas.",
          "Coordiné la ejecución de pruebas y gestioné el seguimiento de defectos a través de Jira y HPQC.",
          "Mentoricé a ingenieros QA junior y contribuí a las evaluaciones de desempeño.",
        ],
      },
      {
        title: "Líder de Aseguramiento de Calidad",
        company: "OSDE",
        companyUrl: "https://www.osde.com.ar/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "Ene 2017 - Jul 2019",
        status: "completed",
        details: [
          "Dirigí iniciativas de QA en un entorno de atención médica regulado, asegurando el cumplimiento de los estándares de la industria.",
          "Diseñé y ejecuté estrategias de prueba para validar aplicaciones de misión crítica.",
          "Facilité la colaboración entre los equipos de QA, desarrollo y negocio para asegurar la alineación de las pruebas con los requisitos.",
        ],
      },
      {
        title: "Analista Senior de Aceptación de Usuario",
        company: "Kapsch TrafficCom",
        companyUrl: "https://www.kapsch.net/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "May 2010 - Dic 2016",
        status: "completed",
        details: [
          "Diseñé y ejecuté escenarios de UAT para sistemas de transporte inteligentes.",
          "Realicé pruebas A/B, de integración, regresión y E2E; reporté los hallazgos usando scripts de Python.",
          "Mantuve comunicación diaria con las partes interesadas y lideré las fases SIT/SAT para obtener la aprobación del cliente.",
        ],
      },
      {
        title: "Líder de Equipo – División QA",
        company: "IntelligenX",
        companyUrl: "https://www.intelligenx.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "Dic 2009 - Abr 2010",
        status: "completed",
        details: [
          "Gestioné un equipo de QA de 9 profesionales; responsable del presupuesto, la gestión de riesgos y la definición de políticas de calidad.",
          "Promoví las mejores prácticas en pruebas de software y aseguré la adherencia a las metodologías de QA establecidas.",
        ],
      },
      {
        title: "Analista Senior de Calidad de Software (SQA)",
        company: "Accenture",
        companyUrl: "https://www.accenture.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "Sep 2007 – Dic 2009",
        status: "completed",
        details: [
          "Desarrollé y ejecuté casos de prueba para aplicaciones bancarias y financieras.",
          "Rastree defectos y realicé análisis de causa raíz utilizando HP Quality Center (HPQC).",
          "Análisis de causa raíz de defectos e implementación de acciones correctivas.",
          "Colaboración con desarrolladores para asegurar la resolución oportuna de defectos.",
        ],
      },
      {
        title: "Pasantía – Aseguramiento de Calidad",
        company: "Hewlett-Packard",
        companyUrl: "https://www.hp.com/", // Example URL
        location: "Buenos Aires, Argentina",
        period: "May 2006 - Ago 2007",
        status: "completed",
        details: [
          "Asistí al equipo de QA con pruebas funcionales y de regresión, documentación de defectos y soporte de validación de productos.",
          "Participé en la creación de casos de prueba y utilicé herramientas como Mercury Quality Center, Bugzilla y QuickTest Professional (QTP) en un entorno corporativo estructurado.",
        ],
      },
    ],
    education: [
      {
        title: "Posgrado: Gobierno de Datos y Cumplimiento",
        institution: "Universidad de Buenos Aires",
        year: "2024",
        focus: "Ética de Datos, Ciberseguridad, E-Discovery",
      },
      {
        title: "Diplomatura: Blockchain Legal y Criptoactivos",
        institution: "UCEMA",
        year: "2023",
      },
      {
        title: "ISTQB® Foundation Level",
        institution: "ISTQB",
        year: "2020",
      },
      {
        title: "Certified ScrumMaster® (CSM)",
        institution: "UTN",
        year: "2019",
      },
      {
        title: "Abogacía",
        institution: "Universidad de Belgrano",
        year: "2016",
      },
    ].sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year)), // Sort by year descending
    techStackCategories: {
      Pruebas: [
        "HPQC",
        "Zephyr",
        "Applause",
        "BrowserStack",
        "TestRail",
        "Cypress",
        "Playwright",
        "Postman",
        "Swagger",
      ],
      "Lenguajes y BDs": ["Python", "SQL", "PostgreSQL", "Bash", "XML", "JSON", "Gherkin"],
      "CI/CD y DevOps": ["Jenkins", "Git", "GitLab", "Docker", "SDLC", "STLC"],
      "Agile y Gestión": ["Scrum", "Azure", "Jira", "Confluence", "Trello", "Azure DevOps", "OKRs", "KPIs"],
      Especializado: [
        "IoT (MQTT, Bluetooth)",
        "Salud (GxP, HIPAA)",
        "Cumplimiento Legal",
        "Gobierno de Datos",
        "Pruebas de API",
        "ETL",
        "UAT",
      ],
    },
    aboutMeContent:
      "Mentalidad analítica con un gran interés en el diseño UX/UI y la visualización de datos utilizando herramientas como Power BI. Participo activamente en comunidades de QA y estoy comprometido con el aprendizaje continuo en tecnologías emergentes. Apasionado por impulsar la innovación en el Aseguramiento de Calidad, los ecosistemas IoT y las prácticas de seguridad de datos.",
  },
}
