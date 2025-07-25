/*
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const CollaborationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="collaboration" ref={ref} className="section-padding bg-primary text-white collaboration-pattern">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span variants={itemVariants} className="text-gold uppercase tracking-widest text-sm font-medium">
            Collaborazioni
          </motion.span>
          <motion.h2 variants={itemVariants} className="heading-lg text-white mt-3">
            Collaborazioni Professionali
          </motion.h2>
          <motion.div variants={itemVariants} className="decorative-line mx-auto bg-gold" />
          <motion.p variants={itemVariants} className="text-lg text-white/90 mt-8 mb-6 max-w-3xl mx-auto">
            Sono disponibile per consulenze esterne e collaborazioni con altri studi legali. La mia esperienza in
            diritto societario, bancario e nella gestione delle crisi d&apos;impresa può integrare le competenze del
            vostro studio per offrire un servizio completo ai clienti. Non sono disponibile per incarichi in regime di
            subappalto.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-white/90 mb-10 max-w-3xl mx-auto">
            Offro flessibilità, competenza e riservatezza, garantendo un supporto professionale di alto livello per casi
            specifici o collaborazioni continuative.
          </motion.p>
          <motion.button
            variants={itemVariants}
            onClick={() => window.open("https://wa.me/393498057326?text=Ciao%20Clara,%20vorrei%20parlare%20di%20una%20possibile%20collaborazione", "_blank", "noopener,noreferrer")}
            className="btn bg-transparent text-white border border-white hover:bg-white/10 inline-flex items-center"
          >
            Parliamo di una collaborazione
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CollaborationSection
*/