'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const categories = [
  {
    title: 'Getting Started',
    questions: [
      {
        q: 'My customer is asking for our CO2 data. Where do I start?',
        a: 'The first step is understanding what data you already have. Most businesses have enough in their existing records — energy bills, fuel receipts, travel expenses — to calculate a solid Scope 1 and 2 footprint. CO2 Expert guides you through exactly what to collect and calculates the rest. Most businesses have their first report ready within two weeks.',
      },
      {
        q: 'What is a carbon footprint and why is my customer asking for it?',
        a: 'A carbon footprint is the total amount of greenhouse gas emissions caused by your business activities, measured in tonnes of CO2 equivalent. Large companies must now report their supply chain emissions under EU law (CSRD). That means they need your numbers to complete their own annual report. The Dutch Chamber of Commerce states it plainly: expect questions from larger companies that buy your products.',
      },
      {
        q: 'Do I need technical knowledge or a sustainability consultant?',
        a: 'No. If you can work with Excel, you can use CO2 Expert. You upload your operational data — we calculate your footprint using GHG Protocol emission factors and produce a structured report. No sustainability background required. Our team is available for a 30-minute onboarding call if you need it.',
      },
      {
        q: 'How long does it take to get a report I can share with my customer?',
        a: 'Most businesses complete their first measurement within two weeks of signing up. The data collection phase takes one to three days, the calculation is instant, and the report is ready to download and share immediately.',
      },
    ],
  },
  {
    title: 'Measurement',
    questions: [
      {
        q: 'What is the difference between Scope 1, 2 and 3?',
        a: 'Scope 1 covers emissions your business causes directly — company vehicles, gas heating, on-site combustion. Scope 2 covers emissions from energy you purchase — electricity, district heating. Scope 3 covers everything in your value chain — business travel, goods you buy, waste, logistics. Most customer questionnaires ask for at least Scope 1 and 2. CO2 Expert calculates all three.',
      },
      {
        q: 'What data do I need to provide?',
        a: 'For Scope 1 and 2: your energy bills (electricity, gas), fuel receipts for company vehicles, and details of any on-site combustion or refrigerants. For Scope 3: travel expense records, logistics data, and purchase invoices. You can import via Excel or CSV. We tell you exactly what to collect in the onboarding checklist — nothing more than what you already have.',
      },
      {
        q: 'How accurate are the calculations?',
        a: 'CO2 Expert uses GHG Protocol emission factors, updated annually. These are the same factors used in professional sustainability audits and accepted by EU reporting frameworks. The results are ISO 14064-aligned and structured to be shareable with customers, banks, or auditors.',
      },
      {
        q: 'Can I measure multiple locations or subsidiaries?',
        a: 'Yes. You can add unlimited locations — offices, warehouses, production sites — within a single account. Each location is measured separately and combined in your consolidated report.',
      },
    ],
  },
  {
    title: 'Reporting & Sharing',
    questions: [
      {
        q: 'What does the report look like and can my customer use it directly?',
        a: 'Your report is a structured PDF that includes total emissions per scope, the methodology used, emission factors applied, and data sources. It is formatted so procurement teams and sustainability departments at large companies can incorporate your data directly into their own reporting. You can also export to Excel for customers who prefer structured data.',
      },
      {
        q: 'My customer uses a specific sustainability questionnaire format. Can CO2 Expert handle that?',
        a: 'CO2 Expert produces GHG Protocol-compliant data which is the international standard behind most corporate sustainability questionnaires. If your customer uses a specific format (EcoVadis, CDP, proprietary supplier forms), you can use the numbers from your CO2 Expert report to fill in those fields. We offer guidance on common questionnaire formats.',
      },
      {
        q: 'What if my emissions data changes — can I update the report?',
        a: 'Yes. You can update your input data at any time and generate a new report. At the end of the year, you simply upload updated figures and produce your annual report. Year-on-year comparisons are built in.',
      },
      {
        q: 'Does CO2 Expert handle CSRD reporting for large companies?',
        a: 'CO2 Expert is designed for SMBs who need to answer customer data requests, not for the full CSRD disclosure process (which applies to large companies with 1,000+ employees and €450M+ turnover). If your large company needs full CSRD support, contact us and we will point you in the right direction.',
      },
    ],
  },
  {
    title: 'CSRD & Regulation',
    questions: [
      {
        q: 'Does CSRD apply to my company directly?',
        a: 'Probably not, if you have fewer than 1,000 employees. The Omnibus I Directive (March 2026) raised the mandatory CSRD threshold to companies with both 1,000+ employees and €450M+ net turnover. However, if you supply goods or services to large companies that are themselves under CSRD, they are required to include your emissions in their supply chain report. That is why you are getting these questions.',
      },
      {
        q: 'What is the VSME Standard?',
        a: 'The VSME (Voluntary SME Standard) is a simplified sustainability reporting framework developed specifically for small and medium-sized businesses. It defines what data SMBs can reasonably be asked to provide. CO2 Expert is structured around the VSME categories so your report covers exactly what large customers are entitled to ask for — nothing more.',
      },
      {
        q: 'Will this satisfy my bank or financing institution?',
        a: "Many banks and investors are now incorporating sustainability criteria into credit assessments and financing conditions. A GHG Protocol-compliant carbon footprint report from CO2 Expert meets the data standards most financial institutions use. We recommend checking your specific bank's requirements, but our reports are accepted by the major Dutch financial institutions.",
      },
    ],
  },
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggle = (key: string) => {
    setOpenIndex((prev) => (prev === key ? null : key))
  }

  return (
    <>
      <Nav />

      {/* HERO */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          padding: 'clamp(56px, 10vw, 96px) 24px clamp(48px, 8vw, 80px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Orange glow accent */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 600,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(245,166,35,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#FFF7ED',
              border: '1px solid #FED7AA',
              borderRadius: 50,
              padding: '4px 14px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#F5A623',
              marginBottom: 20,
            }}
          >
            FAQ
          </span>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              color: '#1A1A2E',
              marginBottom: 16,
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
            }}
          >
            Frequently asked questions
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
            Everything you need to know about measuring, reducing, and reporting your CO&#x2082; footprint.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '16px 24px 80px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 52 }}>
          {categories.map((cat, catIdx) => (
            <div key={cat.title}>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#F5A623',
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: '2px solid #FED7AA',
                  letterSpacing: '-0.01em',
                }}
              >
                {cat.title}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {cat.questions.map((item, qIdx) => {
                  const key = `${catIdx}-${qIdx}`
                  const isOpen = openIndex === key

                  return (
                    <div
                      key={key}
                      style={{
                        border: '1px solid #E5E7EB',
                        borderRadius: 12,
                        overflow: 'hidden',
                        backgroundColor: '#FFFFFF',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <button
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '18px 22px',
                          textAlign: 'left',
                          background: isOpen ? '#FFFBF5' : '#FFFFFF',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'background 0.2s',
                          gap: 16,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 15,
                            fontWeight: 600,
                            color: '#1A1A2E',
                            lineHeight: 1.45,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {item.q}
                        </span>
                        <span
                          style={{
                            flexShrink: 0,
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            backgroundColor: isOpen ? '#F5A623' : '#FFF7ED',
                            border: `1px solid ${isOpen ? '#F5A623' : '#FED7AA'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background 0.2s, border-color 0.2s',
                          }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            style={{
                              transition: 'transform 0.3s',
                              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                            }}
                          >
                            <path
                              d="M6 1v10M1 6h10"
                              stroke={isOpen ? '#FFFFFF' : '#F5A623'}
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        style={{
                          maxHeight: isOpen ? '600px' : '0',
                          transition: 'max-height 0.35s ease',
                          overflow: 'hidden',
                        }}
                      >
                        <p
                          style={{
                            padding: '4px 22px 20px',
                            fontSize: 15,
                            color: '#6B7280',
                            lineHeight: 1.75,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: '#FFF7ED',
          borderTop: '1px solid #FED7AA',
          padding: '72px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 28px)',
              fontWeight: 800,
              color: '#1A1A2E',
              marginBottom: 12,
              letterSpacing: '-0.02em',
            }}
          >
            Still have questions?
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Our team is happy to walk you through anything. Book a free 30-minute call or send us a message.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: '#F5A623',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: 16,
              padding: '14px 28px',
              borderRadius: 10,
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'opacity 0.2s',
            }}
          >
            Book a free call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
