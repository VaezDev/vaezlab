'use client'
import FadeIn from './FadeIn'
import { motion } from 'framer-motion'

const problems = [
  { stat:'3s', label:'PARA PERDER UN CLIENTE', title:'Webs lentas que frustran a los usuarios', desc:'Los usuarios abandonan páginas que tardan más de 3 segundos. Cada segundo cuenta.' },
  { stat:'75%', label:'JUZGAN POR EL DISEÑO', title:'Diseño poco profesional que no genera confianza', desc:'El 75% de los usuarios juzgan la credibilidad de un negocio por su web.' },
  { stat:'60%', label:'DEL TRÁFICO ES MÓVIL', title:'Difíciles de usar en dispositivos móviles', desc:'Más del 60% del tráfico web viene de móviles. Si no es responsive, pierdes clientes.' },
  { stat:'0',   label:'CLIENTES CONVERTIDOS',  title:'No están pensadas para generar clientes', desc:'Una web sin estrategia de conversión es una web que no vende, solo ocupa espacio.' },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] uppercase text-red-400 bg-red-500/10 border border-red-500/22 px-4 py-1.5 rounded-full mb-5">
            <span>⚠</span> El problema
          </div>
          <h2 className="text-[clamp(26px,5vw,52px)] font-black tracking-tight leading-tight mb-4">
            Tu web debería traerte<br/>clientes. <span className="gradient-text">¿Lo hace?</span>
          </h2>
          <p className="text-zinc-400 font-light text-[15px] max-w-md mx-auto leading-relaxed">
            La mayoría de webs no están diseñadas para vender. Estos son los errores que le cuestan clientes a tu negocio cada día.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((p,i) => (
            <FadeIn key={p.title} delay={i*.09}>
              <motion.div
                whileHover={{borderColor:'rgba(239,68,68,.35)', y:-3}}
                transition={{duration:.25}}
                className="bg-[#0F0F1A] border border-[#1A1A2E] rounded-2xl p-6 h-full"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-red-500/12 border border-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[15px] mb-1.5 leading-snug">{p.title}</h3>
                    <p className="text-zinc-400 text-[13px] font-light leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#1A1A2E] flex items-center gap-3">
                  <span className="text-[28px] font-black text-red-400 leading-none">{p.stat}</span>
                  <span className="text-[10px] font-semibold tracking-[2px] uppercase text-zinc-600">{p.label}</span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
