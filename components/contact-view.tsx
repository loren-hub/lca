'use client'

import { useRef, useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import type { ContactContent } from '@/lib/content'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactView({ content }: { content: ContactContent }) {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const contentType = response.headers.get('content-type')
        let errorMessage: string

        if (contentType && contentType.includes('application/json')) {
          const result = await response.json()
          errorMessage = result.error || 'Error al enviar el mensaje'
        } else {
          const text = await response.text()
          errorMessage = text.slice(0, 200).includes('<!DOCTYPE')
            ? 'Error del servidor. Por favor, intenta nuevamente.'
            : 'Error al enviar el mensaje'
        }

        throw new Error(errorMessage)
      }

      setStatus('success')
      formRef.current?.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje')
    }
  }

  return (
    <section id="contacto" className="border-t border-border/60 bg-secondary/20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-sm font-medium text-primary">{content.badge}</span>
            <h2 className="mt-2 mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {content.title}
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg leading-relaxed mb-8">
              {content.subtitle}
            </p>

            <div className="space-y-6 pt-4 border-t border-border/40">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                  Atención directa
                </p>
                <a
                  href={`tel:${content.phone.replace(/\s+/g, '')}`}
                  className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {content.phone}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                  Correo electrónico
                </p>
                <a
                  href={`mailto:${content.email}`}
                  className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {content.email}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                  Horario técnico
                </p>
                <p className="text-sm text-muted-foreground">
                  {content.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Mensaje recibido con éxito</h3>
                <p className="text-muted-foreground max-w-md">
                  Uno de nuestros técnicos revisará tu consulta y te responderá en menos de 24 horas laborables.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre y apellidos</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email corporativo</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@empresa.com"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono de contacto</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Nombre de tu empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Empresa o actividad"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">¿Qué servicio o duda te interesa consultar?</Label>
                  <select
                    id="service"
                    name="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={status === 'loading'}
                  >
                    <option value="">Selecciona un área de interés</option>
                    {content.serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cuéntanos sobre tu situación actual</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="¿Cuántos puestos o empleados sois? ¿Qué sistemas utilizáis (Microsoft 365, Google, servidores locales)? ¿Habéis tenido algún incidente reciente?"
                    rows={4}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    required
                    className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                    disabled={status === 'loading'}
                  />
                  <label htmlFor="privacy-policy" className="text-xs text-muted-foreground leading-normal">
                    He leído y acepto la{' '}
                    <a href="/privacidad" target="_blank" className="text-primary underline hover:text-primary/80">
                      política de privacidad
                    </a>{' '}
                    para el tratamiento de mis datos de contacto.
                  </label>
                </div>

                {status === 'error' && (
                  <div
                    className="flex items-center gap-2 text-sm text-destructive"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full gap-2 h-12 text-base font-semibold" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    'Enviando consulta...'
                  ) : (
                    <>
                      {content.submitButtonText}
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
