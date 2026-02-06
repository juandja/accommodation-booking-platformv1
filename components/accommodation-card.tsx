"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin, Star, Users, Clock, Calendar } from "lucide-react"

interface Accommodation {
  id: number
  name: string
  location: string
  image: string
  images?: string[]
  price: number
  pricePerHour: number
  rating: number
  reviews: number
  guests: number
  amenities: string[]
  featured?: boolean
  type: string
}

interface AccommodationCardProps {
  accommodation: Accommodation
  layout?: "grid" | "list"
}

export function AccommodationCard({ accommodation, layout = "grid" }: AccommodationCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const images = accommodation.images || [accommodation.image]

  if (layout === "list") {
    return (
      <Card className="group overflow-hidden border-border transition-shadow hover:shadow-lg">
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] sm:w-72 shrink-0 overflow-hidden">
            <Image
              src={images[currentImage] || "/placeholder.svg"}
              alt={accommodation.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {accommodation.featured && (
              <div className="absolute left-3 top-3 rounded-full bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                Destacado
              </div>
            )}
            <button
              type="button"
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute right-3 top-3 rounded-full bg-card/80 p-2 backdrop-blur transition-colors hover:bg-card"
              aria-label="Agregar a favoritos"
            >
              <Heart
                className={`h-4 w-4 ${
                  isFavorite ? "fill-accent text-accent" : "text-foreground"
                }`}
              />
            </button>
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentImage(idx)}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      currentImage === idx ? "bg-card" : "bg-card/50"
                    }`}
                    aria-label={`Ver imagen ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <CardContent className="flex flex-1 flex-col p-4">
            {/* Top Row */}
            <div className="mb-2 flex items-start justify-between">
              <div>
                <span className="text-xs font-medium text-primary">{accommodation.type}</span>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {accommodation.name}
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-medium">{accommodation.rating}</span>
                <span className="text-sm text-muted-foreground">({accommodation.reviews})</span>
              </div>
            </div>

            {/* Location & Guests */}
            <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {accommodation.location}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                Hasta {accommodation.guests} huéspedes
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-4 flex flex-wrap gap-1">
              {accommodation.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                >
                  {amenity}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="mt-auto flex items-end justify-between border-t border-border pt-3">
              <div className="flex gap-4">
                <div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    Por noche
                  </div>
                  <span className="font-serif text-xl font-bold text-foreground">
                    {formatPrice(accommodation.price)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    Por hora
                  </div>
                  <span className="text-lg font-medium text-primary">
                    {formatPrice(accommodation.pricePerHour)}
                  </span>
                </div>
              </div>
              <Link
                href={`/alojamientos/${accommodation.id}`}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ver detalles
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden border-border transition-shadow hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={accommodation.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {accommodation.featured && (
          <div className="absolute left-3 top-3 rounded-full bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
            Destacado
          </div>
        )}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-3 top-3 rounded-full bg-card/80 p-2 backdrop-blur transition-colors hover:bg-card"
          aria-label="Agregar a favoritos"
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? "fill-accent text-accent" : "text-foreground"
            }`}
          />
        </button>
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentImage(idx)}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  currentImage === idx ? "bg-card" : "bg-card/50"
                }`}
                aria-label={`Ver imagen ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* Location & Rating */}
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {accommodation.location}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-accent text-accent" />
            <span className="text-sm font-medium">{accommodation.rating}</span>
            <span className="text-xs text-muted-foreground">({accommodation.reviews})</span>
          </div>
        </div>

        {/* Name */}
        <Link href={`/alojamientos/${accommodation.id}`}>
          <h3 className="mb-2 font-serif text-lg font-semibold text-foreground line-clamp-1 hover:text-primary">
            {accommodation.name}
          </h3>
        </Link>

        {/* Type & Guests */}
        <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="text-xs font-medium text-primary">{accommodation.type}</span>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {accommodation.guests} huéspedes
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-4 flex flex-wrap gap-1">
          {accommodation.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-end justify-between border-t border-border pt-3">
          <div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              Desde
            </div>
            <span className="font-serif text-lg font-bold text-foreground">
              {formatPrice(accommodation.price)}
            </span>
            <span className="text-xs text-muted-foreground">/noche</span>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              Por hora
            </div>
            <span className="text-sm font-medium text-primary">
              {formatPrice(accommodation.pricePerHour)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
