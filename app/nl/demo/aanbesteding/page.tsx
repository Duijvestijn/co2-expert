import type { Metadata } from 'next'
import DemoLandingPage from '@/components/DemoLandingPage'

export const metadata: Metadata = {
  title: "CO₂-data is nu een kwalificatiecriterium — CO₂ Expert",
  description: 'Aanbestedingen en RFP\'s vereisen steeds vaker geverifieerde emissiedata als harde eis. Zonder CO₂-rapport val je af. Hier is hoe je dat voorkomt.',
}

const JOSEFIEN = {
  name: 'Josefien Ploem',
  role: 'Carbon Strategy Consultant — CO₂ Expert',
  bio: 'Josefien begeleidt bedrijven bij aanbestedingen waarbij CO₂-data een harde eis is. Ze weet precies wat aanbestedende diensten en corporate inkoopteams nodig hebben — en hoe je je inschrijving laat kwalificeren.',
  initials: 'JP',
  // Vervang het initialen-avatar door een echte foto: stel photoUrl in op '/team/josefien-ploem.jpg'
  calendarUrl: 'https://meetings.hubspot.com/josefien-ploem',
  langTag: 'NL',
}

export default function AanbestedingDemoPage() {
  return (
    <DemoLandingPage
      lang="nl"
      badge="Voor inschrijvers op aanbestedingen"
      headline="CO₂-data is nu een kwalificatiecriterium."
      headlineAccent="kwalificatiecriterium."
      subheadline="Overheidsaanbestedingen en corporate RFP's vereisen steeds vaker geverifieerde emissiedata als go/no-go drempel — geen aardigheidje meer. Ontbreekt die data, dan val je af."
      urgencyNote="Geen CO₂-data = automatische diskwalificatie bij veel aanbestedingen."
      painPoints={[
        {
          icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
          title: 'De RFQ had plotseling een CO₂-eis die je niet verwachtte',
          body: 'Duurzaamheidscriteria worden midden in aanbestedingscycli toegevoegd — soms met slechts weken responstijd. CO₂ Expert heeft een versneld traject voor situaties met een aanbestedingsdeadline.',
        },
        {
          icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
          title: 'Je weet niet welke norm je moet opgeven',
          body: 'GHG Protocol? ISO 14064? CO₂ Prestatieladder? Verschillende aanbestedende diensten hanteren verschillende eisen. CO₂ Expert weet wat elke grote opdrachtgever accepteert en zorgt dat jouw rapport aansluit op de exacte specificatie.',
        },
        {
          icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
          title: 'Jouw concurrenten hebben al een geverifieerd rapport',
          body: 'Bedrijven die vroeg zijn begonnen met meten, winnen aanbestedingen op duurzaamheidscriteria. Elke maand dat je wacht, is een kans voor een concurrent met een rapport om voor jou in te schrijven.',
        },
      ]}
      cases={[
        {
          company: 'Groenweger Facilitair',
          sector: 'Facilitaire dienstverlening · Den Haag',
          flag: '🏢',
          metric: 'Gekwalificeerd voor 3 eerder misgelopen aanbestedingen',
          result: 'Groenweger liep jarenlang aanbestedingen mis op duurzaamheidscriteria. Na hun CO₂ Expert-meting kwalificeerden ze voor drie contracten die ze daarvoor niet konden binnenhalen. Hun rapport gaat nu mee in elke inschrijving.',
          quote: 'We beseften niet hoeveel deuren een geverifieerd rapport zou openen.',
        },
        {
          company: 'Vanderlinden Catering',
          sector: 'Cateringdiensten · Amsterdam',
          flag: '🍽️',
          metric: 'Eerste overheidsopdracht gewonnen dankzij CO₂-rapport',
          result: 'Vanderlinden verloor overheidsopdrachten aan grotere concurrenten met duurzaamheidscredentials. Binnen 8 weken na hun CO₂ Expert-meting kwalificeerden — en wonnen — ze hun eerste rijksopdracht voor bedrijfscatering.',
          quote: 'Het CO₂-rapport was de doorslag. Dat hoorden we letterlijk terug.',
        },
        {
          company: 'Hortus Supplies International',
          sector: 'Tuinbouwexport · Nederland',
          flag: '🌿',
          metric: 'Geverifieerd rapport voldoet aan drie inkoopteams tegelijk',
          result: 'Als leverancier aan retailers in Europa en Azië krijgt Hortus Supplies CO₂-eisen vanuit meerdere richtingen tegelijk. CO₂ Expert produceerde één rapport dat aan alle drie de specificaties voldeed — zonder drie aparte trajecten.',
          quote: 'Één meting, drie klantproblemen opgelost.',
        },
      ]}
      consultant={JOSEFIEN}
      faqs={[
        {
          q: 'Welke aanbestedingen vereisen nu CO₂-data?',
          a: 'Rijksoverheid en gemeenten verplichten CO₂-data steeds vaker bij bouw, facilitaire diensten, logistiek en ICT boven bepaalde drempelbedragen. Ook corporate RFP\'s in de retail, industrie en financiële sector vragen hier steeds vaker naar.',
        },
        {
          q: 'Hoe snel kan je een rapport leveren als er een aanbestedingsdeadline aankomt?',
          a: 'Ons versneld traject levert een volledig geverifieerd rapport in 3–4 weken. Bij echt urgente situaties neem direct contact op — we hebben bedrijven eerder geholpen een deadline van 2 weken te halen.',
        },
        {
          q: 'Welke norm moet ik opgeven in mijn inschrijving?',
          a: 'GHG Protocol is universeel geaccepteerd. Als de aanbesteding een andere norm noemt, deel dan het bestek in het intakegesprek en we bevestigen welke methode van toepassing is.',
        },
        {
          q: 'Kan ik één rapport voor meerdere aanbestedingen gebruiken?',
          a: 'Ja. Een jaarlijkse CO₂-meting is geldig voor meerdere inschrijvingen. De meeste klanten gebruiken hun rapport 12 maanden lang voor alle offertes voordat ze de volgende jaarlijkse meting uitvoeren.',
        },
      ]}
    />
  )
}
