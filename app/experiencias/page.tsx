"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Star, Users, Calendar, Filter, Search } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

const experiences = [
  {
    id: 1,
    name: "Tour del Café Completo",
    description:
      "Recorre fincas cafeteras y aprende todo el proceso del café colombiano, desde la siembra hasta la taza. Incluye degustación de variedades premium.",
    image: "/images/tour-cafe.jpg",
    price: 85000,
    duration: "4 horas",
    location: "Sevilla - Valle",
    rating: 4.9,
    reviews: 156,
    groupSize: "2-8 personas",
    category: "Cultura",
    includes: ["Transporte", "Guía bilingüe", "Degustación", "Almuerzo típico"],
  },
  {
    id: 2,
    name: "Avistamiento de Aves",
    description:
      "Descubre las aves exóticas del Valle del Cauca con un guía experto. Colombia tiene más de 1900 especies de aves, muchas endémicas de esta región.",
    image: "/images/aves.jpg",
    price: 120000,
    duration: "6 horas",
    location: "Reserva Natural",
    rating: 4.8,
    reviews: 89,
    groupSize: "2-6 personas",
    category: "Naturaleza",
    includes: ["Binoculares", "Guía especializado", "Refrigerio", "Transporte"],
  },
  {
    id: 3,
    name: "Ruta de la Caña y Panela",
    description:
      "Visita trapiches tradicionales y conoce el proceso artesanal de la panela. Participa en la molienda y prueba productos frescos.",
    image: "/images/cana.jpg",
    price: 65000,
    duration: "3 horas",
    location: "Zarzal",
    rating: 4.7,
    reviews: 72,
    groupSize: "4-12 personas",
    category: "Gastronomía",
    includes: ["Degustación", "Actividad interactiva", "Productos para llevar"],
  },
  {
    id: 4,
    name: "Termales y Bienestar",
    description:
      "Relájate en aguas termales naturales rodeado de montañas. Incluye acceso a piscinas de diferentes temperaturas y tratamientos de barro.",
    image: "/images/termales.jpg",
    price: 95000,
    duration: "Día completo",
    location: "Santa Rosa de Cabal",
    rating: 5.0,
    reviews: 203,
    groupSize: "2-10 personas",
    category: "Bienestar",
    includes: ["Entrada termales", "Almuerzo", "Transporte", "Toalla"],
  },
  {
    id: 5,
    name: "Senderismo Cerro de las Tres Cruces",
    description:
      "Caminata guiada por senderos naturales con vistas panorámicas del Valle del Cauca. Ideal para amantes de la naturaleza y el deporte.",
    image: "/images/termales.jpg",
    price: 55000,
    duration: "5 horas",
    location: "Zarzal",
    rating: 4.6,
    reviews: 64,
    groupSize: "4-15 personas",
    category: "Aventura",
    includes: ["Guía", "Hidratación", "Snacks energéticos"],
  },
  {
    id: 6,
    name: "Clase de Cocina Valluna",
    description:
      "Aprende a preparar platos típicos del Valle del Cauca: sancocho, pandebono, champús y más. Al final disfrutarás tu propia creación.",
    image: "/images/cana.jpg",
    price: 110000,
    duration: "4 horas",
    location: "Zarzal Centro",
    rating: 4.9,
    reviews: 87,
    groupSize: "2-8 personas",
    category: "Gastronomía",
    includes: ["Ingredientes", "Recetario", "Almuerzo", "Delantal de regalo"],
  },
  {
    id: 7,
    name: "Cabalgata por Fincas Cafeteras",
    description:
      "Recorre los paisajes del Valle a lomo de caballo. Visita fincas tradicionales y disfruta de la naturaleza de manera única.",
    image: "/images/tour-cafe.jpg",
    price: 130000,
    duration: "4 horas",
    location: "La Paila",
    rating: 4.8,
    reviews: 93,
    groupSize: "2-6 personas",
    category: "Aventura",
    includes: ["Caballo", "Guía", "Seguro", "Refrigerio"],
  },
  {
    id: 8,
    name: "Tour Nocturno de Luciérnagas",
    description:
      "Experiencia mágica observando luciérnagas en su hábitat natural. Un espectáculo único que solo ocurre en ciertas épocas del año.",
    image: "/images/aves.jpg",
    price: 75000,
    duration: "3 horas",
    location: "Reserva Natural",
    rating: 4.9,
    reviews: 45,
    groupSize: "4-12 personas",
    category: "Naturaleza",
    includes: ["Guía nocturno", "Linterna", "Bebida caliente"],
  },
]

