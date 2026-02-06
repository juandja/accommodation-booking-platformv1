"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Plus, Minus, ShoppingBag } from "lucide-react"

interface BookingWidgetProps {
  pricePerNight: number
  pricePerHour: number
}

export function BookingWidget({ pricePerNight, pricePerHour }: BookingWidgetProps) {
  const [bookingType, setBookingType] = useState<"days" | "hours">("days")
  const [guests, setGuests] = useState(2)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [hours, setHours] = useState(4)
  const [addPackage, setAddPackage] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 0
  }

  const nights = calculateNights()
  const subtotal = bookingType === "days" ? pricePerNight * nights : pricePerHour * hours
  const serviceFee = Math.round(subtotal * 0.1)
  const total = subtotal + serviceFee

  return (
    <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-lg">
      {/* Price Display */}
      <div className="mb-4 flex items-baseline gap-2">
        <span className="font-serif text-2xl font-bold text-foreground">
          {formatPrice(bookingType === "days" ? pricePerNight : pricePerHour)}
        </span>
        <span className="text-muted-foreground">
          {bookingType === "days" ? "/noche" : "/hora"}
        </span>
      </div>

      {/* Booking Type Toggle */}
      <div className="mb-4 flex gap-2">
        <button
          type="button"
          onClick={() => setBookingType("days")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
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
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            bookingType === "hours"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          <Clock className="h-4 w-4" />
          Por horas
        </button>
      </div>

      {/* Date/Time Selection */}
      <div className="mb-4 rounded-lg border border-input">
        {bookingType === "days" ? (
          <div className="grid grid-cols-2 divide-x divide-input">
            <div className="p-3">
              <label className="text-xs font-medium text-muted-foreground">LLEGADA</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
            <div className="p-3">
              <label className="text-xs font-medium text-muted-foreground">SALIDA</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 divide-x divide-input">
            <div className="p-3">
              <label className="text-xs font-medium text-muted-foreground">FECHA</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
            <div className="p-3">
              <label className="text-xs font-medium text-muted-foreground">HORAS</label>
              <select
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full bg-transparent text-sm outline-none"
              >
                <option value={2}>2 horas</option>
                <option value={4}>4 horas</option>
                <option value={6}>6 horas</option>
                <option value={8}>8 horas</option>
                <option value={12}>12 horas</option>
              </select>
            </div>
          </div>
        )}

        {/* Guests */}
        <div className="border-t border-input p-3">
          <label className="text-xs font-medium text-muted-foreground">HUÉSPEDES</label>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{guests} huéspedes</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="rounded-full border border-input p-1 transition-colors hover:bg-secondary"
                aria-label="Reducir huéspedes"
              >
                <Minus className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setGuests(Math.min(10, guests + 1))}
                className="rounded-full border border-input p-1 transition-colors hover:bg-secondary"
                aria-label="Aumentar huéspedes"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Package Option */}
      <div className="mb-4 rounded-lg border border-primary/30 bg-primary/5 p-3">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={addPackage}
            onChange={(e) => setAddPackage(e.target.checked)}
            className="h-4 w-4 rounded border-primary accent-primary"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Agregar experiencias</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Añade tours y actividades a tu reserva
            </p>
          </div>
        </label>
      </div>

      {/* Reserve Button */}
      <Button
        size="lg"
        className="mb-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {addPackage ? "Continuar y agregar experiencias" : "Reservar ahora"}
      </Button>

      <p className="mb-4 text-center text-xs text-muted-foreground">
        No se te cobrará aún
      </p>

      {/* Price Breakdown */}
      {(nights > 0 || bookingType === "hours") && (
        <div className="space-y-2 border-t border-border pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground underline decoration-dotted">
              {bookingType === "days"
                ? `${formatPrice(pricePerNight)} x ${nights} noches`
                : `${formatPrice(pricePerHour)} x ${hours} horas`}
            </span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground underline decoration-dotted">
              Tarifa de servicio
            </span>
            <span>{formatPrice(serviceFee)}</span>
          </div>
          <div className="flex justify-between border-t border-border pt-2 font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      )}
    </div>
  )
}
