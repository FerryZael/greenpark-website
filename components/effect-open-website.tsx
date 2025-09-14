"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Play, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AnimatedTextCycleProps {
  words: string[]
  interval?: number
  className?: string
}

function AnimatedTextCycle({ words, interval = 3000, className = "" }: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState("auto")
  const measureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children
      if (elements.length > currentIndex) {
        const newWidth = elements[currentIndex].getBoundingClientRect().width
        setWidth(`${newWidth}px`)
      }
    }
  }, [currentIndex])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, words.length])

  const containerVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      filter: "blur(8px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  return (
    <>
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={`font-bold ${className}`}>
            {word}
          </span>
        ))}
      </div>

      <motion.span
        className="relative inline-block"
        animate={{
          width,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 1.2,
          },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`inline-block font-bold ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

function FloatingElement({ children, delay = 0, duration = 3, className = "" }: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{
        y: [-10, 10, -10],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParticleProps {
  index: number
}

function Particle({ index }: ParticleProps) {
  const randomDelay = Math.random() * 2
  const randomDuration = 3 + Math.random() * 2
  const randomX = Math.random() * 100
  const randomY = Math.random() * 100

  return (
    <motion.div
      className="absolute w-1 h-1 bg-primary/30 rounded-full"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [-20, 20, -20],
      }}
      transition={{
        duration: randomDuration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: randomDelay,
      }}
    />
  )
}

function EffectOpenWebsite() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleOpenWebsite = () => {
    window.open("https://example.com", "_blank")
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Mouse Follower Effect */}
      <motion.div
        className="absolute pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 0.6 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-24 h-24 rounded-full bg-primary/20 blur-xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">
        {/* Floating Icons */}
        <FloatingElement delay={0} className="absolute top-20 left-10 text-primary/40">
          <Sparkles size={24} />
        </FloatingElement>

        <FloatingElement delay={1} className="absolute top-32 right-16 text-primary/30">
          <ExternalLink size={20} />
        </FloatingElement>

        <FloatingElement delay={0.5} className="absolute bottom-32 left-20 text-primary/35">
          <Play size={18} />
        </FloatingElement>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8"
          >
            <Sparkles size={16} />
            <span>Experience the magic</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Open your{" "}
            <AnimatedTextCycle
              words={["website", "portal", "universe", "experience", "journey"]}
              interval={2500}
              className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            />
            <br />
            to endless possibilities
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Discover a new dimension of web experiences with stunning animations, interactive elements, and seamless
            navigation that brings your vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={handleOpenWebsite}
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Open Website
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ExternalLink size={20} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-6 text-lg font-semibold rounded-full border-2 hover:bg-primary/5 transition-all duration-300 bg-transparent"
            >
              <span className="flex items-center gap-2">
                <Play size={20} />
                Watch Demo
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Interactive Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="mt-20 relative"
        >
          <div className="relative group cursor-pointer" onClick={handleOpenWebsite}>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-2xl backdrop-blur-sm bg-background/80 max-w-md mx-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 h-2 bg-muted rounded-full"></div>
              </div>

              <div className="space-y-3">
                <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
              </div>

              <motion.div
                className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-sm text-muted-foreground text-center"
        >
          Click anywhere to experience the magic ✨
        </motion.p>
      </div>
    </div>
  )
}

export default function EffectOpenWebsiteDemo() {
  return <EffectOpenWebsite />
}
