"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Instagram, Facebook, MessageCircle } from "lucide-react"

// Redes sociales de Villa Melania
const SOCIAL_LINKS = {
  instagram: "https://instagram.com/villamelaniabrothers_",
  facebook: "https://www.facebook.com/villa.melania.brothers",
  tiktok: "https://tiktok.com/@villamelaniabrothers",
  whatsapp: "https://wa.me/3138767093"//
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Home className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-foreground">Villa Melania Brothers</span>
            <span className="text-xs text-muted-foreground">Zarzal, C/to Quebrada Nueva, Valle del Cauca</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/#la-finca" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            La Finca
          </Link>
          <Link href="/experiencias" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Experiencias
          </Link>
          <Link href="/paquetes" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Paquetes
          </Link>
          <Link href="/#contacto" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contacto
          </Link>
        </nav>

        {/* Desktop Social & CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label="TikTok">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
          </div>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Reservar
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link href="/#la-finca" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              La Finca
            </Link>
            <Link href="/experiencias" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Experiencias
            </Link>
            <Link href="/paquetes" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Paquetes
            </Link>
            <Link href="/#contacto" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Contacto
            </Link>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label="TikTok">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            </div>
            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Reservar por WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
