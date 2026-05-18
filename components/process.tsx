const steps = [
  {
    number: '01',
    title: 'Instalación y puesta en marcha',
    description:
      'Desplegamos Wazuh en tus dispositivos y lo conectamos al servidor central. Sin interrupciones. En menos de 48 h tu entorno ya está vigilado.',
  },
  {
    number: '02',
    title: 'Monitoreo continuo',
    description:
      'Recogemos logs de todos tus sistemas en tiempo real: Windows, Microsoft 365 y red. Cualquier cambio o acceso anómalo queda registrado.',
  },
  {
    number: '03',
    title: 'Alertas inteligentes',
    description:
      'Cuando algo no cuadre, recibemos una alerta inmediata. Accesos fuera de horario, intentos de login fallidos, IPs desconocidas. Solo lo que importa.',
  },
  {
    number: '04',
    title: 'Respuesta ante un ataque',
    description:
      'Si se detecta un intento real, aislamos el equipo afectado, te notificamos con contexto claro y ejecutamos el protocolo de respuesta acordado.',
  },
]

export function Process() {
  return (
    <section id="proceso" className="border-y border-border bg-secondary/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary sm:text-base">Proceso</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Cómo trabajamos con cada cliente
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="mb-4 font-mono text-4xl font-bold text-primary/20">{step.number}</div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
