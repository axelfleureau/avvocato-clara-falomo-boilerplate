"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type ImageSliderProps = {
  images: { src: string; alt: string }[]
  interval?: number
}

const ImageSlider = ({ images, interval = 3000 }: ImageSliderProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-xl">
      <AnimatePresence>
        <motion.div
          key={images[index].src}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ImageSlider