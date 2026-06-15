'use client'
import FadeIn from './FadeIn'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Innovare JM',
    type: 'Plataforma Vacacional',
    color: 'from-blue-900/40 to-sky-800/20',
    accent: '#38BDF8',
    url: 'https://www.innovarejm.com/',
    techs: [
      { name: 'React',        bg: '#20232A', text: '#61DAFB' },
      { name: 'Tailwind CSS', bg: '#0EA5E9', text: '#ffffff' },
    ],
  },
  {
    title: 'Nexo Administración',
    type: 'Landing Page',
    color: 'from-yellow-900/40 to-amber-900/20',
    accent: '#F59E0B',
    url: 'https://www.nexoadministracionintegral.com/',
    techs: [
      { name: 'Next.js',      bg: '#000000', text: '#ffffff' },
      { name: 'React',        bg: '#20232A', text: '#61DAFB' },
      { name: 'Tailwind CSS', bg: '#0EA5E9', text: '#ffffff' },
    ],
  },
]

function TechDisplay({ project }) {
  const domain = project.url
    ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : 'stack tecnológico'
  return (
    <div className="rounded-xl overflow-hidden border border-[#1A1A2E] bg-[#0F0F1A]">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0C0C15] border-b border-[#1A1A2E]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"/>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"/>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"/>
        <div className="flex-1 mx-3 bg-[#1A1A2E] rounded-full h-5 flex items-center px-3">
          <span className="text-[10px] text-zinc-500 font-mono truncate">{domain}</span>
        </div>
      </div>

      {project.url ? (
        <>
          {/* Live website preview */}
          <div className="h-44 overflow-hidden bg-[#0C0C15] relative">
            <img
              src={`https://image.thum.io/get/width/800/crop/600/${project.url}`}
              alt={`Vista previa de ${project.title}`}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5 px-4 py-3 bg-[#0C0C15] border-t border-[#1A1A2E]">
            {project.techs.map(tech => (
              <span
                key={tech.name}
                className="text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide"
                style={{ background: tech.bg, color: tech.text }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </>
      ) : (
        /* Tech stack grid (sin URL) */
        <div className={`h-40 bg-gradient-to-br ${project.color} p-5 flex flex-col justify-between`}>
          <p className="text-[10px] font-semibold tracking-[1.5px] uppercase" style={{ color: project.accent }}>
            Tecnologías utilizadas
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techs.map(tech => (
              <span
                key={tech.name}
                className="text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide"
                style={{ background: tech.bg, color: tech.text }}
              >
                {tech.name}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 mt-3">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.accent }}/>
            <span className="text-[10px] text-zinc-500">Optimizado para rendimiento y SEO</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Portfolio() {
  const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
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
            Cada proyecto es único, construido desde cero con las mejores tecnologías para el negocio específico y sus objetivos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * .1}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(124,58,237,.4)' }}
                transition={{ duration: .25 }}
                className="bg-[#0F0F1A] border border-[#1A1A2E] rounded-2xl overflow-hidden group"
              >
                <TechDisplay project={p} />
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[15px]">{p.title}</h3>
                    <span className="text-[11px] text-zinc-500 font-medium tracking-[1px] uppercase">{p.type}</span>
                  </div>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-[#1A1A2E] flex items-center justify-center text-zinc-600 group-hover:border-purpleL group-hover:text-purpleL transition-all"
                    >
                      →
                    </a>
                  ) : (
                    <div className="w-8 h-8 rounded-full border border-[#1A1A2E] flex items-center justify-center text-zinc-600 group-hover:border-purpleL group-hover:text-purpleL transition-all">
                      →
                    </div>
                  )}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={.3} className="mt-8 text-center">
          <p className="text-zinc-500 text-sm mb-4">¿Quieres ver cómo quedaría tu proyecto?</p>
          <motion.a
            href="#contact" onClick={e => { e.preventDefault(); go('#contact') }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(124,58,237,.45)' }}
            whileTap={{ scale: .97 }}
            className="inline-flex items-center gap-2 bg-purple-700 text-white text-sm font-bold px-7 py-3.5 rounded-full glow-purple transition-all"
          >
            Solicitar demo gratuita →
          </motion.a>
        </FadeIn>
      </div>
    </section>
  )
}
