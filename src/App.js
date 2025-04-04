import React, { useState } from "react";
// Import the CSS file (needed for actual execution, ignored by preview)
// Importar el archivo CSS (necesario para ejecución real, ignorado por preview)
import "./App.css";
import fotoPerfil from "./assets/enrique_martinez_mejia.png";

// --- CV Data (Organized as objects/arrays) ---
// --- Datos del CV (Organizados como objetos/arrays) ---

const personalInfo = {
  name: "Enrique Martínez Mejía",
  title:
    "Ingeniero de Ventas Técnicas y Entusiasta de IA y Datos - Transformando las Ventas B2B con Ciencia de Datos - Profesor Invitado en People Analytics - Experiencia en Ventas de Tecnología Industrial",
  location: "Lima, Perú",
  phone: "+51 989 388 309",
  email: "enrique.martinez@mat-research.com", // Or preferred email
  linkedin: "https://www.linkedin.com/in/enriquemartinezmejia",
  // --- Placeholder for photo ---
  // --- Marcador de posición para foto ---
  photoUrl: fotoPerfil, // Replace with your actual photo URL / Reemplaza con la URL de tu foto real
  // --- Placeholder for YouTube Video Embed URL ---
  // --- Marcador de posición para URL de Inserción de Video de YouTube ---
  youtubeEmbedUrl:
    "https://www.youtube.com/embed/krbWdZkj9M0?si=Yk4QhuwcJF-hdhL1", // <-- !!! REEMPLAZA ESTO con la URL "embed" de tu video de YouTube !!!
};

const objective =
  "Mi objetivo es poder apoyar al área comercial a potenciar su presencia digital, a ser más educativo con el cliente, a promover la formación y la excelencia técnica, y empezar a desarrollar un mejor camino para el análisis de datos en Perú.";

