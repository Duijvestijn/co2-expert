import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'co2.expert — Meet het. Fix het. Bewijs het.',
  description:
    'Het enige CO₂-platform waarbij meten, reduceren én compenseren in één tool zitten. Gebouwd voor bedrijven zoals die van jou. Powered by Green Earth Group (EARTH).',
}

const ORANGE = '#F5A623'
const DARK = '#1A1A2E'
const DARK_GREEN = '#0D2B1F'
const LIGHT_GREEN = '#EEF7F0'
const LIGHT_GREY = '#F9FAFB'
const GREY = '#6B7280'
const BORDER = '#E5E7EB'

function PainIcon({ d }: { d: string }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>
}

export default function NLHomePage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: DARK }}>
      <Nav lang="nl" />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, #2D2D5E 100%)`,
          color: '#fff',
          padding: '112px 24px 100px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 24px',
              letterSpacing: '-0.02em',
            }}
          >
            Meet het.{' '}
            <span style={{ color: ORANGE }}>Fix het.</span>{' '}
            Bewijs het.
          </h1>

          <p
            style={{
              fontSize: 'clamp(17px, 2.2vw, 21px)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.65,
              margin: '0 auto 40px',
              maxWidth: 600,
            }}
          >
            Het enige CO₂-platform waarbij meten, reduceren én compenseren in één tool
            zitten. Gebouwd voor bedrijven zoals die van jou.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="/nl/contact"
              style={{
                display: 'inline-block',
                background: ORANGE,
                color: '#fff',
                fontWeight: 700,
                fontSize: 16,
                padding: '14px 32px',
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              Vraag een demo aan →
            </a>
            <a
              href="https://app.co2.expert/login?lang=nl"
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '14px 32px',
                borderRadius: 8,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              Gratis starten
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. LOGO BAR ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: LIGHT_GREY,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: '36px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: GREY,
            marginBottom: 24,
          }}
        >
          Vertrouwd door vooruitstrevende bedrijven
        </p>
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            'Maarssen Holding',
            'De Hoeve Groep',
            'Friesland Agri',
            'Veenstra & Partners',
            'Noordzee Logistics',
          ].map((name) => (
            <span
              key={name}
              style={{
                background: '#fff',
                border: `1px solid ${BORDER}`,
                borderRadius: 6,
                padding: '8px 20px',
                fontSize: 14,
                fontWeight: 600,
                color: '#374151',
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. PROBLEM ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: DARK,
          color: '#fff',
          padding: '96px 24px',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            CO₂-rapportage is complex.
            <br />
            <span style={{ color: ORANGE }}>De meeste tools maken het erger.</span>
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.58)',
              fontSize: 17,
              marginBottom: 56,
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Dit is wat bedrijven zoals het jouwe tegenkomen — en waarom wij iets anders
            hebben gebouwd.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
                title: 'Enterprise-tools kosten €50.000+/jaar',
                body:
                  'Tools zoals Watershed en Persefoni kosten €50.000+/jaar. Ze zijn gebouwd voor compliance-teams van Fortune 500-bedrijven — niet voor een productiebedrijf van 40 personen of een regionale logistieke dienstverlener.',
              },
              {
                icon: 'M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0',
                title: 'Meeste tools stoppen bij meten',
                body:
                  'Greenly, Plan A en Normative meten je voetafdruk goed. Daarna geven ze je een pdf en laten je staan. Je emissies kennen en er iets aan doen zijn twee heel verschillende dingen.',
              },
              {
                icon: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
                title: 'Credits via tussenpersonen',
                body:
                  'De meeste offsetmarktplaatsen verkopen credits van derden door. Geen directe link naar het onderliggende project. Geen certificaat op jouw bedrijfsnaam. Geen manier om iets te bewijzen aan een klant of accountant.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: '32px 28px',
                }}
              >
                <div style={{ marginBottom: 16 }}><PainIcon d={card.icon} /></div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.58)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SOLUTION (3-step) ────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 940, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            Één platform. De volledige cirkel.
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: GREY,
              fontSize: 17,
              marginBottom: 64,
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            co2.expert neemt je mee van de eerste meting tot CO₂-neutraal certificaat —
            zonder van tool of leverancier te hoeven wisselen.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 40,
            }}
          >
            {[
              {
                step: '01',
                label: 'Stap 1: Meet',
                heading: 'Volledig Scope 1, 2 & 3 in één dashboard',
                body:
                  'Koppel je databronnen eenmalig. Krijg een GHG Protocol-conform voetafdruk uitgesplitst per categorie, locatie en activiteit — automatisch bijgewerkt zodra je data toevoegt.',
              },
              {
                step: '02',
                label: 'Stap 2: Reduceer',
                heading: 'Reductiedoelen met jaar-op-jaar vergelijking',
                body:
                  'Stel reductiedoelen in die aansluiten bij het Klimaatakkoord van Parijs. Volg voortgang per afdeling. Zie precies wat werkt en waar je als volgende op moet focussen.',
              },
              {
                step: '03',
                label: 'Stap 3: Compenseer',
                heading: 'Gecertificeerde CO₂-credits van onze eigen geverifieerde projecten',
                body:
                  'Koop offsetcredits direct van de herbebossings- en cookstoveprojecten van Green Earth Group. Ontvang een ondertekend, op naam gesteld CO₂-neutraal certificaat met projectdetails.',
              },
            ].map((item) => (
              <div key={item.step}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 52,
                    height: 52,
                    borderRadius: 999,
                    background: ORANGE,
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 17,
                    marginBottom: 20,
                  }}
                >
                  {item.step}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: ORANGE,
                    margin: '0 0 8px',
                  }}
                >
                  {item.label}
                </p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  {item.heading}
                </h3>
                <p style={{ fontSize: 15, color: GREY, lineHeight: 1.7, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. DIFFERENTIATOR TABLE ─────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: LIGHT_GREY }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            Het enige platform dat de volledige cirkel sluit
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: GREY,
              fontSize: 17,
              marginBottom: 48,
            }}
          >
            Vergelijk wat je er echt voor terugkrijgt.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                fontSize: 15,
              }}
            >
              <thead>
                <tr style={{ background: DARK, color: '#fff' }}>
                  <th
                    style={{
                      padding: '18px 24px',
                      textAlign: 'left',
                      fontWeight: 700,
                    }}
                  >
                    Functie
                  </th>
                  <th
                    style={{
                      padding: '18px 20px',
                      textAlign: 'center',
                      fontWeight: 700,
                      color: ORANGE,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    co2.expert
                  </th>
                  <th
                    style={{
                      padding: '18px 20px',
                      textAlign: 'center',
                      fontWeight: 600,
                      opacity: 0.65,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Enterprise-tools
                  </th>
                  <th
                    style={{
                      padding: '18px 20px',
                      textAlign: 'center',
                      fontWeight: 600,
                      opacity: 0.65,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Meet-only
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Scope 1, 2 & 3 meting', 'yes', 'yes', 'yes'],
                  ['Gecertificeerde offsetcredits', 'yes', 'yes', 'no'],
                  ['Eigen geverifieerde projecten', 'yes', 'no', 'no'],
                  ['CSRD-klare rapportage', 'yes', 'yes', 'partial'],
                  ['Gebouwd voor MKB — eerlijke prijs', 'yes', 'no — €50K+/jr', 'partial'],
                ].map(([feature, a, b, c], i) => {
                  function CellIcon({ val }: { val: string }) {
                    if (val === 'yes') return <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 8l3 3 6-6" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
                    if (val === 'partial') return <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 8h8" stroke="#D97706" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
                    if (val === 'no') return <svg width="16" height="16" viewBox="0 0 16 16"><path d="M5 5l6 6M11 5l-6 6" stroke="#DC2626" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
                    const parts = val.split(' — ')
                    return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><svg width="16" height="16" viewBox="0 0 16 16"><path d="M5 5l6 6M11 5l-6 6" stroke="#DC2626" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg><span style={{ fontSize: 13, color: '#DC2626' }}>{parts[1]}</span></span>
                  }
                  return (
                  <tr
                    key={String(feature)}
                    style={{
                      background: i % 2 === 0 ? '#fff' : LIGHT_GREY,
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <td style={{ padding: '16px 24px', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      <CellIcon val={String(a)} />
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      <CellIcon val={String(b)} />
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      <CellIcon val={String(c)} />
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 6. CSRD ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: LIGHT_GREEN }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#D1FAE5',
              color: '#065F46',
              border: '1px solid #6EE7B7',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '5px 16px',
              marginBottom: 24,
            }}
          >
            EU-regelgeving
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}
          >
            CSRD komt eraan voor jouw bedrijf
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#374151',
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            De EU Corporate Sustainability Reporting Directive (CSRD) verplicht duizenden
            mkb-bedrijven om hun CO₂-voetafdruk openbaar te maken — vanaf 2026 voor
            bedrijven met meer dan 250 medewerkers, daarna ook voor kleinere organisaties.
            Niet-naleving brengt risico&apos;s mee: uitsluiting uit toeleveringsketens,
            financieringsproblemen en regelgevende sancties.
          </p>
          <p
            style={{
              fontSize: 17,
              color: '#374151',
              lineHeight: 1.7,
            }}
          >
            co2.expert genereert CSRD-conforme duurzaamheidsrapportages in het vereiste
            format. Als je accountant of zakelijke klant om documentatie vraagt, overhandig
            je een geverifieerd rapport — geen spreadsheet.
          </p>
        </div>
      </section>

      {/* ── 7. CARBON PROJECTS ──────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: DARK_GREEN }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              color: '#fff',
              marginBottom: 12,
            }}
          >
            Offsetcredits uit projecten die wij zelf bezitten
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.58)',
              fontSize: 17,
              marginBottom: 56,
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Elke credit is herleidbaar tot een specifiek Green Earth Group-project —
            onafhankelijk geverifieerd onder Verra VCS of Gold Standard.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                name: 'Greenzone Reforestation',
                country: 'Kameroen',
                price: '€35 / credit',
                standard: 'Verra VCS',
                icon: 'M12 22V12M12 12C12 12 7 8 7 5a5 5 0 0 1 10 0c0 3-5 7-5 7z',
                desc: 'Herbebossing van gedegradeerde tropische gebieden met inheemse boomsoorten.',
              },
              {
                name: 'Bulindi Agroforestry',
                country: 'Oeganda',
                price: '€40 / credit',
                standard: 'Gold Standard',
                icon: 'M12 22V12M12 12C12 12 7 8 7 5a5 5 0 0 1 10 0c0 3-5 7-5 7z',
                desc: 'Agroboslandbouw die CO₂ vastlegt en tegelijk voedselzekerheid voor lokale gemeenschappen verbetert.',
              },
              {
                name: 'Hongera Cookstoves',
                country: 'Kenia',
                price: '€14 / credit',
                standard: 'Gold Standard',
                icon: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z',
                desc: 'Efficiënte kookvuren verminderen houtkap en verbeteren luchtkwaliteit in landelijke huishoudens.',
              },
              {
                name: 'Lake Aral Afforestation',
                country: 'Kazachstan',
                price: '€30 / credit',
                standard: 'Verra VCS',
                icon: 'M12 22V12M12 12C12 12 7 8 7 5a5 5 0 0 1 10 0c0 3-5 7-5 7z',
                desc: 'Herbebossing van het drooggevallen Aralmeer-gebied ter bestrijding van woestijnvorming.',
              },
            ].map((project) => (
              <div
                key={project.name}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 12,
                  padding: '28px 24px',
                  color: '#fff',
                }}
              >
                <div style={{ marginBottom: 16 }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={project.icon}/></svg></div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>
                  {project.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 10,
                  }}
                >
                  {project.country}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  {project.desc}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: 16,
                  }}
                >
                  <span
                    style={{
                      background: ORANGE,
                      color: '#fff',
                      fontSize: 13,
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 6,
                    }}
                  >
                    {project.price}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.45)',
                      fontWeight: 600,
                    }}
                  >
                    {project.standard}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: 56,
            }}
          >
            Wat onze klanten zeggen
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 28,
            }}
          >
            {[
              {
                quote:
                  'We hadden al twee andere platforms bekeken. Allebei gaven ze ons een getal en verder niets. co2.expert was het eerste platform dat ons echt vertelde wat we als volgende moesten doen — en ons in staat stelde dat aan klanten te bewijzen.',
                name: 'Marieke de Vries',
                title: 'CEO, Maarssen Holding',
              },
              {
                quote:
                  'Onze bank vroeg om CO₂-documentatie als onderdeel van de duurzaamheidsreview. co2.expert zorgde in twee weken voor een volwaardige CSRD-conforme rapportage. Op eigen kracht had ons dat maanden gekost.',
                name: 'Thomas Baas',
                title: 'CFO, De Hoeve Groep',
              },
              {
                quote:
                  'De offsetcredits worden geleverd met een echt certificaat op naam van ons bedrijf, met een directe link naar het project in Oeganda. Dat is iets wat we klanten echt kunnen laten zien — niet zomaar een vinkje.',
                name: 'Sietze Dijkstra',
                title: 'Directeur, Friesland Agri',
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  background: LIGHT_GREY,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: '32px 28px',
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    color: '#374151',
                    lineHeight: 1.75,
                    marginBottom: 24,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p style={{ fontWeight: 700, fontSize: 14, margin: 0 }}>{t.name}</p>
                <p style={{ fontSize: 13, color: GREY, margin: '4px 0 0' }}>{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA BAND ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: ORANGE,
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}
          >
            Plan een 30-minuten demo.
          </h2>
          <p
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 36,
            }}
          >
            Zonder verplichtingen. We kijken samen naar jouw specifieke situatie en
            laten je precies zien hoe co2.expert aansluit op jouw bedrijf.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="/nl/contact"
              style={{
                display: 'inline-block',
                background: '#fff',
                color: ORANGE,
                fontWeight: 700,
                fontSize: 16,
                padding: '14px 36px',
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              Vraag een demo aan →
            </a>
            <a
              href="https://app.co2.expert/login?lang=nl"
              style={{
                display: 'inline-block',
                background: 'rgba(0,0,0,0.12)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '14px 36px',
                borderRadius: 8,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              Gratis starten
            </a>
          </div>
        </div>
      </section>

      <Footer lang="nl" />
    </main>
  )
}
