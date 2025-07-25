"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Scale, Users, Award, Clock } from "lucide-react"
import Image from "next/image"

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
        duration: 0.8,
        ease: "easeOut", // use a valid string for ease
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // use a valid string for ease
      },
    },
  }

  const stats = [
    {
      icon: Scale,
      number: "20+",
      label: "Anni di Esperienza",
    },
    {
      icon: Users,
      number: "500+",
      label: "Clienti Assistiti",
    },
    {
      icon: Award,
      number: "8",
      label: "Certificazioni",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Supporto Disponibile",
    },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span variants={itemVariants} className="subheading text-gold">
            Chi Sono
          </motion.span>
          <motion.h2 variants={itemVariants} className="heading-lg text-primary mt-3">
            Storia Professionale
          </motion.h2>
          <motion.div variants={itemVariants} className="decorative-line mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden shadow-xl">
                <Image
                  src="/images/about-clara.jpg"
                  alt="Avvocato Clara Falomo nel suo studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Decorative frame */}
              <div className="absolute inset-0 border-4 border-white shadow-lg -z-10 translate-x-4 translate-y-4"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            <motion.p variants={itemVariants} className="text-body mb-6">
              Diplomata al Liceo Scientifico "Michelangelo Grigoletti" di Pordenone, laureata in Giurisprudenza
              all'Università di Padova con tesi intitolata:  "Nuova disciplina dei contratti di lavoro a termine",
              relatore Prof. Giuseppe Suppiej; conseguo quindi l'abilitazione alla professione forense presso la
              Corte d'Appello di Trieste. Laureata in Banca e Finanza all'Università di Udine con tesi dal titolo:
              "Composizione negoziata della crisi di impresa", relatore Prof. Enrico Fioravante Geretto, ottengo
              quindi presso l'Università di Padova un Master di II Livello in Giurista Internazionale di impresaù
              con tesi sul "   Diritto di controllo del socio non amministratore di S.R.L.  ed esigenze di
              riservatezza della società" relatore Prof. Vincenzo Antonini. La formazione accademica
              multidisciplinare l'esperienza maturata in oltre due decenni di professione mi consentono di affrontare
              le moderne sfide legali con competenza e innovazione per ottenere soluzioni efficaci e personalizzate.
            </motion.p>

            <motion.p variants={itemVariants} className="text-body mb-6">
              Questa preparazione multidisciplinare mi consente di
              affrontare le sfide legali moderne con competenza e innovazione.
            </motion.p>

            <motion.p variants={itemVariants} className="text-body mb-8">
              Il mio approccio professionale si basa sull'ascolto attento delle esigenze del cliente, sull'analisi
              approfondita delle problematiche e sulla ricerca di soluzioni efficaci e personalizzate. Credo fermamente
              nell'importanza di un rapporto di fiducia e trasparenza con i miei assistiti.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold mr-4"></div>
                <span className="text-gray-700 font-medium">Opero prevalentemente nel settore del Diritto Civile e Commerciale </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold mr-4"></div>
                <span className="text-gray-700 font-medium">
                  Esperta in Composizione Negoziata della Crisi d'Impresa
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold mr-4"></div>
                <span className="text-gray-700 font-medium">Consulenza in Diritto Bancario e Finanziario</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                <stat.icon size={24} />
              </div>
              <div className="heading-sm text-primary mb-2">{stat.number}</div>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
