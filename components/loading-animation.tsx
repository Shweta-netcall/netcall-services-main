"use client"

import { useEffect, useState, useCallback } from "react"
import { useMotionValue, animate, motion } from "framer-motion"
import { GoogleGeminiEffect } from "./google-gemini-effect"

export function LoadingAnimation() {
  const pathLengths = [
    useMotionValue(0), 
    useMotionValue(0), 
    useMotionValue(0), 
    useMotionValue(0), 
    useMotionValue(0)
  ]

  const [animationComplete, setAnimationComplete] = useState(false)

  const startAnimation = useCallback(() => {
    const animations = pathLengths.map((pathLength, i) => {
      return animate(pathLength, 1, {
        duration: 2.5,
        delay: i * 0.3,
        ease: "easeInOut",
        onComplete: () => {
          if (i === pathLengths.length - 1) {
            setTimeout(() => {
              setAnimationComplete(true)
              // Dispatch a custom event when the animation is complete
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event("loadingComplete"))
              }
            }, 500)
          }
        },
      })
    })

    return animations
  }, [pathLengths])

  useEffect(() => {
    const animations = startAnimation()

    return () => {
      animations.forEach((animation) => animation.stop())
    }
  }, [startAnimation])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      animate={{
        opacity: animationComplete ? 0 : 1,
        pointerEvents: animationComplete ? "none" : "auto",
      }}
      transition={{ duration: 0.5 }}
      style={{
        display: animationComplete ? 'none' : 'flex'
      }}
    >
      <GoogleGeminiEffect 
        pathLengths={pathLengths} 
        title="Netcall Services" 
        description="Technology Begins Here" 
      />
    </motion.div>
  )
}