"use client"
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

export default function HoverButton({ href, children, className = '', as = 'a', ...props }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.a

  if (reduce) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <MotionTag
      href={href}
      className={className}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        willChange: 'transform',
      }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
