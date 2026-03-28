'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { GalleryItem } from '@/lib/gallery'

interface GalleryWithLightboxProps {
    initialItems: GalleryItem[]
}

export default function GalleryWithLightbox({ initialItems }: GalleryWithLightboxProps) {
    const searchParams = useSearchParams()
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const initialId = searchParams?.get('id')
        if (initialId) {
            const item = initialItems.find((item) => item.id === parseInt(initialId))
            if (item) {
                setSelectedItem(item)
                setIsModalOpen(true)
            }
        }
    }, [searchParams, initialItems])

    const openModal = (item: GalleryItem) => {
        setSelectedItem(item)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedItem(null)
    }

    const navigateItem = (direction: 'prev' | 'next') => {
        if (!selectedItem) return
        const currentIndex = initialItems.findIndex((item) => item.id === selectedItem.id)
        let newIndex: number

        if (direction === 'next') {
            newIndex = currentIndex === initialItems.length - 1 ? 0 : currentIndex + 1
        } else {
            newIndex = currentIndex === 0 ? initialItems.length - 1 : currentIndex - 1
        }

        setSelectedItem(initialItems[newIndex])
    }

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!isModalOpen) return
            if (e.key === 'ArrowLeft') navigateItem('prev')
            if (e.key === 'ArrowRight') navigateItem('next')
            if (e.key === 'Escape') closeModal()
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [isModalOpen, selectedItem]) // Added dependency on selectedItem for navigation

    return (
        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {initialItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => openModal(item)}
                        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-200"
                    >
                        <div className="aspect-square relative flex items-center justify-center">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal/Lightbox */}
            {isModalOpen && selectedItem && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                            aria-label="Close"
                        >
                            <svg
                                className="w-6 h-6 text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                navigateItem('prev')
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur rounded-full p-3 shadow-lg hover:bg-white transition-colors"
                            aria-label="Previous"
                        >
                            <svg
                                className="w-6 h-6 text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                navigateItem('next')
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur rounded-full p-3 shadow-lg hover:bg-white transition-colors"
                            aria-label="Next"
                        >
                            <svg
                                className="w-6 h-6 text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Image Content */}
                        <div className="relative w-full h-[85vh] bg-black flex items-center justify-center">
                            <Image
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
