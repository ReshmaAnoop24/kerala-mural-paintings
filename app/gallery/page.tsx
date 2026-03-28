import { Suspense } from 'react'
import GalleryWithLightbox from '@/components/GalleryWithLightbox'
import fs from 'fs'
import path from 'path'

export const metadata = {
  title: 'Gallery - Kerala Mural Paintings',
  description: 'Browse our collection of beautiful Kerala mural paintings.',
}

async function getGalleryItems() {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery')
  try {
    const files = await fs.promises.readdir(galleryDir)

    // Filter for files starting with "painting" followed by a number
    const paintingFiles = files.filter(file => /^painting\d+\.(png|jpg|jpeg|webp)$/i.test(file))

    // Sort files numerically by the number in the filename
    paintingFiles.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)![0])
      const numB = parseInt(b.match(/\d+/)![0])
      return numA - numB
    })

    return paintingFiles.map((file, index) => {
      const number = file.match(/\d+/)![0]
      return {
        id: parseInt(number),
        title: `Kerala Mural Painting ${number}`,
        description: 'Traditional Kerala mural painting.',
        image: `/kerala-mural-paintings/images/gallery/${file}`,
        thumbnail: `/kerala-mural-paintings/images/gallery/${file}`,
        category: 'Traditional',
        year: new Date().getFullYear().toString(),
      }
    })
  } catch (error) {
    console.error('Error reading gallery directory:', error)
    return []
  }
}

export default async function Gallery() {
  const items = await getGalleryItems()

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Explore our curated collection of traditional and contemporary Kerala mural paintings.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading gallery...</div>}>
            <GalleryWithLightbox initialItems={items} />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
