import { Reveal } from './ui/Reveal'
import { StaggeredFade } from './ui/StaggeredFade'
import { TESTIMONIALS } from '../data'

export function Testimonials() {
  return (
    <section className="relative bg-[#010101] px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center sm:mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">
              In Good Company
            </span>
          </Reveal>
          <h2 className="mt-6 font-garamond text-4xl font-normal tracking-tight text-white sm:text-6xl">
            <StaggeredFade text="Loved in daily life" />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="liquid-glass flex h-full flex-col rounded-3xl p-8 sm:p-10">
                <span className="font-garamond text-5xl leading-none text-emerald-300/40">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-base font-light leading-relaxed text-white/75">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8">
                  <div className="text-sm text-white">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
