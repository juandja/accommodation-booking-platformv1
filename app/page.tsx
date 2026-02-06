import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FincaSection } from "@/components/finca-section"
import { ExperiencesSection } from "@/components/experiences-section"
import { PackagesSection } from "@/components/packages-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FincaSection />
        <ExperiencesSection />
        <PackagesSection />
      </main>
      <Footer />
    </div>
  )
}
