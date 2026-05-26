import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { JsonLdScript } from '@/components/json-ld'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'LCA Technology Solutions | Ciberseguridad Monitorizada para PYMEs',
  description:
    'Monitorización, auditoría y reporte de seguridad IT para PYMEs en España. Supervisión continua de accesos, actualizaciones y políticas de seguridad.',
  keywords: [
    'ciberseguridad PYMEs',
    'monitorización seguridad',
    'auditoría it',
    'protección de datos',
    'seguridad gestionada españa',
    'soc para PYMEs',
  ],
  authors: [{ name: 'LCA Technology Solutions' }],
  openGraph: {
    title: 'LCA Technology Solutions | Ciberseguridad Monitorizada para PYMEs',
    description:
      'Monitorización, auditoría y reporte de seguridad IT para PYMEs en España. Supervisión continua y protocolos de respuesta.',
    type: 'website',
    locale: 'es_ES',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f7f9fa',
  width: 'device-width',
  initialScale: 1,
}

import { ThemeProvider } from '@/components/theme-provider'
import { CookieBanner } from '@/components/cookie-banner'

export const dynamic = 'force-static'
export const revalidate = 3600

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded bg-primary px-4 py-2 font-semibold text-primary-foreground"
          >
            Saltar al contenido
          </a>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <CookieBanner />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
