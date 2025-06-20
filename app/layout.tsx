import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sebastian Mena - Ingeniero de Software | Portafolio Profesional",
  description:
    "Portafolio profesional de Sebastian Mena, Ingeniero de Software especializado en desarrollo Full-Stack con 2+ años de experiencia. Experto en React, Node.js, TypeScript y más.",
  keywords: "Sebastian Mena, Ingeniero de Software, Full-Stack Developer, React, Node.js, TypeScript, Portafolio",
  authors: [{ name: "Sebastian Mena" }],
  creator: "Sebastian Mena",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sebastianmena.dev",
    title: "Sebastian Mena - Ingeniero de Software",
    description: "Portafolio profesional de Sebastian Mena, especializado en desarrollo Full-Stack",
    siteName: "Sebastian Mena Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastian Mena - Ingeniero de Software",
    description: "Portafolio profesional de Sebastian Mena, especializado en desarrollo Full-Stack",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
