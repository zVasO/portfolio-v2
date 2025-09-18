import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Quote, Sparkles } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import { getTechnologyPage, technologySlugs } from "@/lib/technology-pages";

const SITE_URL = "https://www.dgermann.dev";

type PageProps = {
    params: {
        slug: string;
    };
};

export function generateStaticParams() {
    return technologySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
    const { slug } = params;
    const page = getTechnologyPage(slug);

    if (!page) {
        return {};
    }

    const canonicalUrl = `${SITE_URL}/developpeur-web/${page.slug}`;

    return {
        title: page.heroTitle,
        description: page.seoDescription,
        keywords: page.keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: page.heroTitle,
            description: page.seoDescription,
            url: canonicalUrl,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: page.heroTitle,
            description: page.seoDescription,
        },
    };
}

export default function TechnologyPage({ params }: PageProps) {
    const { slug } = params;
    const page = getTechnologyPage(slug);

    if (!page) {
        notFound();
    }

    const processSteps = [
        {
            title: "1. Diagnostic & stratégie",
            description: `Audit de votre existant, ateliers avec les équipes et feuille de route ${page.technology} priorisée sur la valeur business.`,
        },
        {
            title: "2. Design & architecture",
            description: `Conception de l'UX, du design system et de l'architecture technique ${page.technology} avec validation rapide par vos parties prenantes.`,
        },
        {
            title: "3. Développement & itérations",
            description: `Sprints courts, démos hebdomadaires, qualité logicielle maîtrisée et accompagnement des équipes internes.`,
        },
        {
            title: "4. Mise en ligne & croissance",
            description: `Déploiement sécurisé, transfert de connaissances et plan d’optimisation continue pour faire évoluer votre solution ${page.technology}.`,
        },
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: page.heroTitle,
        description: page.seoDescription,
        areaServed: {
            "@type": "AdministrativeArea",
            name: "France",
        },
        url: `${SITE_URL}/developpeur-web/${page.slug}`,
        serviceType: `Développement ${page.technology}`,
        provider: {
            "@type": "Person",
            name: "Dylan Germann",
            sameAs: [
                "https://www.dgermann.dev",
                "https://github.com/zVasO",
                "https://www.linkedin.com/in/dylan-germann/",
            ],
        },
    } as const;

    return (
        <div className="bg-slate-950 text-slate-100">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 opacity-90" />
                <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-32">
                    <section className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 text-sm font-medium text-teal-300">
                                <Sparkles className="h-4 w-4" />
                                Développeur {page.technology}
                            </span>
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                {page.heroTitle}
                            </h1>
                            <p className="mt-4 text-lg font-semibold text-teal-200/90">
                                {page.heroSubtitle}
                            </p>
                            <p className="mt-5 text-lg leading-relaxed text-slate-200">
                                {page.heroDescription}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:scale-[1.02] hover:shadow-xl"
                                >
                                    En discuter
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="mailto:contact@dgermann.dev"
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-white transition hover:border-teal-400 hover:text-teal-200"
                                >
                                    Recevoir une proposition
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-slate-900/50">
                            <h2 className="text-xl font-semibold text-white">
                                Résultats obtenus
                            </h2>
                            <ul className="grid gap-5">
                                {page.results.map((result) => (
                                    <li key={result.label} className="rounded-2xl bg-slate-900/80 p-5">
                                        <div className="text-3xl font-bold text-teal-300">{result.value}</div>
                                        <p className="mt-1 text-sm uppercase tracking-wide text-slate-400">
                                            {result.label}
                                        </p>
                                        <p className="mt-2 text-base text-slate-300">{result.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>

            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid gap-10 lg:grid-cols-3">
                    {page.highlights.map((highlight) => (
                        <div
                            key={highlight.title}
                            className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition hover:border-teal-500/80 hover:bg-slate-900"
                        >
                            <CheckCircle2 className="h-8 w-8 text-teal-300" />
                            <h3 className="mt-4 text-xl font-semibold text-white">{highlight.title}</h3>
                            <p className="mt-3 text-slate-300">{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-slate-900/70 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">
                                Services {page.technology}
                            </p>
                            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                                Un accompagnement complet, du diagnostic à la croissance
                            </h2>
                            <p className="mt-4 max-w-2xl text-lg text-slate-300">
                                Chaque prestation est pensée pour vous livrer un produit clé en main et une équipe autonome sur la technologie {page.technology}.
                            </p>
                        </div>
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 self-start rounded-full border border-teal-500 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-teal-200 transition hover:bg-teal-500/10"
                        >
                            Planifier un échange
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="mt-12 grid gap-8 lg:grid-cols-3">
                        {page.services.map((service) => (
                            <div key={service.title} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8">
                                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                                <p className="mt-4 text-slate-300">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">
                        Méthodologie
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        Une collaboration transparente et orientée résultats
                    </h2>
                    <p className="mt-4 text-lg text-slate-300">
                        Nous travaillons main dans la main avec vos équipes marketing, produit et tech pour livrer rapidement des fonctionnalités qui comptent.
                    </p>
                </div>
                <div className="mt-14 grid gap-8 md:grid-cols-2">
                    {processSteps.map((step) => (
                        <div key={step.title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
                            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                            <p className="mt-3 text-slate-300">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-slate-900/70 py-20">
                <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
                    <div className="flex-1 space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">
                            Témoignages
                        </p>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Des clients accompagnés sur leurs enjeux {page.technology}
                        </h2>
                        <p className="text-lg text-slate-300">
                            Chaque collaboration est structurée autour d’objectifs business clairs et d’indicateurs suivis semaine après semaine.
                        </p>
                        <Link
                            href="https://www.linkedin.com/in/dylan-germann/"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-teal-400 hover:text-teal-200"
                        >
                            Voir plus d’avis
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="flex-1 space-y-6">
                        {page.testimonials.map((testimonial) => (
                            <blockquote
                                key={testimonial.author}
                                className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 p-8"
                            >
                                <Quote className="h-12 w-12 text-teal-500" />
                                <p className="mt-6 text-lg italic text-slate-200">“{testimonial.quote}”</p>
                                <footer className="mt-6">
                                    <p className="font-semibold text-white">{testimonial.author}</p>
                                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 py-20">
                <div className="rounded-3xl border border-teal-500/40 bg-gradient-to-r from-teal-600/20 via-slate-900 to-indigo-700/20 p-12 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Parlons de votre prochain projet {page.technology}
                    </h2>
                    <p className="mt-4 text-lg text-slate-200">
                        En 48 heures, vous recevez un plan d’action concret, des recommandations techniques et un devis transparent.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                        >
                            Réserver un créneau
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="https://cal.com/dgermann/30min"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-teal-300 hover:text-teal-200"
                        >
                            Appel découverte
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-slate-900/70 py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">FAQ {page.technology}</h2>
                    <p className="mt-4 text-center text-lg text-slate-300">
                        Les réponses aux questions qui reviennent le plus souvent. Besoin d’une précision ? Écrivez-moi directement.
                    </p>
                    <div className="mt-12 space-y-6">
                        {page.faq.map((item) => (
                            <details
                                key={item.question}
                                className="group rounded-3xl border border-slate-800 bg-slate-950/70 p-6 transition hover:border-teal-400/70"
                            >
                                <summary className="cursor-pointer text-lg font-semibold text-white">
                                    {item.question}
                                </summary>
                                <p className="mt-3 text-slate-300 group-open:animate-fadeIn">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 pb-24 pt-12">
                <ContactForm />
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </div>
    );
}
