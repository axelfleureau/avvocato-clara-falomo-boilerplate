"use client"

import { useEffect, useState } from "react"
import InitialLoader from "@/components/initial-loader"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CertificationsSection from "@/components/certifications-section"
import ServicesSection from "@/components/services-section"
import CollaborationSection from "@/components/collaboration-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollProgressIndicator from "@/components/scroll-progress-indicator"
import SectionNavigator from "@/components/section-navigator"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ["hero", "about", "services", "certifications", "collaboration", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

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
      <CollaborationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
