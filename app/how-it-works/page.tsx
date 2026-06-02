import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works — CO₂ Expert',
  description:
    'From zero data to a GHG Protocol-compliant carbon footprint report in two weeks. No consultant required. Upload your data — we calculate your Scope 1, 2 & 3 and generate a shareable report.',
}

// ─── Shared tokens ────────────────────────────────────────────────────────────
const ORANGE = '#F5A623'
const DARK = '#1A1A2E'
const BORDER = '#E5E7EB'

// ─── Small reusable pieces ────────────────────────────────────────────────────

function StepBadge({ n }: { n: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: ORANGE,
        color: '#fff',
        fontWeight: 700,
        fontSize: 20,
        flexShrink: 0,
      }}
    >
      {n}
    </span>
  )
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: '#fff',
        border: `1px solid ${BORDER}`,
        borderRadius: 12,
        padding: '28px 32px',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: ORANGE,
        marginBottom: 12,
      }}
    >
      {children}
    </p>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 'clamp(28px, 4vw, 40px)',
        fontWeight: 800,
        color: DARK,
        lineHeight: 1.2,
        marginBottom: 20,
      }}
    >
      {children}
    </h2>
  )
}

function BodyText({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontSize: 17, lineHeight: 1.7, color: '#4B5563', ...style }}>{children}</p>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
  return (
    <>
      <Nav />

      <main style={{ fontFamily: 'system-ui, sans-serif' }}>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0D2B1F 0%, #14442E 50%, #0B3324 100%)',
            color: '#fff',
            padding: '100px 24px 96px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: ORANGE,
                marginBottom: 20,
              }}
            >
              The CO₂ Expert process
            </p>
            <h1
              style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Three steps to carbon neutral
            </h1>
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.7, color: '#CBD5E1', maxWidth: 580, margin: '0 auto 48px' }}>
              Customers and banks are increasingly asking businesses for their CO2 data. CO2 Expert gives you a complete, GHG Protocol-compliant footprint report — ready to share — in days, not months.
            </p>

            {/* Step indicators */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 0,
                flexWrap: 'wrap',
              }}
            >
              {[
                { n: '1', label: 'Measure' },
                { n: '2', label: 'Reduce' },
                { n: '3', label: 'Offset' },
              ].map((step, i) => (
                <div key={step.n} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center', padding: '0 20px' }}>
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        background: ORANGE,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: 22,
                        margin: '0 auto 8px',
                      }}
                    >
                      {step.n}
                    </div>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{step.label}</span>
                  </div>
                  {i < 2 && (
                    <div style={{ width: 60, height: 2, background: 'rgba(245,166,35,0.4)', flexShrink: 0 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. STEP 1 — MEASURE ─────────────────────────────────────────── */}
        <section style={{ background: '#F9FAFB', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 56,
                alignItems: 'start',
              }}
            >
              {/* Left: explanatory copy */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                  <StepBadge n="1" />
                  <SectionLabel>Step one</SectionLabel>
                </div>
                <SectionHeading>Measure your emissions</SectionHeading>
                <BodyText>
                  Before you can reduce your footprint, you need to know exactly where your emissions come from. CO₂ Expert follows the globally recognised GHG Protocol framework, breaking your emissions into three scopes.
                </BodyText>

                <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    {
                      title: 'Scope 1 — Direct emissions',
                      body: 'Emissions from sources owned or controlled by your organisation: company vehicles and fleet, on-site fuel combustion (boilers, generators), and process emissions from manufacturing or industrial activity.',
                      color: '#EF4444',
                    },
                    {
                      title: 'Scope 2 — Indirect energy emissions',
                      body: 'Emissions associated with purchased electricity, steam, heat, or cooling that your company consumes. Even though the burning happens off-site, the demand is driven by your operations.',
                      color: ORANGE,
                    },
                    {
                      title: 'Scope 3 — Value-chain emissions',
                      body: 'All other indirect emissions across your value chain: business travel and employee commuting, upstream supply chain (goods & services purchased), downstream product use, waste disposal, and capital goods.',
                      color: '#10B981',
                    },
                  ].map((scope) => (
                    <Card key={scope.title}>
                      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <div
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            background: scope.color,
                            flexShrink: 0,
                            marginTop: 5,
                          }}
                        />
                        <div>
                          <p style={{ fontWeight: 700, color: DARK, marginBottom: 6 }}>{scope.title}</p>
                          <BodyText style={{ fontSize: 15, marginBottom: 0 }}>{scope.body}</BodyText>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Data input methods */}
                <div style={{ marginTop: 40 }}>
                  <p style={{ fontWeight: 700, color: DARK, marginBottom: 16, fontSize: 17 }}>
                    Three ways to get your data in
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      {
                        icon: 'M3 3h18v18H3zM3 9h18M9 21V9',
                        title: 'Excel / CSV upload',
                        desc: 'Drop in your existing spreadsheets — our parser auto-detects columns and maps them to the right emission categories.',
                      },
                      {
                        icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
                        title: 'Manual entry per category',
                        desc: 'Work category by category with guided forms: fuel type, quantity, unit. Inline emission factors are applied automatically.',
                      },
                      {
                        icon: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
                        title: 'Google / Microsoft sign-in',
                        desc: 'Connect your Google Workspace or Microsoft 365 to pull travel data, energy bills, and procurement records directly.',
                      },
                    ].map((method) => (
                      <div
                        key={method.title}
                        style={{
                          display: 'flex',
                          gap: 14,
                          alignItems: 'flex-start',
                          padding: '14px 18px',
                          background: '#fff',
                          border: `1px solid ${BORDER}`,
                          borderRadius: 10,
                        }}
                      >
                        <span style={{ flexShrink: 0 }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={method.icon}/></svg></span>
                        <div>
                          <p style={{ fontWeight: 600, color: DARK, marginBottom: 4, fontSize: 15 }}>{method.title}</p>
                          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>{method.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: dashboard mockup */}
              <div style={{ position: 'sticky', top: 100 }}>
                <Card style={{ padding: 0, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
                  {/* Dashboard header bar */}
                  <div
                    style={{
                      background: DARK,
                      padding: '14px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    {['#EF4444', '#F5A623', '#10B981'].map((c) => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                    ))}
                    <span style={{ color: '#94A3B8', fontSize: 13, marginLeft: 8 }}>Emissions Overview — 2024</span>
                  </div>

                  <div style={{ padding: 24 }}>
                    {/* Total number */}
                    <div style={{ marginBottom: 24 }}>
                      <p style={{ fontSize: 12, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                        Total CO₂e
                      </p>
                      <p style={{ fontSize: 36, fontWeight: 800, color: DARK, lineHeight: 1 }}>
                        1 247 <span style={{ fontSize: 18, fontWeight: 400, color: '#9CA3AF' }}>tonnes</span>
                      </p>
                    </div>

                    {/* Scope breakdown bars */}
                    <div style={{ marginBottom: 28 }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: DARK, marginBottom: 12 }}>Scope breakdown</p>
                      {[
                        { label: 'Scope 1', value: 312, pct: 25, color: '#EF4444' },
                        { label: 'Scope 2', value: 498, pct: 40, color: ORANGE },
                        { label: 'Scope 3', value: 437, pct: 35, color: '#10B981' },
                      ].map((s) => (
                        <div key={s.label} style={{ marginBottom: 12 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                            <span style={{ fontSize: 13, color: '#374151' }}>{s.label}</span>
                            <span style={{ fontSize: 13, fontWeight: 600, color: DARK }}>{s.value} t</span>
                          </div>
                          <div style={{ background: '#F3F4F6', borderRadius: 4, height: 8 }}>
                            <div
                              style={{
                                background: s.color,
                                width: `${s.pct}%`,
                                height: '100%',
                                borderRadius: 4,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Donut placeholder */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                      {/* SVG donut */}
                      <svg width={100} height={100} viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#F3F4F6" strokeWidth="16" />
                        {/* Scope 3 — 35% = 125.4 deg of 219.9 total arc */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="16"
                          strokeDasharray="83.5 155.5"
                          strokeDashoffset="0"
                          strokeLinecap="butt"
                          transform="rotate(-90 50 50)"
                        />
                        {/* Scope 2 — 40% */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke={ORANGE}
                          strokeWidth="16"
                          strokeDasharray="95.3 143.7"
                          strokeDashoffset="-83.5"
                          strokeLinecap="butt"
                          transform="rotate(-90 50 50)"
                        />
                        {/* Scope 1 — 25% */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#EF4444"
                          strokeWidth="16"
                          strokeDasharray="59.7 179.3"
                          strokeDashoffset="-178.8"
                          strokeLinecap="butt"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>

                      {/* Legend */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                        {[
                          { label: 'Scope 1', color: '#EF4444', pct: '25%' },
                          { label: 'Scope 2', color: ORANGE, pct: '40%' },
                          { label: 'Scope 3', color: '#10B981', pct: '35%' },
                        ].map((l) => (
                          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 10, height: 10, borderRadius: '50%', background: l.color, flexShrink: 0 }} />
                            <span style={{ fontSize: 13, color: '#374151' }}>{l.label}</span>
                            <span style={{ fontSize: 13, fontWeight: 600, color: DARK, marginLeft: 'auto' }}>{l.pct}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. STEP 2 — REDUCE ──────────────────────────────────────────── */}
        <section style={{ background: '#fff', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 56,
                alignItems: 'start',
              }}
            >
              {/* Left: chart mockup */}
              <div>
                <Card style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}>
                  <p style={{ fontWeight: 700, color: DARK, marginBottom: 6 }}>Year-on-year comparison</p>
                  <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 20 }}>Total tCO₂e per year</p>

                  {/* Bar chart mockup */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 160, paddingBottom: 8 }}>
                    {[
                      { year: '2021', height: 148, tonne: 1620 },
                      { year: '2022', height: 132, tonne: 1445 },
                      { year: '2023', height: 108, tonne: 1180 },
                      { year: '2024', height: 114, tonne: 1247 },
                      { year: '2025', height: 88, tonne: 960, projected: true },
                    ].map((bar) => (
                      <div key={bar.year} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600 }}>{bar.tonne}</span>
                        <div
                          style={{
                            width: '100%',
                            height: bar.height,
                            background: bar.projected
                              ? `repeating-linear-gradient(45deg, ${ORANGE}, ${ORANGE} 4px, rgba(245,166,35,0.2) 4px, rgba(245,166,35,0.2) 8px)`
                              : ORANGE,
                            borderRadius: '6px 6px 0 0',
                            opacity: bar.projected ? 0.85 : 1,
                          }}
                        />
                        <span style={{ fontSize: 12, color: bar.projected ? ORANGE : '#374151', fontWeight: bar.projected ? 700 : 400 }}>
                          {bar.year}{bar.projected ? '*' : ''}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 8 }}>* 2025 figure is projected based on current reduction trajectory</p>

                  {/* Net-zero projection */}
                  <div
                    style={{
                      marginTop: 20,
                      padding: '14px 16px',
                      background: '#F0FDF4',
                      borderRadius: 8,
                      border: '1px solid #BBF7D0',
                    }}
                  >
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#15803D', marginBottom: 4 }}>Net-zero trajectory</p>
                    <p style={{ fontSize: 13, color: '#166534' }}>
                      At the current −12 % reduction rate, your organisation is on track to reach net-zero by <strong>2036</strong>. Accelerate to −18 % to hit the Science Based Targets 1.5 °C pathway by 2030.
                    </p>
                  </div>
                </Card>

                {/* Per-location breakdown */}
                <Card style={{ marginTop: 20 }}>
                  <p style={{ fontWeight: 700, color: DARK, marginBottom: 16 }}>Per-location breakdown</p>
                  {[
                    { location: 'HQ — Amsterdam', value: 512, pct: 41 },
                    { location: 'Warehouse — Rotterdam', value: 389, pct: 31 },
                    { location: 'Office — Berlin', value: 224, pct: 18 },
                    { location: 'Remote workers', value: 122, pct: 10 },
                  ].map((loc) => (
                    <div key={loc.location} style={{ marginBottom: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span style={{ fontSize: 13, color: '#374151' }}>{loc.location}</span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: DARK }}>{loc.value} t</span>
                      </div>
                      <div style={{ background: '#F3F4F6', borderRadius: 4, height: 6 }}>
                        <div style={{ background: ORANGE, width: `${loc.pct}%`, height: '100%', borderRadius: 4 }} />
                      </div>
                    </div>
                  ))}
                </Card>
              </div>

              {/* Right: copy */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                  <StepBadge n="2" />
                  <SectionLabel>Step two</SectionLabel>
                </div>
                <SectionHeading>Reduce with science-based targets</SectionHeading>
                <BodyText>
                  Measuring is only the start. CO₂ Expert turns your emissions data into an actionable roadmap, aligned with the Science Based Targets initiative (SBTi) and the Paris Agreement&apos;s 1.5 °C pathway.
                </BodyText>

                <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    {
                      title: 'Science-based targets (SBTi)',
                      body: 'We calculate your required annual reduction rate based on your industry sector and base year. Targets are validated against SBTi methodology, giving your stakeholders credible, independently verified goals.',
                    },
                    {
                      title: 'Year-on-year comparison',
                      body: 'Track progress across every reporting period. Automated comparison reports highlight which categories improved, which worsened, and what drove the change — so you can act quickly.',
                    },
                    {
                      title: 'Per-location breakdown',
                      body: 'Drill down by office, warehouse, or country. Identify the highest-emitting locations and prioritise intervention where it has the greatest impact.',
                    },
                    {
                      title: 'Path-to-net-zero projection',
                      body: 'A dynamic model projects your future emissions under different scenarios — energy transition, fleet electrification, supplier switching — so you can stress-test your strategy before committing.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      style={{
                        paddingLeft: 18,
                        borderLeft: `3px solid ${ORANGE}`,
                      }}
                    >
                      <p style={{ fontWeight: 700, color: DARK, marginBottom: 6 }}>{item.title}</p>
                      <BodyText style={{ fontSize: 15 }}>{item.body}</BodyText>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. STEP 3 — OFFSET ──────────────────────────────────────────── */}
        <section style={{ background: '#F9FAFB', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 56,
                alignItems: 'start',
              }}
            >
              {/* Left: copy */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                  <StepBadge n="3" />
                  <SectionLabel>Step three</SectionLabel>
                </div>
                <SectionHeading>Offset residual emissions</SectionHeading>
                <BodyText>
                  Even the most ambitious reduction programmes leave residual emissions that cannot yet be eliminated. Carbon credits let you neutralise those tonnes while the world transitions to a low-carbon economy.
                </BodyText>

                <div style={{ marginTop: 28 }}>
                  <p style={{ fontWeight: 700, color: DARK, marginBottom: 12 }}>What are certified carbon credits?</p>
                  <BodyText>
                    Verified Carbon Units (VCUs) and Verified Emission Reductions (VERs) represent one tonne of CO₂ equivalent that has been removed from or prevented from entering the atmosphere. Each credit is independently audited and registered on a public registry — so they can only be retired once.
                  </BodyText>
                </div>

                <div
                  style={{
                    marginTop: 28,
                    padding: '20px 24px',
                    background: '#FFF7ED',
                    border: `1px solid #FED7AA`,
                    borderRadius: 10,
                  }}
                >
                  <p style={{ fontWeight: 700, color: '#92400E', marginBottom: 8 }}>
                    Why Green Earth Group projects are different
                  </p>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {[
                      'Full traceability — every credit is linked to GPS-verified land or renewable infrastructure.',
                      'No broker markup — you buy directly from the project, cutting out intermediaries.',
                      'Direct community impact — projects deliver co-benefits: biodiversity, local jobs, water quality.',
                      'Real-time registry access — see your retirement certificate on-chain within 24 hours.',
                    ].map((point) => (
                      <li key={point} style={{ fontSize: 15, color: '#78350F', lineHeight: 1.7, marginBottom: 4 }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process steps */}
                <div style={{ marginTop: 32 }}>
                  <p style={{ fontWeight: 700, color: DARK, marginBottom: 16 }}>How it works in three clicks</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {[
                      { n: 'A', label: 'Choose a project', desc: 'Browse Green Earth Group\'s verified portfolio — reforestation, renewable energy, blue carbon.' },
                      { n: 'B', label: 'Purchase credits', desc: 'Select the number of tonnes to retire. Transparent pricing, instant confirmation.' },
                      { n: 'C', label: 'Receive certificate', desc: 'Your CO₂-neutral certificate is generated automatically and added to your compliance dashboard.' },
                    ].map((s, i) => (
                      <div key={s.n} style={{ display: 'flex', gap: 16, position: 'relative' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <div
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: '50%',
                              background: DARK,
                              color: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 700,
                              fontSize: 14,
                              flexShrink: 0,
                              zIndex: 1,
                            }}
                          >
                            {s.n}
                          </div>
                          {i < 2 && (
                            <div style={{ width: 2, flex: 1, background: BORDER, minHeight: 24 }} />
                          )}
                        </div>
                        <div style={{ paddingBottom: 24 }}>
                          <p style={{ fontWeight: 700, color: DARK, marginBottom: 4 }}>{s.label}</p>
                          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: certificate mockup */}
              <div>
                <Card
                  style={{
                    boxShadow: '0 12px 48px rgba(0,0,0,0.12)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Watermark stripe */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 6,
                      background: `linear-gradient(90deg, #14442E, ${ORANGE})`,
                    }}
                  />

                  <div style={{ paddingTop: 12 }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', borderBottom: `1px solid ${BORDER}`, paddingBottom: 20, marginBottom: 20 }}>
                      <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 6 }}>
                        Certificate of Carbon Neutrality
                      </p>
                      <p style={{ fontSize: 22, fontWeight: 800, color: DARK }}>CO₂ Expert</p>
                      <p style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>Verified under Verra VCS v4.0 & GHG Protocol</p>
                    </div>

                    {/* Body */}
                    <div style={{ textAlign: 'center', marginBottom: 24 }}>
                      <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 4 }}>This certifies that</p>
                      <p style={{ fontSize: 20, fontWeight: 800, color: DARK, marginBottom: 4 }}>Acme BV</p>
                      <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 16 }}>has achieved carbon neutrality for the reporting year</p>
                      <p style={{ fontSize: 28, fontWeight: 900, color: '#14442E' }}>2024</p>
                    </div>

                    {/* Key figures */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gap: 1,
                        background: BORDER,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        overflow: 'hidden',
                        marginBottom: 20,
                      }}
                    >
                      {[
                        { label: 'Total emissions', value: '1 247 tCO₂e' },
                        { label: 'Credits retired', value: '1 247 VCUs' },
                        { label: 'Project', value: 'GEG Borneo' },
                      ].map((fig) => (
                        <div key={fig.label} style={{ background: '#fff', padding: '12px 10px', textAlign: 'center' }}>
                          <p style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 4 }}>{fig.label}</p>
                          <p style={{ fontSize: 13, fontWeight: 700, color: DARK }}>{fig.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Registry */}
                    <div
                      style={{
                        background: '#F0FDF4',
                        border: '1px solid #BBF7D0',
                        borderRadius: 8,
                        padding: '12px 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 20,
                      }}
                    >
                      <div>
                        <p style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 2 }}>Verra Registry ID</p>
                        <p style={{ fontSize: 13, fontWeight: 700, color: '#166534', fontFamily: 'monospace' }}>VCS-2024-GEG-00481</p>
                      </div>
                      <div
                        style={{
                          background: '#16A34A',
                          color: '#fff',
                          fontSize: 11,
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: 20,
                        }}
                      >
                        RETIRED
                      </div>
                    </div>

                    {/* Seal */}
                    <div style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          border: `3px solid ${ORANGE}`,
                          color: ORANGE,
                          fontSize: 28,
                          marginBottom: 8,
                        }}
                      >
                        <svg width='28' height='28' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='12' r='11' stroke='#059669' strokeWidth='1.5'/><path d='M7 12l3.5 3.5 6.5-7' stroke='#059669' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/></svg>
                      </div>
                      <p style={{ fontSize: 11, color: '#9CA3AF' }}>Issued {new Date(2025, 1, 14).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. TIMELINE ─────────────────────────────────────────────────── */}
        <section style={{ background: DARK, padding: '96px 24px', color: '#fff' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <SectionLabel>Speed</SectionLabel>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              From signup to certificate in 2 weeks
            </h2>
            <p style={{ fontSize: 17, color: '#94A3B8', maxWidth: 560, margin: '0 auto 64px' }}>
              Our guided onboarding and pre-built emission factors mean most organisations complete their first footprint in days, not months.
            </p>

            {/* Timeline */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 0,
                position: 'relative',
              }}
            >
              {[
                {
                  period: 'Day 1',
                  title: 'Account setup',
                  desc: 'Create your organisation profile, invite team members, configure reporting boundaries.',
                  icon: 'M5 12h14M12 5l7 7-7 7',
                },
                {
                  period: 'Week 1',
                  title: 'Data input & calculation',
                  desc: 'Upload existing data or enter manually. Automatic Scope 1/2/3 calculation with audit trail.',
                  icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
                },
                {
                  period: 'Week 2',
                  title: 'Review & validate',
                  desc: 'Our climate experts review your footprint. You receive a quality-assurance report.',
                  icon: 'M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0',
                },
                {
                  period: 'Completion',
                  title: 'Certificate issued',
                  desc: 'Offset remaining emissions and receive your verifiable CO₂-neutral certificate.',
                  icon: 'M8.21 13.89L7 23l5-3 5 3-1.21-9.12M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24z',
                },
              ].map((milestone, i) => (
                <div
                  key={milestone.period}
                  style={{
                    padding: '32px 24px',
                    borderTop: `3px solid ${i === 0 ? ORANGE : 'rgba(245,166,35,0.3)'}`,
                    textAlign: 'left',
                    position: 'relative',
                  }}
                >
                  <span style={{ display: 'block', marginBottom: 12 }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={milestone.icon}/></svg></span>
                  <p
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: ORANGE,
                      fontWeight: 700,
                      marginBottom: 6,
                    }}
                  >
                    {milestone.period}
                  </p>
                  <p style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, color: '#fff' }}>{milestone.title}</p>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65 }}>{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. STANDARDS ────────────────────────────────────────────────── */}
        <section style={{ background: '#fff', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <SectionLabel>Built on international standards</SectionLabel>
              <SectionHeading>Recognised globally, trusted by auditors</SectionHeading>
              <BodyText style={{ maxWidth: 600, margin: '0 auto' }}>
                CO₂ Expert is designed from the ground up to comply with the leading international frameworks, so your certificate holds up to scrutiny — from investors, regulators, and the public.
              </BodyText>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 24,
              }}
            >
              {[
                {
                  acronym: 'GHG Protocol',
                  full: 'Greenhouse Gas Protocol',
                  body: 'The world\'s most widely used accounting standard for greenhouse gas emissions. Defines Scope 1, 2, and 3 boundaries and calculation methodologies. Required by most ESG reporting frameworks.',
                  badge: '#2563EB',
                },
                {
                  acronym: 'ISO 14064',
                  full: 'International Organization for Standardization',
                  body: 'The international standard for GHG inventories and verification. ISO 14064-1 covers organisational reporting; ISO 14064-3 covers third-party verification. Widely accepted by regulators and rating agencies.',
                  badge: '#7C3AED',
                },
                {
                  acronym: 'Verra VCS',
                  full: 'Verified Carbon Standard',
                  body: 'The largest voluntary carbon credit certification programme. VCS-verified projects are audited by independent third parties and registered on Verra\'s public registry. Prevents double-counting through serial-number retirement.',
                  badge: '#059669',
                },
                {
                  acronym: 'Gold Standard',
                  full: 'Gold Standard for the Global Goals',
                  body: 'Founded by WWF and other NGOs, Gold Standard certifies projects that deliver the highest levels of environmental integrity and sustainable development co-benefits — biodiversity, clean water, and community livelihoods.',
                  badge: ORANGE,
                },
              ].map((standard) => (
                <Card key={standard.acronym} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: standard.badge,
                      color: '#fff',
                      fontSize: 12,
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: 20,
                      marginBottom: 16,
                      alignSelf: 'flex-start',
                    }}
                  >
                    {standard.acronym}
                  </div>
                  <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 8 }}>{standard.full}</p>
                  <BodyText style={{ fontSize: 15 }}>{standard.body}</BodyText>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA ──────────────────────────────────────────────────────── */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0D2B1F 0%, #14442E 100%)',
            padding: '96px 24px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: ORANGE,
                marginBottom: 20,
              }}
            >
              Get started today
            </p>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              Ready to measure your carbon footprint?
            </h2>
            <p style={{ fontSize: 18, color: '#CBD5E1', lineHeight: 1.7, marginBottom: 40 }}>
              We show you exactly what your footprint looks like before your customer asks.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  background: ORANGE,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 16,
                  padding: '16px 36px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                }}
              >
                Book a free 30-minute call
              </Link>
              <Link
                href="/pricing"
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 16,
                  padding: '16px 36px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.3)',
                  letterSpacing: '0.02em',
                }}
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
