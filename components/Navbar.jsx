'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Servicios',      href: '#services'   },
  { label: 'Portafolio',     href: '#portfolio'  },
  { label: 'Proceso',        href: '#process'    },
  { label: 'Automatización', href: '#automation' },
  { label: 'Contacto',       href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 transition-all duration-300 ${
          scrolled ? 'py-3 bg-[#08080F]/92 backdrop-blur-2xl border-b border-[#1A1A2E]' : 'py-5'
        }`}
      >
        <a href="#hero" onClick={e=>{e.preventDefault();go('#hero')}} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-grad-purple flex items-center justify-center text-[12px] font-black text-white tracking-wider bg-purple-700">VL</div>
          <div className="text-[11px] font-bold leading-tight tracking-[2px]">
            <span className="text-purpleL">VAEZ</span><br/>LAB
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={e=>{e.preventDefault();go(l.href)}}
              className="text-[13px] text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
              {l.label}
            </a>
          ))}
        </div>

        <motion.a
          href="#contact" onClick={e=>{e.preventDefault();go('#contact')}}
          whileHover={{ scale:1.04, boxShadow:'0 0 32px rgba(124,58,237,.5)' }}
          whileTap={{ scale:.97 }}
          className="hidden md:flex items-center gap-1.5 bg-purple-700 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full glow-purple transition-all"
        >
          Empezar proyecto →
        </motion.a>

        <button onClick={()=>setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-1">
          <motion.span animate={{rotate:open?45:0,y:open?6.5:0}} className="block w-5 h-[1.5px] bg-white origin-center"/>
          <motion.span animate={{opacity:open?0:1}} className="block w-5 h-[1.5px] bg-white"/>
          <motion.span animate={{rotate:open?-45:0,y:open?-6.5:0}} className="block w-5 h-[1.5px] bg-white origin-center"/>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            transition={{duration:.22}}
            className="fixed inset-0 z-40 bg-[#08080F] flex flex-col items-center justify-center gap-7"
          >
            {links.map((l,i) => (
              <motion.a key={l.label} href={l.href}
                onClick={e=>{e.preventDefault();go(l.href)}}
                initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
                transition={{delay:i*.07}}
                className="text-[clamp(28px,8vw,40px)] font-extrabold text-white hover:text-purpleL transition-colors tracking-tight"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact" onClick={e=>{e.preventDefault();go('#contact')}}
              initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
              transition={{delay:links.length*.07}}
              className="mt-4 bg-purple-700 text-white text-sm font-bold px-8 py-3.5 rounded-full"
            >
              Empezar proyecto →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
