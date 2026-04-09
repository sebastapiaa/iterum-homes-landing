// All static page sections — server components, no client JS needed

const Check = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Star = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

export function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-inner">
        <div className="trust-item">
          <div className="trust-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          Licensed &amp; Insured
        </div>
        <div className="trust-item">
          <div className="trust-icon"><Star /></div>
          5-Star Rated
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
          </div>
          Local San Diego Team
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
          </div>
          Transparent Process
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" /></svg>
          </div>
          Guaranteed Cash Offer
        </div>
      </div>
    </div>
  );
}

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Contact Us",
      desc: "Call, text, or submit the form with your property details. We'll schedule a walkthrough at a time that works for you — no pressure, no obligations.",
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>,
    },
    {
      num: "02",
      title: "We Assess & Offer",
      desc: "We visit your property, assess its condition, and present a fair, competitive cash offer — typically within 24 hours. No hidden fees or deductions.",
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
    },
    {
      num: "03",
      title: "Close & Get Paid",
      desc: "Accept our offer and choose your closing date. We handle all the paperwork, pay all closing costs, and you walk away with cash in hand.",
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    },
  ];
  return (
    <section className="site-section process" id="process">
      <div className="section-inner">
        <span className="section-label">How It Works</span>
        <h2 className="section-heading">Three Simple Steps to <br />Sell Your Home</h2>
        <p className="section-desc">No showings, no open houses, no uncertainty. Our streamlined process gets you from first call to cash in hand — fast.</p>
        <div className="process-grid">
          {steps.map((s) => (
            <div key={s.num} className="process-card">
              <span className="process-number">{s.num}</span>
              <div className="process-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const features = [
    { title: "Close in as Few as 7 Days", desc: "No waiting months for bank approvals. We're cash buyers, so we close on your schedule — fast." },
    { title: "No Repairs Needed", desc: "We buy homes as-is. Outdated, damaged, cluttered — it doesn't matter. Leave everything and we'll handle it." },
    { title: "Zero Fees or Commissions", desc: "No agent commissions, no closing costs, no hidden fees. The offer we make is the amount you receive." },
    { title: "100% Satisfaction Guarantee", desc: "Not happy with our offer? Walk away — no questions asked. We're here to help, never to pressure." },
  ];
  return (
    <section className="site-section why-us" id="why">
      <div className="section-inner">
        <div className="why-grid">
          <div>
            <span className="section-label">Why Iterum Homes</span>
            <h2 className="section-heading">The Easiest Way to Sell Your San Diego Home</h2>
            <div className="why-features">
              {features.map((f) => (
                <div key={f.title} className="why-feature">
                  <div className="why-feature-icon"><Check /></div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-card">
            <h3>Ready to Get a Fair Cash Offer?</h3>
            <p>We&apos;ve helped hundreds of San Diego homeowners sell quickly and stress-free. Whether you&apos;re facing foreclosure, divorce, inherited a property, or simply need to move — we&apos;re here to help.</p>
            <a href="#contact" className="btn-primary">Get My Cash Offer →</a>
            <div className="guarantee-badge">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <span>No-obligation offer. Walk away at any time.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { quote: "Iterum made selling my mom's house after she passed so much easier than I expected. They were kind, respectful, and we closed in 10 days.", name: "Maria G.", location: "Chula Vista", initial: "M" },
    { quote: "I was facing foreclosure and didn't know what to do. They gave me a fair offer and I walked away with cash in two weeks. Lifesavers.", name: "David R.", location: "El Cajon", initial: "D" },
    { quote: "Inherited a fixer-upper and had no interest in repairs. Iterum bought it as-is, no questions, no fuss. Best decision I made.", name: "Jennifer L.", location: "La Mesa", initial: "J" },
  ];
  return (
    <section className="site-section testimonials" id="testimonials">
      <div className="section-inner">
        <span className="section-label">Real Stories</span>
        <h2 className="section-heading">Trusted by San Diego Homeowners</h2>
        <p className="section-desc">Don&apos;t take our word for it — hear from the people we&apos;ve helped.</p>
        <div className="testimonials-grid">
          {items.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initial}</div>
                <div className="testimonial-meta">
                  <h5>{t.name}</h5>
                  <p>{t.location}, CA</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Situations() {
  const items = [
    "Facing Foreclosure", "Going Through Divorce", "Inherited Property",
    "Major Repairs Needed", "Relocating for Work", "Vacant or Abandoned",
    "Behind on Payments", "Tired of Being a Landlord", "Tax Liens or Code Violations",
    "Downsizing", "Fire or Storm Damage", "Simply Need to Sell Fast",
  ];
  return (
    <section className="site-section situations" id="situations">
      <div className="section-inner">
        <span className="section-label">We Can Help</span>
        <h2 className="section-heading">Selling in Any Situation</h2>
        <p className="section-desc">Whatever your reason, we&apos;ve seen it before and we&apos;re ready to help. We buy homes in every condition and every circumstance.</p>
        <div className="situations-grid">
          {items.map((s) => (
            <div key={s} className="situation-tag">
              <Check />{s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceAreas() {
  const areas = [
    "Downtown San Diego", "La Jolla", "Pacific Beach", "Mission Beach", "Ocean Beach",
    "Point Loma", "Hillcrest", "North Park", "South Park", "Mission Hills",
    "Chula Vista", "National City", "El Cajon", "La Mesa", "Spring Valley",
    "Lemon Grove", "Santee", "Lakeside", "Poway", "Escondido",
    "San Marcos", "Vista", "Oceanside", "Carlsbad", "Encinitas",
    "Solana Beach", "Del Mar", "Rancho Bernardo", "Rancho Peñasquitos", "Mira Mesa",
  ];
  return (
    <section className="site-section service-areas" id="areas">
      <div className="section-inner">
        <span className="section-label">Service Areas</span>
        <h2 className="section-heading">Serving All of San Diego County</h2>
        <p className="section-desc">From the coast to the inland communities, we buy homes throughout San Diego County. Don&apos;t see your area? Give us a call — chances are we cover it.</p>
        <div className="areas-grid">
          {areas.map((a) => (
            <div key={a} className="area-pill">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "How much will you pay for my house?", a: "Our offers are based on your property's condition, location, and current market value. After a quick walkthrough, we typically present a fair cash offer within 24 hours. There's no cost or obligation to receive an offer." },
    { q: "Do I need to make any repairs before selling?", a: "No. We buy homes completely as-is. You don't need to clean, paint, fix, or remove anything. Leave whatever you don't want to take with you — we'll handle it all." },
    { q: "Are there any fees or commissions?", a: "Zero. There are no agent commissions, no closing costs, and no hidden fees. The cash offer we make is exactly what you receive at closing." },
    { q: "How fast can you close?", a: "We can close in as little as 7 days, though most of our sales close within about two weeks. We're flexible — we'll close on your timeline, not ours." },
    { q: "What types of properties do you buy?", a: "Single-family homes, condos, townhouses, multi-family properties, mobile homes, and even vacant land. We buy in any condition, from move-in ready to major fixer-uppers." },
    { q: "Is this legitimate? How do I know I can trust you?", a: "Iterum Homes is a local San Diego company. We're licensed, insured, and have helped hundreds of homeowners across San Diego County. We'd be happy to provide references and answer any questions during our initial call." },
    { q: "What if I'm in foreclosure or behind on payments?", a: "We help homeowners in foreclosure all the time. Time is critical in these situations, so reach out as soon as possible. We can often close fast enough to help you avoid foreclosure entirely." },
    { q: "Do I have to accept your offer?", a: "Absolutely not. Our offers are 100% no-obligation. If you don't like the offer for any reason, you walk away — no pressure, no questions asked." },
  ];

  // FAQ Schema.org markup for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="site-section faq" id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="section-inner">
        <span className="section-label">FAQ</span>
        <h2 className="section-heading">Common Questions</h2>
        <p className="section-desc">Everything you need to know about selling your home to Iterum Homes.</p>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <div className="faq-answer">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="site-section about" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <span className="section-label">About Us</span>
            <h2 className="section-heading">Local Buyers, Real People, Real Results</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Iterum Homes is a San Diego-based real estate investment company built on a simple idea: selling a home shouldn&apos;t be stressful. We specialize in helping homeowners who need to sell quickly — whether due to financial hardship, life changes, or just wanting a simpler path forward.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}>
              We&apos;re not a national chain or a faceless investor. We&apos;re a local team that knows the San Diego market inside and out, and we&apos;re committed to giving every homeowner a fair, transparent offer — every single time.
            </p>
          </div>
          <div className="about-card">
            <h3 style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: "0.75rem" }}>Why Homeowners Choose Us</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              We treat every seller with respect, listen to their story, and work hard to make the process as easy as possible. No pressure, no games, just straightforward help when you need it.
            </p>
            <div className="about-stats">
              <div className="about-stat"><h4>200+</h4><p>Homes Purchased</p></div>
              <div className="about-stat"><h4>14 Days</h4><p>Avg. Close Time</p></div>
              <div className="about-stat"><h4>100%</h4><p>Satisfaction</p></div>
              <div className="about-stat"><h4>$0</h4><p>Hidden Fees</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="site-section cta-section" id="cta">
      <div className="section-inner cta-inner">
        <span className="section-label" style={{ color: "var(--gold)" }}>Let&apos;s Talk</span>
        <h2>Get Your <em>No-Obligation</em> Cash Offer Today</h2>
        <p>Call or text us — we respond within minutes during business hours. Or scroll up to submit your address and we&apos;ll get back to you within 24 hours.</p>
        <a href="tel:6194732033" className="cta-phone">(619) 473-2033</a>
        <div className="cta-row">
          <a href="#contact" className="btn-primary">Get My Cash Offer →</a>
          <a href="mailto:info@iterumhomes.com" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span>Iterum Homes</span>
        </div>
        <div className="footer-links">
          <a href="#process">Process</a>
          <a href="#why">Why Us</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Get an Offer</a>
          <a href="mailto:info@iterumhomes.com">info@iterumhomes.com</a>
        </div>
        <p className="footer-copy">© 2026 Iterum Homes. All rights reserved. San Diego, CA.</p>
      </div>
    </footer>
  );
}
