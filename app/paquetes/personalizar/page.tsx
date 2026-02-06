"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Star,
  Users,
  Package,
  Trash2,
  Plus,
  ShoppingCart,
} from "lucide-react"

const accommodations = [
  {
    id: 1,
    name: "Finca Villa del Café",
    location: "Zarzal Centro",
    image: "/images/finca-cafe.jpg",
    pricePerNight: 180000,
    pricePerHour: 35000,
    rating: 4.9,
    guests: 6,
  },
  {
    id: 2,
    name: "Cabaña El Roble",
    location: "La Paila",
    image: "/images/cabana-roble.jpg",
    pricePerNight: 120000,
    pricePerHour: 25000,
    rating: 4.8,
    guests: 4,
  },
  {
    id: 3,
    name: "Casa Los Arrayanes",
    location: "Zarzal Rural",
    image: "/images/casa-arrayanes.jpg",
    pricePerNight: 250000,
    pricePerHour: 45000,
    rating: 5.0,
    guests: 10,
  },
]

const experiences = [
  {
    id: 1,
    name: "Tour del Café",
    image: "/images/tour-cafe.jpg",
    price: 85000,
    duration: "4 horas",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Avistamiento de Aves",
    image: "/images/aves.jpg",
    price: 120000,
    duration: "6 horas",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Ruta de la Caña",
    image: "/images/cana.jpg",
    price: 65000,
    duration: "3 horas",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Termales y Bienestar",
    image: "/images/termales.jpg",
    price: 95000,
    duration: "Día completo",
    rating: 5.0,
  },
]

type Step = 1 | 2 | 3 | 4

interface SelectedAccommodation {
  id: number
  name: string
  image: string
  pricePerNight: number
  nights: number
}

