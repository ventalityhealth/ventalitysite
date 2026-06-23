export const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4'

export const NAV_LINKS = [
  { label: 'Shop',        href: '#shop' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Rituals',     href: '#rituals' },
  { label: 'Connect',     href: '#connect' },
]

export const INGREDIENTS = [
  'Ashwagandha',
  'Sea Moss',
  "Lion's Mane",
  'Turmeric',
  'Elderberry',
  'Magnesium',
  'Beetroot',
  'Spirulina',
  'Apple Cider Vinegar',
  'Marine Collagen',
  'Biotin',
  'Vitamin D3',
]

export interface Stat {
  value: number
  suffix: string
  label: string
}

export const STATS: Stat[] = [
  { value: 12, suffix: '+', label: 'Botanicals per blend' },
  { value: 100, suffix: '%', label: 'Clean ingredients' },
  { value: 6,   suffix: '',  label: 'Ritual formulas' },
  { value: 30,  suffix: 'd', label: 'To feel the shift' },
]

export interface Product {
  name: string
  tagline: string
  hero: string
  description: string
  gradient: string
  orb: string        // single tailwind bg colour for the orb dot
}

export const PRODUCTS: Product[] = [
  {
    name: 'Calm',
    tagline: 'Stress, softened.',
    hero: 'Ashwagandha',
    description: 'An adaptogenic gummy that helps your body meet the day with steadiness.',
    gradient: 'from-violet-400 via-indigo-500 to-purple-700',
    orb: 'bg-violet-300',
  },
  {
    name: 'Focus',
    tagline: 'Clarity, uncovered.',
    hero: "Lion's Mane",
    description: 'A functional mushroom blend for sharp, sustained mental clarity.',
    gradient: 'from-teal-300 via-emerald-500 to-green-700',
    orb: 'bg-emerald-300',
  },
  {
    name: 'Defense',
    tagline: 'Resilience, daily.',
    hero: 'Elderberry & Sea Moss',
    description: 'Mineral-rich immune support built around antioxidant elderberry.',
    gradient: 'from-rose-400 via-fuchsia-500 to-purple-700',
    orb: 'bg-rose-300',
  },
  {
    name: 'Glow',
    tagline: 'Radiance from within.',
    hero: 'Marine Collagen & Biotin',
    description: 'Peptides and biotin that nourish skin, hair, and nails over time.',
    gradient: 'from-pink-300 via-rose-400 to-amber-500',
    orb: 'bg-pink-300',
  },
  {
    name: 'Vital',
    tagline: 'Whole-body fuel.',
    hero: 'Spirulina & Beetroot',
    description: 'A daily greens blend of algae and roots for natural, lasting energy.',
    gradient: 'from-lime-300 via-green-500 to-emerald-700',
    orb: 'bg-lime-300',
  },
  {
    name: 'Restore',
    tagline: 'Reset and recover.',
    hero: 'Magnesium & ACV',
    description: 'Magnesium and apple cider vinegar to wind down and rebalance.',
    gradient: 'from-sky-300 via-cyan-500 to-blue-700',
    orb: 'bg-sky-300',
  },
]

export interface Spotlight {
  name: string
  note: string
}

export const SPOTLIGHT: Spotlight[] = [
  { name: 'Ashwagandha',     note: 'An adaptogenic root that helps the body greet stress with calm.' },
  { name: "Lion's Mane",     note: 'A functional mushroom long prized for focus and mental clarity.' },
  { name: 'Sea Moss',        note: 'A mineral-dense marine botanical carrying 92 trace minerals.' },
  { name: 'Marine Collagen', note: 'Bioavailable peptides that support skin, hair, and joints.' },
  { name: 'Spirulina',       note: 'Blue-green algae rich in plant protein and antioxidants.' },
  { name: 'Turmeric',        note: 'A golden root celebrated for its soothing curcumin compounds.' },
]

export interface Ritual {
  step: string
  title: string
  body: string
}

export const RITUALS: Ritual[] = [
  { step: '01', title: 'Choose your ritual',  body: 'Pick the blend that meets your moment — calm, focus, glow, or fuel.' },
  { step: '02', title: 'Make it daily',        body: 'A small, consistent practice woven gently into your mornings.' },
  { step: '03', title: 'Feel the shift',       body: 'Vitality that quietly compounds, day after natural day.' },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'Calm became part of my evening within a week. The whole ritual just feels considered.',          name: 'Maya R.',   role: 'Verified ritualist' },
  { quote: 'Focus is the first supplement that earned a permanent spot on my desk.',                         name: 'Daniel K.', role: 'Verified ritualist' },
  { quote: 'Clean ingredients, beautiful packaging, and I genuinely feel the difference.',                   name: 'Priya S.',  role: 'Verified ritualist' },
  { quote: 'I love that I can read every ingredient and know exactly what it does.',                         name: 'Jordan M.', role: 'Verified ritualist' },
  { quote: 'Restore is the first thing I reach for on tough days. Genuinely calming.',                      name: 'Lena W.',   role: 'Verified ritualist' },
]
