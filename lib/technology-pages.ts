export type TechnologyPageContent = {
    slug: string;
    technology: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    seoDescription: string;
    keywords: string[];
    highlights: { title: string; description: string }[];
    services: { title: string; description: string }[];
    results: { value: string; label: string; description: string }[];
    testimonials: { quote: string; author: string; role: string }[];
    faq: { question: string; answer: string }[];
};

export const technologyPages: TechnologyPageContent[] = [
    {
        slug: "php",
        technology: "PHP",
        heroTitle: "Développeur web PHP freelance",
        heroSubtitle: "Des applications PHP modernes, rapides et fiables",
        heroDescription:
            "Je conçois et améliore vos plateformes PHP avec des architectures robustes, des tests automatisés et une intégration fluide avec vos outils métiers pour générer un véritable retour sur investissement.",
        seoDescription:
            "Développeur web PHP freelance : création et refonte d'applications PHP sur mesure, API performantes, maintenance et optimisation pour les PME et scale-ups.",
        keywords: [
            "développeur PHP",
            "freelance PHP",
            "application web PHP",
            "expert PHP",
            "développement backend PHP",
        ],
        highlights: [
            {
                title: "Code PHP maintenable",
                description:
                    "Architecture hexagonale, tests unitaires et CI/CD pour assurer la qualité et la scalabilité de vos produits.",
            },
            {
                title: "Intégrations métier",
                description:
                    "Connecteurs ERP, CRM et passerelles de paiement pour automatiser vos processus et supprimer les tâches manuelles.",
            },
            {
                title: "Performance & sécurité",
                description:
                    "Cache applicatif, audits de sécurité OWASP et surveillance proactive pour des applications toujours disponibles.",
            },
        ],
        services: [
            {
                title: "Création ou refonte d'applications PHP",
                description:
                    "Analyse de l'existant, conception technique, développement et mise en production rapide de votre outil métier.",
            },
            {
                title: "Développement d'API REST & SOAP",
                description:
                    "Conception d'API performantes documentées (OpenAPI) et sécurisées (OAuth2, JWT) pour vos partenaires et applications internes.",
            },
            {
                title: "Maintenance évolutive",
                description:
                    "Correction de bugs, mises à jour de versions et ajout de nouvelles fonctionnalités sans interruption de service.",
            },
        ],
        results: [
            {
                value: "+120%",
                label: "de productivité",
                description: "obtenus après la refonte d'un intranet PHP pour une PME industrielle.",
            },
            {
                value: "15+",
                label: "projets PHP menés",
                description: "SaaS B2B, CRM, plateformes e-commerce et portails clients.",
            },
            {
                value: "<200ms",
                label: "temps de réponse",
                description: "grâce à l'optimisation des requêtes et de l'architecture serveur.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Dylan a transformé notre back-office PHP en quelques semaines. Les performances ont doublé et l'équipe support reçoit 3 fois moins de tickets.",
                author: "Claire D.",
                role: "Directrice Produit, startup SaaS",
            },
        ],
        faq: [
            {
                question: "Quelle est votre approche pour reprendre un projet PHP existant ?",
                answer:
                    "Je commence par un audit du code et de l'infrastructure, je priorise les chantiers critiques puis je sécurise la livraison continue pour déployer des améliorations sereinement.",
            },
            {
                question: "Travaillez-vous avec des frameworks PHP spécifiques ?",
                answer:
                    "Oui, j'interviens sur des bases Laravel, Symfony ou maison. Je privilégie les bonnes pratiques PSR et l'automatisation des tests pour chaque stack.",
            },
            {
                question: "Pouvez-vous collaborer avec une équipe interne ?",
                answer:
                    "Absolument. Je m'intègre à vos rituels (Scrum, Kanban), je documente chaque décision et je facilite le transfert de connaissances.",
            },
        ],
    },
    {
        slug: "typescript",
        technology: "TypeScript",
        heroTitle: "Développeur web TypeScript freelance",
        heroSubtitle: "Des applications front et back fiables grâce à TypeScript",
        heroDescription:
            "J'utilise TypeScript pour sécuriser votre base de code, accélérer les développements et garantir la stabilité de vos applications web et mobile.",
        seoDescription:
            "Développeur TypeScript freelance : applications React, Next.js et Node.js robustes, typage avancé, tests et CI/CD.",
        keywords: [
            "développeur TypeScript",
            "freelance TypeScript",
            "application TypeScript",
            "expert TypeScript",
            "Next.js TypeScript",
        ],
        highlights: [
            {
                title: "Qualité logicielle",
                description:
                    "Typage strict, ESLint et tests end-to-end pour éliminer les bugs avant la mise en production.",
            },
            {
                title: "Stack moderne",
                description:
                    "React, Next.js, Node.js et NestJS pour des expériences utilisateur rapides et scalables.",
            },
            {
                title: "Livraison continue",
                description:
                    "Pipelines CI/CD et feature flags pour déployer plusieurs fois par semaine sans risque.",
            },
        ],
        services: [
            {
                title: "Applications web TypeScript",
                description:
                    "Design system, state management et performances optimisées pour vos interfaces métier complexes.",
            },
            {
                title: "API Node.js sécurisées",
                description:
                    "Développement d'API GraphQL ou REST robustes avec validation, monitoring et observabilité.",
            },
            {
                title: "Migration JavaScript vers TypeScript",
                description:
                    "Plan de migration progressif, conversion des modules et accompagnement des équipes sur les bonnes pratiques.",
            },
        ],
        results: [
            {
                value: "-40%",
                label: "de bugs en prod",
                description: "après l'introduction de TypeScript et de tests automatisés.",
            },
            {
                value: "4 semaines",
                label: "pour lancer un MVP",
                description: "grâce à un socle Next.js + TypeScript prêt pour la scalabilité.",
            },
            {
                value: "98%",
                label: "de couverture typée",
                description: "pour garantir la sécurité des évolutions.",
            },
        ],
        testimonials: [
            {
                quote:
                    "La migration vers TypeScript pilotée par Dylan nous a permis de fiabiliser notre roadmap et de réduire drastiquement les régressions.",
                author: "Julien M.",
                role: "CTO, plateforme e-santé",
            },
        ],
        faq: [
            {
                question: "Pouvez-vous reprendre un projet JavaScript pour le typage ?",
                answer:
                    "Oui, je propose un audit, un plan de migration en plusieurs étapes et j'accompagne votre équipe pour gagner en confiance rapidement.",
            },
            {
                question: "Quels outils utilisez-vous avec TypeScript ?",
                answer:
                    "ESLint, Prettier, Jest, Playwright, Vitest, Storybook… Je sélectionne les outils adaptés à votre contexte.",
            },
            {
                question: "Travaillez-vous en forfait ou en régie ?",
                answer:
                    "Les deux sont possibles. Nous définissons ensemble le cadre idéal : sprint dédié, forfait fonctionnel ou accompagnement long terme.",
            },
        ],
    },
    {
        slug: "javascript",
        technology: "JavaScript",
        heroTitle: "Développeur web JavaScript freelance",
        heroSubtitle: "Des expériences utilisateur fluides et engageantes",
        heroDescription:
            "Je conçois vos applications JavaScript modernes côté front et back, avec une attention particulière portée à la performance, l'accessibilité et la conversion.",
        seoDescription:
            "Expert JavaScript freelance : développement front-end, back-end Node.js, optimisation des performances et UX orientée conversion.",
        keywords: [
            "développeur JavaScript",
            "freelance JavaScript",
            "application JavaScript",
            "Node.js",
            "front-end JavaScript",
        ],
        highlights: [
            {
                title: "UX orientée conversion",
                description:
                    "Micro-interactions, analytics et AB testing pour transformer vos visiteurs en clients.",
            },
            {
                title: "Performances web",
                description:
                    "Core Web Vitals au vert, lazy loading et bundling intelligent pour un site ultra rapide.",
            },
            {
                title: "Accessibilité",
                description:
                    "Respect des standards WCAG et audit Lighthouse pour offrir une expérience inclusive.",
            },
        ],
        services: [
            {
                title: "Applications SPA et PWA",
                description:
                    "Conception d'interfaces dynamiques React, Vue ou vanilla JS selon vos besoins.",
            },
            {
                title: "Back-end Node.js",
                description:
                    "API serverless, workers et micro-services pour soutenir votre croissance.",
            },
            {
                title: "Optimisation d'app existante",
                description:
                    "Refactoring, réduction du bundle et amélioration de la qualité du code.",
            },
        ],
        results: [
            {
                value: "x3",
                label: "taux de conversion",
                description: "sur un tunnel e-commerce optimisé avec un front JavaScript dédié.",
            },
            {
                value: "95/100",
                label: "score Lighthouse",
                description: "obtenu après une optimisation ciblée des performances.",
            },
            {
                value: "100k+",
                label: "utilisateurs quotidiens",
                description: "sur des applications JavaScript temps réel.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Notre application JavaScript était lente et instable. Dylan a réécrit le cœur critique et mis en place un monitoring efficace : nous avons retrouvé la confiance des clients.",
                author: "Sophie L.",
                role: "CEO, marketplace B2C",
            },
        ],
        faq: [
            {
                question: "Quelle stack JavaScript maîtrisez-vous ?",
                answer:
                    "React, Next.js, Vue, Node.js, Express, NestJS, Astro… J'interviens du prototype au produit à forte audience.",
            },
            {
                question: "Pouvez-vous améliorer une application JavaScript lente ?",
                answer:
                    "Oui, j'analyse les métriques web, le code et les requêtes réseau pour prioriser les optimisations à fort impact.",
            },
            {
                question: "Proposez-vous un accompagnement analytics ?",
                answer:
                    "Je configure des tableaux de bord (GA4, PostHog, Matomo) pour suivre l'impact des évolutions et piloter vos décisions.",
            },
        ],
    },
    {
        slug: "mysql",
        technology: "MySQL",
        heroTitle: "Développeur MySQL freelance",
        heroSubtitle: "Des bases de données MySQL performantes et sécurisées",
        heroDescription:
            "J'optimise et je conçois vos schémas MySQL pour supporter des charges importantes, garantir l'intégrité des données et accélérer vos applications métier.",
        seoDescription:
            "Expert MySQL freelance : audit de bases de données, optimisation de requêtes, haute disponibilité et accompagnement DevOps.",
        keywords: [
            "expert MySQL",
            "freelance MySQL",
            "optimisation MySQL",
            "administrateur MySQL",
            "base de données MySQL",
        ],
        highlights: [
            {
                title: "Schémas solides",
                description:
                    "Modélisation normalisée, indexation intelligente et migration de données sans friction.",
            },
            {
                title: "Performances maximales",
                description:
                    "Profiling, tuning serveur et réplication pour absorber vos pics de trafic.",
            },
            {
                title: "Sécurité & conformité",
                description:
                    "Sauvegardes automatisées, chiffrement au repos et contrôle des accès pour protéger vos données sensibles.",
            },
        ],
        services: [
            {
                title: "Audit & optimisation",
                description:
                    "Analyse des requêtes lentes, ajout d'index, refactoring SQL et monitoring proactif.",
            },
            {
                title: "Architecture haute disponibilité",
                description:
                    "Mise en place de réplication, clustering, plan de reprise d'activité et procédures d'escalade.",
            },
            {
                title: "Accompagnement DevOps",
                description:
                    "CI/CD des migrations (Flyway, Prisma), infrastructure as code et alerting sur mesure.",
            },
        ],
        results: [
            {
                value: "-70%",
                label: "de temps de réponse",
                description: "grâce à l'optimisation des requêtes critiques.",
            },
            {
                value: "0 incident",
                label: "en 12 mois",
                description: "après la mise en place d'un plan de reprise MySQL complet.",
            },
            {
                value: "3 To",
                label: "de données gérées",
                description: "pour des plateformes SaaS à fort trafic.",
            },
        ],
        testimonials: [
            {
                quote:
                    "L'audit MySQL réalisé par Dylan nous a permis de diviser le temps de chargement de notre application par trois tout en réduisant les coûts serveurs.",
                author: "Hugo R.",
                role: "Responsable technique, scale-up retail",
            },
        ],
        faq: [
            {
                question: "Pouvez-vous intervenir sur une base MySQL en production ?",
                answer:
                    "Oui, avec une méthodologie sécurisée : duplication de l'environnement, audit, plan d'action validé et déploiement progressif.",
            },
            {
                question: "Proposez-vous un monitoring MySQL ?",
                answer:
                    "Je mets en place des dashboards (Grafana, Metabase) et des alertes personnalisées pour détecter les anomalies avant qu'elles n'impactent vos utilisateurs.",
            },
            {
                question: "Avez-vous de l'expérience avec des ORM ?",
                answer:
                    "Oui, j'optimise aussi bien des requêtes SQL brutes que des ORM comme Prisma, Doctrine ou Eloquent.",
            },
        ],
    },
    {
        slug: "postgresql",
        technology: "PostgreSQL",
        heroTitle: "Développeur PostgreSQL freelance",
        heroSubtitle: "PostgreSQL pour des applications exigeantes et data-driven",
        heroDescription:
            "Je conçois des architectures PostgreSQL capables de gérer un volume important de données, d'alimenter vos équipes data et de sécuriser vos opérations critiques.",
        seoDescription:
            "Expert PostgreSQL freelance : conception de schémas, optimisation de requêtes, haute disponibilité et data pipelines.",
        keywords: [
            "expert PostgreSQL",
            "freelance PostgreSQL",
            "optimisation PostgreSQL",
            "base de données PostgreSQL",
            "DBA PostgreSQL",
        ],
        highlights: [
            {
                title: "Données fiables",
                description:
                    "Contraintes, triggers et politiques de sécurité row-level pour un contrôle précis.",
            },
            {
                title: "Analyse en temps réel",
                description:
                    "Indexation avancée (GIN, BRIN), partitionnement et requêtes analytiques performantes.",
            },
            {
                title: "Scalabilité maîtrisée",
                description:
                    "Répartition de charge, réplication logique et stratégie multi-région pour vos besoins internationaux.",
            },
        ],
        services: [
            {
                title: "Architecture & modélisation",
                description:
                    "Design de schémas complexes, gestion des migrations et mise en place d'environnements isolés.",
            },
            {
                title: "Performance & optimisation",
                description:
                    "Analyse des plans d'exécution, tuning des index et paramétrage avancé du serveur PostgreSQL.",
            },
            {
                title: "Data pipelines & BI",
                description:
                    "Mise en place de flux ETL/ELT, réplication vers des entrepôts et automatisation des exports.",
            },
        ],
        results: [
            {
                value: "x5",
                label: "vitesse des reports",
                description: "pour une scale-up qui génère des dashboards financiers en temps réel.",
            },
            {
                value: "99,99%",
                label: "de disponibilité",
                description: "grâce à une architecture haute disponibilité PostgreSQL.",
            },
            {
                value: "GDPR",
                label: "conforme",
                description: "avec une politique de sécurité et de traçabilité adaptée.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Nous avions des ralentissements majeurs sur nos requêtes analytiques. Dylan a restructuré notre base PostgreSQL et nos exports sont désormais instantanés.",
                author: "Mélanie T.",
                role: "Lead Data, fintech",
            },
        ],
        faq: [
            {
                question: "Travaillez-vous avec des extensions PostgreSQL ?",
                answer:
                    "Oui, PostGIS, TimescaleDB, pg_cron… Je sélectionne les extensions adaptées à vos besoins métiers.",
            },
            {
                question: "Pouvez-vous nous accompagner sur la migration vers PostgreSQL ?",
                answer:
                    "Je prépare le plan de migration, les scripts de transformation et j'assure un cut-over sécurisé.",
            },
            {
                question: "Gérez-vous l'observabilité ?",
                answer:
                    "Je mets en place des outils comme pg_stat_statements, pganalyze ou Datadog pour garder la maîtrise de vos performances.",
            },
        ],
    },
    {
        slug: "laravel",
        technology: "Laravel",
        heroTitle: "Développeur Laravel freelance",
        heroSubtitle: "Laravel pour des produits web élégants et efficaces",
        heroDescription:
            "Je crée des applications Laravel qui accélèrent votre business : performances élevées, back-office intuitifs et automatisations poussées.",
        seoDescription:
            "Développeur Laravel freelance : applications sur mesure, API, SaaS et maintenance experte du framework Laravel.",
        keywords: [
            "développeur Laravel",
            "freelance Laravel",
            "application Laravel",
            "expert Laravel",
            "Laravel France",
        ],
        highlights: [
            {
                title: "Productivité maximale",
                description:
                    "Laravel Breeze, Livewire, queues, events… j'exploite l'écosystème pour livrer vite et bien.",
            },
            {
                title: "Back-offices intuitifs",
                description:
                    "Interfaces Tailwind et Filament pour permettre à vos équipes d'agir sans friction.",
            },
            {
                title: "Automatisation",
                description:
                    "Jobs asynchrones, notifications et intégrations externes pour gagner du temps au quotidien.",
            },
        ],
        services: [
            {
                title: "Applications Laravel sur mesure",
                description:
                    "Du cahier des charges au déploiement, je construis une solution adaptée à vos processus internes.",
            },
            {
                title: "API Laravel performantes",
                description:
                    "API REST et GraphQL sécurisées, documentation et monitoring inclus.",
            },
            {
                title: "Maintenance & évolutions",
                description:
                    "Mise à jour de versions, refactoring de code legacy, revue de sécurité et support long terme.",
            },
        ],
        results: [
            {
                value: "+180%",
                label: "de leads qualifiés",
                description: "grâce à un portail partenaire construit avec Laravel.",
            },
            {
                value: "2 semaines",
                label: "pour lancer une V1",
                description: "avec un socle Laravel prêt à évoluer.",
            },
            {
                value: "0 downtime",
                label: "au déploiement",
                description: "via des pipelines Laravel Vapor et Forge bien configurés.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Notre SaaS Laravel stagnait. Dylan a repris le code, mis en place des tests et livré les fonctionnalités attendues par nos clients enterprise.",
                author: "Olivier S.",
                role: "CEO, solution RH",
            },
        ],
        faq: [
            {
                question: "Pouvez-vous reprendre un projet Laravel existant ?",
                answer:
                    "Oui, j'effectue un audit du code et de l'infrastructure, je priorise les actions et je sécurise vos déploiements.",
            },
            {
                question: "Quel hébergement recommandez-vous ?",
                answer:
                    "Selon votre contexte : Laravel Vapor, Forge, Kubernetes ou infrastructure sur mesure avec pipelines CI/CD.",
            },
            {
                question: "Travaillez-vous avec les packages Laravel populaires ?",
                answer:
                    "Oui : Livewire, Filament, Nova, Cashier, Scout… Je sélectionne les packages les plus pertinents pour votre projet.",
            },
        ],
    },
    {
        slug: "symfony",
        technology: "Symfony",
        heroTitle: "Développeur Symfony freelance",
        heroSubtitle: "Symfony pour des applications métiers robustes",
        heroDescription:
            "J'aide les équipes produit à concevoir et faire évoluer des applications Symfony complexes, fiables et conformes aux standards de l'entreprise.",
        seoDescription:
            "Freelance Symfony : architecture hexagonale, API Platform, industrialisation DevOps et accompagnement d'équipes.",
        keywords: [
            "développeur Symfony",
            "freelance Symfony",
            "expert Symfony",
            "application Symfony",
            "API Platform",
        ],
        highlights: [
            {
                title: "Architecture évolutive",
                description:
                    "Domain Driven Design, CQRS, messagerie asynchrone et tests pour une base de code durable.",
            },
            {
                title: "API Platform & GraphQL",
                description:
                    "Exposez vos données en toute sécurité avec des API documentées et performantes.",
            },
            {
                title: "Culture qualité",
                description:
                    "Revue de code, pair programming et pipeline CI pour aligner tout le monde sur les bonnes pratiques Symfony.",
            },
        ],
        services: [
            {
                title: "Développement d'applications Symfony",
                description:
                    "Back-office, CRM ou outil métier sur mesure avec une architecture solide et maintenable.",
            },
            {
                title: "Industrialisation DevOps",
                description:
                    "Docker, Kubernetes, GitLab CI, monitoring et alerting pour vos applications Symfony.",
            },
            {
                title: "Coaching d'équipe",
                description:
                    "Montée en compétences, pair programming et documentation des standards Symfony.",
            },
        ],
        results: [
            {
                value: "30%",
                label: "de temps de dev gagné",
                description: "grâce à une architecture Symfony repensée et mieux documentée.",
            },
            {
                value: "4x",
                label: "plus de releases",
                description: "après l'automatisation complète de la chaîne CI/CD.",
            },
            {
                value: "ISO 27001",
                label: "préparée",
                description: "avec un renforcement des contrôles de sécurité dans Symfony.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Dylan a structuré notre projet Symfony et coaché l'équipe. Le code est plus propre, la communication fluide et les livraisons prévisibles.",
                author: "Farah K.",
                role: "Head of Engineering, éditeur SaaS",
            },
        ],
        faq: [
            {
                question: "Travaillez-vous avec Symfony 7 ?",
                answer:
                    "Oui, je prends en charge les versions récentes comme les migrations depuis Symfony 3/4/5.",
            },
            {
                question: "Pouvez-vous améliorer nos performances Symfony ?",
                answer:
                    "Je réalise un audit des requêtes Doctrine, du cache HTTP, des jobs async et j'applique les optimisations adaptées.",
            },
            {
                question: "Intervenez-vous en renfort temporaire ?",
                answer:
                    "Oui, je peux rejoindre votre équipe produit pour accélérer un chantier critique ou sécuriser une release.",
            },
        ],
    },
    {
        slug: "next-js",
        technology: "Next.js",
        heroTitle: "Développeur Next.js freelance",
        heroSubtitle: "Sites et applications Next.js taillés pour le SEO et la conversion",
        heroDescription:
            "Je construis des expériences Next.js ultra performantes avec rendu hybride (SSR/SSG), design system maîtrisé et intégration marketing poussée.",
        seoDescription:
            "Développeur Next.js freelance : création de sites vitrines, applications SaaS, optimisation SEO et performances Core Web Vitals.",
        keywords: [
            "développeur Next.js",
            "freelance Next.js",
            "site Next.js",
            "SEO Next.js",
            "application Next.js",
        ],
        highlights: [
            {
                title: "SEO technique",
                description:
                    "SSG, sitemaps, gestion des métadonnées et données structurées pour un référencement durable.",
            },
            {
                title: "Performance irréprochable",
                description:
                    "Optimisation des images, streaming SSR et caching intelligent pour des temps de chargement instantanés.",
            },
            {
                title: "Stack headless",
                description:
                    "Intégration de CMS (Sanity, Contentful), CRM, analytics et outils marketing pour piloter la croissance.",
            },
        ],
        services: [
            {
                title: "Sites vitrines SEO",
                description:
                    "Arborescence, copywriting, composants réutilisables et mesure de conversion.",
            },
            {
                title: "Applications SaaS Next.js",
                description:
                    "Auth, billing, dashboards temps réel et intégration API avec une architecture solide.",
            },
            {
                title: "Optimisation Core Web Vitals",
                description:
                    "Audit Lighthouse, amélioration du LCP, CLS et TTI pour booster votre positionnement.",
            },
        ],
        results: [
            {
                value: "+210%",
                label: "de trafic organique",
                description: "après la refonte d'un site corporate sous Next.js.",
            },
            {
                value: "<1s",
                label: "LCP sur mobile",
                description: "grâce à l'optimisation du rendu et du caching.",
            },
            {
                value: "+35%",
                label: "de MQL",
                description: "via une intégration marketing segmentée et des landing pages dynamiques.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Notre ancien site n'apparaissait pas sur Google. Avec Next.js et l'accompagnement de Dylan, nous sommes passés de 0 à 20k visiteurs mensuels en 6 mois.",
                author: "Laura P.",
                role: "CMO, agence B2B",
            },
        ],
        faq: [
            {
                question: "Pouvez-vous migrer un site existant vers Next.js ?",
                answer:
                    "Oui, je planifie la migration, j'industrialise les redirections et je préserve vos positions SEO.",
            },
            {
                question: "Gérez-vous l'hébergement ?",
                answer:
                    "Vercel, Netlify, AWS, Render… Je choisis l'infrastructure adaptée et j'automatise les déploiements.",
            },
            {
                question: "Intégrez-vous des CMS headless ?",
                answer:
                    "Oui, Sanity, Contentful, Strapi, Directus… Je mets en place un contenu modulable et facile à éditer.",
            },
        ],
    },
    {
        slug: "react",
        technology: "React",
        heroTitle: "Développeur React freelance",
        heroSubtitle: "Interfaces React hautement performantes et maintenables",
        heroDescription:
            "Je conçois vos applications React avec un design system robuste, un state management maîtrisé et un focus constant sur l'expérience utilisateur.",
        seoDescription:
            "Expert React freelance : design system, state management, tests et performances pour vos applications web et mobile.",
        keywords: [
            "développeur React",
            "freelance React",
            "application React",
            "React frontend",
            "expert React",
        ],
        highlights: [
            {
                title: "Design system scalable",
                description:
                    "Composants réutilisables, Storybook et documentation claire pour aligner produit et tech.",
            },
            {
                title: "State management maîtrisé",
                description:
                    "React Query, Zustand, Redux Toolkit… Je choisis l'outil le plus adapté à votre cas d'usage.",
            },
            {
                title: "Qualité assurée",
                description:
                    "Tests unitaires, visuels et end-to-end pour déployer en toute confiance.",
            },
        ],
        services: [
            {
                title: "Création d'app React",
                description:
                    "SPA, dashboards, outils internes ou front office, avec un socle technique solide.",
            },
            {
                title: "Modernisation d'une base React",
                description:
                    "Migration vers React 19, Server Components, Suspense et amélioration des performances.",
            },
            {
                title: "Design system & UI kit",
                description:
                    "Création ou refonte d'un système de composants aligné sur votre identité de marque.",
            },
        ],
        results: [
            {
                value: "+50%",
                label: "de rétention",
                description: "après l'amélioration UX d'une application React grand public.",
            },
            {
                value: "2x",
                label: "plus rapide à développer",
                description: "grâce à un design system React modulable.",
            },
            {
                value: "<100ms",
                label: "de TTFB",
                description: "en optimisant le rendu et le code splitting.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Dylan a structuré notre design system React et coaché l'équipe front. Nous livrons aujourd'hui 2 fois plus vite.",
                author: "Romain V.",
                role: "Lead Front, plateforme SaaS",
            },
        ],
        faq: [
            {
                question: "Quels outils utilisez-vous avec React ?",
                answer:
                    "Next.js, Remix, Vite, React Query, Tailwind CSS, Radix UI… Je construis une stack sur mesure selon votre produit.",
            },
            {
                question: "Proposez-vous un accompagnement UI/UX ?",
                answer:
                    "Je travaille avec des designers partenaires pour proposer maquettes, tests utilisateurs et itérations rapides.",
            },
            {
                question: "Pouvez-vous intervenir sur React Native ?",
                answer:
                    "Je peux piloter ou accompagner votre équipe mobile et assurer la cohérence entre vos produits web et mobile.",
            },
        ],
    },
    {
        slug: "tailwind-css",
        technology: "Tailwind CSS",
        heroTitle: "Développeur Tailwind CSS freelance",
        heroSubtitle: "Design systems Tailwind sur mesure et ultra rapides",
        heroDescription:
            "J'utilise Tailwind CSS pour créer des interfaces élégantes, cohérentes et optimisées, prêtes à être déployées rapidement sur vos produits web.",
        seoDescription:
            "Expert Tailwind CSS : création de design systems, refonte UI, optimisation des performances et intégration dans vos projets React, Next.js ou Laravel.",
        keywords: [
            "développeur Tailwind CSS",
            "freelance Tailwind",
            "design system Tailwind",
            "UI Tailwind CSS",
            "expert Tailwind",
        ],
        highlights: [
            {
                title: "Identité visuelle respectée",
                description:
                    "Palette, typographie, composants et animations cohérents avec votre marque.",
            },
            {
                title: "Productivité",
                description:
                    "Tailwind + Storybook pour livrer des interfaces en un temps record.",
            },
            {
                title: "Performance",
                description:
                    "Purge CSS, dark mode, responsive design maîtrisé et accessibilité intégrée.",
            },
        ],
        services: [
            {
                title: "Design system Tailwind",
                description:
                    "Création d'une librairie de composants documentée et réutilisable par toutes vos équipes.",
            },
            {
                title: "Refonte UI",
                description:
                    "Modernisation de vos interfaces avec Tailwind, animations fluides et conversion optimisée.",
            },
            {
                title: "Intégration front-end",
                description:
                    "Implémentation Tailwind dans vos projets React, Next.js, Laravel ou Vue.",
            },
        ],
        results: [
            {
                value: "-60%",
                label: "de temps de maquettage",
                description: "grâce à un design system Tailwind complet.",
            },
            {
                value: "+35%",
                label: "de conversion",
                description: "après une refonte UI Tailwind orientée growth.",
            },
            {
                value: "100%",
                label: "responsive",
                description: "pour des expériences parfaites sur desktop, tablette et mobile.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Nous avions besoin d'une UI cohérente et rapide à faire évoluer. Dylan a mis en place Tailwind et Storybook : le design est enfin maîtrisé.",
                author: "Camille B.",
                role: "Head of Design, startup e-commerce",
            },
        ],
        faq: [
            {
                question: "Pouvez-vous travailler avec nos designers ?",
                answer:
                    "Oui, je traduis vos maquettes Figma en composants Tailwind fidèles et performants.",
            },
            {
                question: "Tailwind est-il adapté aux projets enterprise ?",
                answer:
                    "Oui, avec une configuration adaptée, des tokens et un design system documenté, Tailwind s'intègre parfaitement aux grands comptes.",
            },
            {
                question: "Proposez-vous une formation Tailwind ?",
                answer:
                    "Je forme vos équipes au design system, aux conventions Tailwind et aux bonnes pratiques d'intégration.",
            },
        ],
    },
];

export const technologySlugs = technologyPages.map((page) => page.slug);

export function getTechnologyPage(slug: string) {
    return technologyPages.find((page) => page.slug === slug);
}
