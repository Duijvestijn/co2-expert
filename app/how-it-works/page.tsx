import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How It Works — CO₂ Expert',
  description:
    'From zero data to a GHG Protocol-compliant carbon footprint report in two weeks. Upload your data, we calculate Scope 1, 2 & 3, and generate a shareable report — no consultant required.',
}

// ── Design tokens (matches homepage) ──────────────────────────────────────────
const O  = '#F5A623'   // orange
const OL = '#FFF7ED'   // orange light bg
const OB = '#FED7AA'   // orange border
const D  = '#1A1A2E'   // dark text
const G  = '#6B7280'   // grey
const B  = '#E5E7EB'   // border
const W  = '#FFFFFF'   // white

function Icon({ d, size = 20, color = 'currentColor' }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d}/>
    </svg>
  )
}

function Tick({ color = O }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M5 12l4 4 10-10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function HowItWorksPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: D, background: W }}>
      <Nav lang="en" />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        background: W,
        paddingTop: 132, paddingBottom: 80, paddingLeft: 24, paddingRight: 24,
        borderBottom: `1px solid ${B}`,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative orange glow */}
        <div style={{
          position: 'absolute', top: -100, right: -100,
          width: 480, height: 480, borderRadius: '50%',
          background: `radial-gradient(circle, ${O}18 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 320, height: 320, borderRadius: '50%',
          background: `radial-gradient(circle, ${O}0D 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}/>

        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative' }}>

          {/* Category pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: OL, border: `1px solid ${OB}`,
            borderRadius: 50, padding: '6px 16px', marginBottom: 32,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: O }}/>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#92400E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              The CO₂ Expert process
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em', margin: '0 0 24px', color: D,
          }}>
            From zero data to a
            <br/>
            <span style={{
              background: `linear-gradient(135deg, ${O}, #E8831A)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              verified footprint report.
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)', color: G,
            lineHeight: 1.75, maxWidth: 560, margin: '0 auto 40px',
          }}>
            No consultant required. No months-long internal project. Upload what you have,
            and CO₂ Expert calculates your complete Scope 1, 2 &amp; 3 emissions — ready
            to share with any customer or bank in days.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: O, color: W, fontWeight: 700,
              fontSize: 15, padding: '13px 26px', borderRadius: 8, textDecoration: 'none',
              boxShadow: `0 1px 0 rgba(0,0,0,0.08), 0 4px 14px ${O}40`,
            }}>
              Book a free 30-min demo
              <Icon d="M5 12h14M12 5l7 7-7 7" size={15}/>
            </a>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: W, color: D, fontWeight: 600,
              fontSize: 15, padding: '13px 26px', borderRadius: 8, textDecoration: 'none',
              border: `1.5px solid ${B}`,
            }}>
              View pricing
            </a>
          </div>

          {/* Step indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
            {[
              { n: '01', label: 'Measure' },
              { n: '02', label: 'Calculate' },
              { n: '03', label: 'Report' },
              { n: '04', label: 'Track' },
            ].map((step, i) => (
              <div key={step.n} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', padding: '0 16px' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: OL, border: `2px solid ${OB}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 8px',
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#92400E' }}>{step.n}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: D }}>{step.label}</span>
                </div>
                {i < 3 && (
                  <div style={{ width: 48, height: 2, background: OB, flexShrink: 0 }}/>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEP 1: MEASURE ──────────────────────────────────────────────────── */}
      <section style={{ background: W, padding: '80px 24px', borderBottom: `1px solid ${B}` }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 60,
            alignItems: 'center',
          }}>
            {/* Left: text */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: OL, border: `2px solid ${OB}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#92400E' }}>01</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: O }}>
                  Step one
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(24px, 3.5vw, 38px)',
                fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16, color: D,
              }}>
                Measure what you actually emit
              </h2>

              <p style={{ fontSize: 16, color: G, lineHeight: 1.75, marginBottom: 32 }}>
                Upload your energy bills, fuel receipts, travel records, and purchasing data.
                Via Excel, CSV, or your accounting software. Most businesses complete the
                data input in a single afternoon.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {[
                  { icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6', label: 'Excel & CSV upload', desc: 'Drop in your existing spreadsheets. Our parser auto-maps columns to emission categories.' },
                  { icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z', label: 'Guided manual entry', desc: 'Category-by-category forms with inline emission factors. No expertise required.' },
                  { icon: 'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71 M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71', label: 'Exact Online & accounting integrations', desc: 'Connect your bookkeeping to pull purchase and energy data automatically.' },
                ].map(item => (
                  <div key={item.label} style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    padding: '14px 18px',
                    background: '#FAFAFA', border: `1px solid ${B}`, borderRadius: 10,
                  }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 9,
                      background: OL, border: `1px solid ${OB}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: O, flexShrink: 0,
                    }}>
                      <Icon d={item.icon} size={16}/>
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: D, marginBottom: 3 }}>{item.label}</p>
                      <p style={{ fontSize: 13, color: G, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 13, color: '#9CA3AF', borderTop: `1px solid ${B}`, paddingTop: 16 }}>
                Accepted formats: Excel (.xlsx), CSV, Exact Online, direct entry
              </p>
            </div>

            {/* Right: measurement form mockup */}
            <div>
              <div style={{
                background: W, border: `1px solid ${B}`, borderRadius: 16,
                boxShadow: '0 8px 40px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)',
                overflow: 'hidden',
              }}>
                {/* Browser bar */}
                <div style={{
                  background: '#F3F4F6', borderBottom: `1px solid ${B}`,
                  padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['#F87171','#FBBF24','#34D399'].map(c => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }}/>
                    ))}
                  </div>
                  <div style={{
                    flex: 1, background: W, borderRadius: 6, padding: '4px 12px',
                    fontSize: 11, color: G, border: `1px solid ${B}`, textAlign: 'center',
                  }}>
                    app.co2.expert / measure
                  </div>
                </div>

                <div style={{ padding: 20 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: D, marginBottom: 16, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Data collection — 2024
                  </p>

                  {/* Form fields mockup */}
                  {[
                    { label: 'Company vehicles — diesel (litres)', value: '18,420 L', color: '#EF4444', scope: 'Scope 1' },
                    { label: 'Natural gas heating (m³)', value: '6,800 m³', color: '#EF4444', scope: 'Scope 1' },
                    { label: 'Electricity consumption (kWh)', value: '42,600 kWh', color: '#3B82F6', scope: 'Scope 2' },
                    { label: 'Business travel — flights (km)', value: '84,000 km', color: '#10B981', scope: 'Scope 3' },
                    { label: 'Purchased goods & services', value: '€ 1,240,000', color: '#10B981', scope: 'Scope 3' },
                  ].map(field => (
                    <div key={field.label} style={{
                      marginBottom: 10, padding: '10px 12px',
                      background: '#FAFAFA', border: `1px solid ${B}`, borderRadius: 8,
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                          <div style={{ width: 7, height: 7, borderRadius: '50%', background: field.color, flexShrink: 0 }}/>
                          <span style={{ fontSize: 9, fontWeight: 700, color: field.color, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{field.scope}</span>
                        </div>
                        <span style={{ fontSize: 11, color: '#374151' }}>{field.label}</span>
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: D, flexShrink: 0, marginLeft: 8 }}>{field.value}</span>
                    </div>
                  ))}

                  {/* Progress indicator */}
                  <div style={{ marginTop: 16, padding: '12px 14px', background: OL, border: `1px solid ${OB}`, borderRadius: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#92400E' }}>Data completeness</span>
                      <span style={{ fontSize: 11, fontWeight: 800, color: O }}>83%</span>
                    </div>
                    <div style={{ height: 6, background: OB, borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ width: '83%', height: '100%', background: O, borderRadius: 4 }}/>
                    </div>
                    <p style={{ fontSize: 10, color: '#92400E', marginTop: 6 }}>3 categories remaining — all optional for a complete report</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 2: CALCULATE ────────────────────────────────────────────────── */}
      <section style={{ background: '#FAFAFA', padding: '80px 24px', borderBottom: `1px solid ${B}` }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 60,
            alignItems: 'center',
          }}>
            {/* Left: scope breakdown chart mockup */}
            <div style={{ order: 0 }}>
              <div style={{
                background: W, border: `1px solid ${B}`, borderRadius: 16,
                boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
                overflow: 'hidden',
              }}>
                <div style={{ padding: '18px 20px', borderBottom: `1px solid ${B}` }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: D }}>Emissions overview — 2024</p>
                  <p style={{ fontSize: 11, color: G, marginTop: 2 }}>GHG Protocol — Scope 1, 2 & 3</p>
                </div>

                <div style={{ padding: '20px' }}>
                  {/* Big number */}
                  <div style={{ textAlign: 'center', marginBottom: 20, padding: '16px', background: '#FAFAFA', borderRadius: 10, border: `1px solid ${B}` }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: G, marginBottom: 4 }}>
                      Total CO₂e
                    </p>
                    <p style={{ fontSize: 36, fontWeight: 900, color: D, lineHeight: 1 }}>
                      148.4
                      <span style={{ fontSize: 16, fontWeight: 400, color: G }}> t</span>
                    </p>
                    <p style={{ fontSize: 11, color: G, marginTop: 4 }}>tonnes CO₂-equivalent, 2024</p>
                  </div>

                  {/* Scope bars */}
                  {[
                    { scope: 'Scope 1', label: 'Direct emissions', value: '48.2 t', pct: 33, color: '#EF4444', bg: '#FEF2F2' },
                    { scope: 'Scope 2', label: 'Purchased energy', value: '36.8 t', pct: 25, color: '#3B82F6', bg: '#EFF6FF' },
                    { scope: 'Scope 3', label: 'Value chain', value: '63.4 t', pct: 42, color: '#10B981', bg: '#ECFDF5' },
                  ].map(s => (
                    <div key={s.scope} style={{ marginBottom: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ width: 26, height: 26, borderRadius: 6, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }}/>
                          </div>
                          <div>
                            <p style={{ fontSize: 12, fontWeight: 700, color: D, lineHeight: 1.2 }}>{s.scope}</p>
                            <p style={{ fontSize: 10, color: G }}>{s.label}</p>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontSize: 13, fontWeight: 700, color: s.color }}>{s.value}</p>
                          <p style={{ fontSize: 10, color: G }}>{s.pct}%</p>
                        </div>
                      </div>
                      <div style={{ height: 7, background: '#F3F4F6', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{ width: `${s.pct}%`, height: '100%', background: s.color, borderRadius: 4 }}/>
                      </div>
                    </div>
                  ))}

                  {/* Emission factor note */}
                  <div style={{
                    marginTop: 16, padding: '10px 12px',
                    background: OL, border: `1px solid ${OB}`, borderRadius: 8,
                    display: 'flex', gap: 8, alignItems: 'flex-start',
                  }}>
                    <div style={{ color: O, flexShrink: 0, marginTop: 1 }}>
                      <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" size={14}/>
                    </div>
                    <p style={{ fontSize: 11, color: '#92400E', lineHeight: 1.5 }}>
                      GHG Protocol emission factors applied automatically. Full methodology in your report.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: text */}
            <div style={{ order: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: OL, border: `2px solid ${OB}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#92400E' }}>02</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: O }}>
                  Step two
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(24px, 3.5vw, 38px)',
                fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16, color: D,
              }}>
                We calculate your complete footprint
              </h2>

              <p style={{ fontSize: 16, color: G, lineHeight: 1.75, marginBottom: 32 }}>
                GHG Protocol emission factors are applied automatically across all categories.
                The result: a complete, explainable Scope 1, 2 &amp; 3 footprint — per category,
                per location, per year.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { title: 'GHG Protocol emission factors', body: 'Updated annually from authoritative national registries and IPCC AR6. Applied automatically — you never need to look up a conversion factor.' },
                  { title: 'Complete Scope 1, 2 & 3 coverage', body: 'Every emission source covered: from your gas heating to your supply chain purchases. The exact breakdown your customers are asking for.' },
                  { title: 'Per-category transparency', body: 'Every number is traceable to its source data point. No black boxes. Auditors and customers can follow the calculation.' },
                  { title: 'Multi-location & multi-entity', body: 'Multiple offices, warehouses, or subsidiaries handled in a single measurement. Consolidate or report separately — your choice.' },
                ].map(item => (
                  <div key={item.title} style={{
                    paddingLeft: 16, borderLeft: `3px solid ${O}`,
                  }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: D, marginBottom: 4 }}>{item.title}</p>
                    <p style={{ fontSize: 14, color: G, lineHeight: 1.65 }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 3: REPORT ───────────────────────────────────────────────────── */}
      <section style={{ background: W, padding: '80px 24px', borderBottom: `1px solid ${B}` }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 60,
            alignItems: 'center',
          }}>
            {/* Left: text */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: OL, border: `2px solid ${OB}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#92400E' }}>03</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: O }}>
                  Step three
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(24px, 3.5vw, 38px)',
                fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16, color: D,
              }}>
                A shareable report. Ready in days.
              </h2>

              <p style={{ fontSize: 16, color: G, lineHeight: 1.75, marginBottom: 28 }}>
                Once your footprint is calculated, CO₂ Expert generates a GHG Protocol-compliant
                report you can send to any customer, bank, or procurement team immediately.
              </p>

              <div style={{ marginBottom: 28 }}>
                <div style={{
                  background: OL, border: `1px solid ${OB}`,
                  borderRadius: 10, padding: '16px 20px',
                }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#92400E', marginBottom: 10 }}>What your report includes</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      'Complete Scope 1, 2 & 3 breakdown',
                      'Methodology notes and emission factors used',
                      'Branded PDF ready to share with customers',
                      'Machine-readable export for CSRD submissions',
                      'Secure share link for procurement portals',
                      'Audit trail — every figure traceable to source data',
                    ].map(point => (
                      <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <Tick color={O}/>
                        <span style={{ fontSize: 13, color: '#78350F', lineHeight: 1.5 }}>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 13, color: '#9CA3AF', borderTop: `1px solid ${B}`, paddingTop: 16 }}>
                Output formats: branded PDF, Excel export, CSRD-ready XML
              </p>
            </div>

            {/* Right: report card mockup */}
            <div>
              <div style={{
                background: W, border: `1px solid ${B}`, borderRadius: 16,
                boxShadow: '0 12px 48px rgba(0,0,0,0.10)',
                overflow: 'hidden',
              }}>
                {/* Top accent bar */}
                <div style={{
                  height: 5,
                  background: `linear-gradient(90deg, ${O}, #E8831A)`,
                }}/>

                <div style={{ padding: '24px' }}>
                  {/* Report header */}
                  <div style={{ textAlign: 'center', marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${B}` }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: G, marginBottom: 6 }}>
                      GHG Protocol Carbon Footprint Report
                    </p>
                    <p style={{ fontSize: 20, fontWeight: 800, color: D }}>CO₂ Expert</p>
                    <p style={{ fontSize: 12, color: G, marginTop: 3 }}>Scope 1, 2 &amp; 3 — Reporting year 2024</p>
                  </div>

                  {/* Company + total */}
                  <div style={{ textAlign: 'center', marginBottom: 20 }}>
                    <p style={{ fontSize: 13, color: G, marginBottom: 2 }}>Prepared for</p>
                    <p style={{ fontSize: 18, fontWeight: 800, color: D, marginBottom: 8 }}>Acme Manufacturing BV</p>
                    <div style={{
                      display: 'inline-block',
                      background: OL, border: `1px solid ${OB}`,
                      borderRadius: 10, padding: '10px 24px',
                    }}>
                      <p style={{ fontSize: 28, fontWeight: 900, color: D, lineHeight: 1 }}>
                        148.4
                        <span style={{ fontSize: 14, fontWeight: 600, color: G }}> tCO₂e</span>
                      </p>
                      <p style={{ fontSize: 11, color: '#92400E', marginTop: 2 }}>Total measured footprint</p>
                    </div>
                  </div>

                  {/* Scope grid */}
                  <div style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                    gap: 8, marginBottom: 16,
                  }}>
                    {[
                      { scope: 'Scope 1', value: '48.2 t', color: '#EF4444', bg: '#FEF2F2' },
                      { scope: 'Scope 2', value: '36.8 t', color: '#3B82F6', bg: '#EFF6FF' },
                      { scope: 'Scope 3', value: '63.4 t', color: '#10B981', bg: '#ECFDF5' },
                    ].map(s => (
                      <div key={s.scope} style={{
                        background: s.bg, borderRadius: 8,
                        padding: '10px 8px', textAlign: 'center',
                      }}>
                        <p style={{ fontSize: 10, fontWeight: 700, color: s.color, marginBottom: 3 }}>{s.scope}</p>
                        <p style={{ fontSize: 14, fontWeight: 800, color: s.color }}>{s.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Standard badge */}
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 14px',
                    background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8,
                    marginBottom: 16,
                  }}>
                    <div>
                      <p style={{ fontSize: 10, color: G, marginBottom: 2 }}>Standard</p>
                      <p style={{ fontSize: 12, fontWeight: 700, color: '#166534' }}>GHG Protocol Corporate Standard</p>
                    </div>
                    <div style={{
                      background: '#16A34A', color: W,
                      fontSize: 10, fontWeight: 800,
                      padding: '4px 10px', borderRadius: 20, letterSpacing: '0.06em',
                    }}>
                      VERIFIED
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: 8 }}>
                    <div style={{
                      flex: 1, padding: '9px 12px', textAlign: 'center',
                      background: O, borderRadius: 7,
                      fontSize: 12, fontWeight: 700, color: W,
                    }}>
                      Download PDF
                    </div>
                    <div style={{
                      flex: 1, padding: '9px 12px', textAlign: 'center',
                      background: W, border: `1.5px solid ${B}`, borderRadius: 7,
                      fontSize: 12, fontWeight: 600, color: D,
                    }}>
                      Copy share link
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 4: TRACK ────────────────────────────────────────────────────── */}
      <section style={{ background: '#FFFBF5', padding: '80px 24px', borderBottom: `1px solid ${OB}` }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: OL, border: `2px solid ${OB}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#92400E' }}>04</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: O }}>
                Step four
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 12, color: D }}>
              Track progress year on year
            </h2>
            <p style={{ fontSize: 16, color: G, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Return next year with updated data. See what changed, set targets, and show
              measurable improvement — what customers are increasingly asking for.
            </p>
          </div>

          {/* Year comparison visual */}
          <div style={{
            background: W, border: `1px solid ${B}`, borderRadius: 16,
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)', overflow: 'hidden',
            maxWidth: 780, margin: '0 auto',
          }}>
            <div style={{ padding: '20px 24px', borderBottom: `1px solid ${B}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: D }}>Year-on-year comparison</p>
                <p style={{ fontSize: 11, color: G, marginTop: 2 }}>Total tCO₂e per reporting year</p>
              </div>
              <div style={{
                background: '#ECFDF5', border: '1px solid #BBF7D0',
                borderRadius: 20, padding: '4px 12px',
                fontSize: 11, fontWeight: 700, color: '#16A34A',
              }}>
                -21% since 2022
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              {/* Bar chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height: 140, marginBottom: 12 }}>
                {[
                  { year: '2021', value: 188, pct: 100, label: '188 t' },
                  { year: '2022', value: 172, pct: 92, label: '172 t' },
                  { year: '2023', value: 159, pct: 85, label: '159 t' },
                  { year: '2024', value: 148, pct: 79, label: '148 t', current: true },
                  { year: '2025', value: 130, pct: 69, label: '~130 t', projected: true },
                ].map((bar, i) => (
                  <div key={bar.year} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontSize: 10, color: bar.current ? D : G, fontWeight: bar.current ? 700 : 400 }}>{bar.label}</span>
                    <div style={{
                      width: '100%',
                      height: bar.pct * 1.3,
                      background: bar.projected
                        ? `repeating-linear-gradient(45deg, ${O}, ${O} 3px, ${OL} 3px, ${OL} 7px)`
                        : bar.current
                          ? O
                          : OB,
                      borderRadius: '6px 6px 0 0',
                      border: bar.current ? `1.5px solid #E8831A` : `1px solid ${OB}`,
                    }}/>
                    <span style={{
                      fontSize: 11, fontWeight: bar.current ? 700 : 400,
                      color: bar.projected ? O : bar.current ? D : G,
                    }}>
                      {bar.year}{bar.projected ? '*' : ''}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 20 }}>
                * 2025 figure projected based on current reduction trajectory
              </p>

              {/* Net-zero callout */}
              <div style={{
                background: OL, border: `1px solid ${OB}`,
                borderRadius: 10, padding: '14px 18px',
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <div style={{ color: O, flexShrink: 0, marginTop: 2 }}>
                  <Icon d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" size={18}/>
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#92400E', marginBottom: 3 }}>On track for net-zero</p>
                  <p style={{ fontSize: 13, color: '#78350F', lineHeight: 1.55 }}>
                    At the current -12% annual reduction rate, your organisation reaches net-zero by <strong>2036</strong>.
                    Accelerate to -18% to align with the Science Based Targets 1.5&deg;C pathway by 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STANDARDS ────────────────────────────────────────────────────────── */}
      <section style={{ background: W, padding: '80px 24px', borderBottom: `1px solid ${B}` }}>
        <div style={{ maxWidth: 940, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: O, marginBottom: 14 }}>
              Built on international standards
            </p>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-0.02em', color: D, marginBottom: 12 }}>
              Recognised globally. Trusted by auditors.
            </h2>
            <p style={{ fontSize: 16, color: G, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Your report is built on the frameworks your customers, banks, and regulators
              already accept — no translation layer needed.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { name: 'GHG Protocol',  sub: 'Corporate Standard',          color: '#065F46', bg: '#ECFDF5', border: '#A7F3D0', body: 'The global gold standard for measuring and reporting corporate greenhouse gas emissions. Defines Scope 1, 2 & 3 boundaries. Required by most ESG frameworks.' },
              { name: 'ISO 14064',     sub: 'GHG Inventories & Verification', color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', body: 'International standard for GHG accounting and third-party verification. Accepted by regulators and rating agencies worldwide.' },
              { name: 'CSRD / ESRS',  sub: 'EU Sustainability Reporting',   color: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', body: 'EU Corporate Sustainability Reporting Directive. Mandatory for companies with 1,000+ employees from 2025. Your supply chain must comply.' },
              { name: 'VSME Standard', sub: 'SME Voluntary Standard',        color: '#92400E', bg: OL,       border: OB,        body: 'The EFRAG voluntary standard specifically designed for SMBs. Proportionate, practical, and accepted by large companies for supply-chain reporting.' },
            ].map(s => (
              <div key={s.name} style={{
                background: W, borderRadius: 12, border: `1px solid ${B}`,
                padding: '20px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: s.bg, border: `1px solid ${s.border}`,
                  borderRadius: 8, padding: '5px 12px', marginBottom: 12,
                }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: s.color }}>{s.name}</span>
                </div>
                <p style={{ fontSize: 11, color: G, fontWeight: 600, marginBottom: 8 }}>{s.sub}</p>
                <p style={{ fontSize: 13, color: G, lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: OL, padding: '80px 24px', borderTop: `1px solid ${OB}` }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: O, margin: '0 auto 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" size={26} color={W}/>
          </div>

          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: D, marginBottom: 14, letterSpacing: '-0.02em' }}>
            Your next customer questionnaire is coming.
          </h2>
          <p style={{ fontSize: 17, color: '#78350F', marginBottom: 36, lineHeight: 1.65, maxWidth: 480, margin: '0 auto 36px' }}>
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
              <Icon d="M5 12h14M12 5l7 7-7 7" size={16} color={W}/>
            </a>
            <a href="/pricing" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: W, color: '#92400E', fontWeight: 600, fontSize: 16,
              padding: '14px 28px', borderRadius: 8, textDecoration: 'none',
              border: `1.5px solid ${OB}`,
            }}>
              View pricing
            </a>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}
