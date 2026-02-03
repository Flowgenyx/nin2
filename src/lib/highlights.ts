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
    image: '/images/2.webp',
  },
  {
    id: '02',
    title: 'Exclusief Netwerken',
    subtitle: 'Quality over quantity',
    description: 'Geen visitekaartjes uitwisselen, maar echte gesprekken onder het genot van lekker eten en drinks. Ontspannen netwerksessies die leiden tot waardevolle, blijvende connecties.',
    image: '/images/4.webp',
  },
  {
    id: '03',
    title: 'De Perfecte Afsluiting',
    subtitle: 'Work hard, play hard',
    description: 'Relaxte sfeer op prachtige locaties, waar netwerken moeiteloos voelt. En aan het einde van de avond? Een feestje om de nieuwe connecties te vieren.',
    image: '/images/5.webp',
  }
];
