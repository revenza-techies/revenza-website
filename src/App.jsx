import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

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

function Layout() {
  return (
    <HashRouter>
      <div className="app-shell">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <NavLink className="brand" to="/" aria-label="Revenza home">
            <img src={logoUrl} alt="" />
            <span>Revenza</span>
          </NavLink>
          <nav className="nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>
        <main id="main-content">
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
        <footer className="site-footer">
          <span>Revenza Techies</span>
          <a href="mailto:revenzatechies@gmail.com">revenzatechies@gmail.com</a>
        </footer>
      </div>
    </HashRouter>
  )
}

function Home() {
  return (
    <div className="page page-home">
      <section className="hero home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <span className="eyebrow">Shopify upsell tools</span>
          <h1 id="home-title">Build useful upsell journeys without making your store feel salesy.</h1>
          <p>
            Revenza helps merchants surface relevant add-ons, guide customers with cleaner offers,
            and grow revenue while keeping the shopping experience trustworthy.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <NavLink className="btn btn-primary" to="/apps">Explore Apps</NavLink>
            <NavLink className="btn btn-secondary" to="/contact">Contact Us</NavLink>
          </div>
        </div>
        <div className="product-panel" aria-label="Revenza highlights">
          <img src={logoUrl} alt="Revenza Upsell logo" />
          <div>
            <strong>Relevance first</strong>
            <p>Smart timing, clean offers, and merchant-friendly workflows.</p>
          </div>
        </div>
      </section>
      <section className="card-grid three" aria-label="Website sections">
        {[
          ['Apps', 'Discover tools built to improve merchant workflows.', '/apps'],
          ['Knowledgebase', 'Find setup guides, usage details, and troubleshooting resources.', '/knowledgebase'],
          ['Privacy', 'Review how Revenza collects, uses, and protects information.', '/privacy'],
        ].map(([title, copy, to]) => (
          <NavLink className="feature-card link-card" to={to} key={title}>
            <h2>{title}</h2>
            <p>{copy}</p>
          </NavLink>
        ))}
      </section>
    </div>
  )
}

function Apps() {
  return (
    <SimplePage
      eyebrow="Apps"
      title="Applications and tools built to improve merchant workflows."
      copy="Discover Revenza applications designed to make upsell setup, product recommendations, and merchant operations simpler."
    >
      <section className="card-grid three" aria-label="Application features">
        {appCards.map((card) => (
          <article className="feature-card app-card" key={card.title}>
            <img className="app-card-logo" src={card.logo} alt={`${card.title} logo`} />
            <div className="app-card-body">
              <h2>
                <a className="app-title-link" href={card.href} target="_blank" rel="noreferrer">
                  {card.title}
                </a>
              </h2>
              <p>{card.copy}</p>
              <a className="btn install-btn" href={card.href} target="_blank" rel="noreferrer">
                Install App
              </a>
            </div>
          </article>
        ))}
      </section>
    </SimplePage>
  )
}

function Knowledgebase() {
  return (
    <div className="page split-page">
      <aside className="side-nav" aria-label="Knowledgebase menu">
        <span className="mini-label">KB Menu</span>
        <a href="#overview">Overview</a>
        <a href="#install">Installation</a>
      </aside>
      <div className="content-stack">
        <section className="hero compact-hero" aria-labelledby="kb-title">
          <span className="eyebrow">Knowledgebase</span>
          <h1 id="kb-title">Setup guides, usage details, and troubleshooting resources.</h1>
          <p>Find practical Revenza product guidance in one responsive documentation structure.</p>
        </section>
        <article id="overview" className="section-card">
          <h2>Overview</h2>
          <p>Find setup guides, usage details, and troubleshooting resources for Revenza products.</p>
        </article>
        <article id="install" className="section-card">
          <h2>Installation</h2>
          <p>Step-by-step installation content can be added here for your app and integrations.</p>
        </article>
      </div>
    </div>
  )
}

