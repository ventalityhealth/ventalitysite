import { NAV_LINKS } from '../data'

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#010101] px-5 py-16 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <div className="font-garamond text-2xl tracking-tight text-white">
            Ventality
          </div>
          <p className="mt-2 text-sm font-light text-white/40">
            Natural vitality, made daily.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs font-light text-white/30 sm:flex-row">
        <span>© {new Date().getFullYear()} Ventality · ventality.health</span>
        <span>Crafted &amp; fulfilled with Supliful</span>
      </div>
    </footer>
  )
}
