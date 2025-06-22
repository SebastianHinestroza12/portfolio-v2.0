"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "home", to: "#home" },
    { key: "about", to: "#about" },
    { key: "projects", to: "#projects" },
    { key: "technologies", to: "#technologies" },
    { key: "experience", to: "#experience" },
    { key: "contact", to: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-foreground flex items-center gap-1"
          >
            <span className="text-blue-600 font-mono">{"<"}</span>
            <span>Sebastian Mena</span>
            <span className="text-blue-600 font-mono">{"/>"}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.to)}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`nav.${item.key}`)}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            <div className="flex items-center space-x-2 ml-4">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    activeClass="active"
                    key={item.key}
                    to={item.to.replace("#", "").trim()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-23}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors mx-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t(`nav.${item.key}`)}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
