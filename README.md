# WorkHub Landing Page

Production landing page built to match the [Incial Figma design](https://www.figma.com/design/Csl4vzosAkDsUMgBVz2Zfz/Incial?node-id=1684-791).

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4

## Design tokens (from Figma)

| Token | Value |
|-------|--------|
| Black | `#000000` |
| White | `#FFFFFF` |
| Accent blue | `#2A6EC4` |
| Muted text | `rgba(0, 0, 0, 0.7)` |
| Hero overlay | `rgba(0, 0, 0, 0.3)` |
| Font | Poppins |
| Max content width | `1440px` |

## Run locally

```bash
cd workhub-landing
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

Assets exported from Figma live in `public/images/` (hero background, feature card imagery).
