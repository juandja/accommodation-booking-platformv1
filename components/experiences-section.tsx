import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Star, Users } from "lucide-react"

const experiences = [
  {
    id: 1,
    name: "Tour del Café",
    description: "Recorre fincas cafeteras y aprende el proceso del café colombiano",
    image: "/images/tour-cafe.jpg",
    price: 85000,
    duration: "4 horas",
    location: "Sevilla - Valle",
    rating: 4.9,
    reviews: 156,
    groupSize: "2-8 personas",
    category: "Cultura",
  },
  {
    id: 2,
    name: "Avistamiento de Aves",
    description: "Descubre las aves exóticas del Valle del Cauca con guía experto",
    image: "/images/aves.jpg",
    price: 120000,
    duration: "6 horas",
    location: "Reserva Natural",
    rating: 4.8,
    reviews: 89,
    groupSize: "2-6 personas",
    category: "Naturaleza",
  },
  {
    id: 3,
    name: "Ruta de la Caña",
    description: "Visita ingenios azucareros y conoce la tradición panelera",
    image: "/images/cana.jpg",
    price: 65000,
    duration: "3 horas",
    location: "Zarzal",
    rating: 4.7,
    reviews: 72,
    groupSize: "4-12 personas",
    category: "Gastronomía",
  },
  {
    id: 4,
    name: "Termales y Naturaleza",
    description: "Relájate en aguas termales naturales rodeado de montañas",
    image: "/images/termales.jpg",
    price: 95000,
    duration: "Día completo",
    location: "Santa Rosa de Cabal",
    rating: 5.0,
    reviews: 203,
    groupSize: "2-10 personas",
    category: "Bienestar",
  },
]

const categories = ["Todos", "Cultura", "Naturaleza", "Gastronomía", "Bienestar"]

export function ExperiencesSection() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Complementa tu estadía
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Experiencias cerca de Villa Melania
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Agrega tours y experiencias a tu reserva en Villa Melania. 
            Conoce la región cafetera, la naturaleza y la cultura del Valle del Cauca.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === "Todos"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-card-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience) => (
            <Card
              key={experience.id}
              className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-full bg-card/90 px-2 py-1 text-xs font-medium text-card-foreground backdrop-blur">
                  {experience.category}
                </div>
              </div>

              <CardContent className="p-4">
                {/* Location & Rating */}
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {experience.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span className="text-sm font-medium">{experience.rating}</span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {experience.name}
                </h3>

                {/* Description */}
                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                  {experience.description}
                </p>

                {/* Info */}
                <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {experience.groupSize}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <div>
                    <span className="font-serif text-lg font-bold text-foreground">
                      {formatPrice(experience.price)}
                    </span>
                    <span className="text-xs text-muted-foreground">/persona</span>
                  </div>
                  <Link href={`/experiencias/${experience.id}`}>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link href="/experiencias">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explorar todas las experiencias
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
