"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/constants/socialLinks";
import Image from "next/image";

export const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-1 md:pt-0"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 font-medium"
          >
            {t("hero.greeting")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="relative mb-8 flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-slate-700 p-1"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full rounded-full bg-background p-2">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dafsjo7al/image/upload/v1750565310/IMG_0178_ef8bkf.jpg?height=200&width=200"
                      alt="Sebastian Mena"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-slate-700 p-1">
                  <div className="w-full h-full rounded-full bg-background p-2">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                      <Image
                        src="https://res.cloudinary.com/dafsjo7al/image/upload/v1750565310/IMG_0178_ef8bkf.jpg?height=200&width=200"
                        alt="Sebastian Mena - Full Stack Developer"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-slate-600 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
              Sebastian Mena
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-foreground"
          >
            {t("hero.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToProjects}
                size="default"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                {t("hero.cta")}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="default"
                className="px-6 md:px-8 py-2 md:py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                {t("hero.downloadCV")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: socialLinks.github },
              {
                icon: Linkedin,
                href: socialLinks.linkedin,
              },
              { icon: Mail, href: "#contact" },
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300"
                  onClick={() =>
                    social.href.startsWith("#")
                      ? document
                          .querySelector(social.href)
                          ?.scrollIntoView({ behavior: "smooth" })
                      : window.open(social.href, "_blank")
                  }
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center cursor-pointer"
          onClick={scrollToProjects}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
