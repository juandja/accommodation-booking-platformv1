"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Search, Users } from "lucide-react"

export function SearchBox() {
  const [bookingType, setBookingType] = useState<"days" | "hours">("days")

  return (
    <div className="w-full max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-lg">
      {/* Booking Type Tabs */}
      <div className="mb-6 flex gap-2">
        <button
          type="button"
          onClick={() => setBookingType("days")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            bookingType === "days"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          Por días
        </button>
        <button
          type="button"
          onClick={() => setBookingType("hours")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            bookingType === "hours"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          Por horas
        </button>
      </div>

      {/* Search Form */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Location */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground">Ubicación</label>
          <div className="flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Zarzal, Valle del Cauca"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Check-in */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground">
            {bookingType === "days" ? "Llegada" : "Fecha"}
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <input
              type="date"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        {/* Check-out or Time */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground">
            {bookingType === "days" ? "Salida" : "Horario"}
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2">
            {bookingType === "days" ? (
              <>
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <input
                  type="date"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </>
            ) : (
              <>
                <Clock className="h-4 w-4 text-muted-foreground" />
                <select className="w-full bg-transparent text-sm outline-none">
                  <option value="">Seleccionar</option>
                  <option value="2">2 horas</option>
                  <option value="4">4 horas</option>
                  <option value="6">6 horas</option>
                  <option value="8">8 horas</option>
                  <option value="12">12 horas</option>
                </select>
              </>
            )}
          </div>
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground">Huéspedes</label>
          <div className="flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <select className="w-full bg-transparent text-sm outline-none">
              <option value="1">1 huésped</option>
              <option value="2">2 huéspedes</option>
              <option value="3">3 huéspedes</option>
              <option value="4">4 huéspedes</option>
              <option value="5">5+ huéspedes</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-center">
        <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 md:w-auto">
          <Search className="mr-2 h-4 w-4" />
          Buscar alojamientos
        </Button>
      </div>
    </div>
  )
}
