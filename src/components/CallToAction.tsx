import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'

/** Magnetic button — subtly follows the cursor on hover. */
function MagneticButton({
  children,
  type,
  className,
}: {
  children: React.ReactNode
  type?: 'submit' | 'button'
  className?: string
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 180, damping: 18 })
  const y = useSpring(rawY, { stiffness: 180, damping: 18 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    rawX.set((e.clientX - rect.left - rect.width  / 2) * 0.35)
    rawY.set((e.clientY - rect.top  - rect.height / 2) * 0.35)
  }

  const onLeave = () => { rawX.set(0); rawY.set(0) }

  return (
    <motion.button
      ref={ref}
      type={type}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export function CallToAction() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-[#1a3c2b] px-5 py-32 sm:px-8 sm:py-44"
    >
      {/* Soft radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-[#2d6a4f]/30 blur-[100px]" />
      </div>

      {/* Slow-drifting botanical shapes */}
      <motion.div
        className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-[#4ade80]/5 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-56 w-56 rounded-full bg-[#4ade80]/5 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-garamond text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
          <StaggeredFade text="Begin your ritual" />
        </h2>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/60 sm:text-lg">
            Join the Ventality list for early drops, ingredient stories, and a
            little calm in your inbox.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (email.trim()) setSubmitted(true)
            }}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-white/15 bg-white/[0.06] px-6 py-4 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-white/30"
            />
            <MagneticButton
              type="submit"
              className="btn-forest rounded-full px-8 py-4 text-xs uppercase tracking-[0.2em]"
            >
              {submitted ? 'Welcome ✓' : 'Join'}
            </MagneticButton>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