// --- Other Data Arrays (experiences, education, skills, etc. - remain unchanged) ---
// --- Otros Arrays de Datos (experiences, education, skills, etc. - permanecen sin cambios) ---
const experiences = [
  {
    title: "Docente de Inteligencia Artificial",
    company: "ICAM - Instituto de la Cámara de Comercio de Lima",
    location: "Lima, Perú (Remoto)",
    period: "Mar 2024 - Actualidad",
    description: [
      "Docente del área de IA para carreras de administración, marketing, logística.",
      "Manejo de herramientas de IA para vibe coding, desarrollo web, apps básicas en REACT.",
      "Implementación de agentes de IA con n8n, Flowise, make.",
      "Desarrollo de imágenes con IA (Modelos Open Source como Flux).",
      "Manejo de herramientas de IA para generación de vídeos (Kling, Runway, Veo 2, etc.).",
    ],
  },
  {
    title: "Consultor Comercial",
    company: "Materials Research & Technology",
    location: "Lima Metropolitan Area (Híbrido)",
    period: "2024 - Actualidad", // Verify exact start if needed
    description: [
      "Prospección de nuevos clientes y negocios para laboratorio de materiales.",
      "Búsqueda de proyectos educativos para formación de operadores/inspectores de Grúas.",
      "Desarrollo de alianzas comerciales para proyectos de I+D.",
    ],
  },
  {
    title: "Technical Sales Engineer",
    company: "TESTING SERVICE GROUP SAC",
    location: "Ate, Lima, Perú",
    period: "Feb 2023 - Abr 2024",
    description: [
      "Responsable de ventas técnicas consultivas B2B en el sector.",
      // Add more details if available
    ],
  },
  {
    title: "Gerente Comercial",
    company: "Metroomat NDT S.A.S",
    location: "Perú",
    period: "Sep 2021 - Ene 2023",
    description: [
      "Representante de Eddyfi para Perú.",
      "Inicio de operaciones en Perú, búsqueda de clientes y desarrollo de nuevos negocios.",
      "Introducción exitosa de los primeros productos de la línea de ondas guiadas en el mercado peruano.",
      "Cumplimiento de metas de ventas, manteniendo liderazgo de la marca en END.",
      "Apoyo en labores de analítica de ventas y marketing.",
      "Coordinación, construcción y cálculo de costos de proyectos.",
    ],
  },
  {
    title: "Ingeniero de Ventas",
    company: "GSS (General Supply Services)",
    location: "Lima, Perú",
    period: "2019 - 2021", // LinkedIn doesn't specify months
    description: [
      "A cargo de ventas de END (Eddyfi, Doppler) y herramientas/maquinaria para mantenimiento ferroviario (P&T).",
      "Desarrollo de la línea de productos para trenes.",
      "Logro de la venta de la primera máquina bateadora de Plasser & Theurer en Latinoamérica.",
    ],
  },
  {
    title: "Gerente",
    company: "Dianalytica",
    location: "Lima, Perú",
    period: "2021 - 2023", // Dates per CV PDF, adjust if needed
    description: [
      "Servicios de análisis de datos para empresas.",
      "Evaluación y aplicación de tecnologías de IA, investigación con datos.",
      "Optimización de procesos utilizando NLP y Machine Learning.",
    ],
  },
  {
    title: "Senior Sales Advisor",
    company: "Manelsa",
    location: "Provincia de Lima, Perú",
    period: "Ene 2018 - Ago 2018",
    description: [
      "Educación frecuente al cliente sobre nuevos productos/aplicaciones.",
      "Propuesta de valor y diferentes perspectivas sobre productos.",
      "Construcción de credibilidad mediante honestidad y cumplimiento de plazos.",
      "Desarrollo de contenido específico para cartera de clientes.",
    ],
  },
  // Add more experiences from LinkedIn/CV if desired
];
const education = [
  {
    institution: "The Wharton School (Online)",
    degree: "Specialist in Business Analytics",
    field: "Empresa, gestión, marketing y disciplinas afines",
    period: "2016 - 2017",
    description:
      "Especialización online en uso de herramientas tecnológicas para mejorar el desempeño empresarial (operaciones, ventas, RRHH, finanzas).",
  },
  {
    institution: "Universidad del Pacífico (PE)",
    degree: "Especialización en Gestión Comercial y Ventas",
    field: "Empresa, gestión, marketing y disciplinas afines",
    period: "2016",
    description:
      "Curso enfocado al desarrollo de capacidades estratégicas, marketing, liderazgo y gestión comercial.",
  },
  {
    institution: "Universidad Nacional de Colombia",
    degree: "Ingeniero Mecánico",
    field: "Ingeniería Mecánica",
    period: "2004 - 2010",
    description: "", // Add description if desired
  },
];
const skills = {
  "IA & Data Science": [
    "Python (Machine Learning, Pandas, Numpy)",
    "People Analytics",
    "Vertex AI",
    "Azure AI Fundamentals",
    "NLP (Google BERT)",
    "Statistical Modeling",
    "Data Cleaning",
    "Data Visualization",
    "Prompt Engineering (ChatGPT, Copilot, Vertex AI)",
  ],
  "Ventas & Comercial": [
    "Venta Consultiva B2B",
    "Gestión Comercial Estratégica",
    "Desarrollo de Negocios",
    "Marketing Digital",
    "Análisis de Ventas",
    "Liderazgo de Equipos Comerciales",
    "Negociación Estratégica",
  ],
  Automatización: ["n8n", "Microsoft Power Automate", "Microsoft Copilot"],
  "Tecnologías Industriales / NDT": [
    "Eddy Current (ECT/ECA)",
    "Ondas Guiadas (Guided Waves)",
    "ACFM",
    "MFL (Magnetic Flux Leakage)",
    "Inspección Visual con IA",
    "Pruebas No Destructivas (END)",
    "Metalurgia",
  ],
  "Web & Software": [
    "Diseño de páginas web (WordPress)",
    "React (Básico)",
    "Excel Avanzado",
  ],
  Idiomas: ["Español (Nativo)", "Inglés (Competencia profesional completa)"],
};
const certifications = [
  // Keep the full list from previous version
  {
    name: "Detect Manufacturing Defects using Visual Inspection AI Skill Badge",
    issuer: "Google",
    date: "Exp. Feb 2025",
    id: "3a8e07a1-116e-49ce-8c89-4542340fb141",
  },
  {
    name: "Craft effective prompts for Microsoft Copilot for Microsoft 365",
    issuer: "Microsoft",
    date: "May 2024",
  },
  {
    name: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google Cloud Training Online",
    date: "May 2024",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Microsoft",
    date: "Ago 2023",
  },
  {
    name: "Microsoft Azure AI Fundamentals: Get started with artificial intelligence",
    issuer: "Microsoft",
    date: "Ago 2023",
  },
  {
    name: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    date: "May 2023",
  },
  {
    name: "Amigo 2 ACFM® Product Training",
    issuer: "Eddyfi Technologies",
    date: "Nov 2022",
    id: "70a7-23fb-7d6b-7a73-...",
  },
  {
    name: "Sharck HR Product Training V1.0",
    issuer: "Eddyfi Technologies",
    date: "Nov 2022",
    id: "1820-f26a-88fb-36e7-...",
  },
  {
    name: "Spyne ECA Product Training V1.0",
    issuer: "Eddyfi Technologies",
    date: "Nov 2022",
    id: "b7ad-6f32-d782-ce76-...",
  },
  {
    name: "ECT and ECA theory V1.0",
    issuer: "Eddyfi Technologies",
    date: "Oct 2022",
    id: "a10a-f837-f901-e4a8-...",
  },
  {
    name: "Pipescan HD Product Training V2",
    issuer: "Eddyfi Technologies",
    date: "Oct 2022",
    id: "e9ab-7e3c-aa99-eb53-...",
  },
  {
    name: "TECA and sharck BW product Training V1.0",
    issuer: "Eddyfi Technologies",
    date: "Sep 2022",
    id: "c296-4ed1-e5c5-fca9-...",
  },
  {
    name: "DATA CLEANING AND ANALYSIS",
    issuer: "Dataquest.io",
    date: "Sep 2020",
  },
  {
    name: "DATA CLEANING IN PYTHON: ADVANCED",
    issuer: "Dataquest.io",
    date: "Sep 2020",
  },
  {
    name: "STORYTELLING THROUGH DATA VISUALIZATION",
    issuer: "Dataquest.io",
    date: "Sep 2020",
  },
  {
    name: "PANDAS AND NUMPY FUNDAMENTALS",
    issuer: "Dataquest.io",
    date: "Ago 2020",
  },
  {
    name: "Endomarketing",
    issuer: "Universidad Privada Boliviana",
    date: "Ago 2018",
  },
  { name: "Lighting Automation", issuer: "Acuity", date: "Oct 2017" },
  {
    name: "Curso de iluminación y automatización",
    issuer: "Acuity",
    date: "Nov 2016",
  },
  {
    name: "People Analytics",
    issuer: "Wharton Online",
    date: "Ago 2016",
    id: "ATCWZXNWRDE3",
  },
  {
    name: "Operations Analytics",
    issuer: "Wharton Online",
    date: "Jul 2016",
    id: "6N4MHVLEC5PC",
  },
  {
    name: "Customer Analytics",
    issuer: "Wharton Online",
    date: "",
    id: "DU27B7LB7NLV",
  }, // Date not specified on LinkedIn
  {
    name: "Successful Negotiation: Essential Strategies and Skills",
    issuer: "University of Michigan",
    date: "",
    id: "44FJJX23BU7R",
  }, // Date not specified
];
const projects = [
  // Keep the full list from previous version
  {
    title: "Desarrollo de Bots y Automatizaciones",
    description:
      "Creación de bots y flujos de trabajo automatizados con n8n y Power Automate para optimizar procesos de marketing digital, prospectación de clientes y gestión de proyectos de investigación de materiales.",
    technologies: [
      "n8n",
      "Power Automate",
      "APIs",
      "Marketing Digital",
      "Ventas B2B",
    ],
  },
  {
    title: "People Analytics (Docencia)",
    description:
      "Enseñanza de técnicas de análisis de datos (Excel, Python) aplicadas a RRHH para reducir rotación, predecir renuncias y analizar tendencias de comportamiento en UPC y Universidad Científica del Sur.",
    technologies: ["Python", "Pandas", "Excel", "Análisis de Datos", "RRHH"],
  },
  {
    title: "Análisis de Datos Escuelas NYC",
    description:
      "Proyecto con base de datos de escuelas secundarias de NYC para estimar razones de bajos resultados en ciertas poblaciones (realizado en Dataquest).",
    technologies: [
      "Python",
      "Pandas",
      "Análisis de Datos",
      "Visualización de Datos",
    ],
  },
  {
    title: "Spotify API: Canciones Top LatAm",
    description:
      "Investigación usando la API de Spotify para encontrar las canciones más antiguas aún presentes en listas de éxitos de América Latina.",
    technologies: [
      "Python",
      "API REST (Spotify)",
      "Pandas",
      "Análisis de Datos",
    ],
  },
  {
    title: "Top Importaciones Perú (NLP/ML)",
    description:
      "Análisis de datos de importaciones desde China usando NLP (Google BERT) y Machine Learning para identificar productos top, categorizar información y comprender tendencias de mercado.",
    technologies: [
      "Python",
      "NLP (BERT)",
      "Machine Learning",
      "Pandas",
      "Análisis de Mercado",
    ],
  },
  {
    title: "Google Trends para E-commerce",
    description:
      "Investigación usando Google Trends y Python para identificar productos con potencial de venta en e-commerce, categorizados con Google BERT.",
    technologies: [
      "Python",
      "Google Trends API",
      "NLP (BERT)",
      "Análisis de Mercado",
      "E-commerce",
    ],
  },
];
const volunteering = [
  {
    role: "Voluntario Misionero",
    organization: "Voluntariado Misionero Lasallista",
    period: "Ene 2011 - Jul 2011",
    location: "Magangué, Colombia",
    description:
      "Acompañamiento a jóvenes y niños. Talleres de liderazgo, energías renovables, matemáticas, física y proyectos municipales.",
  },
];
// --- End of Data Arrays ---

