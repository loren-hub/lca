'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Shield, BookOpen, Globe, ChevronDown, ChevronUp } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Monitoreo y Protección de Entornos',
    subtitle: 'Seguridad activa para tus sistemas',
    image: '/images/service-monitoring.png',
    description:
      'Supervisamos tus equipos y software para que el día a día no se detenga por fallos técnicos o accesos indebidos.',
    bullets: [
      { text: 'Monitoreo de equipos: controlamos actualizaciones, antivirus y vulnerabilidades.' },
      { text: 'Gestión de identidades: configuración de doble factor (MFA) para evitar suplantaciones en entornos como Microsoft 365 o Google Workspace.', pdf: true },
      { text: 'Control de acceso: supervisamos inicios de sesión sospechosos y bloqueos de seguridad.', pdf: true },
      { text: 'Gestión de aplicaciones: validación y actualización de software administrativo como Autofirma para tus trámites con la Administración.', pdf: true },
    ],
    caso: 'Una empresa de 12 personas lleva usando la misma contraseña de administrador en el router desde que lo instaló el operador hace tres años. El antivirus lleva sin actualizarse porque "siempre sale un aviso". Con este servicio, esos riesgos se detectan y se reportan en el diagnóstico inicial para su corrección inmediata.',
  },
  {
    icon: BookOpen,
    title: 'Continuidad, Respaldo y Formación',
    subtitle: 'Resiliencia ante imprevistos',
    image: '/images/service-backup.png',
    description:
      'Si ocurre un problema, tenemos la estrategia y las herramientas para que la información siga disponible.',
    bullets: [
      { text: 'Backups gestionados: copias de seguridad de OneDrive, SharePoint o servidores, con validación periódica.', pdf: true },
      { text: 'Simulacros de phishing: entrenamos a tu equipo para detectar correos fraudulentos antes de que hagan clic.', pdf: true },
      { text: 'Píldoras formativas: sesiones breves de ciberseguridad adaptadas al día a día de tu plantilla.', pdf: false },
      { text: 'Protocolos de actuación: guías documentadas ante situaciones críticas (ransomware, pérdida de dispositivos).', pdf: true },
    ],
    caso: 'Un empleado de una gestoría introduce sus credenciales en un sitio de phishing. El atacante accede a su buzón desde el extranjero a las 2 de la mañana. Con este servicio, la alerta de acceso inusual se reporta de inmediato al responsable técnico para su bloqueo antes de que se produzca una fuga de datos.',
  },
  {
    icon: Globe,
    title: 'Soporte y Mantenimiento Web',
    subtitle: 'Tu sitio web siempre operativo',
    image: '/images/service-support.png',
    description:
      'Nos ocupamos de que tu web esté actualizada y funcionando correctamente para tus clientes.',
    bullets: [
      { text: 'Mantenimiento técnico de WordPress: actualización de plugins y núcleo para cerrar brechas de seguridad.', pdf: true },
      { text: 'Monitoreo de disponibilidad: control constante para detectar caídas del servidor.', pdf: true },
      { text: 'Copias de seguridad externas de tu base de datos y diseño web.', pdf: true },
      { text: 'Soporte operativo: gestión de cambios en textos, imágenes o formularios de contacto.', pdf: true },
    ],
    caso: 'La web de una clínica médica queda inaccesible tras la actualización automática de un plugin de WordPress, impidiendo a los pacientes reservar citas. Con nuestro servicio de soporte y monitoreo, detectamos la caída al instante, revertimos el cambio a la última copia de seguridad funcional en minutos y planificamos la actualización de forma segura.',
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:bg-card/85 hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between min-h-full">
      <div>
        {/* Cabecera de imagen */}
        <div className="relative w-full aspect-video overflow-hidden border-b border-border/40">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Icono e índice flotantes */}
          <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-background/90 backdrop-blur-sm shadow-md border border-border/30">
            <service.icon className="h-5 w-5 text-primary" />
          </div>
          <span className="absolute top-4 right-4 font-mono text-[0.8rem] text-foreground bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-md border border-border/30">0{index + 1}</span>
        </div>

        <div className="p-6 sm:p-8 pt-6">
          <h3 className="mb-1 text-xl font-semibold text-foreground leading-snug">{service.title}</h3>
          <p className="mb-4 text-xs font-semibold text-primary uppercase tracking-wider">{service.subtitle}</p>
          <p className="mb-6 text-sm text-muted-foreground sm:text-base leading-relaxed">{service.description}</p>

          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
            Puntos clave:
          </p>

          <ul className="mb-2 space-y-4">
            {service.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">
                  {bullet.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 sm:p-8 pt-0">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between border-t border-border pt-4 text-sm text-primary transition-colors hover:text-primary/80 sm:text-base"
        >
          <span>Ver caso real</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {isExpanded && (
          <div className="mt-4 rounded-lg bg-secondary/50 p-4">
            <p className="text-sm text-muted-foreground italic leading-relaxed sm:text-base">{service.caso}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function AdditionalServices() {
  const additional = [
    {
      name: 'Gestión de Altas y Bajas',
      description:
        'Administración centralizada de usuarios, reseteo de accesos y migración de datos entre empleados.',
      pdf: true,
    },
    {
      name: 'Inventario y Auditoría de Activos',
      description:
        'Informe detallado de tu parque informático, licencias y estado del hardware para evitar compras innecesarias.',
      pdf: true,
    },
    {
      name: 'Cumplimiento Documental',
      description:
        'Documentación técnica obligatoria (políticas de seguridad, registros de incidentes y protocolos).',
      pdf: true,
    },
  ]

  return (
    <div className="mt-12 rounded-lg border border-border bg-card/50 p-6 sm:p-8">
      <h3 className="mb-6 text-lg font-semibold text-foreground sm:text-xl">
        Servicios adicionales
      </h3>
      <ul className="space-y-6">
        {additional.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <div>
              <p className="mb-1 font-medium text-foreground sm:text-base">{item.name}</p>
              <p className="text-sm text-muted-foreground sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Services() {
  return (
    <section id="servicios" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary sm:text-base">Servicios</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Tres servicios. Ninguno es opcional si quieres una base sólida.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 items-start">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <AdditionalServices />
      </div>
    </section>
  )
}
