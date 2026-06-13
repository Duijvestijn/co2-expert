import type { Metadata } from 'next'
import DemoLandingPage from '@/components/DemoLandingPage'

export const metadata: Metadata = {
  title: 'Your Bank Is Asking for Your Carbon Footprint — CO₂ Expert',
  description: 'EU taxonomy, green loan criteria, ESG due diligence — banks are requesting sustainability data as part of credit and investment decisions. Get prepared in weeks, not months.',
}

const FERDIA = {
  name: 'Ferdia O\'Leary',
  role: 'Carbon Strategy Consultant — CO₂ Expert',
  bio: 'Ferdia has guided finance directors and business owners through the ESG data requests coming from banks, investors, and insurers. He makes the process fast, painless, and produces output your financial counterparties actually accept.',
  initials: 'FO',
  // Replace initials with real photo: set photoUrl to '/team/ferdia-o-leary.jpg'
  calendarUrl: 'https://meetings.hubspot.com/ferdia-o-leary',
  langTag: 'EN',
}

export default function FinanceDemoPage() {
  return (
    <DemoLandingPage
      lang="en"
      badge="For business owners & CFOs"
      headline="Your bank wants your carbon footprint. You have 30 days."
      headlineAccent="carbon footprint."
      subheadline="EU taxonomy, green loan conditions, ESG due diligence — banks are integrating sustainability data into credit and investment decisions. Here's how to be ready."
      urgencyNote="Green loan conditions and EU taxonomy alignment both require verified CO₂ data."
      painPoints={[
        {
          icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
          title: "Your bank sent an ESG questionnaire with your loan renewal",
          body: "Green loan products, revolving credit facilities, and even standard business loans now increasingly include ESG clauses. A verified carbon footprint is the most common requirement — and lenders want it in a specific format.",
        },
        {
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
          title: "You don't know what 'EU taxonomy aligned' means for your business",
          body: "The EU taxonomy classifies economic activities by their sustainability. CO₂ Expert helps you understand where your business sits — and what you need to demonstrate to qualify for favourable financing terms.",
        },
        {
          icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: "You're worried the numbers will look bad",
          body: "A carbon footprint isn't a pass/fail test — it's a baseline. Banks and investors want to see that you know your numbers and have a plan. CO₂ Expert frames your footprint in a way that demonstrates credibility, not liability.",
        },
      ]}
      cases={[
        {
          company: 'Bar Company',
          sector: 'Catering services · Netherlands',
          flag: '🍽️',
          metric: 'Secured green financing with CO₂ Expert report as supporting document',
          result: 'Bar Company\'s bank required environmental impact data as part of a business loan application. Their CO₂ Expert report was submitted as supporting documentation for an ESG-linked financing product, securing more favourable interest conditions.',
          quote: 'The bank accepted the report immediately. No further questions.',
        },
        {
          company: 'Squiby Foods',
          sector: 'Food logistics · Amsterdam',
          flag: '🚚',
          metric: 'Full Scope 1, 2 & 3 baseline for investor due diligence',
          result: 'Squiby Foods was approached by a growth equity investor who required a comprehensive carbon footprint as part of ESG due diligence. CO₂ Expert delivered a full GHG Protocol report that satisfied the investor\'s requirements within the deal timeline.',
          quote: 'We had 6 weeks to provide ESG data. CO₂ Expert made it possible.',
        },
        {
          company: 'Ripstar',
          sector: 'Adventure travel · Amsterdam',
          flag: '🧗',
          metric: 'Qualified for sustainable tourism financing programme',
          result: 'Ripstar\'s bank offered preferential rates under a sustainable tourism programme — but required proof of environmental measurement. CO₂ Expert delivered their baseline footprint plus a reduction roadmap, meeting the programme\'s criteria in full.',
          quote: 'We saved on financing costs and now have a real sustainability story to tell customers.',
        },
      ]}
      consultant={FERDIA}
      faqs={[
        {
          q: 'Why is my bank suddenly asking for CO₂ data?',
          a: 'The EU\'s Sustainable Finance Disclosure Regulation (SFDR) and taxonomy require banks and investment firms to report on the sustainability of their loan books. To do that, they need data from you — their client.',
        },
        {
          q: 'What format do banks typically accept?',
          a: 'Most banks accept a GHG Protocol-aligned carbon footprint report for Scope 1 and 2, and increasingly Scope 3. CO₂ Expert\'s standard output is accepted by major Dutch, Irish, and international banks. We can confirm compatibility with your specific lender in the intake call.',
        },
        {
          q: 'Will a high carbon footprint hurt my loan application?',
          a: 'Typically no — what banks assess is whether you know your baseline and have a credible trajectory. A measured footprint with a reduction plan is far better than no data at all. CO₂ Expert includes a simple reduction roadmap with every report.',
        },
        {
          q: 'How much does a CO₂ measurement cost compared to the financing benefit?',
          a: 'Green loan products and ESG-linked financing typically offer 0.1–0.5% interest reduction. On a €500k loan, that\'s €500–2,500 per year. CO₂ Expert\'s measurement pays for itself many times over in the first year alone.',
        },
      ]}
    />
  )
}
