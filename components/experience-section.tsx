"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Code } from "lucide-react";

export const ExperienceSection = () => {
  const { t } = useTranslation();

  const positions = t("experience.positions", {
    returnObjects: true,
  }) as Array<{
    title: string;
    company: string;
    period: string;
    mode: string;
    description: string;
    technologies: string[];
  }>;

  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            {t("experience.title")}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-green-600 hidden md:block"></div>

          <div className="space-y-12">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-background shadow-md hidden md:block"></div>

                <Card className="ml-0 md:ml-20 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-xl font-bold text-blue-600">
                        {position.title}
                      </CardTitle>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {position.company}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {position.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.mode}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {position.description}
                    </p>
                    {position.technologies &&
                      position.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          <div className="flex items-center gap-1 text-sm font-medium">
                            <Code className="h-4 w-4" />
                            <span>{t("technologies.title")}:</span>
                          </div>
                          {position.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
