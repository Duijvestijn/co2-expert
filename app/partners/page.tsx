import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PartnerApplicationForm from './PartnerApplicationForm'

export const metadata: Metadata = {
  title: 'Partners — co2.expert',
  description:
    'Become a co2.expert partner. Help your clients become carbon neutral and grow your practice with referral commissions, co-branded materials, and dedicated support.',
}

const whyPartner = [
  {
    icon: '💰',
    title: 'New revenue stream',
    body: 'Earn referral commission on every client subscription you bring in — recurring income with zero overhead.',
  },
  {
    icon: '🌱',
    title: 'Client retention',
    body: 'Add sustainability reporting to your offering. Clients who see you as their ESG advisor stay longer and refer more.',
  },
  {
    icon: '⚡',
    title: 'Easy setup',
    body: 'We handle the onboarding and implementation. You focus on the relationship; we handle the technical work.',
  },
]

const steps = [
  { num: '01', label: 'Apply', detail: 'Submit your application below. We review within 2 business days.' },
  { num: '02', label: 'Complete free training', detail: 'Access our partner academy and get certified at no cost.' },
  { num: '03', label: 'Refer clients', detail: 'Share your unique partner link or introduce us directly.' },
  { num: '04', label: 'Earn commission', detail: 'Receive recurring commission for every active client subscription.' },
]

const tiers = [
  {
    name: 'Referral Partner',
    highlight: false,
    items: [
      'Refer clients via unique link',
      'Earn commission per subscription',
      'Access to partner portal',
      'Basic co-branded materials',
    ],
  },
  {
    name: 'Certified Partner',
    highlight: true,
    items: [
      'Everything in Referral',
      'Resell & support clients',
      'Full co-branding package',
      'Priority onboarding support',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Strategic Partner',
    highlight: false,
    items: [
      'Everything in Certified',
      'Deep platform integration',
      'Priority technical support',
      'Joint marketing campaigns',
      'Quarterly business reviews',
      'Custom commercial terms',
    ],
  },
]

const whatYouGet = [
  'Partner portal access',
  'Co-branded materials',
  'Demo accounts',
  'Training & certification',
  'Dedicated account manager',
  'Marketing support',
  'Commission per client',
  'Quarterly partner calls',
]

export default function PartnersPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section
        style={{ background: '#1A1A2E' }}
        className="py-24 px-6 text-center text-white"
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#F5A623' }}
          >
            Partner Program
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Help your clients become carbon neutral —{' '}
            <span style={{ color: '#F5A623' }}>and grow your practice</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join accountants and advisors who have turned sustainability into a
            competitive advantage. Refer clients, earn recurring commission, and
            become their trusted ESG partner.
          </p>
          <a
            href="#apply"
            className="inline-block mt-8 px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: '#F5A623' }}
          >
            Apply now
          </a>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#1A1A2E' }}
          >
            Why partner with co2.expert?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyPartner.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#1A1A2E' }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6" style={{ background: '#F9F9FB' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-14"
            style={{ color: '#1A1A2E' }}
          >
            How it works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: '#F5A623' }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: '#1A1A2E' }}
                >
                  {step.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER TIERS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#1A1A2E' }}
          >
            Partner tiers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border-2 transition-shadow hover:shadow-lg ${
                  tier.highlight
                    ? 'border-[#F5A623] shadow-md'
                    : 'border-gray-100'
                }`}
              >
                {tier.highlight && (
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 text-white"
                    style={{ background: '#F5A623' }}
                  >
                    Most popular
                  </span>
                )}
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: '#1A1A2E' }}
                >
                  {tier.name}
                </h3>
                <ul className="space-y-3">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span
                        className="mt-0.5 text-lg leading-none"
                        style={{ color: '#F5A623' }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 px-6" style={{ background: '#1A1A2E' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            What you get
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {whatYouGet.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 bg-white/10 rounded-xl px-6 py-4 text-white"
              >
                <span
                  className="text-xl font-bold flex-shrink-0"
                  style={{ color: '#F5A623' }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ color: '#1A1A2E' }}
          >
            Apply to become a partner
          </h2>
          <p className="text-center text-gray-500 mb-10">
            We review every application within 2 business days.
          </p>
          <PartnerApplicationForm />
        </div>
      </section>

      <Footer />
    </>
  )
}
