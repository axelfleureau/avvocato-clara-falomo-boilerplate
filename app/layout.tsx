import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Avv. Clara Falomo | Giurista internazionale d'impresa",
  description:
    "Avvocato Clara Falomo, esperta in diritto societario, bancario e composizione negoziata della crisi d'impresa. Consulenza legale professionale e collaborazioni interstudio.",
  openGraph: {
    title: "Avv. Clara Falomo | Giurista internazionale d'impresa",
    description: "Esperta in diritto societario, bancario e composizione negoziata della crisi d'impresa",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avv. Clara Falomo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Attorney",
              name: "Clara Falomo",
              image: "/images/clara-falomo.png",
              description:
                "Avvocato specializzato in diritto societario, bancario e composizione negoziata della crisi d'impresa",
              url: "https://www.avvocatoclarafalomo.it",
              telephone: "+39 XXXXXXXXXX",
              email: "info@avvocatoclarafalomo.it",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Udine",
                addressRegion: "UD",
                addressCountry: "IT",
              },
              knowsLanguage: ["it", "en"],
              knowsAbout: [
                "Diritto societario",
                "Diritto bancario",
                "Composizione negoziata della crisi d'impresa",
                "Governance societaria",
                "Compliance aziendale",
              ],
            }),
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
