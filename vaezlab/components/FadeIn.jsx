'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FadeIn({ children, delay = 0, y = 28, className = '' }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
