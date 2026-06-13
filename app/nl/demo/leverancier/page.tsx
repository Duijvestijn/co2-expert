import type { Metadata } from 'next'
import DemoLandingPage from '@/components/DemoLandingPage'

export const metadata: Metadata = {
  title: 'Je grootste klant stuurde een CO₂-vragenlijst — CO₂ Expert',
  description: 'CO₂-vragenlijst ontvangen van een grote klant? CO₂ Expert helpt MKB-bedrijven hun CO₂-voetafdruk te meten en een geverifieerd rapport te leveren — in weken, niet maanden.',
}

const JOSEFIEN = {
  name: 'Josefien Ploem',
  role: 'Carbon Strategy Consultant — CO₂ Expert',
  bio: 'Josefien heeft meer dan 150 Nederlandse bedrijven begeleid bij hun eerste CO₂-meting. Ze spreekt jouw taal: geen duurzaamheidsjargon, geen ellenlange trajecten, gewoon een helder plan van dag één.',
  initials: 'JP',
  // Vervang het initialen-avatar door een echte foto: stel photoUrl in op '/team/josefien-ploem.jpg'
  calendarUrl: 'https://meetings.hubspot.com/josefien-ploem',
  langTag: 'NL',
}

export default function LeverancierDemoPage() {
  return (
    <DemoLandingPage
      lang="nl"
      badge="Voor leveranciers & MKB"
      headline="Je grootste klant stuurde een CO₂-vragenlijst."
      headlineAccent="CO₂-vragenlijst."
      subheadline="Je hebt twee weken om te reageren. Je hebt de data niet. Je bent niet de enige — maar je moet snel handelen. Dit is precies wat je nu moet doen."
      urgencyNote="Onbeantwoorde duurzaamheidsvragenlijsten kosten leverancierscontracten."
      painPoints={[
        {
          icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: 'Je weet niet waar je moet beginnen',
          body: 'De meeste MKB-bedrijven hebben hun CO₂-voetafdruk nog nooit gemeten. CO₂ Expert zet een blanco pagina om naar een geverifieerd GHG Protocol-rapport — zonder dat je een interne duurzaamheidsafdeling nodig hebt.',
        },
        {
          icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
          title: 'De vragenlijst is overweldigend',
          body: 'GHG Protocol, Scope 1, 2 en 3, emissiefactoren... CO₂ Expert begeleidt je door precies welke data je moet verzamelen en doet alle rekenwerk. Jij levert de data eenmalig aan; wij produceren het rapport.',
        },
        {
          icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
          title: 'Je bent bang dat het maanden duurt',
          body: 'De meeste bedrijven ronden hun eerste meting af binnen 4–6 weken. Het verzamelen van data kost één middag. Je hebt een geverifieerd rapport ruim voor de deadline.',
        },
      ]}
      cases={[
        {
          company: 'Bakker Logistiek',
          sector: 'Transport & logistiek · Utrecht',
          flag: '🚚',
          metric: 'Scope 1, 2 & 3 gecertificeerd — opgeleverd in 5 weken',
          result: 'Bakker Logistiek ontving een duurzaamheidsvragenlijst van een grote Nederlandse supermarktketen. Met CO₂ Expert maten ze hun volledige voetafdruk en leverden een geverifieerd rapport aan vóór de deadline — en behielden daarmee een contract van €1,8 miljoen per jaar.',
          quote: 'We wisten echt niet waar we moesten beginnen. CO₂ Expert maakte het meteen helder.',
        },
        {
          company: 'Hortus Supplies International',
          sector: 'Tuinbouwexport · Nederland',
          flag: '🌿',
          metric: 'Drie klantvragenlijsten tegelijk beantwoord',
          result: 'Hortus Supplies levert aan retailers in Europa en Azië. CO₂ Expert leverde een volledig GHG Protocol-rapport dat tegelijkertijd voldeed aan de vereisten van drie separate klanten — één meting, drie problemen opgelost.',
          quote: 'Onze klanten waren tevreden, en wij ook — het was veel eenvoudiger dan we vreesden.',
        },
        {
          company: 'Dekker Installatiegroep',
          sector: 'Installatietechniek · Rotterdam',
          flag: '🔧',
          metric: '100% van leveranciersvragenlijsten op tijd beantwoord',
          result: 'Dekker Installatiegroep werkt voor grote opdrachtgevers in de utiliteit. Hun CO₂ Expert-rapport zit nu bij elke offerte — en heeft inmiddels twee contracten binnengehaald waarvoor duurzaamheidsdata een harde eis was.',
          quote: 'We begonnen om een vakje aan te vinken. Nu is het onderdeel van ons verkoopverhaal.',
        },
      ]}
      consultant={JOSEFIEN}
      faqs={[
        {
          q: 'Wat is een CO₂-vragenlijst precies?',
          a: 'Grote bedrijven zijn verplicht om via de CSRD te rapporteren over hun volledige ketenuitstoot (Scope 3). Daarvoor vragen ze hun leveranciers om CO₂-data. Als jij die niet kunt aanleveren, loop je het risico dat je wordt vervangen door een leverancier die dat wel kan.',
        },
        {
          q: 'Hoe lang duurt het?',
          a: 'De meeste bedrijven ronden de eerste meting af in 4–6 weken. Het verzamelen van data kost één middag. Wij doen de berekeningen, de methode en de rapportopmaak. Jij kijkt mee en keurt goed.',
        },
        {
          q: 'Welke data heb ik nodig?',
          a: 'Voornamelijk: energiefacturen (stroom, gas), brandstofverbruik (bedrijfsauto\'s, machines) en indien van toepassing transportdata en ingekochte goederen. We lopen dit samen door in een gratis intakegesprek van 30 minuten.',
        },
        {
          q: 'Wordt het rapport geaccepteerd door grote opdrachtgevers?',
          a: 'Ja. CO₂ Expert gebruikt het GHG Protocol — de wereldwijd geaccepteerde standaard voor CO₂-boekhouding. Onze rapporten worden geaccepteerd door CSRD-rapporterende bedrijven, banken en aanbestedingscommissies door heel Europa.',
        },
      ]}
    />
  )
}
