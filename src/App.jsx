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
import upsellLogo from './assets/revenza-upsell-logo.png'

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

const aboutHighlights = {
  'Merchant-First': 'Everything we build starts with one question: will this genuinely help a merchant sell better without making the store feel pushy?',
  'Precision Upsell': 'Relevant add-ons, smart timing, and clean presentation, because good upsells should feel helpful, not noisy.',
  'Experience-Led': 'We care about conversions, but never at the cost of shopper trust, clarity, or a smooth buying journey.',
}

const shellClass = 'flex min-h-screen flex-col bg-slate-50 text-slate-900'
const pageClass = 'mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8'

function navClass(isActive) {
  return [
    'rounded-full px-3 py-2 text-sm font-semibold transition',
    isActive ? 'bg-sky-100 text-sky-950' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
  ].join(' ')
}

function buttonClass(variant = 'primary') {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2'
  return variant === 'primary'
    ? `${base} bg-sky-600 text-white hover:bg-sky-700`
    : `${base} border border-slate-200 bg-white text-slate-900 hover:bg-slate-50`
}

function cardClass(extra = '') {
  return `rounded-3xl border border-slate-200 bg-white/90 shadow-sm shadow-slate-200/60 ${extra}`
}

function Layout() {
  return (
    <HashRouter>
      <div className={shellClass}>
        <a
          className="fixed left-4 top-4 z-50 -translate-y-24 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0 focus:outline-none"
          href="#main-content"
        >
          Skip to content
        </a>

        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/105 backdrop-blur">
          <div className={`${pageClass} flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between`}>
            <NavLink className="inline-flex items-center gap-3 self-start text-lg font-extrabold tracking-tight text-slate-950" to="/" aria-label="Revenza home">
              <img className="h-10 w-10 rounded-2xl border border-slate-200 bg-white object-contain p-1.5" src={logoUrl} alt="" />
              <span>Revenza</span>
            </NavLink>
            <nav className="flex flex-wrap gap-2" aria-label="Primary navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => navClass(isActive)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/knowledgebase" element={<Knowledgebase />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-200 bg-white/70">
          <div className={`${pageClass} flex flex-col gap-3 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between`}>
            <span className="font-medium">Revenza Techies</span>
            <a className="font-semibold text-sky-700 hover:text-sky-800" href="mailto:revenzatechies@gmail.com">
              revenzatechies@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </HashRouter>
  )
}

function Home() {
  return (
    <div className={pageClass}>
      <section className={`${cardClass('overflow-hidden')} grid gap-6 p-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:p-10`} aria-labelledby="home-title">
        <div>
          <span className="mb-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-sky-800">
            Shopify upsell tools
          </span>
          <h1 id="home-title" className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build useful upsell journeys without making your store feel salesy.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Revenza helps merchants surface relevant add-ons, guide customers with cleaner offers,
            and grow revenue while keeping the shopping experience trustworthy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink className={buttonClass('primary')} to="/apps">Explore Apps</NavLink>
            <NavLink className={buttonClass('secondary')} to="/contact">Contact Us</NavLink>
          </div>
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
          {['Features', 'Apps', 'Pricing', 'Contact'].map((item) => (
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
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
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
            {['Features', 'Apps', 'Pricing', 'Contact'].map((item) => (
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
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-6 py-3 text-sm font-semibold text-black"
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
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Install App
                <ArrowRight size={18} />
              </a>

              <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
                Live Demo
              </button>
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

                <img
                  src={upsellLogo}
                  alt="Revenza Upsell"
                  className="h-14 w-14 rounded-2xl"
                />
              </div>

              <div className="grid gap-4">
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

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                    <p className="text-sm text-zinc-400">Conversions</p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      +32%
                    </h3>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                    <p className="text-sm text-zinc-400">Orders</p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      12.4K
                    </h3>
                  </div>
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
              <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/10 hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]">
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

function AppsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <FadeUp>
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
            Apps
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Premium Shopify Apps
          </h2>
        </div>
      </FadeUp>

      <div className="grid gap-8 lg:grid-cols-3">
        {appCards.map((card, index) => (
          <FadeUp key={card.title} delay={index * 0.1}>
            <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]">
              <div className="mb-8 flex items-center justify-between">
                <img
                  src={upsellLogo}
                  alt={card.title}
                  className="h-20 w-20 rounded-3xl"
                />

                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                  Live
                </div>
              </div>

              <h3 className="mb-4 text-3xl font-black text-white">
                {card.title}
              </h3>

              <p className="mb-8 leading-relaxed text-zinc-400">
                {card.description}
              </p>

              <div className="mb-10 flex flex-col gap-4">
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20">
                      <Check size={14} className="text-cyan-300" />
                    </div>

                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={card.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                Install App
                <ArrowRight size={18} />
              </a>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <FadeUp>
        <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-14 backdrop-blur-xl">
          <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative text-center">
            <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-black text-white md:text-6xl">
              Start Increasing Your Shopify Revenue Today
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Launch conversion-focused upsells and create smarter
              shopping experiences with Revenza Upsell.
            </p>

            <a
              href="https://apps.shopify.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Install Revenza Upsell
              <ArrowRight size={18} />
            </a>
          </div>
        </article>

        <article className={`${cardClass('p-6 sm:p-8')}`}>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Send a Message</h2>
          <p className="mt-3 leading-8 text-slate-600">Your message will be sent to <strong>revenzatechies@gmail.com</strong>.</p>
          <form className="mt-5 grid gap-4" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="a0d704db-5d63-43a6-bb4d-91e948e1d8d2" />
            <Field id="name" label="Name" name="name" placeholder="Enter your full name" required />
            <Field id="email" label="Email" name="email" type="email" placeholder="Enter your email address" required />
            <Field id="mobile" label="Mobile" name="mobile" type="tel" placeholder="Enter your mobile number" pattern="[0-9+\-\s()]{7,20}" required />
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="message">Add your message for us</label>
              <textarea className={inputClass('min-h-36 resize-y')} id="message" name="message" placeholder="Write your message here..." required />
            </div>
            <button className={buttonClass('primary')} type="submit">Send Message</button>
          </form>
        </article>
      </section>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 text-xl font-black text-black">
              R
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Revenza Techies
              </h3>

              <p className="text-xs text-zinc-500">
                Build. Optimize. Convert. Repeat.
              </p>
            </div>
          </div>

          <p className="leading-relaxed text-zinc-400">
            Premium Shopify SaaS solutions focused on revenue growth
            and conversion optimization.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold text-white">
            Company
          </h4>

          <div className="flex flex-col gap-3">
            {['About', 'Features', 'Pricing', 'Contact'].map((item) => (
              <a
                key={item}
                href="/"
                className="text-zinc-400 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold text-white">
            Apps
          </h4>

          <div className="flex flex-col gap-3">
            <a
              href="/"
              className="text-zinc-400 transition hover:text-white"
            >
              Revenza Upsell
            </a>

            <a
              href="/"
              className="text-zinc-400 transition hover:text-white"
            >
              Shopify Integrations
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold text-white">
            Contact
          </h4>

          <div className="flex flex-col gap-3 text-zinc-400">
            <p>support@revenza.tech</p>
            <p>Shopify SaaS Solutions</p>
            <p>India</p>
          </div>
        </div>
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
        <AppsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default Layout



