import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'

const logoUrl = import.meta.env.BASE_URL + 'upsell-logo.png'
const appLogoUrl = import.meta.env.BASE_URL + 'revenza-upsell-logo.png'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/apps', label: 'Apps' },
  { to: '/knowledgebase', label: 'Knowledgebase' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy Policy' },
]

const appCards = [
  {
    title: 'Revenza Upsell',
    copy: 'Boost average order value with smart product recommendations that feel helpful, not pushy.',
    href: 'https://apps.shopify.com/revenza-upsell',
    logo: appLogoUrl,
  },
]

const pricePlans = [
  {
    name: 'Starter',
    price: 'Custom',
    copy: 'For early stores preparing their first upsell experience.',
    features: ['Core setup support', 'Basic recommendation blocks', 'Email support'],
  },
  {
    name: 'Growth',
    price: 'Custom',
    copy: 'For merchants who want broader offer testing and stronger workflows.',
    features: ['Advanced placement options', 'Priority support', 'Launch guidance'],
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    copy: 'For teams that need more hands-on planning and implementation support.',
    features: ['Dedicated planning', 'Custom workflow support', 'Performance review'],
  },
]

const privacySections = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    items: [
      'Basic contact details such as name and email.',
      'Usage data such as pages visited and feature interactions.',
      'Technical data such as browser type and device information.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: '2. How We Use Information',
    items: [
      'To operate and improve our services.',
      'To respond to support requests.',
      'To maintain security and prevent misuse.',
    ],
  },
  {
    id: 'data-sharing',
    title: '3. Data Sharing',
    copy: 'We do not sell personal information. We may share limited data when required by law or with trusted service providers that help us run our services.',
  },
  {
    id: 'data-security',
    title: '4. Data Security',
    copy: 'We use reasonable administrative and technical safeguards to protect your information from unauthorized access, disclosure, and misuse.',
  },
  {
    id: 'your-rights',
    title: '5. Your Rights',
    copy: 'You may request access, correction, or deletion of your personal data by contacting us.',
  },
  {
    id: 'contact',
    title: '6. Contact',
    copy: 'If you have privacy-related questions, contact us at:',
    chip: 'revenzatechies@gmail.com',
  },
]

const aboutHighlights = {
  'Merchant-First': 'Everything we build starts with one question: will this genuinely help a merchant sell better without making the store feel pushy?',
  'Precision Upsell': 'Relevant add-ons, smart timing, and clean presentation, because good upsells should feel helpful, not noisy.',
  'Experience-Led': 'We care about conversions, but never at the cost of shopper trust, clarity, or a smooth buying journey.',
}

const shellClass = 'flex min-h-screen flex-col bg-[#F5F7FB] text-slate-900'
const pageClass = 'mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8'

function navClass(isActive) {
  return [
    'rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition duration-200',
    isActive ? 'bg-slate-950 text-white shadow-lg shadow-slate-900/10' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
  ].join(' ')
}

function buttonClass(variant = 'primary') {
  const base = 'inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F7FB]'
  return variant === 'primary'
    ? `${base} bg-slate-950 text-white shadow-[0_10px_30px_rgba(15,23,42,0.12)] hover:bg-slate-800`
    : `${base} border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50`
}

function cardClass(extra = '') {
  return `rounded-[28px] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] ${extra}`
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

        <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
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

        <footer className="border-t border-slate-200 bg-white/85">
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
      <section className={`${cardClass('overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50')} grid gap-6 p-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:p-10`} aria-labelledby="home-title">
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

        <div className="flex min-h-[320px] flex-col justify-center gap-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-inner shadow-slate-200/60">
          <img className="h-24 w-24 rounded-[1.5rem] border border-slate-200 bg-white object-contain p-2" src={logoUrl} alt="Revenza Upsell logo" />
          <div>
            <strong className="block text-lg font-bold text-slate-950">Relevance first</strong>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Smart timing, clean offers, and merchant-friendly workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3" aria-label="Website sections">
        {[
          ['Apps', 'Discover tools built to improve merchant workflows.', '/apps'],
          ['Knowledgebase', 'Find setup guides, usage details, and troubleshooting resources.', '/knowledgebase'],
          ['Privacy', 'Review how Revenza collects, uses, and protects information.', '/privacy'],
        ].map(([title, copy, to]) => (
          <NavLink className={`${cardClass('p-6 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/70')}`} to={to} key={title}>
            <h2 className="text-xl font-bold tracking-tight text-slate-950">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
          </NavLink>
        ))}
      </section>
    </div>
  )
}

