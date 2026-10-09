import { locations } from '@/lib/locations'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Problem } from '@/components/problem'
import { Services } from '@/components/services'
import { FAQ } from '@/components/faq'
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

  const title = `Ciberseguridad y Monitorización para PYMEs en ${locationData.name} | LCA`
  const description = `Servicios de ciberseguridad gestionada, SOC y copias de seguridad para empresas en ${locationData.name} (${locationData.province}). Auditoría inicial sin permanencia.`

  return {
    title,
    description,
    alternates: {
      canonical: `/ciberseguridad-en/${locationData.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'es_ES',
    },
    keywords: [
      `ciberseguridad ${locationData.name}`,
      `seguridad IT ${locationData.name}`,
      `auditoría informática ${locationData.name}`,
      `empresas ciberseguridad ${locationData.province}`,
      `protección de datos RGPD ${locationData.name}`,
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

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `LCA Technology Solutions - ${locationData.name}`,
    description: `Servicios de ciberseguridad y monitorización continua para empresas en ${locationData.name} (${locationData.province}).`,
    areaServed: {
      '@type': 'City',
      name: locationData.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: locationData.province,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <Header />
      <section className="pt-36 pb-20 bg-secondary/15 border-b border-border/50">
        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Migas de pan" className="mb-6 flex justify-center items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link href="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{locationData.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Ciberseguridad y soporte IT para empresas en {locationData.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Protegemos las cuentas, servidores y puestos de trabajo de las empresas de {locationData.name} ({locationData.province}) frente a ransomware, accesos no autorizados y pérdidas de información.
          </p>
          <div className="inline-flex items-center gap-3 rounded-full border border-border/80 bg-background/80 px-4 py-1.5 text-xs text-muted-foreground sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Atención técnica directa para empresas en {locationData.province}</span>
          </div>
        </div>
      </section>

      <Services />
      <Problem />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

