'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const fd = new FormData(e.target)
    if (!fd.get('nombre')?.trim() || !fd.get('email')?.trim()) return
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-5 bg-[#0C0C15]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] uppercase text-purpleG bg-purple-500/10 border border-purple-500/25 px-4 py-1.5 rounded-full mb-6">
              <span>✉</span> Contacto
            </div>
            <h2 className="text-[clamp(30px,5.5vw,56px)] font-black tracking-tight leading-tight mb-4">
              Hablemos de<br/>tu <span className="gradient-text">proyecto</span>
            </h2>
            <p className="text-zinc-400 font-light text-[15px] leading-relaxed mb-10">
              Cuéntanos qué necesitas y en menos de 24h tienes una propuesta personalizada sin compromiso.
            </p>

            <div className="flex flex-col gap-0">
              {[
                { label:'Email', val:'vaezdev@gmail.com', href:'mailto:vaezdev@gmail.com',
                  icon:<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                { label:'WhatsApp', val:'+57 318 268 5526', href:'https://wa.me/573182685526',
                  icon:<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.48 11.2a19.79 19.79 0 01-3.07-8.67A2 2 0 013.4 2.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> },
                { label:'LinkedIn', val:'linkedin.com/in/vaezlab', href:'https://linkedin.com/in/vaezlab',
                  icon:<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
              ].map(item => (
                <motion.a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ paddingLeft:'8px' }}
                  transition={{ duration:.2 }}
                  className="flex items-center gap-4 py-4 border-b border-[#1A1A2E] first:border-t group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/12 border border-purple-500/25 text-purpleL flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-[10px] font-semibold tracking-[1.5px] uppercase text-zinc-600 mb-0.5">{item.label}</div>
                    <div className="text-sm text-white group-hover:text-purpleL transition-colors">{item.val}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={.15}>
            {sent ? (
              <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}}
                className="bg-[#0F0F1A] border border-green-500/30 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
                <h3 className="font-bold text-lg mb-2">¡Mensaje enviado!</h3>
                <p className="text-zinc-400 text-sm font-light">Te contactaré en menos de 24 horas con una propuesta personalizada.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#0F0F1A] border border-[#1A1A2E] rounded-2xl p-7 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {[{name:'nombre',label:'Nombre *',placeholder:'Tu nombre',type:'text'},
                    {name:'email', label:'Email *', placeholder:'tu@email.com',type:'email'}].map(f=>(
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold tracking-[1.5px] uppercase text-zinc-600">{f.label}</label>
                      <input type={f.type} name={f.name} placeholder={f.placeholder} required={f.name!=='empresa'}
                        className="bg-[#08080F] border border-[#1A1A2E] text-white rounded-xl px-4 py-3 text-sm font-light placeholder-zinc-700 outline-none focus:border-purpleL focus:ring-2 focus:ring-purple-500/15 transition-all"/>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold tracking-[1.5px] uppercase text-zinc-600">Empresa</label>
                  <input type="text" name="empresa" placeholder="Nombre de tu empresa (opcional)"
                    className="bg-[#08080F] border border-[#1A1A2E] text-white rounded-xl px-4 py-3 text-sm font-light placeholder-zinc-700 outline-none focus:border-purpleL focus:ring-2 focus:ring-purple-500/15 transition-all"/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold tracking-[1.5px] uppercase text-zinc-600">Tipo de proyecto</label>
                  <select name="proyecto"
                    className="bg-[#08080F] border border-[#1A1A2E] text-white rounded-xl px-4 py-3 text-sm font-light outline-none focus:border-purpleL focus:ring-2 focus:ring-purple-500/15 transition-all appearance-none">
                    <option value="" disabled defaultValue>Selecciona una opción</option>
                    {['Web Corporativa','Landing Page','Tienda Online (E-Commerce)','Portfolio','Automatización con IA','Proyecto a medida'].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold tracking-[1.5px] uppercase text-zinc-600">Mensaje</label>
                  <textarea name="mensaje" rows={4} placeholder="Cuéntame sobre tu negocio y qué quieres conseguir..."
                    className="bg-[#08080F] border border-[#1A1A2E] text-white rounded-xl px-4 py-3 text-sm font-light placeholder-zinc-700 outline-none focus:border-purpleL focus:ring-2 focus:ring-purple-500/15 transition-all resize-none"/>
                </div>
                <motion.button type="submit"
                  whileHover={{scale:1.02, boxShadow:'0 0 40px rgba(124,58,237,.5)'}}
                  whileTap={{scale:.97}}
                  className="w-full bg-purple-700 text-white font-bold text-sm py-4 rounded-xl hover:bg-purple-500 transition-colors shadow-[0_0_24px_rgba(124,58,237,.35)]"
                >
                  Enviar mensaje →
                </motion.button>
                <p className="text-center text-[11px] text-zinc-600">Respuesta garantizada en menos de 24 horas.</p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
