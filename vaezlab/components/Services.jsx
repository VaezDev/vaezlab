'use client'
import FadeIn from './FadeIn'
import { motion } from 'framer-motion'

const services = [
  {
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
    color:'purple', title:'Sitios Web Corporativos',
    desc:'Web profesional que representa tu marca y convierte visitantes en contactos. Diseño a medida, rápida y optimizada para SEO.',
    tags:['Diseño a medida','SEO','CMS'],
  },
  {
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    color:'cyan', title:'Landing Pages de Conversión',
    desc:'Páginas diseñadas con un solo objetivo: convertir. Ideal para campañas de publicidad, lanzamientos y captación de leads.',
    tags:['Conversión','A/B Testing','Ads'],
  },
  {
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
    color:'purple', title:'Tiendas Online (E-Commerce)',
    desc:'Desarrollamos tiendas online para vender tus productos en internet. Catálogo, carrito, pagos y gestión de pedidos.',
    tags:['Pagos online','Catálogo','Gestión'],
  },
  {
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    color:'cyan', title:'Portfolios Profesionales',
    desc:'Muestra tu trabajo de forma impactante. Diseño visual, animaciones fluidas y una experiencia que deja huella en cada visita.',
    tags:['Animaciones','Visual','Impacto'],
  },
]

export default function Services() {
  const go = href => document.querySelector(href)?.scrollIntoView({behavior:'smooth'})

  return (
    <section id="services" className="py-24 px-5 bg-[#0C0C15]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.5px] uppercase text-purpleG bg-purple-500/10 border border-purple-500/25 px-4 py-1.5 rounded-full mb-5">
            <span>◈</span> Servicios premium
          </div>
          <h2 className="text-[clamp(28px,5.5vw,54px)] font-black tracking-tight leading-tight mb-4">
            Webs que trabajan para<br/><span className="gradient-text">hacer crecer tu negocio</span>
          </h2>
          <p className="text-zinc-400 font-light text-[15px] max-w-md leading-relaxed">
            No solo creamos páginas bonitas. Construimos herramientas de crecimiento que atraen clientes y generan ingresos.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {services.map((s,i) => (
            <FadeIn key={s.title} delay={i*.08}>
              <motion.div
                whileHover={{borderColor: s.color==='purple' ? 'rgba(124,58,237,.5)':'rgba(6,182,212,.5)', x:4}}
                transition={{duration:.25}}
                className="bg-[#0F0F1A] border border-[#1A1A2E] rounded-2xl p-7 flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  s.color==='purple'
                    ? 'bg-purple-500/12 border border-purple-500/25 text-purpleL'
                    : 'bg-cyan-500/12 border border-cyan-500/25 text-cyanL'
                }`}>
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-[13px] font-light leading-relaxed mb-3">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t=>(
                      <span key={t} className={`text-[10px] font-semibold tracking-[1.5px] uppercase border px-2.5 py-1 rounded-md ${
                        s.color==='purple'
                          ? 'text-purpleG border-purple-500/20'
                          : 'text-cyanL border-cyan-500/20'
                      }`}>{t}</span>
                    ))}
                  </div>
                </div>
                <a href="#contact" onClick={e=>{e.preventDefault();go('#contact')}}
                  className={`flex-shrink-0 text-[11px] font-bold tracking-[1.5px] uppercase transition-colors ${
                    s.color==='purple' ? 'text-purpleL hover:text-purpleG':'text-cyanL hover:text-cyan-200'
                  }`}>
                  SABER MÁS →
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
