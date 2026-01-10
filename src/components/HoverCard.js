"use client"
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

export default function HoverCard({ children, className = '', lift = 8, hoverShadow = '0 30px 70px rgba(6,6,20,0.5)', ...props }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.56, ease: 'easeOut' }}
      whileHover={{ y: -lift, boxShadow: hoverShadow }}
      whileTap={{ scale: 0.995 }}
      style={{ willChange: 'transform, box-shadow' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
