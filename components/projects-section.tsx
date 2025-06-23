"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Play } from "lucide-react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

export const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = t("projects.items", { returnObjects: true }) as Array<{
    id: number;
    title: string;
    description: string;
    link: string;
    video?: string;
    repositories: Array<{ name: string; url: string }>;
    technologies: string[];
    images: string[];
  }>;

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {t("projects.title")}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-background/70 backdrop-blur-sm border-0">
                <div className="relative h-64 bg-muted overflow-hidden">
                  {project.images.length > 0 ? (
                    <Carousel
                      showThumbs={false}
                      showStatus={false}
                      infiniteLoop
                      autoPlay
                      interval={5000}
                      showArrows={project.images.length > 1}
                      showIndicators={project.images.length > 1}
                      className="h-full"
                    >
                      {project.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="h-64 relative">
                          <Image
                            src={image}
                            alt={`${project.title} - Screenshot ${
                              imgIndex + 1
                            }`}
                            fill
                            className="object-cover"
                            priority={index === 0 && imgIndex === 0}
                          />
                        </div>
                      ))}
                    </Carousel>
                  ) : (
                    <div className="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <span className="text-muted-foreground">
                        {t("projects.noPreview")}
                      </span>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 pt-4">
                    <div className="flex flex-wrap gap-3">
                      {project.link && (
                        <Button
                          variant="default"
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
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
                      )}

                      {project.video && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-300 dark:hover:bg-blue-900/30 transition-all duration-200"
                          asChild
                        >
                          <a
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            {t("projects.viewVideo")}
                          </a>
                        </Button>
                      )}
                    </div>

                    {project.repositories &&
                      project.repositories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.repositories.map((repo, repoIndex) => (
                            <Button
                              key={repoIndex}
                              variant="outline"
                              size="sm"
                              className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-200"
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
