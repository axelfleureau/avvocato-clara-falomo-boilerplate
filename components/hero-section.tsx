"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center hero-pattern relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.span variants={itemVariants} className="subheading text-gold block mb-4">
              Consulenza Legale Specializzata
            </motion.span>

            <motion.h1 variants={itemVariants} className="heading-xl text-primary mb-6">
              Avvocato
              <br />
              <span className="text-gold">Clara Falomo</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="decorative-line mx-auto lg:mx-0 mb-6" />

            <motion.p variants={itemVariants} className="text-body mb-8 max-w-lg mx-auto lg:mx-0">
              Esperienza consolidata nel diritto civile, commerciale e finanziario. Consulenza professionale per privati
              e aziende con un approccio personalizzato e orientato ai risultati.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >

              <Button asChild variant="outline" className="btn btn-outline bg-transparent">
                <a href="#about">Scopri di più</a>
              </Button>
            </motion.div>

            {/* Mobile scroll indicator */}
            <motion.button
              onClick={scrollToAbout}
              className="lg:hidden mt-8 mx-auto text-primary hover:text-gold transition-colors flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              aria-label="Scorri verso il basso"
            >
              <ChevronDown size={32} />
            </motion.button>

            {/* Mobile scroll indicator */}
            <motion.button
              onClick={scrollToAbout}
              className="lg:hidden mt-8 mx-auto text-primary hover:text-gold transition-colors flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              aria-label="Scorri verso il basso"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-clara.jpg"
                  alt="Avvocato Clara Falomo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-gold opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-gold transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        aria-label="Scorri verso il basso"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}

export default HeroSection
