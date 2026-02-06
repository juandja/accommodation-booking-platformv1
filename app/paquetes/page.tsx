import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Package, Sparkles, Users, Calendar, ArrowRight } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Escapada Romántica",
    description: "2 noches en cabaña + cena romántica + tour del café",
    longDescription:
      "Perfecto para parejas que buscan desconectarse. Incluye una cabaña privada con vistas espectaculares, cena a la luz de las velas y un tour exclusivo por fincas cafeteras.",
    image: "/images/paquete-romantico.jpg",
    originalPrice: 650000,
    price: 520000,
    savings: 130000,
    duration: "2 noches / 3 días",
    groupSize: "2 personas",
    includes: [
      "2 noches en Cabaña El Roble",
      "Desayunos campestres incluidos",
      "Cena romántica con vino nacional",
      "Tour del Café para 2 personas",
      "Transporte desde Zarzal incluido",
      "Kit de bienvenida con frutas locales",
    ],
    popular: true,
    category: "Romántico",
  },
  {
    id: 2,
    name: "Aventura Familiar",
    description: "3 noches en finca + tours + actividades para niños",
    longDescription:
      "La experiencia perfecta para crear recuerdos en familia. Alojamiento en una finca con piscina, actividades diseñadas para todas las edades y tours educativos.",
    image: "/images/paquete-familiar.jpg",
    originalPrice: 1200000,
    price: 980000,
    savings: 220000,
    duration: "3 noches / 4 días",
    groupSize: "Hasta 6 personas",
    includes: [
      "3 noches en Finca Villa del Café",
      "Desayunos y almuerzos campestres",
      "Tour de la Caña con actividad para niños",
      "Avistamiento de aves (tour familiar)",
      "Actividades recreativas: piscina, juegos",
      "Piscina privada con zona infantil",
      "Fogata nocturna con malvaviscos",
    ],
    popular: false,
    category: "Familiar",
  },
  {
    id: 3,
    name: "Bienestar Total",
    description: "2 noches + termales + spa + yoga matutino",
    longDescription:
      "Recarga energías en un retiro de bienestar completo. Combina la tranquilidad del campo con tratamientos de spa y aguas termales naturales.",
    image: "/images/paquete-bienestar.jpg",
    originalPrice: 780000,
    price: 650000,
    savings: 130000,
    duration: "2 noches / 3 días",
    groupSize: "1-4 personas",
    includes: [
      "2 noches en Casa Los Arrayanes",
      "Acceso ilimitado a termales naturales",
      "Sesión de spa completa (masaje + facial)",
      "2 clases de yoga al amanecer",
      "Alimentación saludable (3 comidas)",
      "Meditación guiada",
      "Kit de aromaterapia de regalo",
    ],
    popular: false,
    category: "Bienestar",
  },
  {
    id: 4,
    name: "Explorador del Valle",
    description: "4 noches + todos los tours + experiencias gastronómicas",
    longDescription:
      "El paquete más completo para conocer todo lo que el Valle del Cauca tiene para ofrecer. Múltiples alojamientos, todos los tours y experiencias gastronómicas.",
    image: "/images/tour-cafe.jpg",
    originalPrice: 1800000,
    price: 1450000,
    savings: 350000,
    duration: "4 noches / 5 días",
    groupSize: "2-4 personas",
    includes: [
      "2 noches en Finca + 2 noches en Cabaña",
      "Todas las comidas incluidas",
      "Tour del Café completo",
      "Ruta de la Caña y Panela",
      "Avistamiento de aves",
      "Visita a termales",
      "Clase de cocina valluna",
      "Transporte completo",
      "Guía durante todo el recorrido",
    ],
    popular: true,
    category: "Aventura",
  },
]

export default function PackagesPage() {
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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-accent/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
              <Package className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Ahorra hasta 20%</span>
            </div>
            <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Paquetes todo incluido
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Combina alojamiento + experiencias y disfruta de una estadía sin preocupaciones. 
              También puedes crear tu propio paquete personalizado.
            </p>
            <Link href="/paquetes/personalizar">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Sparkles className="mr-2 h-4 w-4" />
                Crear mi paquete personalizado
              </Button>
            </Link>
          </div>
        </section>

        {/* Packages List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {packages.map((pkg, index) => (
                <Card
                  key={pkg.id}
                  className={`relative overflow-hidden border-2 transition-shadow hover:shadow-xl ${
                    pkg.popular ? "border-primary" : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute right-0 top-0 z-10">
                      <div className="flex items-center gap-1 rounded-bl-lg bg-primary px-4 py-2">
                        <Sparkles className="h-4 w-4 text-primary-foreground" />
                        <span className="text-sm font-medium text-primary-foreground">
                          Más popular
                        </span>
                      </div>
                    </div>
                  )}

                  <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    {/* Image */}
                    <div className="relative aspect-video w-full lg:aspect-auto lg:w-2/5">
                      <Image
                        src={pkg.image || "/placeholder.svg"}
                        alt={pkg.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-foreground/10" />
                      <div className="absolute bottom-4 left-4 lg:hidden">
                        <span className="rounded-full bg-card/90 px-3 py-1 text-sm font-medium backdrop-blur">
                          {pkg.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="flex flex-1 flex-col p-6 lg:p-8">
                      <div className="mb-4 hidden lg:block">
                        <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                          {pkg.category}
                        </span>
                      </div>

                      <h2 className="mb-2 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                        {pkg.name}
                      </h2>

                      <p className="mb-4 text-muted-foreground">{pkg.longDescription}</p>

                      {/* Quick Info */}
                      <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          {pkg.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-primary" />
                          {pkg.groupSize}
                        </div>
                      </div>

                      {/* Includes */}
                      <div className="mb-6 grid gap-2 sm:grid-cols-2">
                        {pkg.includes.slice(0, 6).map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm text-foreground">{item}</span>
                          </div>
                        ))}
                        {pkg.includes.length > 6 && (
                          <div className="flex items-center gap-2 text-sm text-primary">
                            <span>+{pkg.includes.length - 6} beneficios más</span>
                          </div>
                        )}
                      </div>

                      {/* Price & CTA */}
                      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-border pt-4">
                        <div>
                          <div className="mb-1 flex items-center gap-2">
                            <span className="text-lg text-muted-foreground line-through">
                              {formatPrice(pkg.originalPrice)}
                            </span>
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                              Ahorras {formatPrice(pkg.savings)}
                            </span>
                          </div>
                          <span className="font-serif text-3xl font-bold text-foreground">
                            {formatPrice(pkg.price)}
                          </span>
                          <span className="text-sm text-muted-foreground"> / total</span>
                        </div>
                        <Link href={`/paquetes/${pkg.id}`}>
                          <Button
                            size="lg"
                            className={
                              pkg.popular
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }
                          >
                            Ver detalles
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Package CTA */}
        <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
              ¿Ningún paquete se ajusta a tus necesidades?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Crea tu propio paquete combinando el alojamiento y las experiencias que prefieras
            </p>
            <Link href="/paquetes/personalizar">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Package className="mr-2 h-5 w-5" />
                Crear paquete personalizado
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
