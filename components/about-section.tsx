"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Scale, Users, Award } from "lucide-react"
import Image from "next/image"

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: ["easeOut"] },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: ["easeOut"] },
    },
  }

  const stats = [
    { icon: Scale, number: "20+", label: "Anni di Esperienza" },
    { icon: Users, number: "200+", label: "Clienti Assistiti" },
    { icon: Award, number: "10", label: "Certificazioni" },
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden shadow-xl rounded-lg max-w-md mx-auto">
                <Image
                  src="/images/working-clara.jpg"
                  alt="Clara Falomo nel suo studio"
                  fill
                  className="object-cover object-top rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 border-4 border-white shadow-lg -z-10 translate-x-3 translate-y-3 rounded-lg" />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            <motion.p variants={itemVariants} className="text-body mb-6 text-lg lg:text-xl leading-relaxed">
              Diplomata al Liceo Scientifico "Michelangelo Grigoletti" di Pordenone, laureata in Giurisprudenza
              all'Università di Padova con tesi intitolata: "Nuova disciplina dei contratti di lavoro a termine",
              relatore Prof. Giuseppe Suppiej; conseguo quindi l'abilitazione alla professione forense presso la
              Corte d'Appello di Trieste. Laureata in Banca e Finanza all'Università di Udine con tesi dal titolo:
              "Composizione negoziata della crisi di impresa", relatore Prof. Enrico Fioravante Geretto, ottengo
              presso l'Università di Padova un Master di II Livello in Giurista Internazionale di impresa
              con tesi sul "Diritto di controllo del socio non amministratore di S.R.L. ed esigenze di
              riservatezza della società" relatore Prof. Vincenzo Antonini.
            </motion.p>

            <motion.p variants={itemVariants} className="text-body mb-6 text-lg lg:text-xl leading-relaxed">
              Questa preparazione multidisciplinare mi consente di
              affrontare le sfide legali moderne con competenza e innovazione.
            </motion.p>

            <motion.p variants={itemVariants} className="text-body mb-8 text-lg lg:text-xl leading-relaxed">
              Il mio approccio professionale si basa sull'ascolto attento delle esigenze del cliente, sull'analisi
              approfondita delle problematiche e sulla ricerca di soluzioni efficaci e personalizzate. Credo fermamente
              nell'importanza di un rapporto di fiducia e trasparenza con i miei assistiti.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                "Opero prevalentemente nel settore del Diritto Civile e Commerciale",
                "Esperta in Composizione Negoziata della Crisi d'Impresa",
                "Consulenza in Diritto Bancario e Finanziario",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-2 h-2 bg-gold mr-4"></div>
                  <span className="text-gray-700 font-medium text-base lg:text-lg">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-3 gap-8"
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