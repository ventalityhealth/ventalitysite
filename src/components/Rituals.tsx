import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'
import { Aurora } from './ui/Aurora'
import { RITUALS } from '../data'

export function Rituals() {
  return (
    <section
      id="rituals"
      className="relative overflow-hidden bg-[#010101] px-5 py-28 sm:px-8 sm:py-36"
    >
      <Aurora />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center sm:mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">
              The Ritual
            </span>
          </Reveal>
          <h2 className="mt-6 font-garamond text-4xl font-normal tracking-tight text-white sm:text-6xl">
            <StaggeredFade text="Three steps to vitality" />
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Connecting line that draws itself in on desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute left-0 right-0 top-8 hidden h-px origin-left bg-gradient-to-r from-emerald-400/40 via-white/20 to-transparent md:block"
          />

          {RITUALS.map((ritual, i) => (
            <Reveal key={ritual.step} delay={i * 0.15}>
              <div className="relative text-center md:text-left">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full md:mx-0 liquid-glass">
                  <span className="font-garamond text-xl text-white">
                    {ritual.step}
                  </span>
                </div>
                <h3 className="mt-7 font-garamond text-2xl font-normal text-white">
                  {ritual.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/55">
                  {ritual.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
