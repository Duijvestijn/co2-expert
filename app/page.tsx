import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CO₂ Expert — Carbon Footprint Measurement for Business',
  description:
    'Your customers are asking for your CO2 data. CO₂ Expert helps SMBs measure Scope 1, 2 & 3 emissions and deliver a GHG Protocol-compliant report — in days, not months.',
}

const ORANGE = '#F5A623'
const DARK   = '#1A1A2E'
const GREY   = '#6B7280'
const BORDER = '#E5E7EB'
const LIGHT  = '#F9FAFB'

// ── Inline SVG helpers ────────────────────────────────────────────────────────
function Icon({ d, size = 20, color = 'currentColor', strokeWidth = 2 }: {
  d: string; size?: number; color?: string; strokeWidth?: number
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d={d}/>
    </svg>
  )
}

function Check({ color = '#059669' }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12l4 4 10-10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Cross() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

function Dash() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: DARK }}>
      <Nav lang="en" />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(150deg, #0f1922 0%, ${DARK} 60%, #1a1f2e 100%)`,
        color: '#fff',
        padding: '120px 24px 96px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle background texture */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle at 20% 50%, #F5A623 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3B82F6 0%, transparent 40%)',
          pointerEvents: 'none',
        }}/>

        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', position: 'relative' }}>

          {/* Category label */}
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
            marginBottom: 28,
          }}>
            Carbon footprint measurement &nbsp;·&nbsp; Scope 1, 2 &amp; 3 &nbsp;·&nbsp; GHG Protocol
          </p>

          <h1 style={{
            fontSize: 'clamp(34px, 5.5vw, 62px)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.025em', margin: '0 0 28px',
          }}>
            Your customers are already{' '}
            <span style={{ color: ORANGE }}>asking for your CO₂ data.</span>
            <br />Do you have it?
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7, maxWidth: 620,
            margin: '0 auto 40px',
          }}>
            Large companies must now report their supply chain emissions under EU law.
            That means they need your numbers — and if you cannot provide them, you risk losing the contract.
            CO₂ Expert gives SMBs a complete, verified carbon footprint in days.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: ORANGE, color: '#fff', fontWeight: 700,
              fontSize: 16, padding: '14px 28px', borderRadius: 8, textDecoration: 'none',
            }}>
              Book a free 30-minute demo
              <Icon d="M5 12h14M12 5l7 7-7 7" size={16} color="#fff"/>
            </a>
            <a href="/how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)',
              fontWeight: 600, fontSize: 16, padding: '14px 28px',
              borderRadius: 8, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
            }}>
              See how it works
            </a>
          </div>

          {/* Three outcome chips */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              'Full Scope 1, 2 & 3 measurement',
              'GHG Protocol compliant reports',
              'Ready to share with any customer',
            ].map(t => (
              <span key={t} style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 6, padding: '6px 14px',
                fontSize: 13, color: 'rgba(255,255,255,0.6)',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l4 4 10-10" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. THE REAL SITUATION ────────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: ORANGE,
            marginBottom: 16, textAlign: 'center',
          }}>What is actually happening right now</p>

          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800,
            color: '#fff', textAlign: 'center', marginBottom: 14,
            letterSpacing: '-0.02em', lineHeight: 1.25,
          }}>
            Large companies must now report their suppliers&apos; emissions.
            <br/><span style={{ color: ORANGE }}>That means yours.</span>
          </h2>

          <p style={{
            textAlign: 'center', color: 'rgba(255,255,255,0.5)',
            fontSize: 17, marginBottom: 56, maxWidth: 580,
            margin: '0 auto 56px', lineHeight: 1.65,
          }}>
            Under EU law, large companies must include their supply chain&apos;s CO₂ emissions in their annual report.
            The Dutch Chamber of Commerce states it plainly:
          </p>

          {/* KVK Quote */}
          <blockquote style={{
            background: 'rgba(245,166,35,0.07)',
            border: '1px solid rgba(245,166,35,0.2)',
            borderLeft: `3px solid ${ORANGE}`,
            borderRadius: 10, padding: '20px 28px',
            maxWidth: 680, margin: '0 auto 56px',
          }}>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontStyle: 'italic' }}>
              &ldquo;Large businesses are required to report on the sustainability of their suppliers.
              <strong style={{ color: '#fff', fontStyle: 'normal' }}> Expect questions from larger businesses that buy your products.</strong>&rdquo;
            </p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 12, fontStyle: 'normal' }}>
              KVK — Dutch Chamber of Commerce, 2026
            </p>
          </blockquote>

          {/* Three scenarios */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}>
            {[
              {
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                title: 'The questionnaire arrives',
                body: 'Your key account sends a sustainability form. Line 12: "Please provide your Scope 1 and 2 emissions for the past financial year." You have no data.',
              },
              {
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0',
                title: 'The deadline is real',
                body: 'Your customer has a reporting deadline. They need your numbers to complete their own EU disclosure. "We will have to find an alternative supplier" is a real sentence.',
              },
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'The ones with data win',
                body: 'Businesses that can answer the CO₂ question close faster, qualify for more tenders, and are harder to replace. A verified footprint is now a commercial asset.',
              },
            ].map(card => (
              <div key={card.title} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12, padding: '24px',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'rgba(245,166,35,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: ORANGE, marginBottom: 16,
                }}>
                  <Icon d={card.icon} size={20} color={ORANGE}/>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE SOLUTION ──────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '88px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: ORANGE,
            marginBottom: 16, textAlign: 'center',
          }}>How CO₂ Expert works</p>
          <h2 style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800,
            textAlign: 'center', marginBottom: 14,
            letterSpacing: '-0.02em', lineHeight: 1.25,
          }}>
            From zero data to a verified carbon report.<br/>
            <span style={{ color: ORANGE }}>In days, not months.</span>
          </h2>
          <p style={{
            textAlign: 'center', color: GREY, fontSize: 17,
            marginBottom: 64, maxWidth: 560, margin: '0 auto 64px', lineHeight: 1.65,
          }}>
            No consultant required. No months of internal project work.
            You upload what you have — we calculate the rest.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 2,
          }}>
            {[
              {
                n: '01',
                icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
                title: 'Upload your data',
                body: 'Import energy bills, fuel usage, travel records and other operational data via Excel, CSV, or by connecting your accounting software. Takes an afternoon, not a quarter.',
                detail: 'Supports Excel, CSV, Google Sheets, Exact Online',
              },
              {
                n: '02',
                icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z',
                title: 'We calculate Scope 1, 2 & 3',
                body: 'Our platform applies GHG Protocol emission factors to your data and produces a complete footprint — direct emissions, energy use, and supply chain — categorised and explainable.',
                detail: 'GHG Protocol · ISO 14064 · CSRD/ESRS aligned',
              },
              {
                n: '03',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                title: 'You get a report you can share',
                body: 'Download a structured PDF report, ready to send to any customer, bank, or procurement team. Includes methodology, assumptions, data sources and totals per scope.',
                detail: 'PDF · Excel export · Shareable link',
              },
              {
                n: '04',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                title: 'Track progress year on year',
                body: 'Return next year with updated data and immediately see where your emissions went up or down. Set targets. Show improvement. That is what customers and banks increasingly ask for.',
                detail: 'Multi-year comparison · Target setting · Progress dashboard',
              },
            ].map((step, i) => (
              <div key={step.n} style={{
                background: i % 2 === 0 ? '#FAFAFA' : '#fff',
                border: `1px solid ${BORDER}`,
                borderRadius: 12, padding: '28px 24px',
                display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 800, color: ORANGE,
                    letterSpacing: '0.05em',
                  }}>{step.n}</span>
                  <div style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: '#FFF7ED', border: '1px solid #FED7AA',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon d={step.icon} size={18} color={ORANGE}/>
                  </div>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: DARK, margin: 0 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: GREY, lineHeight: 1.65, margin: 0 }}>
                  {step.body}
                </p>
                <p style={{
                  fontSize: 11, color: '#9CA3AF', fontWeight: 600,
                  letterSpacing: '0.02em', margin: 0,
                  borderTop: `1px solid ${BORDER}`, paddingTop: 12,
                }}>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT SCOPE 1, 2, 3 ACTUALLY MEANS ────────────────────────────── */}
      <section style={{ background: LIGHT, padding: '80px 24px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: ORANGE,
            marginBottom: 16, textAlign: 'center',
          }}>What your customer is actually asking for</p>

          <h2 style={{
            fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800,
            textAlign: 'center', marginBottom: 12, letterSpacing: '-0.02em',
          }}>
            Scope 1, 2 &amp; 3 — in plain language
          </h2>
          <p style={{
            textAlign: 'center', color: GREY, fontSize: 16,
            maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.65,
          }}>
            When your customer sends a sustainability questionnaire, they are asking for specific numbers.
            Here is what each category covers for a typical SMB.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            {[
              {
                scope: 'Scope 1', label: 'Direct emissions', color: '#DC2626', bg: '#FEF2F2',
                icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
                items: ['Company vehicles', 'Heating systems (gas/oil)', 'On-site combustion', 'Refrigerants and gas leaks'],
                example: 'A delivery van driving 80,000 km/year produces roughly 12 tonnes of CO₂.',
              },
              {
                scope: 'Scope 2', label: 'Purchased energy', color: '#2563EB', bg: '#EFF6FF',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                items: ['Electricity consumption', 'District heating or cooling', 'Steam purchased from utilities'],
                example: 'An office using 40,000 kWh/year in the Netherlands produces approximately 10 tonnes of CO₂.',
              },
              {
                scope: 'Scope 3', label: 'Value chain emissions', color: '#059669', bg: '#ECFDF5',
                icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9',
                items: ['Business travel (flights, trains)', 'Employee commuting', 'Purchased goods and services', 'Waste and logistics'],
                example: 'Often the largest scope. A company spending €2M on goods may have 400+ tonnes of CO₂ in its supply chain.',
              },
            ].map(s => (
              <div key={s.scope} style={{
                background: '#fff', border: `1px solid ${BORDER}`,
                borderRadius: 12, padding: '24px', borderTop: `3px solid ${s.color}`,
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: s.bg, borderRadius: 6, padding: '4px 10px',
                  marginBottom: 14,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d={s.icon} stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: 12, fontWeight: 800, color: s.color }}>
                    {s.scope} — {s.label}
                  </span>
                </div>
                <ul style={{ margin: '0 0 16px', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 14, color: '#374151' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                        <path d="M5 12l4 4 10-10" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{
                  fontSize: 12, color: '#6B7280', lineHeight: 1.6,
                  borderTop: `1px solid ${BORDER}`, paddingTop: 12, margin: 0,
                }}>
                  {s.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CO2 DATA MATTERS COMMERCIALLY ─────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <p style={{
                fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: ORANGE, marginBottom: 16,
              }}>Why this matters for your business</p>
              <h2 style={{
                fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800,
                marginBottom: 20, letterSpacing: '-0.02em', lineHeight: 1.3,
              }}>
                CO₂ data is becoming a condition for doing business
              </h2>
              <p style={{ fontSize: 16, color: GREY, lineHeight: 1.7, marginBottom: 28 }}>
                Procurement departments at large companies are adding sustainability requirements to their supplier criteria.
                Businesses that cannot answer CO₂ questions are being replaced by those that can.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0', text: 'Win tenders that require emissions documentation' },
                  { icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3', text: 'Meet bank and financing sustainability criteria' },
                  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', text: 'Respond to customer questionnaires with verified data, not estimates' },
                  { icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', text: 'Track your reduction progress — required by most corporate procurement standards from 2026 onward' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                      background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon d={item.icon} size={15} color={ORANGE}/>
                    </div>
                    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  stat: '1,000+',
                  label: 'employees',
                  desc: 'Threshold above which EU companies must now report their supply chain emissions under the Omnibus I Directive (March 2026). Their reports include your numbers.',
                  source: 'Source: EU Omnibus I Directive, March 2026',
                },
                {
                  stat: 'Scope 3',
                  label: 'largest category',
                  desc: 'For most large companies, over 70% of their total emissions come from their supply chain — which means from businesses like yours.',
                  source: 'Source: GHG Protocol Corporate Standard',
                },
                {
                  stat: '2 weeks',
                  label: 'average time to first report',
                  desc: 'From first login to a shareable GHG Protocol-compliant report. No consultants. No months-long implementation project.',
                  source: 'Based on CO₂ Expert platform onboarding data',
                },
              ].map(s => (
                <div key={s.stat} style={{
                  background: LIGHT, border: `1px solid ${BORDER}`,
                  borderRadius: 12, padding: '20px 22px',
                  borderLeft: `3px solid ${ORANGE}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 28, fontWeight: 800, color: DARK }}>{s.stat}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: GREY, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {s.label}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: GREY, lineHeight: 1.6, margin: '0 0 8px' }}>{s.desc}</p>
                  <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>{s.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. COMPARISON ────────────────────────────────────────────────────── */}
      <section style={{ background: LIGHT, padding: '80px 24px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800,
            textAlign: 'center', marginBottom: 12, letterSpacing: '-0.02em',
          }}>
            Why not a spreadsheet or a consultant?
          </h2>
          <p style={{
            textAlign: 'center', color: GREY, fontSize: 16,
            maxWidth: 500, margin: '0 auto 48px', lineHeight: 1.65,
          }}>
            Most businesses try one of three approaches. Here is what actually happens.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560, fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${BORDER}` }}>
                  {['', 'DIY spreadsheet', 'Hire a consultant', 'CO₂ Expert'].map((h, i) => (
                    <th key={h} style={{
                      padding: '12px 16px', textAlign: i === 0 ? 'left' : 'center',
                      fontSize: 12, fontWeight: 700, color: i === 3 ? ORANGE : GREY,
                      letterSpacing: '0.05em', textTransform: 'uppercase',
                      background: i === 3 ? '#FFF7ED' : 'transparent',
                      borderRadius: i === 3 ? '8px 8px 0 0' : 0,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Time to first report', '3–6 months', '6–12 weeks', '2 weeks'],
                  ['Scope 1, 2 & 3 covered', 'yes', 'yes', 'yes'],
                  ['GHG Protocol compliant', 'no', 'yes', 'yes'],
                  ['Reusable next year', 'no', 'no', 'yes'],
                  ['Typical cost', '80+ internal hours', '€8,000–€25,000', 'Annual subscription'],
                  ['Shareable with customers', 'no', 'yes', 'yes'],
                ].map(([label, a, b, c]) => {
                  const render = (v: string) => {
                    if (v === 'yes') return <Check/>
                    if (v === 'no') return <Cross/>
                    return <span style={{ color: DARK, fontWeight: 500 }}>{v}</span>
                  }
                  return (
                    <tr key={label} style={{ borderBottom: `1px solid ${BORDER}` }}>
                      <td style={{ padding: '14px 16px', color: '#374151', fontWeight: 500 }}>{label}</td>
                      <td style={{ padding: '14px 16px', textAlign: 'center' }}>{render(a)}</td>
                      <td style={{ padding: '14px 16px', textAlign: 'center' }}>{render(b)}</td>
                      <td style={{ padding: '14px 16px', textAlign: 'center', background: '#FFF7ED' }}>{render(c)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 7. STANDARDS ─────────────────────────────────────────────────────── */}
      <section style={{
        background: '#fff', padding: '48px 24px',
        borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: GREY, marginBottom: 24,
          }}>
            Compliant with the standards your customers expect
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { name: 'GHG Protocol',  color: '#065F46', bg: '#ECFDF5' },
              { name: 'ISO 14064',     color: '#1D4ED8', bg: '#EFF6FF' },
              { name: 'CSRD / ESRS',   color: '#6D28D9', bg: '#F5F3FF' },
              { name: 'VSME Standard', color: '#92400E', bg: '#FFFBEB' },
            ].map(cert => (
              <span key={cert.name} style={{
                background: cert.bg, border: `1px solid ${cert.color}25`,
                borderRadius: 8, padding: '8px 18px',
                fontSize: 13, fontWeight: 700, color: cert.color,
              }}>
                {cert.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: ORANGE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800,
            color: '#fff', marginBottom: 16, letterSpacing: '-0.02em',
          }}>
            Your next customer questionnaire is coming.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', marginBottom: 36, lineHeight: 1.65 }}>
            Book a free 30-minute call. We show you exactly what your footprint looks like
            and how to get a report ready before your customer asks.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: ORANGE,
              fontWeight: 700, fontSize: 16,
              padding: '14px 28px', borderRadius: 8, textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
            }}>
              Book a free demo
              <Icon d="M5 12h14M12 5l7 7-7 7" size={16} color={ORANGE}/>
            </a>
            <a href="/how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: 'rgba(255,255,255,0.9)',
              fontWeight: 600, fontSize: 16,
              padding: '14px 28px', borderRadius: 8, textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.5)',
            }}>
              See how it works first
            </a>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}
