import {
  MailWarning,
  ShieldCheck,
  FileLock2,
  Mail,
  Users,
  FileText,
  FileSpreadsheet,
  Presentation,
  Cloud,
  Globe,
  Laptop
} from 'lucide-react'

const metrics = [
  {
    value: '31%',
    subtitle: 'PyMEs bajo Amenaza',
    description: 'Uno de cada tres incidentes de seguridad global afecta directamente a las PyMEs. El uso de filtros con IA bloquea los intentos de suplantación antes de que toquen tu bandeja de entrada.',
    icon: MailWarning,
  },
  {
    value: '99%',
    subtitle: 'Bloqueo con MFA',
    description: 'El robo de credenciales mediante contraseñas débiles representa la mayor vulnerabilidad corporativa. Activar la autenticación de doble factor frena el 99% de estos ataques.',
    icon: ShieldCheck,
  },
  {
    value: '0%',
    subtitle: 'Estrategia Zero Trust',
    description: 'El software no puede garantizar el "riesgo cero", pero la arquitectura Zero Trust elimina los accesos implícitos. Así, cualquier anomalía se aísla de inmediato para que un error humano no paralice tu actividad ni comprometa tus datos.',
    icon: FileLock2,
  },
]

const msApps = [
  { name: 'Outlook', icon: Mail, color: 'text-[#0078d4] bg-[#0078d4]/10' },
  { name: 'Teams', icon: Users, color: 'text-[#6264a7] bg-[#6264a7]/10' },
  { name: 'Word', icon: FileText, color: 'text-[#185abd] bg-[#185abd]/10' },
  { name: 'Excel', icon: FileSpreadsheet, color: 'text-[#107c41] bg-[#107c41]/10' },
  { name: 'PowerPoint', icon: Presentation, color: 'text-[#c43e1c] bg-[#c43e1c]/10' },
  { name: 'OneDrive', icon: Cloud, color: 'text-[#0078d4] bg-[#0078d4]/10' },
  { name: 'SharePoint', icon: Globe, color: 'text-[#0078d4] bg-[#0078d4]/10' },
  { name: 'Defender', icon: ShieldCheck, color: 'text-[#008272] bg-[#008272]/10' },
  { name: 'Intune', icon: Laptop, color: 'text-[#0078d4] bg-[#0078d4]/10' },
]

export function About() {
  return (
    <section id="nosotros" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary sm:text-base">Nosotros</p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Las herramientas que utilizamos
          </h2>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed sm:text-lg">
            <p>
              Toda nuestra gestión está centralizada en <strong className="font-semibold text-foreground">Microsoft 365 Business</strong>. Elegimos su plataforma profesional por una razón muy sencilla: las pequeñas empresas sufren hoy más del 30% de los ciberataques globales. Esta herramienta nos da el blindaje necesario para que la información de tu entorno esté totalmente protegida frente a las amenazas modernas.
            </p>
            <p>
              Esto significa que cuando gestionamos tus documentos o nos comunicamos contigo, lo hacemos dentro de un entorno cerrado y vigilado. Aplicamos el mismo estándar de seguridad que utilizan las grandes empresas, pero adaptado específicamente para cuidar la continuidad, los datos y el día a día de tu negocio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="flex flex-col p-8 rounded-2xl bg-muted/40 border border-border/50">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{metric.value}</h3>
                <h4 className="mb-4 text-lg font-semibold text-foreground">{metric.subtitle}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{metric.description}</p>
              </div>
            )
          })}
        </div>

        {/* Microsoft 365 Suite Carousel */}
        <div className="border-t border-border/40 pt-16">
          <div className="relative w-full overflow-hidden py-4">
            <div className="flex gap-6 animate-marquee-slow whitespace-nowrap">
              {/* Double array to loop seamlessly */}
              {[...msApps, ...msApps].map((app, index) => {
                const Icon = app.icon
                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-border/50 bg-card select-none shrink-0"
                  >
                    <div className={`p-2 rounded-lg ${app.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-foreground text-sm tracking-tight">{app.name}</span>
                  </div>
                )
              })}
            </div>
            {/* Soft gradient masks on left/right for smooth fade effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>

          {/* Trademark Disclaimer */}
          <div className="mt-10 text-center border-t border-border/20 pt-6">
            <p className="text-[10px] sm:text-xs text-muted-foreground/50 leading-relaxed max-w-3xl mx-auto">
              * Microsoft 365 y sus marcas/iconos asociados son propiedad de Microsoft Corporation. Su mención e inclusión visual se realiza exclusivamente con carácter informativo y de referencia sobre la tecnología empleada en nuestro entorno de trabajo, sin que esto constituya o implique patrocinio, aprobación, respaldo o asociación alguna de Microsoft Corporation con nuestra empresa o sitio web.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
