import About from "@/components/section/About";
import Stack from "@/components/section/Stack";
import Experience from "@/components/section/Experience";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site";

const fadeIn = "animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-500";

const facts = [
  { label: "Rôle", value: "Développeur web full stack, freelance" },
  { label: "Back-end", value: "PHP, Laravel, Symfony" },
  { label: "Front-end", value: "TypeScript, React, Vue.js, Next.js" },
  { label: "Données", value: "MySQL, PostgreSQL" },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36 sm:pt-44">
        <h1 className={`max-w-6xl text-[clamp(2.75rem,8.5vw,7.5rem)] leading-[0.92] ${fadeIn}`}>
          Dylan Germann fabrique des sites et des applications web{" "}
          <span className="mark">qui tiennent la route</span>.
        </h1>

        <div className={`mt-14 grid gap-12 md:grid-cols-2 ${fadeIn} delay-150`}>
          <div>
            <p className="max-w-lg text-xl leading-relaxed text-ink-2">
              Développeur full stack freelance. PHP côté serveur, TypeScript côté client. Passé par
              deux éditeurs d’ERP web-to-print et une agence web avant de travailler à mon compte.
              Je réponds vite, je livre ce qui est prévu, et mes clients reviennent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Me contacter
              </a>
              <a href="#experience" className="btn-ghost">
                Voir mon parcours
              </a>
            </div>
          </div>

          <dl className="self-start border-t-2 border-ink">
            {facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3 text-base">
                <dt className="label self-center">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3 text-base">
              <dt className="label self-center">Ailleurs</dt>
              <dd className="flex flex-wrap gap-x-4">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="link">Email</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <About />
      <Stack />
      <Experience />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
