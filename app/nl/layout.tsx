import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'CO₂ Expert — CO₂-voetafdruk meting voor bedrijven',
  description: 'Uw klanten vragen om uw CO₂-gegevens. CO₂ Expert helpt MKB-bedrijven hun Scope 1, 2 en 3 emissies meten en een GHG Protocol-conform rapport opleveren in dagen.',
}

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
