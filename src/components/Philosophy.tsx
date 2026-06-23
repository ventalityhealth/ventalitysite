import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'

export function Philosophy() {
  return (
    <section className="relative bg-white px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-5xl">
        {/* Label */}
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-[#2d6a4f]">
            Our Philosophy
          </span>
        </Reveal>

        {/* Large editorial quote */}
        <h2 className="mt-8 font-garamond text-4xl font-normal leading-[1.12] tracking-tight text-[#111111] sm:text-6xl md:text-7xl">
          <Reveal delay={0.05}>
            <span>Nature, distilled into</span>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="block text-[#888888]">a daily act of care.</span>
          </Reveal>
        </h2>

        {/* Animated growing line */}
        <Reveal delay={0.18}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-10 h-px origin-left bg-[#1a3c2b]/20"
          />
        </Reveal>

        {/* Body copy */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-12">
          <Reveal delay={0.22}>
            <p className="text-base font-light leading-relaxed text-[#555555] sm:text-lg">
              Ventality begins with whole, recognizable ingredients — adaptogens,
              marine botanicals, and functional mushrooms — and nothing it
              doesn&apos;t need.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-base font-light leading-relaxed text-[#555555] sm:text-lg">
              Every blend is produced and fulfilled through Supliful, so what
              you hold is clean, traceable, and made to be lived with, morning
              after morning.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
