export interface GalleryItem {
  id: number
  title: string
  description: string
  image: string
  thumbnail: string
  category?: string
  year?: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Kerala Mural Painting 1',
    description: 'Traditional Kerala mural painting with vibrant colors and intricate details.',
    image: '/images/gallery/painting1.png',
    thumbnail: '/images/gallery/painting1.png',
    category: 'Traditional',
    year: '2023',
  },
  {
    id: 2,
    title: 'Kerala Mural Painting 2',
    description: 'A masterpiece showcasing the rich heritage of Kerala art.',
    image: '/images/gallery/painting2.png',
    thumbnail: '/images/gallery/painting2.png',
    category: 'Religious',
    year: '2023',
  },
  {
    id: 3,
    title: 'Kerala Mural Painting 3',
    description: 'Depicting mythological stories through the art of mural painting.',
    image: '/images/gallery/painting3.jpg',
    thumbnail: '/images/gallery/painting3.jpg',
    category: 'Mythology',
    year: '2022',
  },
  {
    id: 4,
    title: 'Kerala Mural Painting 4',
    description: 'Exquisite craftsmanship visible in every stroke of this mural.',
    image: '/images/gallery/painting4.png',
    thumbnail: '/images/gallery/painting4.png',
    category: 'Traditional',
    year: '2023',
  },
]