// Define page identifiers
// Definir identificadores de página
const PAGES = {
  HOME: "Inicio",
  EXPERIENCE: "Experiencia",
  EDUCATION: "Educación",
  SKILLS: "Habilidades",
  CERTIFICATIONS: "Certificaciones",
  PROJECTS: "Proyectos",
  VOLUNTEERING: "Voluntariado",
};

// --- React Components ---
// --- Componentes React ---

// Reusable component for section titles
// Componente reutilizable para títulos de sección
const SectionTitle = ({ title }) => <h2 className="section-title">{title}</h2>;

// Component for the navigation bar
// Componente para la barra de navegación
const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar">
      {Object.values(PAGES).map((page) => (
        <button
          key={page}
          className={`nav-button ${currentPage === page ? "active" : ""}`}
          onClick={() => setCurrentPage(page)} // Simplified handler
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

// Component for personal information header (Home Page)
// Componente para la información personal (Página de Inicio)
const PersonalInfo = ({ data }) => (
  // Removed page-content class from here, will be applied by App
  // Eliminada clase page-content de aquí, será aplicada por App
  <div className="personal-info section">
    <div className="header-content">
      {/* Profile Photo */}
      {/* Foto de Perfil */}
      <div className="profile-photo-container">
        <img
          src={data.photoUrl}
          alt="Foto de perfil de Enrique Martínez"
          className="profile-photo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/150x150/cccccc/FFFFFF?text=Error";
          }} // Basic fallback
        />
      </div>

      {/* YouTube Video */}
      {/* Video de YouTube */}
      {data.youtubeEmbedUrl && ( // Only render if URL exists
        <div className="video-container">
          <iframe
            src={data.youtubeEmbedUrl}
            title="Video de presentación de YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="youtube-video"
          ></iframe>
        </div>
      )}

      {/* Text Info */}
      {/* Información de Texto */}
      <div className="header-text">
        <h1>{data.name}</h1>
        <p className="title">{data.title}</p>
        <div className="contact-details">
          {/* Contact icons and links remain the same */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin inline-block mr-1"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {data.location}
          </span>{" "}
          |
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone inline-block mr-1"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>{" "}
            <a href={`tel:${data.phone.replace(/\s+/g, "")}`}>{data.phone}</a>
          </span>{" "}
          |
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail inline-block mr-1"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>{" "}
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </span>{" "}
          |
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin inline-block mr-1"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>{" "}
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </span>
        </div>
      </div>
    </div>
    {/* Objective */}
    {/* Objetivo */}
    <div className="objective">
      <SectionTitle title="Objetivo Profesional" />
      <p>{objective}</p>
    </div>
  </div>
);

// --- Other Page Components (ExperiencePage, EducationPage, etc. - simplified) ---
// --- Otros Componentes de Página (ExperiencePage, EducationPage, etc. - simplificados) ---
const ExperienceItem = ({ job }) => (
  <div className="job-entry">
    <h3>
      {job.title} - {job.company}
    </h3>
    <p className="job-period">
      {job.location} | {job.period}
    </p>
    <ul>
      {job.description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
const ExperiencePage = ({ jobs }) => (
  // Removed page-content class from here
  // Eliminada clase page-content de aquí
  <div className="experience section">
    <SectionTitle title="Experiencia Profesional" />
    {jobs.map((job, index) => (
      <ExperienceItem key={index} job={job} />
    ))}
  </div>
);
const EducationItem = ({ edu }) => (
  <div className="education-entry">
    <h3>
      {edu.degree} - {edu.institution}
    </h3>
    <p className="education-field">{edu.field}</p>
    <p className="education-period">{edu.period}</p>
    {edu.description && (
      <p className="education-description">{edu.description}</p>
    )}
  </div>
);
const EducationPage = ({ items }) => (
  // Removed page-content class from here
  // Eliminada clase page-content de aquí
  <div className="education section">
    <SectionTitle title="Educación" />
    {items.map((item, index) => (
      <EducationItem key={index} edu={item} />
    ))}
  </div>
);
const SkillsPage = ({ skillData }) => (
  // Removed page-content class from here
  // Eliminada clase page-content de aquí
  <div className="skills section">
    <SectionTitle title="Habilidades" />
    {Object.entries(skillData).map(([category, skillList]) => (
      <div key={category} className="skill-category">
        <h4>{category}</h4>
        <ul className="skill-list">
          {skillList.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
const CertificationItem = ({ cert }) => (
  <li className="certification-item">
    {cert.name} - <i>{cert.issuer}</i> ({cert.date})
    {/* {cert.id && <span> (ID: {cert.id})</span>} */}
  </li>
);
const CertificationsPage = ({ items }) => (
  // Removed page-content class from here
  // Eliminada clase page-content de aquí
  <div className="certifications section">
    <SectionTitle title="Licencias y Certificaciones" />
    <ul className="certification-list">
      {items.map((item, index) => (
        <CertificationItem key={index} cert={item} />
      ))}
    </ul>
  </div>
);
const ProjectItem = ({ project }) => (
  <div className="project-entry">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    {project.technologies && (
      <p className="project-tech">
        <strong>Tecnologías:</strong> {project.technologies.join(", ")}
      </p>
    )}
  </div>
);
const ProjectsPage = ({ items }) => (
  // Removed page-content class from here
  // Eliminada clase page-content de aquí
  <div className="projects section">
    <SectionTitle title="Proyectos Destacados" />
    {items.map((item, index) => (
      <ProjectItem key={index} project={item} />
    ))}
  </div>
);
const VolunteeringItem = ({ item }) => (
  <div className="volunteering-entry">
    <h3>
      {item.role} - {item.organization}
    </h3>
    <p className="volunteering-period">
      {item.location} | {item.period}
    </p>
    <p>{item.description}</p>
  </div>
);
const VolunteeringPage = ({ items }) => (
  // Removed page-content class from here
  // Eliminada clase page-content de aquí
  <div className="volunteering section">
    <SectionTitle title="Voluntariado" />
    {items.map((item, index) => (
      <VolunteeringItem key={index} item={item} />
    ))}
  </div>
);
// --- End of Other Page Components ---

// --- Main App Component ---
// --- Componente Principal App ---
function App() {
  // State to manage the current page view
  // Estado para gestionar la vista de página actual
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);

  // Simplified page change handler
  // Manejador de cambio de página simplificado
  const handleSetCurrentPage = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  // Function to render the current page based on state
  // Función para renderizar la página actual según el estado
  const renderPage = () => {
    switch (
      currentPage // Render based on currentPage directly
    ) {
      case PAGES.HOME:
        return <PersonalInfo data={personalInfo} />;
      case PAGES.EXPERIENCE:
        return <ExperiencePage jobs={experiences} />;
      case PAGES.EDUCATION:
        return <EducationPage items={education} />;
      case PAGES.SKILLS:
        return <SkillsPage skillData={skills} />;
      case PAGES.CERTIFICATIONS:
        return <CertificationsPage items={certifications} />;
      case PAGES.PROJECTS:
        return <ProjectsPage items={projects} />;
      case PAGES.VOLUNTEERING:
        return <VolunteeringPage items={volunteering} />;
      default:
        return <PersonalInfo data={personalInfo} />; // Default to home
    }
  };

  return (
    <div className="app-container">
      {/* CSS is expected in App.css */}
      {/* Se espera el CSS en App.css */}

      {/* Navigation Bar */}
      {/* Barra de Navegación */}
      <Navbar currentPage={currentPage} setCurrentPage={handleSetCurrentPage} />

      {/* Main Content Area */}
      {/* Área de Contenido Principal */}
      <main className="main-content">
        {/* Apply page-content class for styling */}
        {/* Aplicar clase page-content para estilos */}
        <div className="page-content">{renderPage()}</div>
      </main>

      {/* Optional Footer */}
      {/* Pie de Página Opcional */}
      {/* <footer className="footer">
            <p>© {new Date().getFullYear()} Enrique Martínez Mejía</p>
       </footer> */}
    </div>
  );
}

export default App; // Export as App for standard create-react-app
