import Link from 'next/link'
import Image from 'next/image'

interface FooterProps { lang?: 'en' | 'nl' }

export default function Footer({ lang = 'en' }: FooterProps) {
  const nl = lang === 'nl'
  const y = new Date().getFullYear()

  return (
    <footer>
      {/* Main footer */}
      <div style={{ background: '#1A1A2E', padding: '56px 24px 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>

            {/* Brand */}
            <div>
              <Image src="/logo-white.svg" alt="CO₂ Expert" width={120} height={30} style={{ height: 30, width: 'auto', marginBottom: 16 }} />
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 240 }}>
                {nl
                  ? 'Jouw partner in CO₂-boekhouding. Meet, reduceer en compenseer je uitstoot.'
                  : 'Your partner in carbon accounting. Measure, reduce and offset your emissions.'}
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                {['linkedin', 'twitter'].map(s => (
                  <a key={s} href={`https://${s}.com/company/co2expert`} target="_blank" rel="noopener noreferrer"
                    style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 12, fontWeight: 700 }}>
                    {s === 'linkedin' ? 'in' : '𝕏'}
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16 }}>
                {nl ? 'Product' : 'Product'}
              </p>
              {[
                { href: '/how-it-works', en: 'How it works',       nl: 'Hoe het werkt' },
                { href: '/pricing',      en: 'Pricing',             nl: 'Prijzen' },
                { href: '/faq',          en: 'FAQ',                 nl: 'FAQ' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#F5A623')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                  {nl ? l.nl : l.en}
                </Link>
              ))}
            </div>

            {/* Company */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16 }}>
                {nl ? 'Bedrijf' : 'Company'}
              </p>
              {[
                { href: '/about',    en: 'About us',    nl: 'Over ons' },
                { href: '/partners', en: 'Partners',    nl: 'Partners' },
                { href: '/contact',  en: 'Contact',     nl: 'Contact' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#F5A623')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                  {nl ? l.nl : l.en}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16 }}>
                {nl ? 'Aan de slag' : 'Get started'}
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 16, lineHeight: 1.6 }}>
                {nl ? 'Begin vandaag met het meten van je CO₂-voetafdruk.' : 'Start measuring your carbon footprint today.'}
              </p>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 14, padding: '10px 20px' }}>
                {nl ? 'Demo aanvragen' : 'Request a demo'}
              </Link>
            </div>
          </div>

          {/* Powered by — subtle */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.04em' }}>
              {nl ? 'Aangedreven door' : 'Powered by'}
            </span>
            <a href="https://www.green.earth" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.28, textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.55')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.28')}
            >
              <Image src="/partners/green-earth.svg" alt="Green Earth Group" width={90} height={20} style={{ height: 20, width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#F5A623', padding: '10px 24px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 12, color: 'white', fontWeight: 500 }}>
            © {y} CO₂ Expert | All rights reserved
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {[
              { href: '/privacy',    en: 'Privacy policy',    nl: 'Privacybeleid' },
              { href: '/terms',      en: 'Terms & conditions', nl: 'Voorwaarden' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ fontSize: 12, color: 'white', textDecoration: 'none', opacity: 0.85, fontWeight: 500 }}>
                {nl ? l.nl : l.en}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
