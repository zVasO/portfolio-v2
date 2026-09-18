"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site";

const links = [
  { href: "/#about", label: "À propos" },
  { href: "/#stack", label: "Stack" },
  { href: "/#experience", label: "Expériences" },
  { href: "/#testimonials", label: "Témoignages" },
  { href: "/#contact", label: "Contact" },
];

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    dialog?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      // Piège le focus dans la boîte de dialogue tant qu'elle est ouverte.
      if (event.key === "Tab" && dialog) {
        const items = [...dialog.querySelectorAll<HTMLElement>(FOCUSABLE)];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="-mr-2 p-2"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label="Ouvrir le menu"
      >
        <Menu size={22} aria-hidden="true" />
      </button>

      <div
        ref={dialogRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation mobile"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 flex flex-col bg-paper px-6 pb-10 pt-4 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-12 items-center justify-end">
          <button type="button" onClick={() => setOpen(false)} className="-mr-2 p-2" aria-label="Fermer le menu" tabIndex={open ? 0 : -1}>
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-2" aria-label="Navigation mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="border-b border-line py-4 text-4xl font-bold tracking-tight"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="link" tabIndex={open ? 0 : -1}>GitHub</a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="link" tabIndex={open ? 0 : -1}>LinkedIn</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="link" tabIndex={open ? 0 : -1}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
