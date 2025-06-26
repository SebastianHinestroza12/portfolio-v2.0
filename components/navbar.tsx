"use client";

import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Menu, X, Code2 } from "lucide-react";

export const Navbar = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-2xl shadow-blue-500/5`}
      >
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between h-8 md:h-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group cursor-pointer"
              onClick={() => scrollToSection("#home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  {!isOpen && (
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Code2 className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                    Sebastian
                  </div>
                  <div className="text-xs text-muted-foreground font-medium tracking-wider">
                    DEVELOPER
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-muted/30 backdrop-blur-sm rounded-full px-2 py-2 border border-border/20">
                {navItems.map((item) => (
                  <motion.button
                    key={item.key}
                    onClick={() => {
                      setActiveSection(item.key);
                      scrollToSection(item.to);
                    }}
                    className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeSection === item.key.replace("#", "")
                        ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t(`nav.${item.key}`)}
                    {activeSection === item.key && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="flex items-center space-x-3 ml-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ThemeToggle />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LanguageSwitcher />
                </motion.div>
              </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex items-center space-x-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ThemeToggle />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <LanguageSwitcher />
              </motion.div>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X className="h-5 w-5 text-white" />
                  ) : (
                    <Menu className="h-5 w-5 text-white" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-border/30 shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-slate-700 rounded-lg flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                        Sebastian
                      </div>
                      <div className="text-xs text-muted-foreground">
                        DEVELOPER
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                </div>

                <div className="flex-1 py-6">
                  <div className="space-y-2 px-6">
                    {navItems
                      .filter((data) => data.key !== "contact")
                      .map((item, index) => (
                        <motion.button
                          key={item.key}
                          onClick={() => scrollToSection(item.to)}
                          className="w-full text-left group relative"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group-hover:shadow-lg">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-slate-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div>
                              <div className="font-medium text-foreground group-hover:text-blue-600 transition-colors duration-300">
                                {t(`nav.${item.key}`)}
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                  </div>
                </div>

                <div className="p-6 border-t border-border/20">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">
                      {t(`nav.letsBuild`)}
                    </div>
                    <motion.button
                      onClick={() => scrollToSection("#contact")}
                      className="w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white py-3 px-6 rounded-xl font-medium shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t(`nav.contactMe`)}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});
