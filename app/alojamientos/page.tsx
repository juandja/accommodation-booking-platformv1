"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AccommodationCard } from "@/components/accommodation-card"
import { AccommodationFilters } from "@/components/accommodation-filters"
import { Button } from "@/components/ui/button"
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react"

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
    amenities: ["Piscina", "WiFi", "Parqueadero", "BBQ"],
    featured: true,
    type: "Finca",
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
    amenities: ["Naturaleza", "BBQ", "Hamacas", "Senderos"],
    featured: true,
    type: "Cabaña",
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
    amenities: ["Jacuzzi", "Cancha", "Kiosko", "Piscina"],
    featured: true,
    type: "Casa campestre",
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
    type: "Apartamento",
  },
  {
    id: 5,
    name: "Glamping Montaña Mágica",
    location: "Bugalagrande",
    image: "/images/finca-cafe.jpg",
    price: 150000,
    pricePerHour: 30000,
    rating: 4.9,
    reviews: 45,
    guests: 2,
    amenities: ["Vista panorámica", "Fogata", "Desayuno"],
    featured: false,
    type: "Glamping",
  },
  {
    id: 6,
    name: "Finca El Paraíso",
    location: "La Paila",
    image: "/images/casa-arrayanes.jpg",
    price: 220000,
    pricePerHour: 40000,
    rating: 4.8,
    reviews: 112,
    guests: 8,
    amenities: ["Piscina", "Caballos", "Río", "BBQ"],
    featured: false,
    type: "Finca",
  },
  {
    id: 7,
    name: "Cabaña Los Guaduales",
    location: "Zarzal Rural",
    image: "/images/cabana-roble.jpg",
    price: 110000,
    pricePerHour: 22000,
    rating: 4.6,
    reviews: 58,
    guests: 4,
    amenities: ["Naturaleza", "Tranquilidad", "WiFi"],
    featured: false,
    type: "Cabaña",
  },
  {
    id: 8,
    name: "Casa de Campo San José",
    location: "Bugalagrande",
    image: "/images/apto-verde.jpg",
    price: 180000,
    pricePerHour: 35000,
    rating: 4.7,
    reviews: 73,
    guests: 6,
    amenities: ["Jardín", "BBQ", "Parqueadero", "Cocina"],
    featured: false,
    type: "Casa campestre",
  },
]

export default function AccommodationsPage() {
  const [layout, setLayout] = useState<"grid" | "list">("grid")
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState("recommended")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Page Header */}
        <div className="border-b border-border bg-secondary/30 py-8">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Alojamientos en Zarzal
            </h1>
            <p className="mt-2 text-muted-foreground">
              Encuentra el lugar perfecto para tu estadía en el Valle del Cauca
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* Filters Sidebar */}
            <AccommodationFilters isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />

            {/* Backdrop for mobile filters */}
            {isFiltersOpen && (
              <div
                className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
                onClick={() => setIsFiltersOpen(false)}
                onKeyDown={(e) => e.key === "Escape" && setIsFiltersOpen(false)}
              />
            )}

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden bg-transparent"
                    onClick={() => setIsFiltersOpen(true)}
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Filtros
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {accommodations.length} alojamientos encontrados
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="rounded-lg border border-input bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="recommended">Recomendados</option>
                      <option value="price-low">Precio: menor a mayor</option>
                      <option value="price-high">Precio: mayor a menor</option>
                      <option value="rating">Mejor calificados</option>
                      <option value="reviews">Más reseñas</option>
                    </select>
                  </div>

                  {/* Layout Toggle */}
                  <div className="hidden items-center gap-1 rounded-lg border border-input p-1 sm:flex">
                    <button
                      type="button"
                      onClick={() => setLayout("grid")}
                      className={`rounded p-1.5 ${
                        layout === "grid"
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-label="Vista de cuadrícula"
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setLayout("list")}
                      className={`rounded p-1.5 ${
                        layout === "list"
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-label="Vista de lista"
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Accommodations Grid/List */}
              <div
                className={
                  layout === "grid"
                    ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                    : "flex flex-col gap-4"
                }
              >
                {accommodations.map((accommodation) => (
                  <AccommodationCard
                    key={accommodation.id}
                    accommodation={accommodation}
                    layout={layout}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex items-center justify-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <div className="flex gap-1">
                  {[1, 2, 3].map((page) => (
                    <button
                      type="button"
                      key={page}
                      className={`h-8 w-8 rounded-lg text-sm font-medium transition-colors ${
                        page === 1
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
