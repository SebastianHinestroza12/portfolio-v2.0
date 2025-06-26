"use client";

import { memo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/constants/socialLinks";
import Image from "next/image";

export const HeroSection = memo(() => {
  const { t } = useTranslation();
  const pdfUrl = "/pdf/CV_Sebastian.pdf";

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12"
    >
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

          <div className="relative mb-8 flex justify-center">
            <div className="relative w-40 h-40 md:w-56 md:h-56">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-slate-700 p-1"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full rounded-full bg-background p-2">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
                    <Image
                      src="https://res.cloudinary.com/dafsjo7al/image/upload/v1750615569/1747657753243_uu9fz7.webp?height=200&width=200"
                      alt="Sebastian Mena"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
              Sebastian Mena
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-foreground"
          >
            {t("hero.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-lg transition-all w-full sm:w-auto"
            >
              {t("hero.cta")}
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <a download href={pdfUrl} className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                {t("hero.downloadCV")}
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: Github, href: socialLinks.github },
              { icon: Linkedin, href: socialLinks.linkedin },
              { icon: Mail, href: "#contact" },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
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
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
