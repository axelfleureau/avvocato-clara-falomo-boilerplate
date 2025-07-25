"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-cormorant font-light mb-4">Avv. Clara Falomo</h3>

          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-xl font-cormorant font-light mb-4">Contatti</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gold" />
                <span className="text-gray-400">Pordenone, Italia</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gold" />
                <a href="tel:+393498057326" className="text-gray-400 hover:text-white">
                  +39 349 805 7326
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gold" />
                <a href="mailto:info@avvocatoclarafalomo.it" className="text-gray-400 hover:text-white">
                  info@avvocatoclarafalomo.it
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2 text-gold" />
                <a
                  href="https://www.linkedin.com/in/clara-falomo-41a76a224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-cormorant font-light mb-4">Navigazione</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.getElementById("about")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  Chi Sono
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.getElementById("services")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.getElementById("certifications")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  Certificazioni
                </a>
              </li>
              <li>
                <a
                  href="#collaboration"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.getElementById("collaboration")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  Collaborazioni
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.getElementById("contact")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Avv. Clara Falomo. Tutti i diritti riservati. P.IVA (da inserire)
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
