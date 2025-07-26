"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Landmark, LifeBuoy, FileCheck, Users, BookOpen } from "lucide-react"
import Image from "next/image"

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: "Recupero crediti",
      description:
        "Esperienza consolidata nella gestione stragiudiziale e giudiziale di recupero crediti.",
      icon: <Users className="h-8 w-8 text-gold" />,
    },
    { 
      title: "Diritto immobiliare",
      description: "Assistenza nelle questioni correlate alla proprietà immobiliare (locazioni e diritti reali quali proprietà, possesso, servitù e annessi).",
      icon: <Building2 className="h-8 w-8 text-gold" />,
    },
    {
      title: "Diritto di famiglia e successioni",
      description:
        "Assistenza e consulenza in ambito familiare, favorendo, ove possibile, la composizione amichevole",
      icon: <BookOpen className="h-8 w-8 text-gold" />,
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
    },
    {
      title: "Diritto bancario",
      description:
        "Assistenza in operazioni bancarie, contrattualistica specializzata.",
      icon: <Landmark className="h-8 w-8 text-gold" />,
    }
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
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
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
            Aree di attività
          </motion.h2>
          <motion.div variants={itemVariants} className="decorative-line mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-1"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="service-card bg-white p-4"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <div className="mr-4 flex-shrink-0">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-primary leading-none tracking-tight">{service.title}</h3>
                    </div>
                    <div className="w-12 h-0.5 bg-gold mb-2 ml-12"></div>
                    <p className="text-gray-600 text-sm leading-relaxed ml-12">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden shadow-xl rounded-lg">
                <Image
                  src="/images/about-clara.jpg"
                  alt="Clara Falomo - Avvocato"
                  fill
                  className="object-cover object-top rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 border-4 border-white shadow-lg -z-10 translate-x-3 translate-y-3 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection