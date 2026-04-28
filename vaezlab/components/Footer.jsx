'use client'

export default function Footer() {
  const go = href => document.querySelector(href)?.scrollIntoView({behavior:'smooth'})
  return (
    <footer className="border-t border-[#1A1A2E] py-8 px-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#hero" onClick={e=>{e.preventDefault();go('#hero')}} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-purple-700 flex items-center justify-center text-[11px] font-black text-white">VL</div>
          <div className="text-[11px] font-bold leading-tight tracking-[2px]">
            <span className="text-purpleL">VAEZ</span><br/>LAB
          </div>
        </a>
        <span className="text-[12px] text-zinc-600 text-center">© 2026 VaezLab — Todos los derechos reservados</span>
        <div className="flex gap-6">
          {[['Servicios','#services'],['Portafolio','#portfolio'],['Cotizar','#quote'],['Contacto','#contact']].map(([l,h])=>(
            <a key={l} href={h} onClick={e=>{e.preventDefault();go(h)}}
              className="text-[12px] text-zinc-600 hover:text-white transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
