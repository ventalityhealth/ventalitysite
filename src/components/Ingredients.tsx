import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'
import { IngredientMarquee } from './IngredientMarquee'
import { SPOTLIGHT } from '../data'

export function Ingredients() {
  return (
    <section
      id="ingredients"
      className="relative bg-[#f9f8f5] py-28 sm:py-36"
    >
      {/* Ingredient ribbon — light theme */}
      <div className="mb-20">
        <IngredientMarquee theme="light" delay={0} />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-[#2d6a4f]">
              What&apos;s Inside
            </span>
          </Reveal>
          <h2 className="mt-6 font-garamond text-4xl font-normal leading-tight tracking-tight text-[#111111] sm:text-6xl">
            <StaggeredFade text="Ingredients you can name" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base font-light leading-relaxed text-[#666666] sm:text-lg">
              No fillers, no mystery. Just the vital botanicals that do the
              work — chosen for what they bring, and left in their honest form.
            </p>
          </Reveal>
        </div>

        {/* Spotlight grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPOTLIGHT.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: '#ffffff' }}
              className="group rounded-2xl border border-black/5 bg-white/60 p-8 transition-colors sm:p-10"
            >
              <span className="font-garamond text-5xl font-normal text-black/10 transition-colors group-hover:text-[#1a3c2b]/30">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-garamond text-2xl font-normal text-[#111111]">
                {item.name}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-[#666666]">
                {item.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
