"use client";

import { memo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Card, CardContent } from "@/components/ui/card";
import { FaNode } from "react-icons/fa";
import {
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiPhp,
  SiPython,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDocker,
  SiJest,
  SiGit,
  SiGithub,
  SiPostman,
  SiJira,
  SiFigma,
} from "react-icons/si";

const iconMap = {
  FaNode,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiPhp,
  SiPython,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDocker,
  SiJest,
  SiGit,
  SiGithub,
  SiPostman,
  SiJira,
  SiFigma,
};

export const TechnologiesSection = memo(() => {
  const { t } = useTranslation();

  const categories = t("technologies.categories", {
    returnObjects: true,
  }) as Array<{
    title: string;
    technologies: Array<{ name: string; icon: string }>;
  }>;

  return (
    <section
      id="technologies"
      className="py-12 md:py-20 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("technologies.title")}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="space-y-10 md:space-y-16 max-w-7xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative group overflow-hidden">
              <div className="text-center mb-6 md:mb-8">
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-3 md:mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {category.title}
                </motion.h3>
              </div>

              <Marquee gradient={false} speed={40} pauseOnHover>
                {category.technologies.map((tech, techIndex) => {
                  const IconComponent =
                    iconMap[tech.icon as keyof typeof iconMap] || null;

                  return (
                    <motion.div
                      key={`${tech.name}-${techIndex}`}
                      className="flex-shrink-0 px-2 md:px-3"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Card className="w-24 h-24 md:w-36 md:h-36 border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm cursor-pointer">
                        <CardContent className="p-3 md:p-6 flex flex-col items-center justify-center h-full">
                          {IconComponent && (
                            <IconComponent className="w-8 h-8 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />
                          )}
                          <span className="text-xs md:text-sm font-semibold text-center text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {tech.name}
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