function Apps() {
  return (
    <SimplePage
      pageId="apps"
      eyebrow="Apps"
      title="Applications and tools built to improve merchant workflows."
      copy="Discover Revenza applications designed to make upsell setup, product recommendations, and merchant operations simpler."
    >
      <section className="mt-8 grid grid-cols-1 justify-center gap-6 sm:grid-cols-[repeat(auto-fit,minmax(19rem,19rem))]" aria-label="Application features">
        {appCards.map((card) => (
          <article className={`${cardClass('mx-auto flex w-full max-w-[19rem] flex-col items-center gap-4 p-6 text-center')}`} key={card.title}>
            <h2 className="text-xl font-bold tracking-tight text-slate-950">
              <a className="text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-700" href={card.href} target="_blank" rel="noreferrer">
                {card.title}
              </a>
            </h2>
            <img className="h-44 w-full rounded-2xl border border-slate-200 bg-white object-contain p-3 sm:h-48" src={card.logo} alt={`${card.title} logo`} />
            <p className="text-sm leading-6 text-slate-500">{card.copy}</p>
            <a className={buttonClass('primary')} href={card.href} target="_blank" rel="noreferrer">
              Install App
            </a>
          </article>
        ))}
      </section>
    </SimplePage>
  )
}

function Knowledgebase() {
  return (
    <div className={pageClass}>
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className={`${cardClass('sticky top-24 self-start p-5')}`} aria-label="Knowledgebase menu">
          <span className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-slate-600">
            KB Menu
          </span>
          <div className="grid gap-2 text-sm font-semibold text-slate-700">
            <a className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950" href="#overview">Overview</a>
            <a className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950" href="#install">Installation</a>
          </div>
        </aside>

        <div className="grid gap-5">
          <section className={`${cardClass('p-6 sm:p-8')}`} aria-labelledby="kb-title">
            <span className="mb-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-sky-800">
              Knowledgebase
            </span>
            <h1 id="kb-title" className="max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Setup guides, usage details, and troubleshooting resources.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Find practical Revenza product guidance in one responsive documentation structure.
            </p>
          </section>

          <article id="overview" className={`${cardClass('p-6 sm:p-8')}`}>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">Overview</h2>
            <p className="mt-3 leading-8 text-slate-600">Find setup guides, usage details, and troubleshooting resources for Revenza products.</p>
          </article>

          <article id="install" className={`${cardClass('p-6 sm:p-8')}`}>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">Installation</h2>
            <p className="mt-3 leading-8 text-slate-600">Step-by-step installation content can be added here for your app and integrations.</p>
          </article>
        </div>
      </div>
    </div>
  )
}

function Pricing() {
  return (
    <SimplePage
      pageId="pricing"
      eyebrow="Pricing"
      title="Simple and transparent pricing for every stage of growth."
      copy="Add plan comparison, monthly or annual options, and feature limits for each tier as the product packaging becomes final."
    >
      <section className="mt-8 grid gap-5 md:grid-cols-3" aria-label="Pricing plans">
        {pricePlans.map((plan) => (
          <article
            className={`${cardClass(plan.featured ? 'border-sky-200 bg-sky-50/60 p-6' : 'p-6')}`}
            key={plan.name}
          >
            <span className="text-sm font-bold uppercase tracking-[0.08em] text-sky-800">{plan.name}</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">{plan.price}</h2>
            <p className="mt-3 leading-7 text-slate-600">{plan.copy}</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </article>
        ))}
      </section>
    </SimplePage>
  )
}

