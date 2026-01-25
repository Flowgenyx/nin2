export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  year: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  details: {
    client: string;
    area: string;
    status: string;
  };
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'the-void-house',
    title: 'The Void House',
    location: 'Kyoto, Japan',
    year: '2024',
    description: 'Een minimalistische betonnen woning gericht op negatieve ruimte en lichtmanipulatie. Ontworpen voor diepe meditatie en stilte te midden van de stedelijke chaos.',
    fullDescription: `The Void House vertegenwoordigt onze meest ambitieuze verkenning van negatieve ruimte als architectonisch medium. Gelegen in de historische wijk Higashiyama in Kyoto, werd deze woning ontworpen als een toevluchtsoord—een plek waar de afwezigheid van vorm de primaire ervaring wordt.

De structuur is georganiseerd rond een centrale leegte, een drievoudige atrium dat natuurlijk licht diep in het gebouw trekt terwijl het een verticale verbinding creëert tussen alle leefruimtes. Rauwe betonnen muren, onbehandeld gelaten, tonen de subtiele texturen van hun houten bekisting en creëren een dialoog tussen het industriële en het organische.

Elke kamer opent naar zorgvuldig omkaderde uitzichten op ofwel de interne leegte of kleine privétuinen, waardoor de natuur een constante aanwezigheid blijft. Het samenspel van schaduw en licht gedurende de dag transformeert de binnenruimtes en creëert een steeds veranderende sfeer die reageert op het ritme van de zon.

De opdrachtgever, een beoefenaar van Zen-meditatie, vroeg om een huis dat contemplatief leven zou ondersteunen. Elke ontwerpbeslissing—van de plaatsing van ramen tot de proporties van gangen—werd met deze intentie gemaakt.`,
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp',
    ],
    details: {
      client: 'Privéwoning',
      area: '320 m²',
      status: 'Voltooid'
    }
  },
  {
    id: '02',
    slug: 'moss-bunker',
    title: 'Moss Bunker',
    location: 'Berlijn, Duitsland',
    year: '2023',
    description: 'Herbestemming van een WOII-bunker tot een duurzame verticale boerderij en woonruimte. Een brutalistisch icoon heroverd door de natuur.',
    fullDescription: `Moss Bunker is een radicale interventie in het industriële erfgoed van Berlijn. Deze luchtafweerbunker uit de Tweede Wereldoorlog, lang verlaten en gepland voor sloop, is getransformeerd tot een levend monument voor duurzame stedelijke ontwikkeling.

Het project behoudt de imposante betonnen schil van de bunker terwijl nieuwe openingen worden gemaakt die licht en lucht in de voorheen hermetische structuur brengen. Het gebouw huisvest nu een verticale boerderij van drie verdiepingen die het hele jaar door verse groenten produceert voor de omliggende buurt, naast vier wooneenheden en een openbaar café op de begane grond.

De buitenmuren zijn natuurlijk verweerd gelaten, met strategische beplanting van mos en klimplanten die de brutalistische gevel na verloop van tijd verzachten. Zonnepanelen en een regenwater opvangsysteem maken het gebouw bijna energieneutraal, terwijl de thermische massa van de originele betonnen structuur zorgt voor natuurlijke temperatuurregulatie.

Dit project demonstreert onze overtuiging dat het meest duurzame gebouw vaak al bestaat. Door te herdenken in plaats van te vervangen, hebben we een ruimte gecreëerd die de geschiedenis eert terwijl ze wijst naar een meer ecologische toekomst.`,
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp',
    ],
    details: {
      client: 'Urban Collective Berlin',
      area: '2.400 m²',
      status: 'Voltooid'
    }
  },
  {
    id: '03',
    slug: 'sky-cliff',
    title: 'Sky Cliff',
    location: 'Reykjavik, IJsland',
    year: '2024',
    description: 'Een glas- en staalconstructie uitstekend boven het vulkanische landschap. Een samensmelting van direct gevaar met compromisloze luxe.',
    fullDescription: `Sky Cliff bestaat op het snijvlak van gevaar en schoonheid. Gelegen op de rand van een oud lavazand buiten Reykjavik, steekt deze privéwoning spectaculair uit over een 40 meter hoge klif, met onbelemmerd uitzicht op de Noord-Atlantische Oceaan en het verre schiereiland Snæfellsnes.

De structuur is een oefening in technische durf. Een stalen frame strekt zich 12 meter voorbij de rand van de klif uit en ondersteunt een glazen woonpaviljoen dat lijkt te zweven boven het vulkanische landschap. Het gevoel van suspensie wordt versterkt door een glazen vloersectie in de hoofdwoonruimte, waardoor bewoners direct naar beneden kunnen kijken naar de kolkende golven.

Ondanks zijn dramatische uiterlijk werd het huis ontworpen met extreme weersomstandigheden in gedachten. Drievoudig beglaasde panelen, geothermische verwarming en een met gras bedekt achterste gedeelte dat opgaat in de helling dragen allemaal bij aan de weerbaarheid van het gebouw tegen de felle IJslandse winters.

Het interieurpalet is ontleend aan het omringende landschap: zwarte basaltvloeren, berkenhouten plafonds en wollen textiel in gedempte aardetinten. Het resultaat is een ruimte die zowel kosmopolitisch aanvoelt als diep geworteld in zijn buitengewone locatie.`,
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp',
    ],
    details: {
      client: 'Privéwoning',
      area: '480 m²',
      status: 'Voltooid'
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return projects[0];
  }
  return projects[currentIndex + 1];
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === 0) {
    return projects[projects.length - 1];
  }
  return projects[currentIndex - 1];
}
