"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Grid } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  title: string
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="relative grid gap-2 overflow-hidden rounded-2xl md:grid-cols-4 md:grid-rows-2">
        {/* Main Image */}
        <div
          className="relative aspect-[4/3] cursor-pointer md:col-span-2 md:row-span-2 md:aspect-auto"
          onClick={() => {
            setCurrentIndex(0)
            setIsFullscreen(true)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCurrentIndex(0)
              setIsFullscreen(true)
            }
          }}
          role="button"
          tabIndex={0}
        >
          <Image
            src={images[0] || "/placeholder.svg"}
            alt={`${title} - Imagen principal`}
            fill
            className="object-cover transition-transform hover:scale-105"
            priority
          />
        </div>

        {/* Secondary Images */}
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="relative hidden aspect-video cursor-pointer overflow-hidden md:block"
            onClick={() => {
              setCurrentIndex(index + 1)
              setIsFullscreen(true)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setCurrentIndex(index + 1)
                setIsFullscreen(true)
              }
            }}
            role="button"
            tabIndex={0}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} - Imagen ${index + 2}`}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
            {index === 3 && images.length > 5 && (
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/50">
                <span className="font-medium text-background">+{images.length - 5} fotos</span>
              </div>
            )}
          </div>
        ))}

        {/* Show All Photos Button */}
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-card px-3 py-2 text-sm font-medium text-foreground shadow-md transition-colors hover:bg-card/90"
        >
          <Grid className="h-4 w-4" />
          Ver todas las fotos
        </button>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95">
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="absolute right-4 top-4 rounded-full bg-card/20 p-2 text-background transition-colors hover:bg-card/40"
            aria-label="Cerrar galería"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 rounded-full bg-card/20 p-3 text-background transition-colors hover:bg-card/40"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 rounded-full bg-card/20 p-3 text-background transition-colors hover:bg-card/40"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Current Image */}
          <div className="relative h-[80vh] w-[90vw] max-w-5xl">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${title} - Imagen ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-card/20 px-4 py-2 text-sm text-background">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-2 overflow-x-auto px-4">
            {images.map((image, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-opacity ${
                  currentIndex === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Miniatura ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
