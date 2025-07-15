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
    { id: "collaboration", label: "Collaborazioni" },
    { id: "contact", label: "Contatti" },
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
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
          className="fixed bottom-8 left-0 right-0 z-40 flex justify-center"
        >
          <div className="bg-white shadow-lg rounded-full px-6 py-3 flex items-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-4 py-1 text-sm transition-colors ${
                  activeSection === section.id ? "text-primary" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={scrollToTop}
              className="ml-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center"
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
