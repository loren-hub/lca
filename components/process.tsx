import Image from 'next/image'
import { getSectionContent, ProcessContent } from '@/lib/content'

export function Process() {
  const content = getSectionContent<ProcessContent>('process')

  return (
    <section id="proceso" className="relative border-y border-border/60 bg-secondary/15 px-6 py-24 md:py-32 overflow-hidden">
      {/* Ambient background image */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.04] select-none scale-x-[-1] rotate-180">
        <Image
          src="/images/process-bg.png"
          alt="Detalle tecnológico del proceso de ciberseguridad LCA"
          fill
          className="object-cover filter blur-[3px]"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-background/40 to-background" />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-medium text-primary">{content.badge}</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between p-7 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/5"
            >
              <div>
                <div className="mb-6 font-mono text-3xl font-bold text-primary/40 tracking-tight">{step.number}</div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
