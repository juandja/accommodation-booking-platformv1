import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users, Waves, TreePine, Wifi, Car } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/573001234567" // Actualizar con el número real

export function HeroSection() {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/finca-cafe.jpg"
          alt="Villa Melania - Finca de descanso en Zarzal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative mx-auto flex flex-col justify-center px-4 py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2">
            <span className="text-xs font-medium text-primary-foreground">
              Finca de descanso en Zarzal, C/to Quebrada Nueva, Valle del Cauca 
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-card md:text-5xl lg:text-6xl text-balance">
            Bienvenidos a{" "}
            <span className="text-accent">Villa Melania Brothers</span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-xl text-lg text-card/90 text-pretty">
            Tu refugio perfecto para descansar, celebrar y disfrutar en familia. 
            Reserva por días u horas y vive una experiencia inolvidable en el corazón del Valle.
          </p>

          {/* Amenities Grid */}
          <div className="mb-8 grid grid-cols-3 gap-4 max-w-md">
            <div className="flex flex-col items-center gap-1 rounded-lg bg-card/10 backdrop-blur-sm p-3">
              <Waves className="h-5 w-5 text-accent" />
              <span className="text-xs text-card/90">Piscina</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg bg-card/10 backdrop-blur-sm p-3">
              <TreePine className="h-5 w-5 text-accent" />
              <span className="text-xs text-card/90">Kiosko BBQ</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg bg-card/10 backdrop-blur-sm p-3">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-xs text-card/90">100 personas</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg bg-card/10 backdrop-blur-sm p-3">
              <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span className="text-xs text-card/90">Cancha</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg bg-card/10 backdrop-blur-sm p-3">
              <Wifi className="h-5 w-5 text-accent" />
              <span className="text-xs text-card/90">WiFi</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg bg-card/10 backdrop-blur-sm p-3">
              <Car className="h-5 w-5 text-accent" />
              <span className="text-xs text-card/90">Parqueadero</span>
            </div>
              <div className="flex flex-col items-center gap-1 rounded-lg bg-card/10 backdrop-blur-sm p-3">
              <Car className="h-5 w-5 text-accent" />
              <span className="text-xs text-card/90">Zona de Juegos</span>
            </div>
              <div className="flex flex-col items-center gap-1 rounded-lg bg-card/10 backdrop-blur-sm p-3">
              <Car className="h-5 w-5 text-accent" />
              <span className="text-xs text-card/90">Salon Social</span>
              
            </div>
                          <div className="flex flex-col items-center gap-1 rounded-lg bg-card/10 backdrop-blur-sm p-3">
              <Car className="h-5 w-5 text-accent" />
              <span className="text-xs text-card/90">Oasis de Melania</span>
              
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Reservar por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-card/30 bg-card/10 text-card backdrop-blur-sm hover:bg-card/20 hover:text-card" asChild>
              <a href="#la-finca">
                Conocer más
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
