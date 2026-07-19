import type { Metadata } from 'next'
import Script from 'next/script'
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
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WGC2SNZH');`}
      </Script>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGC2SNZH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script id="hs-script" src="//js.hs-scripts.com/8515463.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
