import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CO₂ Expert — Measure, Reduce, Offset',
  description: 'The all-in-one carbon footprint platform for businesses. Measure Scope 1, 2 & 3 emissions, set reduction targets, and offset with certified credits.',
  keywords: 'carbon footprint, CO2 calculator, CSRD, GHG protocol, carbon credits, sustainability',
  openGraph: {
    title: 'CO₂ Expert — Measure, Reduce, Offset',
    description: 'The all-in-one carbon footprint platform for businesses.',
    url: 'https://co2.expert',
    siteName: 'CO₂ Expert',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
