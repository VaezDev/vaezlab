'use client'
import FadeIn from './FadeIn'
import { motion } from 'framer-motion'

const types = [
  { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title:'Web Corporativa', desc:'Presencia profesional para tu empresa con diseño a medida y SEO.', color:'purple' },
  { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, title:'Landing Page', desc:'Página diseñada para convertir tráfico en clientes o leads.', color:'cyan' },
  { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>, title:'Tienda Online', desc:'E-commerce completo para vender tus productos en internet.', color:'purple' },
  { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, title:'Portfolio', desc:'Muestra tu trabajo de forma visual e impactante.', color:'cyan' },
  { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title:'Automatización IA', desc:'Flujos automáticos para procesos de tu negocio con n8n e IA.', color:'purple' },
  { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>, title:'Proyecto a Medida', desc:'¿Tienes algo diferente en mente? Lo analizamos y te cotizamos.', color:'cyan' },
]

export default function Quote() {
  const go = href => document.querySelector(href)?.scrollIntoView({behavior:'smooth'})

  return (
    <section id="quote" className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] uppercase text-purpleG bg-purple-500/10 border border-purple-500/25 px-4 py-1.5 rounded-full mb-5">
            <span>◈</span> Cotización
          </div>
          <h2 className="text-[clamp(28px,5.5vw,54px)] font-black tracking-tight leading-tight mb-4">
            Precio justo para<br/><span className="gradient-text">tu proyecto</span>
          </h2>
          <p className="text-zinc-400 font-light text-[15px] max-w-md mx-auto leading-relaxed">
            Cada proyecto es diferente. Cotizamos según lo que realmente necesitas — sin paquetes genéricos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {types.map((t,i) => (
            <FadeIn key={t.title} delay={i*.08}>
              <motion.div
                whileHover={{borderColor: t.color==='purple' ? 'rgba(124,58,237,.5)':'rgba(6,182,212,.5)', y:-3}}
                transition={{duration:.22}}
                className="bg-[#0F0F1A] border border-[#1A1A2E] rounded-2xl p-6 flex flex-col gap-3 h-full"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  t.color==='purple'
                    ? 'bg-purple-500/12 border border-purple-500/25 text-purpleL'
                    : 'bg-cyan-500/12 border border-cyan-500/25 text-cyanL'
                }`}>{t.icon}</div>
                <h3 className="font-bold text-[16px]">{t.title}</h3>
                <p className="text-zinc-400 text-[13px] font-light leading-relaxed flex-1">{t.desc}</p>
                <a href="#contact" onClick={e=>{e.preventDefault();go('#contact')}}
                  className={`text-[11px] font-bold tracking-[1.5px] uppercase transition-colors mt-1 ${
                    t.color==='purple' ? 'text-purpleL hover:text-purpleG':'text-cyanL hover:text-cyan-200'
                  }`}>
                  COTIZAR →
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={.5}>
          <div className="flex items-center justify-center gap-3 bg-purple-500/8 border border-purple-500/20 rounded-2xl py-4 px-6">
            <svg className="text-purpleL flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p className="text-sm text-zinc-400 font-light">
              <strong className="text-white font-semibold">Consulta gratuita</strong> · Sin compromiso · Propuesta personalizada en menos de 24 horas
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
