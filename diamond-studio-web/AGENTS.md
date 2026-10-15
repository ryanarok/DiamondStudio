# AGENTS.md

Guía para agentes de IA (y humanos) que trabajan en este proyecto.

## Qué es esto

Sitio web de **Diamond Studio**, un estudio de tatuajes local.
SPA en React construida con Vite, enrutada con `react-router-dom`, estilada con **Tailwind CSS v4**.
Idioma del contenido: **español (LatAm)**.

Instagram del estudio: <https://www.instagram.com/diamond_studio005/>

## Comandos

```bash
npm run dev      # servidor de desarrollo (Vite)
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run lint     # linter (oxlint)
```

Corré `npm run lint` y `npm run build` antes de dar por terminado un cambio.

## Stack y versiones

- React 19
- Vite 8
- react-router-dom 7 (SPA, rutas en `src/App.jsx`)
- Tailwind CSS 4 (vía plugin `@tailwindcss/vite` en `vite.config.js`)

## Convención de estilos

Tailwind v4 no usa `tailwind.config.js`. El tema se define en `src/index.css`
con `@theme`:

- `font-sans` → Inter (cuerpo), `font-display` → Fraunces (títulos). Se usan como
  `font-sans` y `font-display`.
- Paleta de acento **`diamond-*`** (azul "diamante", base `--color-diamond-600: #2563eb`).
- Paleta neutra **`ink-*`** (blanco/negro minimalista, de `ink-50` a `ink-900`).

Usá estas clases de color en vez de valores hex sueltos. La estética general es
**minimalista**: fondo blanco, texto oscuro, azul solo como acento.

Las animaciones son **CSS puro** (sin framer-motion ni librerías). El revelado al
scroll usa el componente `Reveal` (IntersectionObserver + las clases `.reveal` /
`.is-visible` de `src/index.css`), que respeta `prefers-reduced-motion`.

## Estructura

```
src/
├── main.jsx              # BrowserRouter + root
├── App.jsx               # Layout (Navbar + rutas + Footer + botón flotante WhatsApp)
│                         #   y efectos de ruta (scroll top + <title>)
├── index.css             # Tailwind + tema @theme + utilidad .reveal
├── config/
│   └── site.js           # ⭐ TODOS los datos editables del estudio
├── data/                 # Contenido de las páginas
│   ├── gallery.js        #   trabajos + estilos (filtros)
│   ├── services.js       #   servicios, precios, políticas, proceso
│   ├── aftercare.js      #   guía de cuidados
│   └── testimonials.js   #   testimonios
├── components/
│   ├── Navbar.jsx        # nav sticky + menú móvil
│   ├── Footer.jsx
│   ├── WhatsAppButton.jsx# botón CTA con mensaje pre-armado
│   ├── GalleryGrid.jsx   # grid + filtros + lightbox
│   ├── Lightbox.jsx      # modal a pantalla completa
│   ├── SectionTitle.jsx  # título de sección con acento azul
│   └── Reveal.jsx        # revelado al scroll
└── pages/
    ├── Home.jsx          # hero, galería preview, sobre, servicios, proceso,
    │                     #   testimonios, ubicación
    ├── Galeria.jsx       # galería completa con filtros
    ├── Servicios.jsx     # servicios, precios, políticas, CTA
    └── Cuidados.jsx      # aftercare por etapas
```

## Rutas

| Ruta          | Página       |
|---------------|--------------|
| `/`           | Inicio       |
| `/galeria`    | Galería      |
| `/servicios`  | Servicios    |
| `/cuidados`   | Cuidados     |
| `*`           | Inicio (catch-all) |

## Datos: EDITAR `src/config/site.js`

Todo dato personalizable del estudio vive en `src/config/site.js` (número de
WhatsApp, dirección, horarios, link de Instagram, URL de mapas, moneda). También
hay helpers `whatsappLink(message)` y `instagramLink(path)`.

Los precios/estéticas de ejemplo están en `src/data/*`.

## Marcadores PLACEHOLDER

El contenido de ejemplo está marcado con el literal **`PLACEHOLDER`** para que sea
fácil de detectar y reemplazar por datos reales. Incluye: número de WhatsApp,
dirección, ciudad, horarios, URL de mapas, nombres de artistas, precios/políticas,
textos de cuidados y testimonios.

Antes de publicar, buscar `PLACEHOLDER` en `src/` y reemplazar por datos reales:

```bash
grep -rn "PLACEHOLDER" src/
```

Las imágenes de la galería (`src/data/gallery.js`) usan **fotos de Unsplash** como
placeholder. Reemplazar `image` por las fotos reales del estudio.

## Reservas / contacto

Las reservas son **solo por WhatsApp** (no hay formulario). Todos los CTA usan
`WhatsAppButton` o `whatsappLink()` de `src/config/site.js`, que construyen el link
`wa.me` con un mensaje pre-armado. La ubicación se muestra con dirección + botón
"Cómo llegar" que abre Google Maps (no hay iframe embebido).

## Reglas para agentes

- No agregues librerías nuevas (especialmente de UI o animación) sin pedirlo.
- Mantén el contenido en español (LatAm).
- Reusá `SectionTitle`, `Reveal` y `WhatsAppButton` en vez de duplicar estilos.
- Si agregás una página, sumala a las rutas en `App.jsx`, al nav en `Navbar.jsx`
  y al footer en `Footer.jsx`, y sumá su `<title>` en `RouteEffects`.
- Cualquier dato nuevo del estudio va en `config/site.js`, no hardcodeado en JSX.
