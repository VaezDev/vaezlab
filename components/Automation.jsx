'use client'
import FadeIn from './FadeIn'
import { motion } from 'framer-motion'

const automations = [
  { title:'WhatsApp Business Automático', desc:'Respuestas automáticas, seguimiento de clientes y notificaciones de pedidos sin intervención manual.', tag:'WhatsApp + n8n' },
  { title:'Informes y Dashboards con IA', desc:'Genera informes mensuales automáticos de ventas, gastos y métricas clave en Excel o Google Sheets.', tag:'Excel + AI' },
  { title:'Flujos de captación de leads', desc:'Automatiza el seguimiento de formularios, correos y CRM para que ningún cliente potencial se pierda.', tag:'n8n + Email' },
  { title:'Integración con sistemas existentes', desc:'Conectamos tu web con tu sistema de gestión, facturación, o cualquier herramienta que ya uses.', tag:'API + Webhooks' },
]

export default function Automation() {
  const go = href => document.querySelector(href)?.scrollIntoView({behavior:'smooth'})

  return (
    <section id="automation" className="py-24 px-5 bg-[#0C0C15]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] uppercase text-cyanL bg-cyan-500/10 border border-cyan-500/22 px-4 py-1.5 rounded-full mb-6">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              Servicio adicional
            </div>
            <h2 className="text-[clamp(28px,5vw,52px)] font-black tracking-tight leading-tight mb-5">
              Automatizaciones<br/><span className="gradient-text-warm">con IA</span><br/>para tu negocio
            </h2>
            <p className="text-zinc-400 font-light text-[15px] leading-relaxed mb-8">
              Más allá de la web, automatizamos los procesos que te consumen tiempo usando inteligencia artificial y herramientas como n8n, WhatsApp Business y Google Sheets.
            </p>
            <motion.a
              href="#contact" onClick={e=>{e.preventDefault();go('#contact')}}
              whileHover={{scale:1.04, boxShadow:'0 0 40px rgba(6,182,212,.4)'}}
              whileTap={{scale:.97}}
              className="inline-flex items-center gap-2 bg-cyan-600 text-white text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-[0_0_24px_rgba(6,182,212,.3)]"
            >
              Quiero automatizar →
            </motion.a>
          </FadeIn>

          {/* Right — automation cards */}
          <div className="flex flex-col gap-4">
            {automations.map((a,i) => (
              <FadeIn key={a.title} delay={i*.1}>
                <motion.div
                  whileHover={{borderColor:'rgba(6,182,212,.4)', x:4}}
                  transition={{duration:.22}}
                  className="bg-[#0F0F1A] border border-[#1A1A2E] rounded-2xl p-5"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-[15px] leading-snug">{a.title}</h3>
                    <span className="flex-shrink-0 text-[10px] font-bold tracking-[1px] uppercase text-cyanL border border-cyan-500/22 px-2.5 py-1 rounded-md whitespace-nowrap">{a.tag}</span>
                  </div>
                  <p className="text-zinc-400 text-[13px] font-light leading-relaxed">{a.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
