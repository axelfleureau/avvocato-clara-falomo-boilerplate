"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from "lucide-react"

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

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

  const formVariants = {
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

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="contact" ref={ref} className="section-padding bg-pearl-gray">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-gold uppercase tracking-widest text-sm font-medium">
            Contatti
          </motion.span>
          <motion.h2 variants={itemVariants} className="heading-lg text-primary mt-3">
            Parliamo del tuo caso
          </motion.h2>
          <motion.div variants={itemVariants} className="decorative-line mx-auto" />
          <motion.p variants={itemVariants} className="text-body">
            Sono a disposizione per consulenze, collaborazioni o per rispondere alle tue domande. Compila il modulo o
            utilizza i contatti diretti.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3 bg-white p-12 shadow-md"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="heading-md text-primary mb-2">Messaggio Inviato!</h3>
                <p className="text-gray-600 text-center">
                  Grazie per avermi contattato. Risponderò al più presto alla tua richiesta.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider">
                      Nome e Cognome
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Inserisci il tuo nome"
                      className="w-full form-input bg-transparent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="La tua email"
                      className="w-full form-input bg-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium uppercase tracking-wider">
                    Oggetto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Oggetto del messaggio"
                    className="w-full form-input bg-transparent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Scrivi il tuo messaggio..."
                    rows={6}
                    className="w-full form-input bg-transparent"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Invio in corso...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Invia messaggio
                    </span>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            variants={contactInfoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="bg-primary text-white p-12 shadow-md h-full">
              <h3 className="heading-md mb-6">Informazioni di contatto</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-4 text-gold" />
                  <p>Pordenone, Italia</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-4 text-gold" />
                  <a href="tel:+393498057326" className="hover:underline">
                    +39 349 805 7326
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-4 text-gold" />
                  <a href="mailto:info@avvocatoclarafalomo.it" className="hover:underline">
                    info@avvocatoclarafalomo.it
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-4 text-gold" />
                  <a
                    href="https://www.linkedin.com/in/clara-falomo-41a76a224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
