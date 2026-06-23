import { motion } from 'framer-motion'
import { INGREDIENTS } from '../data'

export function IngredientMarquee({
  delay = 0,
  theme = 'dark',
}: {
  delay?: number
  theme?: 'dark' | 'light'
}) {
  const loop = [...INGREDIENTS, ...INGREDIENTS]

  const textColor  = theme === 'light' ? 'text-black/40' : 'text-white/45'
  const dotColor   = theme === 'light' ? 'text-black/20' : 'text-white/20'
  const fadeFrom   = theme === 'light' ? 'from-[#f9f8f5]' : 'from-[#010101]'
  const fadeTo     = theme === 'light' ? 'to-[#f9f8f5]'   : 'to-[#010101]'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      className="relative w-full overflow-hidden py-3"
    >
      <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r ${fadeFrom} to-transparent sm:w-28`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l ${fadeTo} to-transparent sm:w-28`} />

      <div className="ingredient-track">
        {loop.map((ingredient, i) => (
          <span
            key={`${ingredient}-${i}`}
            className={`flex items-center whitespace-nowrap text-xs font-light uppercase tracking-[0.25em] ${textColor} sm:text-sm`}
          >
            {ingredient}
            <span className={`mx-6 ${dotColor} sm:mx-9`}>&bull;</span>
          </span>
        ))}
      </div>
    </motion.div>
  )
}
