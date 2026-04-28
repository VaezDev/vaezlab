'use client'
const items = ['Next.js','React','Tailwind CSS','Framer Motion','E-Commerce','Landing Pages','SEO Técnico','Web Corporativa','Portfolio','REST APIs','WordPress','Diseño UI/UX']

export default function Marquee() {
  const doubled = [...items,...items]
  return (
    <div className="overflow-hidden border-y border-[#1A1A2E] bg-[#0C0C15] py-3.5">
      <div className="marquee-anim flex items-center gap-6 w-max whitespace-nowrap">
        {doubled.map((item,i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="text-[11px] font-semibold tracking-[2px] uppercase text-zinc-600">{item}</span>
            <span className="text-purpleL text-sm">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
