import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Ambient background image */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.08] select-none">
        <Image
          src="/images/hero-bg.png"
          alt="LCA Technology Solutions Cyber Security"
          fill
          priority
          className="object-cover filter blur-[2px]"
        />
        {/* Soft radial overlay to vignette the background image */}
        <div className="absolute inset-0 bg-radial from-transparent via-background/50 to-background" />
      </div>

      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient accent */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-[0.8rem] text-muted-foreground sm:text-sm">
          <Shield className="h-4 w-4 text-primary" />
          <span>Ciberseguridad monitorizada para PYMEs</span>
        </div>

        <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Seguridad IT para empresas{' '}
          <span className="text-primary">que no tienen departamento IT</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg md:text-xl">
          LCA monitoriza y reporta sobre la seguridad de tu infraestructura de forma continua. Monitoreo y protección de entornos, continuidad con respaldos y soporte web completo.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <Link href="#contacto">
              Contactar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#servicios">Ver servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
