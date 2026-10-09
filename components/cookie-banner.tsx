'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Cookie } from 'lucide-react'

const emptySubscribe = () => () => {}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  useEffect(() => {
    let consent: string | null = null
    try {
      consent = localStorage.getItem('lca-cookie-consent')
    } catch {
      // localStorage is disabled or not accessible in sandbox
    }

    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('lca-cookie-consent', 'accepted')
    } catch {
      // localStorage not accessible
    }
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    try {
      localStorage.setItem('lca-cookie-consent', 'rejected')
    } catch {
      // localStorage not accessible
    }
    setIsVisible(false)
  }

  if (!isMounted || !isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-sm p-5 rounded-2xl bg-background/95 border border-border/60 shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-0 opacity-100 animate-in fade-in slide-in-from-bottom-5">
      <div className="flex gap-4">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 self-start">
          <Cookie className="h-5 w-5" />
        </div>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-foreground text-sm tracking-tight">Política de Cookies</h4>
            <p className="text-xs text-muted-foreground leading-normal mt-1.5">
              Utilizamos cookies básicas para analizar el rendimiento de nuestra web. Puedes aceptar todas o rechazarlas según tus preferencias. Consulta nuestra{' '}
              <Link href="/cookies" className="text-primary hover:underline font-medium">
                política de cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-2 w-full pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRejectAll}
              className="flex-1 text-xs h-8 cursor-pointer"
            >
              Rechazar
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleAcceptAll}
              className="flex-1 text-xs h-8 cursor-pointer"
            >
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
