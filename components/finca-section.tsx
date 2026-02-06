"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Waves, 
  TreePine, 
  Users, 
  Wifi, 
  Car, 
  Sun,
  MessageCircle,
  Star,
  MapPin,
  Clock,
  Calendar
} from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/573001234567" // Actualizar con el número real

const amenities = [
  {
    icon: Waves,
    name: "Piscina",
    description: "Refréscate en nuestra amplia piscina con zona de descanso"
  },
  {
    icon: TreePine,
    name: "Kiosko BBQ",
    description: "Zona de parrilla techada perfecta para compartir en familia"
  },
  {
    icon: () => (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    name: "Cancha deportiva",
    description: "Espacio para fútbol, voleibol y otros deportes"
  },
  {
    icon: Wifi,
    name: "WiFi",
    description: "Internet de alta velocidad en toda la finca"
  },
  {
    icon: Car,
    name: "Parqueadero",
    description: "Amplio estacionamiento privado para varios vehículos"
  },
  {
    icon: Sun,
    name: "Zonas verdes",
    description: "Amplios jardines y espacios naturales para disfrutar"
  },
]

const galleryImages = [
  { src: "/images/finca-cafe.jpg", alt: "Vista principal de Villa Melania" },
  { src: "/images/cabana-roble.jpg", alt: "Zona de descanso" },
  { src: "/images/casa-arrayanes.jpg", alt: "Áreas comunes" },
  { src: "/images/apto-verde.jpg", alt: "Interior" },
]

export function FincaSection() {
  return (
    <section id="la-finca" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Zarzal, Valle del Cauca
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Conoce Villa Melania
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-pretty">
            Una finca de descanso pensada para que disfrutes con tu familia y amigos. 
            Con capacidad hasta de 100 personas, es el lugar perfecto para tu próxima escapada.
          </p>
        </div>

        {/* Gallery Grid */}
        <div id="galeria" className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Stats & CTA */}
        <Card className="mb-12 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-primary">
                    <Users className="h-5 w-5" />
                    <span className="font-serif text-2xl font-bold">100</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Personas</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-primary">
                    <Star className="h-5 w-5 fill-primary" />
                    <span className="font-serif text-2xl font-bold">4.9</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Calificación</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <span className="font-serif text-2xl font-bold">Por día</span>
                  </div>
                  <span className="text-sm text-muted-foreground">O por horas</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="h-5 w-5" />
                    <span className="font-serif text-2xl font-bold">Pasadía</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Disponible</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consultar disponibilidad
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Amenities */}
        <div className="mb-8">
          <h3 className="mb-6 font-serif text-2xl font-bold text-foreground text-center">
            Todo lo que necesitas para descansar
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <Card key={amenity.name} className="border-border transition-shadow hover:shadow-md">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <amenity.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{amenity.name}</h4>
                    <p className="text-sm text-muted-foreground">{amenity.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
