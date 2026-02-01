export interface Highlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const highlights: Highlight[] = [
  {
    id: '01',
    title: 'Inspirerende Keynotes',
    subtitle: 'Leer van de beste',
    description: 'Luister naar succesverhalen en inzichten van ondernemers die het hebben gemaakt. Praktische lessen die je direct kunt toepassen in je eigen business.',
    image: '/images/2.PNG',
  },
  {
    id: '02',
    title: 'Exclusief Netwerken',
    subtitle: 'Quality over quantity',
    description: 'Geen visitekaartjes uitwisselen, maar echte gesprekken. Gestructureerde netwerksessies die leiden tot waardevolle, blijvende connecties.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
  },
  {
    id: '03',
    title: 'Intieme Setting',
    subtitle: 'Exclusief & persoonlijk',
    description: 'Bewust kleinschalig gehouden voor maximale impact. Een zorgvuldig samengestelde groep van gelijkgestemde professionals en ondernemers.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
  }
];
