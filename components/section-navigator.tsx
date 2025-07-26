"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

interface SectionNavigatorProps {
  activeSection: string
}

const SectionNavigator: React.FC<SectionNavigatorProps> = ({ activeSection }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "Chi Sono" },
    { id: "services", label: "Servizi" },
    { id: "certifications", label: "Certificazioni" },
    { id: "contact", label: "Contatti" },
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "contact") {
      // Per la sezione contatti, scorri alla fine della pagina
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      })
    } else if (sectionId === "hero") {
      // Per la sezione home/hero, scorri all'inizio della pagina
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-0 right-0 z-40 flex justify-center hidden xl:flex"
        >
          <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full px-6 py-3 flex items-center max-w-[calc(100vw-2rem)] overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-4 py-1 text-sm transition-colors whitespace-nowrap ${
                  activeSection === section.id ? "text-primary" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={scrollToTop}
              className="ml-4 bg-primary hover:bg-primary/90 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              aria-label="Torna in cima"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SectionNavigator