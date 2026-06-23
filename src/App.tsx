import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4'

const NAV_LINKS = ['Shop', 'Ingredients', 'Rituals', 'Connect']

// Ingredients drawn from the Supliful-sourced products we sell.
const INGREDIENTS = [
  'Ashwagandha',
  'Sea Moss',
  "Lion's Mane",
  'Turmeric',
  'Elderberry',
  'Magnesium',
  'Beetroot',
  'Spirulina',
  'Apple Cider Vinegar',
  'Marine Collagen',
  'Biotin',
  'Vitamin D3',
]

/* -------------------------------------------------------------------------- */
/* StaggeredFade — splits text into characters, fades each in once on view    */
/* -------------------------------------------------------------------------- */
function StaggeredFade({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  const characters = text.split('')

  return (
    <span ref={ref} aria-label={text}>
      {characters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden="true"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.07 },
            },
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/* IngredientMarquee — seamless, infinitely looping ribbon of ingredients     */
/* -------------------------------------------------------------------------- */
function IngredientMarquee() {
  // Duplicate the list so the -50% keyframe translate loops seamlessly.
  const loop = [...INGREDIENTS, ...INGREDIENTS]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.4 }}
      className="relative z-10 w-full overflow-hidden py-3"
    >
      {/* Soft fade edges so the ribbon dissolves into the scene */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#010101] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#010101] to-transparent sm:w-32" />

      <div className="ingredient-track">
        {loop.map((ingredient, i) => (
          <span
            key={`${ingredient}-${i}`}
            className="flex items-center whitespace-nowrap text-xs font-light uppercase tracking-[0.25em] text-white/50 sm:text-sm"
          >
            {ingredient}
            <span className="mx-6 text-white/25 sm:mx-9">&bull;</span>
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/* App                                                                        */
/* -------------------------------------------------------------------------- */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#010101]">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Subtle overlay for legibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-5 py-6 sm:px-8 md:justify-center md:gap-16">
        <span className="text-sm font-light uppercase tracking-[0.25em] text-white sm:text-base md:tracking-[0.3em]">
          Ventality
        </span>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mobile-menu-glass fixed left-4 right-4 top-16 z-50 flex flex-col items-center gap-5 rounded-2xl py-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-light uppercase tracking-[0.25em] text-white/90 transition-colors hover:text-white"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center px-5 pt-12 text-center sm:px-8 sm:pt-16 md:pt-24">
        <h1 className="mb-6 font-garamond text-4xl font-normal leading-[1.08] tracking-tight text-white sm:mb-8 sm:text-6xl md:text-8xl lg:text-9xl">
          <span className="block">
            <StaggeredFade text="NOURISH YOUR" />
          </span>
          <span className="block">
            <StaggeredFade text="NATURAL VITALITY" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-8 max-w-xs text-sm font-light leading-relaxed text-white/70 sm:mb-10 sm:max-w-md sm:text-base md:text-lg"
        >
          A daily ritual of pure, plant-powered nutrition,
          <br className="hidden sm:block" /> crafted from nature's most vital
          ingredients.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="liquid-glass rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-white/90 sm:px-10 sm:py-4 sm:tracking-[0.2em]"
        >
          Begin Your Ritual
        </motion.button>
      </div>

      {/* Seamless ingredient ribbon anchored to the base of the scene */}
      <div className="absolute bottom-6 left-0 right-0 z-10 sm:bottom-10">
        <IngredientMarquee />
      </div>
    </div>
  )
}
