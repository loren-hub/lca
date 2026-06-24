import Image from 'next/image'

const problems = [
  {
    text: 'Un empleado usa la misma contraseña en el correo corporativo de Microsoft 365 y en tres servicios externos. Las credenciales aparecen en una lista pública.',
  },
  {
    text: 'El último backup completo del servidor tiene cuatro meses. El disco donde se guardaban las copias diarias falló hace seis semanas.',
  },
  {
    text: 'Hay tres vulnerabilidades críticas parcheadas por Microsoft en los últimos cinco meses. Ninguna se ha aplicado.',
  },
  {
    text: 'Un empleado accede al Google Workspace de la empresa desde un país de Europa del Este a las 3 de la mañana.',
  },
]

export function Problem() {
  return (
    <section id="problema" className="border-y border-border bg-secondary/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary sm:text-base">
            El contexto
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Qué ocurre cuando no hay nadie mirando
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Ilustración de stock izquierda */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-card lg:col-span-5 min-h-[300px] lg:min-h-full aspect-video lg:aspect-auto">
            <Image
              src="/images/problem-illustration.png"
              alt="Sala de servidores de ciberseguridad monitorizada"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Gradiente sutil verde/oscuro sobre la imagen */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>

          {/* Tarjetas de problemas derecha */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative rounded-lg border border-border bg-card p-6 sm:p-8 transition-colors hover:border-primary/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-[0.8rem] text-muted-foreground sm:text-sm">0{index + 1}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
