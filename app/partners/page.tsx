import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PartnerApplicationForm from './PartnerApplicationForm'

export const metadata: Metadata = {
  title: 'Partner Programme — CO₂ Expert',
  description:
    'Help your clients measure their carbon footprint and answer customer data requests. A new service your business clients need right now.',
}

const ORANGE = '#F5A623'
const DARK   = '#1A1A2E'
const GREY   = '#6B7280'
const BORDER = '#E5E7EB'
const LIGHT  = '#F9FAFB'

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M5 12l4 4 10-10" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Icon({ d }: { d: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d}/>
    </svg>
  )
}

const whyPartner = [
  {
    icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
    title: 'A new service your clients need right now',
    body: 'CO₂ measurement is moving from nice-to-have to essential. Your clients are already getting questionnaires from large customers. Offering this service means staying ahead of the demand.',
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Keep clients out of trouble',
    body: 'A client who cannot answer a CO₂ question from their biggest customer has a problem. You can be the one who solves it — before they lose the contract.',
  },
  {
    icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    title: 'No sustainability expertise required',
    body: 'CO₂ Expert handles the methodology. You focus on the client relationship. We provide training, materials, and a dedicated partner contact.',
  },
]

const steps = [
  { num: '01', label: 'Apply',                detail: 'Submit your application below. We review within 2 business days.' },
  { num: '02', label: 'Complete free training', detail: 'Access our partner academy and get certified at no cost.' },
  { num: '03', label: 'Refer clients',          detail: 'Introduce us directly or share your unique partner link.' },
  { num: '04', label: 'Earn commission',         detail: 'Receive recurring commission for every active client subscription.' },
]

const tiers = [
  {
    name: 'Referral Partner',
    highlight: false,
    items: ['Refer clients via unique link', 'Earn commission per subscription', 'Partner portal access', 'Basic co-branded materials'],
  },
  {
    name: 'Certified Partner',
    highlight: true,
    items: ['Everything in Referral', 'Resell & support clients', 'Full co-branding package', 'Priority onboarding support', 'Dedicated account manager'],
  },
  {
    name: 'Strategic Partner',
    highlight: false,
    items: ['Everything in Certified', 'Deep platform integration', 'Priority technical support', 'Joint marketing campaigns', 'Quarterly business reviews', 'Custom commercial terms'],
  },
]

const whatYouGet = [
  'Partner portal access', 'Co-branded materials',
  'Demo accounts', 'Training & certification',
  'Dedicated account manager', 'Marketing support',
  'Commission per client', 'Quarterly partner calls',
]

export default function PartnersPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: DARK }}>
      <Nav lang="en" />

      {/* ── HERO ── */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '112px 24px 88px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Orange glow accent */}
        <div style={{
          position: 'absolute', top: -100, left: '50%',
          transform: 'translateX(-50%)',
          width: 700, height: 420, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(245,166,35,0.13) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>
        <div style={{ maxWidth: 740, margin: '0 auto', position: 'relative' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: '#FFF7ED',
            border: '1px solid #FED7AA',
            borderRadius: 50,
            padding: '4px 14px',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: ORANGE, marginBottom: 20,
          }}>
            Partner Programme
          </span>
          <h1 style={{
            fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 800,
            lineHeight: 1.15, letterSpacing: '-0.025em', marginBottom: 24,
            color: DARK,
          }}>
            Help your clients answer the CO&#x2082; question
            <br /><span style={{ color: ORANGE }}>before they lose the contract</span>
          </h1>
          <p style={{
            fontSize: 18, color: '#6B7280',
            lineHeight: 1.7, maxWidth: 580, margin: '0 auto 40px',
          }}>
            Your clients are receiving sustainability questionnaires from large customers.
            As their advisor, you can help them measure their carbon footprint and produce a
            verified report — quickly, affordably, without needing to become a sustainability
            expert yourself.
          </p>
          <a href="#apply" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: ORANGE, color: '#fff', fontWeight: 700,
            fontSize: 16, padding: '14px 28px', borderRadius: 8, textDecoration: 'none',
          }}>
            Apply to become a partner
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── WHY PARTNER ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800,
            textAlign: 'center', marginBottom: 52, letterSpacing: '-0.02em',
          }}>
            Why partner with CO₂ Expert?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {whyPartner.map(card => (
              <div key={card.title} style={{
                background: LIGHT, borderRadius: 14,
                border: `1px solid ${BORDER}`, padding: '28px 24px',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: '#FFF7ED', border: '1px solid #FED7AA',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <Icon d={card.icon}/>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: DARK, marginBottom: 10 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 14, color: GREY, lineHeight: 1.7 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: LIGHT, padding: '80px 24px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800,
            textAlign: 'center', marginBottom: 56, letterSpacing: '-0.02em',
          }}>
            How it works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32 }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ textAlign: 'center', position: 'relative' }}>
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute', top: 28, left: 'calc(50% + 28px)',
                    right: 'calc(-50% + 28px)', height: 1,
                    background: `linear-gradient(90deg, ${ORANGE}40, ${ORANGE}10)`,
                    display: 'none',
                  }}/>
                )}
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: ORANGE, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 16, margin: '0 auto 16px',
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: DARK, marginBottom: 8 }}>
                  {step.label}
                </h3>
                <p style={{ fontSize: 13, color: GREY, lineHeight: 1.6 }}>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER TIERS ── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800,
            textAlign: 'center', marginBottom: 52, letterSpacing: '-0.02em',
          }}>
            Partner tiers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {tiers.map(tier => (
              <div key={tier.name} style={{
                borderRadius: 14, padding: '28px 24px',
                border: `2px solid ${tier.highlight ? ORANGE : BORDER}`,
                background: tier.highlight ? '#FFFBF5' : '#fff',
                boxShadow: tier.highlight ? '0 4px 20px rgba(245,166,35,0.12)' : 'none',
              }}>
                {tier.highlight && (
                  <span style={{
                    display: 'inline-block', background: ORANGE, color: '#fff',
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', padding: '3px 10px',
                    borderRadius: 50, marginBottom: 16,
                  }}>
                    Most popular
                  </span>
                )}
                <h3 style={{ fontSize: 18, fontWeight: 800, color: DARK, marginBottom: 20 }}>
                  {tier.name}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {tier.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <Check/>
                      <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ background: '#FFF7ED', padding: '80px 24px', borderTop: `1px solid #FED7AA`, borderBottom: `1px solid #FED7AA` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800,
            color: DARK, textAlign: 'center', marginBottom: 48, letterSpacing: '-0.02em',
          }}>
            What partners get
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {whatYouGet.map(item => (
              <div key={item} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: '#FFFFFF',
                border: '1px solid #FED7AA',
                borderRadius: 10, padding: '14px 18px',
                boxShadow: '0 1px 4px rgba(245,166,35,0.07)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M5 12l4 4 10-10" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 14, color: DARK, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section id="apply" style={{ background: '#fff', padding: '80px 24px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800,
            textAlign: 'center', marginBottom: 10, letterSpacing: '-0.02em',
          }}>
            Apply to become a partner
          </h2>
          <p style={{ textAlign: 'center', color: GREY, fontSize: 15, marginBottom: 40, lineHeight: 1.6 }}>
            We review every application within 2 business days.
          </p>
          <PartnerApplicationForm />
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}
