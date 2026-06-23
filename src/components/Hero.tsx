import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { StaggeredFade } from './ui/StaggeredFade'
import { IngredientMarquee } from './IngredientMarquee'
import { VIDEO_URL } from '../data'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax: text floats up slower than page scroll
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  // Subtitle/CTA fade out earlier so video is exposed as user scrolls
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-screen w-full overflow-hidden bg-[#010101]"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Gradient bridge → white light sections below */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#f9f8f5]" />

      {/* Parallax hero content */}
      <motion.div
        style={{ y: textY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center px-5 pt-28 text-center sm:px-8 sm:pt-32 md:pt-40"
      >
        <h1 className="mb-6 font-garamond text-3xl font-normal leading-[1.08] tracking-tight text-white sm:mb-8 sm:text-4xl md:text-6xl lg:text-7xl">
          <span className="block"><StaggeredFade text="NOURISH YOUR" /></span>
          <span className="block"><StaggeredFade text="NATURAL VITALITY" /></span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-8 max-w-xs text-sm font-light leading-relaxed text-white/70 sm:mb-10 sm:max-w-md sm:text-base md:text-lg"
        >
          A daily ritual of pure, plant-powered nutrition,
          <br className="hidden sm:block" /> crafted from nature's most vital ingredients.
        </motion.p>

        <motion.a
          href="#shop"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="liquid-glass rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-white/90 sm:px-10 sm:py-4 sm:tracking-[0.2em]"
        >
          Begin Your Ritual
        </motion.a>
      </motion.div>

      {/* Ingredient ribbon at bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-10 sm:bottom-10">
        <IngredientMarquee theme="dark" />
      </div>
    </section>
  )
}
