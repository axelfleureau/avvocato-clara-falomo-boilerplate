"use client"

import { useEffect, useState } from "react"

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = document.documentElement.scrollTop
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
}

export default ScrollProgressIndicator
