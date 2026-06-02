import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'CO₂ Expert — Meet, Reduceer, Compenseer',
  description:
    'Het alles-in-één CO₂-voetafdruk platform voor het MKB. Meet Scope 1, 2 en 3 emissies en compenseer met gecertificeerde credits.',
}

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
