import Image from 'next/image'
import {
  MailWarning,
  ShieldCheck,
  Clock,
  Mail,
  Users,
  FileText,
  FileSpreadsheet,
  Presentation,
  Cloud,
  Globe,
  Laptop
} from 'lucide-react'
import { getSectionContent, TechnologyContent } from '@/lib/content'

const metricIconMap = {
  MailWarning,
  ShieldCheck,
  Clock,
}

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
  const content = getSectionContent<TechnologyContent>('technology')

  return (
    <section id="tecnologia" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-sm font-medium text-primary">{content.badge}</span>
            <h2 className="mt-2 mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {content.title}
            </h2>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed sm:text-lg">
              {content.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card lg:col-span-5 aspect-video sm:aspect-[4/3] lg:aspect-square">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-20">
          {content.metrics.map((metric) => {
            const Icon = metricIconMap[metric.icon as keyof typeof metricIconMap] || ShieldCheck
            return (
              <div key={metric.subtitle} className="flex flex-col p-8 rounded-2xl bg-secondary/30 border border-border/70">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{metric.value}</div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{metric.subtitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{metric.description}</p>
              </div>
            )
          })}
        </div>

        {/* Carousel */}
        <div className="border-t border-border/40 pt-16">
          <div className="mb-6 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              {content.carouselLabel}
            </p>
          </div>
          <div className="relative w-full overflow-hidden py-4">
            <div className="flex gap-6 animate-marquee-slow whitespace-nowrap">
              {[...msApps, ...msApps].map((app, index) => {
                const Icon = app.icon
                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-border/60 bg-card select-none shrink-0"
                  >
                    <div className={`p-2 rounded-lg ${app.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-foreground text-sm tracking-tight">{app.name}</span>
                  </div>
                )
              })}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>

          <div className="mt-8 text-center border-t border-border/20 pt-6">
            <p className="text-[11px] text-muted-foreground/60 leading-relaxed max-w-3xl mx-auto">
              {content.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
