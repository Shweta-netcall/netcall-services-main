"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { LoadingAnimation } from "@/components/loading-animation"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // This will be triggered when the loading animation is complete
    const handleAnimationComplete = () => {
      setIsLoading(false)
    }

    // Listen for a custom event from the LoadingAnimation component
    window.addEventListener("loadingComplete", handleAnimationComplete)

    return () => {
      window.removeEventListener("loadingComplete", handleAnimationComplete)
    }
  }, [])

  return (
    <>
      <LoadingAnimation />
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  )
}
