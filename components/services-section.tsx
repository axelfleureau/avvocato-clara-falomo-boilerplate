"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Landmark, LifeBuoy, FileCheck, Users, BookOpen } from "lucide-react"

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: "Legale per privati",
      description:
        "Assistenza legale chiara e puntuale in ambito civile: tutela della persona e della famiglia, successioni, responsabilità civile e contratti. Un supporto su misura per ogni esigenza personale.",
      icon: <Building2 className="h-8 w-8 text-gold" />,
    },
    {
      title: "Gestione crisi e composizione negoziata",
      description:
        "Assistenza nella gestione e risoluzione delle crisi aziendali attraverso procedure negoziate, con particolare attenzione alla continuità aziendale.",
      icon: <LifeBuoy className="h-8 w-8 text-gold" />,
    },
    {
      title: "Diritto societario e governance",
      description:
        "Consulenza su modelli di governance societaria, adeguamenti normativi e implementazione di sistemi di compliance aziendale.",
      icon: <FileCheck className="h-8 w-8 text-gold" />,
    },/*
      { 
        title: "Collaborazioni",
        description: "Disponibilità per collaborazioni con altri studi legali o consulenza specialistica.",
        icon: <Users className="h-8 w-8 text-gold" />,
      },*/
    {
      title: "Diritto bancario",
      description:
        "Assistenza in operazioni bancarie, contrattualistica specializzata e consulenza in materia finanziaria.",
      icon: <Landmark className="h-8 w-8 text-gold" />,
    },
    {
      title: "Formazione e consulenza strategica",
      description:
        "Formazione: nell'ordine: Laurea in Giurisprudenza, Laurea in Banca e Finanza, Master, Corso per Esperto nella Composizione Negoziata della Crisi d'Impresa, Corso governance e quindi le certificazioni linguistiche e tecniche.",
      icon: <BookOpen className="h-8 w-8 text-gold" />,
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
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="services" ref={ref} className="section-padding bg-pearl-gray">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-gold uppercase tracking-widest text-sm font-medium">
            Servizi
          </motion.span>
          <motion.h2 variants={itemVariants} className="heading-lg text-primary mt-3">
            Servizi Legali Specializzati
          </motion.h2>
          <motion.div variants={itemVariants} className="decorative-line mx-auto" />
          <motion.p variants={itemVariants} className="text-body">
            Offro servizi legali specializzati in diverse aree del diritto civile, con un approccio
            personalizzato e orientato alle soluzioni.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="service-card bg-white"
            >
              <div className="flex flex-col">
                <div className="mb-6">{service.icon}</div>
                <h3 className="heading-sm mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
