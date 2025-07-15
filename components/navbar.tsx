"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navLinks = [
    { name: "Chi Sono", href: "#about" },
    { name: "Competenze", href: "#competencies" },
    { name: "Certificazioni", href: "#certifications" },
    { name: "Formazione", href: "#academic" },
    { name: "Collaborazioni", href: "#collaboration" },
    { name: "Contatti", href: "#contact" },
  ]

  // Hamburger menu animation variants
  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
    open: {
      rotate: 180,
      transition: { duration: 0.3 },
    },
  }

  // Mobile menu slide animation
  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  // Stagger animation for menu items
  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  }

  // Backdrop animation
  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 relative">
            <span className="text-primary font-cormorant text-lg sm:text-xl lg:text-2xl font-bold">
              Avv. Clara Falomo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link text-gray-700 hover:text-primary transition-colors font-montserrat text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="btn btn-primary ml-4">
              <Link href="#contact">Contattami</Link>
            </Button>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <motion.button
            variants={hamburgerVariants}
            animate={isOpen ? "open" : "closed"}
            onClick={toggleMenu}
            className="xl:hidden z-50 relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
            </div>
          </motion.button>
        </div>
      </header>

      {/* Mobile/Tablet Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/50 z-30 xl:hidden"
              onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 xl:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header Space */}
                <div className="h-20 flex items-center justify-center border-b border-gray-100">
                  <span className="text-primary font-cormorant text-xl font-bold">Menu</span>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        custom={i}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <button
                          onClick={() => handleLinkClick(link.href)}
                          className="w-full text-left py-4 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 font-montserrat text-lg font-medium border-b border-gray-50 last:border-b-0"
                        >
                          {link.name}
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact Button */}
                  <motion.div
                    custom={navLinks.length}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="mt-8"
                  >
                    <Button
                      className="btn btn-primary w-full py-3 text-base"
                      onClick={() => handleLinkClick("#contact")}
                    >
                      Contattami
                    </Button>
                  </motion.div>
                </nav>

                {/* Footer */}
                <motion.div
                  custom={navLinks.length + 1}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="px-6 py-6 border-t border-gray-100 text-center bg-gray-50"
                >
                  <p className="text-sm text-gray-600 font-montserrat font-medium">Avvocato Clara Falomo</p>
                  <p className="text-xs text-gray-400 mt-1">Consulenza legale specializzata</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
