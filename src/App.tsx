import { ScrollProgress }  from './components/ui/ScrollProgress'
import { Navbar }          from './components/Navbar'
import { Hero }            from './components/Hero'
import { Philosophy }      from './components/Philosophy'
import { Stats }           from './components/Stats'
import { ScrollySection }  from './components/ScrollySection'
import { Products }        from './components/Products'
import { Ingredients }     from './components/Ingredients'
import { Rituals }         from './components/Rituals'
import { Testimonials }    from './components/Testimonials'
import { CallToAction }    from './components/CallToAction'
import { Footer }          from './components/Footer'

export default function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Fixed UI chrome */}
      <ScrollProgress />
      <Navbar />

      <main>
        {/* ── Dark cinematic opener ── */}
        <Hero />

        {/* ── Light editorial body ── */}
        <Philosophy />
        <Stats />

        {/* ── Dark cinematic interlude ── */}
        <ScrollySection />

        {/* ── Light product sections ── */}
        <Products />
        <Ingredients />
        <Rituals />
        <Testimonials />

        {/* ── Forest-green closing CTA ── */}
        <CallToAction />
      </main>

      {/* ── Dark grounding footer ── */}
      <Footer />
    </div>
  )
}
