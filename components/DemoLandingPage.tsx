'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ── Design tokens ────────────────────────────────────────────────────────────
const O  = '#F5A623'
const D  = '#1A1A2E'
const G  = '#6B7280'
const B  = '#E5E7EB'
const W  = '#FFFFFF'
const OL = '#FFF7ED'
const OB = '#FED7AA'

function Icon({ d, size = 20, color = O }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0 }}>
      <path d={d} />
    </svg>
  )
}

// ── Types ────────────────────────────────────────────────────────────────────
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

// ── Team — drop real photos at /public/team/{ferdia,wienke,josefien}.jpg ────
const TEAM_MEMBERS = [
  { initials: 'FO', name: 'Ferdia',   photoUrl: undefined as string | undefined },
  { initials: 'W',  name: 'Wienke',   photoUrl: undefined as string | undefined },
  { initials: 'JP', name: 'Josefien', photoUrl: undefined as string | undefined },
]

// ── Sub-components ───────────────────────────────────────────────────────────
function TeamAvatar({ initials, photoUrl, size = 80 }: {
  initials: string; photoUrl?: string; size?: number
}) {
  if (photoUrl) {
    return (
      <Image src={photoUrl} alt={initials} width={size} height={size}
        style={{ borderRadius: '50%', objectFit: 'cover', width: size, height: size,
          boxShadow: `0 0 0 3px ${W}, 0 4px 12px rgba(0,0,0,0.1)` }} />
    )
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: `linear-gradient(135deg, ${O}, #E8831A)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      boxShadow: `0 0 0 3px ${W}, 0 4px 12px rgba(245,166,35,0.3)`,
    }}>
      <span style={{ fontSize: size * 0.3, fontWeight: 800, color: W, letterSpacing: '-0.02em' }}>
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
          width: 26, height: 26, borderRadius: '50%',
          background: open ? O : OL,
          border: `1px solid ${open ? O : OB}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          transition: 'transform 0.25s ease, background 0.2s ease',
          transform: open ? 'rotate(45deg)' : 'none',
        }}>
          <Icon d="M12 5v14M5 12h14" size={13} color={open ? W : O} />
        </span>
      </button>
      {/* Smooth slide with CSS max-height transition */}
      <div style={{
        maxHeight: open ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
      }}>
        <p style={{ fontSize: 14, color: G, lineHeight: 1.8, paddingBottom: 20, margin: 0 }}>
          {a}
        </p>
      </div>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
