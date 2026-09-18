import Link from "next/link";

import MobileMenu from "../MobileMenu";
import { SITE_NAME } from "@/lib/site";

export const NAV_LINKS = [
  { href: "/#about", label: "À propos" },
  { href: "/#stack", label: "Stack" },
  { href: "/#experience", label: "Expériences" },
  { href: "/#testimonials", label: "Témoignages" },
] as const;

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight" aria-label="Retour à l'accueil">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-base font-medium text-ink-2 transition-colors hover:text-ink">
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary px-5 py-2 text-sm">
            Me contacter
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
