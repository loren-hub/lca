# LCA Technology Solutions

[![Next.js](https://img.shields.io/badge/Next.js-15.0+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## 🚀 Características Principales

- **Diseño Editorial Técnico**: Estética limpia con enfoque en tipografía, datos legibles y autenticidad técnica.
- **Presentación de Servicios Especializados**: Desglose claro de áreas clave: auditoría técnica de seguridad, monitorización SOC continuo y protocolos de respuesta a incidentes.
- **Formulario de Contacto Funcional**: Integración con [Resend API](https://resend.com/) validada mediante esquemas en servidor.
- **Optimización y SEO Técnico**: Estructura semántica HTML5, metadatos dinámicos OpenGraph/Twitter Cards, accesibilidad y rendimiento optimizado.
- **Stack Moderno**: Desarrollado con Next.js 15 (App Router) y React 19.

---

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes y Primitivas**: [Radix UI](https://www.radix-ui.com/) e Iconos de [Lucide](https://lucide.dev/)
- **Formularios y Validación**: [React Hook Form](https://react-hook-form.com/) y [Zod](https://zod.dev/)
- **Servicio de Correo**: [Resend](https://resend.com/)
- **Despliegue**: Optimizado para [Vercel](https://vercel.com/)

---

## 📁 Estructura del Proyecto

```bash
├── app/                # App Router de Next.js (layouts, páginas y rutas de API)
├── components/         # Componentes reutilizables (Hero, Servicios, Casos, Contacto, etc.)
├── content/            # Contenido estático y secciones en Markdown
├── hooks/              # Hooks personalizados de React
├── lib/                # Utilidades, esquemas de validación y lógica compartida
├── public/             # Recursos estáticos (imágenes, favicons, iconos)
└── styles/             # Estilos globales y configuración de estilos
```

---

## ⚙️ Puesta en Marcha

### Prerrequisitos

- Node.js 18.x o superior
- Gestor de paquetes: npm, pnpm o yarn

### Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/loren-hub/lca.git
   cd lca
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Variables de entorno**:
   Copia el archivo de ejemplo a `.env.local` y configura tu clave de Resend:
   ```bash
   cp .env.example .env.local
   ```
   En `.env.local`:
   ```env
   RESEND_API_KEY=tu_clave_de_resend
   ```

4. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

5. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 🧪 Comandos Disponibles

- `npm run dev`: Inicia el servidor de desarrollo en local.
- `npm run build`: Genera la compilación para producción.
- `npm run start`: Inicia el servidor de producción.
- `npm run lint`: Ejecuta el análisis estático de código con ESLint.

---

## 📄 Licencia y Derechos

Este proyecto es privado y propietario. Todos los derechos reservados.

---

Desarrollado con dedicación para **LCA Technology Solutions**.
