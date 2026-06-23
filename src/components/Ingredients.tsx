import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'
import { IngredientMarquee } from './IngredientMarquee'
import { SPOTLIGHT } from '../data'

export function Ingredients() {
  return (
    <section
      id="ingredients"
      className="relative overflow-hidden bg-[#010101] py-28 sm:py-36"
    >
      {/* Ribbon reused here to thread the sections together */}
      <div className="mb-20">
        <IngredientMarquee delay={0} />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">
              What&apos;s Inside
            </span>
          </Reveal>
          <h2 className="mt-6 font-garamond text-4xl font-normal leading-tight tracking-tight text-white sm:text-6xl">
            <StaggeredFade text="Ingredients you can name" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base font-light leading-relaxed text-white/60 sm:text-lg">
              No fillers, no mystery. Just the vital botanicals that do the
              work — chosen for what they bring, and left in their honest form.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {SPOTLIGHT.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="group h-full border border-white/5 bg-white/[0.01] p-8 transition-colors sm:p-10"
              >
                <span className="font-garamond text-5xl font-normal text-white/15 transition-colors group-hover:text-emerald-300/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-garamond text-2xl font-normal text-white">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/55">
                  {item.note}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
