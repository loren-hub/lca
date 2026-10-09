'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#tecnologia', label: 'Tecnología' },
  { href: '#faq', label: 'Preguntas Frecuentes' },
  { href: '#contacto', label: 'Contacto' },
]


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            LCA <span className="font-medium text-primary">Technology Solutions</span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="#contacto">Solicitar diagnóstico</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            className="p-1.5 text-foreground"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border/50 bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-4">
              <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                Solicitar diagnóstico
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
