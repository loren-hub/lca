import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit } from '@/lib/rate-limit'
import { notificationEmail, confirmationEmail } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

// Get client IP from request headers
function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request)
  const { allowed, retryAfter } = rateLimit(clientIp)

  if (!allowed) {
    return NextResponse.json(
      { error: `Demasiados intentos. Espera ${retryAfter} segundos.` },
      { status: 429 }
    )
  }

  try {
    const { name, email, phone, company, service, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nombre, email y mensaje son requeridos' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Formato de email inválido' }, { status: 400 })
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 })
    }

    // Send notification email to LCA
    const notification = notificationEmail({ name, email, phone, company, service, message })
    await resend.emails.send({
      from: 'LCA <contact@contact.lcatechnologysolutions.com>',
      to: [
        'b.carrion@lcatechnologysolutions.com',
        'r.lopez@lcatechnologysolutions.com',
        'm.acosta@lcatechnologysolutions.com',
      ],
      subject: notification.subject,
      html: notification.html,
    })

    // Send confirmation email to the user
    const confirmation = confirmationEmail(name, message)
    await resend.emails.send({
      from: 'LCA <contact@contact.lcatechnologysolutions.com>',
      to: [email],
      subject: confirmation.subject,
      html: confirmation.html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' },
      { status: 500 }
    )
  }
}
