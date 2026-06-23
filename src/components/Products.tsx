import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'
import { PRODUCTS } from '../data'

export function Products() {
  return (
    <section id="shop" className="relative bg-white px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center sm:mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-[#2d6a4f]">
              The Collection
            </span>
          </Reveal>
          <h2 className="mt-6 font-garamond text-4xl font-normal tracking-tight text-[#111111] sm:text-6xl">
            <StaggeredFade text="Rituals for every moment" />
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <motion.a
              key={product.name}
              href="#connect"
              initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass-card group flex flex-col items-center overflow-hidden rounded-3xl px-8 py-12 text-center transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.09)]"
            >
              {/* Gradient orb */}
              <div className="relative mb-8 flex h-28 w-28 items-center justify-center">
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${product.gradient} opacity-25 blur-2xl`}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                />
                <div
                  className={`relative h-20 w-20 rounded-full bg-gradient-to-br ${product.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110`}
                />
              </div>

              <h3 className="font-garamond text-3xl font-normal text-[#111111]">
                {product.name}
              </h3>
              <p className="mt-1 text-sm font-light italic text-[#888888]">
                {product.tagline}
              </p>

              <span className="mt-5 text-[0.68rem] uppercase tracking-[0.22em] text-[#2d6a4f]">
                {product.hero}
              </span>

              <p className="mt-4 text-sm font-light leading-relaxed text-[#666666]">
                {product.description}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#888888] transition-colors group-hover:text-[#1a3c2b]">
                Discover
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
