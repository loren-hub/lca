export function JsonLdScript() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lcatechnologysolutions.com'

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'LCA Technology Solutions',
    description:
      'Monitorización, auditoría y reporte de seguridad IT para PYMEs en España. Supervisión continua de accesos, actualizaciones y políticas de seguridad.',
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    telephone: '+34 000 000 000',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
    },
    sameAs: [],
    knowsAbout: [
      { '@type': 'DefinedTerm', name: 'Ciberseguridad' },
      { '@type': 'DefinedTerm', name: 'Monitorización de seguridad' },
      { '@type': 'DefinedTerm', name: 'Auditoría IT' },
      { '@type': 'DefinedTerm', name: 'SOC' },
      { '@type': 'DefinedTerm', name: 'Protocolos de respuesta' },
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'España',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '500',
      highPrice: '5000',
      offerCount: '6',
      offers: [
        {
          '@type': 'Offer',
          name: 'Monitoreo y Protección de Entornos',
          description:
            'Supervisamos tus equipos y software para que el día a día no se detenga por fallos técnicos o accesos indebidos.',
        },
        {
          '@type': 'Offer',
          name: 'Continuidad, Respaldo y Formación',
          description:
            'Si ocurre un problema, tenemos la estrategia y las herramientas para que la información siga disponible.',
        },
        {
          '@type': 'Offer',
          name: 'Soporte y Mantenimiento Web',
          description:
            'Nos ocupamos de que tu web esté actualizada y funcionando correctamente para tus clientes.',
        },
        {
          '@type': 'Offer',
          name: 'Gestión de Altas y Bajas',
          description:
            'Administración centralizada de usurios, reseteo de accesos y migración de datos entre empleados.',
        },
        {
          '@type': 'Offer',
          name: 'Inventario y Auditoría de Activos',
          description:
            'Informe detallado de tu parque informático, licencias y estado del hardware.',
        },
        {
          '@type': 'Offer',
          name: 'Cumplimiento Documental',
          description:
            'Actualización de la documentación técnica obligatoria (políticas de seguridad, registros de incidentes y protocolos).',
        },
      ],
    },
  }

  const team = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Miguel Ángel Acosta',
      jobTitle: 'Coordinador de Proyectos',
      worksFor: { '@type': 'Organization', name: 'LCA Technology Solutions' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Brayan Carrión',
      jobTitle: 'Consultor de Ciberseguridad',
      worksFor: { '@type': 'Organization', name: 'LCA Technology Solutions' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Rubén López',
      jobTitle: 'Técnico de Infraestructura',
      worksFor: { '@type': 'Organization', name: 'LCA Technology Solutions' },
    },
  ]

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué ocurre cuando no hay nadie mirando la seguridad IT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sin supervisión continua, las PYMEs acumulan riesgos silenciosos: contraseñas reutilizadas, backups sin verificar, sistemas sin actualizar y accesos no autorizados que pasan desapercibidos hasta que es demasiado tarde.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye el servicio de SOC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El SOC centraliza logs de Microsoft 365, Google Workspace y dispositivos de red, detecta comportamientos anómalos y genera informes mensuales de seguridad en lenguaje no técnico.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo es el proceso de trabajo con LCA Technology Solutions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Comenzamos con un diagnóstico inicial de tu infraestructura, presentamos una propuesta concreta con prioridades y costes, acompañamos la implementación y establecemos supervisión continua con reportes periódicos.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      {team.map((item, i) => (
        <script
          key={`team-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
