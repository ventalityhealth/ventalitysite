import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  /** true  → over dark hero; false → over light body sections */
  const [onHero, setOnHero] = useState(true)

  useEffect(() => {
    const update = () => setOnHero(window.scrollY < window.innerHeight * 0.85)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const textBase    = onHero ? 'text-white'     : 'text-[#111111]'
  const textMuted   = onHero ? 'text-white/75'  : 'text-[#555555]'
  const textHover   = onHero ? 'hover:text-white' : 'hover:text-[#111111]'
  const navBg       = onHero ? 'bg-transparent'   : 'navbar-glass-light'

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${navBg}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 md:justify-center md:gap-16">
          <a
            href="#top"
            className={`text-sm font-light uppercase tracking-[0.25em] transition-colors duration-500 sm:text-base md:tracking-[0.3em] ${textBase}`}
          >
            Ventality
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${textMuted} ${textHover}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className={`transition-colors duration-500 md:hidden ${textBase}`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

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
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-light uppercase tracking-[0.25em] text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
