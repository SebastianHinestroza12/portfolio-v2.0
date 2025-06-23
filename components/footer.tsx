"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from "react-icons/fa";
import { socialLinks as social } from "@/constants/socialLinks";

export const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: social.github,
      color: "hover:text-gray-600",
      ariaLabel: t("aria.github"),
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: social.linkedin,
      color: "hover:text-blue-600",
      ariaLabel: t("aria.linkedin"),
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: social.email,
      color: "hover:text-red-600",
      ariaLabel: t("aria.email"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer
      className="bg-background border-t border-border/50 py-12"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h3
                id="footer-heading"
                className="text-2xl font-bold text-foreground"
              >
                Sebastian Mena
              </h3>
              <p className="text-muted-foreground font-medium">
                {t("hero.title")}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`text-muted-foreground ${social.color} transition-colors hover:bg-muted/50`}
                    asChild
                    aria-label={social.ariaLabel}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="w-full h-px bg-border/50"
            />

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                {t("footer.madeWith")}
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                >
                  <FaHeart className="w-4 h-4 text-red-500 fill-current" />
                </motion.span>
                {t("footer.andCode")}
              </p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Sebastian Mena.{" "}
                {t("footer.allRightsReserved")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
