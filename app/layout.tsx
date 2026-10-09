import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { JsonLdScript } from '@/components/json-ld'
import { ThemeProvider } from '@/components/theme-provider'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lcatechnologysolutions.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: 'LCA Technology Solutions | Ciberseguridad Monitorizada para PYMEs',
  description:
    'Monitorización continua, auditoría técnica y respuesta preventiva ante ciberamenazas para PYMEs en España. Sin permanencia ni complejidad innecesaria.',
  keywords: [
    'ciberseguridad PYMEs',
    'monitorización seguridad informática',
    'auditoría IT empresas',
    'protección de datos RGPD',
    'seguridad gestionada españa',
    'soc para PYMEs',
  ],
  authors: [{ name: 'LCA Technology Solutions' }],
  openGraph: {
    title: 'LCA Technology Solutions | Ciberseguridad Monitorizada para PYMEs',
    description:
      'Monitorización continua, auditoría técnica y respuesta preventiva ante ciberamenazas para PYMEs en España.',
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'LCA Technology Solutions',
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
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#004052',
  width: 'device-width',
  initialScale: 1,
}

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
        <JsonLdScript />
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

