"use client"
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

export default function MotionContainer({ children, className = '' }) {
  const reduce = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? 'visible' : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={reduce ? {} : containerVariants}
    >
      {children}
    </motion.div>
  )
}
