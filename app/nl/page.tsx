import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CO2-rapportage voor het MKB | co2.expert',
  description:
    'Uw grote klanten moeten hun toeleveranciers rapporteren voor CSRD. Als u geen CO2-cijfers heeft, bent u de moeite van het beantwoorden niet waard. co2.expert geeft u een GHG Protocol-conform rapport in dagen.',
}

const O  = '#F5A623'
const OL = '#FFF7ED'
const OB = '#FED7AA'
const D  = '#1A1A2E'
const G  = '#6B7280'
const B  = '#E5E7EB'
const W  = '#FFFFFF'

function Icon({ d, size = 20, color = 'currentColor' }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d}/>
    </svg>
  )
}

function Tick() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="9" cy="9" r="9" fill={O}/>
      <path d="M5 9l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function BulletTick() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="10" cy="10" r="10" fill="#FEF3C7"/>
      <path d="M6 10l3 3 5-5" stroke={O} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function StepCircle({ n }: { n: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 48, height: 48, borderRadius: '50%',
      background: O, color: W, fontWeight: 800, fontSize: 16, marginBottom: 20, flexShrink: 0,
    }}>
      {n}
    </div>
  )
}

function AwardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  )
}

export default function NLHomePage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: D, background: W }}>
      <Nav lang="nl" />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: W,
        paddingTop: 'clamp(64px, 12vw, 132px)', paddingBottom: 'clamp(48px, 8vw, 88px)', paddingLeft: 24, paddingRight: 24,
        borderBottom: `1px solid ${B}`,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Orange radial glow accents */}
        <div style={{
          position: 'absolute', top: -120, right: -80,
          width: 500, height: 500, borderRadius: '50%',
          background: `radial-gradient(circle, ${O}1A 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', bottom: -100, left: -100,
          width: 360, height: 360, borderRadius: '50%',
          background: `radial-gradient(circle, ${O}0D 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}/>

        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative' }}>

          {/* Category pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: OL, border: `1px solid ${OB}`,
            borderRadius: 50, padding: '6px 18px', marginBottom: 32,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: O }}/>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#92400E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              CO&#8322;-voetafdruk meting
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5.5vw, 60px)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.02em', margin: '0 0 28px', color: D,
          }}>
            Uw klanten vragen volgende kwartaal om uw CO&#8322;-gegevens.{' '}
            <span style={{
              background: `linear-gradient(135deg, ${O}, #E8831A)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Heeft u ze al?
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2.1vw, 19px)', color: G,
            lineHeight: 1.75, maxWidth: 620, margin: '0 auto 44px',
          }}>
            Grote bedrijven moeten hun toeleveranciers rapporteren voor hun eigen
            CSRD-aangifte. Als u geen CO&#8322;-cijfers heeft, bent u de moeite van het
            beantwoorden niet waard &#8212; en soms het contract ook niet.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
            <a href="/nl/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: O, color: W, fontWeight: 700,
              fontSize: 15, padding: '14px 28px', borderRadius: 8, textDecoration: 'none',
              boxShadow: `0 1px 0 rgba(0,0,0,0.08), 0 4px 14px ${O}40`,
              whiteSpace: 'nowrap',
            }}>
              Plan een gratis gesprek van 30 minuten
            </a>
            <a href="/nl/hoe-het-werkt" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: W, color: D, fontWeight: 600,
              fontSize: 15, padding: '14px 28px', borderRadius: 8, textDecoration: 'none',
              border: `1.5px solid ${B}`,
              whiteSpace: 'nowrap',
            }}>
              Bekijk hoe het werkt
            </a>
          </div>

          {/* Outcome chips */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              'Volledig Scope 1, 2 en 3 in kaart',
              'GHG Protocol-conform rapport',
              'Klaar om te delen met elke klant',
            ].map((chip) => (
              <div key={chip} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: W, border: `1px solid ${B}`,
                borderRadius: 999, padding: '8px 16px',
                fontSize: 14, fontWeight: 500, color: D,
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}>
                <Tick/>
                {chip}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. DE WERKELIJKE SITUATIE ────────────────────────────────────────── */}
      <section style={{ background: '#FFFBF5', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 800, letterSpacing: '-0.02em',
            textAlign: 'center', marginBottom: 40, color: D,
          }}>
            Wat er nu al van u verwacht wordt
          </h2>

          {/* KVK blockquote */}
          <blockquote style={{
            borderLeft: `4px solid ${O}`,
            margin: '0 auto 56px',
            padding: '24px 32px',
            background: W,
            borderRadius: '0 12px 12px 0',
            maxWidth: 760,
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          }}>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              fontStyle: 'italic', lineHeight: 1.65,
              margin: '0 0 16px', color: '#374151',
            }}>
              "Grote bedrijven zijn verplicht te rapporteren over hun leveranciers. U kunt
              vragen verwachten van grotere bedrijven die uw producten afnemen."
            </p>
            <cite style={{ fontSize: 14, fontWeight: 700, color: O, fontStyle: 'normal' }}>
              KvK, 2026
            </cite>
          </blockquote>

          {/* 3 scenario cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {[
              {
                title: 'De vragenlijst',
                body: 'Uw accountmanager bij een grote afnemer stuurt een duurzaamheidsformulier. Vraag 8: "Wat zijn uw Scope 1 en 2 emissies over het afgelopen boekjaar?" U heeft geen data.',
                icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8',
              },
              {
                title: 'De deadline is echt',
                body: 'Uw klant heeft een rapportagedeadline. Ze hebben uw cijfers nodig voor hun eigen CSRD-aangifte. "Dan zoeken we een alternatieve leverancier" is een zin die gevallen is.',
                icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2',
              },
              {
                title: 'Wie data heeft, wint',
                body: 'MKB-bedrijven die CO₂-vragen kunnen beantwoorden scoren hoger in aanbestedingen, kwalificeren voor betere financiering en zijn moeilijker te vervangen.',
                icon: 'M22 7L13.5 15.5l-5-5L2 17M16 7h6v6',
              },
            ].map((card) => (
              <div key={card.title} style={{
                background: W,
                border: `1px solid ${B}`,
                borderRadius: 12,
                padding: '32px 28px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              }}>
                <div style={{ color: O, marginBottom: 16 }}>
                  <Icon d={card.icon} size={22} color={O}/>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, lineHeight: 1.3, color: D }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: G, lineHeight: 1.75, margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DE OPLOSSING ─────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: W }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 800, letterSpacing: '-0.02em',
            textAlign: 'center', marginBottom: 12, color: D,
          }}>
            Van nul data naar een CO&#8322;-rapport dat uw klant kan gebruiken.{' '}
            <span style={{
              background: `linear-gradient(135deg, ${O}, #E8831A)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              In dagen.
            </span>
          </h2>
          <p style={{
            textAlign: 'center', color: G, fontSize: 17,
            marginBottom: 64, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto',
          }}>
            Geen adviseur nodig. Geen maandenlang intern project.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: 40,
          }}>
            {[
              {
                n: '01',
                icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
                heading: 'Upload uw gegevens',
                body: 'Energierekeningen, brandstofverbruik, reiskosten via Excel/CSV of koppeling met uw boekhouding (Exact Online, Twinfield).',
              },
              {
                n: '02',
                icon: 'M4 2h16v4H4zM4 10h16M4 10v10h16V10M8 6v4M12 6v4M16 6v4M8 14h2M12 14h2M8 18h2M12 18h2',
                heading: 'Wij berekenen Scope 1, 2 en 3',
                body: 'GHG Protocol emissiefactoren, compleet voetafdruk, per categorie uitgesplitst.',
              },
              {
                n: '03',
                icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8',
                heading: 'U ontvangt een rapport dat u kunt delen',
                body: 'PDF-rapport, direct te sturen aan uw afnemer, inclusief methode en bronvermelding.',
              },
              {
                n: '04',
                icon: 'M22 7L13.5 15.5l-5-5L2 17M16 7h6v6',
                heading: 'Volg uw voortgang jaar na jaar',
                body: 'Reductiedoelen stellen, verbeteringen aantonen, wat steeds meer inkoopafdelingen vragen.',
              },
            ].map((step) => (
              <div key={step.n} style={{
                background: '#FAFAFA',
                border: `1px solid ${B}`,
                borderRadius: 12,
                padding: '32px 24px',
              }}>
                <StepCircle n={step.n}/>
                <div style={{ color: O, marginBottom: 14 }}>
                  <Icon d={step.icon} size={22} color={O}/>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3, marginBottom: 10, color: D }}>
                  {step.heading}
                </h3>
                <p style={{ fontSize: 15, color: G, lineHeight: 1.75, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WAT SCOPE 1, 2 EN 3 BETEKENT ────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#FAFAFA' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 800, letterSpacing: '-0.02em',
            textAlign: 'center', marginBottom: 14, color: D,
          }}>
            Scope 1, 2 en 3 &#8212; in gewone taal
          </h2>
          <p style={{
            textAlign: 'center', color: G, fontSize: 17,
            marginBottom: 56, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65,
          }}>
            Als uw klant een duurzaamheidsvragenlijst stuurt, vraagt hij om specifieke
            cijfers. Dit is wat elk onderdeel betekent voor een gemiddeld MKB-bedrijf.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {[
              {
                label: 'Scope 1',
                color: '#DC2626',
                bg: '#FEF2F2',
                heading: 'Directe emissies',
                body: 'Bedrijfsvoertuigen, verwarmingsinstallaties (gas/olie), verbrandingsprocessen, koelmiddelen.',
                example: 'Een bestelwagen van 80.000 km/jaar produceert circa 12 ton CO₂.',
              },
              {
                label: 'Scope 2',
                color: '#2563EB',
                bg: '#EFF6FF',
                heading: 'Ingekochte energie',
                body: 'Elektriciteitsverbruik, stadsverwarming.',
                example: 'Een kantoor van 40.000 kWh/jaar in Nederland produceert circa 10 ton CO₂.',
              },
              {
                label: 'Scope 3',
                color: '#059669',
                bg: '#ECFDF5',
                heading: 'Waardeketen',
                body: 'Zakenreizen, woon-werkverkeer, ingekochte goederen en diensten, logistiek.',
                example: 'Vaak de grootste categorie. Een bedrijf dat €2M inkoopt heeft mogelijk 400+ ton CO₂ in zijn keten.',
              },
            ].map((scope) => (
              <div key={scope.label} style={{
                background: scope.bg,
                borderLeft: `4px solid ${scope.color}`,
                borderRadius: '0 12px 12px 0',
                padding: '28px 28px 28px 24px',
              }}>
                <span style={{
                  display: 'inline-block',
                  background: scope.color, color: W,
                  fontWeight: 700, fontSize: 12, letterSpacing: '0.08em',
                  padding: '4px 12px', borderRadius: 999, marginBottom: 14,
                }}>
                  {scope.label}
                </span>
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, color: D }}>
                  {scope.heading}
                </h3>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, marginBottom: 16 }}>
                  {scope.body}
                </p>
                <p style={{ fontSize: 14, color: G, lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                  Voorbeeld: {scope.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WAAROM DIT COMMERCIEEL UITMAAKT ─────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: W }}>
        <div style={{
          maxWidth: 1040, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 56, alignItems: 'start',
        }}>
          {/* Left column */}
          <div>
            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 38px)',
              fontWeight: 800, letterSpacing: '-0.02em',
              marginBottom: 20, lineHeight: 1.15, color: D,
            }}>
              CO&#8322;-data wordt een voorwaarde om zaken te doen
            </h2>
            <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
              Inkoopafdelingen van grote bedrijven voegen duurzaamheidseisen toe aan hun
              leverancierscriteria. Bedrijven die CO&#8322;-vragen niet kunnen beantwoorden
              worden vervangen door bedrijven die dat wel kunnen.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Scoort hoger in aanbestedingen die emissierapportage vereisen',
                'Voldoet aan duurzaamheidscriteria van banken en financiers',
                'Beantwoordt klantvragen met geverifieerde data, niet schattingen',
                'Toont jaar-op-jaar verbetering — wat toenemend gevraagd wordt',
              ].map((item) => (
                <li key={item} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  fontSize: 15, color: '#374151', lineHeight: 1.6,
                }}>
                  <BulletTick/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: stat cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                stat: '1.000+ medewerkers',
                label: 'drempel voor directe CSRD-verplichting (Omnibus I Richtlijn, maart 2026). Hun rapportage omvat uw data.',
              },
              {
                stat: 'Scope 3 grootste categorie',
                label: 'Voor de meeste grote bedrijven bestaat 70%+ van hun totale emissies uit de toeleveringsketen — dus uit bedrijven zoals het uwe.',
              },
              {
                stat: '2 weken',
                label: 'Gemiddelde tijd van eerste login tot deelbaar GHG Protocol-conform rapport.',
              },
            ].map((card) => (
              <div key={card.stat} style={{
                background: OL,
                border: `1px solid ${OB}`,
                borderRadius: 12,
                padding: '24px 28px',
                borderTop: `3px solid ${O}`,
              }}>
                <p style={{ fontSize: 22, fontWeight: 800, color: D, marginBottom: 8, lineHeight: 1.2 }}>
                  {card.stat}
                </p>
                <p style={{ fontSize: 14, color: G, lineHeight: 1.65, margin: 0 }}>
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. VERGELIJKING ─────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#FAFAFA' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 800, letterSpacing: '-0.02em',
            textAlign: 'center', marginBottom: 12, color: D,
          }}>
            Waarom niet een Excel of een adviseur?
          </h2>
          <p style={{ textAlign: 'center', color: G, fontSize: 17, marginBottom: 48 }}>
            Vergelijk de drie opties naast elkaar.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse',
              background: W, borderRadius: 12, overflow: 'hidden',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)', fontSize: 15,
            }}>
              <thead>
                <tr style={{ background: D, color: W }}>
                  <th style={{ padding: '18px 24px', textAlign: 'left', fontWeight: 700 }}>
                    Criterium
                  </th>
                  <th style={{ padding: '18px 20px', textAlign: 'center', fontWeight: 600, opacity: 0.7, whiteSpace: 'nowrap' }}>
                    Zelf in Excel
                  </th>
                  <th style={{ padding: '18px 20px', textAlign: 'center', fontWeight: 600, opacity: 0.7, whiteSpace: 'nowrap' }}>
                    Adviseur inschakelen
                  </th>
                  <th style={{ padding: '18px 20px', textAlign: 'center', fontWeight: 700, color: O, whiteSpace: 'nowrap' }}>
                    CO&#8322; Expert
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tijd tot eerste rapport', '80+ interne uren', '6–8 weken', '2 weken'],
                  ['Scope 1, 2 en 3 gedekt', 'Gedeeltelijk', 'Ja', 'Ja'],
                  ['GHG Protocol conform', 'Onzeker', 'Ja', 'Ja'],
                  ['Herbruikbaar volgend jaar', 'Handmatig opnieuw', 'Nieuwe opdracht', 'Automatisch'],
                  ['Typische kosten', '3–6 maanden intern werk', '€8.000–€25.000', 'Abonnement'],
                  ['Deelbaar met klanten', 'Beperkt', 'Ja', 'Ja, direct'],
                ].map(([row, a, b, c], i) => (
                  <tr key={String(row)} style={{
                    background: i % 2 === 0 ? W : '#F9FAFB',
                    borderBottom: `1px solid ${B}`,
                  }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: D }}>{row}</td>
                    <td style={{ padding: '16px 20px', textAlign: 'center', color: G }}>{a}</td>
                    <td style={{ padding: '16px 20px', textAlign: 'center', color: G }}>{b}</td>
                    <td style={{ padding: '16px 20px', textAlign: 'center', fontWeight: 700, color: O }}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 7. STANDAARDEN ──────────────────────────────────────────────────── */}
      <section style={{ padding: '72px 24px', background: W }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: G, marginBottom: 28,
          }}>
            Conform de standaarden die uw klanten verwachten
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['GHG Protocol', 'ISO 14064', 'CSRD / ESRS', 'VSME Standaard'].map((std) => (
              <div key={std} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: OL, border: `1px solid ${OB}`,
                borderRadius: 8, padding: '10px 20px',
                fontSize: 14, fontWeight: 600, color: D,
              }}>
                <AwardIcon/>
                {std}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA SECTIE ───────────────────────────────────────────────────── */}
      <section style={{ background: OL, padding: '88px 24px', textAlign: 'center', borderTop: `1px solid ${OB}` }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 800, color: D,
            letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.15,
          }}>
            De volgende vragenlijst van uw klant komt eraan.
          </h2>
          <p style={{ fontSize: 18, color: '#92400E', marginBottom: 40, lineHeight: 1.65 }}>
            Plan een gratis gesprek van 30 minuten. Wij laten u zien hoe uw voetafdruk
            eruitziet en hoe u een rapport klaarzet voordat uw klant ernaar vraagt.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/nl/contact" style={{
              display: 'inline-block',
              background: O, color: W,
              fontWeight: 700, fontSize: 16,
              padding: '15px 36px', borderRadius: 8, textDecoration: 'none',
              boxShadow: `0 4px 14px ${O}50`,
              whiteSpace: 'nowrap',
            }}>
              Plan een gratis gesprek
            </a>
            <a href="/nl/hoe-het-werkt" style={{
              display: 'inline-block',
              background: W, color: D,
              fontWeight: 600, fontSize: 16,
              padding: '15px 36px', borderRadius: 8, textDecoration: 'none',
              border: `1.5px solid ${OB}`,
              whiteSpace: 'nowrap',
            }}>
              Bekijk hoe het werkt
            </a>
          </div>
        </div>
      </section>

      <Footer lang="nl" />
    </main>
  )
}
