'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function WaveCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize(); window.addEventListener('resize', resize)
    const waves = [
      {y:.55,amp:85, freq:.0016,spd:.0006,c:'rgba(124,58,237,.22)',lw:1.5},
      {y:.60,amp:65, freq:.0020,spd:.0009,c:'rgba(168,85,247,.13)',lw:1  },
      {y:.48,amp:105,freq:.0012,spd:.0004,c:'rgba(6,182,212,.11)', lw:1  },
      {y:.65,amp:45, freq:.0024,spd:.0011,c:'rgba(124,58,237,.07)',lw:.5 },
    ]
    let t = 0
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      const g = ctx.createRadialGradient(canvas.width*.5,canvas.height*.38,0,canvas.width*.5,canvas.height*.38,canvas.width*.7)
      g.addColorStop(0,'rgba(124,58,237,.08)'); g.addColorStop(1,'rgba(8,8,15,0)')
      ctx.fillStyle=g; ctx.fillRect(0,0,canvas.width,canvas.height)
      waves.forEach(w=>{
        ctx.beginPath(); ctx.strokeStyle=w.c; ctx.lineWidth=w.lw
        for(let x=0;x<=canvas.width;x+=2){
          const y=canvas.height*w.y+Math.sin(x*w.freq+t/w.spd*.001+w.y*10)*w.amp+Math.sin(x*w.freq*2+t/w.spd*.0007)*(w.amp*.35)
          x===0?ctx.moveTo(x,y):ctx.lineTo(x,y)
        }
        ctx.stroke()
      })
      t++; raf=requestAnimationFrame(draw)
    }
    draw()
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize',resize) }
  },[])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full"/>
}

const stagger = { hidden:{}, show:{ transition:{ staggerChildren:.1, delayChildren:.35 } } }
const item    = { hidden:{opacity:0,y:30}, show:{opacity:1,y:0,transition:{duration:.8,ease:[0.16,1,0.3,1]}} }

export default function Hero() {
  const go = href => document.querySelector(href)?.scrollIntoView({behavior:'smooth'})

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-20 text-center">
      <WaveCanvas/>
      {/* noise */}
      <div className="absolute inset-0 opacity-[0.025] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')] bg-[length:180px]"/>

      <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 max-w-2xl w-full">
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[2px] uppercase text-zinc-500 border border-[#1A1A2E] px-4 py-2 rounded-full mb-8">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Agencia de Desarrollo Web
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={item} className="text-[clamp(38px,10vw,88px)] font-black leading-[1.0] tracking-[-3px] mb-6">
          Construimos la web<br/>que tu negocio<br/><span className="gradient-text">necesita</span>
        </motion.h1>

        {/* Sub */}
        <motion.p variants={item} className="text-[15px] md:text-base font-light text-zinc-400 leading-relaxed max-w-lg mx-auto mb-10">
          Webs modernas, rápidas y diseñadas para convertir visitantes en clientes desde el primer día.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <motion.a href="#contact" onClick={e=>{e.preventDefault();go('#contact')}}
            whileHover={{scale:1.05,boxShadow:'0 0 56px rgba(124,58,237,.6)'}}
            whileTap={{scale:.97}}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-700 text-white text-sm font-bold px-8 py-4 rounded-full glow-purple transition-all"
          >
            Empezar proyecto →
          </motion.a>
          <motion.a href="#portfolio" onClick={e=>{e.preventDefault();go('#portfolio')}}
            whileHover={{scale:1.04}}
            whileTap={{scale:.97}}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#1A1A2E] text-sm font-medium px-8 py-4 rounded-full hover:border-purple-500 hover:bg-purple-500/8 transition-all"
          >
            Ver proyectos reales
          </motion.a>
        </motion.div>

        {/* Pills */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-3">
          {[
            {dot:'bg-green-400', text:'Disponibles ahora'},
            {dot:'bg-purple-400',text:'Asesoría gratuita'},
            {dot:'bg-cyan-400',  text:'Entrega rápida'},
          ].map(p=>(
            <div key={p.text} className="flex items-center gap-2 text-[12px] text-zinc-500 border border-[#1A1A2E] px-4 py-2 rounded-full">
              <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`}/>
              {p.text}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="relative w-px h-12 bg-[#1A1A2E] overflow-hidden">
          <div className="scroll-thumb-anim absolute left-0 w-full h-[40%] bg-purple-400"/>
        </div>
        <span className="text-[9px] tracking-[3px] uppercase text-zinc-600">scroll</span>
      </motion.div>
    </section>
  )
}
