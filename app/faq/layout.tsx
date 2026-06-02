import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — CO₂ Expert',
  description:
    'Answers to the most common questions about carbon footprint measurement, Scope 1/2/3, GHG Protocol reports, and what your customers are actually asking for.',
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
