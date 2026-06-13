'use client'
import { useState } from 'react'
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
    // Swap initials avatar for a real photo: set photoUrl to the image path
    photoUrl?: string
    calendarUrl: string
    langTag: string
  }
  faqs: FAQ[]
  ctaPrimary?: string
  ctaSecondary?: string
}

// ── Sub-components ───────────────────────────────────────────────────────────
function ConsultantAvatar({ initials, photoUrl, size = 96 }: {
  initials: string; photoUrl?: string; size?: number
}) {
  if (photoUrl) {
    return (
      <Image src={photoUrl} alt={initials} width={size} height={size}
        style={{ borderRadius: '50%', objectFit: 'cover', width: size, height: size }} />
    )
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: `linear-gradient(135deg, ${O}, #E8831A)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <span style={{ fontSize: size * 0.33, fontWeight: 800, color: W, letterSpacing: '-0.02em' }}>
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
        style={{
          width: '100%', textAlign: 'left', padding: '18px 0',
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: D, lineHeight: 1.4 }}>{q}</span>
        <span style={{
          width: 24, height: 24, borderRadius: '50%', background: OL,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none',
        }}>
          <Icon d="M12 5v14M5 12h14" size={14} color={O} />
        </span>
      </button>
      {open && (
        <p style={{ fontSize: 14, color: G, lineHeight: 1.75, paddingBottom: 18, margin: 0 }}>
          {a}
        </p>
      )}
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
  const bookText  = ctaPrimary  ?? (isNL ? `Gesprek plannen met ${consultant.name.split(' ')[0]}` : `Book a call with ${consultant.name.split(' ')[0]}`)
  const learnText = ctaSecondary ?? (isNL ? 'Hoe het werkt' : 'See how it works')
  const logoSrc   = isNL ? '/logo.svg' : '/logo.svg'

  // Split headline around accent word for orange highlight
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

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: D, background: W, minHeight: '100vh' }}>

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
            <Image src={logoSrc} alt="CO₂ Expert" width={120} height={30}
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
        {/* Glow */}
        <div aria-hidden style={{
          position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(245,166,35,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative' }}>
          {badge && (
            <span style={{
              display: 'inline-block', background: OL, border: `1px solid ${OB}`,
              borderRadius: 50, padding: '4px 14px', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: O, marginBottom: 24,
            }}>
              {badge}
            </span>
          )}
          <h1 style={{
            fontSize: 'clamp(28px, 5.5vw, 56px)', fontWeight: 800,
            lineHeight: 1.12, letterSpacing: '-0.025em',
            color: D, margin: '0 0 24px',
          }}>
            {renderHeadline()}
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: G, lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
            {subheadline}
          </p>
          {urgencyNote && (
            <p style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32,
              background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 8,
              padding: '8px 16px', fontSize: 13, color: '#92400E', fontWeight: 600,
            }}>
              <Icon d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" size={15} color="#D97706" />
              {urgencyNote}
            </p>
          )}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: O, color: W, fontWeight: 700, fontSize: 16,
              padding: '14px 28px', borderRadius: 10, textDecoration: 'none',
              boxShadow: `0 1px 0 rgba(0,0,0,0.08), 0 6px 20px ${O}50`,
            }}>
              {bookText}
              <Icon d="M5 12h14M12 5l7 7-7 7" size={16} color={W} />
            </a>
            <Link href={isNL ? '/nl/hoe-het-werkt' : '/how-it-works'} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: W, color: D, fontWeight: 600, fontSize: 16,
              padding: '14px 28px', borderRadius: 10, textDecoration: 'none',
              border: `1.5px solid ${B}`,
            }}>
              {learnText}
            </Link>
          </div>
          {/* Trust note */}
          <p style={{ marginTop: 28, fontSize: 13, color: '#9CA3AF' }}>
            {isNL
              ? '30 minuten · Geen verplichtingen · Direct antwoord op jouw vraag'
              : '30 minutes · No commitment · Direct answers to your questions'}
          </p>
        </div>
      </section>

      {/* ── PAIN POINTS ─────────────────────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{
            textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: O, marginBottom: 16,
          }}>
            {isNL ? 'Herken je dit?' : 'Sound familiar?'}
          </p>
          <h2 style={{
            textAlign: 'center', fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 800,
            color: D, marginBottom: 48, letterSpacing: '-0.02em',
          }}>
            {isNL ? 'De drie grootste obstakels' : 'The three biggest blockers'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {painPoints.map(p => (
              <div key={p.title} style={{
                background: W, border: `1px solid ${B}`, borderRadius: 14,
                padding: '28px 24px',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, background: OL,
                  border: `1px solid ${OB}`, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: 18,
                }}>
                  <Icon d={p.icon} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: D, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: G, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ────────────────────────────────────────────────── */}
      <section style={{ background: W, padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{
            textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: O, marginBottom: 16,
          }}>
            {isNL ? 'Klantverhalen' : 'Client results'}
          </p>
          <h2 style={{
            textAlign: 'center', fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 800,
            color: D, marginBottom: 48, letterSpacing: '-0.02em',
          }}>
            {isNL ? 'Bedrijven net als het jouwe' : 'Companies just like yours'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {cases.map(c => (
              <div key={c.company} style={{
                background: W, border: `1px solid ${B}`, borderRadius: 14,
                padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, background: OL,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                  }}>
                    {c.flag ?? '🏢'}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: D }}>{c.company}</div>
                    <div style={{ fontSize: 12, color: G }}>{c.sector}</div>
                  </div>
                </div>
                {/* Metric */}
                {c.metric && (
                  <div style={{
                    background: OL, borderRadius: 8, padding: '10px 14px',
                    fontSize: 13, fontWeight: 700, color: '#92400E',
                  }}>
                    {c.metric}
                  </div>
                )}
                {/* Result */}
                <p style={{ fontSize: 14, color: D, lineHeight: 1.65, margin: 0 }}>{c.result}</p>
                {/* Quote */}
                {c.quote && (
                  <blockquote style={{
                    margin: 0, paddingLeft: 12,
                    borderLeft: `3px solid ${O}`,
                    fontSize: 13, color: G, fontStyle: 'italic', lineHeight: 1.65,
                  }}>
                    "{c.quote}"
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 800, color: D,
            marginBottom: 12, letterSpacing: '-0.02em',
          }}>
            {isNL ? 'Van nul naar rapport in 3 stappen' : 'From zero to report in 3 steps'}
          </h2>
          <p style={{ fontSize: 16, color: G, marginBottom: 48 }}>
            {isNL
              ? 'Geen consultant nodig. Geen interne IT-afdeling. Geen maanden wachten.'
              : 'No consultant required. No internal IT project. No months of waiting.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              {
                n: '01',
                title: isNL ? 'Upload je data' : 'Upload your data',
                body: isNL
                  ? 'Energiefacturen, brandstofbonnen, reiskosten. Via Excel, CSV of je boekhoudsoftware. Kost een middag.'
                  : 'Energy bills, fuel receipts, travel records. Via Excel, CSV or accounting software. Takes an afternoon.',
                icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
              },
              {
                n: '02',
                title: isNL ? 'Wij berekenen alles' : 'We calculate everything',
                body: isNL
                  ? 'CO₂ Expert verwerkt je data via het GHG Protocol. Scope 1, 2 én 3. Volledig gecertificeerd.'
                  : 'CO₂ Expert processes your data via GHG Protocol. Scope 1, 2 and 3. Fully certified.',
                icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v10m0 0h10m-10 0H5m10 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6',
              },
              {
                n: '03',
                title: isNL ? 'Deel je rapport' : 'Share your report',
                body: isNL
                  ? 'Download een geverifieerd PDF-rapport. Klaar om te delen met klanten, banken of aanbestedingscommissies.'
                  : 'Download a verified PDF report. Ready to share with customers, banks or procurement committees.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map(step => (
              <div key={step.n} style={{
                background: W, border: `1px solid ${B}`, borderRadius: 14, padding: '24px 20px',
                textAlign: 'left',
              }}>
                <div style={{
                  fontSize: 12, fontWeight: 800, color: O, letterSpacing: '0.1em',
                  marginBottom: 12,
                }}>
                  {step.n}
                </div>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: OL, border: `1px solid ${OB}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
                }}>
                  <Icon d={step.icon} size={18} />
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: D, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: G, lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTANT ──────────────────────────────────────────────────── */}
      <section style={{ background: OL, borderTop: `1px solid ${OB}`, borderBottom: `1px solid ${OB}`, padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <ConsultantAvatar initials={consultant.initials} photoUrl={consultant.photoUrl} size={88} />
          <div style={{ marginTop: 20, marginBottom: 8 }}>
            <span style={{
              display: 'inline-block', background: W, border: `1px solid ${OB}`,
              borderRadius: 50, padding: '3px 12px', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase', color: O,
            }}>
              {consultant.langTag}
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: D, marginBottom: 6 }}>
            {consultant.name}
          </h2>
          <p style={{ fontSize: 14, color: O, fontWeight: 600, marginBottom: 16 }}>{consultant.role}</p>
          <p style={{ fontSize: 15, color: G, lineHeight: 1.75, maxWidth: 520, margin: '0 auto 32px' }}>
            {consultant.bio}
          </p>
          <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: O, color: W, fontWeight: 700, fontSize: 16,
            padding: '15px 32px', borderRadius: 10, textDecoration: 'none',
            boxShadow: `0 6px 24px ${O}50`,
          }}>
            {isNL ? `Plan een gesprek met ${consultant.name.split(' ')[0]}` : `Book a call with ${consultant.name.split(' ')[0]}`}
            <Icon d="M5 12h14M12 5l7 7-7 7" size={16} color={W} />
          </a>
          <p style={{ marginTop: 16, fontSize: 12, color: '#9CA3AF' }}>
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
            fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 800, color: D,
            marginBottom: 40, textAlign: 'center', letterSpacing: '-0.02em',
          }}>
            {isNL ? 'Veelgestelde vragen' : 'Common questions'}
          </h2>
          {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section style={{ background: D, padding: 'clamp(48px, 8vw, 72px) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: W,
            marginBottom: 16, letterSpacing: '-0.02em',
          }}>
            {isNL ? 'Klaar om te beginnen?' : 'Ready to get your answer?'}
          </h2>
          <p style={{ fontSize: 16, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 32 }}>
            {isNL
              ? `Plan een gratis gesprek met ${consultant.name.split(' ')[0]}. Geen PowerPoint, geen verkooppraatje — gewoon antwoorden op jouw vragen.`
              : `Book a free call with ${consultant.name.split(' ')[0]}. No PowerPoint, no sales pitch — just answers to your questions.`}
          </p>
          <a href={consultant.calendarUrl} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: O, color: W, fontWeight: 700, fontSize: 17,
            padding: '16px 36px', borderRadius: 10, textDecoration: 'none',
            boxShadow: `0 6px 24px ${O}50`,
          }}>
            {isNL ? 'Gratis gesprek plannen' : 'Book your free call'}
            <Icon d="M5 12h14M12 5l7 7-7 7" size={16} color={W} />
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ background: '#111827', padding: '24px', textAlign: 'center' }}>
        <Link href={isNL ? '/nl' : '/'} style={{ display: 'inline-block', marginBottom: 12, textDecoration: 'none' }}>
          <Image src="/logo-white.svg" alt="CO₂ Expert" width={100} height={24}
            style={{ height: 24, width: 'auto', opacity: 0.6 }} />
        </Link>
        <p style={{ fontSize: 12, color: '#4B5563', margin: 0 }}>
          © {new Date().getFullYear()} CO₂ Expert — Green Earth Group ·{' '}
          <Link href="/privacy" style={{ color: '#6B7280', textDecoration: 'none' }}>Privacy</Link>
        </p>
      </footer>

    </div>
  )
}
