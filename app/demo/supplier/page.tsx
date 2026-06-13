import type { Metadata } from 'next'
import DemoLandingPage from '@/components/DemoLandingPage'

export const metadata: Metadata = {
  title: 'Your Biggest Customer Sent a CO₂ Questionnaire — CO₂ Expert',
  description: 'Received a sustainability questionnaire from a large customer? CO₂ Expert helps SMEs measure their carbon footprint and deliver a verified report — in weeks, not months.',
}

const FERDIA = {
  name: 'Ferdia O\'Leary',
  role: 'Carbon Strategy Consultant — CO₂ Expert',
  bio: 'Ferdia has helped over 200 companies across Ireland and the Netherlands answer their first CO₂ questionnaire. He speaks your language: plain English, no jargon, no upselling. Just a clear plan from day one.',
  initials: 'FO',
  // Replace initials with real photo: set photoUrl to '/team/ferdia-o-leary.jpg'
  calendarUrl: 'https://meetings.hubspot.com/ferdia-o-leary',
  langTag: 'EN',
}

export default function SupplierDemoPage() {
  return (
    <DemoLandingPage
      lang="en"
      badge="For suppliers & SMEs"
      headline="Your biggest customer just sent a CO₂ questionnaire."
      headlineAccent="CO₂ questionnaire."
      subheadline="You have two weeks to respond. You don't have the data. You're not alone — but you do need to act fast. Here's exactly what happens next."
      urgencyNote="Unanswered sustainability questionnaires cost supplier contracts."
      painPoints={[
        {
          icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: "You don't know where to start",
          body: "Most SMEs have never measured their carbon footprint before. CO₂ Expert turns a blank page into a verified GHG Protocol report — without needing an internal sustainability team.",
        },
        {
          icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
          title: "The questionnaire format is overwhelming",
          body: "GHG Protocol, Scope 1, 2, and 3, emissions factors... CO₂ Expert guides you through exactly what data to collect and does all the calculation work. You provide the data once; we produce the report.",
        },
        {
          icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
          title: "You're scared it'll take months",
          body: "Most companies complete their first footprint measurement within 4–6 weeks. The initial data collection takes one afternoon. You'll have a verified report long before any deadline.",
        },
      ]}
      cases={[
        {
          company: 'Squiby Foods',
          sector: 'Food logistics · Amsterdam',
          flag: '🚚',
          metric: 'Scope 1, 2 & 3 certified — delivered in 5 weeks',
          result: 'Squiby received a supplier sustainability questionnaire from a major European retailer. With CO₂ Expert, they measured their full Scope 1, 2, and 3 footprint and submitted a verified report before the deadline — retaining a €2.4M annual contract.',
          quote: 'We had no idea where to start. CO₂ Expert made it clear from day one.',
        },
        {
          company: 'Hortus Supplies International',
          sector: 'Horticulture exports · Netherlands',
          flag: '🌿',
          metric: 'Three separate customer questionnaires answered simultaneously',
          result: 'As a global supplier to retailers across Europe and Asia, Hortus needed credible sustainability data fast. CO₂ Expert delivered a full GHG Protocol measurement that satisfied requirements from three separate customers at the same time.',
          quote: 'Our customers were happy, and so were we — the process was much simpler than we feared.',
        },
        {
          company: 'Vivafloors',
          sector: 'Flooring manufacturer · Goor, NL',
          flag: '🏭',
          metric: '100% of supplier questionnaires answered on time',
          result: 'Vivafloors turned sustainability from a compliance burden into a competitive advantage. Their CO₂ Expert report is now attached to every tender response and sales proposal — a differentiator their competitors can\'t easily replicate.',
          quote: 'We started this to tick a box. Now it\'s part of our sales story.',
        },
      ]}
      consultant={FERDIA}
      faqs={[
        {
          q: 'What exactly is a CO₂ questionnaire?',
          a: 'Large companies — retailers, manufacturers, governments — are required under CSRD to report on their full value chain emissions (Scope 3). To do that, they ask their suppliers to provide CO₂ data. If you can\'t answer, you risk being replaced by a supplier who can.',
        },
        {
          q: 'How long does it take?',
          a: 'Most companies complete their first measurement in 4–6 weeks. Data collection takes one afternoon. We handle the calculations, methodology, and report formatting. You review and approve.',
        },
        {
          q: 'What data do I need to provide?',
          a: 'Mainly: energy bills (electricity, gas), fuel consumption (company cars, machinery), and if relevant, freight data and purchased goods. We\'ll walk you through exactly what\'s needed in a free 30-minute intake call.',
        },
        {
          q: 'Is the report accepted by major retailers and corporates?',
          a: 'Yes. CO₂ Expert uses the GHG Protocol — the globally accepted standard for carbon accounting. Our reports are accepted by CSRD-reporting companies, banks, and public procurement committees across Europe.',
        },
      ]}
    />
  )
}
