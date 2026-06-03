import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CO₂ Expert — Carbon Footprint Measurement for Business',
  description:
    'Your customers are asking for your CO2 data. CO₂ Expert helps SMBs measure Scope 1, 2 & 3 emissions and deliver a GHG Protocol-compliant report — in days, not months.',
}

const O  = '#F5A623'   // orange
const OL = '#FFF7ED'   // orange light bg
const OB = '#FED7AA'   // orange border
const D  = '#1A1A2E'   // dark text
const G  = '#6B7280'   // grey
const B  = '#E5E7EB'   // border
const W  = '#FFFFFF'   // white

function Tick({ color = O }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M5 12l4 4 10-10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Icon({ d, size = 20 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d}/>
    </svg>
  )
}

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: D, background: W }}>
      <Nav lang="en" />

      {/* ── HERO — light, orange, tech ────────────────────────────────────── */}
      <section style={{
        background: W,
        paddingTop: 132, paddingBottom: 80, paddingLeft: 24, paddingRight: 24,
        borderBottom: `1px solid ${B}`,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative orange glow */}
        <div style={{
          position: 'absolute', top: -120, right: -120,
          width: 500, height: 500, borderRadius: '50%',
          background: `radial-gradient(circle, ${O}18 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', bottom: -60, left: -60,
          width: 300, height: 300, borderRadius: '50%',
          background: `radial-gradient(circle, ${O}0D 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}/>

        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', position: 'relative' }}>

          {/* Category pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: OL, border: `1px solid ${OB}`,
            borderRadius: 50, padding: '6px 16px', marginBottom: 32,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: O }}/>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#92400E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Carbon Footprint Measurement
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 64px)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em', margin: '0 0 24px', color: D,
          }}>
            Your customers are asking for
            <br/>
            <span style={{
              background: `linear-gradient(135deg, ${O}, #E8831A)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              your CO₂ data.
            </span>
            <br/>Do you have it?
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)', color: G,
            lineHeight: 1.75, maxWidth: 580, margin: '0 auto 40px',
          }}>
            Large companies must now include their suppliers&apos; emissions in their EU annual report.
            CO₂ Expert gives SMBs a complete, verified Scope 1, 2 &amp; 3 footprint — ready to share
            with any customer — in days, not months.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: O, color: W, fontWeight: 700,
              fontSize: 15, padding: '13px 26px', borderRadius: 8, textDecoration: 'none',
              boxShadow: `0 1px 0 rgba(0,0,0,0.08), 0 4px 14px ${O}40`,
            }}>
              Book a free 30-min demo
              <Icon d="M5 12h14M12 5l7 7-7 7" size={15}/>
            </a>
            <a href="/how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: W, color: D, fontWeight: 600,
              fontSize: 15, padding: '13px 26px', borderRadius: 8, textDecoration: 'none',
              border: `1.5px solid ${B}`,
            }}>
              See how it works
            </a>
          </div>

          {/* App screenshot mockup */}
          <div style={{
            background: W, border: `1px solid ${B}`, borderRadius: 16,
            boxShadow: '0 8px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
            overflow: 'hidden', maxWidth: 720, margin: '0 auto',
          }}>
            {/* Browser bar */}
            <div style={{
              background: '#F3F4F6', borderBottom: `1px solid ${B}`,
              padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#F87171','#FBBF24','#34D399'].map(c => (
                  <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }}/>
                ))}
              </div>
              <div style={{
                flex: 1, background: W, borderRadius: 6, padding: '4px 12px',
                fontSize: 12, color: G, border: `1px solid ${B}`, textAlign: 'center',
              }}>
                app.co2.expert
              </div>
            </div>
            {/* Dashboard preview */}
            <div style={{ padding: 20, background: '#FAFBFF' }}>
              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 16 }}>
                {[
                  { l: 'Total Emissions', v: '24.6t', sub: 'CO₂e', c: O },
                  { l: 'Scope 1', v: '8.2t', sub: 'direct', c: '#EF4444' },
                  { l: 'Scope 2', v: '6.1t', sub: 'energy', c: '#3B82F6' },
                  { l: 'Scope 3', v: '10.3t', sub: 'value chain', c: '#10B981' },
                ].map(s => (
                  <div key={s.l} style={{
                    background: W, borderRadius: 10, padding: '12px',
                    border: `1px solid ${B}`, textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 8, color: G, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{s.l}</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: s.c, lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontSize: 9, color: '#9CA3AF', marginTop: 3 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
              {/* Progress bars */}
              <div style={{ background: W, borderRadius: 10, padding: '14px 16px', border: `1px solid ${B}` }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: D, marginBottom: 12 }}>Emissions per scope breakdown</div>
                {[
                  { l: 'Scope 1 — Direct', pct: 33, c: '#EF4444' },
                  { l: 'Scope 2 — Energy', pct: 25, c: '#3B82F6' },
                  { l: 'Scope 3 — Value chain', pct: 42, c: '#10B981' },
                ].map(b => (
                  <div key={b.l} style={{ marginBottom: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: 10, color: G }}>{b.l}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, color: b.c }}>{b.pct}%</span>
                    </div>
                    <div style={{ height: 6, background: '#F3F4F6', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ width: `${b.pct}%`, height: '100%', background: b.c, borderRadius: 4 }}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section style={{ background: W, padding: '36px 24px', borderBottom: `1px solid ${B}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 20 }}>
            Compliant with the standards your customers expect
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { name: 'GHG Protocol',  color: '#065F46', bg: '#ECFDF5' },
              { name: 'ISO 14064',     color: '#1D4ED8', bg: '#EFF6FF' },
              { name: 'CSRD / ESRS',  color: '#6D28D9', bg: '#F5F3FF' },
              { name: 'VSME Standard', color: '#92400E', bg: OL },
            ].map(c => (
              <span key={c.name} style={{
                background: c.bg, border: `1px solid ${c.color}20`,
                borderRadius: 8, padding: '7px 16px',
                fontSize: 12, fontWeight: 700, color: c.color,
              }}>{c.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE REAL SITUATION ── */}
      <section style={{ background: '#FFFBF5', padding: '80px 24px', borderBottom: `1px solid ${OB}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: O, marginBottom: 14 }}>
              What is actually happening
            </p>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 12 }}>
              Large companies must now report their suppliers&apos; emissions.
              <br/><span style={{ color: O }}>That means yours.</span>
            </h2>
            <p style={{ fontSize: 16, color: G, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Under EU law, companies with 1,000+ employees must include their supply chain&apos;s
              CO₂ data in their annual sustainability report. The Dutch Chamber of Commerce is direct:
            </p>
          </div>

          {/* KVK Quote */}
          <div style={{
            background: W, border: `1px solid ${OB}`,
            borderLeft: `4px solid ${O}`, borderRadius: 12,
            padding: '20px 28px', maxWidth: 660, margin: '0 auto 48px',
            boxShadow: '0 2px 12px rgba(245,166,35,0.08)',
          }}>
            <p style={{ fontSize: 16, color: D, lineHeight: 1.7, fontStyle: 'italic' }}>
              &ldquo;Large businesses are required to report on the sustainability of their suppliers.
              <strong style={{ fontStyle: 'normal' }}> Expect questions from larger businesses that buy your products.</strong>&rdquo;
            </p>
            <p style={{ fontSize: 11, color: '#9CA3AF', marginTop: 10 }}>KVK — Dutch Chamber of Commerce, 2026</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              {
                n: '01',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                title: 'The questionnaire arrives',
                body: 'Your account manager at a large customer sends a sustainability form. Line 12: "Please provide your Scope 1 and 2 emissions for the past financial year." You have no data.',
              },
              {
                n: '02',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0',
                title: 'The deadline is real',
                body: 'Your customer has a reporting deadline. They need your numbers for their own EU disclosure. "We will need to find an alternative supplier" is a sentence that has been said.',
              },
              {
                n: '03',
                icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                title: 'The ones with data win',
                body: 'Businesses that can answer the CO₂ question score higher in tenders, qualify for better financing, and are harder to replace. A verified footprint is a commercial asset.',
              },
            ].map(c => (
              <div key={c.n} style={{
                background: W, borderRadius: 12, border: `1px solid ${B}`,
                padding: '24px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: O, letterSpacing: '0.05em' }}>{c.n}</span>
                  <div style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: OL, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: O,
                  }}>
                    <Icon d={c.icon} size={17}/>
                  </div>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: D, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: G, lineHeight: 1.65 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: W, padding: '80px 24px', borderBottom: `1px solid ${B}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: O, marginBottom: 14 }}>
              How CO₂ Expert works
            </p>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 12 }}>
              From zero data to a verified report.
              <span style={{ color: O }}> In days, not months.</span>
            </h2>
            <p style={{ fontSize: 16, color: G, maxWidth: 500, margin: '0 auto' }}>
              No consultant required. No months-long internal project. You upload what you have.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            {[
              { n: '01', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12', title: 'Upload your data', body: 'Energy bills, fuel receipts, travel records. Via Excel, CSV, or your accounting software. Takes an afternoon.', tag: 'Excel · CSV · Exact Online' },
              { n: '02', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'We calculate Scope 1, 2 & 3', body: 'GHG Protocol emission factors applied automatically. Complete footprint, per category, explainable.', tag: 'GHG Protocol · ISO 14064' },
              { n: '03', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'You get a shareable report', body: 'Structured PDF ready to send to any customer, bank, or procurement team. Includes methodology and data sources.', tag: 'PDF · Excel export' },
              { n: '04', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', title: 'Track year on year', body: 'Return next year with updated data. See what changed. Set targets. Show improvement — what customers increasingly ask for.', tag: 'Multi-year · Target setting' },
            ].map((s, i) => (
              <div key={s.n} style={{
                background: i % 2 === 0 ? '#FAFAFA' : W,
                border: `1px solid ${B}`, borderRadius: 12,
                padding: '24px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: OL, border: `1px solid ${OB}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: O,
                    fontSize: 11, fontWeight: 800,
                  }}>{s.n}</div>
                  <div style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: W, border: `1px solid ${B}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: O,
                  }}>
                    <Icon d={s.icon} size={17}/>
                  </div>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: D, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: G, lineHeight: 1.65, marginBottom: 14 }}>{s.body}</p>
                <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, borderTop: `1px solid ${B}`, paddingTop: 10 }}>{s.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCOPE EXPLAINER ── */}
      <section style={{ background: '#FAFAFA', padding: '80px 24px', borderBottom: `1px solid ${B}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: O, marginBottom: 14 }}>
              What your customer is actually asking for
            </p>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Scope 1, 2 &amp; 3 — in plain language
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {[
              { scope: 'Scope 1', label: 'Direct emissions', color: '#EF4444', bg: '#FEF2F2', border: '#FECACA', items: ['Company vehicles', 'Gas heating', 'On-site combustion', 'Refrigerants'], eg: 'A delivery van at 80,000 km/yr ≈ 12 tonnes CO₂' },
              { scope: 'Scope 2', label: 'Purchased energy', color: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE', items: ['Electricity consumption', 'District heating', 'Steam purchased'], eg: 'An office at 40,000 kWh/yr ≈ 10 tonnes CO₂' },
              { scope: 'Scope 3', label: 'Value chain', color: '#10B981', bg: '#ECFDF5', border: '#A7F3D0', items: ['Business travel', 'Supply chain goods', 'Employee commuting', 'Waste & logistics'], eg: 'Often 70%+ of total emissions. €2M in purchases ≈ 400+ tonnes CO₂' },
            ].map(s => (
              <div key={s.scope} style={{
                background: W, borderRadius: 12, border: `1px solid ${B}`,
                borderTop: `3px solid ${s.color}`, padding: '20px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: s.bg, border: `1px solid ${s.border}`,
                  borderRadius: 6, padding: '3px 10px', marginBottom: 14,
                }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: s.color }}>{s.scope}</span>
                  <span style={{ fontSize: 11, color: s.color, opacity: 0.7 }}>—</span>
                  <span style={{ fontSize: 11, color: s.color, opacity: 0.85 }}>{s.label}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 14 }}>
                  {s.items.map(it => (
                    <div key={it} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Tick color={s.color}/>
                      <span style={{ fontSize: 13, color: '#374151' }}>{it}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 11, color: '#9CA3AF', borderTop: `1px solid ${B}`, paddingTop: 10, lineHeight: 1.5 }}>{s.eg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{ background: W, padding: '80px 24px', borderBottom: `1px solid ${B}` }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, textAlign: 'center', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Why not a spreadsheet or a consultant?
          </h2>
          <p style={{ textAlign: 'center', color: G, fontSize: 16, maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.65 }}>
            Most businesses try one of three approaches. Here is what actually happens.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 540, fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${B}` }}>
                  {['', 'DIY spreadsheet', 'Hire a consultant', 'CO₂ Expert'].map((h, i) => (
                    <th key={h} style={{
                      padding: '12px 16px', textAlign: i === 0 ? 'left' : 'center',
                      fontSize: 12, fontWeight: 700,
                      color: i === 3 ? '#92400E' : G,
                      letterSpacing: '0.05em', textTransform: 'uppercase',
                      background: i === 3 ? OL : 'transparent',
                      borderRadius: i === 3 ? '8px 8px 0 0' : 0,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Time to first report', '3–6 months', '6–12 weeks', '2 weeks'],
                  ['Scope 1, 2 & 3 covered', 'no', 'yes', 'yes'],
                  ['GHG Protocol compliant', 'no', 'yes', 'yes'],
                  ['Reusable next year', 'no', 'no', 'yes'],
                  ['Typical cost', '80+ internal hours', '€8,000–€25,000', 'Annual subscription'],
                  ['Shareable with customers', 'no', 'yes', 'yes'],
                ].map(([label, a, b, c]) => {
                  const cell = (v: string, isGreen?: boolean) => {
                    if (v === 'yes') return <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    if (v === 'no') return <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"/></svg>
                    return <span style={{ color: isGreen ? '#92400E' : D, fontWeight: isGreen ? 700 : 400 }}>{v}</span>
                  }
                  return (
                    <tr key={label} style={{ borderBottom: `1px solid ${B}` }}>
                      <td style={{ padding: '13px 16px', color: '#374151', fontWeight: 500 }}>{label}</td>
                      <td style={{ padding: '13px 16px', textAlign: 'center' }}>{cell(a)}</td>
                      <td style={{ padding: '13px 16px', textAlign: 'center' }}>{cell(b)}</td>
                      <td style={{ padding: '13px 16px', textAlign: 'center', background: OL }}>{cell(c, true)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: OL, padding: '72px 24px', borderTop: `1px solid ${OB}` }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: O, margin: '0 auto 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: D, marginBottom: 14, letterSpacing: '-0.02em' }}>
            Your next customer questionnaire is coming.
          </h2>
          <p style={{ fontSize: 17, color: '#78350F', marginBottom: 36, lineHeight: 1.65 }}>
            Book a free 30-minute call. We show you exactly what your footprint looks like
            and how to get a report ready before your customer asks.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: O, color: W, fontWeight: 700, fontSize: 16,
              padding: '14px 28px', borderRadius: 8, textDecoration: 'none',
              boxShadow: `0 4px 14px ${O}50`,
            }}>
              Book a free demo
              <Icon d="M5 12h14M12 5l7 7-7 7" size={16}/>
            </a>
            <a href="/how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: W, color: '#92400E', fontWeight: 600, fontSize: 16,
              padding: '14px 28px', borderRadius: 8, textDecoration: 'none',
              border: `1.5px solid ${OB}`,
            }}>
              See how it works
            </a>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}
