import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Instalación y puesta en marcha',
    description:
      'Desplegamos el software en tus dispositivos y lo conectamos a nuestra infraestructura.',
  },
  {
    number: '02',
    title: 'Monitoreo continuo',
    description:
      'Recogemos información de todos tus sistemas en tiempo real: Windows, Microsoft 365 y red.',
  },
  {
    number: '03',
    title: 'Alertas inteligentes',
    description:
      'Cuando algo no cuadre, recibemos una alerta inmediata.',
  },
  {
    number: '04',
    title: 'Respuesta ante un ataque',
    description:
      'Si se detecta un intento real ejecutamos el protocolo de respuesta acordado.',
  },
]

export function Process() {
  return (
    <section id="proceso" className="relative border-y border-border bg-secondary/20 px-6 py-24 md:py-32 overflow-hidden">
      {/* Ambient background image (intercalated variant) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.05] select-none scale-x-[-1] rotate-180">
        <Image
          src="/images/process-bg.png"
          alt="LCA Process Cyber Security Tech Detail"
          fill
          className="object-cover filter blur-[3px]"
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-background/40 to-background" />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary sm:text-base">Proceso</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Cómo trabajamos con cada cliente
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative p-6 rounded-xl border border-border/30 bg-card/25 backdrop-blur-[2px] transition-colors hover:border-primary/20">
              <div className="mb-4 font-mono text-4xl font-bold text-primary/30">{step.number}</div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground sm:text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
