"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from "react-icons/fa";

export const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/sebastianmena",
      color: "hover:text-gray-600",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/sebastianmena",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:sebastian.mena@example.com",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            {/* Main Info */}
            <div className="space-y-2">
              <motion.h3
                className="text-2xl font-bold text-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Sebastian Mena
              </motion.h3>
              <motion.p
                className="text-muted-foreground font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {t("hero.title")}
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`text-muted-foreground ${social.color} transition-all duration-300 hover:bg-muted/50`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              className="w-full h-px bg-border/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            />

            {/* Copyright */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                {t("footer.madeWith")}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2,
                  }}
                >
                  <FaHeart className="w-4 h-4 text-red-500 fill-current" />
                </motion.span>
                {t("footer.andCode")}
              </p>
              <p className="text-sm text-muted-foreground">
                © 2024 Sebastian Mena. {t("footer.allRightsReserved")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
