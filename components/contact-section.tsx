"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { socialLinks } from "@/constants/socialLinks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";

export const ContactSection = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t("contact.errors.name"),
    }),
    email: z.string().email({
      message: t("contact.errors.email"),
    }),
    message: z.string().min(10, {
      message: t("contact.errors.message"),
    }),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: t("contact.defaultMessage"),
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xnqkppbd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(t("contact.successMessage"));
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error(t("contact.errorMessage"));
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: t("contact.info.email"),
      value: "menas7527@gmail.com",
      color: "bg-blue-500",
      href: socialLinks.email,
      ariaLabel: t("aria.email"),
    },
    {
      icon: FaPhone,
      title: t("contact.info.phone"),
      value: "+57 323 288 3290",
      color: "bg-green-500",
      href: socialLinks.whatsapp,
      ariaLabel: t("aria.phone"),
    },
    {
      icon: FaMapMarkerAlt,
      title: t("contact.info.location"),
      value: t("contact.info.country"),
      color: "bg-purple-500",
      ariaLabel: t("aria.location"),
    },
  ];

  // Configuración simplificada de animaciones
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 bg-muted/30 relative"
    >
      <ToastContainer role="alert" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-slate-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            variants={itemVariants}
          >
            {t("contact.title")}
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"
            variants={{
              hidden: { width: 0 },
              visible: { width: 96, transition: { duration: 0.8 } },
            }}
          />

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {t("contact.subtitle")}
          </motion.p>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Columna izquierda */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {t("contact.connectTitle")}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t("contact.connectDescription")}
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-background/70 backdrop-blur-sm">
                    <a
                      href={info.href ?? "#"}
                      target={info.href ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      aria-label={info.ariaLabel}
                      className="block"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center transition-transform`}
                            aria-hidden="true"
                          >
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {info.title}
                            </h4>
                            <p className="text-muted-foreground">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="flex space-x-4 pt-6">
              {[
                {
                  icon: FaGithub,
                  href: socialLinks.github,
                  label: t("aria.github"),
                },
                {
                  icon: FaLinkedinIn,
                  href: socialLinks.linkedin,
                  label: t("aria.linkedin"),
                },
                {
                  icon: FaEnvelope,
                  href: socialLinks.email,
                  label: t("aria.email"),
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="border-2 shadow-lg hover:shadow-xl"
                    aria-label={social.label}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <Card className="shadow-2xl border-0 bg-background/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <FaPaperPlane
                    className="w-5 h-5 text-blue-600"
                    aria-hidden="true"
                  />
                  {t("contact.formTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  aria-labelledby="contact-heading"
                >
                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="sr-only">
                        {t("contact.form.name")}
                      </label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder={t("contact.form.name")}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby="name-error"
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="sr-only">
                        {t("contact.form.email")}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder={t("contact.form.email")}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby="email-error"
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="sr-only">
                        {t("contact.form.message")}
                      </label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder={t("contact.form.message")}
                        rows={5}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby="message-error"
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                        size="lg"
                        disabled={isSubmitting || !isValid}
                        aria-busy={isSubmitting}
                      >
                        <FaPaperPlane
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                        {isSubmitting
                          ? t("contact.form.sending")
                          : t("contact.form.send")}
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
