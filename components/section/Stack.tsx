import type { ReactNode } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

import TsLogo from "@/components/tech-logo/TsLogo";
import PhpLogo from "@/components/tech-logo/PhpLogo";
import MysqlLogo from "@/components/tech-logo/MysqlLogo";
import PostgresqlLogo from "@/components/tech-logo/PostgresqlLogo";
import LaravelLogo from "@/components/tech-logo/LaravelLogo";
import SymfonyLogo from "@/components/tech-logo/SymfonyLogo";
import NextLogo from "@/components/tech-logo/NextLogo";
import ReactLogo from "@/components/tech-logo/ReactLogo";
import TailwindLogo from "@/components/tech-logo/TaiwindLogo";

type Technology = {
  name: string;
  description: string;
  icon: ReactNode;
  accent: string;
  border: string;
};

const technologies: readonly Technology[] = [
  {
    name: "TypeScript",
    description: "Typage statique pour un code fiable et maintenable.",
    icon: <TsLogo className="h-12 w-12" />,
    accent: "from-sky-500/30 via-sky-500/10 to-transparent",
    border: "border-sky-500/30",
  },
  {
    name: "JavaScript",
    description: "Le langage incontournable pour des expériences web dynamiques.",
    icon: (
        <Image
            alt="Logo JavaScript"
            src="/tech-logo/js.svg"
            width={48}
            height={48}
            className="h-12 w-12"
        />
    ),
    accent: "from-yellow-400/30 via-yellow-400/10 to-transparent",
    border: "border-yellow-500/30",
  },
  {
    name: "PHP",
    description: "Backend solide pour des applications sur mesure.",
    icon: <PhpLogo className="h-12 w-12" />,
    accent: "from-indigo-500/30 via-indigo-500/10 to-transparent",
    border: "border-indigo-500/30",
  },
  {
    name: "Laravel",
    description: "Framework expressif pour accélérer le développement côté serveur.",
    icon: <LaravelLogo className="h-12 w-12" />,
    accent: "from-rose-500/30 via-rose-500/10 to-transparent",
    border: "border-rose-500/30",
  },
  {
    name: "Symfony",
    description: "Architecture modulaire et robuste pour des projets ambitieux.",
    icon: <SymfonyLogo className="h-12 w-12" />,
    accent: "from-slate-500/30 via-slate-500/10 to-transparent",
    border: "border-slate-500/30",
  },
  {
    name: "Next.js",
    description: "Rendu hybride et performances optimales pour le frontend.",
    icon: <NextLogo className="h-12 w-12 fill-black dark:fill-white" />,
    accent: "from-gray-500/30 via-gray-500/10 to-transparent",
    border: "border-gray-500/30",
  },
  {
    name: "React",
    description: "Interfaces réactives et component-driven pour le web moderne.",
    icon: <ReactLogo className="h-12 w-12" />,
    accent: "from-cyan-400/30 via-cyan-400/10 to-transparent",
    border: "border-cyan-400/30",
  },
  {
    name: "Vue.js",
    description: "Approche progressive pour construire des UI expressives.",
    icon: (
        <Image
            alt="Logo Vue.js"
            src="/tech-logo/vue.svg"
            width={48}
            height={48}
            className="h-12 w-12"
        />
    ),
    accent: "from-emerald-400/30 via-emerald-400/10 to-transparent",
    border: "border-emerald-400/30",
  },
  {
    name: "Tailwind CSS",
    description:
        "Système de design utilitaire pour prototyper à la vitesse de l&apos;éclair.",
    icon: <TailwindLogo className="h-12 w-12" />,
    accent: "from-teal-400/30 via-teal-400/10 to-transparent",
    border: "border-teal-400/30",
  },
  {
    name: "MySQL",
    description: "Base de données relationnelle fiable pour vos applications.",
    icon: <MysqlLogo className="h-12 w-12" />,
    accent: "from-amber-500/30 via-amber-500/10 to-transparent",
    border: "border-amber-500/30",
  },
  {
    name: "PostgreSQL",
    description: "Puissance et extensibilité pour les données critiques.",
    icon: <PostgresqlLogo className="h-12 w-12" />,
    accent: "from-sky-600/30 via-sky-600/10 to-transparent",
    border: "border-sky-600/30",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const, // ✅ typage corrigé
    },
  },
};

const Stack = () => {
  return (
      <motion.section
          id="stack"
          className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <motion.h2
              className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
          >
            Technical Stack
          </motion.h2>
          <motion.p
              className="mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
          >
            Un écosystème d&apos;outils modernes, sélectionnés pour construire des
            expériences numériques haut de gamme, performantes et fiables.
          </motion.p>
        </div>

        <motion.div
            className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech) => (
              <motion.article
                  key={tech.name}
                  variants={cardVariants}
                  className={`group relative overflow-hidden rounded-3xl border ${tech.border} bg-white/80 p-7 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-950/60`}
              >
                <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tech.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-inner shadow-black/10 dark:bg-gray-900/80">
                    {tech.icon}
                  </div>
                </div>
                <div className="relative mt-6 space-y-3 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {tech.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {tech.description}
                  </p>
                </div>
              </motion.article>
          ))}
        </motion.div>
      </motion.section>
  );
};

export default Stack;
