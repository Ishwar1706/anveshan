"use client"
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

export default function MotionFadeUp({ children, className = '', delay = 0, scale = false }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const initial = scale ? { opacity: 0, y: 20, scale: 0.92 } : { opacity: 0, y: 20 }
  const animate = scale ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
