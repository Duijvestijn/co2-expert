'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// Note: metadata export is not supported in 'use client' components.
// Move to a separate layout.tsx or use generateMetadata in a server wrapper if needed.

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
        a: 'Many banks and investors are now incorporating sustainability criteria into credit assessments and financing conditions. A GHG Protocol-compliant carbon footprint report from CO2 Expert meets the data standards most financial institutions use. We recommend checking your specific bank\'s requirements, but our reports are accepted by the major Dutch financial institutions.',
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
        style={{ background: '#1A1A2E' }}
        className="py-20 px-6 text-center text-white"
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#F5A623' }}
          >
            FAQ
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently asked questions
          </h1>
          <p className="text-lg text-gray-300">
            Everything you need to know about measuring, reducing, and
            offsetting your CO₂ footprint.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-14">
          {categories.map((cat, catIdx) => (
            <div key={cat.title}>
              <h2
                className="text-xl font-bold mb-6 pb-3 border-b-2"
                style={{ color: '#1A1A2E', borderColor: '#F5A623' }}
              >
                {cat.title}
              </h2>
              <div className="space-y-3">
                {cat.questions.map((item, qIdx) => {
                  const key = `${catIdx}-${qIdx}`
                  const isOpen = openIndex === key

                  return (
                    <div
                      key={key}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold transition-colors hover:bg-gray-50"
                        style={{ color: '#1A1A2E' }}
                        aria-expanded={isOpen}
                      >
                        <span>{item.q}</span>
                        <span
                          className="ml-4 flex-shrink-0 text-xl font-bold transition-transform duration-300"
                          style={{
                            color: '#F5A623',
                            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          }}
                        >
                          +
                        </span>
                      </button>
                      <div
                        style={{
                          maxHeight: isOpen ? '600px' : '0',
                          transition: 'max-height 0.35s ease',
                          overflow: 'hidden',
                        }}
                      >
                        <p className="px-6 pb-5 text-gray-600 leading-relaxed">
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
        className="py-16 px-6 text-center"
        style={{ background: '#F9F9FB' }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: '#1A1A2E' }}
          >
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is happy to walk you through anything. Book a free 30-minute
            call or send us a message.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: '#F5A623' }}
          >
            Contact us
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
