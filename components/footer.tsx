import Link from 'next/link'
import { Instagram, Linkedin } from 'lucide-react'

const footerLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#suit', label: 'Nuestra Suit' },
  { href: '#contacto', label: 'Contacto' },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/company/lca-ts/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.instagram.com/lca.technology.solutions/', label: 'Instagram', icon: Instagram },
]

const legalLinks = [
  { href: '/aviso-legal', label: 'Aviso Legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              LCA <span className="text-primary">Technology Solutions</span>
            </Link>
            <nav aria-label="Navegación principal" className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
            <nav aria-label="Redes sociales" className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </nav>
            <nav aria-label="Enlaces legales" className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-sm text-muted-foreground sm:text-base">
              &copy; {new Date().getFullYear()} LCA Technology Solutions. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
