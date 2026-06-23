import { motion } from 'framer-motion'

/* Slow-drifting gradient orbs that give each dark section a living glow.
   Purely decorative and non-interactive. */
export function Aurora({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-cyan-500/10 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
