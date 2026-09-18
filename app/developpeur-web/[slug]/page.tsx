import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Quote, Sparkles } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import { getTechnologyPage, technologySlugs } from "@/lib/technology-pages";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/site";



export function generateStaticParams() {
    return technologySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const page = getTechnologyPage(slug);

    if (!page) return {};

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

export default async function TechnologyPage({ params }: {
    params: Promise<{ slug: string }>
} ) {
    const { slug } = await params;
    const page = getTechnologyPage(slug);

    if (!page) notFound();

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
                SITE_URL,
                SOCIAL_LINKS.github,
                SOCIAL_LINKS.linkedin,
            ],
        },
    } as const;

    return (
        <main id="main-content" className="bg-paper text-ink">
            {/* HERO */}
            <div className="relative overflow-hidden min-h-screen">
                <div className="absolute inset-0 bg-paper-2 opacity-90" />
                <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-32">
                    <section className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full bg-paper-2 px-4 py-2 text-sm font-medium text-accent">
                                <Sparkles className="h-4 w-4" />
                                Développeur {page.technology}
                            </span>
                            <h1 className="mt-6 text-4xl tracking-tight text-ink sm:text-5xl">
                                {page.heroTitle}
                            </h1>
                            <p className="mt-4 text-lg font-semibold text-accent">
                                {page.heroSubtitle}
                            </p>
                            <p className="mt-5 text-lg leading-relaxed text-ink-2">
                                {page.heroDescription}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-ink hover:bg-accent px-6 py-3 text-base font-semibold text-white transition hover:scale-[1.02]"
                                >
                                    En discuter
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="mailto:dev.dyger@gmail.com"
                                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-base font-semibold text-ink-2 transition hover:border-ink hover:text-accent"
                                >
                                    Recevoir une proposition
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-6 rounded-lg border border-line bg-white p-8 shadow-xl">
                            <h2 className="text-xl text-ink">
                                Résultats obtenus
                            </h2>
                            <ul className="grid gap-5">
                                {page.results.map((result) => (
                                    <li key={result.label} className="rounded-md bg-paper-2 p-5">
                                        <div className="text-3xl font-bold text-accent">{result.value}</div>
                                        <p className="mt-1 text-sm uppercase tracking-wide text-ink-2">
                                            {result.label}
                                        </p>
                                        <p className="mt-2 text-base text-ink-2">{result.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>

            {/* HIGHLIGHTS */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid gap-10 lg:grid-cols-3">
                    {page.highlights.map((highlight) => (
                        <div
                            key={highlight.title}
                            className="group rounded-lg border border-line bg-white p-8 transition hover:border-ink"
                        >
                            <CheckCircle2 className="h-8 w-8 text-accent" />
                            <h3 className="mt-4 text-xl text-ink">{highlight.title}</h3>
                            <p className="mt-3 text-ink-2">{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="bg-paper-2 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                                Services {page.technology}
                            </p>
                            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
                                Un accompagnement complet, du diagnostic à la croissance
                            </h2>
                            <p className="mt-4 max-w-2xl text-lg text-ink-2">
                                Chaque prestation est pensée pour vous livrer un produit clé en main et une équipe autonome sur la technologie {page.technology}.
                            </p>
                        </div>
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 self-start rounded-full border border-line px-5 py-2 text-sm font-semibold uppercase tracking-wide text-accent transition hover:bg-accent/10"
                        >
                            Planifier un échange
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="mt-12 grid gap-8 lg:grid-cols-3">
                        {page.services.map((service) => (
                            <div key={service.title} className="rounded-lg border border-line bg-white p-8">
                                <h3 className="text-2xl text-ink">{service.title}</h3>
                                <p className="mt-4 text-ink-2">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                        Méthodologie
                    </p>
                    <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
                        Une collaboration transparente et orientée résultats
                    </h2>
                    <p className="mt-4 text-lg text-ink-2">
                        Nous travaillons main dans la main avec vos équipes marketing, produit et tech pour livrer rapidement des fonctionnalités qui comptent.
                    </p>
                </div>
                <div className="mt-14 grid gap-8 md:grid-cols-2">
                    {processSteps.map((step) => (
                        <div key={step.title} className="rounded-lg border border-line bg-white p-8">
                            <h3 className="text-xl text-ink">{step.title}</h3>
                            <p className="mt-3 text-ink-2">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-paper-2 py-20">
                <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
                    <div className="flex-1 space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                            Témoignages
                        </p>
                        <h2 className="text-3xl text-ink sm:text-4xl">
                            Des clients accompagnés sur leurs enjeux {page.technology}
                        </h2>
                        <p className="text-lg text-ink-2">
                            Chaque collaboration est structurée autour d’objectifs business clairs et d’indicateurs suivis semaine après semaine.
                        </p>
                        <Link
                            href="https://www.linkedin.com/in/dylan-germann/"
                            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 text-sm font-semibold uppercase tracking-wide text-ink-2 transition hover:border-ink hover:text-accent"
                        >
                            Voir plus d’avis
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="flex-1 space-y-6">
                        {page.testimonials.map((testimonial) => (
                            <blockquote
                                key={testimonial.author}
                                className="relative overflow-hidden rounded-lg border border-line bg-white p-8"
                            >
                                <Quote className="h-12 w-12 text-accent" />
                                <p className="mt-6 text-lg italic text-ink-2">“{testimonial.quote}”</p>
                                <footer className="mt-6">
                                    <p className="font-semibold text-ink">{testimonial.author}</p>
                                    <p className="text-sm text-ink-2">{testimonial.role}</p>
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-5xl px-6 py-20">
                <div className="rounded-lg border border-line bg-paper-2 p-12 text-center">
                    <h2 className="text-3xl text-ink sm:text-4xl">
                        Parlons de votre prochain projet {page.technology}
                    </h2>
                    <p className="mt-4 text-lg text-ink-2">
                        En 48 heures, vous recevez un plan d’action concret, des recommandations techniques et un devis transparent.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-ink hover:bg-accent px-6 py-3 text-base font-semibold text-white transition hover:scale-[1.02]"
                        >
                            Réserver un créneau
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href={SOCIAL_LINKS.booking}
                            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-base font-semibold text-ink-2 transition hover:border-ink hover:text-accent"
                        >
                            Appel découverte
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-paper-2 py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-center text-3xl text-ink sm:text-4xl">FAQ {page.technology}</h2>
                    <p className="mt-4 text-center text-lg text-ink-2">
                        Les réponses aux questions qui reviennent le plus souvent. Besoin d’une précision ? Écrivez-moi directement.
                    </p>
                    <div className="mt-12 space-y-6">
                        {page.faq.map((item) => (
                            <details
                                key={item.question}
                                className="group rounded-lg border border-line bg-white p-6 transition hover:border-ink"
                            >
                                <summary className="cursor-pointer text-lg font-semibold text-ink">
                                    {item.question}
                                </summary>
                                <p className="mt-3 text-ink-2 group-open:animate-fadeIn">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <ContactForm />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </main>
    );
}
