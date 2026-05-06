import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Check,
  Menu,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'
import { useState } from 'react'
import './index.css'

const features = [
  {
    icon: TrendingUp,
    title: 'Increase AOV',
    description:
      'Boost average order value with smart product recommendations and conversion-focused upsells.',
  },
  {
    icon: ShoppingCart,
    title: 'Cart Upsells',
    description:
      'Display contextual offers directly inside the customer purchase journey.',
  },
  {
    icon: Zap,
    title: 'Fast Integration',
    description:
      'Install and launch within minutes directly on your Shopify store.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description:
      'Track conversions, revenue, and customer engagement with detailed insights.',
  },
  {
    icon: Sparkles,
    title: 'Modern UX',
    description:
      'Designed with performance, responsiveness, and user experience in mind.',
  },
  {
    icon: Check,
    title: 'Mobile Optimized',
    description:
      'Fully responsive experience across desktop, tablet, and mobile devices.',
  },
]

const stats = [
  {
    value: '35%',
    label: 'Average AOV Growth',
  },
  {
    value: '500+',
    label: 'Stores Supported',
  },
  {
    value: '99.9%',
    label: 'Uptime',
  },
  {
    value: '24/7',
    label: 'Support',
  },
]

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 text-lg font-black text-black">
            R
          </div>

          <div>
            <h1 className="text-lg font-semibold text-white">
              Revenza Techies
            </h1>

            <p className="text-xs text-zinc-400">
              Build. Optimize. Convert. Repeat.
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          {['Home', 'Features', 'Apps', 'Contact'].map((item) => (
            <a
              key={item}
              href="/"
              className="text-sm font-medium uppercase tracking-widest text-zinc-300 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://apps.shopify.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
          >
            Install App
            <ArrowRight size={16} />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6">
            {['Home', 'Features', 'Apps', 'Contact'].map((item) => (
              <a
                key={item}
                href="/"
                className="text-sm uppercase tracking-widest text-zinc-300"
              >
                {item}
              </a>
            ))}

            <a
              href="https://apps.shopify.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Install App
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">
        <div>
          <FadeUp>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={16} />
              Shopify SaaS Platform
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mb-8 text-5xl font-black leading-tight text-white md:text-7xl">
              Increase Shopify Revenue With{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Smarter Upsells
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Revenza Upsell helps Shopify stores boost conversions,
              increase average order value, and create optimized customer
              purchase journeys.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://apps.shopify.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Install App
                <ArrowRight size={18} />
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-12 flex flex-wrap gap-8">
              {stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-3xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.5}>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-3xl" />

            <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Revenza Dashboard
                  </h3>

                  <p className="text-sm text-zinc-400">
                    Shopify Revenue Analytics
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm text-zinc-400">
                  Revenue Generated
                </p>

                <h2 className="mt-2 text-4xl font-black text-white">
                  $84,320
                </h2>

                <div className="mt-4 h-3 rounded-full bg-zinc-800">
                  <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-purple-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <FadeUp>
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Features
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Built For Shopify Growth
          </h2>
        </div>
      </FadeUp>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon

          return (
            <FadeUp key={feature.title} delay={index * 0.1}>
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/10 hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600">
                  <Icon className="text-black" size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </FadeUp>
          )
        })}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white">
            Revenza Techies
          </h3>
        </div>

        <p className="max-w-2xl leading-relaxed text-zinc-400">
          Premium Shopify SaaS solutions focused on revenue growth
          and conversion optimization.
        </p>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
        © 2026 Revenza Techies. All rights reserved.
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  )
}