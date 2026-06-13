'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ── Design tokens
const O  = '#F5A623'
const D  = '#111827'
const G  = '#6B7280'
const W  = '#FFFFFF'
const OL = '#FFF7ED'
const OB = '#FED7AA'
const B  = '#E5E7EB'
const LG = '#F9FAFB'

function Icon({ d, size = 20, color = O }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0 }}>
      <path d={d} />
    </svg>
  )
}

export interface CaseStudy {
  company: string
  sector: string
  flag?: string
  result: string
  metric?: string
  quote?: string
}

export interface FAQ {
  q: string
  a: string
}

export interface DemoPageProps {
  lang: 'en' | 'nl'
  badge?: string
  headline: string
  headlineAccent?: string
  subheadline: string
  urgencyNote?: string
  painPoints: Array<{ icon: string; title: string; body: string }>
  cases: CaseStudy[]
  consultant: {
    name: string
    role: string
    bio: string
    initials: string
    photoUrl?: string
    calendarUrl: string
    langTag: string
  }
  faqs: FAQ[]
  ctaPrimary?: string
  ctaSecondary?: string
}

const TEAM_MEMBERS = [
  { initials: 'FO', name: 'Ferdia',   photoUrl: undefined as string | undefined },
  { initials: 'W',  name: 'Wienke',   photoUrl: undefined as string | undefined },
  { initials: 'JP', name: 'Josefien', photoUrl: undefined as string | undefined },
]

function TeamAvatar({ initials, photoUrl, size = 72 }: {
  initials: string; photoUrl?: string; size?: number
}) {
  if (photoUrl) {
    return (
      <Image src={photoUrl} alt={initials} width={size} height={size}
        style={{ borderRadius: '50%', objectFit: 'cover', width: size, height: size,
          border: `3px solid ${W}`, boxShadow: `0 0 0 2px ${OB}` }} />
    )
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: `linear-gradient(135deg, ${O}, #C8710E)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, border: `3px solid ${W}`,
      boxShadow: `0 0 0 2px ${OB}, 0 4px 12px rgba(245,166,35,0.2)`,
    }}>
      <span style={{ fontSize: size * 0.3, fontWeight: 800, color: W }}>
        {initials}
      </span>
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${B}` }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%', textAlign: 'left', padding: '20px 0',
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: D, lineHeight: 1.4 }}>{q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          background: open ? O : OL, border: `1px solid ${open ? O : OB}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          transition: 'transform 0.25s ease, background 0.2s ease',
          transform: open ? 'rotate(45deg)' : 'none',
        }}>
          <Icon d="M12 5v14M5 12h14" size={13} color={open ? W : O} />
        </span>
      </button>
      <div style={{ maxHeight: open ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <p style={{ fontSize: 14, color: G, lineHeight: 1.8, paddingBottom: 20, margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

// ── CO₂ Scope widget — shows what the product output looks like
function ScopeWidget({ lang }: { lang: 'en' | 'nl' }) {
  const isNL = lang === 'nl'
  const scopes = [
    { label: 'Scope 1', sub: isNL ? 'Directe emissies'   : 'Direct emissions',  pct: 24, value: '240 tCO₂e' },
    { label: 'Scope 2', sub: isNL ? 'Ingekochte energie' : 'Purchased energy',  pct: 16, value: '160 tCO₂e' },
    { label: 'Scope 3', sub: isNL ? 'Waardeketen'        : 'Value chain',        pct: 60, value: '600 tCO₂e' },
  ]
  return (
    <div style={{
      background: W, border: `1px solid ${B}`,
      borderRadius: 16, padding: '24px 26px', width: '100%', maxWidth: 320,
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: O, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          CO₂ {isNL ? 'Voetafdruk Rapport' : 'Footprint Report'}
        </span>
        <span style={{
          fontSize: 10, color: G, background: LG,
          border: `1px solid ${B}`, padding: '2px 8px', borderRadius: 4, fontWeight: 500,
        }}>GHG Protocol</span>
      </div>
      {scopes.map((s, i) => (
        <div key={s.label} style={{ marginBottom: i < scopes.length - 1 ? 16 : 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, color: D }}>{s.label}</span>
              <span style={{ fontSize: 11, color: G, marginLeft: 7 }}>{s.sub}</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: O }}>{s.value}</span>
          </div>
          <div style={{ height: 6, background: B, borderRadius: 3 }}>
            <div style={{ width: `${s.pct}%`, height: '100%', background: O, borderRadius: 3, opacity: 0.7 + i * 0.1 }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: 18, paddingTop: 16, borderTop: `1px solid ${B}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: G }}>{isNL ? 'Totaal · 2024' : 'Total · 2024'}</span>
        <span style={{ fontSize: 20, fontWeight: 900, color: D, letterSpacing: '-0.03em' }}>1,000 tCO₂e</span>
      </div>
      <div style={{
        marginTop: 12, background: OL, border: `1px solid ${OB}`,
        borderRadius: 7, padding: '8px 12px', fontSize: 11, color: '#92400E', fontWeight: 600,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <Icon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" size={12} color={O} />
        {isNL ? 'Geverifieerd · GHG Protocol · PDF beschikbaar' : 'Verified · GHG Protocol · PDF available'}
      </div>
    </div>
  )
}

