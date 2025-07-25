"use client"

import { useEffect, useState } from "react"
import InitialLoader from "@/components/initial-loader"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CertificationsSection from "@/components/certifications-section"
import ServicesSection from "@/components/services-section"
/*import CollaborationSection from "@/components/collaboration-section"*/
import Footer from "@/components/footer"
import ScrollProgressIndicator from "@/components/scroll-progress-indicator"
import SectionNavigator from "@/components/section-navigator"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    const handleScroll = () => {
      const sections = [
        { id: "hero", element: document.getElementById("hero") },
        { id: "about", element: document.getElementById("about") },
        { id: "services", element: document.getElementById("services") },
        { id: "certifications", element: document.getElementById("certifications") },
        { id: "collaboration", element: document.getElementById("collaboration") },
        { id: "contact", element: document.getElementById("contact") },
      ]

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Se siamo molto vicini al fondo, imposta "contact"
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("contact")
        return
      }

      // Controlla ogni sezione
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const sectionTop = scrollPosition + rect.top
          const sectionHeight = rect.height
          const sectionMiddle = sectionTop + sectionHeight / 2

          // Se il centro della viewport è oltre il centro della sezione
          const viewportCenter = scrollPosition + windowHeight / 2

          if (viewportCenter >= sectionMiddle - 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    // Chiamata iniziale per impostare la sezione attiva
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (loading) {
    return <InitialLoader />
  }

  return (
    <main className="relative">
      <ScrollProgressIndicator />
      <SectionNavigator activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CertificationsSection />

      <Footer />
    </main>
  )
}