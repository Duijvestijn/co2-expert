import type { Metadata } from 'next'
import DemoLandingPage from '@/components/DemoLandingPage'

export const metadata: Metadata = {
  title: 'Your Clients Are Getting CO₂ Questionnaires — CO₂ Expert for Accountants',
  description: 'As their most trusted advisor, your business clients will come to you with sustainability questions. Partner with CO₂ Expert and you\'ll have an answer — plus a new recurring revenue stream.',
}

const FERDIA = {
  name: 'Ferdia O\'Leary',
  role: 'Carbon Strategy Consultant — CO₂ Expert',
  bio: 'Ferdia works closely with accounting firms and business advisors across Ireland and the Netherlands to help them add carbon reporting to their service portfolio. He knows what\'s practical, what clients actually need, and how to make the economics work for your firm.',
  initials: 'FO',
  // Replace initials with real photo: set photoUrl to '/team/ferdia-o-leary.jpg'
  calendarUrl: 'https://meetings.hubspot.com/ferdia-o-leary',
  langTag: 'EN',
}

export default function AccountantDemoPage() {
  return (
    <DemoLandingPage
      lang="en"
      badge="For accountants & business advisors"
      headline="Your clients are getting CO₂ questionnaires. They'll ask you."
      headlineAccent="They'll ask you."
      subheadline="As their most trusted advisor, your business clients will come to you with sustainability reporting questions. Partner with CO₂ Expert and you'll have the answer — plus a new recurring service line."
      painPoints={[
        {
          icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
          title: "Clients are calling with sustainability questions you can't yet answer",
          body: "CSRD, GHG Protocol, Scope 3 emissions — your clients don't understand it, and they need guidance from someone they trust. Partnering with CO₂ Expert means you can answer confidently without becoming a sustainability expert yourself.",
        },
        {
          icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: "You're watching a new service category form and don't want to miss it",
          body: "Carbon reporting is becoming as routine as annual accounts for SMEs. Firms that add it to their portfolio now will be the trusted advisors when this becomes mandatory. The window to lead — rather than follow — is still open.",
        },
        {
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
          title: "You don't want to become a sustainability consultant",
          body: "You don't need to. CO₂ Expert handles all the methodology, calculations, and report generation. You manage the client relationship and add your advisory layer. We handle the technical complexity.",
        },
      ]}
      cases={[
        {
          company: 'Beauchamps LLP',
          sector: 'Legal services · Dublin, Ireland',
          flag: '⚖️',
          metric: 'Full carbon footprint report accepted by two Fortune 500 clients',
          result: 'Beauchamps\' two largest corporate clients asked for verified emissions data as part of their own CSRD Scope 3 reporting. CO₂ Expert delivered a professional services carbon footprint that met both requirements simultaneously — preserving two key client relationships.',
          quote: 'Our clients needed this and CO₂ Expert made it straightforward for us to deliver.',
        },
        {
          company: 'Squiby Foods',
          sector: 'Food logistics · Amsterdam',
          flag: '🚚',
          metric: '€2.4M contract retained through verified sustainability report',
          result: 'Squiby\'s accountant was the first call when their major customer asked for CO₂ data. By connecting them to CO₂ Expert, their advisor added genuine value at a critical moment — and deepened the client relationship significantly.',
          quote: 'Our advisor sorted it. That\'s exactly what we pay them for.',
        },
        {
          company: 'Bar Company',
          sector: 'Catering services · Netherlands',
          flag: '🍽️',
          metric: 'Annual CO₂ report now bundled with year-end accounts',
          result: 'Bar Company\'s accounting firm now includes a CO₂ Expert measurement as part of their standard annual engagement. The addition increased client retention and unlocked a new recurring revenue stream for the practice.',
          quote: 'Clients didn\'t expect it — and now they wouldn\'t want to go without it.',
        },
      ]}
      consultant={FERDIA}
      faqs={[
        {
          q: 'What does a partner relationship with CO₂ Expert look like?',
          a: 'You refer clients to CO₂ Expert through your unique partner link. We handle the measurement, calculation, and reporting. You stay involved as the trusted advisor. We provide training, co-branded materials, and a dedicated account contact. See our Partner Programme for full details.',
        },
        {
          q: 'How do I handle a client who asks me about CSRD now?',
          a: 'Book a 30-minute call with Ferdia. He\'ll help you understand what your client actually needs, which clients are likely to be affected, and what a practical response looks like. No commitment required.',
        },
        {
          q: 'Do I need sustainability expertise to offer this service?',
          a: 'No. CO₂ Expert handles all the technical work — GHG Protocol methodology, emissions factors, report formatting. Your role is the client relationship and advisory layer you already provide. We can brief you on the key concepts in under an hour.',
        },
        {
          q: 'Which clients should I prioritise for this conversation?',
          a: 'Start with: (1) clients in manufacturing, logistics, or food who supply large retailers; (2) clients applying for green financing; (3) clients who bid on public tenders. These three segments are facing CO₂ requests right now.',
        },
      ]}
    />
  )
}
