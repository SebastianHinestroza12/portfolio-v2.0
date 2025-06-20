"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ChevronLeft, ChevronRight, Globe } from "lucide-react"
import Image from "next/image"

const projectsData = [
  {
    id: 1,
    title: "Cryp Wallet - Monedero virtual de criptomonedas",
    titleEn: "Cryp Wallet - Virtual Cryptocurrency Wallet",
    description:
      "Billetera virtual de criptomonedas que permite comprar, enviar, intercambiar y recibir criptomonedas de forma segura y eficiente. Desarrollada con tecnologías modernas, ofrece una interfaz intuitiva adaptada tanto a nuevos usuarios como a inversores experimentados.",
    descriptionEn:
      "Virtual cryptocurrency wallet that allows buying, sending, exchanging, and receiving cryptocurrencies securely and efficiently. Developed with modern technologies, it offers an intuitive interface adapted for both new users and experienced investors.",
    link: "https://cryp-wallet.vercel.app",
    repositories: [
      { name: "Frontend", url: "https://github.com/sebastian/cryp-wallet-frontend" },
      { name: "Backend", url: "https://github.com/sebastian/cryp-wallet-backend" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    images: [
      "https://res.cloudinary.com/dafsjo7al/image/upload/v1723246216/Macbook-Air-cryp-wallet.vercel.app_olaihw.webp",
      "https://res.cloudinary.com/dafsjo7al/image/upload/v1723246217/Macbook-Air-cryp-wallet.vercel.app-_1__vhb5cz.webp",
      "https://res.cloudinary.com/dafsjo7al/image/upload/v1723246212/Macbook-Air-cryp-wallet.vercel.app-_2__acnqch.webp",
    ],
  },
  {
    id: 2,
    title: "Sistema de Agenda Completo",
    titleEn: "Complete Appointment System",
    description:
      "Sistema integral de gestión de citas desarrollado desde cero. Incluye análisis de requisitos, arquitectura de base de datos, backend, frontend y despliegue a producción. Manejo completo del ciclo de vida del desarrollo de software.",
    descriptionEn:
      "Comprehensive appointment management system developed from scratch. Includes requirements analysis, database architecture, backend, frontend, and production deployment. Complete software development lifecycle management.",
    link: "https://agendarte.com.co/login",
    repositories: [{ name: "Repositorio Principal", url: "https://github.com/sebastian/agendarte-system" }],
    technologies: ["NestJS", "React", "TypeScript", "Docker", "PostgreSQL", "JWT"],
    images: ["/placeholder.svg?height=400&width=600"],
  },
]

export const ProjectsSection = () => {
  const { t, i18n } = useTranslation();

  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>(() => {
    const initialState: { [key: number]: number } = {};
    projectsData.forEach((project) => {
      initialState[project.id] = 0;
    });
    return initialState;
  });

  const nextImage = (
    e: React.MouseEvent,
    projectId: number,
    totalImages: number,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % totalImages,
    }));
  };

  const prevImage = (
    e: React.MouseEvent,
    projectId: number,
    totalImages: number,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + totalImages) % totalImages,
    }));
  };

  const goToImage = (
    e: React.MouseEvent,
    projectId: number,
    imageIndex: number,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: imageIndex,
    }));
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("projects.title")}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-background/70 backdrop-blur-sm border-0">
                <div className="relative h-64 bg-muted overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${project.id}-${currentImageIndex[project.id]}`}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={
                          project.images[currentImageIndex[project.id]] ||
                          "/placeholder.svg"
                        }
                        alt={
                          i18n.language === "es"
                            ? project.title
                            : project.titleEn
                        }
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        priority={index === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {project.images.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <button
                        onClick={(e) =>
                          prevImage(e, project.id, project.images.length)
                        }
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={(e) =>
                          nextImage(e, project.id, project.images.length)
                        }
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Siguiente imagen"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={(e) => goToImage(e, project.id, imgIndex)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              imgIndex === currentImageIndex[project.id]
                                ? "bg-white scale-125"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                            aria-label={`Ir a imagen ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground leading-tight">
                    {i18n.language === "es" ? project.title : project.titleEn}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {i18n.language === "es"
                      ? project.description
                      : project.descriptionEn}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-medium"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 pt-4">
                    <div className="flex gap-3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="default"
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Globe className="w-4 h-4 mr-2" />
                            {t("projects.viewDemo")}
                          </a>
                        </Button>
                      </motion.div>
                    </div>

                    {project.repositories &&
                      project.repositories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.repositories.map((repo, repoIndex) => (
                            <motion.div
                              key={repoIndex}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-300"
                                asChild
                              >
                                <a
                                  href={repo.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="w-4 h-4 mr-2" />
                                  {repo.name}
                                </a>
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
