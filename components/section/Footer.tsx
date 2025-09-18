import Link from "next/link";

import { technologyPages } from "@/lib/technology-pages";

const mainLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#about", label: "À propos" },
  { href: "/#stack", label: "Stack technique" },
  { href: "/#experience", label: "Expériences" },
  { href: "/#projects", label: "Projets" },
  { href: "/#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/zVasO",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/dylan-germann/",
    label: "LinkedIn",
  },
  {
    href: "mailto:dev.dyger@gmail.com",
    label: "dev.dyger@gmail.com",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-white">
              Dylan Germann
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Développeur web freelance spécialisé dans la création de sites et
              d&apos;applications modernes, performantes et adaptées à vos besoins
              métiers.
            </p>
          </div>

          <nav aria-label="Navigation principale" className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Navigation
            </p>
            <ul className="grid gap-3 text-sm text-slate-200">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Services
            </p>
            <ul className="grid gap-3 text-sm text-slate-200">
              {technologyPages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/developpeur-web/${page.slug}`}
                    className="transition hover:text-white hover:underline"
                  >
                    {page.heroTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} Dylan Germann. Tous droits réservés.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <Link
                    href={social.href}
                    className="transition hover:text-white hover:underline"
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
