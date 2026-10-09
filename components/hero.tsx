import Link from 'next/link'
import Image from 'next/image'
import { Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getSectionContent, HeroContent } from '@/lib/content'

export function Hero() {
  const content = getSectionContent<HeroContent>('hero')

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
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-4 py-1.5 text-xs text-muted-foreground sm:text-sm">
          <Shield className="h-4 w-4 text-primary" />
          <span>{content.badge}</span>
        </div>

        <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {content.title}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
          {content.subtitle}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
            <Link href={content.ctaPrimary.href}>{content.ctaPrimary.text}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
            <Link href={content.ctaSecondary.href}>{content.ctaSecondary.text}</Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground sm:text-sm">
          {content.trustPoints.map((point) => (
            <span key={point} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