export default function DemoLandingPage({
  lang, badge, headline, headlineAccent, subheadline,
  urgencyNote, painPoints, cases, consultant, faqs,
  ctaPrimary, ctaSecondary,
}: DemoPageProps) {
  const isNL = lang === 'nl'
  const bookText  = ctaPrimary  ?? (isNL ? 'Demo inplannen' : 'Schedule a demo')
  const learnText = ctaSecondary ?? (isNL ? 'Hoe het werkt' : 'See how it works')

  const [showSticky, setShowSticky] = useState(false)
  const [wideHero, setWideHero] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const check = () => setWideHero(window.innerWidth >= 820)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const renderHeadline = () => {
    if (!headlineAccent) return <>{headline}</>
    const parts = headline.split(headlineAccent)
    return (
      <>
        {parts[0]}
        <span style={{ color: O }}>{headlineAccent}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: D, background: W, minHeight: '100vh' }}>

      {/* ── STICKY MOBILE CTA */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: W, borderTop: `1px solid ${B}`,
        padding: '12px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
        opacity: showSticky ? 1 : 0,
        transform: showSticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: showSticky ? 'auto' : 'none',
      }}>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: D, flex: 1, lineHeight: 1.3 }}>
          {isNL ? '30 min · gratis · geen verplichtingen' : '30 min · free · no commitment'}
        </p>
        <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
          background: O, color: W, fontWeight: 700, fontSize: 14,
          padding: '10px 20px', borderRadius: 8, textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0,
          boxShadow: `0 4px 14px rgba(245,166,35,0.4)`,
        }}>
          {bookText}
          <Icon d="M5 12h14M12 5l7 7-7 7" size={13} color={W} />
        </a>
      </div>

      {/* ── NAV */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${B}`,
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto', padding: '0 24px',
          height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href={isNL ? '/nl' : '/'} style={{ textDecoration: 'none' }}>
            <Image src="/logo.svg" alt="CO₂ Expert" width={110} height={28}
              style={{ height: 28, width: 'auto' }} priority />
          </Link>
          <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
            background: O, color: W, fontWeight: 700, fontSize: 13,
            padding: '8px 18px', borderRadius: 7, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            boxShadow: `0 3px 12px rgba(245,166,35,0.35)`,
          }}>
            {bookText}
            <Icon d="M5 12h14M12 5l7 7-7 7" size={13} color={W} />
          </a>
        </div>
      </header>

      {/* ── HERO — white, two-column with scope widget on desktop */}
      <section style={{
        background: W, padding: 'clamp(64px, 10vw, 104px) 24px clamp(56px, 8vw, 88px)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Subtle orange glow top-center */}
        <div aria-hidden style={{
          position: 'absolute', top: -140, left: '30%',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(245,166,35,0.1) 0%, transparent 68%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          maxWidth: 1060, margin: '0 auto', position: 'relative',
          display: 'grid',
          gridTemplateColumns: wideHero ? 'minmax(0,1fr) auto' : '1fr',
          gap: 'clamp(40px, 6vw, 72px)', alignItems: 'center',
        }}>
          <div>
            {badge && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24,
                background: OL, border: `1px solid ${OB}`,
                borderRadius: 50, padding: '5px 14px',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: O,
              }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: O }} />
                {badge}
              </div>
            )}
            <h1 style={{
              fontSize: 'clamp(28px, 5vw, 54px)', fontWeight: 900,
              lineHeight: 1.08, letterSpacing: '-0.03em',
              color: D, margin: '0 0 22px',
            }}>
              {renderHeadline()}
            </h1>
            <p style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)', color: G, lineHeight: 1.75,
              maxWidth: 520, margin: '0 0 28px',
            }}>
              {subheadline}
            </p>
            {urgencyNote && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
                background: '#FEF3C7', border: '1px solid #FDE68A',
                borderRadius: 7, padding: '9px 16px', fontSize: 13, color: '#92400E', fontWeight: 600,
              }}>
                <Icon d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" size={14} color="#D97706" />
                {urgencyNote}
              </div>
            )}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 28 }}>
              <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: O, color: W, fontWeight: 700, fontSize: 15,
                padding: '13px 28px', borderRadius: 8, textDecoration: 'none',
                boxShadow: `0 6px 24px rgba(245,166,35,0.35)`,
              }}>
                {bookText}
                <Icon d="M5 12h14M12 5l7 7-7 7" size={15} color={W} />
              </a>
              <Link href={isNL ? '/nl/hoe-het-werkt' : '/how-it-works'} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: D, fontWeight: 600, fontSize: 14, textDecoration: 'none',
                padding: '13px 20px', borderRadius: 8,
                border: `1.5px solid ${B}`,
              }}>
                {learnText}
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex' }}>
                {TEAM_MEMBERS.map((m, i) => (
                  <div key={m.initials} style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${O}, #C8710E)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginLeft: i > 0 ? -7 : 0, border: `2px solid ${W}`,
                    fontSize: 9, fontWeight: 800, color: W, position: 'relative', zIndex: 3 - i,
                  }}>
                    {m.initials}
                  </div>
                ))}
              </div>
              <span style={{ fontSize: 13, color: G }}>
                {isNL ? '500+ bedrijven geholpen · Gratis · 30 minuten' : '500+ companies helped · Free · 30 minutes'}
              </span>
            </div>
          </div>
          {wideHero && (
            <div style={{ flexShrink: 0 }}>
              <ScopeWidget lang={lang} />
            </div>
          )}
        </div>
      </section>

      {/* ── STATS STRIP */}
      <section style={{ background: LG, borderTop: `1px solid ${B}`, borderBottom: `1px solid ${B}` }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto', padding: '0 24px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        }}>
          {[
            { n: '500+',         label: isNL ? 'bedrijven gemeten' : 'companies measured' },
            { n: 'GHG Protocol', label: isNL ? 'gecertificeerde methode' : 'certified methodology' },
            { n: 'Scope 1,2&3',  label: isNL ? 'volledig gedekt' : 'fully covered' },
            { n: 'CSRD',         label: isNL ? 'rapporten geaccepteerd' : 'reports accepted' },
          ].map((s, i) => (
            <div key={s.n} style={{
              padding: '20px', textAlign: 'center',
              borderLeft: i > 0 ? `1px solid ${B}` : 'none',
            }}>
              <div style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 900, color: O, marginBottom: 4, letterSpacing: '-0.02em' }}>
                {s.n}
              </div>
              <div style={{ fontSize: 11, color: G, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PAIN POINTS — editorial numbered list, no icon boxes */}
      <section style={{ background: W, padding: 'clamp(64px, 10vw, 96px) 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 900,
            color: D, letterSpacing: '-0.028em', margin: '0 0 52px', lineHeight: 1.1,
          }}>
            {isNL ? 'Wij begrijpen de uitdaging.' : 'We understand the challenge.'}
          </h2>
          {painPoints.map((p, i) => (
            <div key={p.title} style={{
              display: 'grid', gridTemplateColumns: '56px 1fr',
              gap: 28, padding: 'clamp(24px, 4vw, 36px) 0',
              borderTop: `1px solid ${B}`,
            }}>
              <span style={{
                fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 900,
                color: B, lineHeight: 1, paddingTop: 4,
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 800, color: D, margin: '0 0 10px', lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 15, color: G, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDIES — warm light background, metric-first */}
      <section style={{ background: LG, padding: 'clamp(64px, 10vw, 96px) 24px', borderTop: `1px solid ${B}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 900, color: D, letterSpacing: '-0.028em', margin: '0 0 8px' }}>
              {isNL ? 'Resultaten die spreken.' : 'Results that speak.'}
            </h2>
            <p style={{ fontSize: 15, color: G, margin: 0 }}>
              {isNL ? 'Drie verhalen van bedrijven die de stap zetten.' : 'Three stories from companies that made the move.'}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {cases.map(c => (
              <div key={c.company} style={{
                background: W, border: `1px solid ${B}`, borderRadius: 14,
                padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                {c.metric && (
                  <div style={{
                    fontSize: 14, fontWeight: 800, color: O,
                    lineHeight: 1.3, paddingBottom: 12,
                    borderBottom: `2px solid ${OB}`,
                  }}>
                    {c.metric}
                  </div>
                )}
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: D }}>{c.company}</div>
                  <div style={{ fontSize: 11, color: G }}>{c.sector}</div>
                </div>
                {c.quote && (
                  <blockquote style={{
                    margin: 0, padding: '12px 16px',
                    background: OL, borderLeft: `3px solid ${O}`,
                    borderRadius: '0 8px 8px 0',
                    fontSize: 13, color: '#6B4E1A', fontStyle: 'italic', lineHeight: 1.7,
                  }}>
                    "{c.quote}"
                  </blockquote>
                )}
                <p style={{ fontSize: 13, color: G, lineHeight: 1.75, margin: 0 }}>{c.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATION BADGES */}
      <section style={{ background: W, borderTop: `1px solid ${B}`, borderBottom: `1px solid ${B}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '18px 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
          {[
            isNL ? 'GHG Protocol gecertificeerd' : 'GHG Protocol certified',
            isNL ? 'CSRD Scope 3 geaccepteerd'   : 'CSRD Scope 3 accepted',
            isNL ? 'Scope 1, 2 & 3 volledig'      : 'Scope 1, 2 & 3 complete',
            isNL ? 'PDF-rapport inbegrepen'        : 'PDF report included',
            isNL ? 'Geverifieerd door auditors'    : 'Verified by auditors',
          ].map(t => (
            <span key={t} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: OL, border: `1px solid ${OB}`,
              borderRadius: 6, padding: '6px 12px',
              fontSize: 12, fontWeight: 600, color: '#92400E',
            }}>
              <Icon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" size={12} color={O} />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS — light, pipeline-style */}
      <section style={{ background: LG, padding: 'clamp(64px, 10vw, 96px) 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 900, color: D, letterSpacing: '-0.028em', margin: '0 0 8px' }}>
            {isNL ? 'Van nul naar rapport in 3 stappen' : 'From zero to report in 3 steps'}
          </h2>
          <p style={{ fontSize: 15, color: G, margin: '0 0 44px', lineHeight: 1.7 }}>
            {isNL
              ? 'Geen interne IT. Geen externe consultant. Geen maanden wachten.'
              : 'No internal IT project. No external consultant. No months of waiting.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {[
              {
                n: '01', phase: isNL ? '½ dag' : '½ day',
                title: isNL ? 'Jouw data aanleveren' : 'Provide your data',
                bg: W, border: `1px solid ${B}`,
                items: isNL
                  ? ['Energiefacturen', 'Brandstofbonnen', 'Reiskosten', 'Inkoopdata']
                  : ['Energy bills', 'Fuel receipts', 'Travel records', 'Procurement data'],
              },
              {
                n: '02', phase: isNL ? '3–4 weken' : '3–4 weeks',
                title: isNL ? 'Wij berekenen alles' : 'We calculate everything',
                bg: D, border: 'none',
                items: ['GHG Protocol', 'Scope 1 + 2 + 3', isNL ? 'Emissiefactoren' : 'Emission factors', isNL ? 'Kwaliteitscontrole' : 'Quality check'],
              },
              {
                n: '03', phase: isNL ? 'Direct beschikbaar' : 'Immediately',
                title: isNL ? 'Deel je rapport' : 'Share your report',
                bg: OL, border: `1px solid ${OB}`,
                items: [isNL ? 'Geverifieerd PDF' : 'Verified PDF', 'Scope 1,2&3 breakdown', isNL ? 'Deelbaar met klanten' : 'Share with clients', 'GHG Protocol conform'],
              },
            ].map(step => {
              const dark = step.bg === D
              return (
                <div key={step.n} style={{ background: step.bg, border: step.border, borderRadius: 14, padding: '28px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{ fontSize: 11, fontWeight: 900, color: dark ? 'rgba(255,255,255,0.4)' : B, letterSpacing: '0.08em' }}>{step.n}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 600,
                      color: dark ? O : '#92400E',
                      background: dark ? 'rgba(245,166,35,0.15)' : OB,
                      border: dark ? '1px solid rgba(245,166,35,0.3)' : `1px solid ${O}30`,
                      borderRadius: 50, padding: '2px 10px',
                    }}>
                      {step.phase}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: dark ? W : D, margin: '0 0 14px', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {step.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: dark ? O : O, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: dark ? 'rgba(255,255,255,0.7)' : G, lineHeight: 1.4 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM & DEMO CTA — warm orange-tinted light */}
      <section style={{
        background: OL, borderTop: `1px solid ${OB}`, borderBottom: `1px solid ${OB}`,
        padding: 'clamp(64px, 10vw, 96px) 24px',
      }}>
        <div style={{
          maxWidth: 880, margin: '0 auto',
          display: 'grid', gridTemplateColumns: wideHero ? 'auto 1fr' : '1fr',
          gap: 'clamp(40px, 6vw, 64px)', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', flexDirection: wideHero ? 'column' : 'row', alignItems: 'center', gap: 16, justifyContent: wideHero ? 'flex-start' : 'center' }}>
            {TEAM_MEMBERS.map(m => (
              <div key={m.initials} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
                <TeamAvatar initials={m.initials} photoUrl={m.photoUrl} size={64} />
                <span style={{ fontSize: 11, fontWeight: 700, color: D }}>{m.name}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 18,
              background: W, border: `1px solid ${OB}`,
              borderRadius: 6, padding: '5px 12px', fontSize: 11, fontWeight: 700, color: O, letterSpacing: '0.08em',
            }}>
              Carbon Strategy Consultants — CO₂ Expert
            </div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, color: D, margin: '0 0 12px', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              {isNL ? 'Plan een gratis demo' : 'Schedule a free demo'}
            </h2>
            <p style={{ fontSize: 15, color: G, lineHeight: 1.8, margin: '0 0 28px', maxWidth: 480 }}>
              {consultant.bio}
            </p>
            <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: O, color: W, fontWeight: 700, fontSize: 15,
              padding: '13px 28px', borderRadius: 8, textDecoration: 'none',
              boxShadow: `0 6px 24px rgba(245,166,35,0.35)`,
            }}>
              {isNL ? 'Demo inplannen' : 'Schedule a demo'}
              <Icon d="M5 12h14M12 5l7 7-7 7" size={15} color={W} />
            </a>
            <p style={{ marginTop: 12, fontSize: 12, color: G }}>
              {isNL
                ? 'Gratis · 30 minuten · Binnen 24 uur een timeslot beschikbaar'
                : 'Free · 30 minutes · A slot available within 24 hours'}
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ — white */}
      <section style={{ background: W, padding: 'clamp(64px, 10vw, 96px) 24px' }}>
        <div style={{ maxWidth: 660, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 900, color: D, margin: '0 0 8px', letterSpacing: '-0.025em' }}>
            {isNL ? 'Veelgestelde vragen' : 'Common questions'}
          </h2>
          <p style={{ fontSize: 15, color: G, margin: '0 0 40px' }}>
            {isNL ? 'Geen vraag te klein. Wij beantwoorden alles in de demo.' : 'No question too small. We answer everything in the demo.'}
          </p>
          {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          <div style={{ marginTop: 32 }}>
            <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: O, fontWeight: 700, fontSize: 14, textDecoration: 'none',
            }}>
              {isNL ? 'Meer vragen? Plan een demo' : 'More questions? Schedule a demo'}
              <Icon d="M5 12h14M12 5l7 7-7 7" size={14} color={O} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — only dark section, deliberate contrast */}
      <section style={{
        background: D, padding: 'clamp(64px, 10vw, 96px) 24px',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(245,166,35,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 560, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            {TEAM_MEMBERS.map((m, i) => (
              <div key={m.initials} style={{
                width: 44, height: 44, borderRadius: '50%',
                background: `linear-gradient(135deg, ${O}, #C8710E)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginLeft: i > 0 ? -10 : 0, border: `2px solid ${D}`,
                fontSize: 11, fontWeight: 800, color: W, position: 'relative', zIndex: 3 - i,
              }}>
                {m.photoUrl
                  ? <Image src={m.photoUrl} alt={m.name} width={44} height={44} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                  : m.initials}
              </div>
            ))}
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, color: W, margin: '0 0 14px', letterSpacing: '-0.028em' }}>
            {isNL ? 'Klaar om te beginnen?' : 'Ready to get your number?'}
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: '0 0 36px' }}>
            {isNL
              ? 'Geen PowerPoint, geen verkooppraatje — gewoon antwoorden op jouw vragen. Gratis, 30 minuten.'
              : 'No PowerPoint, no sales pitch — just direct answers to your questions. Free, 30 minutes.'}
          </p>
          <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: O, color: W, fontWeight: 700, fontSize: 16,
            padding: '15px 34px', borderRadius: 8, textDecoration: 'none',
            boxShadow: `0 6px 28px rgba(245,166,35,0.4)`,
          }}>
            {isNL ? 'Demo inplannen' : 'Schedule a demo'}
            <Icon d="M5 12h14M12 5l7 7-7 7" size={16} color={W} />
          </a>
        </div>
      </section>

      {/* ── FOOTER */}
      <footer style={{ background: '#0D1117', padding: '24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Link href={isNL ? '/nl' : '/'} style={{ display: 'inline-block', marginBottom: 12, textDecoration: 'none' }}>
          <Image src="/logo-white.svg" alt="CO₂ Expert" width={90} height={22}
            style={{ height: 22, width: 'auto', opacity: 0.35 }} />
        </Link>
        <p style={{ fontSize: 12, color: '#374151', margin: 0 }}>
          © {new Date().getFullYear()} CO₂ Expert — Green Earth Group ·{' '}
          <Link href="/privacy" style={{ color: '#4B5563', textDecoration: 'none' }}>Privacy</Link>
          {' · '}
          <Link href={isNL ? '/nl' : '/'} style={{ color: '#4B5563', textDecoration: 'none' }}>
            {isNL ? 'Terug naar website' : 'Back to website'}
          </Link>
        </p>
      </footer>

    </div>
  )
}
