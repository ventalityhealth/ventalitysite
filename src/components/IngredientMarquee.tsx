import { motion } from 'framer-motion'
import { INGREDIENTS } from '../data'

/* Seamless, infinitely looping ribbon of ingredients. Re-used between
   sections as connective tissue so the page feels like one flowing piece. */
export function IngredientMarquee({
  delay = 2.4,
  faded = true,
}: {
  delay?: number
  faded?: boolean
}) {
  // Duplicate the list so the -50% keyframe translate loops seamlessly.
  const loop = [...INGREDIENTS, ...INGREDIENTS]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      className="relative z-10 w-full overflow-hidden py-3"
    >
      {faded && (
        <>
          {/* Soft fade edges so the ribbon dissolves into the scene */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#010101] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#010101] to-transparent sm:w-32" />
        </>
      )}

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
