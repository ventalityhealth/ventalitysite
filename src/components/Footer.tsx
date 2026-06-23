import { motion } from 'framer-motion'
import { NAV_LINKS } from '../data'

export function Footer() {
  return (
    <footer className="relative bg-[#0d0d0d] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-garamond text-2xl tracking-tight text-white">
              Ventality
            </div>
            <p className="mt-2 text-sm font-light text-white/35">
              Natural vitality, made daily.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-8 text-xs font-light text-white/25 sm:flex-row">
          <span>© {new Date().getFullYear()} Ventality · ventality.health</span>
          <span>Crafted &amp; fulfilled with Supliful</span>
        </div>
      </div>
    </footer>
  )
}
