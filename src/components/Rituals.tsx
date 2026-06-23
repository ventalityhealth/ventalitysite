import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'
import { RITUALS } from '../data'

export function Rituals() {
  return (
    <section
      id="rituals"
      className="relative bg-white px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center sm:mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-[#2d6a4f]">
              The Ritual
            </span>
          </Reveal>
          <h2 className="mt-6 font-garamond text-4xl font-normal tracking-tight text-[#111111] sm:text-6xl">
            <StaggeredFade text="Three steps to vitality" />
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">

          {/* Animated connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-8 hidden h-px origin-left bg-gradient-to-r from-[#1a3c2b]/30 via-[#2d6a4f]/15 to-transparent md:block"
          />

          {RITUALS.map((ritual, i) => (
            <Reveal key={ritual.step} delay={i * 0.15}>
              <div className="relative text-center md:text-left">
                {/* Step number circle */}
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#1a3c2b]/15 bg-white shadow-sm md:mx-0">
                  <span className="font-garamond text-xl text-[#1a3c2b]">
                    {ritual.step}
                  </span>
                </div>

                <h3 className="mt-7 font-garamond text-2xl font-normal text-[#111111]">
                  {ritual.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[#666666]">
                  {ritual.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Divider to next section */}
        <div className="divider mt-28 sm:mt-36" />
      </div>
    </section>
  )
}
