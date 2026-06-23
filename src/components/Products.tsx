import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'
import { Aurora } from './ui/Aurora'
import { PRODUCTS } from '../data'

export function Products() {
  return (
    <section id="shop" className="relative overflow-hidden bg-[#010101] px-5 py-28 sm:px-8 sm:py-36">
      <Aurora />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center sm:mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">
              The Collection
            </span>
          </Reveal>
          <h2 className="mt-6 font-garamond text-4xl font-normal tracking-tight text-white sm:text-6xl">
            <StaggeredFade text="Rituals for every moment" />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 0.1}>
              <motion.a
                href="#connect"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="liquid-glass group relative flex h-full flex-col items-center overflow-hidden rounded-3xl px-8 py-12 text-center"
              >
                {/* Glowing product orb */}
                <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${product.gradient} blur-2xl opacity-60`}
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.4,
                    }}
                  />
                  <div
                    className={`relative h-24 w-24 rounded-full bg-gradient-to-br ${product.gradient} shadow-2xl transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>

                <h3 className="font-garamond text-3xl font-normal text-white">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-light italic text-white/60">
                  {product.tagline}
                </p>

                <span className="mt-5 text-[0.7rem] uppercase tracking-[0.2em] text-emerald-300/80">
                  {product.hero}
                </span>

                <p className="mt-4 text-sm font-light leading-relaxed text-white/55">
                  {product.description}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 transition-colors group-hover:text-white">
                  Discover
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
