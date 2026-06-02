import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// ─── Reusable icons ───────────────────────────────────────────────────────────
function Icon({ d, size = 20 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#FEF3E2"/>
      <path d="M8 12l3 3 5-5" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Nav lang="en" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(160deg, #0f1f16 0%, #1a3a26 50%, #0f2918 100%)',
        position: 'relative', overflow: 'hidden',
        paddingTop: 140, paddingBottom: 96, paddingLeft: 24, paddingRight: 24,
        minHeight: '85vh', display: 'flex', alignItems: 'center',
      }}>
        {/* Background texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=60)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(15,31,22,0.95) 0%, rgba(15,41,24,0.85) 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge-orange" style={{ marginBottom: 24, display: 'inline-flex' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>
            All-in-one carbon accounting platform
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 800, color: 'white',
            lineHeight: 1.1, marginBottom: 24, letterSpacing: '-1.5px',
          }}>
            Measure, Reduce,<br />
            <span style={{ color: '#F5A623' }}>Offset</span> Your Carbon Footprint
          </h1>

          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7 }}>
            CO₂ Expert helps businesses understand, track, and act on their carbon emissions —
            with certified offsets and science-based reduction pathways across Scope 1, 2 & 3.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: '14px 28px' }}>
              Request a demo
              <Icon d="M5 12h14M12 5l7 7-7 7" />
            </Link>
            <Link href="https://app.co2.expert/login" className="btn-outline" style={{ fontSize: 16, padding: '14px 28px', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.25)' }}>
              Start for free
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { num: '500+',    label: 'Companies measured' },
              { num: '12,400t', label: 'CO₂ tracked' },
              { num: '4,800',   label: 'Credits offset' },
            ].map(s => (
              <div key={s.label} style={{ padding: '16px 32px', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }}>
                <p style={{ fontSize: 28, fontWeight: 800, color: '#F5A623', lineHeight: 1 }}>{s.num}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge-orange" style={{ marginBottom: 12, display: 'inline-flex' }}>Our approach</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#1A1A2E', letterSpacing: '-0.5px' }}>
              Everything in one platform
            </h2>
            <p style={{ fontSize: 17, color: '#6B7280', marginTop: 12, maxWidth: 520, margin: '12px auto 0' }}>
              Unlike tools that only measure, CO₂ Expert takes you all the way — from first calculation to certified carbon neutrality.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                step: '01', title: 'Measure',
                desc: 'Automatically calculate your full carbon footprint across Scope 1, 2 and 3 emissions. GHG Protocol & ISO 14064 compliant reports in minutes.',
                bullets: ['Scope 1, 2 & 3 coverage', 'Multiple locations', 'Excel & CSV import', 'CSRD-ready reports'],
              },
              {
                icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                step: '02', title: 'Reduce',
                desc: 'Set science-based reduction targets and track progress over time. Visualise your path to net-zero with our interactive dashboard.',
                bullets: ['Target reduction line chart', 'Year-on-year comparison', 'Per-scope breakdown', 'Progress tracking'],
              },
              {
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
                step: '03', title: 'Offset',
                desc: 'Compensate residual emissions with certified CO₂ credits from verified nature-based projects. Receive your carbon-neutral certificate.',
                bullets: ['Verified credits (Gold Standard, VCS)', 'Reforestation, cookstoves & more', 'Instant certificate', 'Direct project impact'],
              },
            ].map(card => (
              <div key={card.step} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -16, right: -8, fontSize: 80, fontWeight: 900, color: '#F5A62308', lineHeight: 1, pointerEvents: 'none' }}>
                  {card.step}
                </div>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#FEF3E2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F5A623', marginBottom: 20 }}>
                  <Icon d={card.icon} size={22} />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1A1A2E', marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 20 }}>{card.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {card.bullets.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <CheckIcon />
                      <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP SCREENSHOT ── */}
      <section className="section" style={{ background: '#F9FAFB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'center' }}>
            <div>
              <div className="badge-orange" style={{ marginBottom: 16, display: 'inline-flex' }}>The platform</div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: '#1A1A2E', letterSpacing: '-0.5px', marginBottom: 16 }}>
                One dashboard.<br />Full clarity.
              </h2>
              <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.7, marginBottom: 28 }}>
                From the moment you log in, you see your total emissions, top emitting activities, and progress toward your reduction targets — all in one clear overview.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
                {[
                  'Emissions per scope breakdown (Scope 1, 2, 3)',
                  'Multi-year bar chart to track progress',
                  'Path-to-net-zero projection',
                  'CO₂ compensation status & certificates',
                ].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <CheckIcon />
                    <span style={{ fontSize: 14, color: '#374151' }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="https://app.co2.expert/login" className="btn-primary">
                See it in action
                <Icon d="M5 12h14M12 5l7 7-7 7" />
              </Link>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', border: '1px solid #E5E7EB' }}>
              <div style={{ background: '#F5A623', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                {[1,2,3].map(i => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />)}
                <span style={{ fontSize: 11, color: 'white', fontWeight: 600, marginLeft: 4 }}>app.co2.expert</span>
              </div>
              <div style={{ background: '#FFF9F0', padding: 24 }}>
                {/* Mini dashboard mockup */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 16 }}>
                  {[{ v: '2t', l: 'Total Emissions' }, { v: '2t', l: 'Scope 1' }, { v: '0t', l: 'Scope 2' }].map(s => (
                    <div key={s.l} style={{ background: 'white', borderRadius: 8, padding: '12px 10px', textAlign: 'center', border: '1px solid #F0F0F0' }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#1A1A2E' }}>{s.v}</div>
                      <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 2 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                {/* Donut placeholder */}
                <div style={{ background: 'white', borderRadius: 10, padding: 16, border: '1px solid #F0F0F0', textAlign: 'center' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 12, textAlign: 'left' }}>Emissions per scope breakdown</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
                    <svg width="90" height="90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="38" fill="none" stroke="#F5A623" strokeWidth="18" strokeDasharray="238 0" />
                      <text x="50" y="55" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1A1A2E">100%</text>
                    </svg>
                    <div style={{ fontSize: 12, color: '#6B7280' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                        <div style={{ width: 10, height: 10, borderRadius: 2, background: '#F5A623' }} />
                        Scope 1
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                        <div style={{ width: 10, height: 10, borderRadius: 2, background: '#1A1A2E' }} />
                        Scope 2
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 10, height: 10, borderRadius: 2, background: '#6B7280' }} />
                        Scope 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARBON CREDITS ── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #0f1f16 0%, #1a3a26 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1920&q=50)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="badge-orange" style={{ marginBottom: 16, display: 'inline-flex' }}>CO₂ Credits</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: 'white', letterSpacing: '-0.5px', marginBottom: 16 }}>
              Offset with certified projects
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto' }}>
              Choose from a curated selection of high-impact nature-based projects. Every credit is verified and comes with a traceable certificate.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=70', name: 'Greenzone Reforestation', location: 'Congo Basin, Cameroon', price: '€35.0', cert: 'Verra VCS' },
              { img: 'https://images.unsplash.com/photo-1515427153463-38c8bff0e72b?auto=format&fit=crop&w=600&q=70', name: 'Bulindi Agroforestry', location: 'Holma & Masindi, Uganda', price: '€40.0', cert: 'Gold Standard' },
              { img: 'https://images.unsplash.com/photo-1469289759076-d1484757abc3?auto=format&fit=crop&w=600&q=70', name: 'Hongera Cookstoves', location: 'MT Kenya & Aberdares, Kenya', price: '€14.0', cert: 'Gold Standard' },
              { img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=70', name: 'Lake Aral Afforestation', location: 'Aral Sea Region, Kazakhstan', price: '€30.0', cert: 'Verra VCS' },
            ].map(p => (
              <div key={p.name} style={{ background: 'white', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
                <div style={{ height: 140, backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '16px 18px' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#F5A623', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 6 }}>{p.cert}</div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1A1A2E', marginBottom: 4 }}>{p.name}</p>
                  <p style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 12 }}>📍 {p.location}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: '#F5A623' }}>{p.price}</span>
                    <span style={{ fontSize: 11, color: '#9CA3AF' }}>per credit</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="https://app.co2.expert/login" className="btn-primary" style={{ fontSize: 15 }}>
              View all projects
              <Icon d="M5 12h14M12 5l7 7-7 7" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS SUMMARY ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge-orange" style={{ marginBottom: 12, display: 'inline-flex' }}>Simple process</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#1A1A2E', letterSpacing: '-0.5px' }}>
              Up and running in 4 steps
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {[
              { n: '1', title: 'Add your locations', desc: 'Register your business locations — offices, factories, vehicles. Multiple sites supported.' },
              { n: '2', title: 'Input your data', desc: 'Upload energy bills, fuel receipts, travel data via Excel/CSV or manual entry. Takes minutes.' },
              { n: '3', title: 'Get your report', desc: 'Instantly see your full Scope 1, 2 & 3 footprint with a GHG Protocol-compliant PDF report.' },
              { n: '4', title: 'Offset & certify', desc: 'Choose a carbon project, purchase verified credits, and download your carbon-neutral certificate.' },
            ].map(s => (
              <div key={s.n} style={{ position: 'relative', paddingLeft: 20 }}>
                <div style={{ position: 'absolute', left: 0, top: 0, width: 36, height: 36, borderRadius: '50%', background: '#F5A623', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>
                  {s.n}
                </div>
                <div style={{ paddingLeft: 52 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A1A2E', marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/how-it-works" style={{ fontSize: 14, fontWeight: 600, color: '#F5A623', textDecoration: 'none' }}>
              See detailed explanation →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STANDARDS ── */}
      <section className="section-sm" style={{ background: '#F9FAFB', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#9CA3AF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 28 }}>
            Compliant with leading standards
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {['GHG Protocol', 'ISO 14064', 'Verra VCS', 'Gold Standard', 'CSRD / ESRS'].map(s => (
              <div key={s} style={{ padding: '8px 18px', background: 'white', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 13, fontWeight: 600, color: '#374151' }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: '#F5A623', padding: '64px 24px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 800, color: 'white', marginBottom: 12, letterSpacing: '-0.5px' }}>
            Ready to know your carbon footprint?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
            Book a 30-minute demo and we'll walk you through the platform with your own data.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'white', color: '#F5A623', fontWeight: 700, fontSize: 16,
              padding: '14px 28px', borderRadius: 50, textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}>
              Request a demo
              <Icon d="M5 12h14M12 5l7 7-7 7" />
            </Link>
            <Link href="https://app.co2.expert/login" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: 'white', fontWeight: 600, fontSize: 16,
              padding: '14px 28px', borderRadius: 50, textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.6)',
            }}>
              Start for free
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </>
  )
}
