"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code, Lightbulb, Target, Zap, Cpu, Database, Globe } from "lucide-react"

export const AboutSection = () => {
  const { t } = useTranslation();

  const highlights = t("about.highlights", { returnObjects: true }) as string[];

  const stats = [
    { icon: Code, label: "Años de Experiencia", value: "2+" },
    { icon: Target, label: "Proyectos Completados", value: "15+" },
    { icon: Zap, label: "Tecnologías Dominadas", value: "20+" },
    { icon: Lightbulb, label: "Soluciones Creadas", value: "50+" },
  ];

  const codeElements = [
    { symbol: "{ }", position: "top-4 left-4", delay: 0 },
    { symbol: "< />", position: "top-4 right-4", delay: 1 },
    { symbol: "( )", position: "bottom-4 left-4", delay: 2 },
    { symbol: "[ ]", position: "bottom-4 right-4", delay: 1.5 },
    { symbol: "=>", position: "top-1/2 left-8", delay: 0.5 },
    { symbol: "&&", position: "top-1/2 right-8", delay: 2.5 },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-slate-500/5 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Code Elements */}
        {codeElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} text-blue-600/20 font-mono text-lg font-bold`}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: element.delay,
            }}
          >
            {element.symbol}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            {t("about.title")}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content - Now Full Width */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl bg-background/70 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <motion.p
                    className="text-lg text-muted-foreground leading-relaxed mb-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {t("about.description")}
                  </motion.p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                      >
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-foreground font-medium">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Icons Row */}
                  <motion.div
                    className="flex justify-center items-center space-x-8 mt-12 pt-8 border-t border-border/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: Code, label: "Clean Code" },
                      { icon: Database, label: "Database Design" },
                      { icon: Globe, label: "Web Development" },
                      { icon: Cpu, label: "System Architecture" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center space-y-2 text-center"
                        whileHover={{ scale: 1.1, y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950 rounded-full flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg bg-blue-50/50 dark:bg-blue-950/20 backdrop-blur-sm max-w-3xl mx-auto">
              <CardContent className="p-8">
                <motion.blockquote
                  className="text-lg italic text-muted-foreground mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  "El código limpio no se escribe siguiendo un conjunto de
                  reglas. No te conviertes en un artesano del software al
                  aprender una lista de heurísticas. El profesionalismo y la
                  artesanía provienen de los valores y disciplinas."
                </motion.blockquote>
                <motion.cite
                  className="text-sm font-semibold text-blue-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  - Robert C. Martin
                </motion.cite>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
