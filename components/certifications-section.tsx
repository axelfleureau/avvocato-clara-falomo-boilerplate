"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Award, X } from "lucide-react"
import Image from "next/image"

const CertificationsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCert !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedCert])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null)
      }
    }

    if (selectedCert !== null) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [selectedCert])

  const certifications = [
    {
      title: "Laurea in Giurisprudenza",
      institution: "Università degli Studi di Padova",
      date: "Marzo 2002",
      description: "Laurea in Giurisprudenza conseguita presso l'Università degli Studi di Padova.",
      image: "/images/certificates/laurea-giurisprudenza.jpg",
    },

    {
      title: "Laurea in Banca e Finanza",
      institution: "Università degli Studi di Udine",
      date: "Ottobre 2021",
      description: "Laurea in Banca e Finanza conseguita presso l'Università degli Studi di Udine.",
      image: "/images/certificates/laurea-banca-finanza.jpg",
    },

    {
      title: "Esperto nella Composizione Negoziata della Crisi d'Impresa",
      institution: "Unione Triveneta dei Consigli dell'Ordine degli Avvocati",
      date: "Febbraio 2022",
      description:
        "Corso di formazione di 55 ore per esperti nella composizione negoziata della crisi d'impresa secondo il DL 118/2021 convertito con L 147/2021.",
      image: "/images/certificates/attestato-crisi-impresa.jpg",
    },

    {
      title: "Corso Governance Società in House e Partecipate",
      institution: "Consiglio Nazionale Forense",
      date: "2023",
      description: "Corso specialistico sulla governance delle società in house e delle partecipate pubbliche.",
      image: null,
    },

    {
      title: "Master in Giurista Internazionale d'Impresa",
      institution: "Università degli Studi di Padova",
      date: "Settembre 2024",
      description:
        "Master universitario di secondo livello in diritto internazionale d'impresa, diretto dalla Professoressa Silvia Bertocco.",
      image: "/images/certificates/master-giurista-internazionale.jpg",
    },
    
    {
      title: "Certificazione Bloomberg Market Concepts",
      institution: "Bloomberg",
      date: "2020",
      description: "Certificazione sui concetti fondamentali dei mercati finanziari e degli strumenti Bloomberg.",
      image: null,
    },
    {
      title: "First Certificate",
      institution: "University of Cambridge",
      date: "2000",
      description: "Certificazione di lingua inglese di livello B2 del Quadro Comune Europeo.",
      image: null,
    },
    {
      title: "Certificazione B2 Advanced",
      institution: "CLAV Udine",
      date: "2019",
      description: "Certificazione avanzata di lingua inglese.",
      image: null,
    },
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <section id="certifications" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-gold uppercase tracking-widest text-sm font-medium">
            Formazione
          </motion.span>
          <motion.h2 variants={itemVariants} className="heading-lg text-primary mt-3">
            Certificazioni e Titoli Accademici
          </motion.h2>
          <motion.div variants={itemVariants} className="decorative-line mx-auto" />
          <motion.p variants={itemVariants} className="text-body">
            Formazione accademica e professionale continua per garantire competenze aggiornate e specializzate nel
            settore legale e finanziario.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="certificate-card cursor-pointer border border-gray-100 group"
              onClick={() => setSelectedCert(index)}
            >
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <Award className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                  <h3 className="font-cormorant text-lg lg:text-xl font-light leading-tight">{cert.title}</h3>
                </div>
                <p className="text-primary font-medium text-sm mb-2">{cert.institution}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
              <div className="certificate-overlay">
                <span className="text-white font-medium uppercase tracking-wider text-sm">Visualizza dettagli</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCert !== null && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
                  aria-label="Chiudi"
                >
                  <X size={20} />
                </button>

                <div className="p-4 sm:p-6 lg:p-8">
                  {certifications[selectedCert].image && (
                    <div className="mb-6">
                      <div className="relative w-full">
                        <Image
                          src={certifications[selectedCert].image! || "/placeholder.svg"}
                          alt={certifications[selectedCert].title}
                          width={800}
                          height={600}
                          className="w-full h-auto border border-gray-200 shadow-md rounded-lg"
                          sizes="(max-width: 768px) 95vw, 80vw"
                        />
                      </div>
                    </div>
                  )}

                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-cormorant font-light mb-2 text-primary leading-tight">
                      {certifications[selectedCert].title}
                    </h3>
                    <p className="text-gold font-medium text-lg mb-1">{certifications[selectedCert].institution}</p>
                    <p className="text-sm text-gray-500 mb-4">{certifications[selectedCert].date}</p>
                    <div className="h-px w-12 bg-gold mx-auto sm:mx-0 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {certifications[selectedCert].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default CertificationsSection
