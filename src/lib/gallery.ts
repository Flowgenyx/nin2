export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GallerySection {
  title: string;
  date: string;
  images: GalleryImage[];
}

export const gallerySections: GallerySection[] = [
  {
    title: 'NIN Connect',
    date: '5 Oktober 2025',
    images: [
      { src: '/gallery/2025-10-05/7.png', alt: 'NIN Connect 1' },
      { src: '/gallery/2025-10-05/14.png', alt: 'NIN Connect 2' },
      { src: '/gallery/2025-10-05/15.png', alt: 'NIN Connect 3' },
      { src: '/gallery/2025-10-05/16.png', alt: 'NIN Connect 4' },
      { src: '/gallery/2025-10-05/21.png', alt: 'NIN Connect 5' },
      { src: '/gallery/2025-10-05/22.png', alt: 'NIN Connect 6' },
      { src: '/gallery/2025-10-05/24.png', alt: 'NIN Connect 7' },
      { src: '/gallery/2025-10-05/29.png', alt: 'NIN Connect 8' },
      { src: '/gallery/2025-10-05/33.png', alt: 'NIN Connect 9' },
    ],
  },
  {
    title: 'NIN Netwerk Diner',
    date: '9 Februari 2025',
    images: [
      { src: '/gallery/2025-02-09/1 2.PNG', alt: 'NIN Netwerk Diner & R&Borrel 1' },
      { src: '/gallery/2025-02-09/112.PNG', alt: 'NIN Netwerk Diner & R&Borrel 3' },
      { src: '/gallery/2025-02-09/12.PNG', alt: 'NIN Netwerk Diner & R&Borrel 4' },
      { src: '/gallery/2025-02-09/121.PNG', alt: 'NIN Netwerk Diner & R&Borrel 5' },
      { src: '/gallery/2025-02-09/89.PNG', alt: 'NIN Netwerk Diner & R&Borrel 6' },
      { src: '/gallery/2025-02-09/9.PNG', alt: 'NIN Netwerk Diner & R&Borrel 7' },
      { src: '/gallery/2025-02-09/91.PNG', alt: 'NIN Netwerk Diner & R&Borrel 8' },
      { src: '/gallery/2025-02-09/hero1.PNG', alt: 'NIN Netwerk Diner & R&Borrel 9' },
      { src: '/gallery/2025-02-09/hero2.PNG', alt: 'NIN Netwerk Diner & R&Borrel 10' },
    ],
  },
  {
    title: 'NIN Netwerk Diner',
    date: '6 Oktober 2024',
    images: [
      { src: '/gallery/2024-10-06/IMG_1752.PNG', alt: 'NIN Netwerk Diner 1' },
      { src: '/gallery/2024-10-06/IMG_1763.PNG', alt: 'NIN Netwerk Diner 2' },
      { src: '/gallery/2024-10-06/IMG_1765.PNG', alt: 'NIN Netwerk Diner 3' },
      { src: '/gallery/2024-10-06/IMG_1781.PNG', alt: 'NIN Netwerk Diner 4' },
      { src: '/gallery/2024-10-06/IMG_1797.PNG', alt: 'NIN Netwerk Diner 5' },
      { src: '/gallery/2024-10-06/IMG_1799.PNG', alt: 'NIN Netwerk Diner 6' },
      { src: '/gallery/2024-10-06/IMG_1806.PNG', alt: 'NIN Netwerk Diner 7' },
      { src: '/gallery/2024-10-06/IMG_1809.PNG', alt: 'NIN Netwerk Diner 8' },
      { src: '/gallery/2024-10-06/IMG_1818.PNG', alt: 'NIN Netwerk Diner 9' },
    ],
  },
  {
    title: 'NIN Netwerk Borrel',
    date: '1 Maart 2024',
    images: [
      { src: '/gallery/2024-03-01/IMG_9744.PNG', alt: 'NIN Netwerk Borrel 1' },
      { src: '/gallery/2024-03-01/IMG_9761.PNG', alt: 'NIN Netwerk Borrel 2' },
      { src: '/gallery/2024-03-01/IMG_9765.PNG', alt: 'NIN Netwerk Borrel 3' },
      { src: '/gallery/2024-03-01/IMG_9768.PNG', alt: 'NIN Netwerk Borrel 4' },
      { src: '/gallery/2024-03-01/IMG_9771.PNG', alt: 'NIN Netwerk Borrel 5' },
      { src: '/gallery/2024-03-01/IMG_9773.PNG', alt: 'NIN Netwerk Borrel 6' },
      { src: '/gallery/2024-03-01/IMG_9779.PNG', alt: 'NIN Netwerk Borrel 7' },
      { src: '/gallery/2024-03-01/IMG_9787.PNG', alt: 'NIN Netwerk Borrel 8' },
      { src: '/gallery/2024-03-01/IMG_9788.PNG', alt: 'NIN Netwerk Borrel 9' },
    ],
  },
];

// Flat list of all images for lightbox navigation
export const allGalleryImages: GalleryImage[] = gallerySections.flatMap(s => s.images);
