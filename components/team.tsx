import { Linkedin } from 'lucide-react'

const team = [
  {
    name: 'Miguel Ángel Acosta',
    role: 'Director ejecutivo',
    description:
      'Responsable de la estrategia empresarial, desarrollo comercial, portfolio de servicios y coordinación general de la compañía. Participa activamente en el área SOC, definiendo servicios de monitorización, respuesta ante incidentes y ciberseguridad defensiva orientada a empresas.',
    linkedin: 'https://www.linkedin.com/in/miguelaacostac/',
    image: '/images/team/miguel-acosta.jpg',
  },
  {
    name: 'Brayan Carrión',
    role: 'Responsable legal y de cumplimiento',
    description:
      'Responsable del marco legal, documental y normativo de LCA Technology Solutions. Participa también en el área SOC, aportando visión de cumplimiento, gestión del riesgo, trazabilidad de incidentes y protección de datos.',
    linkedin: 'https://www.linkedin.com/in/carrmartzbrayan',
    image: '/images/team/brayan-carrion.jpg',
  },
  {
    name: 'Rubén López',
    role: 'Responsable de tecnología',
    description:
      'Responsable de la arquitectura técnica, infraestructura, backups, NAS, almacenamiento y continuidad operativa. Su misión es garantizar soluciones tecnológicas seguras, estables y escalables para proteger la información de los clientes.',
    linkedin: 'https://www.linkedin.com/in/lopezmontano',
    image: '/images/team/ruben-lopez.jpg',
  },
]

export function Team() {
  return (
    <section id="equipo" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary sm:text-base">Equipo</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            El equipo
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="relative rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <div className="mb-4">
                <div className="mb-4 flex h-110 w-full items-center justify-center overflow-hidden rounded-lg bg-muted">
                  <img
                    src={member.image}
                    alt={`${member.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
                  <p className="font-mono text-sm text-primary sm:text-base">{member.role}</p>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
