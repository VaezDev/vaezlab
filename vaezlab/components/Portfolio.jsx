'use client'
import FadeIn from './FadeIn'
import { motion } from 'framer-motion'

const projects = [
  { title:'Distribuidora López', type:'Web Corporativa', color:'from-purple-900/40 to-purple-700/20', accent:'#A855F7',
    lines:['#1A1A2E','#242438','#1A1A2E','#2A1A3E','#1A1A2E','#242438'] },
  { title:'Panadería Artesanal', type:'Landing Page', color:'from-cyan-900/40 to-cyan-700/20', accent:'#06B6D4',
    lines:['#1A1A2E','#1A2E2E','#1A1A2E','#1A2E2E','#242438','#1A1A2E'] },
  { title:'Fashion Store', type:'E-Commerce', color:'from-pink-900/40 to-purple-900/30', accent:'#EC4899',
    lines:['#1A1A2E','#2E1A2E','#1A1A2E','#2E1A2E','#1A1A2E','#242438'] },
  { title:'Diego Ramírez', type:'Portfolio Personal', color:'from-indigo-900/40 to-purple-900/30', accent:'#818CF8',
    lines:['#1A1A2E','#1A1A2E','#242438','#1A2030','#1A1A2E','#242438'] },
]

function BrowserMockup({ project }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#1A1A2E] bg-[#0F0F1A]">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0C0C15] border-b border-[#1A1A2E]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"/>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"/>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"/>
        <div className="flex-1 mx-3 bg-[#1A1A2E] rounded-full h-5 flex items-center px-3">
          <span className="text-[10px] text-zinc-600 font-mono">vaezlab.com/{project.title.toLowerCase().replace(/ /g,'-')}</span>
        </div>
      </div>
      {/* Content mockup */}
      <div className={`h-40 bg-gradient-to-br ${project.color} p-5 flex flex-col gap-3`}>
        <div className="h-3 rounded-full w-2/3" style={{background:project.accent+'40'}}/>
        <div className="h-2 rounded-full w-full bg-[#1A1A2E]"/>
        <div className="h-2 rounded-full w-5/6 bg-[#1A1A2E]"/>
        <div className="flex gap-2 mt-1">
          <div className="h-7 w-24 rounded-lg" style={{background:project.accent+'60'}}/>
          <div className="h-7 w-20 rounded-lg bg-[#1A1A2E]"/>
        </div>
        <div className="flex gap-2 mt-auto">
          {project.lines.map((c,i)=>(
            <div key={i} className="flex-1 h-16 rounded-lg" style={{background:c}}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const go = href => document.querySelector(href)?.scrollIntoView({behavior:'smooth'})
  return (
    <section id="portfolio" className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] uppercase text-purpleG bg-purple-500/10 border border-purple-500/25 px-4 py-1.5 rounded-full mb-5">
            <span>◎</span> Portafolio
          </div>
          <h2 className="text-[clamp(28px,5.5vw,54px)] font-black tracking-tight leading-tight mb-4">
            Proyectos diseñados<br/>para <span className="gradient-text">resultados reales</span>
          </h2>
          <p className="text-zinc-400 font-light text-[15px] max-w-md leading-relaxed">
            Cada proyecto es único, construido desde cero para el negocio específico y sus objetivos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p,i) => (
            <FadeIn key={p.title} delay={i*.1}>
              <motion.div
                whileHover={{y:-4, borderColor:'rgba(124,58,237,.4)'}}
                transition={{duration:.25}}
                className="bg-[#0F0F1A] border border-[#1A1A2E] rounded-2xl overflow-hidden group"
              >
                <BrowserMockup project={p}/>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[15px]">{p.title}</h3>
                    <span className="text-[11px] text-zinc-500 font-medium tracking-[1px] uppercase">{p.type}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#1A1A2E] flex items-center justify-center text-zinc-600 group-hover:border-purpleL group-hover:text-purpleL transition-all">
                    →
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={.3} className="mt-8 text-center">
          <p className="text-zinc-500 text-sm mb-4">¿Quieres ver cómo quedaría tu proyecto?</p>
          <motion.a
            href="#contact" onClick={e=>{e.preventDefault();go('#contact')}}
            whileHover={{scale:1.04, boxShadow:'0 0 40px rgba(124,58,237,.45)'}}
            whileTap={{scale:.97}}
            className="inline-flex items-center gap-2 bg-purple-700 text-white text-sm font-bold px-7 py-3.5 rounded-full glow-purple transition-all"
          >
            Solicitar demo gratuita →
          </motion.a>
        </FadeIn>
      </div>
    </section>
  )
}
