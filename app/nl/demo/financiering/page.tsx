import type { Metadata } from 'next'
import DemoLandingPage from '@/components/DemoLandingPage'

export const metadata: Metadata = {
  title: 'Je bank vraagt om je CO₂-voetafdruk — CO₂ Expert',
  description: 'EU-taxonomie, groene leningcriteria, ESG due diligence — banken integreren duurzaamheidsdata in krediet- en investeringsbeslissingen. Zo ben jij binnen enkele weken voorbereid.',
}

const JOSEFIEN = {
  name: 'Josefien Ploem',
  role: 'Carbon Strategy Consultant — CO₂ Expert',
  bio: 'Josefien begeleidt financieel directeuren en ondernemers bij de ESG-datavragen die vanuit banken, investeerders en verzekeraars binnenkomen. Ze zorgt dat het proces snel gaat en dat de uitvoer aansluit op wat financiële tegenpartijen daadwerkelijk accepteren.',
  initials: 'JP',
  // Vervang het initialen-avatar door een echte foto: stel photoUrl in op '/team/josefien-ploem.jpg'
  calendarUrl: 'https://meetings.hubspot.com/josefien-ploem',
  langTag: 'NL',
}

export default function FinancieringDemoPage() {
  return (
    <DemoLandingPage
      lang="nl"
      badge="Voor ondernemers & financieel directeuren"
      headline="Je bank vraagt om je CO₂-voetafdruk. Je hebt 30 dagen."
      headlineAccent="CO₂-voetafdruk."
      subheadline="EU-taxonomie, groene leningsvoorwaarden, ESG due diligence — banken integreren duurzaamheidsdata in hun krediet- en investeringsbeslissingen. Zo ben jij klaar."
      urgencyNote="Groene leningcriteria en EU-taxonomie vereisen allebei geverifieerde CO₂-data."
      painPoints={[
        {
          icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
          title: 'Je bank stuurde een ESG-vragenlijst bij je leningverlenging',
          body: 'Groene leningproducten, rekening-courantkrediet en zelfs reguliere zakelijke leningen bevatten steeds vaker ESG-clausules. Een geverifieerde CO₂-voetafdruk is de meest gevraagde eis — en banken willen die in een specifiek format.',
        },
        {
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
          title: 'Je weet niet wat EU-taxonomie-alignment betekent voor jouw bedrijf',
          body: 'De EU-taxonomie classificeert economische activiteiten op duurzaamheid. CO₂ Expert helpt je begrijpen waar jouw bedrijf staat — en wat je moet aantonen om in aanmerking te komen voor gunstigere financieringsvoorwaarden.',
        },
        {
          icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: 'Je maakt je zorgen dat de getallen er slecht uitzien',
          body: 'Je CO₂-voetafdruk is geen geslaagd/gezakt-toets — het is een nulmeting. Banken en investeerders willen zien dat je je cijfers kent en een plan hebt. CO₂ Expert presenteert je voetafdruk op een manier die geloofwaardigheid uitstraalt, geen aansprakelijkheid.',
        },
      ]}
      cases={[
        {
          company: 'Vermeer Installatietechniek',
          sector: 'Installatietechniek · Eindhoven',
          flag: '⚡',
          metric: 'Groene financiering verkregen met CO₂ Expert-rapport als bijlage',
          result: 'Vermeer Installatietechniek had een ESG-vragenlijst nodig voor een duurzame investeringslening bij Rabobank. Het CO₂ Expert-rapport werd ingediend als ondersteunend document, waarmee ze gunstigere rentevoorwaarden verkregen.',
          quote: 'De bank accepteerde het rapport direct. Geen verdere vragen.',
        },
        {
          company: 'Bakker Logistiek',
          sector: 'Transport & logistiek · Utrecht',
          flag: '🚚',
          metric: 'Volledig Scope 1, 2 & 3-rapport voor investeerders due diligence',
          result: 'Bakker Logistiek werd benaderd door een groeiaandeelhouder die een uitgebreide CO₂-voetafdruk vereiste als onderdeel van ESG due diligence. CO₂ Expert leverde een volledig GHG Protocol-rapport dat voldeed binnen de dealtijdlijn.',
          quote: 'We hadden 6 weken om ESG-data te leveren. CO₂ Expert maakte het mogelijk.',
        },
        {
          company: 'Outdoor Avonturen Nederland',
          sector: 'Outdoorrecreatie · Utrecht',
          flag: '🌲',
          metric: 'Gekwalificeerd voor duurzaam toerismefinancieringsprogramma',
          result: 'Outdoor Avonturen Nederland\'s bank bood gunstigere tarieven aan via een duurzaam toerismeprogramma — maar vereiste bewijs van milieumeting. CO₂ Expert leverde hun nulmeting plus een reductieroadmap, waarmee ze volledig aan de programmavoorwaarden voldeden.',
          quote: 'We besparen op financieringskosten én hebben nu een echt duurzaamheidsverhaal voor klanten.',
        },
      ]}
      consultant={JOSEFIEN}
      faqs={[
        {
          q: 'Waarom vraagt mijn bank ineens om CO₂-data?',
          a: 'De Sustainable Finance Disclosure Regulation (SFDR) en de EU-taxonomie verplichten banken en beleggers om te rapporteren over de duurzaamheid van hun kredietportefeuille. Daarvoor hebben ze data van jou nodig — hun klant.',
        },
        {
          q: 'Welk format accepteren banken?',
          a: 'De meeste banken accepteren een GHG Protocol-conform rapport voor Scope 1 en 2, en steeds vaker ook Scope 3. De standaardoutput van CO₂ Expert wordt geaccepteerd door grote Nederlandse en internationale banken. We bevestigen compatibiliteit met jouw specifieke bank in het intakegesprek.',
        },
        {
          q: 'Schaadt een hoge CO₂-voetafdruk mijn leningaanvraag?',
          a: 'Doorgaans niet — wat banken beoordelen is of je je nulmeting kent en een geloofwaardig traject hebt. Een gemeten voetafdruk met een reductieplan is veel beter dan helemaal geen data. CO₂ Expert voegt bij elk rapport een eenvoudige reductieroadmap toe.',
        },
        {
          q: 'Wat kost een CO₂-meting vergeleken met het financieringsvoordeel?',
          a: 'Groene leningproducten bieden doorgaans 0,1–0,5% rentekorting. Op een lening van €500.000 is dat €500–2.500 per jaar. De CO₂ Expert-meting verdient zichzelf in het eerste jaar al meerdere malen terug.',
        },
      ]}
    />
  )
}
