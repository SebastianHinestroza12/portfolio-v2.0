"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Code,
  Lightbulb,
  Target,
  Zap,
  Cpu,
  Database,
  Globe,
  Server,
  Layers,
  GitBranch,
  Shield,
  Terminal,
  Network,
} from "lucide-react";

export const AboutSection = () => {
  const { t } = useTranslation();

  const highlights = t("about.highlights", { returnObjects: true }) as string[];
  const backendExpertise = t("about.backendExpertise", {
    returnObjects: true,
  }) as string[];

  const stats = t("about.stats", { returnObjects: true }) as Array<{
    icon: string;
    label: string;
    value: string;
  }>;

  const specialties = t("about.specialties", { returnObjects: true }) as Array<{
    icon: string;
    label: string;
  }>;

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Code,
    Target,
    Zap,
    Lightbulb,
    Cpu,
    Database,
    Globe,
    Server,
    Layers,
    GitBranch,
    Network,
    Shield,
    Terminal,
  };

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <div key={index} className="flex justify-center">
                  <Card className="w-full max-w-[160px] border-0 shadow-lg bg-background/50 flex flex-col items-center">
                    <CardContent className="flex flex-col items-center p-6 min-h-[180px]">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium text-center">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Highlights Section */}
            <Card className="border-0 shadow-xl bg-background/70">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
                  {t("about.description")}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50"
                    >
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Backend Expertise Section */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-center mb-6 text-foreground">
                    {t("about.backendTitle")}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {backendExpertise.map((expertise, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50"
                      >
                        <Server className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-foreground font-medium">
                          {expertise}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialties Section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border/50">
                  {specialties.map((item, index) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center space-y-2 text-center min-w-[80px] mx-auto"
                      >
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
