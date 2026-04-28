# VaezLab — Agencia de Desarrollo Web

Next.js 14 + Tailwind CSS + Framer Motion

## Estructura del proyecto

```
vaezlab/
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx          ← Canvas waves animadas
│   ├── Marquee.jsx
│   ├── Problem.jsx
│   ├── Services.jsx      ← Webs: corporativa, landing, e-commerce, portfolio
│   ├── Portfolio.jsx     ← Mockups con browser frames CSS
│   ├── Metrics.jsx
│   ├── Process.jsx
│   ├── Automation.jsx    ← Servicio adicional: IA + n8n
│   ├── Quote.jsx         ← Cotización por tipo de proyecto
│   ├── Contact.jsx       ← Formulario con estado de éxito
│   ├── Footer.jsx
│   └── FadeIn.jsx        ← Wrapper reutilizable con useInView
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Subir a Vercel (5 minutos)

### Opción A — GitHub + Vercel (recomendado)

1. Crea cuenta en [github.com](https://github.com)
2. Crea un repositorio nuevo llamado `vaezlab`
3. Sube todos estos archivos manteniendo la estructura de carpetas
4. Crea cuenta en [vercel.com](https://vercel.com)
5. Click **"Add New Project"** → importa tu repo de GitHub
6. Vercel detecta Next.js automáticamente → click **Deploy**
7. Tu web estará en `vaezlab.vercel.app` en ~2 minutos

### Opción B — Vercel CLI

```bash
npm install -g vercel
cd vaezlab
vercel
```

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Personalización rápida

- **Colores**: `tailwind.config.js` → sección `colors`
- **Proyectos portafolio**: `components/Portfolio.jsx` → array `projects`
- **Servicios web**: `components/Services.jsx` → array `services`
- **Automatizaciones**: `components/Automation.jsx` → array `automations`
- **Precios cotización**: `components/Quote.jsx` → array `types`
- **Contacto**: `components/Contact.jsx` → datos de contacto
