interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

export function notificationEmail(data: ContactFormData) {
  const { name, email, phone, company, service, message } = data

  return {
    subject: `Nuevo contacto: ${name}${company ? ` - ${company}` : ''}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo mensaje de contacto</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f9fa; font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f9fa;">
    <tr>
      <td align="center" style="padding: 48px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">

                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 32px; border-bottom: 1px solid #f1f5f9;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #64748b;">
                              LCA Technology Solutions
                            </p>
                          </td>
                          <td align="right">
                            <span style="display: inline-block; background-color: #009F93; color: #ffffff; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; padding: 4px 12px; border-radius: 999px;">
                              NUEVO
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Title -->
                  <tr>
                    <td style="padding: 32px 40px 0;">
                      <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #0f172a; letter-spacing: -0.02em;">
                        Nuevo mensaje de contacto
                      </h1>
                      <p style="margin: 8px 0 0; font-size: 14px; color: #475569;">
                        Alguien ha completado el formulario de contacto.
                      </p>
                    </td>
                  </tr>

                  <!-- Contact Info -->
                  <tr>
                    <td style="padding: 24px 40px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <tr>
                          <td style="padding: 24px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                              <tr>
                                <td style="padding: 8px 0; color: #64748b; width: 90px; vertical-align: top; font-size: 13px;">
                                  Nombre
                                </td>
                                <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">
                                  ${name}
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">
                                  Email
                                </td>
                                <td style="padding: 8px 0; color: #0f172a;">
                                  <a href="mailto:${email}" style="color: #009F93; text-decoration: none; font-weight: 500;">${email}</a>
                                </td>
                              </tr>
                              ${phone ? `
                              <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">
                                  Teléfono
                                </td>
                                <td style="padding: 8px 0; color: #0f172a;">
                                  <a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>
                                </td>
                              </tr>
                              ` : ''}
                              ${company ? `
                              <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">
                                  Empresa
                                </td>
                                <td style="padding: 8px 0; color: #0f172a;">
                                  ${company}
                                </td>
                              </tr>
                              ` : ''}
                              ${service ? `
                              <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">
                                  Servicio
                                </td>
                                <td style="padding: 8px 0; color: #0f172a;">
                                  ${service}
                                </td>
                              </tr>
                              ` : ''}
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td style="padding: 0 40px 32px;">
                      <p style="margin: 0 0 12px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; color: #009F93;">
                        Mensaje
                      </p>
                      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #009F93; border-radius: 8px; padding: 20px;">
                        <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #334155; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; border-top: 1px solid #e2e8f0; background-color: #f8fafc;">
                      <p style="margin: 0 0 4px; font-size: 12px; color: #64748b;">
                        Enviado desde lcatechnologysolutions.com
                      </p>
                      <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                        ${new Date().toLocaleString('es-ES', { dateStyle: 'long', timeStyle: 'medium' })}
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
    `,
  }
}

export function confirmationEmail(name: string, message: string) {
  return {
    subject: 'Gracias por contactarnos - LCA',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gracias por contactarnos</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f9fa; font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f9fa;">
    <tr>
      <td align="center" style="padding: 48px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">

                  <!-- Header with accent bar -->
                  <tr>
                    <td style="padding: 0;">
                      <div style="height: 4px; background: linear-gradient(90deg, #009F93 0%, #0A2E36 100%);"></div>
                    </td>
                  </tr>

                  <!-- Logo area -->
                  <tr>
                    <td style="padding: 40px 40px 0; text-align: center;">
                      <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #64748b;">
                        LCA Technology Solutions
                      </p>
                    </td>
                  </tr>

                  <!-- Success icon -->
                  <tr>
                    <td style="padding: 24px 0 0; text-align: center;">
                      <div style="display: inline-block; width: 56px; height: 56px; background-color: rgba(0, 159, 147, 0.1); border: 1px solid rgba(0, 159, 147, 0.25); border-radius: 50%; text-align: center; line-height: 56px;">
                        <span style="font-size: 24px; color: #009F93;">✓</span>
                      </div>
                    </td>
                  </tr>

                  <!-- Title -->
                  <tr>
                    <td style="padding: 24px 40px 0; text-align: center;">
                      <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #0f172a; letter-spacing: -0.02em;">
                        Gracias por contactarnos, ${name}
                      </h1>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding: 16px 40px 0; text-align: center;">
                      <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #475569;">
                        Hemos recibido tu mensaje y te responderemos en menos de 24 horas laborables.
                      </p>
                    </td>
                  </tr>

                  <!-- Your message recap -->
                  <tr>
                    <td style="padding: 32px 40px 0;">
                      <p style="margin: 0 0 12px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; color: #009F93;">
                        Tu mensaje
                      </p>
                      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
                        <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #334155; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- CTA -->
                  <tr>
                    <td style="padding: 32px 40px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background-color: rgba(0, 159, 147, 0.04); border: 1px solid rgba(0, 159, 147, 0.15); border-radius: 8px; padding: 20px; text-align: center;">
                            <p style="margin: 0 0 4px; font-size: 14px; color: #0f172a; font-weight: 500;">
                              ¿Necesitas ayuda urgente?
                            </p>
                            <p style="margin: 0; font-size: 13px; color: #64748b;">
                              Responde directamente a este correo y te atenderemos lo antes posible.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Signature -->
                  <tr>
                    <td style="padding: 0 40px 32px; text-align: center;">
                      <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.7;">
                        Saludos,<br>
                        <strong style="color: #0f172a;">El equipo de LCA</strong>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; border-top: 1px solid #e2e8f0; background-color: #f8fafc; text-align: center;">
                      <p style="margin: 0 0 4px; font-size: 12px; color: #64748b;">
                        LCA Technology Solutions — Ciberseguridad monitorizada para PYMEs
                      </p>
                      <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                        <a href="https://lcatechnologysolutions.com" style="color: #009F93; text-decoration: none; font-weight: 500;">lcatechnologysolutions.com</a>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
    `,
  }
}
