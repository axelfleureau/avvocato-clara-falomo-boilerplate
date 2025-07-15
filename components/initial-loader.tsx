"use client"

import { motion } from "framer-motion"

const InitialLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl font-cormorant font-light text-primary tracking-wide">
            AVV. CLARA FALOMO
          </h1>
        </motion.div>

        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-px bg-gold w-48 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-sm text-gray-500 uppercase tracking-widest"
        >
          Avvocato Civilista
        </motion.p>
      </div>
    </div>
  )
}

export default InitialLoader
