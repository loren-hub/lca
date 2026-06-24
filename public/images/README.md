# Guía de Gestión y Reemplazo de Imágenes - LCA Technology Solutions

Este directorio contiene las imágenes de stock y de fondo generadas como demostración para el sitio web. Puedes reemplazarlas en cualquier momento por tus propias fotos de stock comerciales.

Para cambiar una imagen, simplemente **guarda el nuevo archivo con el mismo nombre y extensión (.png)** en esta carpeta (`public/images/`), o actualiza la ruta correspondiente en el código si cambias el formato.

---

## Tabla de Referencia de Imágenes

A continuación se detallan las imágenes utilizadas, su propósito en el diseño, dimensiones recomendadas y la proporción ideal para mantener la responsividad en móviles y escritorio.

| Nombre del Archivo | Sección / Ubicación | Propósito / Descripción Visual | Proporción Recomendada | Dimensión Recomendada | Formato Ideal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`hero-bg.png`** | **Hero** (Fondo) | Red de ciberseguridad abstracta y difuminada. Actúa como textura ambiental de fondo. | Horizontal (16:9 o superior) | `1920 x 1080 px` | WebP o JPG (baja calidad/peso) |
| **`process-bg.png`** | **Proceso** (Fondo) | Detalle tecnológico / matriz de ciberseguridad de fondo intercalado con opacidad baja. | Horizontal (16:9 o superior) | `1920 x 1080 px` | WebP o JPG (baja calidad/peso) |
| **`problem-illustration.png`** | **Contexto** (Problema) | Vista interior de una sala de servidores moderna con luces verdes, transmitiendo seguridad profesional. | Vertical/Cuadrada (5:4 o 1:1) | `1000 x 1200 px` | WebP o PNG |
| **`service-monitoring.png`** | **Servicios** (Tarjeta 1) | Pantalla de laptop mostrando gráficos de monitoreo activos con acentos verdes. | Panorámica (16:9) | `800 x 450 px` | WebP o JPG |
| **`service-backup.png`** | **Servicios** (Tarjeta 2) | Sala de servidores con un símbolo digital brillante de un candado de seguridad en la nube. | Panorámica (16:9) | `800 x 450 px` | WebP o JPG |
| **`service-support.png`** | **Servicios** (Tarjeta 3) | Monitor de código de desarrollo con un escudo de seguridad flotante. | Panorámica (16:9) | `800 x 450 px` | WebP o JPG |
| **`suit-team.png`** | **Suit** (M365 Business) | Equipo de oficina colaborando en mesa de reuniones con laptops y paneles informativos. | Cuadrada/Rectangular (4:3 o 1:1) | `1000 x 1000 px` o `1200 x 900 px` | WebP o JPG |

---

## Consejos de Optimización para un Rendimiento Premium

1. **Usa el Formato WebP**: 
   Aunque las imágenes demostrativas están guardadas en formato `.png` (para máxima calidad inicial de exportación), en producción es altamente recomendable usar el formato `.webp` o `.avif`. WebP reduce el peso del archivo hasta en un 70% en comparación con PNG/JPG, manteniendo la misma calidad visual.
   - *Nota*: Si decides usar `.webp`, recuerda actualizar la extensión en el componente correspondiente (por ejemplo, cambiar `.png` por `.webp` en `components/hero.tsx`).

2. **Compresión de Imágenes**:
   Antes de subir tus imágenes definitivas, te recomendamos pasarlas por una herramienta de compresión sin pérdida (como [TinyPNG](https://tinypng.com/) o similar). Esto garantizará que la web cargue instantáneamente tanto en dispositivos móviles (redes 4G/5G) como en ordenadores.
   - **Fondos (`hero-bg.png` y `process-bg.png`)**: Al estar muy difuminados en el diseño (`filter blur` y opacidad inferior al 8%), puedes comprimirlos agresivamente para que pesen menos de **50 KB**.
   - **Imágenes de Tarjetas y Secciones**: Intenta que no superen los **100 - 150 KB** por archivo.

3. **Mantén el Estilo de Color (Dark Mode Premium)**:
   Para que el diseño se sienta Premium y unificado, las imágenes definitivas que elijas deberían tener una paleta predominantemente oscura con acentos luminosos en tonalidades **verdes (#47d37d / #00ff66) o cian/azulado (#06c79e)**. Esto mantendrá la armonía de marca.
