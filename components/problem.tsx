import Image from 'next/image'
import { KeyRound, Database, ShieldAlert, Laptop } from 'lucide-react'
import { getSectionContent, ProblemContent } from '@/lib/content'

const iconMap = {
  KeyRound,
  Database,
  ShieldAlert,
  Laptop,
}

export function Problem() {
  const content = getSectionContent<ProblemContent>('problem')

  return (
    <section id="problema" className="border-y border-border/60 bg-secondary/20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-medium text-primary">{content.badge}</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Ilustración izquierda */}
          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card lg:col-span-5 min-h-[300px] lg:min-h-full aspect-video lg:aspect-auto">
            <Image
              src="/images/problem-illustration.png"
              alt="Monitorización de servidores y seguridad en entorno empresarial"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          </div>

          {/* Tarjetas de problemas derecha */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {content.problems.map((problem) => {
              const Icon = iconMap[problem.icon as keyof typeof iconMap] || ShieldAlert
              return (
                <div
                  key={problem.id}
                  className="group relative flex flex-col justify-start rounded-xl border border-border/70 bg-card p-6 sm:p-7 transition-all duration-300 hover:border-primary/40 hover:bg-card/90"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
