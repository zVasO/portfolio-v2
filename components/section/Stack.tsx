import type { ReactNode } from "react";
import Image from "next/image";

import SectionHeading from "../SectionHeading";
import TsLogo from "@/components/tech-logo/TsLogo";
import PhpLogo from "@/components/tech-logo/PhpLogo";
import MysqlLogo from "@/components/tech-logo/MysqlLogo";
import PostgresqlLogo from "@/components/tech-logo/PostgresqlLogo";
import LaravelLogo from "@/components/tech-logo/LaravelLogo";
import SymfonyLogo from "@/components/tech-logo/SymfonyLogo";
import NextLogo from "@/components/tech-logo/NextLogo";
import ReactLogo from "@/components/tech-logo/ReactLogo";
import TailwindLogo from "@/components/tech-logo/TailwindLogo";

type Technology = { name: string; description: string; icon: ReactNode };
type Category = { label: string; items: Technology[] };

const logo = "h-8 w-8";

const categories: Category[] = [
  {
    label: "Back-end",
    items: [
      { name: "PHP", description: "Backend solide pour des applications sur mesure.", icon: <PhpLogo className={logo} /> },
      { name: "Laravel", description: "Framework expressif pour accélérer le développement serveur.", icon: <LaravelLogo className={logo} /> },
      { name: "Symfony", description: "Architecture modulaire et robuste pour des projets ambitieux.", icon: <SymfonyLogo className={logo} /> },
    ],
  },
  {
    label: "Front-end",
    items: [
      { name: "TypeScript", description: "Typage statique pour un code fiable et maintenable.", icon: <TsLogo className={logo} /> },
      { name: "JavaScript", description: "Le langage incontournable des expériences web dynamiques.", icon: <Image alt="" src="/tech-logo/js.svg" width={32} height={32} className={logo} /> },
      { name: "React", description: "Interfaces réactives et orientées composants.", icon: <ReactLogo className={logo} /> },
      { name: "Vue.js", description: "Approche progressive pour des interfaces expressives.", icon: <Image alt="" src="/tech-logo/vue.svg" width={32} height={32} className={logo} /> },
      { name: "Next.js", description: "Rendu hybride et performances optimales.", icon: <NextLogo className={`${logo} fill-ink`} /> },
      { name: "Tailwind CSS", description: "Système utilitaire pour des interfaces cohérentes, vite.", icon: <TailwindLogo className={logo} /> },
    ],
  },
  {
    label: "Données",
    items: [
      { name: "MySQL", description: "Base relationnelle fiable et éprouvée.", icon: <MysqlLogo className={logo} /> },
      { name: "PostgreSQL", description: "Puissance et extensibilité pour les données critiques.", icon: <PostgresqlLogo className={logo} /> },
    ],
  },
];

const Stack = () => {
  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        title="Avec quoi je travaille."
        lead="Des outils que je connais bien, choisis pour construire des produits performants et faciles à maintenir."
      />

      <div className="mt-12 divide-y divide-line border-b border-line">
        {categories.map((category) => (
          <div key={category.label} className="reveal grid gap-6 py-10 md:grid-cols-[10rem_1fr]">
            <p className="label pt-1">{category.label}</p>
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((tech) => (
                <li key={tech.name} className="flex gap-4">
                  <span className="mt-0.5 shrink-0">{tech.icon}</span>
                  <div>
                    <h3 className="text-lg">{tech.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-2">{tech.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
