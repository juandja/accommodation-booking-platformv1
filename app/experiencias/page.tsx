import { Suspense } from "react"
import ExperienciasClient from "./ExperienciasClient"

export const dynamic = "force-dynamic"

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando experiencias...</div>}>
      <ExperienciasClient />
    </Suspense>
  )
}