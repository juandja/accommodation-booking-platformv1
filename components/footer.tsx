import Link from "next/link"
import { MapPin, Phone, Facebook, Instagram, MessageCircle, Home } from "lucide-react"

// Redes sociales de Villa Melania
const SOCIAL_LINKS = {
  instagram: "https://instagram.com/villamelaniabrothers_",
  facebook: "https://www.facebook.com/villa.melania.brothers",
  tiktok: "https://tiktok.com/@villamelaniabrothers",
  whatsapp: "https://wa.me/573138767093" //
}

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-foreground">Villa Melania</span>
              </div>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Tu finca de descanso ideal en Zarzal, Valle del Cauca. 
              Piscina, kiosko, cancha y mucho más para ti y tu familia.
            </p>
            <div className="flex gap-3">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="TikTok">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-foreground">Navegar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#la-finca" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  La Finca
                </Link>
              </li>
              <li>
                <Link href="/experiencias" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Experiencias
                </Link>
              </li>
              <li>
                <Link href="/paquetes" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link href="/#galeria" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Reservas */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-foreground">Reservas</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Reserva por días completos
              </li>
              <li className="text-sm text-muted-foreground">
                Alquiler por horas (pasadía)
              </li>
              <li className="text-sm text-muted-foreground">
                Paquetes con experiencias
              </li>
              <li className="text-sm text-muted-foreground">
                Eventos y celebraciones
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-foreground">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Zarzal, Valle del Cauca, Colombia
              </li>
              <li>
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  WhatsApp para reservas
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="h-4 w-4 text-primary" />
                  @villamelaniabrothers_
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 Villa Melania. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Hecho con amor en Zarzal, Valle del Cauca
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
