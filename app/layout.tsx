import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CO₂ Expert — Carbon Footprint Software for Business',
  description:
    'Measure your Scope 1, 2 & 3 emissions, set science-based reduction targets, and offset with certified carbon credits — in one platform. GHG Protocol compliant. CSRD-ready.',
  keywords: 'carbon footprint calculator, CO2 software, CSRD reporting, GHG protocol, carbon credits, scope 1 2 3, carbon accounting, carbon neutral',
  openGraph: {
    title: 'CO₂ Expert — Carbon Footprint Software for Business',
    description:
      'Measure Scope 1, 2 & 3 emissions, reduce, and offset with certified credits from verified projects. CSRD-ready. Built for SMBs.',
    url: 'https://co2.expert',
    siteName: 'CO₂ Expert',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CO₂ Expert — Carbon Footprint Software for Business',
    description: 'Measure your Scope 1, 2 & 3 emissions, set reduction targets, and offset with certified credits — in one platform.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
