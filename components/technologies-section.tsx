"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@iconify/react"

const technologiesData = [
  {
    title: "Backend",
    color: "from-red-500 to-orange-500",
    technologies: [
      { name: "Node.js", icon: "logos:nodejs-icon-alt" },
      { name: "Express", icon: "skill-icons:expressjs-dark" },
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "PHP", icon: "logos:php" },
      { name: "Python", icon: "logos:python" },
      { name: "Django", icon: "logos:django-icon" },
      { name: "Flask", icon: "logos:flask" },
      { name: "MongoDB", icon: "vscode-icons:file-type-mongo" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
    ],
  },
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "TypeScript", icon: "devicon:typescript" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React Native", icon: "skill-icons:react-dark" },
      { name: "jQuery", icon: "devicon:jquery" },
      { name: "HTML", icon: "vscode-icons:file-type-html" },
      { name: "CSS", icon: "vscode-icons:file-type-css" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    title: "Tools",
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Docker", icon: "skill-icons:docker" },
      { name: "Jest", icon: "vscode-icons:file-type-jest" },
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "skill-icons:github-light" },
      { name: "Postman", icon: "devicon:postman" },
      { name: "Jira", icon: "logos:jira" },
      { name: "Figma", icon: "devicon:figma" },
    ],
  },
]

export function TechnologiesSection() {
  const { t } = useTranslation()

  return (
    <section id="technologies" className="py-20">
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
            {t("technologies.title")}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {technologiesData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center mb-8">
                <motion.h3
                  className="text-2xl font-bold text-foreground mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {category.title}
                </motion.h3>
                <motion.div
                  className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Horizontal Scroll Container */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex space-x-6 pb-4"
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    width: `${category.technologies.length * 180}px`,
                  }}
                >
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        y: -10,
                        transition: { duration: 0.2 },
                      }}
                      className="flex-shrink-0 w-40"
                    >
                      <Card className="h-32 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-background/70 backdrop-blur-sm group cursor-pointer">
                        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="mb-3">
                            <Icon icon={tech.icon} className="w-10 h-10" />
                          </motion.div>
                          <span className="text-sm font-semibold text-center text-foreground group-hover:text-blue-600 transition-colors">
                            {tech.name}
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Gradient Overlays for scroll effect */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Animation Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </div>
    </section>
  )
}
