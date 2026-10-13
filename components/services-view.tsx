'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Shield, BookOpen, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import type { ServicesContent, ServiceItem } from '@/lib/content'

const iconMap = {
  Shield,
  BookOpen,
  Globe,
}

function ServiceCard({
  service,
}: {
  service: ServiceItem
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Shield

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5 min-h-full">
      <div>
        {/* Cabecera de imagen */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-border/40">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-background/90 backdrop-blur-md shadow-md border border-border/40">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>

        <div className="p-6 sm:p-7 pt-6">
          <p className="mb-1 text-xs font-semibold text-primary">{service.subtitle}</p>
          <h3 className="mb-3 text-xl font-bold text-foreground leading-snug">{service.title}</h3>
          <p className="mb-6 text-sm text-muted-foreground sm:text-base leading-relaxed">{service.description}</p>

          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
            Qué incluye:
          </p>

          <ul className="space-y-3.5">
            {service.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 sm:p-7 pt-0">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between border-t border-border/60 pt-4 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <span>{isExpanded ? 'Ocultar caso real' : 'Ver caso real'}</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {isExpanded && (
          <div className="mt-4 rounded-xl bg-secondary/50 p-4 border border-border/50">
            <p className="text-xs text-muted-foreground leading-relaxed sm:text-sm">{service.caso}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export function ServicesView({ content }: { content: ServicesContent }) {
  return (
    <section id="servicios" className="px-6 py-24 md:py-32">
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

        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {content.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8">
          <h3 className="mb-2 text-xl font-bold text-foreground">
            {content.additionalSection.title}
          </h3>
          <p className="mb-6 text-sm text-muted-foreground">
            {content.additionalSection.subtitle}
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {content.additionalSection.services.map((item, i) => (
              <div key={i} className="flex flex-col justify-start">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">{item.name}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed sm:text-sm pl-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
