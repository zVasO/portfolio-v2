import Link from "next/link";

import { technologyPages } from "@/lib/technology-pages";
import { CONTACT_EMAIL, SITE_NAME, SOCIAL_LINKS } from "@/lib/site";

const mainLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#about", label: "À propos" },
  { href: "/#stack", label: "Stack technique" },
  { href: "/#experience", label: "Expériences" },
  { href: "/#testimonials", label: "Témoignages" },
  { href: "/#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-4">
            <p className="text-2xl font-bold tracking-tight">{SITE_NAME}</p>
            <p className="max-w-sm text-sm leading-relaxed text-ink-2">
              Développeur web freelance. Sites et applications sur mesure, pensés pour durer et
              adaptés à vos besoins métiers.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link inline-block text-sm">
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Plan du site" className="space-y-4">
            <p className="label">Navigation</p>
            <ul className="grid gap-2 text-sm text-ink-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="space-y-4">
            <p className="label">Services</p>
            <ul className="grid gap-2 text-sm text-ink-2">
              {technologyPages.map((page) => (
                <li key={page.slug}>
                  <Link href={`/developpeur-web/${page.slug}`} className="transition-colors hover:text-ink">
                    {page.heroTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} {SITE_NAME}. Tous droits réservés.</p>
          <ul className="flex gap-6">
            <li><a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a></li>
            <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
