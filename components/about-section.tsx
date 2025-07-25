"use client"

import { useRef } from "react"
import { motion, useInView, easeOut } from "framer-motion"
import { Scale, Users, Award, Clock } from "lucide-react"
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
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  const stats = [
    { icon: Scale, number: "20+", label: "Anni di Esperienza" },
    { icon: Users, number: "500+", label: "Clienti Assistiti" },
    { icon: Award, number: "8", label: "Certificazioni" },
    { icon: Clock, number: "24/7", label: "Supporto Disponibile" },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Titolo */}
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

        {/* Griglia immagini + testo */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 max-w-6xl mx-auto w-full">
          {/* Immagini Slider */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="order-2 lg:order-1 flex flex-col items-start w-full max-w-[265px]"
            >
              <ImageSlider
                images={[
                  { src: "/images/about-clara.jpg", alt: "Clara Falomo con toga" },
                  { src: "/images/working-clara.jpg", alt: "Clara Falomo nel suo studio" },
                ]}
                interval={3000}
              />
            </motion.div>

          {/* Testo */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2 w-full"
          >
            <motion.p variants={itemVariants} className="text-body mb-6 text-lg lg:text-xl leading-relaxed">
              Diplomata al Liceo Scientifico "Michelangelo Grigoletti" di Pordenone, laureata in Giurisprudenza
              all'Università di Padova con tesi intitolata: "Nuova disciplina dei contratti di lavoro a termine",
              relatore Prof. Giuseppe Suppiej; conseguo quindi l'abilitazione alla professione forense presso la
              Corte d'Appello di Trieste. Laureata in Banca e Finanza all'Università di Udine con tesi dal titolo:
              "Composizione negoziata della crisi di impresa", relatore Prof. Enrico Fioravante Geretto, ottengo
              quindi presso l'Università di Padova un Master di II Livello in Giurista Internazionale di impresa
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

            {/* Lista punti */}
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

        {/* Statistiche */}
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

// 🟣 COMPONENTE SINGOLA IMMAGINE – SCALATA al 60%
type ImageCardProps = {
  src: string
  alt: string
}

const ImageCard = ({ src, alt }: ImageCardProps) => (
  <div className="relative w-full max-w-none lg:max-w-[265px]">
    <div className="aspect-[4/5] relative overflow-hidden shadow-xl rounded-lg w-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top rounded-lg"
        sizes="90vw"
        priority
      />
    </div>
    <div className="absolute inset-0 border-4 border-white shadow-lg -z-10 translate-x-3 translate-y-3 rounded-lg" />
  </div>
)

// 🟣 COMPONENTE SLIDER IMMAGINI
type ImageSliderProps = {
  images: { src: string; alt: string }[]
  interval?: number
}

import { useState, useEffect } from "react"

const ImageSlider = ({ images, interval = 3000 }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="w-full">
      <ImageCard src={images[current].src} alt={images[current].alt} />
      <div className="flex mt-2 space-x-2 justify-center">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? "bg-gold" : "bg-gray-300"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Vai all'immagine ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  )
}

export default AboutSection