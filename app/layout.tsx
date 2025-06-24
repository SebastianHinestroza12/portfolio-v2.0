import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sebastian Mena - Ingeniero de Software | Portafolio Profesional",
  description:
    "Portafolio profesional de Sebastian Mena, Ingeniero de Software especializado en desarrollo Full-Stack con 2+ años de experiencia. Experto en React, Node.js, TypeScript y más.",
  keywords:
    "Sebastian Mena, Ingeniero de Software, Full-Stack Developer, Backend, Frontend, React, Node.js, TypeScript, JavaScript, Python, Laravel, PHP, NestJS, Spring Boot, APIs REST, GraphQL, MySQL, PostgreSQL, MongoDB, Docker, Kubernetes, Servidores, AWS, Azure, CI/CD, DevOps, Microservicios, Seguridad Web, Diseño Responsivo, HTML, CSS, Tailwind, SASS, Desarrollo Web, Desarrollo de Software, Portafolio Profesional",
  authors: [{ name: "Sebastian Mena" }],
  icons: {
    icon: "https://res.cloudinary.com/dafsjo7al/image/upload/v1750618180/vscode-icons--file-type-light-json_cvbpgi.svg",
  },
  creator: "Sebastian Mena",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sebastian-mena.vercel.app",
    title: "Sebastian Mena - Ingeniero de Software",
    description:
      "Portafolio profesional de Sebastian Mena, especializado en desarrollo Full-Stack",
    siteName: "Sebastian Mena Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastian Mena - Ingeniero de Software",
    description:
      "Portafolio profesional de Sebastian Mena, especializado en desarrollo Full-Stack",
    images: [
      "https://res.cloudinary.com/dafsjo7al/image/upload/v1750615569/1747657753243_uu9fz7.webp",
    ],
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        </ThemeProvider> */}
        <Analytics />
        {children}
      </body>
    </html>
  );
}
