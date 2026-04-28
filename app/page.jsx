'use client'
import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import Marquee      from '@/components/Marquee'
import Problem      from '@/components/Problem'
import Services     from '@/components/Services'
import Portfolio    from '@/components/Portfolio'
import Metrics      from '@/components/Metrics'
import Process      from '@/components/Process'
import Automation   from '@/components/Automation'
import Quote        from '@/components/Quote'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <Services />
      <Portfolio />
      <Metrics />
      <Process />
      <Automation />
      <Quote />
      <Contact />
      <Footer />
    </main>
  )
}