interface SelectedExperience {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

export default function CustomPackagePage() {
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [selectedAccommodation, setSelectedAccommodation] = useState<SelectedAccommodation | null>(null)
  const [selectedExperiences, setSelectedExperiences] = useState<SelectedExperience[]>([])
  const [nights, setNights] = useState(2)
  const [guests, setGuests] = useState(2)
  const [checkInDate, setCheckInDate] = useState("")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const selectAccommodation = (acc: (typeof accommodations)[0]) => {
    setSelectedAccommodation({
      id: acc.id,
      name: acc.name,
      image: acc.image,
      pricePerNight: acc.pricePerNight,
      nights: nights,
    })
  }

  const toggleExperience = (exp: (typeof experiences)[0]) => {
    setSelectedExperiences((prev) => {
      const existing = prev.find((e) => e.id === exp.id)
      if (existing) {
        return prev.filter((e) => e.id !== exp.id)
      }
      return [
        ...prev,
        {
          id: exp.id,
          name: exp.name,
          image: exp.image,
          price: exp.price,
          quantity: 1,
        },
      ]
    })
  }

  const updateExperienceQuantity = (id: number, quantity: number) => {
    setSelectedExperiences((prev) =>
      prev.map((e) => (e.id === id ? { ...e, quantity: Math.max(1, quantity) } : e))
    )
  }

  const removeExperience = (id: number) => {
    setSelectedExperiences((prev) => prev.filter((e) => e.id !== id))
  }

  const calculateSubtotal = () => {
    const accommodationTotal = selectedAccommodation
      ? selectedAccommodation.pricePerNight * nights
      : 0
    const experiencesTotal = selectedExperiences.reduce(
      (sum, exp) => sum + exp.price * exp.quantity * guests,
      0
    )
    return accommodationTotal + experiencesTotal
  }

  const calculateDiscount = () => {
    const subtotal = calculateSubtotal()
    // 10% discount for packages
    return selectedAccommodation && selectedExperiences.length > 0
      ? Math.round(subtotal * 0.1)
      : 0
  }

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount()
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedAccommodation !== null
      case 2:
        return true // Experiences are optional
      case 3:
        return checkInDate !== ""
      default:
        return true
    }
  }

  const steps = [
    { number: 1, title: "Alojamiento" },
    { number: 2, title: "Experiencias" },
    { number: 3, title: "Fechas" },
    { number: 4, title: "Confirmar" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Header */}
        <section className="border-b border-border bg-secondary/30 py-8">
          <div className="container mx-auto px-4">
            <Link
              href="/paquetes"
              className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Volver a paquetes
            </Link>
            <h1 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Crea tu paquete personalizado
            </h1>
            <p className="mt-2 text-muted-foreground">
              Combina alojamiento + experiencias y obtén un 10% de descuento
            </p>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="border-b border-border bg-card py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => step.number < currentStep && setCurrentStep(step.number as Step)}
                    className={`flex items-center gap-2 ${
                      step.number < currentStep ? "cursor-pointer" : "cursor-default"
                    }`}
                    disabled={step.number > currentStep}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                        step.number === currentStep
                          ? "bg-primary text-primary-foreground"
                          : step.number < currentStep
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {step.number < currentStep ? <Check className="h-4 w-4" /> : step.number}
                    </div>
                    <span
                      className={`hidden text-sm font-medium sm:block ${
                        step.number === currentStep
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                  {index < steps.length - 1 && (
                    <div
                      className={`mx-4 h-0.5 w-8 sm:w-16 md:w-24 ${
                        step.number < currentStep ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Select Accommodation */}
              {currentStep === 1 && (
                <div>
                  <h2 className="mb-6 font-serif text-xl font-semibold text-foreground">
                    Selecciona tu alojamiento
                  </h2>

                  {/* Nights & Guests */}
                  <div className="mb-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 rounded-lg border border-input bg-card px-4 py-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <label className="text-sm text-muted-foreground">Noches:</label>
                      <select
                        value={nights}
                        onChange={(e) => setNights(Number(e.target.value))}
                        className="bg-transparent font-medium outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-input bg-card px-4 py-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <label className="text-sm text-muted-foreground">Huéspedes:</label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="bg-transparent font-medium outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {accommodations.map((acc) => (
                      <Card
                        key={acc.id}
                        className={`cursor-pointer overflow-hidden transition-all ${
                          selectedAccommodation?.id === acc.id
                            ? "ring-2 ring-primary"
                            : "hover:shadow-lg"
                        }`}
                        onClick={() => selectAccommodation(acc)}
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={acc.image || "/placeholder.svg"}
                            alt={acc.name}
                            fill
                            className="object-cover"
                          />
                          {selectedAccommodation?.id === acc.id && (
                            <div className="absolute right-2 top-2 rounded-full bg-primary p-1">
                              <Check className="h-4 w-4 text-primary-foreground" />
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="mb-1 flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {acc.location}
                          </div>
                          <h3 className="font-medium text-foreground">{acc.name}</h3>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-accent text-accent" />
                              <span className="text-sm">{acc.rating}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">
                                {formatPrice(acc.pricePerNight)}
                              </span>
                              <span className="text-xs text-muted-foreground">/noche</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Experiences */}
              {currentStep === 2 && (
                <div>
                  <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">
                    Agrega experiencias (opcional)
                  </h2>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Al agregar experiencias obtienes un 10% de descuento en tu paquete total
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {experiences.map((exp) => {
                      const isSelected = selectedExperiences.some((e) => e.id === exp.id)
                      return (
                        <Card
                          key={exp.id}
                          className={`cursor-pointer overflow-hidden transition-all ${
                            isSelected ? "ring-2 ring-primary" : "hover:shadow-lg"
                          }`}
                          onClick={() => toggleExperience(exp)}
                        >
                          <div className="flex">
                            <div className="relative h-28 w-28 shrink-0">
                              <Image
                                src={exp.image || "/placeholder.svg"}
                                alt={exp.name}
                                fill
                                className="object-cover"
                              />
                              {isSelected && (
                                <div className="absolute right-1 top-1 rounded-full bg-primary p-1">
                                  <Check className="h-3 w-3 text-primary-foreground" />
                                </div>
                              )}
                            </div>
                            <CardContent className="flex flex-1 flex-col justify-center p-3">
                              <h3 className="font-medium text-foreground">{exp.name}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {exp.duration}
                                <Star className="ml-1 h-3 w-3 fill-accent text-accent" />
                                {exp.rating}
                              </div>
                              <div className="mt-1">
                                <span className="font-semibold text-primary">
                                  {formatPrice(exp.price)}
                                </span>
                                <span className="text-xs text-muted-foreground">/persona</span>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Select Dates */}
              {currentStep === 3 && (
                <div>
                  <h2 className="mb-6 font-serif text-xl font-semibold text-foreground">
                    Selecciona las fechas
                  </h2>

                  <div className="max-w-md">
                    <div className="mb-4">
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Fecha de llegada
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full rounded-lg border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div className="rounded-lg bg-secondary/50 p-4">
                      <h3 className="mb-2 font-medium text-foreground">Resumen de fechas</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>
                          Check-in: {checkInDate || "Por seleccionar"} (3:00 PM)
                        </p>
                        <p>
                          Check-out:{" "}
                          {checkInDate
                            ? new Date(
                                new Date(checkInDate).getTime() + nights * 24 * 60 * 60 * 1000
                              ).toISOString().split("T")[0]
                            : "Por seleccionar"}{" "}
                          (12:00 PM)
                        </p>
                        <p className="font-medium text-foreground">
                          {nights} {nights === 1 ? "noche" : "noches"} · {guests}{" "}
                          {guests === 1 ? "huésped" : "huéspedes"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div>
                  <h2 className="mb-6 font-serif text-xl font-semibold text-foreground">
                    Confirma tu paquete
                  </h2>

                  {/* Accommodation */}
                  {selectedAccommodation && (
                    <div className="mb-6 rounded-lg border border-border bg-card p-4">
                      <h3 className="mb-3 font-medium text-foreground">Alojamiento</h3>
                      <div className="flex gap-4">
                        <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={selectedAccommodation.image || "/placeholder.svg"}
                            alt={selectedAccommodation.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {selectedAccommodation.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {nights} {nights === 1 ? "noche" : "noches"} ·{" "}
                            {formatPrice(selectedAccommodation.pricePerNight)}/noche
                          </p>
                          <p className="font-semibold text-foreground">
                            {formatPrice(selectedAccommodation.pricePerNight * nights)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Experiences */}
                  {selectedExperiences.length > 0 && (
                    <div className="mb-6 rounded-lg border border-border bg-card p-4">
                      <h3 className="mb-3 font-medium text-foreground">Experiencias</h3>
                      <div className="space-y-3">
                        {selectedExperiences.map((exp) => (
                          <div key={exp.id} className="flex items-center gap-4">
                            <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                              <Image
                                src={exp.image || "/placeholder.svg"}
                                alt={exp.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-foreground">{exp.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {formatPrice(exp.price)} x {guests} personas
                              </p>
                            </div>
                            <p className="font-semibold text-foreground">
                              {formatPrice(exp.price * guests)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dates */}
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h3 className="mb-3 font-medium text-foreground">Fechas y huéspedes</h3>
                    <div className="grid gap-2 text-sm sm:grid-cols-2">
                      <div>
                        <span className="text-muted-foreground">Check-in:</span>{" "}
                        <span className="font-medium">{checkInDate} (3:00 PM)</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Check-out:</span>{" "}
                        <span className="font-medium">
                          {new Date(
                            new Date(checkInDate).getTime() + nights * 24 * 60 * 60 * 1000
                          ).toISOString().split("T")[0]}{" "}
                          (12:00 PM)
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Huéspedes:</span>{" "}
                        <span className="font-medium">{guests}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Noches:</span>{" "}
                        <span className="font-medium">{nights}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Package Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Tu paquete
                  </h3>
                </div>

                {/* Selected Items */}
                <div className="mb-4 space-y-3">
                  {selectedAccommodation ? (
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded">
                          <Image
                            src={selectedAccommodation.image || "/placeholder.svg"}
                            alt={selectedAccommodation.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-foreground line-clamp-1">
                            {selectedAccommodation.name}
                          </p>
                          <p className="text-xs text-muted-foreground">{nights} noches</p>
                        </div>
                      </div>
                      <span className="font-medium">
                        {formatPrice(selectedAccommodation.pricePerNight * nights)}
                      </span>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Selecciona un alojamiento
                    </p>
                  )}

                  {selectedExperiences.map((exp) => (
                    <div key={exp.id} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded">
                          <Image
                            src={exp.image || "/placeholder.svg"}
                            alt={exp.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-foreground line-clamp-1">{exp.name}</p>
                          <p className="text-xs text-muted-foreground">x{guests} personas</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{formatPrice(exp.price * guests)}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeExperience(exp.id)
                          }}
                          className="text-muted-foreground hover:text-destructive"
                          aria-label="Eliminar"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-border pt-4">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(calculateSubtotal())}</span>
                  </div>
                  {calculateDiscount() > 0 && (
                    <div className="mb-2 flex justify-between text-sm text-primary">
                      <span>Descuento paquete (10%)</span>
                      <span>-{formatPrice(calculateDiscount())}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="font-serif text-xl">{formatPrice(calculateTotal())}</span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-6 flex gap-3">
                  {currentStep > 1 && (
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => setCurrentStep((currentStep - 1) as Step)}
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" />
                      Atrás
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => setCurrentStep((currentStep + 1) as Step)}
                      disabled={!canProceed()}
                    >
                      Continuar
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                      disabled={!selectedAccommodation}
                    >
                      <Package className="mr-2 h-4 w-4" />
                      Reservar paquete
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
