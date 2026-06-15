import type { Metadata } from 'next'
import DemoLandingPage from '@/components/DemoLandingPage'

export const metadata: Metadata = {
  title: "CO₂ nog niet gemeten? Dat is prima. — CO₂ Expert",
  description: 'De meeste MKB-bedrijven zijn nog niet begonnen met het meten van hun CO₂-voetafdruk. De vraag is wanneer — niet óf. Dit is hoe je eerste meting er werkelijk uitziet.',
}

const JOSEFIEN = {
  name: 'Josefien Ploem',
  role: 'Carbon Strategy Consultant — CO₂ Expert',
  bio: 'Josefien begeleidt ondernemers bij hun allereerste CO₂-meting — zonder voorkennis nodig. Ze neemt de spanning, het jargon en de verwarring weg, en vervangt die door een helder stap-voor-stap proces dat je ook echt afrondt.',
  initials: 'JP',
  // Vervang het initialen-avatar door een echte foto: stel photoUrl in op '/team/josefien-ploem.jpg'
  calendarUrl: 'https://meetings.hubspot.com/josefien-ploem',
  langTag: 'NL',
}

export default function StartenDemoPage() {
  return (
    <DemoLandingPage
      lang="nl"
      badge="Voor bedrijven die willen beginnen"
      headline="Iedereen meet CO₂. Jij nog niet. Dat is prima."
      headlineAccent="Dat is prima."
      subheadline="De meeste MKB-bedrijven zijn nog niet begonnen. De vraag is niet of je moet beginnen — maar wanneer. Dit is hoe je eerste meting er werkelijk uitziet, en waarom nu beginnen beter is dan wachten."
      painPoints={[
        {
          icon: 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: 'Het voelt als een groot, ingewikkeld project',
          body: 'Dat is het niet. Een eerste CO₂-meting voor een MKB-bedrijf kost één middag aan dataverzameling en 3–4 weken in totaal. CO₂ Expert verzorgt de methodologie, berekeningen en het rapport. Jij beantwoordt een paar vragen.',
        },
        {
          icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
          title: 'Je bent bang dat de getallen gênant zijn',
          body: 'Dat zijn ze niet. Je eerste meting is een nulmeting — geen oordeel. Iedereen begint ergens. Wat klanten, banken en investeerders willen zien, is dat je je getal kent en een plan hebt. CO₂ Expert helpt bij allebei.',
        },
        {
          icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: 'Je weet niet welk raamwerk je moet gebruiken',
          body: 'GHG Protocol is de wereldwijde standaard — geaccepteerd door klanten, banken, overheden en investeerders overal. CO₂ Expert gebruikt GHG Protocol voor elke meting. Je hoeft de details niet te kennen; dat is juist wat wij doen.',
        },
      ]}
      cases={[
        {
          company: 'Hortus Supplies International',
          sector: 'Tuinbouwexport · Nederland',
          flag: '🌿',
          metric: 'Eerste meting werd fundament voor internationale groei',
          result: 'Hortus had hun emissies nooit eerder gemeten. Hun eerste CO₂ Expert-rapport liet zien waar de grootste impact zat — en gaf hen een geloofwaardig duurzaamheidsverhaal richting nieuwe klanten in Azië en Noord-Amerika. Het werd een concurrentievoordeel dat ze niet hadden verwacht.',
          quote: 'We dachten dat het een complianceoefening was. Het bleek veel nuttiger.',
        },
        {
          company: 'Vanderlinden Catering',
          sector: 'Cateringdiensten · Amsterdam',
          flag: '🍽️',
          metric: 'Nulmeting → reductieplan → overheidsopdrachten',
          result: 'Vanderlinden begon zonder enige duurzaamheidsdata. Hun CO₂ Expert-nulmeting gaf hen de basis om een reductieplan op te bouwen, te kwalificeren voor aanbestedingen en uiteindelijk groene financiering aan te trekken — allemaal binnen 18 maanden na hun eerste meting.',
          quote: 'Je moet ergens beginnen. We zijn blij dat we vroeg zijn begonnen.',
        },
        {
          company: 'Outdoor Avonturen Nederland',
          sector: 'Outdoorrecreatie · Utrecht',
          flag: '🌲',
          metric: 'CO₂-meting werd een marketingasset',
          result: 'De klanten van Outdoor Avonturen geven veel om duurzaamheid. Hun CO₂ Expert-rapport gaf hen geverifieerde cijfers voor op de website en in boekingsbevestigingen — waarmee een complianceoefening werd omgezet in een klantgericht betrouwbaarheidssignaal dat nu boekingen genereert.',
          quote: 'Klanten vragen nu naar onze CO₂. En we hebben een echt antwoord.',
        },
      ]}
      consultant={JOSEFIEN}
      faqs={[
        {
          q: 'Ik ben een klein bedrijf — is dit echt relevant voor mij?',
          a: 'Steeds meer wel. Als je levert aan grote bedrijven, inschrijft op aanbestedingen, zakelijke financiering aanvraagt of klanten hebt die om duurzaamheid geven, zal een geverifieerde CO₂-voetafdruk worden gevraagd. Hoe eerder je die hebt, hoe meer je er uithaalt.',
        },
        {
          q: 'Wat houdt een eerste meting werkelijk in?',
          a: 'Één intakegesprek van 30 minuten om je bedrijf in kaart te brengen. Dan verzamel je energiefacturen, brandstofbonnen en reiskosten — één middag. Wij verzorgen de berekeningen en leveren een geverifieerd GHG Protocol-rapport binnen 3–4 weken.',
        },
        {
          q: 'Ben ik verplicht om mijn emissies te verminderen na de meting?',
          a: 'Geen verplichting. De meting geeft je jouw nulmeting. Wat je ermee doet, is aan jou. Sommige klanten gebruiken het puur voor rapportage. Anderen gebruiken het om reducties te vinden die economisch zinvol zijn. CO₂ Expert kan beide ondersteunen.',
        },
        {
          q: 'Wat kost het?',
          a: 'Vraag Josefien dit direct in je gratis gesprek van 30 minuten. CO₂ Expert heeft abonnementsvormen voor MKB in verschillende groeifases. De meeste klanten zijn verrast hoe betaalbaar de eerste meting is — zeker vergeleken met de kosten van het ontbreken van data op het moment dat die nodig is.',
        },
      ]}
    />
  )
}
