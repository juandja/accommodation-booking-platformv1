"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin, Star, Users, Clock, Calendar } from "lucide-react"

const accommodations = [
  {
    id: 1,
    name: "Finca Villa del Café",
    location: "Zarzal Centro",
    image: "/images/finca-cafe.jpg",
    price: 180000,
    pricePerHour: 35000,
    rating: 4.9,
    reviews: 128,
    guests: 6,
    amenities: ["Piscina", "WiFi", "Parqueadero"],
    featured: true,
  },
  {
    id: 2,
    name: "Cabaña El Roble",
    location: "La Paila",
    image: "/images/cabana-roble.jpg",
    price: 120000,
    pricePerHour: 25000,
    rating: 4.8,
    reviews: 95,
    guests: 4,
    amenities: ["Naturaleza", "BBQ", "Hamacas"],
    featured: true,
  },
  {
    id: 3,
    name: "Casa Campestre Los Arrayanes",
    location: "Zarzal Rural",
    image: "/images/casa-arrayanes.jpg",
    price: 250000,
    pricePerHour: 45000,
    rating: 5.0,
    reviews: 67,
    guests: 10,
    amenities: ["Jacuzzi", "Cancha", "Kiosko"],
    featured: true,
  },
  {
    id: 4,
    name: "Apartamento Vista Verde",
    location: "Zarzal Centro",
    image: "/images/apto-verde.jpg",
    price: 95000,
    pricePerHour: 20000,
    rating: 4.7,
    reviews: 82,
    guests: 3,
    amenities: ["A/C", "WiFi", "Cocina"],
    featured: false,
  },
]

export function FeaturedAccommodations() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Alojamientos destacados
            </h2>
            <p className="mt-2 text-muted-foreground">
              Descubre los lugares más populares cerca de Zarzal
            </p>
          </div>
          <Link href="/alojamientos">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              Ver todos
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accommodations.map((accommodation) => (
            <Card
              key={accommodation.id}
              className="group overflow-hidden border-border transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={accommodation.image || "/placeholder.svg"}
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
                  onClick={() => toggleFavorite(accommodation.id)}
                  className="absolute right-3 top-3 rounded-full bg-card/80 p-2 backdrop-blur transition-colors hover:bg-card"
                  aria-label="Agregar a favoritos"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      favorites.includes(accommodation.id)
                        ? "fill-accent text-accent"
                        : "text-foreground"
                    }`}
                  />
                </button>
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
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground line-clamp-1">
                  {accommodation.name}
                </h3>

                {/* Guests */}
                <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="h-3 w-3" />
                  Hasta {accommodation.guests} huéspedes
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
          ))}
        </div>
      </div>
    </section>
  )
}
