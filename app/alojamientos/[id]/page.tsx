import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageGallery } from "@/components/image-gallery"
import { BookingWidget } from "@/components/booking-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Star,
  Users,
  Share2,
  Heart,
  Wifi,
  Car,
  Waves,
  Utensils,
  Tv,
  Wind,
  Check,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would normally come from your database/API
const accommodation = {
  id: 1,
  name: "Finca Villa del Café",
  location: "Zarzal Centro, Valle del Cauca",
  description:
    "Hermosa finca tradicional ubicada en el corazón de la zona cafetera del Valle del Cauca. Disfruta de la tranquilidad del campo, piscina privada, y vistas espectaculares a las montañas. Ideal para familias y grupos que buscan una experiencia auténtica colombiana.",
  images: [
    "/images/finca-cafe.jpg",
    "/images/cabana-roble.jpg",
    "/images/casa-arrayanes.jpg",
    "/images/apto-verde.jpg",
    "/images/tour-cafe.jpg",
  ],
  price: 180000,
  pricePerHour: 35000,
  rating: 4.9,
  reviews: 128,
  guests: 6,
  bedrooms: 3,
  beds: 4,
  bathrooms: 2,
  amenities: [
    { icon: "wifi", name: "WiFi de alta velocidad" },
    { icon: "pool", name: "Piscina privada" },
    { icon: "parking", name: "Parqueadero gratuito" },
    { icon: "kitchen", name: "Cocina equipada" },
    { icon: "tv", name: "Smart TV" },
    { icon: "ac", name: "Aire acondicionado" },
    { icon: "bbq", name: "Zona BBQ" },
    { icon: "garden", name: "Jardín amplio" },
  ],
  host: {
    name: "María Fernanda",
    image: "/images/host.jpg",
    superhost: true,
    responseRate: 98,
    responseTime: "1 hora",
  },
  rules: [
    "Check-in: 3:00 PM - 8:00 PM",
    "Check-out: 12:00 PM",
    "No se permiten fiestas",
    "No fumar en interiores",
    "Mascotas permitidas con previo aviso",
  ],
}

const relatedExperiences = [
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
    name: "Ruta de la Caña",
    image: "/images/cana.jpg",
    price: 65000,
    duration: "3 horas",
    rating: 4.7,
  },
]

const getAmenityIcon = (icon: string) => {
  const icons: Record<string, React.ReactNode> = {
    wifi: <Wifi className="h-5 w-5" />,
    pool: <Waves className="h-5 w-5" />,
    parking: <Car className="h-5 w-5" />,
    kitchen: <Utensils className="h-5 w-5" />,
    tv: <Tv className="h-5 w-5" />,
    ac: <Wind className="h-5 w-5" />,
    bbq: <Utensils className="h-5 w-5" />,
    garden: <Waves className="h-5 w-5" />,
  }
  return icons[icon] || <Check className="h-5 w-5" />
}

export default async function AccommodationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/alojamientos" className="hover:text-foreground">
              Alojamientos
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{accommodation.name}</span>
          </nav>

          {/* Title Section */}
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                {accommodation.name}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-medium">{accommodation.rating}</span>
                  <span className="text-muted-foreground">
                    ({accommodation.reviews} reseñas)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {accommodation.location}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Compartir
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                Guardar
              </Button>
            </div>
          </div>

          {/* Image Gallery */}
          <ImageGallery images={accommodation.images} title={accommodation.name} />

          {/* Main Content */}
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              {/* Quick Info */}
              <div className="mb-6 flex flex-wrap items-center gap-6 border-b border-border pb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>{accommodation.guests} huéspedes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{accommodation.bedrooms} habitaciones</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{accommodation.beds} camas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{accommodation.bathrooms} baños</span>
                </div>
              </div>

              {/* Host Info */}
              <div className="mb-6 flex items-center gap-4 border-b border-border pb-6">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={accommodation.host.image || "/placeholder.svg"}
                    alt={accommodation.host.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground">
                      Anfitrión: {accommodation.host.name}
                    </h3>
                    {accommodation.host.superhost && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        Superanfitrión
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tasa de respuesta: {accommodation.host.responseRate}% · Responde en{" "}
                    {accommodation.host.responseTime}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 border-b border-border pb-6">
                <h2 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  Acerca de este lugar
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {accommodation.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-6 border-b border-border pb-6">
                <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
                  Lo que este lugar ofrece
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {accommodation.amenities.map((amenity) => (
                    <div
                      key={amenity.name}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <span className="text-primary">{getAmenityIcon(amenity.icon)}</span>
                      {amenity.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* House Rules */}
              <div className="mb-6 border-b border-border pb-6">
                <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
                  Reglas de la casa
                </h2>
                <ul className="space-y-2">
                  {accommodation.rules.map((rule) => (
                    <li key={rule} className="flex items-center gap-2 text-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add Experiences Section */}
              <div className="mb-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-serif text-xl font-semibold text-foreground">
                    Complementa tu estadía
                  </h2>
                  <Link href="/experiencias" className="text-sm text-primary hover:underline">
                    Ver todas
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedExperiences.map((experience) => (
                    <Card key={experience.id} className="overflow-hidden">
                      <div className="flex">
                        <div className="relative h-24 w-24 shrink-0">
                          <Image
                            src={experience.image || "/placeholder.svg"}
                            alt={experience.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="flex flex-1 flex-col justify-center p-3">
                          <h3 className="font-medium text-foreground">{experience.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{experience.duration}</span>
                            <Star className="h-3 w-3 fill-accent text-accent" />
                            <span>{experience.rating}</span>
                          </div>
                          <span className="text-sm font-medium text-primary">
                            {formatPrice(experience.price)}
                          </span>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Widget */}
            <div className="lg:col-span-1">
              <BookingWidget
                pricePerNight={accommodation.price}
                pricePerHour={accommodation.pricePerHour}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
