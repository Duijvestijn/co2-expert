'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const features = [
  'Scope 1/2/3 measurement',
  'Multiple locations',
  'GHG Protocol reports',
  'CSRD-ready export',
  'Scope 3 value chain tracking',
  'Year-on-year comparison',
  'Customer-ready PDF export',
  'Team accounts',
  'Dedicated support',
  'Annual subscription',
  'Audit trail',
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: "We offer a free 30-minute demo. Because every implementation is tailored, we don't offer a generic free tier.",
  },
  {
    q: 'How long does setup take?',
    a: 'Most customers are fully onboarded within two weeks.',
  },
  {
    q: 'What is included?',
    a: 'Everything listed: full platform access, all reporting modules, dedicated support. No module upsells.',
  },
  {
    q: 'Can I cancel?',
    a: 'Yes. Subscriptions run annually. We export all your data when you leave so you are never locked in.',
  },
  {
    q: 'Do you offer an NGO discount?',
    a: 'Yes — non-profits receive a 25% discount. Mention it during your demo call.',
  },
  {
    q: 'Is my data secure?',
    a: 'All data is encrypted at rest and in transit, hosted on EU infrastructure (AWS eu-west-1). Your data is never sold or shared.',
  },
];

function CheckIcon({ orange }: { orange?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0, marginTop: 1 }}
    >
      <path
        d="M5 12l4 4 10-10"
        stroke={orange ? '#F5A623' : '#D1D5DB'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0, marginTop: 1 }}
    >
      <path d="M8 12h8" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {faqs.map(({ q, a }, i) => (
        <div
          key={q}
          style={{
            borderBottom: '1px solid #E5E7EB',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: 16,
            }}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#1A1A2E',
                lineHeight: 1.4,
              }}
            >
              {q}
            </span>
            <span
              style={{
                flexShrink: 0,
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: open === i ? '#FFF7ED' : '#F9FAFB',
                border: '1px solid',
                borderColor: open === i ? '#FED7AA' : '#E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d={open === i ? 'M2 7l4-4 4 4' : 'M2 5l4 4 4-4'}
                  stroke={open === i ? '#F5A623' : '#6B7280'}
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          {open === i && (
            <p
              style={{
                fontSize: 15,
                color: '#6B7280',
                lineHeight: 1.7,
                margin: '0 0 20px',
                paddingRight: 40,
              }}
            >
              {a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <Nav lang="en" />

      <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF' }}>

        {/* HERO */}
        <section
          style={{
            backgroundColor: '#FFFFFF',
            padding: 'clamp(56px, 10vw, 88px) 24px clamp(48px, 8vw, 80px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Orange glow — top right */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 360,
              height: 360,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245,166,35,0.10) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          {/* Orange glow — bottom left */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: -60,
              left: -60,
              width: 280,
              height: 280,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#FFF7ED',
                border: '1px solid #FED7AA',
                borderRadius: 20,
                padding: '5px 14px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F5A623',
                marginBottom: 20,
              }}
            >
              Plans &amp; Pricing
            </div>

            <h1
              style={{
                fontSize: 'clamp(28px, 6vw, 46px)',
                fontWeight: 800,
                lineHeight: 1.15,
                maxWidth: 640,
                margin: '0 auto 20px',
                background: 'linear-gradient(135deg, #F5A623, #E8831A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Priced for your business, not a Fortune 500 compliance team
            </h1>

            <p
              style={{
                fontSize: 18,
                color: '#6B7280',
                maxWidth: 520,
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              Transparent, needs-based pricing. You pay for what you actually need — not for modules
              your ESG consultant invented.
            </p>
          </div>
        </section>

        {/* VALUE COMPARISON */}
        <section
          style={{
            backgroundColor: '#FFFFFF',
            padding: '72px 24px',
            borderTop: '1px solid #E5E7EB',
          }}
        >
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(22px, 4vw, 30px)',
                fontWeight: 800,
                color: '#1A1A2E',
                textAlign: 'center',
                marginBottom: 12,
              }}
            >
              What are your options?
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: '#6B7280',
                fontSize: 16,
                marginBottom: 52,
                lineHeight: 1.5,
              }}
            >
              Most SMBs choose between three paths. Here is how they compare.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 20,
                alignItems: 'start',
              }}
            >
              {/* DIY Spreadsheet */}
              <div
                style={{
                  backgroundColor: '#FAFAFA',
                  borderRadius: 12,
                  border: '1px solid #E5E7EB',
                  padding: '28px 24px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#9CA3AF',
                    marginBottom: 8,
                  }}
                >
                  Option A
                </p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: '#1A1A2E',
                    marginBottom: 20,
                  }}
                >
                  DIY Spreadsheet
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  {[
                    '80+ internal hours',
                    '3–6 months timeline',
                    'No GHG Protocol compliance',
                    'Not reusable next year',
                    'No customer-ready output',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 14,
                        color: '#6B7280',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                      }}
                    >
                      <DashIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CO2 Expert — RECOMMENDED */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 12,
                  border: '2px solid #F5A623',
                  padding: '28px 24px',
                  boxShadow: '0 4px 20px rgba(245,166,35,0.12)',
                  position: 'relative',
                }}
              >
                {/* Top orange bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    backgroundColor: '#F5A623',
                    borderRadius: '10px 10px 0 0',
                  }}
                />
                {/* RECOMMENDED badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: -13,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#F5A623',
                    color: '#FFFFFF',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '4px 14px',
                    borderRadius: 20,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Recommended
                </div>

                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#F5A623',
                    marginBottom: 8,
                    marginTop: 8,
                  }}
                >
                  Option B
                </p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: '#1A1A2E',
                    marginBottom: 20,
                  }}
                >
                  CO₂ Expert
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  {[
                    'Fair annual subscription',
                    '2-week setup',
                    'GHG Protocol compliant',
                    'Reusable every year',
                    'Customer-ready PDF report',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 14,
                        color: '#374151',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        fontWeight: 500,
                      }}
                    >
                      <CheckIcon orange />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enterprise tools */}
              <div
                style={{
                  backgroundColor: '#FAFAFA',
                  borderRadius: 12,
                  border: '1px solid #E5E7EB',
                  padding: '28px 24px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#9CA3AF',
                    marginBottom: 8,
                  }}
                >
                  Option C
                </p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: '#1A1A2E',
                    marginBottom: 20,
                  }}
                >
                  Enterprise Tools
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  {[
                    '€50,000+/year',
                    '6+ months to implement',
                    'Designed for Fortune 500',
                    'Requires dedicated ESG team',
                    'Complex broker integrations',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 14,
                        color: '#6B7280',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                      }}
                    >
                      <DashIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section
          style={{
            backgroundColor: '#FAFAFA',
            padding: '72px 24px',
            borderTop: '1px solid #E5E7EB',
            borderBottom: '1px solid #E5E7EB',
          }}
        >
          <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontSize: 'clamp(22px, 4vw, 30px)',
                fontWeight: 800,
                color: '#1A1A2E',
                marginBottom: 12,
              }}
            >
              Everything included
            </h2>
            <p
              style={{
                color: '#6B7280',
                fontSize: 16,
                marginBottom: 44,
                lineHeight: 1.5,
              }}
            >
              Every plan includes the full feature set. No module upsells, no surprise add-ons.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
                gap: 12,
              }}
            >
              {features.map((f) => (
                <div
                  key={f}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 16px',
                    borderRadius: 10,
                    backgroundColor: '#FFF7ED',
                    border: '1px solid #FED7AA',
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #FED7AA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5.5L4 7.5L8.5 3"
                        stroke="#F5A623"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING APPROACH */}
        <section
          style={{
            backgroundColor: '#FFFFFF',
            padding: '80px 24px',
          }}
        >
          <div
            style={{
              maxWidth: 680,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(22px, 4vw, 30px)',
                fontWeight: 800,
                color: '#1A1A2E',
                marginBottom: 20,
              }}
            >
              How our pricing works
            </h2>
            <p
              style={{
                fontSize: 17,
                color: '#4B5563',
                lineHeight: 1.75,
                marginBottom: 16,
              }}
            >
              We price based on your company size and the number of locations you measure. No hidden
              fees. No module upsells. No per-user seat costs.
            </p>
            <p
              style={{
                fontSize: 17,
                color: '#4B5563',
                lineHeight: 1.75,
                marginBottom: 12,
              }}
            >
              Most SMBs get started from{' '}
              <strong style={{ color: '#1A1A2E' }}>€2,500/year</strong>. Request a quote for your
              exact situation and we will respond within one business day.
            </p>
            <p
              style={{
                fontSize: 17,
                color: '#4B5563',
                lineHeight: 1.75,
                marginBottom: 44,
              }}
            >
              Most customers have a complete Scope 1, 2 &amp; 3 report ready to share{' '}
              <strong style={{ color: '#1A1A2E' }}>within 2 weeks</strong> of signup.
            </p>

            <a
              href="/contact"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #F5A623, #E8831A)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: 16,
                padding: '15px 36px',
                borderRadius: 10,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                boxShadow: '0 4px 14px rgba(245,166,35,0.30)',
              }}
            >
              Get a tailored quote
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E5E7EB',
            padding: '80px 24px',
          }}
        >
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(22px, 4vw, 30px)',
                fontWeight: 800,
                color: '#1A1A2E',
                textAlign: 'center',
                marginBottom: 48,
              }}
            >
              Frequently asked questions
            </h2>
            <FaqAccordion />
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            backgroundColor: '#FFF7ED',
            borderTop: '1px solid #FED7AA',
            padding: '80px 24px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 540, margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 4.5vw, 34px)',
                fontWeight: 800,
                color: '#1A1A2E',
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Ready to see your footprint?
            </h2>
            <p
              style={{
                fontSize: 17,
                color: '#6B7280',
                lineHeight: 1.65,
                marginBottom: 36,
              }}
            >
              Book a free 30-minute call. We will walk through your situation and give you an honest
              assessment — no sales pressure.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #F5A623, #E8831A)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: 16,
                padding: '15px 36px',
                borderRadius: 10,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                boxShadow: '0 4px 14px rgba(245,166,35,0.30)',
              }}
            >
              Book a free call
            </a>
          </div>
        </section>

      </main>

      <Footer lang="en" />
    </>
  );
}
