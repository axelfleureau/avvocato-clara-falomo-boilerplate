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
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false)

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = isOpen ? "hidden" : "unset"

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navLinks = [
    { name: "Chi Sono", href: "#about" },
    { name: "Competenze", href: "#competencies" },
    { name: "Certificazioni", href: "#certifications" },
    { name: "Formazione", href: "#academic" },
    { name: "Contatti", href: "#contact" },
  ]

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const mobileMenuVariants = {
    closed: { x: "100%", transition: { type: "tween", duration: 0.3 } },
    open: { x: 0, transition: { type: "tween", duration: 0.3 } }
  }

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.1 + i * 0.05, duration: 0.3 }
    })
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-4"
      }`}>
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="flex items-center z-50 relative">
            <span className="text-primary font-cormorant text-lg sm:text-xl lg:text-2xl font-bold">
              Avv. Clara Falomo
            </span>
          </Link>

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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden z-50 relative p-3 rounded-xl hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
            </motion.div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30 xl:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 xl:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="h-20 flex items-center justify-center border-b border-gray-100">
                  <span className="text-primary font-cormorant text-xl font-bold">Menu</span>
                </div>

                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        custom={i}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <button
                          onClick={() => handleLinkClick(link.href)}
                          className="w-full text-left py-4 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-all duration-200 font-montserrat text-lg font-medium border-b border-gray-50 last:border-b-0"
                        >
                          {link.name}
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    custom={navLinks.length}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="mt-8"
                  >
                    <Button 
                      onClick={() => handleLinkClick("#contact")}
                      className="w-full btn btn-primary"
                    >
                      Contattami
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
