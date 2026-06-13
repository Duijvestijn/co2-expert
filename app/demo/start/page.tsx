import type { Metadata } from 'next'
import DemoLandingPage from '@/components/DemoLandingPage'

export const metadata: Metadata = {
  title: "You Haven't Measured Your CO₂ Yet. That's Actually Fine. — CO₂ Expert",
  description: 'Most SMEs haven\'t started measuring their carbon footprint. The question is when — not if. Here\'s what your first measurement actually looks like.',
}

const FERDIA = {
  name: 'Ferdia O\'Leary',
  role: 'Carbon Strategy Consultant — CO₂ Expert',
  bio: 'Ferdia guides business owners through their very first carbon measurement — no previous knowledge required. He removes the anxiety, the jargon, and the confusion, and replaces them with a clear, step-by-step process that actually gets finished.',
  initials: 'FO',
  // Replace initials with real photo: set photoUrl to '/team/ferdia-o-leary.jpg'
  calendarUrl: 'https://meetings.hubspot.com/ferdia-o-leary',
  langTag: 'EN',
}

export default function StartDemoPage() {
  return (
    <DemoLandingPage
      lang="en"
      badge="For businesses just getting started"
      headline="Everyone's measuring CO₂ now. You haven't started. That's actually fine."
      headlineAccent="That's actually fine."
      subheadline="Most SMEs haven't measured their carbon footprint yet. The question isn't whether to start — it's when. Here's what your first measurement actually looks like, and why starting now is better than waiting."
      painPoints={[
        {
          icon: 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: "It feels like a big, complicated project",
          body: "It isn't. A first carbon footprint measurement for an SME typically takes one afternoon of data collection and 3–4 weeks total. CO₂ Expert handles the methodology, calculations, and report. You just answer a few questions.",
        },
        {
          icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
          title: "You're worried the numbers will be embarrassing",
          body: "They won't be. Your first footprint is a baseline — not a verdict. Everyone starts somewhere. What matters to customers, banks, and investors is that you know your number and have a plan. CO₂ Expert helps with both.",
        },
        {
          icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: "You don't know which framework to use",
          body: "GHG Protocol is the global standard — accepted by customers, banks, governments, and investors everywhere. CO₂ Expert uses GHG Protocol for every measurement. You don't need to know the details; that's what we're here for.",
        },
      ]}
      cases={[
        {
          company: 'Hortus Supplies International',
          sector: 'Horticulture · Netherlands',
          flag: '🌿',
          metric: 'First measurement became foundation for global expansion',
          result: 'Hortus had never measured their emissions before. Their first CO₂ Expert report revealed where their biggest impact was — and gave them a credible sustainability story to tell new customers in Asia and North America. It became a competitive differentiator they hadn\'t expected.',
          quote: 'We thought it was just a compliance exercise. It turned into something much more useful.',
        },
        {
          company: 'Bar Company',
          sector: 'Catering services · Netherlands',
          flag: '🍽️',
          metric: 'Baseline measurement → reduction plan → public-sector contracts',
          result: 'Bar Company started with zero sustainability data. Their CO₂ Expert baseline measurement gave them the foundation to build a reduction plan, qualify for public tenders, and eventually secure green financing — all within 18 months of their first measurement.',
          quote: 'We had to start somewhere. We\'re glad we started early.',
        },
        {
          company: 'Ripstar',
          sector: 'Adventure travel · Amsterdam',
          flag: '🧗',
          metric: 'CO₂ measurement became a marketing asset',
          result: 'Ripstar\'s customers care deeply about sustainability. Their CO₂ Expert report gave them verified numbers to put on their website and in booking confirmations — turning a compliance exercise into a customer-facing trust signal that now drives bookings.',
          quote: 'Customers actually ask about our CO₂ now. And we have a real answer.',
        },
      ]}
      consultant={FERDIA}
      faqs={[
        {
          q: "I'm a small business — is this really relevant to me?",
          a: "Increasingly, yes. If you supply to large companies, bid on public contracts, apply for business finance, or have customers who care about sustainability, a verified carbon footprint will be asked for. The sooner you have one, the more value you get from it.",
        },
        {
          q: "What does a first measurement actually involve?",
          a: "One 30-minute intake call to scope your business. Then you collect energy bills, fuel receipts, and travel records — one afternoon. We handle calculations and produce a verified GHG Protocol report within 3–4 weeks.",
        },
        {
          q: "Do I need to reduce my emissions after measuring?",
          a: "No obligation. The measurement gives you your baseline. What you do with it is up to you. Some clients use it purely for reporting. Others use it to identify where reductions make economic sense. CO₂ Expert can support both.",
        },
        {
          q: "How much does it cost?",
          a: "Ask Ferdia directly in your free 30-minute call. CO₂ Expert has plans designed for SMEs at different stages. Most clients are surprised by how affordable the first measurement is — especially compared to the cost of not having the data when it's needed.",
        },
      ]}
    />
  )
}
