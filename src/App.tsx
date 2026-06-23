import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Philosophy } from './components/Philosophy'
import { ScrollySection } from './components/ScrollySection'
import { Products } from './components/Products'
import { Ingredients } from './components/Ingredients'
import { Rituals } from './components/Rituals'
import { Testimonials } from './components/Testimonials'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#010101]">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <ScrollySection />
        <Products />
        <Ingredients />
        <Rituals />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
