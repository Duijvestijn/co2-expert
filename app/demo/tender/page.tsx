import type { Metadata } from 'next'
import DemoLandingPage from '@/components/DemoLandingPage'

export const metadata: Metadata = {
  title: 'CO₂ Data Is Now a Qualifying Criterion — CO₂ Expert',
  description: 'Public tenders and corporate RFPs increasingly require verified emissions data as a go/no-go threshold. Get your carbon footprint measured before the next deadline.',
}

const FERDIA = {
  name: 'Ferdia O\'Leary',
  role: 'Carbon Strategy Consultant — CO₂ Expert',
  bio: 'Ferdia has guided over 200 companies through their first carbon footprint measurement. From public tenders to corporate RFPs, he knows what procurement teams actually ask for — and how to make sure your submission qualifies.',
  initials: 'FO',
  // Replace initials with real photo: set photoUrl to '/team/ferdia-o-leary.jpg'
  calendarUrl: 'https://meetings.hubspot.com/ferdia-o-leary',
  langTag: 'EN',
}

export default function TenderDemoPage() {
  return (
    <DemoLandingPage
      lang="en"
      badge="For tender & procurement teams"
      headline="CO₂ data is now a qualifying criterion."
      headlineAccent="qualifying criterion."
      subheadline="Public tenders and corporate RFPs increasingly require verified emissions data as a go/no-go threshold — not just a nice-to-have. Missing it means automatic disqualification."
      urgencyNote="Missing CO₂ data = automatic disqualification in many tenders."
      painPoints={[
        {
          icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
          title: "The RFQ arrived with a CO₂ requirement you didn't expect",
          body: "Sustainability criteria are being added to tenders mid-cycle — sometimes with only weeks to respond. CO₂ Expert has an accelerated track for tender-deadline situations.",
        },
        {
          icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
          title: "You don't know which standard to cite",
          body: "GHG Protocol? ISO 14064? EN ISO 14067? Different tenders ask for different certifications. CO₂ Expert knows what each major procurer accepts and ensures your report matches the exact specification required.",
        },
        {
          icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
          title: "Your competitors already have a verified report",
          body: "Companies that measured early are winning tenders on sustainability criteria alone. Every month you delay is another opportunity for a competitor with a report to step in.",
        },
      ]}
      cases={[
        {
          company: 'Vivafloors',
          sector: 'Flooring manufacturer · Goor, NL',
          flag: '🏭',
          metric: 'Qualified for 3 previously ineligible tenders in 6 months',
          result: 'After adding verified CO₂ data to their tender submissions, Vivafloors qualified for contracts they had previously been disqualified from on sustainability grounds. Their report now ships with every RFP response.',
          quote: 'We didn\'t realise how many doors a verified report would open.',
        },
        {
          company: 'Meridian Events Group',
          sector: 'Catering services · Netherlands',
          flag: '🍽️',
          metric: 'Secured first public-sector contract with CO₂ report',
          result: 'Meridian Events Group had been losing public catering tenders to larger competitors who could demonstrate sustainability credentials. Within 8 weeks of their CO₂ Expert measurement, they qualified for — and won — their first public-sector catering contract.',
          quote: 'The CO₂ report was the deciding factor. The client told us directly.',
        },
        {
          company: 'Beauchamps LLP',
          sector: 'Legal services · Dublin, Ireland',
          flag: '⚖️',
          metric: 'Met ESG due diligence for two major corporate clients',
          result: 'Beauchamps LLP was asked by two of its largest corporate clients to provide emissions data as part of their own CSRD reporting. CO₂ Expert delivered a professional services carbon footprint that met both clients\' requirements simultaneously.',
          quote: 'Our clients needed this, and CO₂ Expert made it straightforward.',
        },
      ]}
      consultant={FERDIA}
      faqs={[
        {
          q: 'Which tenders now require CO₂ data?',
          a: 'Public procurement across the EU increasingly requires CO₂ data for contracts above certain thresholds, particularly in construction, facilities management, logistics, and professional services. Corporate RFPs in FMCG, manufacturing, and retail also commonly include emissions criteria now.',
        },
        {
          q: 'How quickly can you turn around a report if a tender deadline is approaching?',
          a: 'Our accelerated track delivers a completed carbon footprint report in 3–4 weeks. For truly urgent situations, contact us directly — we\'ve helped companies meet 2-week tender deadlines before.',
        },
        {
          q: 'What standard should I request in the report?',
          a: 'GHG Protocol is accepted universally. If the tender specifies a different standard, share the tender document with us in the intake call and we\'ll confirm which methodology to apply.',
        },
        {
          q: 'Can I use one report for multiple tenders?',
          a: 'Yes. A single annual carbon footprint report is valid across multiple tender submissions. Most clients use their report for 12 months across all bids before commissioning the next annual measurement.',
        },
      ]}
    />
  )
}
