import fs from 'fs'
import path from 'path'

export interface GalleryItem {
    id: number
    title: string
    description: string
    image: string
    thumbnail: string
    category?: string
    year?: string
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
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

        return paintingFiles.map((file) => {
            const number = file.match(/\d+/)![0]
            return {
                id: parseInt(number),
                title: `Kerala Mural Painting ${number}`,
                description: 'Traditional Kerala mural painting.',
                image: `/images/gallery/${file}`,
                thumbnail: `/images/gallery/${file}`,
                category: 'Traditional',
                year: new Date().getFullYear().toString(),
            }
        })
    } catch (error) {
        console.error('Error reading gallery directory:', error)
        return []
    }
}