const categories = ["Todos", "Cultura", "Naturaleza", "Gastronomía", "Bienestar", "Aventura"]

const Loading = () => null

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")
  const searchParams = useSearchParams()

  const filteredExperiences = experiences.filter((exp) => {
    const matchesCategory = selectedCategory === "Todos" || exp.category === selectedCategory
    const matchesSearch =
      exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-background">
          {/* Hero Section */}
          <section className="relative bg-primary/10 py-16">
            <div className="container mx-auto px-4 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-primary">
                Experiencias únicas
              </span>
              <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Tours y experiencias en el Valle del Cauca
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Descubre la riqueza cultural, natural y gastronómica de nuestra región. 
                Desde tours de café hasta aventuras en la naturaleza.
              </p>

              {/* Search */}
              <div className="mx-auto flex max-w-xl items-center gap-2 rounded-full border border-border bg-card p-2 shadow-sm">
                <Search className="ml-2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar experiencias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                <Button size="sm" className="rounded-full bg-primary text-primary-foreground">
                  Buscar
                </Button>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="border-b border-border bg-card py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Experiences Grid */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              {/* Results Count */}
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  {filteredExperiences.length} experiencias encontradas
                </p>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <select className="rounded-lg border border-input bg-background px-3 py-1.5 text-sm outline-none">
                    <option>Recomendados</option>
                    <option>Precio: menor a mayor</option>
                    <option>Precio: mayor a menor</option>
                    <option>Mejor calificados</option>
                  </select>
                </div>
              </div>

              {/* Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredExperiences.map((experience) => (
                  <Card
                    key={experience.id}
                    className="group overflow-hidden border-border transition-shadow hover:shadow-lg"
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
                          <span className="text-xs text-muted-foreground">
                            ({experience.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="mb-2 font-serif text-lg font-semibold text-foreground line-clamp-1">
                        {experience.name}
                      </h3>

                      {/* Description */}
                      <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                        {experience.description}
                      </p>

                      {/* Info */}
                      <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {experience.groupSize}
                        </div>
                      </div>

                      {/* Includes */}
                      <div className="mb-4 flex flex-wrap gap-1">
                        {experience.includes.slice(0, 2).map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                          >
                            {item}
                          </span>
                        ))}
                        {experience.includes.length > 2 && (
                          <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                            +{experience.includes.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between border-t border-border pt-3">
                        <div>
                          <span className="font-serif text-lg font-bold text-foreground">
                            {formatPrice(experience.price)}
                          </span>
                          <span className="text-xs text-muted-foreground">/persona</span>
                        </div>
                        <Link href={`/experiencias/${experience.id}`}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                          >
                            Reservar
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredExperiences.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-lg text-muted-foreground">
                    No se encontraron experiencias con esos criterios.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-transparent"
                    onClick={() => {
                      setSelectedCategory("Todos")
                      setSearchTerm("")
                    }}
                  >
                    Ver todas las experiencias
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/10 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
                ¿Buscas algo especial?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Contáctanos para crear una experiencia personalizada para tu grupo
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/paquetes/personalizar">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Calendar className="mr-2 h-4 w-4" />
                    Crear paquete personalizado
                  </Button>
                </Link>
                <Button variant="outline">Contactar asesor</Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Suspense>
  )
}
