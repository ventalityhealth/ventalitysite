import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'

export function Philosophy() {
  return (
    <section className="relative bg-[#010101] px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">
            Our Philosophy
          </span>
        </Reveal>

        <h2 className="mt-8 font-garamond text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl">
          <StaggeredFade text="Nature, distilled into" />
          <br />
          <span className="text-white/50">
            <StaggeredFade text="a daily act of care." />
          </span>
        </h2>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed text-white/60 sm:text-lg">
            Ventality begins with whole, recognizable ingredients — adaptogens,
            marine botanicals, and functional mushrooms — and nothing it
            doesn&apos;t need. Every blend is produced and fulfilled through
            Supliful, so what you hold is clean, traceable, and made to be lived
            with.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
