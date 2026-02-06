"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Calendar, Clock, Filter, MapPin, Users, X } from "lucide-react"

interface FiltersProps {
  isOpen: boolean
  onClose: () => void
}

export function AccommodationFilters({ isOpen, onClose }: FiltersProps) {
  const [priceRange, setPriceRange] = useState([50000, 300000])
  const [bookingType, setBookingType] = useState<"days" | "hours">("days")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full max-w-sm transform bg-card shadow-xl transition-transform duration-300 lg:relative lg:translate-x-0 lg:shadow-none ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex h-full flex-col overflow-y-auto p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl font-bold text-foreground">Filtros</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-secondary lg:hidden"
            aria-label="Cerrar filtros"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Booking Type */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-medium text-foreground">Tipo de reserva</h3>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setBookingType("days")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                bookingType === "days"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <Calendar className="h-4 w-4" />
              Por días
            </button>
            <button
              type="button"
              onClick={() => setBookingType("hours")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                bookingType === "hours"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <Clock className="h-4 w-4" />
              Por horas
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-medium text-foreground">Ubicación</h3>
          <div className="flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar zona..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="mt-3 space-y-2">
            {["Zarzal Centro", "La Paila", "Zarzal Rural", "Bugalagrande"].map((location) => (
              <label key={location} className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-input accent-primary" />
                <span className="text-sm text-foreground">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-medium text-foreground">Rango de precio</h3>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={500000}
            step={10000}
            className="mb-3"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>

        {/* Guests */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-medium text-foreground">Huéspedes</h3>
          <div className="flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <select className="w-full bg-transparent text-sm outline-none">
              <option value="">Cualquier cantidad</option>
              <option value="2">1-2 huéspedes</option>
              <option value="4">3-4 huéspedes</option>
              <option value="6">5-6 huéspedes</option>
              <option value="10">7+ huéspedes</option>
            </select>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-medium text-foreground">Comodidades</h3>
          <div className="space-y-2">
            {["Piscina", "WiFi", "Parqueadero", "BBQ", "Jacuzzi", "A/C", "Cocina", "Mascotas"].map(
              (amenity) => (
                <label key={amenity} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-input accent-primary" />
                  <span className="text-sm text-foreground">{amenity}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-medium text-foreground">Tipo de propiedad</h3>
          <div className="space-y-2">
            {["Finca", "Cabaña", "Casa campestre", "Apartamento", "Glamping"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-input accent-primary" />
                <span className="text-sm text-foreground">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-3 pt-6">
          <Button variant="outline" className="flex-1 bg-transparent">
            Limpiar
          </Button>
          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
            Aplicar filtros
          </Button>
        </div>
      </div>
    </div>
  )
}
