import {
  ChevronDown,
  Code,
  Github,
  LinkedinIcon,
  Mail,
  Palette,
  Terminal,
} from "lucide-react";

import TechBadge from "@/components/TechBadge";
import IconLink from "@/components/IconLink";
import About from "@/components/section/About";
import Stack from "@/components/section/Stack";
import Experience from "@/components/section/Experience";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import { SOCIAL_LINKS } from "@/lib/site";

/**
 * Entrée progressive des blocs du héro, en CSS pur (tailwindcss-animate).
 * `fill-mode-both` garde l'état initial avant le délai et l'état final après.
 */
const fadeIn = "animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700";

export default function Home() {
  return (
    <main className="min-h-screen" id="main-content">
      <section className="relative flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center px-6 py-12 sm:py-32">
          <div className={fadeIn}>
            <h1 className="relative mx-0 max-w-[43.5rem] text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-7xl">
              Je suis Dylan Germann
              <br />
              <span className="text-4xl text-transparent">
                <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text">
                  Développeur Web Full Stack
                </span>
              </span>
            </h1>
          </div>

          <div className={`${fadeIn} delay-300`}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed tracking-wide text-gray-700">
              Je suis spécialisé dans le développement{" "}
              <span className="font-medium text-indigo-600">moderne</span>,
              <span className="font-medium text-teal-500"> hautement performant</span> et
              <span className="font-medium text-indigo-600"> sur mesure</span>{" "}
              d’applications web, avec une expertise à la fois en développement front-end
              et back-end.
            </p>
          </div>

          <div className={`${fadeIn} delay-500`}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <TechBadge icon={<Terminal className="h-4 w-4" />} label="Laravel · Symfony · Next.js" />
              <TechBadge icon={<Palette className="h-4 w-4" />} label="React · Vue.js · Next.js" />
              <TechBadge icon={<Code className="h-4 w-4" />} label="PHP · TypeScript · JavaScript" />
            </div>
          </div>

          <div className={`${fadeIn} delay-700`}>
            <div className="mt-8 flex justify-center gap-6">
              <IconLink href={SOCIAL_LINKS.github} icon={<Github />} label="GitHub" />
              <IconLink href={SOCIAL_LINKS.linkedin} icon={<LinkedinIcon />} label="LinkedIn" />
              <IconLink href="/#contact" icon={<Mail />} label="Email" isInternal />
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 transition-colors hover:text-gray-600 motion-safe:animate-bounce"
          aria-label="Défiler vers la section À propos"
        >
          <ChevronDown className="h-8 w-8" aria-hidden="true" />
        </a>
      </section>

      <About />
      <Stack />
      <Experience />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
