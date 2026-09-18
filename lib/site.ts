/**
 * Source unique de vérité pour les informations du site.
 * L'URL est lue depuis NEXT_PUBLIC_SITE_URL pour pouvoir changer de domaine
 * sans toucher au code (metadata, sitemap, JSON-LD).
 */
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgermann.dev";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const SITE_NAME = "Dylan Germann";

export const SITE_TITLE = "Dylan Germann | Développeur Web Freelance";

export const SITE_DESCRIPTION =
  "Développeur web freelance, spécialisé dans la création de sites et d’applications modernes. Contactez-moi pour vos projets sur mesure.";

export const CONTACT_EMAIL = "dev.dyger@gmail.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/zVasO",
  linkedin: "https://www.linkedin.com/in/dylan-germann/",
  booking: "https://cal.com/dgermann/30min",
} as const;
