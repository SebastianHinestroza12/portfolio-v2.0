import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        experience: "Experiencia",
        projects: "Proyectos",
        technologies: "Tecnologías",
        contact: "Contacto",
      },
      hero: {
        greeting: "¡Hola! Soy",
        title: "Ingeniero de Software",
        subtitle:
          "Especializado en desarrollo Full-Stack con 2+ años de experiencia creando soluciones escalables y mantenibles",
        cta: "Ver mi trabajo",
        downloadCV: "Descargar CV",
      },
      about: {
        title: "Sobre mí",
        description:
          "Soy un ingeniero de software full-stack con una fuerte orientación hacia el backend. Especializado en arquitectura de software escalable, diseño de APIs RESTful y microservicios. Me apasiona crear soluciones robustas, eficientes y bien estructuradas que cumplan con los más altos estándares de calidad.",
        highlights: [
          "Desarrollo de aplicaciones desde cero",
          "Arquitectura de software escalable",
          "Buenas prácticas y patrones de diseño",
          "Experiencia en todo el ciclo de vida del software",
          "Optimización de rendimiento y escalabilidad",
          "Implementación de seguridad y buenas prácticas",
        ],
        backendTitle: "Experiencia en Backend",
        backendExpertise: [
          "Diseño de APIs RESTful siguiendo JSON:API",
          "Arquitectura de microservicios",
          "Optimización de consultas y bases de datos",
          "Implementación de autenticación JWT/OAuth",
          "Paginación, filtros y búsquedas avanzadas",
          "Caching y manejo de estado distribuido",
        ],
        stats: [
          { icon: "Code", label: "Años de Experiencia", value: "2+" },
          { icon: "Target", label: "Proyectos Completados", value: "15+" },
          { icon: "Server", label: "APIs Desarrolladas", value: "20+" },
          { icon: "Layers", label: "Microservicios", value: "10+" },
        ],
        specialties: [
          { icon: "Code", label: "Código Limpio" },
          { icon: "Database", label: "Diseño de Bases de Datos" },
          { icon: "Server", label: "Desarrollo de APIs" },
          { icon: "Cpu", label: "Arquitectura de Sistemas" },
          { icon: "GitBranch", label: "Flujo Git" },
          { icon: "Network", label: "Microservicios" },
          { icon: "Shield", label: "Seguridad de APIs" },
          { icon: "Terminal", label: "Herramientas CLI" },
        ],
      },
      experience: {
        title: "Experiencias Profesionales",
        current: "Actual",
        positions: [
          {
            title: "Full Stack Developer",
            company: "Pedbox S.A.S",
            period: "Mayo 2024 - Presente",
            mode: "Presencial",
            description:
              "Desarrollo y mantenimiento de aplicaciones web full-stack, implementando nuevas funcionalidades y optimizando el rendimiento del sistema.",
          },
          {
            title: "Full Stack Developer",
            company: "SPE SAS",
            period: "Noviembre 2023 - Mayo 2024",
            mode: "Presencial",
            description:
              "Mejoré y optimicé un módulo de cobranzas, gestionando todas las ventas de asesores y diversos puntos, aumentando su rendimiento y usabilidad en un 75%. Diseñé y creé un módulo integral para el control eficiente de todos los activos de la empresa. Desarrollé servicios API REST que mejoraron la comunicación entre varias partes del sistema.",
          },
          {
            title: "Frontend Developer",
            company: "ITBLOBERS",
            period: "Enero 2023 - Agosto 2023",
            mode: "Remoto",
            description:
              "Optimicé la geolocalización del proyecto La Rebaja, logrando un aumento del 80% en velocidad y legibilidad. Realicé pruebas exhaustivas de interfaces para identificar y resolver problemas de usabilidad. Desarrollé aplicaciones móviles y web con Vtex IO.",
          },
        ],
      },
      projects: {
        title: "Proyectos Destacados",
        viewDemo: "Ver Demo",
        viewCode: "Ver Código",
        items: [
          {
            title: "Cryp Wallet - Monedero Virtual de Criptomonedas",
            description:
              "Billetera virtual de criptomonedas que permite comprar, enviar, intercambiar y recibir criptomonedas de forma segura y eficiente. Desarrollada con tecnologías modernas, ofrece una interfaz intuitiva adaptada tanto a nuevos usuarios como a inversores experimentados.",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
          },
          {
            title: "Sistema de Agenda Completo",
            description:
              "Sistema integral de gestión de citas desarrollado desde cero. Incluye análisis de requisitos, arquitectura de base de datos, backend, frontend y despliegue a producción. Manejo completo del ciclo de vida del desarrollo de software.",
            technologies: [
              "NestJS",
              "React",
              "TypeScript",
              "Docker",
              "PostgreSQL",
            ],
          },
        ],
      },
      technologies: {
        title: "Tecnologías",
        categories: ["Backend", "Herramientas", "Frontend"],
      },
      contact: {
        title: "Contacto",
        subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
        connectTitle: "¡Conectemos!",
        connectDescription:
          "Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. No dudes en contactarme para discutir cómo podemos trabajar juntos.",
        formTitle: "Envíame un mensaje",
        successTitle: "¡Éxito!",
        successMessage: "Tu mensaje ha sido enviado correctamente.",
        errorTitle: "Error",
        errorMessage:
          "Hubo un problema al enviar tu mensaje. Por favor inténtalo de nuevo.",
        form: {
          name: "Nombre",
          email: "Email",
          message: "Mensaje",
          send: "Enviar Mensaje",
          sending: "Enviando...",
        },
        errors: {
          name: "El nombre debe tener al menos 2 caracteres",
          email: "Correo electrónico inválido",
          message: "El mensaje debe tener al menos 10 caracteres",
        },
        info: {
          email: "Email",
          phone: "Teléfono",
          location: "Ubicación",
          country: "Colombia",
        },
      },
      footer: {
        madeWith: "Hecho con",
        andCode: "y mucho código",
        allRightsReserved: "Todos los derechos reservados.",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        experience: "Experience",
        projects: "Projects",
        technologies: "Technologies",
        contact: "Contact",
      },
      hero: {
        greeting: "Hi! I'm",
        title: "Software Engineer",
        subtitle:
          "Specialized in Full-Stack development with 2+ years of experience creating scalable and maintainable solutions",
        cta: "View my work",
        downloadCV: "Download CV",
      },
      about: {
        title: "About Me",
        description:
          "I'm a full-stack software engineer with a strong backend orientation. Specialized in scalable software architecture, RESTful API design, and microservices. I'm passionate about creating robust, efficient, and well-structured solutions that meet the highest quality standards.",
        highlights: [
          "Application development from scratch",
          "Scalable software architecture",
          "Best practices and design patterns",
          "Full software development lifecycle experience",
          "Performance and scalability optimization",
          "Security implementation and best practices",
        ],
        backendTitle: "Backend Expertise",
        backendExpertise: [
          "RESTful API design following JSON:API",
          "Microservices architecture",
          "Query and database optimization",
          "JWT/OAuth authentication implementation",
          "Pagination, filters and advanced search",
          "Caching and distributed state management",
        ],
        stats: [
          { icon: "Code", label: "Years of Experience", value: "2+" },
          { icon: "Target", label: "Completed Projects", value: "15+" },
          { icon: "Server", label: "APIs Developed", value: "20+" },
          { icon: "Layers", label: "Microservices", value: "10+" },
        ],
        specialties: [
          { icon: "Code", label: "Clean Code" },
          { icon: "Database", label: "Database Design" },
          { icon: "Server", label: "API Development" },
          { icon: "Cpu", label: "System Architecture" },
          { icon: "GitBranch", label: "Git Flow" },
          { icon: "Network", label: "Microservices" },
          { icon: "Shield", label: "API Security" },
          { icon: "Terminal", label: "CLI Tools" },
        ],
      },
      experience: {
        title: "Professional Experience",
        current: "Current",
        positions: [
          {
            title: "Full Stack Developer",
            company: "Pedbox S.A.S",
            period: "May 2024 - Present",
            mode: "On-site",
            description:
              "Development and maintenance of full-stack web applications, implementing new features and optimizing system performance.",
          },
          {
            title: "Full Stack Developer",
            company: "SPE SAS",
            period: "November 2023 - May 2024",
            mode: "On-site",
            description:
              "Improved and optimized a collections module, managing all advisor sales and various points, increasing performance and usability by 75%. Designed and created a comprehensive module for efficient control of all company assets. Developed REST API services that improved system communication.",
          },
          {
            title: "Frontend Developer",
            company: "ITBLOBERS",
            period: "January 2023 - August 2023",
            mode: "Remote",
            description:
              "Optimized geolocation for La Rebaja project, achieving an 80% increase in speed and readability. Performed extensive interface testing to identify and resolve usability issues. Developed mobile and web applications with Vtex IO.",
          },
        ],
      },
      projects: {
        title: "Featured Projects",
        viewDemo: "View Demo",
        viewCode: "View Code",
        items: [
          {
            title: "Cryp Wallet - Virtual Cryptocurrency Wallet",
            description:
              "Virtual cryptocurrency wallet that allows buying, sending, exchanging, and receiving cryptocurrencies securely and efficiently. Developed with modern technologies, it offers an intuitive interface adapted for both new users and experienced investors.",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
          },
          {
            title: "Complete Appointment System",
            description:
              "Comprehensive appointment management system developed from scratch. Includes requirements analysis, database architecture, backend, frontend, and production deployment. Complete software development lifecycle management.",
            technologies: [
              "NestJS",
              "React",
              "TypeScript",
              "Docker",
              "PostgreSQL",
            ],
          },
        ],
      },
      technologies: {
        title: "Technologies",
        categories: ["Backend", "Tools", "Frontend"],
      },
      contact: {
        title: "Contact",
        subtitle: "Have a project in mind? Let's talk!",
        connectTitle: "Let's connect!",
        connectDescription:
          "I'm always open to new opportunities and interesting projects. Feel free to contact me to discuss how we can work together.",
        formTitle: "Send me a message",
        successTitle: "Success!",
        successMessage: "Your message has been sent successfully.",
        errorTitle: "Error",
        errorMessage:
          "There was a problem sending your message. Please try again.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
          sending: "Sending...",
        },
        errors: {
          name: "Name must be at least 2 characters",
          email: "Invalid email address",
          message: "Message must be at least 10 characters",
        },
        info: {
          email: "Email",
          phone: "Phone",
          location: "Location",
          country: "Colombia",
        },
      },
      footer: {
        madeWith: "Made with",
        andCode: "and lots of code",
        allRightsReserved: "All rights reserved.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
