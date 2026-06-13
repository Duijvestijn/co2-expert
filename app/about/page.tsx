import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About CO₂ Expert — Carbon Footprint Measurement for Business',
  description:
    'CO₂ Expert was built to solve one problem: businesses receiving CO2 data requests from large customers and having no way to answer. We give SMBs a complete, verified footprint report in days.',
};

const values = [
  {
    title: 'Transparency',
    body: 'Every emission figure is traceable to a specific data input and calculation. We publish our methodology openly so anyone can verify our numbers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Science-based',
    body: 'Our measurement framework follows GHG Protocol and ISO 14064. We stay aligned with IPCC guidance and CSRD requirements.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    title: 'Built for business',
    body: 'We designed for SMBs with real deadlines, not for multinationals with ESG teams. Fast to set up, easy to maintain, and ready to share with your customers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav lang="en" />

      <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF' }}>

        {/* HERO */}
        <section
          style={{
            backgroundColor: '#FFFFFF',
            padding: 'clamp(56px, 10vw, 96px) 24px clamp(48px, 8vw, 88px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Orange glow — top right */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 400,
              height: 400,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245,166,35,0.10) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          {/* Orange glow — bottom left */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: -60,
              left: -60,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#FFF7ED',
                border: '1px solid #FED7AA',
                borderRadius: 20,
                padding: '5px 14px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F5A623',
                marginBottom: 20,
              }}
            >
              Our story
            </div>

            <h1
              style={{
                fontSize: 'clamp(28px, 6vw, 46px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#1A1A2E',
                maxWidth: 680,
                margin: '0 auto 20px',
              }}
            >
              We built co2.expert because{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #F5A623, #E8831A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                businesses kept losing contracts.
              </span>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: '#6B7280',
                maxWidth: 560,
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              Large customers started sending CO2 questionnaires to their suppliers. Most SMBs had
              no data, no platform, and no way to respond. We built the tool that fixes that.
            </p>
          </div>
        </section>

        {/* STORY — two column */}
        <section
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E5E7EB',
            padding: '80px 24px',
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 64,
              alignItems: 'center',
            }}
          >
            {/* Left: story text */}
            <div>
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: '#1A1A2E',
                  marginBottom: 20,
                  lineHeight: 1.25,
                }}
              >
                The CO2 questionnaire problem
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: '#4B5563',
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Every week, SMBs across Europe receive sustainability questionnaires from large
                corporate customers. The questionnaires ask for Scope 1, 2 &amp; 3 data, GHG
                Protocol methodology, and a verified report they can pass to their own auditors.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: '#4B5563',
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                The existing tools were either built for multinationals with dedicated ESG teams, or
                required a consultant costing tens of thousands of euros. Small businesses had no
                practical path.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: '#4B5563',
                  lineHeight: 1.8,
                }}
              >
                We built co2.expert to give any business — from a 10-person logistics company to a
                regional manufacturer — the ability to measure, report, and share a complete carbon
                footprint in days, not months.
              </p>
            </div>

            {/* Right: problem flow diagram */}
            <div
              style={{
                backgroundColor: '#FAFAFA',
                borderRadius: 16,
                border: '1px solid #E5E7EB',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              {/* Step 1 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: '#FFF7ED',
                    border: '1.5px solid #FED7AA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#F5A623',
                  }}
                >
                  1
                </div>
                <div style={{ paddingTop: 6 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1A1A2E', margin: '0 0 2px' }}>
                    Company receives CO2 questionnaire
                  </p>
                  <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
                    From a large customer or bank
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div style={{ display: 'flex', paddingLeft: 17, marginTop: 4, marginBottom: 4 }}>
                <div style={{ width: 2, height: 20, backgroundColor: '#E5E7EB' }} />
              </div>

              {/* Step 2 — problem */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: '#FEF2F2',
                    border: '1.5px solid #FECACA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#EF4444',
                  }}
                >
                  !
                </div>
                <div style={{ paddingTop: 6 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1A1A2E', margin: '0 0 2px' }}>
                    Has no data to answer with
                  </p>
                  <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
                    No platform, no methodology, no report
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div style={{ display: 'flex', paddingLeft: 17, marginTop: 4, marginBottom: 4 }}>
                <div style={{ width: 2, height: 20, backgroundColor: '#E5E7EB' }} />
              </div>

              {/* Step 3 — CO2 Expert */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: '#FFF7ED',
                    border: '1.5px solid #F5A623',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#F5A623',
                  }}
                >
                  2
                </div>
                <div style={{ paddingTop: 6 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1A1A2E', margin: '0 0 2px' }}>
                    Onboards to CO₂ Expert
                  </p>
                  <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
                    2-week setup, GHG Protocol compliant
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div style={{ display: 'flex', paddingLeft: 17, marginTop: 4, marginBottom: 4 }}>
                <div style={{ width: 2, height: 20, backgroundColor: '#E5E7EB' }} />
              </div>

              {/* Step 4 — Result */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: '#F0FDF4',
                    border: '1.5px solid #A7F3D0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </div>
                <div style={{ paddingTop: 6 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1A1A2E', margin: '0 0 2px' }}>
                    Has verified report to share
                  </p>
                  <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
                    Customer-ready PDF, reusable every year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GREEN EARTH GROUP */}
        <section
          style={{
            backgroundColor: '#FFFBF5',
            borderTop: '1px solid #FED7AA',
            borderBottom: '1px solid #FED7AA',
            padding: '80px 24px',
          }}
        >
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#F5A623',
                marginBottom: 16,
                textAlign: 'center',
              }}
            >
              Our parent company
            </p>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: '#1A1A2E',
                marginBottom: 12,
                textAlign: 'center',
                lineHeight: 1.25,
              }}
            >
              Powered by Green Earth Group N.V. (EARTH)
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#6B7280',
                textAlign: 'center',
                marginBottom: 40,
                lineHeight: 1.6,
              }}
            >
              co2.expert is backed by one of Europe&apos;s largest end-to-end carbon project developers.
            </p>

            {/* Key fact card with orange left border */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 12,
                border: '1px solid #E5E7EB',
                borderLeft: '4px solid #F5A623',
                padding: '28px 32px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                marginBottom: 32,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  color: '#374151',
                  lineHeight: 1.75,
                  margin: '0 0 12px',
                }}
              >
                Green Earth Group (GEG) is an end-to-end carbon project developer with active
                reforestation, agroforestry, and cookstove programmes across Africa and Central
                Asia. GEG is publicly listed on Euronext under the ticker{' '}
                <strong style={{ color: '#1A1A2E' }}>EARTH</strong>.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: '#374151',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                This connection gives every co2.expert customer access to verified project
                methodology that underpins every GHG Protocol report generated on the platform.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 16,
                marginBottom: 32,
              }}
            >
              {[
                { label: 'Listed on', value: 'Euronext — EARTH' },
                { label: 'Project types', value: 'Reforestation · Agroforestry · Cookstoves' },
                { label: 'Regions', value: 'Africa · Central Asia' },
                { label: 'Standards', value: 'Verra VCS · Gold Standard' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 10,
                    border: '1px solid #E5E7EB',
                    padding: '16px 18px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#9CA3AF',
                      marginBottom: 4,
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#1A1A2E', margin: 0, lineHeight: 1.4 }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a
                href="https://green.earth"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#F5A623',
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                Visit green.earth
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* MISSION / VALUES */}
        <section
          style={{
            backgroundColor: '#FFFFFF',
            padding: '80px 24px',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 30,
                fontWeight: 800,
                color: '#1A1A2E',
                textAlign: 'center',
                marginBottom: 12,
              }}
            >
              What we stand for
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: '#6B7280',
                fontSize: 16,
                marginBottom: 48,
                lineHeight: 1.5,
              }}
            >
              Three principles guide every decision we make.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 24,
              }}
            >
              {values.map((v) => (
                <div
                  key={v.title}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 12,
                    padding: '32px 24px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      backgroundColor: '#FFF7ED',
                      border: '1px solid #FED7AA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 18,
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: '#1A1A2E',
                      marginBottom: 10,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section
          style={{
            backgroundColor: '#FAFAFA',
            borderTop: '1px solid #E5E7EB',
            borderBottom: '1px solid #E5E7EB',
            padding: '80px 24px',
          }}
        >
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontSize: 30,
                fontWeight: 800,
                color: '#1A1A2E',
                marginBottom: 20,
              }}
            >
              What we build
            </h2>
            <p
              style={{
                fontSize: 17,
                color: '#4B5563',
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              co2.expert is a carbon footprint measurement platform for small and medium businesses.
              It covers Scope 1, 2 &amp; 3 emissions, follows GHG Protocol methodology, and
              produces a verified, customer-ready PDF report your team can actually share.
            </p>
            <p
              style={{
                fontSize: 17,
                color: '#4B5563',
                lineHeight: 1.8,
              }}
            >
              It is designed for companies that receive sustainability questionnaires from large
              customers — manufacturers, logistics providers, food producers, professional services
              firms — and need to respond quickly without hiring a consultant or building an ESG
              team from scratch.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            backgroundColor: '#FFF7ED',
            borderTop: '1px solid #FED7AA',
            padding: '80px 24px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 34,
                fontWeight: 800,
                color: '#1A1A2E',
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Book a free 30-minute call
            </h2>
            <p
              style={{
                fontSize: 17,
                color: '#6B7280',
                lineHeight: 1.65,
                marginBottom: 36,
              }}
            >
              Tell us about your situation. We will tell you exactly what a footprint report would
              look like for your business — and what it would cost.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #F5A623, #E8831A)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: 16,
                padding: '15px 36px',
                borderRadius: 10,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                boxShadow: '0 4px 14px rgba(245,166,35,0.30)',
              }}
            >
              Book a free call
            </a>
          </div>
        </section>

      </main>

      <Footer lang="en" />
    </>
  );
}
