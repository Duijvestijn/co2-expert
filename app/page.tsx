import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'co2.expert — Measure it. Fix it. Prove it.',
  description:
    'The only carbon platform where measurement, reduction, and certified offsetting are one. Built for SMBs. Powered by Green Earth Group (EARTH).',
}

const ORANGE = '#F5A623'
const DARK = '#1A1A2E'
const DARK_GREEN = '#0D2B1F'
const LIGHT_GREEN = '#EEF7F0'
const LIGHT_GREY = '#F9FAFB'
const GREY = '#6B7280'
const BORDER = '#E5E7EB'

function PainIcon({ d }: { d: string }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>
}

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: DARK }}>
      <Nav lang="en" />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, #2D2D5E 100%)`,
          color: '#fff',
          padding: '112px 24px 100px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {/* Trust badge */}
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(245,166,35,0.15)',
              color: ORANGE,
              border: '1px solid rgba(245,166,35,0.4)',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.04em',
              padding: '5px 16px',
              marginBottom: 32,
            }}
          >
            Powered by Green Earth Group &nbsp;·&nbsp;{' '}
            <span style={{ opacity: 0.8 }}>EARTH</span>
          </span>

          <h1
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 24px',
              letterSpacing: '-0.02em',
            }}
          >
            Measure it.{' '}
            <span style={{ color: ORANGE }}>Fix it.</span>{' '}
            Prove it.
          </h1>

          <p
            style={{
              fontSize: 'clamp(17px, 2.2vw, 21px)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.65,
              margin: '0 auto 40px',
              maxWidth: 600,
            }}
          >
            The only carbon platform where measurement, reduction, and certified
            offsetting are one. Built for businesses like yours.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                background: ORANGE,
                color: '#fff',
                fontWeight: 700,
                fontSize: 16,
                padding: '14px 32px',
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              Request a demo →
            </a>
            <a
              href="https://app.co2.expert/login"
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '14px 32px',
                borderRadius: 8,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              Start for free
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. CERTIFICATIONS BAR ───────────────────────────────────────────── */}
      <section
        style={{
          background: LIGHT_GREY,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: '36px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: GREY,
            marginBottom: 24,
          }}
        >
          Certified &amp; compliant with leading standards
        </p>
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {[
            { name: 'GHG Protocol',   color: '#1a7a4a', bg: '#e6f4ee' },
            { name: 'ISO 14064',      color: '#1d4ed8', bg: '#eff6ff' },
            { name: 'Verra VCS',      color: '#047857', bg: '#ecfdf5' },
            { name: 'Gold Standard',  color: '#b45309', bg: '#fffbeb' },
            { name: 'CSRD / ESRS',    color: '#7c3aed', bg: '#f5f3ff' },
            { name: 'Green Earth Group', color: '#01321F', bg: '#f0f9f4' },
          ].map((cert) => (
            <span
              key={cert.name}
              style={{
                background: cert.bg,
                border: `1px solid ${cert.color}30`,
                borderRadius: 8,
                padding: '8px 20px',
                fontSize: 13,
                fontWeight: 700,
                color: cert.color,
                letterSpacing: '0.01em',
              }}
            >
              {cert.name}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. PROBLEM ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: DARK,
          color: '#fff',
          padding: '96px 24px',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            Carbon reporting is complex.
            <br />
            <span style={{ color: ORANGE }}>Most tools make it worse.</span>
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.58)',
              fontSize: 17,
              marginBottom: 56,
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Here is what businesses like yours run into — and why we built something different.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
                title: 'Enterprise pricing for enterprise problems',
                body:
                  'Tools like Watershed and Persefoni cost €50,000+/year. They are designed for Fortune 500 compliance teams — not a 40-person manufacturing company or a regional logistics firm.',
              },
              {
                icon: 'M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0',
                title: 'Measurement without a next step',
                body:
                  'Greenly, Plan A, and Normative measure your footprint well. Then they hand you a PDF and leave. Knowing your emissions and doing something about them are two different things.',
              },
              {
                icon: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
                title: 'Broker credits with no traceability',
                body:
                  'Most offset marketplaces resell credits from third parties. No direct link to the underlying project. No certificate with your company name. No way to prove anything to a client or auditor.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: '32px 28px',
                }}
              >
                <div style={{ marginBottom: 16 }}><PainIcon d={card.icon} /></div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.58)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SOLUTION (3-step) ────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 940, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            One platform. The full loop.
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: GREY,
              fontSize: 17,
              marginBottom: 64,
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            co2.expert takes you from first measurement to carbon-neutral certificate
            — without switching tools or vendors.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 40,
            }}
          >
            {[
              {
                step: '01',
                label: 'Measure',
                heading: 'Full Scope 1, 2 & 3 in one dashboard',
                body:
                  'Connect your data sources once. Get a GHG Protocol-compliant footprint broken down by category, site, and activity — automatically updated as you add data.',
              },
              {
                step: '02',
                label: 'Reduce',
                heading: 'Science-based targets with year-on-year tracking',
                body:
                  'Set reduction targets aligned with the Paris Agreement. Track progress across departments. See exactly what is working and where to focus next.',
              },
              {
                step: '03',
                label: 'Offset',
                heading: 'Certified credits from our own verified projects',
                body:
                  'Buy offset credits directly from Green Earth Group\'s reforestation and cookstove projects. Receive a signed, named carbon-neutral certificate with project details.',
              },
            ].map((item) => (
              <div key={item.step}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 52,
                    height: 52,
                    borderRadius: 999,
                    background: ORANGE,
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 17,
                    marginBottom: 20,
                  }}
                >
                  {item.step}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: ORANGE,
                    margin: '0 0 8px',
                  }}
                >
                  {item.label}
                </p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  {item.heading}
                </h3>
                <p style={{ fontSize: 15, color: GREY, lineHeight: 1.7, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. DIFFERENTIATOR TABLE ─────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: LIGHT_GREY }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            The only platform that closes the full loop
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: GREY,
              fontSize: 17,
              marginBottom: 48,
            }}
          >
            Compare what you actually get.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                fontSize: 15,
              }}
            >
              <thead>
                <tr style={{ background: DARK, color: '#fff' }}>
                  <th
                    style={{
                      padding: '18px 24px',
                      textAlign: 'left',
                      fontWeight: 700,
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: '18px 20px',
                      textAlign: 'center',
                      fontWeight: 700,
                      color: ORANGE,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    co2.expert
                  </th>
                  <th
                    style={{
                      padding: '18px 20px',
                      textAlign: 'center',
                      fontWeight: 600,
                      opacity: 0.65,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Enterprise tools
                  </th>
                  <th
                    style={{
                      padding: '18px 20px',
                      textAlign: 'center',
                      fontWeight: 600,
                      opacity: 0.65,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Measurement-only
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Scope 1, 2 & 3 measurement', 'yes', 'yes', 'yes'],
                  ['Certified offset credits', 'yes', 'yes', 'no'],
                  ['Own verified projects', 'yes', 'no', 'no'],
                  ['CSRD-ready reports', 'yes', 'yes', 'partial'],
                  ['Built for SMBs — fair pricing', 'yes', 'no — €50K+/yr', 'partial'],
                ].map(([feature, a, b, c], i) => {
                  function CellIcon({ val }: { val: string }) {
                    if (val === 'yes') return <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 8l3 3 6-6" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
                    if (val === 'partial') return <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 8h8" stroke="#D97706" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
                    if (val === 'no') return <svg width="16" height="16" viewBox="0 0 16 16"><path d="M5 5l6 6M11 5l-6 6" stroke="#DC2626" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
                    // val starts with 'no — ...'
                    const parts = val.split(' — ')
                    return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><svg width="16" height="16" viewBox="0 0 16 16"><path d="M5 5l6 6M11 5l-6 6" stroke="#DC2626" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg><span style={{ fontSize: 13, color: '#DC2626' }}>{parts[1]}</span></span>
                  }
                  return (
                  <tr
                    key={String(feature)}
                    style={{
                      background: i % 2 === 0 ? '#fff' : LIGHT_GREY,
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <td style={{ padding: '16px 24px', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      <CellIcon val={String(a)} />
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      <CellIcon val={String(b)} />
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      <CellIcon val={String(c)} />
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 6. CSRD ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: LIGHT_GREEN }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#D1FAE5',
              color: '#065F46',
              border: '1px solid #6EE7B7',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '5px 16px',
              marginBottom: 24,
            }}
          >
            EU regulation
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}
          >
            CSRD is coming for your business
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#374151',
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            The EU Corporate Sustainability Reporting Directive (CSRD) will require
            thousands of SMBs to disclose their carbon footprint — starting from 2026
            for companies with over 250 employees, and phasing down from there.
            Non-compliance risks supply chain exclusion, financing difficulties, and
            regulatory penalties.
          </p>
          <p
            style={{
              fontSize: 17,
              color: '#374151',
              lineHeight: 1.7,
            }}
          >
            co2.expert generates CSRD-aligned sustainability reports in the required
            format. When your auditor or enterprise customer asks for documentation,
            you hand them a verified report — not a spreadsheet.
          </p>
        </div>
      </section>

      {/* ── 7. CARBON PROJECTS ──────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: DARK_GREEN }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              color: '#fff',
              marginBottom: 12,
            }}
          >
            Offset credits from projects we own
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.58)',
              fontSize: 17,
              marginBottom: 56,
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Every credit is traceable to a specific Green Earth Group project —
            independently verified under Verra VCS or Gold Standard.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                name: 'Greenzone Reforestation',
                country: 'Cameroon',
                price: '€35 / credit',
                standard: 'Verra VCS',
                icon: 'M12 22V12M12 12C12 12 7 8 7 5a5 5 0 0 1 10 0c0 3-5 7-5 7z',
              },
              {
                name: 'Bulindi Agroforestry',
                country: 'Uganda',
                price: '€40 / credit',
                standard: 'Gold Standard',
                icon: 'M12 22V12M12 12C12 12 7 8 7 5a5 5 0 0 1 10 0c0 3-5 7-5 7z',
              },
              {
                name: 'Hongera Cookstoves',
                country: 'Kenya',
                price: '€14 / credit',
                standard: 'Gold Standard',
                icon: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z',
              },
              {
                name: 'Lake Aral Afforestation',
                country: 'Kazakhstan',
                price: '€30 / credit',
                standard: 'Verra VCS',
                icon: 'M12 22V12M12 12C12 12 7 8 7 5a5 5 0 0 1 10 0c0 3-5 7-5 7z',
              },
            ].map((project) => (
              <div
                key={project.name}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 12,
                  padding: '28px 24px',
                  color: '#fff',
                }}
              >
                <div style={{ marginBottom: 16 }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={project.icon}/></svg></div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>
                  {project.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 20,
                  }}
                >
                  {project.country}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: 16,
                  }}
                >
                  <span
                    style={{
                      background: ORANGE,
                      color: '#fff',
                      fontSize: 13,
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 6,
                    }}
                  >
                    {project.price}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.45)',
                      fontWeight: 600,
                    }}
                  >
                    {project.standard}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: 56,
            }}
          >
            What our customers say
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 28,
            }}
          >
            {[
              {
                quote:
                  'We had looked at two other platforms before. Both gave us a number and nothing else. co2.expert was the first tool that actually told us what to do next — and let us prove it to our clients.',
                name: 'M. de Vries',
                title: 'CEO, Dutch manufacturing company',
              },
              {
                quote:
                  'Our bank started asking for carbon documentation as part of the sustainability review. co2.expert got us a proper CSRD-aligned report in two weeks. That would have taken us months on our own.',
                name: 'T. Baas',
                title: 'CFO, Regional logistics firm',
              },
              {
                quote:
                  'The offset credits come with a real certificate that names our company and links to the project in Uganda. That is something we can actually show customers — not just a checkbox.',
                name: 'S. Dijkstra',
                title: 'Director, Agricultural business',
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  background: LIGHT_GREY,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: '32px 28px',
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    color: '#374151',
                    lineHeight: 1.75,
                    marginBottom: 24,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p style={{ fontWeight: 700, fontSize: 14, margin: 0 }}>{t.name}</p>
                <p style={{ fontSize: 13, color: GREY, margin: '4px 0 0' }}>{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA BAND ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: ORANGE,
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}
          >
            Book your 30-minute demo.
          </h2>
          <p
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 36,
            }}
          >
            No commitment. We will walk through your specific situation and show
            you exactly how co2.expert fits your business.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                background: '#fff',
                color: ORANGE,
                fontWeight: 700,
                fontSize: 16,
                padding: '14px 36px',
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              Request a demo →
            </a>
            <a
              href="https://app.co2.expert/login"
              style={{
                display: 'inline-block',
                background: 'rgba(0,0,0,0.12)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '14px 36px',
                borderRadius: 8,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              Start for free
            </a>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}
