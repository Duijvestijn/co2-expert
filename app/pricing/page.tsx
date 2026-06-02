import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pricing — co2.expert',
  description: "Transparent pricing for SMBs. No hidden enterprise contracts.",
};

const features = [
  'Scope 1/2/3 measurement',
  'Multiple locations',
  'GHG Protocol reports',
  'CSRD-ready export',
  'Scope 3 value chain tracking',
  'Year-on-year comparison',
  'Customer-ready PDF export',
  'Team accounts',
  'Dedicated support',
  'Annual subscription',
  'Audit trail',
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: "We offer a free 30-minute demo. Because every implementation is tailored, we don't offer a generic free tier.",
  },
  {
    q: 'How long does setup take?',
    a: "Most customers are fully onboarded within two weeks.",
  },
  {
    q: 'What is included?',
    a: "Everything listed: full platform access, all reporting modules, dedicated support.",
  },
  {
    q: 'Can I cancel?',
    a: "Yes. Subscriptions run annually. We will export all your data so you are never locked in.",
  },
  {
    q: 'NGO discount?',
    a: "Yes, non-profits get a 25% discount. Mention it during your demo.",
  },
  {
    q: 'Is my data secure?',
    a: "All data is encrypted on EU infrastructure (AWS eu-west-1). Your data is never sold.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />

      <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#f9fafb' }}>

        {/* HERO */}
        <section
          style={{
            backgroundColor: '#1A1A2E',
            padding: '88px 24px 72px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#F5A623',
              marginBottom: 14,
            }}
          >
            Pricing
          </p>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              maxWidth: 600,
              margin: '0 auto 16px',
            }}
          >
            Priced for your business size
          </h1>
          <p
            style={{
              fontSize: 18,
              color: '#9CA3AF',
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            {`Transparent, needs-based pricing. No hidden enterprise contracts.`}
          </p>
        </section>

        {/* VALUE COMPARISON */}
        <section style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 24px' }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: '#1A1A2E',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            Why co2.expert?
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: '#6B7280',
              fontSize: 16,
              marginBottom: 48,
            }}
          >
            Compare the real cost of your options
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
            }}
          >
            {/* DIY / Consultant */}
            <ComparisonCard
              title="Hire a consultant"
              badge="The hard way"
              badgeColor="#6B7280"
              highlighted={false}
              dark={true}
              items={[
                '€15,000–€50,000 / year',
                '3–6 months to implement',
                'Manual, error-prone process',
                'One-off reports only',
                'Credits handled separately',
              ]}
            />

            {/* co2.expert — RECOMMENDED */}
            <ComparisonCard
              title="Built for your business"
              badge="RECOMMENDED"
              badgeColor="#F5A623"
              highlighted={true}
              dark={false}
              items={[
                'Fair annual subscription',
                '2-week setup',
                'All-in-one platform',
                'Customer-ready PDF reports',
                'Dedicated support team',
              ]}
            />

            {/* Enterprise */}
            <ComparisonCard
              title="Fortune 500 tools"
              badge="Enterprise"
              badgeColor="#6B7280"
              highlighted={false}
              dark={false}
              items={[
                '€50,000+ / year',
                '6+ months to implement',
                'Designed for multinationals',
                'Requires dedicated ESG team',
                'Complex broker integrations',
              ]}
            />
          </div>
        </section>

        {/* INCLUDED FEATURES GRID */}
        <section
          style={{
            backgroundColor: '#ffffff',
            padding: '72px 24px',
            borderTop: '1px solid #E5E7EB',
            borderBottom: '1px solid #E5E7EB',
          }}
        >
          <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: '#1A1A2E',
                marginBottom: 12,
              }}
            >
              Everything you need, included
            </h2>
            <p style={{ color: '#6B7280', fontSize: 16, marginBottom: 44 }}>
              Every plan includes the full feature set. No module upsells.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: 12,
              }}
            >
              {features.map((f) => (
                <div
                  key={f}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 16px',
                    borderRadius: 10,
                    backgroundColor: '#FFF7ED',
                    border: '1px solid #FED7AA',
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      backgroundColor: '#FEF3C7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5.5L4 7.5L8.5 3"
                        stroke="#F5A623"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section style={{ maxWidth: 720, margin: '0 auto', padding: '72px 24px', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: '#1A1A2E',
              marginBottom: 16,
            }}
          >
            Our pricing approach
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#4B5563',
              lineHeight: 1.75,
              marginBottom: 12,
            }}
          >
            {`We offer transparent, needs-based pricing. Typically: a one-time setup fee plus an annual subscription based on your company size and number of locations.`}
          </p>
          <p
            style={{
              fontSize: 17,
              color: '#4B5563',
              lineHeight: 1.75,
              marginBottom: 12,
            }}
          >
            {`Most SMBs get started from `}
            <strong style={{ color: '#1A1A2E' }}>{`€2,500/year`}</strong>
            {`. Request a quote for your exact needs.`}
          </p>
          <p
            style={{
              fontSize: 17,
              color: '#4B5563',
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            {`Most SMBs have a complete Scope 1, 2 & 3 report ready within 2 weeks of signup.`}
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#F5A623',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: 16,
              padding: '14px 32px',
              borderRadius: 10,
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            {`Get a tailored quote →`}
          </a>
        </section>

        {/* FAQ */}
        <section
          style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid #E5E7EB',
            padding: '72px 24px',
          }}
        >
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: '#1A1A2E',
                textAlign: 'center',
                marginBottom: 48,
              }}
            >
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ borderBottom: '1px solid #F3F4F6', paddingBottom: 28 }}>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#1A1A2E',
                      marginBottom: 8,
                    }}
                  >
                    {q}
                  </h3>
                  <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

function ComparisonCard({
  title,
  badge,
  badgeColor,
  items,
  highlighted,
  dark,
}: {
  title: string;
  badge: string;
  badgeColor: string;
  items: string[];
  highlighted: boolean;
  dark: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: dark ? '#1A1A2E' : '#ffffff',
        borderRadius: 16,
        padding: '28px 24px',
        border: highlighted ? '2px solid #F5A623' : '1.5px solid #E5E7EB',
        position: 'relative',
        boxShadow: highlighted
          ? '0 8px 32px rgba(245,166,35,0.15)'
          : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {highlighted && (
        <div
          style={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#F5A623',
            color: '#ffffff',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '4px 14px',
            borderRadius: 20,
            whiteSpace: 'nowrap',
          }}
        >
          Recommended
        </div>
      )}
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: badgeColor,
          marginBottom: 6,
        }}
      >
        {badge}
      </p>
      <h3
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: dark ? '#ffffff' : '#1A1A2E',
          marginBottom: 20,
        }}
      >
        {title}
      </h3>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              fontSize: 14,
              color: dark ? '#9CA3AF' : '#4B5563',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
            }}
          >
            {highlighted
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><path d="M5 12l4 4 10-10" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><path d="M8 12h8" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/></svg>
            }
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
