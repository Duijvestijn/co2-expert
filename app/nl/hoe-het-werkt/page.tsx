import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zo werkt het — CO₂ Expert',
  description:
    'Ontdek hoe CO₂ Expert je begeleidt van je eerste data-upload tot een geverifieerd CO₂-voetafdrukrapport — met Scope 1, 2 & 3-emissies, wetenschappelijk onderbouwde reductiedoelen en jaar-op-jaar voortgangsmeting.',
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

export default function HoeHetWerktPage() {
  return (
    <>
      <Nav lang="nl" />

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
              Het CO₂ Expert-proces
            </p>
            <h1
              style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Drie stappen naar een geverifieerde CO₂-voetafdruk
            </h1>
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.7, color: '#CBD5E1', maxWidth: 580, margin: '0 auto 48px' }}>
              Uw klanten en financiers vragen steeds vaker om uw CO2-gegevens. CO2 Expert geeft u een volledig, GHG Protocol-conform voetafdrukrapport — klaar om te delen — in dagen.
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
                { n: '1', label: 'Meet' },
                { n: '2', label: 'Reduceer' },
                { n: '3', label: 'Rapporteer' },
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

        {/* ── 2. STAP 1 — MEET ────────────────────────────────────────────── */}
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
                  <SectionLabel>Stap één</SectionLabel>
                </div>
                <SectionHeading>Meet je emissies</SectionHeading>
                <BodyText>
                  Voordat je je voetafdruk kunt reduceren, moet je precies weten waar je emissies vandaan komen. CO₂ Expert volgt het wereldwijd erkende GHG Protocol-framework en verdeelt je emissies in drie scopes.
                </BodyText>

                <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    {
                      title: 'Scope 1 — Eigen voertuigen & brandstof',
                      body: 'Emissies uit bronnen die jouw organisatie bezit of beheert: bedrijfsvoertuigen en wagenpark, brandstofverbruik op locatie (ketels, generatoren) en procesemissies uit productie of industriële activiteit.',
                      color: '#EF4444',
                    },
                    {
                      title: 'Scope 2 — Ingekochte energie',
                      body: 'Emissies gekoppeld aan ingekochte elektriciteit, stoom, warmte of koeling die jouw bedrijf verbruikt. Ook al vindt de verbranding elders plaats, de vraag wordt aangestuurd door jouw bedrijfsvoering.',
                      color: ORANGE,
                    },
                    {
                      title: 'Scope 3 — Waardeketen, zakenreizen, afval',
                      body: 'Alle andere indirecte emissies in je waardeketen: zakenreizen en woon-werkverkeer, upstream toeleveringsketen (ingekochte goederen en diensten), downstream productgebruik, afvalverwerking en kapitaalgoederen.',
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
                    Drie manieren om je data in te voeren
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      {
                        icon: 'M3 3h18v18H3zM3 9h18M9 21V9',
                        title: 'Excel / CSV-upload',
                        desc: 'Upload je bestaande spreadsheets — onze parser herkent automatisch kolommen en koppelt ze aan de juiste emissiecategorieën.',
                      },
                      {
                        icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
                        title: 'Handmatige invoer per categorie',
                        desc: 'Werk categorie voor categorie met begeleide formulieren: brandstoftype, hoeveelheid, eenheid. Emissiefactoren worden automatisch toegepast.',
                      },
                      {
                        icon: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
                        title: 'Google / Microsoft-koppeling',
                        desc: 'Verbind je Google Workspace of Microsoft 365 om reisdata, energierekeningen en inkoopgegevens direct op te halen.',
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
                    <span style={{ color: '#94A3B8', fontSize: 13, marginLeft: 8 }}>Emissieoverzicht — 2024</span>
                  </div>

                  <div style={{ padding: 24 }}>
                    {/* Total number */}
                    <div style={{ marginBottom: 24 }}>
                      <p style={{ fontSize: 12, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                        Totaal CO₂e
                      </p>
                      <p style={{ fontSize: 36, fontWeight: 800, color: DARK, lineHeight: 1 }}>
                        1 247 <span style={{ fontSize: 18, fontWeight: 400, color: '#9CA3AF' }}>ton</span>
                      </p>
                    </div>

                    {/* Scope breakdown bars */}
                    <div style={{ marginBottom: 28 }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: DARK, marginBottom: 12 }}>Scope-uitsplitsing</p>
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
                      <svg width={100} height={100} viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#F3F4F6" strokeWidth="16" />
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

        {/* ── 3. STAP 2 — REDUCEER ────────────────────────────────────────── */}
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
                  <p style={{ fontWeight: 700, color: DARK, marginBottom: 6 }}>Jaar-op-jaar vergelijking</p>
                  <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 20 }}>Totaal tCO₂e per jaar</p>

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

                  <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 8 }}>* 2025-cijfer is een prognose op basis van de huidige reductiesnelheid</p>

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
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#15803D', marginBottom: 4 }}>Pad naar net-zero</p>
                    <p style={{ fontSize: 13, color: '#166534' }}>
                      Bij de huidige reductiesnelheid van −12% per jaar ligt jouw organisatie op koers voor net-zero in <strong>2036</strong>. Versnel naar −18% om het Science Based Targets 1,5°C-pad te halen in 2030.
                    </p>
                  </div>
                </Card>

                {/* Per-location breakdown */}
                <Card style={{ marginTop: 20 }}>
                  <p style={{ fontWeight: 700, color: DARK, marginBottom: 16 }}>Uitsplitsing per locatie</p>
                  {[
                    { location: 'HQ — Amsterdam', value: 512, pct: 41 },
                    { location: 'Warehouse — Rotterdam', value: 389, pct: 31 },
                    { location: 'Kantoor — Berlijn', value: 224, pct: 18 },
                    { location: 'Thuiswerkers', value: 122, pct: 10 },
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
                  <SectionLabel>Stap twee</SectionLabel>
                </div>
                <SectionHeading>Reduceer met wetenschappelijk onderbouwde doelen</SectionHeading>
                <BodyText>
                  Meten is slechts het begin. CO₂ Expert vertaalt je emissiedata naar een concreet actieplan, afgestemd op de Science Based Targets initiative (SBTi) en het 1,5°C-pad van het Klimaatakkoord van Parijs.
                </BodyText>

                <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    {
                      title: 'Reductiedoelen (SBTi)',
                      body: 'We berekenen de vereiste jaarlijkse reductiesnelheid op basis van jouw sector en basisjaar. Doelen worden gevalideerd tegen de SBTi-methodologie, waardoor stakeholders geloofwaardige, onafhankelijk geverifieerde doelstellingen krijgen.',
                    },
                    {
                      title: 'Jaar-op-jaar vergelijking',
                      body: 'Volg voortgang over elke rapportageperiode. Geautomatiseerde vergelijkingsrapporten laten zien welke categorieën zijn verbeterd, welke zijn verslechterd en wat de verandering heeft veroorzaakt — zodat je snel kunt handelen.',
                    },
                    {
                      title: 'Uitsplitsing per locatie',
                      body: 'Zoom in op kantoor, warehouse of land. Identificeer de hoogst emitterende locaties en stel prioriteiten waar de impact het grootst is.',
                    },
                    {
                      title: 'Pad naar net-zero',
                      body: 'Een dynamisch model projecteert je toekomstige emissies onder verschillende scenario\'s — energietransitie, vlootelectrificatie, leverancierswissel — zodat je je strategie kunt doorrekenen voordat je je vastlegt.',
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

        {/* ── 4. STAP 3 — RAPPORTEER ──────────────────────────────────────── */}
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
                  <SectionLabel>Stap drie</SectionLabel>
                </div>
                <SectionHeading>Rapporteer, deel &amp; volg voortgang</SectionHeading>
                <BodyText>
                  Zodra je voetafdruk is berekend, genereert CO₂ Expert een GHG Protocol-conform rapport dat je direct kunt delen met klanten, banken en accountants — en jaar op jaar kunt bijhouden.
                </BodyText>

                <div style={{ marginTop: 28 }}>
                  <p style={{ fontWeight: 700, color: DARK, marginBottom: 12 }}>Wat je rapport bevat</p>
                  <BodyText>
                    Een volledige Scope 1-, 2- en 3-uitsplitsing met methodologienotities, databronnen en emissiefactoren. Exporteerbaar als gebrandmerkte PDF, deelbaar via een beveiligde link, en downloadbaar in machine-leesbaar formaat voor CSRD-rapportage.
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
                    Gebouwd voor transparantie naar stakeholders
                  </p>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {[
                      'Klantklare PDF — beantwoord inkoopvragenlijsten met één klik.',
                      'Auditspoor — elk datapunt is herleidbaar naar zijn bron.',
                      'Jaar-op-jaar dashboard — volg je reductievoortgang automatisch.',
                      'CSRD-export — gestructureerde data voor regelgevingsrapportages.',
                    ].map((point) => (
                      <li key={point} style={{ fontSize: 15, color: '#78350F', lineHeight: 1.7, marginBottom: 4 }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process steps */}
                <div style={{ marginTop: 32 }}>
                  <p style={{ fontWeight: 700, color: DARK, marginBottom: 16 }}>Van berekening naar deelbaar rapport in drie stappen</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {[
                      { n: 'A', label: 'Bekijk je voetafdruk', desc: 'Onze klimaatexperts valideren je data en signaleren afwijkingen voordat het rapport wordt afgerond.' },
                      { n: 'B', label: 'Genereer je rapport', desc: 'Met één klik maak je een gebrandmerkte, GHG Protocol-conforme PDF — klaar om te delen met elke stakeholder.' },
                      { n: 'C', label: 'Volg jaar op jaar', desc: 'Je dashboard wordt bijgewerkt elke rapportageperiode zodat je voortgang kunt bewaken naar je reductiedoelen.' },
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

              {/* Right: report mockup */}
              <div>
                <Card
                  style={{
                    boxShadow: '0 12px 48px rgba(0,0,0,0.12)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top stripe */}
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
                        GHG Protocol CO₂-voetafdrukrapport
                      </p>
                      <p style={{ fontSize: 22, fontWeight: 800, color: DARK }}>CO₂ Expert</p>
                      <p style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>Scope 1, 2 &amp; 3 — Rapportagejaar 2024</p>
                    </div>

                    {/* Body */}
                    <div style={{ textAlign: 'center', marginBottom: 24 }}>
                      <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 4 }}>Opgesteld voor</p>
                      <p style={{ fontSize: 20, fontWeight: 800, color: DARK, marginBottom: 4 }}>Acme BV</p>
                      <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 16 }}>Totale gemeten CO₂-voetafdruk</p>
                      <p style={{ fontSize: 28, fontWeight: 900, color: '#14442E' }}>1 247 tCO₂e</p>
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
                        { label: 'Scope 1', value: '312 tCO₂e' },
                        { label: 'Scope 2', value: '498 tCO₂e' },
                        { label: 'Scope 3', value: '437 tCO₂e' },
                      ].map((fig) => (
                        <div key={fig.label} style={{ background: '#fff', padding: '12px 10px', textAlign: 'center' }}>
                          <p style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 4 }}>{fig.label}</p>
                          <p style={{ fontSize: 13, fontWeight: 700, color: DARK }}>{fig.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Status */}
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
                        <p style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 2 }}>Norm</p>
                        <p style={{ fontSize: 13, fontWeight: 700, color: '#166534', fontFamily: 'monospace' }}>GHG Protocol Corporate Standard</p>
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
                        GEVERIFIEERD
                      </div>
                    </div>

                    {/* Footer */}
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
                      <p style={{ fontSize: 11, color: '#9CA3AF' }}>Rapport gegenereerd op 14 februari 2025</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. TIJDLIJN ─────────────────────────────────────────────────── */}
        <section style={{ background: DARK, padding: '96px 24px', color: '#fff' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <SectionLabel>Snelheid</SectionLabel>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Van aanmelding tot geverifieerd rapport in 2 weken
            </h2>
            <p style={{ fontSize: 17, color: '#94A3B8', maxWidth: 560, margin: '0 auto 64px' }}>
              Onze begeleide onboarding en kant-en-klare emissiefactoren zorgen ervoor dat de meeste organisaties hun eerste voetafdruk in dagen voltooien, niet in maanden.
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
                  period: 'Dag 1',
                  title: 'Account aanmaken',
                  desc: 'Maak je organisatieprofiel aan, nodig teamleden uit, stel rapportagegrenzen in.',
                  icon: 'M5 12h14M12 5l7 7-7 7',
                },
                {
                  period: 'Week 1',
                  title: 'Data invoeren & berekenen',
                  desc: 'Upload bestaande data of voer handmatig in. Automatische Scope 1/2/3-berekening met auditspoor.',
                  icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
                },
                {
                  period: 'Week 2',
                  title: 'Reviewen & valideren',
                  desc: 'Onze klimaatexperts bekijken je voetafdruk. Je ontvangt een kwaliteitsborggrapport.',
                  icon: 'M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0',
                },
                {
                  period: 'Afsluiting',
                  title: 'Rapport opgeleverd',
                  desc: 'Ontvang je GHG Protocol-conform voetafdrukrapport — klaar om te delen met klanten, banken en accountants.',
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

        {/* ── 6. STANDAARDEN ──────────────────────────────────────────────── */}
        <section style={{ background: '#fff', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <SectionLabel>Gebouwd op internationale normen</SectionLabel>
              <SectionHeading>Wereldwijd erkend, vertrouwd door accountants</SectionHeading>
              <BodyText style={{ maxWidth: 600, margin: '0 auto' }}>
                CO₂ Expert is van de grond af aan ontworpen om te voldoen aan de toonaangevende internationale frameworks, zodat je voetafdrukrapport de toets der kritiek doorstaat — van investeerders, toezichthouders en het publiek.
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
                  body: 'De meest gebruikte boekhoudnorm ter wereld voor broeikasgasemissies. Definieert Scope 1-, 2- en 3-grenzen en berekeningsmethodieken. Vereist door de meeste ESG-rapportageframeworks.',
                  badge: '#2563EB',
                },
                {
                  acronym: 'ISO 14064',
                  full: 'Internationale Organisatie voor Standaardisatie',
                  body: 'De internationale norm voor broeikasgasinventarissen en -verificatie. ISO 14064-1 betreft organisatierapportage; ISO 14064-3 betreft verificatie door derden. Breed geaccepteerd door toezichthouders en ratingbureaus.',
                  badge: '#7C3AED',
                },
                {
                  acronym: 'Verra VCS',
                  full: 'Verified Carbon Standard',
                  body: 'Het grootste vrijwillige certificeringsprogramma voor CO₂-credits. VCS-gecertificeerde projecten worden gecontroleerd door onafhankelijke derden en geregistreerd in Verra\'s openbaar register. Voorkomt dubbeltelling via serienummeruitgifte.',
                  badge: '#059669',
                },
                {
                  acronym: 'Gold Standard',
                  full: 'Gold Standard for the Global Goals',
                  body: 'Opgericht door WWF en andere ngo\'s, certificeert Gold Standard projecten met het hoogste niveau van milieu-integriteit en duurzame ontwikkelingsco-voordelen — biodiversiteit, schoon water en gemeenschapsmiddelen.',
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
              Begin vandaag
            </p>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              Klaar om je CO₂-voetafdruk in kaart te brengen?
            </h2>
            <p style={{ fontSize: 18, color: '#CBD5E1', lineHeight: 1.7, marginBottom: 40 }}>
              Wij laten u precies zien hoe uw voetafdruk eruitziet voordat uw klant ernaar vraagt.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/nl/contact"
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
                Plan een gratis gesprek
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
                Bekijk prijzen
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer lang="nl" />
    </>
  )
}