function Pricing() {
  return (
    <SimplePage
      eyebrow="Pricing"
      title="Simple and transparent pricing for every stage of growth."
      copy="Add plan comparison, monthly or annual options, and feature limits for each tier as the product packaging becomes final."
    >
      <section className="pricing-grid" aria-label="Pricing plans">
        {pricePlans.map((plan) => (
          <article className={plan.featured ? 'price-card featured' : 'price-card'} key={plan.name}>
            <span>{plan.name}</span>
            <h2>{plan.price}</h2>
            <p>{plan.copy}</p>
            <ul>
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
    <div className="page about-page">
      <section className="hero about-hero" aria-labelledby="about-title">
        <div>
          <span className="eyebrow">About Revenza</span>
          <h1 id="about-title">We build upsell tools that help merchants grow without making stores feel salesy.</h1>
          <p>
            Revenza exists to make product recommendations feel smarter, cleaner, and more useful.
            We help merchants increase conversions and revenue while keeping the customer journey smooth and trustworthy.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#story">Read our story</a>
            <a className="btn btn-secondary" href="#values">Explore our values</a>
          </div>
        </div>
        <div className="glass-stack" aria-label="About highlights">
          {['Merchant-First', 'Precision Upsell', 'Experience-Led'].map((title) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{aboutHighlights[title]}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="split-page about-content">
        <aside className="side-nav" aria-label="About page sections">
          <span className="mini-label">Navigate</span>
          <a href="#mission">1. Our Mission</a>
          <a href="#story">2. Revenza Story</a>
          <a href="#values">3. Our Values</a>
          <a href="#builders">4. The People Behind It</a>
        </aside>
        <div className="content-stack">
          <article id="mission" className="section-card">
            <span className="section-label blue">Our Mission</span>
            <h2>Helping merchants increase revenue with relevance, not randomness.</h2>
            <p>At Revenza, we design upsell experiences that feel like a natural part of shopping. The goal is simple: help store owners surface the right add-on products at the right moment.</p>
            <p>We believe the best commerce tools are the ones that improve results quietly by making decisions sharper, interfaces cleaner, and buying journeys smoother.</p>
          </article>
          <article id="story" className="section-card">
            <span className="section-label cyan">Revenza Story</span>
            <h2>Every good product starts with a real merchant problem.</h2>
            <p>Revenza was started by two friends, <strong>Bawa</strong> and <strong>Bhaiyaji</strong>, who met as colleagues and kept seeing the same thing: merchants often had growth opportunities, but the tools available to them were either too clunky, too generic, or too complicated.</p>
            <p>Like most builders, we tried figuring things out separately first. There were experiments, setbacks, late nights, and the usual maybe later thinking.</p>
            <div className="highlight-box">Then came the spark: a casual conversation, a simple suggestion from Bawa's wife, and one of those nights where an idea suddenly feels too real to ignore.</div>
            <p>That idea turned into Revenza, a brand built to help Shopify merchants grow in a way that feels premium, practical, and customer-friendly.</p>
          </article>
          <article id="values" className="section-card">
            <span className="section-label green">Our Values</span>
            <h2>The principles that shape every feature we ship.</h2>
            <div className="card-grid three values-grid">
              {[
                ['Useful over flashy', 'We prefer features merchants will use every day over features that only look good in demos.'],
                ['Growth with trust', 'Upsells should increase order value without making the shopper feel tricked or overwhelmed.'],
                ['Simple wins', 'Clear settings, focused workflows, and smart defaults beat unnecessary complexity every time.'],
              ].map(([title, copy]) => (
                <article className="value-card" key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </article>
          <article id="builders" className="builders-section">
            <div>
              <span className="section-label inverse">The People Behind Revenza</span>
              <h2>Built by friends, shaped by real-world experience.</h2>
              <p>One builder focused on product and development. One focused on management and support. Together, that mix keeps Revenza practical on the inside and helpful on the outside.</p>
            </div>
            <div className="builder-stack">
              <article>
                <span>Developer</span>
                <h3>Bawa</h3>
                <p>Focused on building reliable product experiences and turning merchant needs into clean, usable tools.</p>
              </article>
              <article>
                <span>Management & Support</span>
                <h3>Bhaiyaji</h3>
                <p>Focused on understanding merchants, solving problems fast, and making sure the experience feels human.</p>
              </article>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

const aboutHighlights = {
  'Merchant-First': 'Everything we build starts with one question: will this genuinely help a merchant sell better without making the store feel pushy?',
  'Precision Upsell': 'Relevant add-ons, smart timing, and clean presentation, because good upsells should feel helpful, not noisy.',
  'Experience-Led': 'We care about conversions, but never at the cost of shopper trust, clarity, or a smooth buying journey.',
}

function Contact() {
  return (
    <div className="page contact-page">
      <section className="hero contact-hero" aria-labelledby="contact-title">
        <img src={logoUrl} alt="Revenza Upsell logo" />
        <div>
          <h1 id="contact-title">Contact Us</h1>
          <p>We are here to support your growth with fast and friendly help.</p>
          <strong>Reveza Techies</strong>
        </div>
      </section>
      <section className="contact-grid" aria-label="Contact options">
        <article className="section-card">
          <h2>Let's Talk</h2>
          <p>Have a question, product feedback, or a support request? Send us a message and our team will get back to you as soon as possible.</p>
          <div className="chip-list">
            <span>Email: revenzatechies@gmail.com</span>
            <span>Business Hours: Mon - Sat, 10:00 AM - 7:00 PM</span>
          </div>
        </article>
        <article className="section-card form-card">
          <h2>Send a Message</h2>
          <p>Your message will be sent to <strong>revenzatechies@gmail.com</strong>.</p>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="a0d704db-5d63-43a6-bb4d-91e948e1d8d2" />
            <Field id="name" label="Name" name="name" placeholder="Enter your full name" required />
            <Field id="email" label="Email" name="email" type="email" placeholder="Enter your email address" required />
            <Field id="mobile" label="Mobile" name="mobile" type="tel" placeholder="Enter your mobile number" pattern="[0-9+\-\s()]{7,20}" required />
            <div className="field">
              <label htmlFor="message">Add your message for us</label>
              <textarea id="message" name="message" placeholder="Write your message here..." required />
            </div>
            <button className="btn submit-btn" type="submit">Send Message</button>
          </form>
        </article>
      </section>
    </div>
  )
}

function Privacy() {
  return (
    <div className="page privacy-page">
      <section className="hero compact-hero" aria-labelledby="privacy-title">
        <span className="eyebrow">Privacy First</span>
        <h1 id="privacy-title">Privacy Policy</h1>
        <p>This policy explains what information Revenza collects, why we collect it, and how we keep it secure when you use our website and services.</p>
        <p className="last-updated"><strong>Last updated:</strong> April 14, 2026</p>
      </section>
      <div className="split-page">
        <aside className="side-nav" aria-label="Privacy quick links">
          <span className="mini-label">Quick Links</span>
          {privacySections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
        </aside>
        <article className="policy content-stack">
          {privacySections.map((section) => (
            <section className="section-card" id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.items ? (
                <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : (
                <p>{section.copy}</p>
              )}
              {section.chip && <p className="contact-chip">{section.chip}</p>}
            </section>
          ))}
        </article>
      </div>
    </div>
  )
}

function SimplePage({ eyebrow, title, copy, children }) {
  return (
    <div className="page">
      <section className="hero compact-hero" aria-labelledby={`${eyebrow}-title`}>
        <span className="eyebrow">{eyebrow}</span>
        <h1 id={`${eyebrow}-title`}>{title}</h1>
        <p>{copy}</p>
      </section>
      {children}
    </div>
  )
}

function Field({ id, label, type = 'text', ...props }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
    </div>
  )
}

export default Layout



