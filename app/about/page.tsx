import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About — co2.expert',
  description:
    'co2.expert was built to close the loop between carbon measurement and real climate action. Powered by Green Earth Group N.V., listed on Euronext.',
};

const projects = [
  {
    name: 'Greenzone Cameroon',
    type: 'Agroforestry',
    badge: 'Verra VCS',
    region: 'Central Africa',
  },
  {
    name: 'Bulindi Uganda',
    type: 'Reforestation',
    badge: 'Gold Standard',
    region: 'East Africa',
  },
  {
    name: 'Hongera Kenya',
    type: 'Cookstoves',
    badge: 'Gold Standard',
    region: 'East Africa',
  },
  {
    name: 'Lake Aral Kazakhstan',
    type: 'Ecosystem Restoration',
    badge: 'Verra VCS',
    region: 'Central Asia',
  },
];

const team = [
  { name: 'Rob van den Berg', role: 'CEO', bio: 'Serial entrepreneur in climate tech and sustainable finance.' },
  { name: 'Lisa Hendriks', role: 'Head of Product', bio: 'Former sustainability consultant turned product builder.' },
  { name: 'Marc Jansen', role: 'CTO', bio: 'Full-stack engineer with a background in data-heavy SaaS platforms.' },
  { name: 'Emma de Wit', role: 'Carbon Expert', bio: 'Certified GHG Protocol auditor and CSRD implementation specialist.' },
];

const values = [
  {
    icon: '◎',
    title: 'Transparency',
    body: 'Every credit is traceable to a specific project and lot. We publish our methodology openly so anyone can verify our numbers.',
  },
  {
    icon: '⬡',
    title: 'Science-based',
    body: 'Our measurement framework follows GHG Protocol and ISO 14064. We stay aligned with IPCC guidance and CSRD requirements.',
  },
  {
    icon: '▲',
    title: 'Impact-first',
    body: 'We only work with projects that generate real, verified tonnes — reforestation, agroforestry, cookstoves. No paper offsets.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* HERO */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0f2614 0%, #1a3a20 40%, #1A1A2E 100%)',
            padding: '100px 24px 88px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#6EE7B7',
              marginBottom: 16,
            }}
          >
            Our mission
          </p>
          <h1
            style={{
              fontSize: 46,
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              maxWidth: 680,
              margin: '0 auto',
            }}
          >
            We believe every business can become carbon neutral
          </h1>
        </section>

        {/* THE STORY */}
        <section
          style={{
            maxWidth: 720,
            margin: '0 auto',
            padding: '72px 24px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: '#1A1A2E',
              marginBottom: 20,
            }}
          >
            The story
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#4B5563',
              lineHeight: 1.8,
            }}
          >
            co2.expert was built because businesses want to act on climate, but the tools were either
            too complex, too expensive, or stopped at measurement without offering a path to actual
            neutrality. We close the loop — from measuring your footprint to retiring certified
            credits from real projects, all in one platform built for the scale of an SMB.
          </p>
        </section>

        {/* GREEN EARTH GROUP */}
        <section
          style={{
            backgroundColor: '#F0FDF4',
            borderTop: '1px solid #D1FAE5',
            borderBottom: '1px solid #D1FAE5',
            padding: '72px 24px',
          }}
        >
          <div style={{ maxWidth: 880, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#059669',
                  marginBottom: 12,
                }}
              >
                Our parent company
              </p>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1A1A2E', marginBottom: 16 }}>
                Powered by Green Earth Group N.V.
              </h2>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
                Green Earth Group (GEG) is an end-to-end carbon project developer with active
                reforestation, agroforestry, and cookstove programmes across Africa and Central Asia.
                GEG is publicly listed on Euronext under the ticker{' '}
                <strong style={{ color: '#1A1A2E' }}>EARTH</strong>.
              </p>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
                The direct connection matters: co2.expert customers purchase credits from GEG's own
                certified projects — no brokers, no middlemen, full chain-of-custody traceability
                from tonne to certificate.
              </p>
              <a
                href="https://green.earth"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#059669',
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                Visit green.earth →
              </a>
            </div>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 16,
                padding: 32,
                border: '1px solid #D1FAE5',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {[
                { label: 'Listed on', value: 'Euronext — ticker EARTH' },
                { label: 'Project types', value: 'Reforestation · Agroforestry · Cookstoves' },
                { label: 'Regions', value: 'Africa · Central Asia' },
                { label: 'Standards', value: 'Verra VCS · Gold Standard' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B7280', marginBottom: 2 }}>
                    {label}
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#1A1A2E', margin: 0 }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROJECTS */}
        <section style={{ maxWidth: 960, margin: '0 auto', padding: '72px 24px' }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: '#1A1A2E',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            Our projects
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: '#6B7280',
              fontSize: 16,
              marginBottom: 44,
            }}
          >
            Credits you retire through co2.expert come from these verified projects
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 20,
            }}
          >
            {projects.map((p) => (
              <div
                key={p.name}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 14,
                  padding: '24px 20px',
                  border: '1.5px solid #E5E7EB',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    backgroundColor: '#F0FDF4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                    marginBottom: 14,
                  }}
                >
                  🌳
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A1A2E', marginBottom: 4 }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 12 }}>
                  {p.type} · {p.region}
                </p>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    backgroundColor: '#ECFDF5',
                    color: '#059669',
                    padding: '3px 10px',
                    borderRadius: 20,
                    border: '1px solid #A7F3D0',
                  }}
                >
                  {p.badge}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section
          style={{
            backgroundColor: '#F9FAFB',
            borderTop: '1px solid #E5E7EB',
            padding: '72px 24px',
          }}
        >
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: '#1A1A2E',
                textAlign: 'center',
                marginBottom: 44,
              }}
            >
              The team
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
                gap: 24,
              }}
            >
              {team.map((member) => (
                <div
                  key={member.name}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 14,
                    padding: '28px 20px',
                    border: '1.5px solid #E5E7EB',
                    textAlign: 'center',
                  }}
                >
                  {/* Avatar placeholder */}
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      backgroundColor: '#E5E7EB',
                      margin: '0 auto 16px',
                    }}
                  />
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1A1A2E', marginBottom: 3 }}>
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#F5A623',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: 10,
                    }}
                  >
                    {member.role}
                  </p>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.55 }}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section style={{ maxWidth: 880, margin: '0 auto', padding: '72px 24px' }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: '#1A1A2E',
              textAlign: 'center',
              marginBottom: 44,
            }}
          >
            What we stand for
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 16,
                  padding: '32px 24px',
                  border: '1.5px solid #E5E7EB',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    backgroundColor: '#FEF3C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    marginBottom: 16,
                    color: '#F5A623',
                  }}
                >
                  {v.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#1A1A2E', marginBottom: 10 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            backgroundColor: '#1A1A2E',
            padding: '80px 24px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: 16,
            }}
          >
            Join the movement
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#9CA3AF',
              maxWidth: 440,
              margin: '0 auto 36px',
              lineHeight: 1.6,
            }}
          >
            Hundreds of SMBs have already started their journey to carbon neutrality.
            Yours can be next.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#F5A623',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: 16,
              padding: '14px 36px',
              borderRadius: 10,
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Book a demo →
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
