# Portfolio — Dylan Germann

Site vitrine de développeur web freelance, construit avec Next.js 15 (App Router), React 19 et Tailwind CSS.

## Démarrer

```bash
cp .env.example .env.local   # puis renseigner les clés
npm install
npm run dev
```

## Scripts

| Commande        | Rôle                                   |
| --------------- | -------------------------------------- |
| `npm run dev`   | Serveur de développement (Turbopack)   |
| `npm run build` | Build de production + génération du sitemap |
| `npm run lint`  | ESLint                                 |

## Structure

- `app/` — routes : accueil, pages SEO `/developpeur-web/[slug]` et `/developpeur-web/[slug]/sur/[city]`, action serveur du formulaire de contact, image Open Graph générée.
- `components/` — sections de la page d'accueil, navigation, formulaire, logos.
- `lib/site.ts` — constantes du site (URL, réseaux, email). L'URL vient de `NEXT_PUBLIC_SITE_URL`.
- `lib/technology-pages.ts` — contenu des pages SEO.

## Déploiement

Hébergé sur Vercel. Variables d'environnement à définir dans le projet Vercel : voir `.env.example`.
