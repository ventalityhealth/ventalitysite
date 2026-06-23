import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'
import { Aurora } from './ui/Aurora'

export function CallToAction() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-[#010101] px-5 py-32 sm:px-8 sm:py-44"
    >
      <Aurora />

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
              className="flex-1 rounded-full border border-white/10 bg-white/[0.02] px-6 py-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-emerald-300/40"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="liquid-glass rounded-full px-8 py-4 text-xs uppercase tracking-[0.2em] text-white/90"
            >
              {submitted ? 'Welcome ✓' : 'Join'}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
