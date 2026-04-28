'use client'
import FadeIn from './FadeIn'
import { motion } from 'framer-motion'

const steps = [
  { num:'01', icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>, title:'Idea', desc:'Nos cuentas tu idea y analizamos tu negocio, competencia y cliente ideal.' },
  { num:'02', icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, title:'Diseño', desc:'Creamos el diseño visual completo. Tú apruebas cada detalle antes de programar.' },
  { num:'03', icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, title:'Desarrollo', desc:'Programamos tu web con Next.js y las mejores tecnologías del mercado.' },
  { num:'04', icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title:'Lanzamiento', desc:'Publicamos tu web, la optimizamos para SEO y te entregamos el código completo.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] uppercase text-purpleG bg-purple-500/10 border border-purple-500/25 px-4 py-1.5 rounded-full mb-5">
            <span>⊙</span> Metodología
          </div>
          <h2 className="text-[clamp(28px,5.5vw,54px)] font-black tracking-tight leading-tight mb-4">
            Cómo lo hacemos <span className="gradient-text">posible</span>
          </h2>
          <p className="text-zinc-400 font-light text-[15px] max-w-md leading-relaxed">
            Un marco de trabajo probado para desarrollar webs de alto rendimiento en el menor tiempo posible.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s,i) => (
            <FadeIn key={s.title} delay={i*.1}>
              <motion.div
                whileHover={{borderColor:'rgba(124,58,237,.45)', y:-4}}
                transition={{duration:.25}}
                className="bg-[#0F0F1A] border border-[#1A1A2E] rounded-2xl p-6 text-center relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-[10px] font-black text-white">{s.num}</div>
                <div className="w-16 h-16 rounded-2xl bg-purple-500/12 border border-purple-500/25 text-purpleL flex items-center justify-center mx-auto mt-3 mb-5">
                  {s.icon}
                </div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-[13px] font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Approach block */}
        <FadeIn delay={.4} className="mt-8">
          <div className="bg-[#0F0F1A] border border-[#1A1A2E] rounded-2xl p-8">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] uppercase text-purpleG bg-purple-500/10 border border-purple-500/25 px-3 py-1.5 rounded-full mb-6">
              <span>◎</span> Nuestro enfoque
            </div>
            <h3 className="text-2xl font-black tracking-tight mb-6">
              Una web que <span className="gradient-text">trabaja por ti</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title:'Analizamos tu competencia', desc:'Estudiamos qué están haciendo bien tus competidores y lo mejoramos — llegas al mercado con ventaja.' },
                { title:'Comunicación directa', desc:'Sin intermediarios. Primer prototipo en 48h y tú decides cada detalle en tiempo real.' },
                { title:'Tu código, tu propiedad', desc:'Al finalizar, te entregamos el código fuente completo. Tu web es 100% tuya, sin dependencias.' },
              ].map((item,i) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/12 border border-purple-500/25 text-purpleL flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-1">{item.title}</h4>
                    <p className="text-zinc-400 text-[13px] font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
