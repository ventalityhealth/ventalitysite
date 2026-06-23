import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* Splits text into characters and fades each in once it scrolls into view. */
export function StaggeredFade({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  const characters = text.split('')

  return (
    <span ref={ref} aria-label={text} className={className}>
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
