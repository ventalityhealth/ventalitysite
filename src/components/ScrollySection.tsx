import { useRef, useEffect } from 'react'

const SCROLLY_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260616_212935_bbf608da-62d1-4f25-9be4-c346e4d09cc8.mp4'

const CARDS = [
  {
    title: 'Rooted in Nature',
    body: 'Every Ventality formula starts with whole, recognizable botanicals — adaptogens, marine minerals, and functional mushrooms — chosen for what they genuinely bring.',
  },
  {
    title: 'Pure by Design',
    body: 'No fillers, no mystery. Ventality blends are produced through Supliful, so what you hold is clean, traceable, and built to be trusted every single day.',
  },
  {
    title: 'Built for Daily Life',
    body: 'Small, consistent acts of care compound quietly over time. Ventality is designed to become the most natural part of your morning ritual.',
  },
]

export function ScrollySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoCanvasRef = useRef<HTMLCanvasElement>(null)
  const pCanvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardsGridRef = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const videoCanvas = videoCanvasRef.current
    const pCanvas = pCanvasRef.current
    if (!videoCanvas || !pCanvas) return

    const ctx = videoCanvas.getContext('2d')
    const pCtx = pCanvas.getContext('2d')
    if (!ctx || !pCtx) return

    let frames: ImageBitmap[] = []
    let framesReady = false
    let lastFrameIndex = -1
    let rafId = 0
    let mounted = true

    // ── Video canvas sizing ──────────────────────────────────────────────
    function resizeVideoCanvas() {
      if (!videoCanvas) return
      const dpr = Math.min(devicePixelRatio, 2)
      videoCanvas.width = Math.round(videoCanvas.clientWidth * dpr)
      videoCanvas.height = Math.round(videoCanvas.clientHeight * dpr)
      lastFrameIndex = -1
    }

    // ── Frame extraction (seeks through video and captures bitmaps) ──────
    async function extractFrames() {
      try {
        const res = await fetch(SCROLLY_VIDEO_URL, { mode: 'cors' })
        const blob = await res.blob()
        const objectUrl = URL.createObjectURL(blob)
        const video = document.createElement('video')
        video.muted = true
        video.playsInline = true
        video.crossOrigin = 'anonymous'
        video.preload = 'auto'
        video.src = objectUrl

        await new Promise<void>((resolve, reject) => {
          video.onloadedmetadata = () => resolve()
          video.onerror = () => reject(new Error('video load error'))
          setTimeout(() => reject(new Error('metadata timeout')), 15000)
        })

        const scale = Math.min(1, 1280 / video.videoWidth)
        const sw = Math.round(video.videoWidth * scale)
        const sh = Math.round(video.videoHeight * scale)
        const frameCount = Math.max(30, Math.min(120, Math.round(video.duration * 24)))

        for (let i = 0; i < frameCount; i++) {
          if (!mounted) break
          const t = (i / (frameCount - 1)) * (video.duration - 0.05)
          video.currentTime = t
          await new Promise<void>((resolve) => {
            const onSeeked = () => { video.removeEventListener('seeked', onSeeked); resolve() }
            video.addEventListener('seeked', onSeeked)
            setTimeout(() => { video.removeEventListener('seeked', onSeeked); resolve() }, 3000)
          })
          const bitmap = await createImageBitmap(video, { resizeWidth: sw, resizeHeight: sh })
          frames.push(bitmap)
        }

        if (mounted && frames.length > 0) {
          framesReady = true
          if (videoCanvas) videoCanvas.style.visibility = 'visible'
        }
        URL.revokeObjectURL(objectUrl)
      } catch (_) {
        // Frame extraction failed — section shows with plain dark background
      }
    }

    // ── Scroll progress 0→1 through this section ─────────────────────────
    function getSectionProgress() {
      const section = sectionRef.current
      if (!section) return 0
      const rect = section.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      if (scrollable <= 0) return 0
      return Math.max(0, Math.min(1, -rect.top / scrollable))
    }

    // ── Draw a single video frame cover-fitted to canvas ──────────────────
    function drawFrame(frame: ImageBitmap) {
      if (!videoCanvas || !ctx) return
      const cw = videoCanvas.width
      const ch = videoCanvas.height
      const s = Math.max(cw / frame.width, ch / frame.height)
      const dw = frame.width * s
      const dh = frame.height * s
      ctx.drawImage(frame, (cw - dw) / 2, (ch - dh) / 2, dw, dh)
    }

    // ── Particles ─────────────────────────────────────────────────────────
    interface Particle {
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number
    }
    let particles: Particle[] = []

    function resizeParticles() {
      if (!pCanvas) return
      pCanvas.width = window.innerWidth
      pCanvas.height = window.innerHeight
      createParticles()
    }

    function createParticles() {
      if (!pCanvas) return
      particles = []
      const count = Math.floor((pCanvas.width * pCanvas.height) / 16000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * pCanvas.width,
          y: Math.random() * pCanvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 1.2 + 0.3,
          opacity: Math.random() * 0.3 + 0.05,
        })
      }
    }

    // ── Main RAF loop ──────────────────────────────────────────────────────
    function tick() {
      rafId = requestAnimationFrame(tick)
      if (!sectionRef.current) return

      // Skip work when section is off-screen
      const rect = sectionRef.current.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return

      const progress = getSectionProgress()

      // Video scrub
      if (framesReady && frames.length > 0) {
        const idx = Math.round(progress * (frames.length - 1))
        if (idx !== lastFrameIndex) {
          lastFrameIndex = idx
          if (frames[idx]) drawFrame(frames[idx])
        }
      }

      // Hero: visible 0 → 0.15
      if (heroRef.current) {
        const op = Math.max(0, 1 - progress / 0.15)
        heroRef.current.style.opacity = String(op)
      }

      // Cards: fade in 0.18→0.25, sweep 0.28→0.78, fade out 0.78→0.85
      if (cardsContainerRef.current && cardsGridRef.current) {
        const fadeIn  = Math.min(1, Math.max(0, (progress - 0.18) / 0.07))
        const fadeOut = Math.min(1, Math.max(0, (0.85 - progress) / 0.07))
        const op = Math.min(fadeIn, fadeOut)
        cardsContainerRef.current.style.opacity = String(op)
        cardsContainerRef.current.style.pointerEvents = op > 0.1 ? 'auto' : 'none'

        const revealPct =
          Math.max(0, Math.min(1, (progress - 0.28) / 0.5)) * 130
        const isMobile = window.innerWidth < 640
        const mask = isMobile
          ? `linear-gradient(to bottom, black ${revealPct}%, transparent ${revealPct + 20}%)`
          : `linear-gradient(to right, black ${revealPct}%, transparent ${revealPct + 15}%)`
        cardsGridRef.current.style.maskImage = mask
        ;(cardsGridRef.current.style as CSSStyleDeclaration & { webkitMaskImage: string })
          .webkitMaskImage = mask
      }

      // Section 3: 0.87 → 1.0
      if (section3Ref.current) {
        const s3 = Math.max(0, Math.min(1, (progress - 0.87) / 0.1))
        section3Ref.current.style.opacity = String(s3)
        section3Ref.current.style.transform = `translateY(${(1 - s3) * 32}px)`
        section3Ref.current.style.filter = s3 < 1 ? `blur(${(1 - s3) * 8}px)` : 'none'
      }

      // Particles (emerald-tinted)
      if (pCanvas && pCtx) {
        pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height)
        for (const p of particles) {
          p.x += p.vx; p.y += p.vy
          if (p.x < 0) p.x = pCanvas.width
          if (p.x > pCanvas.width) p.x = 0
          if (p.y < 0) p.y = pCanvas.height
          if (p.y > pCanvas.height) p.y = 0
          pCtx.beginPath()
          pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          pCtx.fillStyle = `rgba(110,231,183,${p.opacity})`
          pCtx.fill()
        }
      }
    }

    resizeVideoCanvas()
    resizeParticles()
    window.addEventListener('resize', resizeVideoCanvas)
    window.addEventListener('resize', resizeParticles)
    rafId = requestAnimationFrame(tick)
    extractFrames()

    return () => {
      mounted = false
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resizeVideoCanvas)
      window.removeEventListener('resize', resizeParticles)
      frames.forEach((f) => f.close())
    }
  }, [])

  return (
    /* Tall outer container — drives the scroll distance */
    <div ref={sectionRef} className="relative" style={{ height: '600vh' }}>
      {/* Sticky viewport — stays pinned while parent scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#010101]">

        {/* Scroll-driven video canvas */}
        <canvas
          ref={videoCanvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ visibility: 'hidden' }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Bottom melt into next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#010101]" style={{ zIndex: 2 }} />

        {/* Particle overlay */}
        <canvas
          ref={pCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 3 }}
        />

        {/* ── Hero content — fades out at start of scroll ── */}
        <div
          ref={heroRef}
          className="absolute inset-0 flex flex-col items-center justify-end text-center pb-20 sm:pb-28 px-5"
          style={{ zIndex: 10 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-5">
            Our Promise
          </p>
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.1] max-w-3xl">
            Supplements rooted in{' '}
            <span className="relative inline-block">
              <span
                className="absolute left-0 w-full rounded-sm"
                style={{ bottom: '3px', height: '7px', background: 'rgba(110,231,183,0.4)' }}
              />
              <span className="relative">nature</span>
            </span>
            ,{' '}designed for{' '}
            <span className="relative inline-block">
              <span
                className="absolute left-0 w-full rounded-sm"
                style={{ bottom: '3px', height: '7px', background: 'rgba(110,231,183,0.4)' }}
              />
              <span className="relative">daily life</span>
            </span>
            .
          </h2>

          <div className="mt-10">
            <a
              href="#shop"
              className="liquid-glass rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-white/90"
            >
              Shop the collection →
            </a>
          </div>

          {/* Bounce cue */}
          <div className="mt-10 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white/30">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>

        {/* ── Cards — revealed by horizontal sweep as you scroll ── */}
        <div
          ref={cardsContainerRef}
          className="absolute bottom-0 left-0 right-0 px-5 sm:px-10 md:px-16 pb-12 sm:pb-20"
          style={{ zIndex: 4, opacity: 0, pointerEvents: 'none' }}
        >
          <div
            ref={cardsGridRef}
            className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
          >
            {CARDS.map((card) => (
              <div key={card.title}>
                <h3 className="font-garamond text-xl sm:text-2xl font-normal text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/60">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Final brand reveal — blurs in at the very end ── */}
        <div
          ref={section3Ref}
          className="absolute inset-0 flex flex-col items-center justify-end text-center pb-20 sm:pb-36 px-5"
          style={{ zIndex: 12, opacity: 0, pointerEvents: 'none' }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/70 mb-5">
            Begin the ritual
          </p>
          <p className="font-garamond text-6xl sm:text-8xl md:text-9xl font-normal text-white tracking-tight">
            Ventality
          </p>
        </div>

      </div>
    </div>
  )
}
