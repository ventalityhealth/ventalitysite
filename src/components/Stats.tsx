import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { STATS } from '../data'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const display = useTransform(motionVal, (v) => Math.round(v))

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionVal, value, { duration: 1.6, ease: 'easeOut' })
    return () => controls.stop()
  }, [inView, value, motionVal])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative bg-[#f5f3ef] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/5 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center gap-2 bg-white px-8 py-10 text-center"
            >
              <span className="font-garamond text-5xl font-normal text-[#1a3c2b] sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#888888]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
