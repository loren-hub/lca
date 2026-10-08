import { locations } from '@/lib/locations'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Problem } from '@/components/problem'
import { Services } from '@/components/services'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'


interface Props {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    location: loc.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const locationData = locations.find((l) => l.slug === resolvedParams.location)
  
  if (!locationData) {
    return {}
  }

  return {
    title: `Ciberseguridad para PYMEs en ${locationData.name} | LCA`,
    description: `Servicios de ciberseguridad, monitorización y auditoría IT para empresas y PYMEs en ${locationData.name} (${locationData.province}). Protege tu negocio con LCA Technology Solutions.`,
    keywords: [
      `ciberseguridad ${locationData.name}`,
      `seguridad IT ${locationData.name}`,
      `auditoría ciberseguridad ${locationData.name}`,
      `empresas ciberseguridad ${locationData.province}`,
      `protección de datos ${locationData.name}`,
      `soc para PYMEs ${locationData.name}`,
    ],
  }
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params
  const locationData = locations.find((l) => l.slug === resolvedParams.location)

  if (!locationData) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Servicios de Ciberseguridad en <span className="text-primary">{locationData.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Protegemos a las PYMEs de {locationData.name} ({locationData.province}) contra las últimas amenazas digitales. Monitorización 24/7, auditoría y respuesta a incidentes.
          </p>
        </div>
      </main>
      
      <Services />
      <Problem />
      <Contact />
      <Footer />
    </>
  )
}
