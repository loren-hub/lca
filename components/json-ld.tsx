export function JsonLdScript() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lcatechnologysolutions.com'

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'LCA Technology Solutions',
    description:
      'Monitorización, auditoría y reporte de seguridad IT para PYMEs en España. Supervisión continua de accesos, actualizaciones y políticas de seguridad.',
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    telephone: '+34 711 26 50 42',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
    },
    sameAs: [
      'https://www.linkedin.com/company/lca-ts/',
      'https://www.instagram.com/lca.technology.solutions/',
    ],
    knowsAbout: [
      { '@type': 'DefinedTerm', name: 'Ciberseguridad' },
      { '@type': 'DefinedTerm', name: 'Monitorización de seguridad' },
      { '@type': 'DefinedTerm', name: 'Auditoría IT' },
      { '@type': 'DefinedTerm', name: 'SOC para PYMEs' },
      { '@type': 'DefinedTerm', name: 'Continuidad de negocio y backups' },
      { '@type': 'DefinedTerm', name: 'Cumplimiento RGPD' },
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'España',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '300',
      highPrice: '3000',
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
            'Administración centralizada de usuarios, reseteo de accesos y migración de datos entre empleados.',
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

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué ocurre cuando no hay nadie mirando la seguridad IT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sin supervisión continua, las PYMEs acumulan riesgos silenciosos: contraseñas reutilizadas, copias de seguridad sin verificar que fallaron hace semanas, sistemas desactualizados y accesos no autorizados que pasan desapercibidos hasta que se produce una extorsión por ransomware o una fuga de datos.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye exactamente el servicio de monitorización y SOC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Centralizamos registros de actividad de Microsoft 365, Google Workspace, puestos de trabajo y red. Detectamos comportamientos anómalos (inicios de sesión sospechosos, descargas masivas, ejecución de malware), bloqueamos la amenaza de inmediato y te entregamos informes mensuales periódicos en lenguaje claro y sin tecnicismos innecesarios.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Obligáis a cambiar de software o interrumpís el trabajo diario?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Nos adaptamos a las herramientas que tu empresa ya utiliza (como Microsoft 365, Google Workspace o servidores locales) y las configuramos de forma segura. El despliegue inicial se realiza en segundo plano, sin cortes de servicio ni molestias para tus empleados.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo es el proceso inicial de diagnóstico y propuesta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Comenzamos con una auditoría preliminar de tu infraestructura sin coste ni compromiso. Evaluamos tu nivel de exposición, identificamos brechas críticas y te presentamos un informe claro con prioridades y costes ajustados al tamaño real de tu empresa.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Existe algún tipo de permanencia obligatoria?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ninguna. Creemos en relaciones de confianza basadas en resultados. Nuestros contratos de monitorización se renuevan mes a mes y puedes cancelar el servicio cuando lo decidas con un preaviso sencillo.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}