export default function DemoLandingPage({
  lang, badge, headline, headlineAccent, subheadline,
  urgencyNote, painPoints, cases, consultant, faqs,
  ctaPrimary, ctaSecondary,
}: DemoPageProps) {
  const isNL = lang === 'nl'
  const bookText  = ctaPrimary  ?? (isNL ? 'Demo inplannen' : 'Schedule a demo')
  const learnText = ctaSecondary ?? (isNL ? 'Hoe het werkt' : 'See how it works')

  // Sticky mobile CTA — appears after scrolling past the hero
  const [showSticky, setShowSticky] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const renderHeadline = () => {
    if (!headlineAccent) return <>{headline}</>
    const parts = headline.split(headlineAccent)
    return (
      <>
        {parts[0]}
        <span style={{
          background: `linear-gradient(135deg, ${O}, #E8831A)`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>{headlineAccent}</span>
        {parts[1]}
      </>
    )
  }

  const ArrowBtn = ({ href, children, large = false, dark = false }: {
    href: string; children: React.ReactNode; large?: boolean; dark?: boolean
  }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-flex', alignItems: 'center', gap: large ? 10 : 8,
      background: dark ? D : O,
      color: W, fontWeight: 700,
      fontSize: large ? 17 : 15,
      padding: large ? '16px 36px' : '13px 26px',
      borderRadius: 10, textDecoration: 'none',
      boxShadow: dark ? `0 6px 24px rgba(0,0,0,0.3)` : `0 6px 24px ${O}50`,
      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    }}>
      {children}
      <Icon d="M5 12h14M12 5l7 7-7 7" size={large ? 17 : 15} color={W} />
    </a>
  )

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: D, background: W, minHeight: '100vh' }}>

      {/* ── STICKY MOBILE CTA ───────────────────────────────────────────── */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: W, borderTop: `1px solid ${B}`,
        padding: '12px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
        opacity: showSticky ? 1 : 0,
        transform: showSticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        // Only meaningful on mobile — on desktop the nav CTA is always visible
        pointerEvents: showSticky ? 'auto' : 'none',
      }}>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: D, flex: 1, lineHeight: 1.3 }}>
          {isNL ? '30 min · gratis · geen verplichtingen' : '30 min · free · no commitment'}
        </p>
        <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
          background: O, color: W, fontWeight: 700, fontSize: 14,
          padding: '11px 20px', borderRadius: 8, textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0,
          boxShadow: `0 4px 14px ${O}50`,
        }}>
          {bookText}
          <Icon d="M5 12h14M12 5l7 7-7 7" size={13} color={W} />
        </a>
      </div>

      {/* ── MINIMAL NAV ─────────────────────────────────────────────────── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(12px)', borderBottom: `1px solid ${B}`,
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto', padding: '0 24px',
          height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href={isNL ? '/nl' : '/'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image src="/logo.svg" alt="CO₂ Expert" width={120} height={30}
              style={{ height: 30, width: 'auto' }} priority />
          </Link>
          <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
            background: O, color: W, fontWeight: 700, fontSize: 14,
            padding: '9px 20px', borderRadius: 8, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            boxShadow: `0 4px 12px ${O}40`,
          }}>
            {bookText}
            <Icon d="M5 12h14M12 5l7 7-7 7" size={14} color={W} />
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section style={{
        background: W, padding: 'clamp(56px, 10vw, 96px) 24px clamp(48px, 8vw, 72px)',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 450, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(245,166,35,0.13) 0%, transparent 68%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          {badge && (
            <span style={{
              display: 'inline-block', background: OL, border: `1px solid ${OB}`,
              borderRadius: 50, padding: '4px 16px', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: O, marginBottom: 24,
            }}>
              {badge}
            </span>
          )}
          <h1 style={{
            fontSize: 'clamp(28px, 5.5vw, 58px)', fontWeight: 800,
            lineHeight: 1.1, letterSpacing: '-0.028em',
            color: D, margin: '0 0 24px',
          }}>
            {renderHeadline()}
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)', color: G, lineHeight: 1.75,
            maxWidth: 620, margin: '0 auto 36px',
          }}>
            {subheadline}
          </p>
          {urgencyNote && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32,
              background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 8,
              padding: '9px 18px', fontSize: 13, color: '#92400E', fontWeight: 600,
            }}>
              <Icon d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" size={15} color="#D97706" />
              {urgencyNote}
            </div>
          )}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <ArrowBtn href={consultant.calendarUrl} large>{bookText}</ArrowBtn>
            <Link href={isNL ? '/nl/hoe-het-werkt' : '/how-it-works'} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: W, color: D, fontWeight: 600, fontSize: 15,
              padding: '13px 26px', borderRadius: 10, textDecoration: 'none',
              border: `1.5px solid ${B}`,
            }}>
              {learnText}
            </Link>
          </div>
          {/* Social proof micro-line */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <div style={{ display: 'flex' }}>
              {['FO','W','JP'].map((init, i) => (
                <div key={init} style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${O}, #E8831A)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginLeft: i > 0 ? -6 : 0, border: `2px solid ${W}`,
                  fontSize: 8, fontWeight: 800, color: W, zIndex: 3 - i, position: 'relative',
                }}>
                  {init}
                </div>
              ))}
            </div>
            <p style={{ margin: 0, fontSize: 13, color: '#9CA3AF' }}>
              {isNL
                ? '500+ bedrijven geholpen · Gratis · 30 minuten'
                : '500+ companies helped · Free · 30 minutes'}
            </p>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STATS ──────────────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', borderTop: `1px solid ${B}`, borderBottom: `1px solid ${B}` }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto', padding: '0 24px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        }}>
          {[
            { n: '500+',          label: isNL ? 'bedrijven gemeten' : 'companies measured' },
            { n: 'GHG Protocol',  label: isNL ? 'gecertificeerde methode' : 'certified methodology' },
            { n: 'Scope 1,2 & 3', label: isNL ? 'volledig gedekt' : 'fully covered' },
            { n: 'CSRD',          label: isNL ? 'rapporten geaccepteerd' : 'reports accepted' },
          ].map((s, i) => (
            <div key={s.n} style={{
              padding: '22px 20px', textAlign: 'center',
              borderLeft: i > 0 ? `1px solid ${B}` : 'none',
            }}>
              <div style={{ fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: 800, color: D, marginBottom: 4 }}>
                {s.n}
              </div>
              <div style={{ fontSize: 12, color: G, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PAIN POINTS ─────────────────────────────────────────────────── */}
      <section style={{ background: W, padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{
            textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: O, marginBottom: 14,
          }}>
            {isNL ? 'Herken je dit?' : 'Sound familiar?'}
          </p>
          <h2 style={{
            textAlign: 'center', fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800,
            color: D, marginBottom: 48, letterSpacing: '-0.02em',
          }}>
            {isNL ? 'De drie grootste obstakels' : 'The three biggest blockers'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {painPoints.map(p => (
              <div key={p.title} style={{
                background: W, border: `1px solid ${B}`, borderRadius: 16,
                padding: '28px 24px', transition: 'box-shadow 0.2s ease',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, background: OL,
                  border: `1px solid ${OB}`, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: 18,
                }}>
                  <Icon d={p.icon} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: D, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: G, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ────────────────────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{
            textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: O, marginBottom: 14,
          }}>
            {isNL ? 'Klantverhalen' : 'Client results'}
          </p>
          <h2 style={{
            textAlign: 'center', fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800,
            color: D, marginBottom: 8, letterSpacing: '-0.02em',
          }}>
            {isNL ? 'Bedrijven net als het jouwe' : 'Companies just like yours'}
          </h2>
          <p style={{ textAlign: 'center', fontSize: 15, color: G, marginBottom: 48 }}>
            {isNL
              ? 'Van eerste meting tot geverifieerd rapport — dit is hoe het ging.'
              : 'From first measurement to verified report — here\'s how it went.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {cases.map(c => (
              <div key={c.company} style={{
                background: W, border: `1px solid ${B}`, borderRadius: 16,
                padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 11, background: OL,
                    border: `1px solid ${OB}`, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 20, flexShrink: 0,
                  }}>
                    {c.flag ?? '🏢'}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: D }}>{c.company}</div>
                    <div style={{ fontSize: 12, color: G }}>{c.sector}</div>
                  </div>
                </div>
                {c.metric && (
                  <div style={{
                    background: OL, borderRadius: 8, padding: '10px 14px',
                    fontSize: 13, fontWeight: 700, color: '#92400E',
                    borderLeft: `3px solid ${O}`,
                  }}>
                    ✓ {c.metric}
                  </div>
                )}
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{c.result}</p>
                {c.quote && (
                  <blockquote style={{
                    margin: 0, padding: '12px 16px',
                    borderLeft: `3px solid ${O}`,
                    background: '#FFFBF5',
                    borderRadius: '0 8px 8px 0',
                    fontSize: 13, color: G, fontStyle: 'italic', lineHeight: 1.7,
                  }}>
                    "{c.quote}"
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST CERTIFICATION STRIP ───────────────────────────────────── */}
      <section style={{ background: W, borderTop: `1px solid ${B}`, borderBottom: `1px solid ${B}` }}>
        <div style={{
          maxWidth: 900, margin: '0 auto', padding: '20px 24px',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 32px',
        }}>
          {[
            isNL ? '✓ GHG Protocol gecertificeerd' : '✓ GHG Protocol certified',
            isNL ? '✓ CSRD Scope 3 geaccepteerd'   : '✓ CSRD Scope 3 accepted',
            isNL ? '✓ Scope 1, 2 & 3 volledig'      : '✓ Scope 1, 2 & 3 complete',
            isNL ? '✓ PDF-rapport inbegrepen'        : '✓ PDF report included',
            isNL ? '✓ Geverifieerd door auditors'    : '✓ Verified by auditors',
          ].map(t => (
            <span key={t} style={{ fontSize: 13, fontWeight: 600, color: G, whiteSpace: 'nowrap' }}>{t}</span>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: D,
            marginBottom: 12, letterSpacing: '-0.02em',
          }}>
            {isNL ? 'Van nul naar rapport in 3 stappen' : 'From zero to report in 3 steps'}
          </h2>
          <p style={{ fontSize: 16, color: G, marginBottom: 52, lineHeight: 1.7 }}>
            {isNL
              ? 'Geen consultant nodig. Geen interne IT-afdeling. Geen maanden wachten.'
              : 'No consultant required. No internal IT project. No months of waiting.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 20 }}>
            {[
              {
                n: '01', weeks: isNL ? '½ dag data' : '½ day data',
                title: isNL ? 'Upload je data' : 'Upload your data',
                body: isNL
                  ? 'Energiefacturen, brandstofbonnen, reiskosten. Via Excel, CSV of je boekhoudsoftware.'
                  : 'Energy bills, fuel receipts, travel records. Via Excel, CSV or accounting software.',
                icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
              },
              {
                n: '02', weeks: isNL ? '3–4 weken' : '3–4 weeks',
                title: isNL ? 'Wij berekenen alles' : 'We calculate everything',
                body: isNL
                  ? 'CO₂ Expert verwerkt je data via het GHG Protocol. Scope 1, 2 én 3. Volledig gecertificeerd.'
                  : 'CO₂ Expert processes your data via GHG Protocol. Scope 1, 2 and 3. Fully certified.',
                icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v10m0 0h10m-10 0H5m10 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6',
              },
              {
                n: '03', weeks: isNL ? 'Direct beschikbaar' : 'Immediately available',
                title: isNL ? 'Deel je rapport' : 'Share your report',
                body: isNL
                  ? 'Download een geverifieerd PDF-rapport. Klaar om te delen met klanten, banken of aanbestedingscommissies.'
                  : 'Download a verified PDF report. Ready to share with customers, banks or procurement committees.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map(step => (
              <div key={step.n} style={{
                background: W, border: `1px solid ${B}`, borderRadius: 16, padding: '28px 22px',
                textAlign: 'left', position: 'relative',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16,
                }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: O, letterSpacing: '0.1em' }}>
                    {step.n}
                  </span>
                  <span style={{
                    background: OL, border: `1px solid ${OB}`, borderRadius: 50,
                    padding: '2px 10px', fontSize: 11, fontWeight: 600, color: '#92400E',
                  }}>
                    {step.weeks}
                  </span>
                </div>
                <div style={{
                  width: 42, height: 42, borderRadius: 10, background: OL, border: `1px solid ${OB}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
                }}>
                  <Icon d={step.icon} size={18} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: D, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: G, lineHeight: 1.7, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM / BOOK A DEMO ──────────────────────────────────────────── */}
      <section style={{
        background: OL, borderTop: `1px solid ${OB}`, borderBottom: `1px solid ${OB}`,
        padding: 'clamp(48px, 8vw, 80px) 24px',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          {/* Three faces with names */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 28, marginBottom: 32,
            flexWrap: 'wrap',
          }}>
            {TEAM_MEMBERS.map(m => (
              <div key={m.initials} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <TeamAvatar initials={m.initials} photoUrl={m.photoUrl} size={80} />
                <span style={{ fontSize: 13, fontWeight: 700, color: D }}>{m.name}</span>
              </div>
            ))}
          </div>
          <h2 style={{
            fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: D, marginBottom: 8,
            letterSpacing: '-0.02em',
          }}>
            {isNL ? 'Plan een gratis demo' : 'Schedule a free demo'}
          </h2>
          <p style={{ fontSize: 14, color: O, fontWeight: 700, marginBottom: 18, letterSpacing: '0.02em' }}>
            Carbon Strategy Consultants — CO₂ Expert
          </p>
          <p style={{ fontSize: 15, color: G, lineHeight: 1.8, maxWidth: 520, margin: '0 auto 36px' }}>
            {consultant.bio}
          </p>
          <ArrowBtn href={consultant.calendarUrl} large>
            {isNL ? 'Demo inplannen' : 'Schedule a demo'}
          </ArrowBtn>
          <p style={{ marginTop: 18, fontSize: 12, color: '#9CA3AF' }}>
            {isNL
              ? 'Gratis · 30 minuten · Binnen 24 uur een timeslot beschikbaar'
              : 'Free · 30 minutes · A slot available within 24 hours'}
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section style={{ background: W, padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 800, color: D,
            marginBottom: 8, textAlign: 'center', letterSpacing: '-0.02em',
          }}>
            {isNL ? 'Veelgestelde vragen' : 'Common questions'}
          </h2>
          <p style={{ textAlign: 'center', fontSize: 15, color: G, marginBottom: 44 }}>
            {isNL
              ? 'Geen vraag te klein. Wij beantwoorden alles in de demo.'
              : 'No question too small. We answer everything in the demo.'}
          </p>
          {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          <div style={{ marginTop: 36, textAlign: 'center' }}>
            <ArrowBtn href={consultant.calendarUrl}>
              {isNL ? 'Meer vragen? Plan een demo' : 'More questions? Book a demo'}
            </ArrowBtn>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section style={{
        background: D, padding: 'clamp(56px, 10vw, 88px) 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(245,166,35,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
          {/* Small avatar row */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            {TEAM_MEMBERS.map((m, i) => (
              <div key={m.initials} style={{
                width: 40, height: 40, borderRadius: '50%',
                background: `linear-gradient(135deg, ${O}, #E8831A)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginLeft: i > 0 ? -10 : 0, border: '2px solid #1A1A2E',
                fontSize: 11, fontWeight: 800, color: W, zIndex: 3 - i, position: 'relative',
              }}>
                {m.photoUrl
                  ? <Image src={m.photoUrl} alt={m.name} width={40} height={40}
                      style={{ borderRadius: '50%', objectFit: 'cover' }} />
                  : m.initials}
              </div>
            ))}
          </div>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 800, color: W,
            marginBottom: 16, letterSpacing: '-0.025em',
          }}>
            {isNL ? 'Klaar om te beginnen?' : 'Ready to get your answer?'}
          </h2>
          <p style={{ fontSize: 16, color: '#9CA3AF', lineHeight: 1.75, marginBottom: 36 }}>
            {isNL
              ? 'Geen PowerPoint, geen verkooppraatje — gewoon antwoorden op jouw vragen. Gratis, 30 minuten.'
              : 'No PowerPoint, no sales pitch — just direct answers to your questions. Free, 30 minutes.'}
          </p>
          <ArrowBtn href={consultant.calendarUrl} large dark={false}>
            {isNL ? 'Demo inplannen' : 'Schedule a demo'}
          </ArrowBtn>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ background: '#0D1117', padding: '28px 24px', textAlign: 'center' }}>
        <Link href={isNL ? '/nl' : '/'} style={{ display: 'inline-block', marginBottom: 14, textDecoration: 'none' }}>
          <Image src="/logo-white.svg" alt="CO₂ Expert" width={100} height={24}
            style={{ height: 24, width: 'auto', opacity: 0.5 }} />
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