function About() {
  return (
    <div className={pageClass}>
      <section className={`${cardClass('overflow-hidden border-slate-200/80 bg-gradient-to-br from-slate-950 via-sky-800 to-cyan-600 p-6 text-white lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-8 lg:p-10')}`} aria-labelledby="about-title">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-white">
            About Revenza
          </span>
          <h1 id="about-title" className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            We build upsell tools that help merchants grow without making stores feel salesy.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
            Revenza exists to make product recommendations feel smarter, cleaner, and more useful.
            We help merchants increase conversions and revenue while keeping the customer journey smooth and trustworthy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={buttonClass('secondary')} href="#story">Read our story</a>
            <a className={buttonClass('secondary')} href="#values">Explore our values</a>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:mt-0">
          {['Merchant-First', 'Precision Upsell', 'Experience-Led'].map((title) => (
            <article key={title} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-white/80">{aboutHighlights[title]}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className={`${cardClass('sticky top-24 self-start p-5')}`} aria-label="About page sections">
          <span className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-slate-600">
            Navigate
          </span>
          <div className="grid gap-2 text-sm font-semibold text-slate-700">
            <a className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950" href="#mission">1. Our Mission</a>
            <a className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950" href="#story">2. Revenza Story</a>
            <a className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950" href="#values">3. Our Values</a>
            <a className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950" href="#builders">4. The People Behind It</a>
          </div>
        </aside>

        <div className="grid gap-5">
          <article id="mission" className={`${cardClass('p-6 sm:p-8')}`}>
            <span className="mb-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-sky-800">
              Our Mission
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-950">Helping merchants increase revenue with relevance, not randomness.</h2>
            <p className="mt-4 leading-8 text-slate-600">At Revenza, we design upsell experiences that feel like a natural part of shopping. The goal is simple: help store owners surface the right add-on products at the right moment.</p>
            <p className="mt-4 leading-8 text-slate-600">We believe the best commerce tools are the ones that improve results quietly by making decisions sharper, interfaces cleaner, and buying journeys smoother.</p>
          </article>

          <article id="story" className={`${cardClass('p-6 sm:p-8')}`}>
            <span className="mb-4 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-cyan-900">
              Revenza Story
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-950">Every good product starts with a real merchant problem.</h2>
            <p className="mt-4 leading-8 text-slate-600">Revenza was started by two friends, <strong>Bawa</strong> and <strong>Bhaiyaji</strong>, who met as colleagues and kept seeing the same thing: merchants often had growth opportunities, but the tools available to them were either too clunky, too generic, or too complicated.</p>
            <p className="mt-4 leading-8 text-slate-600">Like most builders, we tried figuring things out separately first. There were experiments, setbacks, late nights, and the usual maybe later thinking.</p>
            <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50 px-5 py-4 font-semibold leading-8 text-slate-700">Then came the spark: a casual conversation, a simple suggestion from Bawa's wife, and one of those nights where an idea suddenly feels too real to ignore.</div>
            <p className="mt-4 leading-8 text-slate-600">That idea turned into Revenza, a brand built to help Shopify merchants grow in a way that feels premium, practical, and customer-friendly.</p>
          </article>

          <article id="values" className={`${cardClass('p-6 sm:p-8')}`}>
            <span className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-emerald-900">
              Our Values
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-950">The principles that shape every feature we ship.</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ['Useful over flashy', 'We prefer features merchants will use every day over features that only look good in demos.'],
                ['Growth with trust', 'Upsells should increase order value without making the shopper feel tricked or overwhelmed.'],
                ['Simple wins', 'Clear settings, focused workflows, and smart defaults beat unnecessary complexity every time.'],
              ].map(([title, copy]) => (
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5" key={title}>
                  <h3 className="text-lg font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
                </article>
              ))}
            </div>
          </article>

          <article id="builders" className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm shadow-slate-300 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:p-8">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-white/80">
                The People Behind Revenza
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white">Built by friends, shaped by real-world experience.</h2>
              <p className="mt-4 leading-8 text-white/75">One builder focused on product and development. One focused on management and support. Together, that mix keeps Revenza practical on the inside and helpful on the outside.</p>
            </div>
            <div className="mt-6 grid gap-4 lg:mt-0">
              <article className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-white/55">Developer</span>
                <h3 className="mt-2 text-2xl font-bold text-white">Bawa</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">Focused on building reliable product experiences and turning merchant needs into clean, usable tools.</p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-white/55">Management & Support</span>
                <h3 className="mt-2 text-2xl font-bold text-white">Bhaiyaji</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">Focused on understanding merchants, solving problems fast, and making sure the experience feels human.</p>
              </article>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className={pageClass}>
      <section className={`${cardClass('mb-5 flex flex-col gap-5 p-6 sm:flex-row sm:items-center lg:p-8')}`} aria-labelledby="contact-title">
        <img className="h-20 w-20 rounded-2xl border border-slate-200 bg-white object-contain p-2" src={logoUrl} alt="Revenza Upsell logo" />
        <div>
          <h1 id="contact-title" className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Contact Us</h1>
          <p className="mt-3 leading-8 text-slate-600">We are here to support your growth with fast and friendly help.</p>
          <strong className="mt-2 block text-sky-800">Reveza Techies</strong>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]" aria-label="Contact options">
        <article className={`${cardClass('p-6 sm:p-8')}`}>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Let's Talk</h2>
          <p className="mt-3 leading-8 text-slate-600">Have a question, product feedback, or a support request? Send us a message and our team will get back to you as soon as possible.</p>
          <div className="mt-5 grid gap-3">
            <span className="inline-flex rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-semibold text-slate-700">Email: revenzatechies@gmail.com</span>
            <span className="inline-flex rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-semibold text-slate-700">Business Hours: Mon - Sat, 10:00 AM - 7:00 PM</span>
          </div>
        </article>

        <article className={`${cardClass('p-6 sm:p-8')}`}>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Send a Message</h2>
          <p className="mt-3 leading-8 text-slate-600">Your message will be sent to <strong>revenzatechies@gmail.com</strong>.</p>
          <form className="mt-5 grid gap-4" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="a0d704db-5d63-43a6-bb4d-91e948e1d8d2" />
            <Field id="name" label="Name" name="name" placeholder="Enter your full name" required />
            <Field id="email" label="Email" name="email" type="email" placeholder="Enter your email address" required />
            <Field id="mobile" label="Mobile" name="mobile" type="tel" placeholder="Enter your mobile number" pattern="[0-9+\\-\\s()]{7,20}" required />
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

function Privacy() {
  return (
    <div className={pageClass}>
      <section className={`${cardClass('mb-5 p-6 sm:p-8')}`} aria-labelledby="privacy-title">
        <span className="mb-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-sky-800">
          Privacy First
        </span>
        <h1 id="privacy-title" className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-4xl leading-8 text-slate-600">
          This policy explains what information Revenza collects, why we collect it, and how we keep it secure when you use our website and services.
        </p>
        <p className="mt-4 inline-flex rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600">
          <strong className="mr-2 text-slate-950">Last updated:</strong> April 14, 2026
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className={`${cardClass('sticky top-24 self-start p-5')}`} aria-label="Privacy quick links">
          <span className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-slate-600">
            Quick Links
          </span>
          <div className="grid gap-2 text-sm font-semibold text-slate-700">
            {privacySections.map((section) => (
              <a className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950" href={`#${section.id}`} key={section.id}>
                {section.title}
              </a>
            ))}
          </div>
        </aside>

        <article className="grid gap-4">
          {privacySections.map((section) => (
            <section className={`${cardClass('p-6 sm:p-8')}`} id={section.id} key={section.id}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">{section.title}</h2>
              {section.items ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-8 text-slate-600">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : (
                <p className="mt-4 leading-8 text-slate-600">{section.copy}</p>
              )}
              {section.chip && <p className="mt-4 inline-flex rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">{section.chip}</p>}
            </section>
          ))}
        </article>
      </div>
    </div>
  )
}

function SimplePage({ pageId, eyebrow, title, copy, children }) {
  return (
    <div className={pageClass}>
      <section className={`${cardClass('p-6 sm:p-8')}`} aria-labelledby={`${pageId}-title`}>
        <span className="mb-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-sky-800">
          {eyebrow}
        </span>
        <h1 id={`${pageId}-title`} className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-4xl leading-8 text-slate-600">{copy}</p>
      </section>
      {children}
    </div>
  )
}

function inputClass(extra = '') {
  return [
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm shadow-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200',
    extra,
  ].join(' ')
}

function Field({ id, label, type = 'text', ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor={id}>{label}</label>
      <input className={inputClass()} id={id} type={type} {...props} />
    </div>
  )
}

export default Layout
