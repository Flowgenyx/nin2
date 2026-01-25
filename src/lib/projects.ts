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
    description: 'A minimal concrete residence focused on negative space and light manipulation. Designed for deep meditation and silence amidst the urban chaos.',
    fullDescription: `The Void House represents our most ambitious exploration of negative space as architectural medium. Located in the historic Higashiyama district of Kyoto, this residence was conceived as a sanctuary—a place where the absence of form becomes the primary experience.

The structure is organized around a central void, a triple-height atrium that draws natural light deep into the building while creating a vertical connection between all living spaces. Raw concrete walls, left untreated, display the subtle textures of their wooden formwork, creating a dialogue between the industrial and the organic.

Each room opens onto carefully framed views of either the internal void or small private gardens, ensuring that nature remains a constant presence. The interplay of shadow and light throughout the day transforms the interior spaces, creating an ever-changing atmosphere that responds to the rhythm of the sun.

The client, a practitioner of Zen meditation, requested a home that would support contemplative living. Every design decision—from the placement of windows to the proportions of corridors—was made with this intention in mind.`,
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp',
    ],
    details: {
      client: 'Private Residence',
      area: '320 m²',
      status: 'Completed'
    }
  },
  {
    id: '02',
    slug: 'moss-bunker',
    title: 'Moss Bunker',
    location: 'Berlin, Germany',
    year: '2023',
    description: 'Adaptive reuse of a WWII bunker into a sustainable vertical farm and living space. A brutalist icon reclaimed by nature.',
    fullDescription: `Moss Bunker is a radical intervention in Berlin's industrial heritage. This World War II anti-aircraft bunker, long abandoned and scheduled for demolition, has been transformed into a living monument to sustainable urban development.

The project maintains the bunker's imposing concrete shell while carving new apertures that bring light and air into the formerly hermetic structure. The building now houses a three-story vertical farm that produces fresh vegetables year-round for the surrounding neighborhood, alongside four residential units and a public café at ground level.

The exterior walls have been left to weather naturally, with strategic plantings of moss and climbing plants softening the brutalist facade over time. Solar panels and a rainwater harvesting system make the building nearly energy-neutral, while the thermal mass of the original concrete structure provides natural temperature regulation.

This project demonstrates our belief that the most sustainable building is often one that already exists. By reimagining rather than replacing, we've created a space that honors history while pointing toward a more ecological future.`,
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp',
    ],
    details: {
      client: 'Urban Collective Berlin',
      area: '2,400 m²',
      status: 'Completed'
    }
  },
  {
    id: '03',
    slug: 'sky-cliff',
    title: 'Sky Cliff',
    location: 'Reykjavik, Iceland',
    year: '2024',
    description: 'A glass and steel structure cantilevered over the volcanic landscape. Blending immediate danger with uncompromising luxury.',
    fullDescription: `Sky Cliff exists at the intersection of danger and beauty. Perched on the edge of an ancient lava field outside Reykjavik, this private residence cantilevers dramatically over a 40-meter cliff face, offering unobstructed views of the North Atlantic and the distant Snæfellsnes peninsula.

The structure is an exercise in engineering audacity. A steel frame extends 12 meters beyond the cliff edge, supporting a glazed living pavilion that appears to float above the volcanic landscape. The sensation of suspension is heightened by a glass floor section in the main living area, allowing residents to look directly down at the churning waves below.

Despite its dramatic appearance, the house was designed with extreme weather conditions in mind. Triple-glazed panels, geothermal heating, and a turf-covered rear section that blends into the hillside all contribute to the building's resilience against Iceland's fierce winters.

The interior palette draws from the surrounding landscape: black basalt floors, birch wood ceilings, and wool textiles in muted earth tones. The result is a space that feels both cosmopolitan and deeply rooted in its extraordinary site.`,
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp',
    ],
    details: {
      client: 'Private Residence',
      area: '480 m²',
      status: 'Completed'
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return projects[0]; // Loop back to first
  }
  return projects[currentIndex + 1];
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === 0) {
    return projects[projects.length - 1]; // Loop back to last
  }
  return projects[currentIndex - 1];
}
