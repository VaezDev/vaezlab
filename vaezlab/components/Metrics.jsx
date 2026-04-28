'use client'
import FadeIn from './FadeIn'
import { motion } from 'framer-motion'

const metrics = [
  { icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, num:'<1s', name:'TIEMPO DE CARGA', desc:'Webs ultrarrápidas', color:'purple' },
  { icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, num:'100%', name:'RESPONSIVE', desc:'Perfecto en móvil', color:'cyan' },
  { icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, num:'SEO', name:'OPTIMIZADO', desc:'Preparado para Google', color:'purple' },
  { icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, num:'+95', name:'LIGHTHOUSE', desc:'Máximo rendimiento', color:'cyan' },
]

export default function Metrics() {
  return (
    <section className="py-24 px-5 bg-[#0C0C15]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-14">
          <h2 className="text-[clamp(26px,5vw,52px)] font-black tracking-tight leading-tight">
            Webs diseñadas para<br/><span className="gradient-text">rendimiento real</span>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m,i) => (
            <FadeIn key={m.name} delay={i*.1}>
              <motion.div
                whileHover={{borderColor: m.color==='purple' ? 'rgba(124,58,237,.45)':'rgba(6,182,212,.45)', y:-3}}
                transition={{duration:.25}}
                className="bg-[#0F0F1A] border border-[#1A1A2E] rounded-2xl p-6 text-center"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  m.color==='purple'
                    ? 'bg-purple-500/12 border border-purple-500/25 text-purpleL'
                    : 'bg-cyan-500/12 border border-cyan-500/25 text-cyanL'
                }`}>{m.icon}</div>
                <div className="text-[2.2rem] font-black leading-none mb-1">{m.num}</div>
                <div className={`text-[10px] font-bold tracking-[2px] uppercase mb-1 ${
                  m.color==='purple' ? 'text-purpleL':'text-cyanL'
                }`}>{m.name}</div>
                <div className="text-[12px] text-zinc-500 font-light">{m.desc}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
