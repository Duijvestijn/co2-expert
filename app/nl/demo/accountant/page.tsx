import type { Metadata } from 'next'
import DemoLandingPage from '@/components/DemoLandingPage'

export const metadata: Metadata = {
  title: 'CO₂-vragenlijsten voor uw klanten — CO₂ Expert',
  description: 'Als meest vertrouwde adviseur zullen je klanten bij jou aankloppen met duurzaamheidsvragen. Partner met CO₂ Expert en je hebt het antwoord — plus een nieuwe terugkerende dienst.',
}

const JOSEFIEN = {
  name: 'Josefien Ploem',
  role: 'Carbon Strategy Consultant — CO₂ Expert',
  bio: 'Josefien werkt nauw samen met accountantskantoren en zakelijke adviseurs door heel Nederland om CO₂-rapportage toe te voegen aan hun dienstenpakket. Ze weet wat praktisch haalbaar is, wat klanten werkelijk nodig hebben, en hoe de business case uitpakt voor jouw kantoor.',
  initials: 'JP',
  // Vervang het initialen-avatar door een echte foto: stel photoUrl in op '/team/josefien-ploem.jpg'
  calendarUrl: 'https://meetings.hubspot.com/josefien-ploem',
  langTag: 'NL',
}

export default function AccountantNLDemoPage() {
  return (
    <DemoLandingPage
      lang="nl"
      badge="Voor accountants & zakelijke adviseurs"
      headline="Je klanten krijgen CO₂-vragenlijsten. Ze bellen jou."
      headlineAccent="Ze bellen jou."
      subheadline="Als meest vertrouwde adviseur zullen je zakelijke klanten bij jou aankloppen met duurzaamheidsvragen. Partner met CO₂ Expert en je hebt het antwoord — plus een nieuwe terugkerende dienst."
      painPoints={[
        {
          icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
          title: 'Klanten bellen met duurzaamheidsvragen die je nog niet kan beantwoorden',
          body: 'CSRD, GHG Protocol, Scope 3-emissies — je klanten begrijpen het niet, en ze zoeken iemand die ze vertrouwen voor uitleg. Door samen te werken met CO₂ Expert kun jij vol vertrouwen antwoorden, zonder zelf duurzaamheidsexpert te worden.',
        },
        {
          icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: 'Je ziet een nieuwe dienstencategorie ontstaan en wil niet achterop raken',
          body: 'CO₂-rapportage wordt zo gebruikelijk als de jaarrekening voor het MKB. Kantoren die het nu toevoegen aan hun portfolio zijn de vertrouwde adviseurs als dit verplicht wordt. Het raam om te leiden — in plaats van te volgen — staat nog open.',
        },
        {
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
          title: 'Je wil geen duurzaamheidsconsultant worden',
          body: 'Dat hoef je ook niet. CO₂ Expert verzorgt alle technische werkzaamheden — GHG Protocol-methodologie, emissiefactoren, rapportopmaak. Jij beheert de klantrelatie en voegt je adviseursperspectief toe. Wij nemen de complexiteit over.',
        },
      ]}
      cases={[
        {
          company: 'Van der Berg & Partners Accountants',
          sector: 'Accountancy · Rotterdam',
          flag: '📊',
          metric: 'CO₂-rapport nu standaard bij de jaarrekening aangeboden',
          result: 'Van der Berg & Partners voegde een CO₂ Expert-meting toe als standaardservice bij hun jaarafsluiting voor MKB-klanten. De toevoeging verhoogde klantbehoud en ontsloot een nieuwe terugkerende omzetstroom voor het kantoor.',
          quote: 'Klanten verwachtten het niet — en willen nu niet meer zonder.',
        },
        {
          company: 'Bakker Logistiek',
          sector: 'Transport & logistiek · Utrecht',
          flag: '🚚',
          metric: 'Contract van €1,8M behouden dankzij geverifieerd duurzaamheidsrapport',
          result: 'De accountant van Bakker Logistiek was het eerste aanspreekpunt toen hun grote opdrachtgever om CO₂-data vroeg. Door hen door te verwijzen naar CO₂ Expert, leverde de adviseur op een kritiek moment echte toegevoegde waarde — en verdiepte de klantrelatie aanzienlijk.',
          quote: 'Onze adviseur heeft het geregeld. Precies waarvoor we betalen.',
        },
        {
          company: 'Vermeer Installatietechniek',
          sector: 'Installatietechniek · Eindhoven',
          flag: '⚡',
          metric: 'Voldeed aan ESG due diligence voor twee grote opdrachtgevers',
          result: 'Vermeer\'s accountant herkende dat twee grote klanten CO₂-data nodig hadden voor hun eigen CSRD-rapportage. CO₂ Expert leverde één rapport dat aan beide specificaties voldeed — twee klantproblemen opgelost met één traject.',
          quote: 'Onze accountant tipte ons. Dat heeft ons twee contracten gered.',
        },
      ]}
      consultant={JOSEFIEN}
      faqs={[
        {
          q: 'Hoe ziet een partnerrelatie met CO₂ Expert eruit?',
          a: 'Je verwijst klanten door naar CO₂ Expert via jouw unieke partnerlink. Wij verzorgen de meting, berekening en rapportage. Jij blijft betrokken als vertrouwde adviseur. We bieden training, co-branded materialen en een vaste accountcontact.',
        },
        {
          q: 'Hoe pak ik het aan als een klant me nu vraagt over CSRD?',
          a: 'Plan een gesprek van 30 minuten met Josefien. Ze helpt je begrijpen wat je klant werkelijk nodig heeft, welke klanten waarschijnlijk worden geraakt, en hoe een praktische aanpak eruitziet. Zonder verplichtingen.',
        },
        {
          q: 'Heb ik duurzaamheidskennis nodig om deze dienst aan te bieden?',
          a: 'Nee. CO₂ Expert verzorgt al het technische werk — GHG Protocol-methodologie, emissiefactoren, rapportopmaak. Jouw rol is de klantrelatie en het adviseursniveau dat je al levert. We kunnen je in minder dan een uur bijpraten over de kernconcepten.',
        },
        {
          q: 'Welke klanten moet ik als eerste voor dit gesprek prioriteren?',
          a: 'Begin met: (1) klanten in productie, logistiek of voeding die leveren aan grote retailers; (2) klanten die groene financiering aanvragen; (3) klanten die inschrijven op aanbestedingen. Deze drie segmenten krijgen nu al CO₂-verzoeken.',
        },
      ]}
    />
  )
}
