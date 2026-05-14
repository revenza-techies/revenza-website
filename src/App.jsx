import { Canvas, useFrame } from '@react-three/fiber'
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
import { Suspense, useMemo, useRef, useState } from 'react'
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
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  )
}

function RevenueOrbit() {
  const group = useRef()
  const inner = useRef()

  const particles = useMemo(
    () =>
      Array.from({ length: 72 }, (_, index) => {
        const radius = 2.35 + (index % 8) * 0.15
        const angle = index * 0.72
        const y = ((index % 12) - 6) * 0.11

        return {
          position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
          scale: 0.026 + (index % 5) * 0.006,
        }
      }),
    [],
  )

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime()

    if (group.current) {
      group.current.rotation.y = elapsed * 0.18
      group.current.rotation.x = Math.sin(elapsed * 0.4) * 0.08
    }

    if (inner.current) {
      inner.current.rotation.y = -elapsed * 0.36
      inner.current.position.y = Math.sin(elapsed * 1.1) * 0.08
    }
  })

  return (
    <group ref={group}>
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 4, 4]} intensity={8} color="#5eead4" />
      <pointLight position={[-4, -2, 2]} intensity={4} color="#fb7185" />

      <group ref={inner}>
        <mesh>
          <icosahedronGeometry args={[1.08, 2]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#0891b2"
            emissiveIntensity={0.28}
            metalness={0.76}
            roughness={0.18}
          />
        </mesh>

        <mesh rotation={[0.8, 0.2, 0.4]}>
          <torusGeometry args={[1.58, 0.018, 16, 160]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" />
        </mesh>

        <mesh rotation={[-0.65, 0.7, 0.1]}>
          <torusGeometry args={[1.92, 0.014, 16, 160]} />
          <meshStandardMaterial color="#f43f5e" emissive="#f43f5e" />
        </mesh>

        <mesh rotation={[0.15, -0.9, 1.08]}>
          <torusGeometry args={[2.26, 0.012, 16, 160]} />
          <meshStandardMaterial color="#a3e635" emissive="#a3e635" />
        </mesh>
      </group>

      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshBasicMaterial
            color={index % 3 === 0 ? '#a3e635' : index % 3 === 1 ? '#22d3ee' : '#fb7185'}
          />
        </mesh>
      ))}
    </group>
  )
}

function HeroVisual() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative min-h-[460px] lg:min-h-[520px]"
    >
      <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.35),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(251,113,133,0.25),transparent_30%)] blur-2xl" />

      <div className="relative h-[460px] overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 shadow-[0_30px_120px_rgba(0,0,0,0.65)] backdrop-blur-xl lg:h-[520px]">
        <Canvas camera={{ position: [0, 0, 6], fov: 42 }}>
          <Suspense fallback={null}>
            <RevenueOrbit />
          </Suspense>
        </Canvas>

        <div className="pointer-events-none absolute inset-x-5 top-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-5 py-4 backdrop-blur-md">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Revenza Dashboard
            </h3>

            <p className="text-sm text-zinc-400">
              Shopify Revenue Analytics
            </p>
          </div>

          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
          <p className="text-sm text-zinc-400">
            Revenue Generated
          </p>

          <h2 className="mt-2 text-4xl font-black text-white">
            $84,320
          </h2>

          <div className="mt-4 h-3 rounded-full bg-zinc-800">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '78%' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="h-3 rounded-full bg-gradient-to-r from-cyan-300 via-lime-300 to-rose-400"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-lime-300 to-rose-400 text-lg font-black text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.35)]">
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
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-lime-300 to-rose-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_45px_rgba(34,211,238,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(251,113,133,0.26)]"
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
        <div className="border-t border-white/10 bg-slate-950 px-6 py-6 md:hidden">
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
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-lime-300 to-rose-400 px-6 py-3 text-sm font-semibold text-slate-950"
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
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,0.98),rgba(8,47,73,0.62)_42%,rgba(63,12,36,0.58))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(34,211,238,0.28),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(163,230,53,0.16),transparent_26%),radial-gradient(circle_at_65%_78%,rgba(251,113,133,0.2),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeUp>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
              <Sparkles size={16} />
              Shopify SaaS Platform
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mb-8 text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
              Increase Shopify
              <br />
              Revenue With{' '}
              <span className="block bg-gradient-to-r from-cyan-200 via-lime-200 to-rose-300 bg-clip-text text-transparent">
                Smarter Upsells
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mb-10 max-w-[310px] text-base leading-relaxed text-zinc-300 sm:max-w-2xl sm:text-lg">
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
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-lime-300 to-rose-400 px-8 py-4 font-semibold text-slate-950 shadow-[0_18px_60px_rgba(34,211,238,0.25)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(251,113,133,0.28)]"
              >
                Install App
                <ArrowRight size={18} />
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-8">
              {stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-3xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.5}>
          <HeroVisual />
        </FadeUp>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <FadeUp>
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
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
              <motion.div
                whileHover={{ rotateX: 4, rotateY: -4, y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group h-full rounded-[28px] border border-white/10 bg-white/[0.06] p-8 shadow-[0_22px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl [transform-style:preserve-3d] hover:border-cyan-300/30 hover:bg-white/[0.09]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-lime-300 to-rose-400 shadow-[0_18px_50px_rgba(34,211,238,0.18)] transition group-hover:scale-105">
                  <Icon className="text-slate-950" size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            </FadeUp>
          )
        })}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
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
    <div className="overflow-x-hidden bg-slate-950 text-white">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  )
}
