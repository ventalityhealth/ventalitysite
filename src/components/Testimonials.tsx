import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'
import { TESTIMONIALS } from '../data'

export function Testimonials() {
  const constraintRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative overflow-hidden bg-[#f5f3ef] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <div className="mb-16 text-center sm:mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-[#2d6a4f]">
              In Good Company
            </span>
          </Reveal>
          <h2 className="mt-6 font-garamond text-4xl font-normal tracking-tight text-[#111111] sm:text-6xl">
            <StaggeredFade text="Loved in daily life" />
          </h2>
        </div>
      </div>

      {/* Draggable carousel — overflow visible so cards peek at edges */}
      <div ref={constraintRef} className="overflow-hidden px-5 sm:px-8">
        <motion.div
          drag="x"
          dragConstraints={constraintRef}
          dragElastic={0.12}
          className="flex cursor-grab gap-5 active:cursor-grabbing"
          style={{ width: 'max-content' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card flex w-[300px] flex-shrink-0 flex-col rounded-3xl p-8 sm:w-[380px] sm:p-10"
            >
              <span className="font-garamond text-5xl leading-none text-[#1a3c2b]/25">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-base font-light leading-relaxed text-[#444444]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-sm font-medium text-[#111111]">{t.name}</div>
                <div className="mt-0.5 text-xs uppercase tracking-[0.2em] text-[#aaaaaa]">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Drag hint */}
      <Reveal delay={0.3}>
        <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-[#aaaaaa]">
          Drag to explore
        </p>
      </Reveal>
    </section>
  )
}
