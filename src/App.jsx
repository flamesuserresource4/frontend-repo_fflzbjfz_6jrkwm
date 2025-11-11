import React, { useEffect, useMemo, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  Images,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Home,
  DoorClosed,
  Wallpaper,
  Sofa,
  Layers,
  Bot,
  Instagram,
  MapPin,
  X
} from 'lucide-react'

const BRAND_BLUE = '#2092E9'
const GOLD = '#D4AF37'

const categories = ['All', 'Living Rooms', 'Offices', 'Bedrooms', 'Commercial Spaces']

const portfolioItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=75', category: 'Living Rooms', alt: 'Luxury living room' },
  { id: 2, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=75', category: 'Offices', alt: 'Modern office space' },
  { id: 3, src: 'https://images.unsplash.com/photo-1638885930125-85350348d266?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8MHx8fDE3NjI4NDU2MDB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', category: 'Bedrooms', alt: 'Cozy bedroom design' },
  { id: 4, src: 'https://images.unsplash.com/photo-1638885930125-85350348d266?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8MHx8fDE3NjI4NDU2MDB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', category: 'Commercial Spaces', alt: 'Commercial showroom' },
  { id: 5, src: 'https://images.unsplash.com/photo-1638885930125-85350348d266?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8MHx8fDE3NjI4NDU2MDB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', category: 'Living Rooms', alt: 'Contemporary living area' },
  { id: 6, src: 'https://images.unsplash.com/photo-1638885930125-85350348d266?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8MHx8fDE3NjI4NDU2MDB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', category: 'Bedrooms', alt: 'Minimal bedroom aesthetics' },
  { id: 7, src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzcGFjZXxlbnwwfDB8fHwxNzYyODQ1NjAzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', category: 'Offices', alt: 'Executive office' },
  { id: 8, src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=75', category: 'Commercial Spaces', alt: 'Lounge area' },
  { id: 9, src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=75', category: 'Living Rooms', alt: 'Artful interior' },
]

const Testimonial = ({ quote, author }) => (
  <motion.div
    className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg border border-white/40"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <p className="text-gray-700 text-lg leading-relaxed">“{quote}”</p>
    <p className="mt-4 font-semibold text-gray-900">{author}</p>
  </motion.div>
)

function App() {
  const [activeCat, setActiveCat] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const portfolioRef = useRef(null)

  const filteredItems = useMemo(() => (
    activeCat === 'All' ? portfolioItems : portfolioItems.filter(p => p.category === activeCat)
  ), [activeCat])

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Simple autoplay for testimonials
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % 3), 3500)
    return () => clearInterval(id)
  }, [])

  const testimonials = [
    { quote: 'Perfect finish and timely installation!', author: '– Meera, Puttur' },
    { quote: 'Loved the customized motorized blinds.', author: '– Naveen, Puttur' },
    { quote: 'Our living room feels brand new!', author: '– Aisha, Puttur' },
  ]

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero */}
      <section className="relative h-[88vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Blue overlay tint */}
        <div className="absolute inset-0 bg-[rgba(32,146,233,0.35)] pointer-events-none" />
        {/* Gradient bottom for readability */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-3 py-1 text-sm text-gray-900 shadow-sm backdrop-blur">
                <Sparkles size={16} /> Luxury • Modern • Bespoke
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                Transform Your Space into a Work of Art
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-800 max-w-2xl">
                Blinds, Curtains, Wallpapers, Flooring & Interiors — Designed to Reflect You.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/9535038135"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold shadow-lg"
                  style={{ backgroundColor: BRAND_BLUE }}
                >
                  <MessageCircle size={18} /> Book Free Visit
                </a>
                <button
                  onClick={scrollToPortfolio}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border border-gray-300 bg-white/80 hover:bg-white transition"
                >
                  <Images size={18} /> View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">About White Palace Decor</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                White Palace Decor, based in Puttur, specializes in stylish, functional, and innovative interiors.
                From blinds and curtains to home automation — we blend design with technology to give your home a new
                look and lasting comfort.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600" />
                  <div>
                    <p className="font-semibold">Trusted Local Experts</p>
                    <p className="text-sm text-gray-600">Puttur and surrounding regions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-green-600" />
                  <div>
                    <p className="font-semibold">Premium Quality Materials</p>
                    <p className="text-sm text-gray-600">Built to last with warranty</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bot className="text-green-600" />
                  <div>
                    <p className="font-semibold">Smart Home Integration</p>
                    <p className="text-sm text-gray-600">Seamless automation options</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white to-gray-100 border p-4 flex flex-col justify-end shadow">
                <Home className="text-gray-500" />
                <p className="mt-2 font-semibold">Residential</p>
              </div>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white to-gray-100 border p-4 flex flex-col justify-end shadow">
                <DoorClosed className="text-gray-500" />
                <p className="mt-2 font-semibold">Windows & Doors</p>
              </div>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white to-gray-100 border p-4 flex flex-col justify-end shadow">
                <Wallpaper className="text-gray-500" />
                <p className="mt-2 font-semibold">Wall Treatments</p>
              </div>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white to-gray-100 border p-4 flex flex-col justify-end shadow">
                <Sofa className="text-gray-500" />
                <p className="mt-2 font-semibold">Furniture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Manual & Motorized Blinds', icon: DoorClosed },
              { title: 'Curtains & Drapery', icon: Layers },
              { title: 'Wallpapers & Artificial Grass', icon: Wallpaper },
              { title: 'Furniture Design', icon: Sofa },
              { title: 'Flooring & Carpets', icon: Layers },
              { title: 'UPVC Windows, Doors & Home Automation', icon: Bot },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm"
              >
                <item.icon className="text-gray-600" />
                <p className="mt-4 font-semibold">{item.title}</p>
                <p className="mt-2 text-sm text-gray-600">High-precision installation with premium finish.</p>
                <a
                  href="#portfolio"
                  onClick={(e) => { e.preventDefault(); scrollToPortfolio() }}
                  className="pointer-events-auto absolute inset-x-0 bottom-0 translate-y-10 group-hover:translate-y-0 transition px-6 py-3 text-sm font-medium"
                  style={{ color: BRAND_BLUE }}
                >
                  View Work →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" ref={portfolioRef} className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Work Speaks for Itself</h2>
              <p className="mt-2 text-gray-600">Explore by category</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${activeCat === c ? 'text-white' : ''}`}
                  style={activeCat === c ? { backgroundColor: BRAND_BLUE, borderColor: BRAND_BLUE } : {}}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group relative overflow-hidden rounded-xl border bg-white shadow hover:shadow-lg focus:outline-none"
                  onClick={() => setLightbox(item)}
                >
                  <img
                    src={`${item.src}&fm=webp`}
                    alt={item.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow">
                    {item.category}
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            >
              <motion.div
                layout
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-10 right-0 text-white flex items-center gap-2"
                  onClick={() => setLightbox(null)}
                >
                  <X /> Close
                </button>
                <img src={`${lightbox.src}&fm=webp`} alt={lightbox.alt} className="w-full rounded-xl shadow-lg" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div key={idx} animate={{ opacity: slide === idx ? 1 : 0.4, scale: slide === idx ? 1 : 0.98 }}>
                <Testimonial quote={t.quote} author={t.author} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Interior Journey?</h2>
              <p className="mt-3 text-gray-700">Let’s bring your dream home to life — one detail at a time.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:9535038135" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold shadow" style={{ backgroundColor: BRAND_BLUE }}>
                  <Phone size={18} /> Call Now
                </a>
                <a href="https://wa.me/9535038135" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border bg-white hover:bg-gray-50">
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border shadow">
                <iframe
                  title="White Palace Decor - Location"
                  src="https://www.google.com/maps?q=Pade+Pangalayi+Road,+Near+GL+One+Mall,+Puttur&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full" style={{ backgroundColor: BRAND_BLUE }} />
              <div>
                <p className="font-extrabold tracking-tight" style={{ color: BRAND_BLUE }}>White Palace Decor</p>
                <p className="text-sm text-gray-600" style={{ color: GOLD }}>Your space, your style, our expertise.</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-700">
            <p className="flex items-center gap-2"><MapPin size={16} /> Pade Pangalayi Road, Near GL One Mall, Puttur</p>
            <p className="mt-1">+91 95350 38135 | +91 91488 97135</p>
            <p className="mt-1"><a href="mailto:info@whitepalacedecor.in" className="underline">info@whitepalacedecor.in</a></p>
            <p className="mt-2 inline-flex items-center gap-2"><Instagram size={16} /> <a href="https://instagram.com/whitepalacedecor" target="_blank" rel="noreferrer" className="underline">@whitepalacedecor</a></p>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          © 2025 White Palace Decor | Powered by flamesblue.com
        </div>
      </footer>
    </div>
  )
}

export default App
