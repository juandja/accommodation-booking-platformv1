import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Package, Sparkles } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/573001234567" // Actualizar con el número real

const packages = [
  {
    id: 1,
    name: "Escapada Romántica",
    description: "2 noches en Villa Melania + cena especial + tour del café",
    image: "/images/paquete-romantico.jpg",
    originalPrice: 650000,
    price: 520000,
    savings: 130000,
    includes: [
      "2 noches en Villa Melania",
      "Piscina y zonas privadas",
      "Cena romántica con vino",
      "Tour del Café para 2",
      "Decoración especial",
    ],
    popular: true,
  },
  {
    id: 2,
    name: "Aventura Familiar",
    description: "3 noches en Villa Melania + tours + actividades",
    image: "/images/paquete-familiar.jpg",
    originalPrice: 1200000,
    price: 980000,
    savings: 220000,
    includes: [
      "3 noches en Villa Melania",
      "Piscina y cancha deportiva",
      "Tour de la Caña",
      "Avistamiento de aves",
      "BBQ con kiosko incluido",
      "Zona campestre",
    ],
    popular: false,
  },
  {
    id: 3,
    name: "Bienestar Total",
    description: "2 noches + termales + spa + relax total",
    image: "/images/paquete-bienestar.jpg",
    originalPrice: 780000,
    price: 650000,
    savings: 130000,
    includes: [
      "2 noches en Villa Melania",
      "Excursión a termales",
      "Sesión de masajes",
      "Yoga en la finca",
      "Desayunos saludables",
    ],
    popular: false,
  },
]

export function PackagesSection() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
            <Package className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Ahorra armando tu paquete</span>
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Paquetes en Villa Melania
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Combina tu estadía en Villa Melania con experiencias y ahorra hasta un 20%. 
            Escoge un paquete o arma el tuyo personalizado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative overflow-hidden border-2 transition-shadow hover:shadow-xl ${
                pkg.popular ? "border-primary" : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute right-0 top-0 z-10">
                  <div className="flex items-center gap-1 rounded-bl-lg bg-primary px-3 py-1">
                    <Sparkles className="h-3 w-3 text-primary-foreground" />
                    <span className="text-xs font-medium text-primary-foreground">Más popular</span>
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">{pkg.name}</h3>
                  <p className="text-sm text-primary-foreground/80">{pkg.description}</p>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Price */}
                <div className="mb-4 flex items-end gap-3">
                  <span className="font-serif text-3xl font-bold text-foreground">
                    {formatPrice(pkg.price)}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(pkg.originalPrice)}
                  </span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1">
                  <span className="text-sm font-medium text-primary">
                    Ahorras {formatPrice(pkg.savings)}
                  </span>
                </div>

                {/* Includes */}
                <div className="mb-6 space-y-3">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href={`/paquetes/${pkg.id}`} className="block">
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Reservar paquete
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 text-center">
          <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
            ¿Prefieres armar tu propio paquete?
          </h3>
          <p className="mb-6 text-muted-foreground">
            Combina tu estadía en Villa Melania con las experiencias que más te gusten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paquetes/personalizar">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent">
                Crear paquete personalizado
              </Button>
            </Link>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
