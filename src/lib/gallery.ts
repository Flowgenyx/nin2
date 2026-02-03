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
    title: 'NIN',
    date: '5 Oktober 2025',
    images: [
      { src: '/gallery/2025-10-05/7.webp', alt: 'NIN 1' },
      { src: '/gallery/2025-10-05/14.webp', alt: 'NIN 2' },
      { src: '/gallery/2025-10-05/15.webp', alt: 'NIN 3' },
      { src: '/gallery/2025-10-05/16.webp', alt: 'NIN 4' },
      { src: '/gallery/2025-10-05/21.webp', alt: 'NIN 5' },
      { src: '/gallery/2025-10-05/22.webp', alt: 'NIN 6' },
      { src: '/gallery/2025-10-05/24.webp', alt: 'NIN 7' },
      { src: '/gallery/2025-10-05/29.webp', alt: 'NIN 8' },
      { src: '/gallery/2025-10-05/33.webp', alt: 'NIN 9' },
    ],
  },
  {
    title: 'NIN',
    date: '9 Februari 2025',
    images: [
      { src: '/gallery/2025-02-09/1 2.webp', alt: 'NIN 1' },
      { src: '/gallery/2025-02-09/112.webp', alt: 'NIN 3' },
      { src: '/gallery/2025-02-09/12.webp', alt: 'NIN 4' },
      { src: '/gallery/2025-02-09/121.webp', alt: 'NIN 5' },
      { src: '/gallery/2025-02-09/89.webp', alt: 'NIN 6' },
      { src: '/gallery/2025-02-09/9.webp', alt: 'NIN 7' },
      { src: '/gallery/2025-02-09/91.webp', alt: 'NIN 8' },
      { src: '/gallery/2025-02-09/hero1.webp', alt: 'NIN 9' },
      { src: '/gallery/2025-02-09/hero2.webp', alt: 'NIN 10' },
    ],
  },
  {
    title: 'NIN',
    date: '6 Oktober 2024',
    images: [
      { src: '/gallery/2024-10-06/IMG_1752.webp', alt: 'NIN 1' },
      { src: '/gallery/2024-10-06/IMG_1763.webp', alt: 'NIN 2' },
      { src: '/gallery/2024-10-06/IMG_1765.webp', alt: 'NIN 3' },
      { src: '/gallery/2024-10-06/IMG_1781.webp', alt: 'NIN 4' },
      { src: '/gallery/2024-10-06/IMG_1797.webp', alt: 'NIN 5' },
      { src: '/gallery/2024-10-06/IMG_1799.webp', alt: 'NIN 6' },
      { src: '/gallery/2024-10-06/IMG_1806.webp', alt: 'NIN 7' },
      { src: '/gallery/2024-10-06/IMG_1809.webp', alt: 'NIN 8' },
      { src: '/gallery/2024-10-06/IMG_1818.webp', alt: 'NIN 9' },
    ],
  },
  {
    title: 'NIN',
    date: '1 Maart 2024',
    images: [
      { src: '/gallery/2024-03-01/IMG_9744.webp', alt: 'NIN 1' },
      { src: '/gallery/2024-03-01/IMG_9761.webp', alt: 'NIN 2' },
      { src: '/gallery/2024-03-01/IMG_9765.webp', alt: 'NIN 3' },
      { src: '/gallery/2024-03-01/IMG_9768.webp', alt: 'NIN 4' },
      { src: '/gallery/2024-03-01/IMG_9771.webp', alt: 'NIN 5' },
      { src: '/gallery/2024-03-01/IMG_9773.webp', alt: 'NIN 6' },
      { src: '/gallery/2024-03-01/IMG_9779.webp', alt: 'NIN 7' },
      { src: '/gallery/2024-03-01/IMG_9787.webp', alt: 'NIN 8' },
      { src: '/gallery/2024-03-01/IMG_9788.webp', alt: 'NIN 9' },
    ],
  },
];

// Flat list of all images for lightbox navigation
export const allGalleryImages: GalleryImage[] = gallerySections.flatMap(s => s.images);
