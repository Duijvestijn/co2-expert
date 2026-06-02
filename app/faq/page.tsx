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
        q: 'What is co2.expert?',
        a: 'co2.expert is a full platform for SMBs to measure Scope 1, 2, and 3 emissions, set science-based reduction targets, and offset unavoidable emissions with certified carbon credits sourced directly from Green Earth Group\'s own projects.',
      },
      {
        q: 'How quickly can I get started?',
        a: 'Typically 1–2 weeks from signup to your first measurement. Our team handles the entire setup — you just need to provide your data. Most clients complete their first carbon footprint within the first month.',
      },
      {
        q: 'Do I need technical knowledge?',
        a: 'No technical knowledge required. If you can use Excel, you can use co2.expert. We also offer a dedicated onboarding call with a sustainability expert to walk you through every step.',
      },
      {
        q: 'What data do I need to get started?',
        a: 'Energy bills, fuel receipts, travel records, and basic company information are the main inputs. We guide you through each category with clear instructions and example templates so nothing gets missed.',
      },
    ],
  },
  {
    title: 'Measurement',
    questions: [
      {
        q: 'What is the difference between Scope 1, 2 and 3?',
        a: 'Scope 1 covers direct emissions from sources you own or control — vehicles, gas boilers, and on-site fuel combustion. Scope 2 covers purchased energy such as electricity and district heat. Scope 3 covers everything else: supply chain emissions, business travel, waste, employee commuting, and more.',
      },
      {
        q: 'How accurate are the calculations?',
        a: 'We use GHG Protocol emission factors, updated annually from official national and international databases. Results are ISO 14064-1 aligned and audit-ready, meaning they can be reviewed and verified by an external auditor.',
      },
      {
        q: 'Can I measure multiple locations?',
        a: 'Yes. Unlimited locations are included in all plans. You can track emissions separately by site, cost centre, or country, and roll them up into a single company-wide footprint.',
      },
      {
        q: 'Which standards does co2.expert support?',
        a: 'co2.expert supports the GHG Protocol Corporate Standard, ISO 14064-1, and the CSRD/ESRS reporting framework. Reports can be exported in formats suitable for each standard.',
      },
    ],
  },
  {
    title: 'Carbon Credits',
    questions: [
      {
        q: 'What are certified carbon credits?',
        a: 'A carbon credit represents one tonne of CO₂ that has been avoided or removed from the atmosphere. Our credits are certified by Verra (VCS) or Gold Standard — the two most recognised certification bodies in the voluntary carbon market.',
      },
      {
        q: 'Why are co2.expert credits different?',
        a: 'Most platforms buy credits from brokers, adding margin at every step. co2.expert sells credits directly from Green Earth Group\'s own projects — giving you full traceability from tonne to tree, no middlemen, and fair market prices.',
      },
      {
        q: 'What projects can I choose from?',
        a: 'We currently offer four flagship projects: Greenzone Reforestation (Cameroon), Bulindi Agroforestry (Uganda), Hongera Cookstoves (Kenya), and Lake Aral Afforestation (Kazakhstan). Each project page includes impact data, satellite imagery, and third-party audit reports.',
      },
      {
        q: 'Do I receive a certificate after offsetting?',
        a: 'Yes. Once you complete an offset purchase, you receive a downloadable carbon-neutral certificate with your company name, total credits retired, the specific project(s), and the certification registry serial numbers for full traceability.',
      },
    ],
  },
  {
    title: 'CSRD & Compliance',
    questions: [
      {
        q: 'What is CSRD and does it apply to my business?',
        a: 'CSRD (Corporate Sustainability Reporting Directive) is an EU law requiring companies to publicly report on their sustainability impact. It phases in progressively: large listed companies from 2024, all large companies (250+ employees or €40M+ turnover) from 2025, and smaller listed companies (~50 employees) from 2026.',
      },
      {
        q: 'Can I use co2.expert for CSRD reporting?',
        a: 'Yes. Our reports are structured to meet CSRD/ESRS E1 requirements for climate reporting. We also offer a dedicated CSRD readiness export that maps your data to the relevant ESRS disclosure points, making it straightforward to hand off to your auditor or sustainability consultant.',
      },
      {
        q: 'Is the data auditable?',
        a: 'Yes. All inputs, emission factors used, calculation methodologies, and assumptions are fully traceable within the platform. You can export a complete audit trail that can be shared with third-party verifiers or internal auditors at any time.',
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
