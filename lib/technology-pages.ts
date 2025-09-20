export type TechnologyPageContent = {
    slug: string;
    technology: string;
    city?: string;
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
        slug: "php-paris",
        technology: "PHP",
        city: "Paris",
        heroTitle: "Développeur web PHP freelance à Paris",
        heroSubtitle: "Livrez des plateformes PHP ambitieuses pour vos équipes parisiennes",
        heroDescription:
            "Au cœur de l'écosystème tech parisien, j'accompagne startups, scale-ups et ETI pour sécuriser leurs produits PHP : audits flash, refontes agiles et coaching d'équipes produit.",
        seoDescription:
            "Développeur web PHP freelance à Paris : création d'applications métier, API performantes, TMA et coaching pour startups et grands comptes parisiens.",
        keywords: [
            "développeur PHP Paris",
            "freelance PHP Paris",
            "développeur web PHP Paris",
            "expert PHP Paris",
            "consultant PHP Paris",
        ],
        highlights: [
            {
                title: "Expertise scale-up parisiennes",
                description:
                    "Roadmap produit cadrée, priorisation data-driven et sprints alignés avec vos squads pour délivrer vite et bien.",
            },
            {
                title: "Delivery sécurisé",
                description:
                    "CI/CD, tests automatisés et observabilité pour absorber les pics de trafic marketing et media.",
            },
            {
                title: "Collaboration hybride",
                description:
                    "Présence dans vos bureaux parisiens ou travail à distance synchrone avec vos équipes internationales.",
            },
        ],
        services: [
            {
                title: "Kick-off produit en 10 jours",
                description:
                    "Ateliers à Station F ou dans vos locaux, cadrage fonctionnel, architecture PHP et roadmap de livraison.",
            },
            {
                title: "Développement d'API fintech",
                description:
                    "Sécurisation des flux, conformité RGPD et optimisation des temps de réponse pour vos services financiers.",
            },
            {
                title: "TMA premium",
                description:
                    "Support 24/5, monitoring et mises à jour régulières pour vos plateformes critiques parisiennes.",
            },
        ],
        results: [
            {
                value: "+45%",
                label: "de transactions",
                description: "grâce à une API PHP optimisée pour une fintech parisienne.",
            },
            {
                value: "10 jours",
                label: "pour livrer un POC",
                description: "avec une équipe produit basée dans le Sentier.",
            },
            {
                value: "99,9%",
                label: "de disponibilité",
                description: "atteinte sur une plateforme média à très fort trafic.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Dylan a cadré notre refonte PHP en un mois. Les équipes Produit et Data parisiennes ont gagné un cycle d'avance sur la roadmap.",
                author: "Sophie R.",
                role: "CTO, fintech parisienne",
            },
        ],
        faq: [
            {
                question: "Pouvez-vous intervenir dans nos bureaux parisiens ?",
                answer:
                    "Oui, j'organise des rituels sur site dans vos locaux (WeWork, Station F, grands comptes) et maintiens un suivi quotidien à distance.",
            },
            {
                question: "Gérez-vous la scalabilité pendant les pics média ?",
                answer:
                    "Je dimensionne l'infrastructure PHP, mets en place du caching (Redis, CDN) et des tests de charge pour absorber vos campagnes marketing.",
            },
            {
                question: "Êtes-vous à l'aise avec nos exigences sécurité et conformité ?",
                answer:
                    "Oui, je maîtrise les enjeux RGPD, PCI DSS et cybersécurité, et je travaille avec vos équipes compliance pour documenter chaque décision.",
            },
        ],
    },
    {
        slug: "php-lyon",
        technology: "PHP",
        city: "Lyon",
        heroTitle: "Développeur web PHP freelance à Lyon",
        heroSubtitle: "Optimisez vos applications PHP pour la métropole lyonnaise",
        heroDescription:
            "Installé à Lyon, j'accompagne les acteurs industriels, santé et retail pour moderniser leurs plateformes PHP : audit express, refonte maîtrisée et accompagnement des équipes locales.",
        seoDescription:
            "Développeur web PHP freelance à Lyon : refonte d'applications métier, intégrations ERP/GPAO, API performantes et maintenance pour entreprises lyonnaises.",
        keywords: [
            "développeur PHP Lyon",
            "freelance PHP Lyon",
            "développeur web PHP Lyon",
            "expert PHP Lyon",
            "consultant PHP Lyon",
        ],
        highlights: [
            {
                title: "Proximité avec l'écosystème lyonnais",
                description:
                    "Rendez-vous réguliers à la Part-Dieu ou Confluence, travail main dans la main avec vos équipes produit.",
            },
            {
                title: "Expertise secteurs régaliens",
                description:
                    "Manufacturing, biotech, santé : j'adapte vos outils PHP aux exigences qualité et réglementaires locales.",
            },
            {
                title: "Croissance maîtrisée",
                description:
                    "Coaching agile, suivi des KPIs et amélioration continue pour vos plateformes en scale-up.",
            },
        ],
        services: [
            {
                title: "Refonte d'applications métier",
                description:
                    "Audit technique, ateliers sur site à Lyon et nouvelle architecture PHP prête pour la croissance.",
            },
            {
                title: "Intégrations ERP & GPAO",
                description:
                    "Connecteurs Sage, Microsoft Dynamics ou SAP pour fluidifier vos processus industriels.",
            },
            {
                title: "Coaching d'équipe PHP",
                description:
                    "Formations sur vos standards, pair-programming et montée en compétence de vos développeurs lyonnais.",
            },
        ],
        results: [
            {
                value: "+30%",
                label: "de productivité",
                description: "suite à l'automatisation des workflows d'une PME lyonnaise.",
            },
            {
                value: "8 semaines",
                label: "pour lancer un portail B2B",
                description: "au service d'un acteur industriel de la vallée du Rhône.",
            },
            {
                value: "100%",
                label: "d'adoption",
                description: "par les équipes support après une refonte UX complète.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Nous avions un legacy PHP difficile à faire évoluer. Dylan a piloté la migration sans interruption de service et a formé notre équipe lyonnaise.",
                author: "Marc L.",
                role: "DSI, groupe industriel lyonnais",
            },
        ],
        faq: [
            {
                question: "Vous déplacez-vous sur Lyon et sa région ?",
                answer:
                    "Oui, j'interviens sur site dans toute la métropole (Villeurbanne, Vénissieux, Meyzieu) pour des ateliers ou des sprints intensifs.",
            },
            {
                question: "Pouvez-vous travailler avec nos partenaires locaux ?",
                answer:
                    "Je coordonne les intégrations avec vos prestataires (hébergeurs, SSII, studios design) pour sécuriser chaque livraison.",
            },
            {
                question: "Accompagnez-vous la montée en compétences interne ?",
                answer:
                    "Oui, je propose coaching, revues de code et documentation pour rendre vos équipes PHP autonomes rapidement.",
            },
        ],
    },
    {
        slug: "php-marseille",
        technology: "PHP",
        city: "Marseille",
        heroTitle: "Développeur web PHP freelance à Marseille",
        heroSubtitle: "Des plateformes PHP fiables pour l'économie marseillaise",
        heroDescription:
            "Depuis Marseille, j'accompagne les acteurs du port, du tourisme et du e-commerce méditerranéen pour bâtir des solutions PHP robustes, sécurisées et prêtes à scaler.",
        seoDescription:
            "Développeur web PHP freelance à Marseille : création d'applications sur mesure, API logistique, maintenance et optimisation pour entreprises marseillaises.",
        keywords: [
            "développeur PHP Marseille",
            "freelance PHP Marseille",
            "développeur web PHP Marseille",
            "expert PHP Marseille",
            "consultant PHP Marseille",
        ],
        highlights: [
            {
                title: "Expertise logistique & portuaire",
                description:
                    "Synchronisation avec vos SI portuaires, traçabilité en temps réel et reporting sur mesure.",
            },
            {
                title: "Performance e-commerce",
                description:
                    "Optimisation des tunnels d'achat, gestion des pics saisonniers et intégration marketplace.",
            },
            {
                title: "Sécurité renforcée",
                description:
                    "Protection des API, audits OWASP et durcissement serveur pour vos données sensibles.",
            },
        ],
        services: [
            {
                title: "Plateformes logistiques PHP",
                description:
                    "Gestion des flux, interfaces transporteurs et automatisation documentaire pour le port de Marseille.",
            },
            {
                title: "Optimisation e-commerce",
                description:
                    "Amélioration des performances Prestashop/Laravel et intégration CRM pour booster vos ventes.",
            },
            {
                title: "Maintenance évolutive",
                description:
                    "Suivi mensuel, correctifs rapides et nouvelles features pour vos sites touristiques et culturels.",
            },
        ],
        results: [
            {
                value: "-35%",
                label: "de coûts opérationnels",
                description: "grâce à la digitalisation PHP d'un transit portuaire.",
            },
            {
                value: "+22%",
                label: "de conversions",
                description: "après l'optimisation d'une boutique en ligne marseillaise.",
            },
            {
                value: "48h",
                label: "pour déployer",
                description: "des correctifs critiques suite à des incidents sécurité.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Dylan comprend nos enjeux portuaires. Sa solution PHP a fluidifié nos échanges de données avec les transitaires méditerranéens.",
                author: "Nadia G.",
                role: "Responsable SI, opérateur logistique marseillais",
            },
        ],
        faq: [
            {
                question: "Intervenez-vous sur site dans nos entrepôts ?",
                answer:
                    "Oui, je me déplace sur Marseille, Fos-sur-Mer et Aubagne pour cadrer les besoins avec vos équipes terrain.",
            },
            {
                question: "Pouvez-vous gérer nos contraintes multilingues ?",
                answer:
                    "Je conçois des back-offices PHP multilingues adaptés aux flux internationaux et aux équipes bilingues.",
            },
            {
                question: "Comment sécurisez-vous nos échanges de données ?",
                answer:
                    "Mise en place de tunnels chiffrés, journalisation et monitoring 24/7 pour protéger vos données sensibles.",
            },
        ],
    },
    {
        slug: "php-toulouse",
        technology: "PHP",
        city: "Toulouse",
        heroTitle: "Développeur web PHP freelance à Toulouse",
        heroSubtitle: "Accélérez vos projets PHP dans l'écosystème toulousain",
        heroDescription:
            "Basé à Toulouse, j'aide les acteurs aéronautiques, spatiaux et edtech à livrer des plateformes PHP fiables, scalables et intégrées à leurs outils métiers.",
        seoDescription:
            "Développeur web PHP freelance à Toulouse : applications métier, API industrielles, maintenance et coaching agile pour entreprises de la région.",
        keywords: [
            "développeur PHP Toulouse",
            "freelance PHP Toulouse",
            "développeur web PHP Toulouse",
            "expert PHP Toulouse",
            "consultant PHP Toulouse",
        ],
        highlights: [
            {
                title: "Culture engineering",
                description:
                    "Process qualité inspirés de l'aéronautique : revues de code strictes, tests automatisés et traçabilité.",
            },
            {
                title: "Interopérabilité SI",
                description:
                    "Connexion à vos PLM, ERP industriels et outils data science pour des flux fiables.",
            },
            {
                title: "Collaboration agile",
                description:
                    "Scrum ou Kanban, rituels partagés avec vos équipes produits basées à Labège ou Blagnac.",
            },
        ],
        services: [
            {
                title: "Portails partenaires aéronautiques",
                description:
                    "Gestion des droits, traçabilité et sécurité renforcée pour vos sous-traitants et fournisseurs.",
            },
            {
                title: "API temps réel",
                description:
                    "PHP + websockets pour suivre vos opérations et synchroniser vos jumeaux numériques.",
            },
            {
                title: "Formation des équipes",
                description:
                    "Sessions dédiées à vos développeurs et product owners pour accélérer la livraison.",
            },
        ],
        results: [
            {
                value: "12 semaines",
                label: "pour livrer un portail",
                description: "connecté à un SI industriel toulousain.",
            },
            {
                value: "+28%",
                label: "de rapidité de release",
                description: "grâce à une pipeline CI/CD industrialisée.",
            },
            {
                value: "0 incident",
                label: "en production",
                description: "durant les 6 premiers mois de mise en ligne.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Grâce à Dylan, notre plateforme PHP s'interface parfaitement avec nos outils industriels et respecte nos standards qualité.",
                author: "Isabelle P.",
                role: "Product Manager, groupe aéronautique toulousain",
            },
        ],
        faq: [
            {
                question: "Pouvez-vous travailler en environnement sécurisé ?",
                answer:
                    "Oui, je respecte vos procédures d'accès (badge, VPN, bastion) et j'utilise des environnements isolés pour vos données sensibles.",
            },
            {
                question: "Intervenez-vous en anglais ?",
                answer:
                    "Je collabore quotidiennement avec des équipes internationales et j'anime les rituels en français ou anglais.",
            },
            {
                question: "Gérez-vous nos contraintes de planification ?",
                answer:
                    "Je construis un plan projet aligné avec vos jalons industriels et vos cycles de certification.",
            },
        ],
    },
    {
        slug: "php-bordeaux",
        technology: "PHP",
        city: "Bordeaux",
        heroTitle: "Développeur web PHP freelance à Bordeaux",
        heroSubtitle: "Boostez vos projets PHP dans la métropole bordelaise",
        heroDescription:
            "À Bordeaux, j'accompagne les acteurs du vin, du tourisme et des services numériques pour créer des expériences PHP performantes et orientées business.",
        seoDescription:
            "Développeur web PHP freelance à Bordeaux : création d'applications sur mesure, connecteurs e-commerce, maintenance et optimisation pour entreprises girondines.",
        keywords: [
            "développeur PHP Bordeaux",
            "freelance PHP Bordeaux",
            "développeur web PHP Bordeaux",
            "expert PHP Bordeaux",
            "consultant PHP Bordeaux",
        ],
        highlights: [
            {
                title: "Expérience e-commerce & tourisme",
                description:
                    "Gestion des réservations, billetterie et ventes omnicanales pour vos domaines viticoles et musées.",
            },
            {
                title: "Approche data-driven",
                description:
                    "Dashboards, KPIs et automatisation marketing pour piloter vos conversions.",
            },
            {
                title: "Équipe locale renforcée",
                description:
                    "Ateliers réguliers aux Chartrons ou à Darwin pour aligner produit, marketing et technique.",
            },
        ],
        services: [
            {
                title: "Plateformes de réservation",
                description:
                    "Systèmes PHP pour visites de châteaux, événements et expériences oenotouristiques.",
            },
            {
                title: "Connecteurs marketplace",
                description:
                    "Intégration avec Shopify, Amazon ou plateformes locales pour centraliser vos commandes.",
            },
            {
                title: "Maintenance proactive",
                description:
                    "Veille technologique, mises à jour et monitoring pour vos plateformes SaaS bordelaises.",
            },
        ],
        results: [
            {
                value: "+32%",
                label: "de réservations",
                description: "après la refonte d'une plateforme touristique.",
            },
            {
                value: "6 semaines",
                label: "pour lancer un tunnel de vente",
                description: "pour un domaine viticole girondin.",
            },
            {
                value: "4x",
                label: "moins de maintenance",
                description: "grâce à l'automatisation et aux tests end-to-end.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Dylan a su traduire nos enjeux marketing en un back-office PHP simple à piloter et relié à nos outils commerciaux.",
                author: "Claire V.",
                role: "Responsable digital, groupe oenotouristique bordelais",
            },
        ],
        faq: [
            {
                question: "Pouvez-vous travailler avec notre agence locale ?",
                answer:
                    "Oui, je co-construis la roadmap technique avec vos partenaires marketing ou design basés à Bordeaux.",
            },
            {
                question: "Gérez-vous la saisonnalité de nos ventes ?",
                answer:
                    "Je dimensionne l'infrastructure PHP pour absorber les pics et je mets en place du caching intelligent.",
            },
            {
                question: "Proposez-vous un support bilingue ?",
                answer:
                    "Je peux fournir interfaces et documentation en français et anglais pour vos équipes internationales.",
            },
        ],
    },
    {
        slug: "php-lille",
        technology: "PHP",
        city: "Lille",
        heroTitle: "Développeur web PHP freelance à Lille",
        heroSubtitle: "Accélérez vos projets PHP retail et e-commerce dans le Nord",
        heroDescription:
            "Basé à Lille, j'accompagne retailers, pure players et services B2B pour bâtir des solutions PHP résilientes, omnicanales et orientées performance.",
        seoDescription:
            "Développeur web PHP freelance à Lille : refonte e-commerce, PIM/ERP, APIs logistiques et maintenance pour entreprises du Nord.",
        keywords: [
            "développeur PHP Lille",
            "freelance PHP Lille",
            "développeur web PHP Lille",
            "expert PHP Lille",
            "consultant PHP Lille",
        ],
        highlights: [
            {
                title: "Culture retail & supply chain",
                description:
                    "Synchronisation avec vos PIM, ERP et outils logistiques pour offrir une expérience unifiée.",
            },
            {
                title: "Omnicanal sans friction",
                description:
                    "Click & collect, ship-from-store et CRM intégrés pour vos clients nordistes.",
            },
            {
                title: "Industrialisation de la qualité",
                description:
                    "Tests automatisés, revue de code et monitoring pour des releases sereines.",
            },
        ],
        services: [
            {
                title: "Refonte e-commerce Magento/Laravel",
                description:
                    "Optimisation des performances, SEO technique et intégrations marketing pour vos enseignes.",
            },
            {
                title: "Portails B2B",
                description:
                    "Accès distributeurs, catalogue personnalisé et gestion des stocks en temps réel.",
            },
            {
                title: "Support continu",
                description:
                    "Supervision, correctifs urgents et évolutions régulières avec vos équipes digitales lilloises.",
            },
        ],
        results: [
            {
                value: "+38%",
                label: "de panier moyen",
                description: "après l'optimisation d'un parcours omnicanal.",
            },
            {
                value: "3x",
                label: "plus rapide",
                description: "pour déployer de nouvelles collections grâce à l'automatisation PHP.",
            },
            {
                value: "24h",
                label: "pour corriger",
                description: "des incidents critiques durant les soldes.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Dylan connaît parfaitement nos enjeux retail. Nos ventes en ligne ont bondi tout en réduisant les tickets SAV.",
                author: "Emilie S.",
                role: "Directrice e-commerce, enseigne lilloise",
            },
        ],
        faq: [
            {
                question: "Travaillez-vous avec nos équipes magasins ?",
                answer:
                    "Oui, je co-construis les parcours omnicanaux avec vos responsables digitaux et retail.",
            },
            {
                question: "Pouvez-vous gérer nos pics de trafic ?",
                answer:
                    "Je mets en place du scaling horizontal, du caching et des tests de charge pour sécuriser vos pics saisonniers.",
            },
            {
                question: "Accompagnez-vous la formation interne ?",
                answer:
                    "Oui, j'anime des ateliers pour vos développeurs et votre support technique afin d'assurer la continuité.",
            },
        ],
    },
    {
        slug: "php-nantes",
        technology: "PHP",
        city: "Nantes",
        heroTitle: "Développeur web PHP freelance à Nantes",
        heroSubtitle: "Des projets PHP durables pour l'ouest",
        heroDescription:
            "À Nantes, j'aide les entreprises de l'industrie, de l'IoT et des services numériques à livrer des applications PHP pérennes, sécurisées et orientées utilisateurs.",
        seoDescription:
            "Développeur web PHP freelance à Nantes : conception d'applications, intégrations SI, maintenance et agilité pour entreprises ligériennes.",
        keywords: [
            "développeur PHP Nantes",
            "freelance PHP Nantes",
            "développeur web PHP Nantes",
            "expert PHP Nantes",
            "consultant PHP Nantes",
        ],
        highlights: [
            {
                title: "Approche produit centrée utilisateur",
                description:
                    "Co-conception avec vos équipes design et produit, tests utilisateurs et itérations rapides.",
            },
            {
                title: "Interopérabilité SI",
                description:
                    "Connexion à vos plateformes IoT, ERP et solutions métiers pour une vision unifiée.",
            },
            {
                title: "Qualité logicielle durable",
                description:
                    "Tests automatisés, pipeline CI/CD et documentation pour faire vivre vos projets dans le temps.",
            },
        ],
        services: [
            {
                title: "Applications métier sur mesure",
                description:
                    "Architecture PHP modulaire, API et back-office adaptés à vos processus industriels.",
            },
            {
                title: "Intégrations IoT",
                description:
                    "Collecte de données capteurs, traitement en temps réel et dashboards métiers.",
            },
            {
                title: "Tierce maintenance applicative",
                description:
                    "Suivi quotidien, support et évolutions planifiées avec vos équipes nantaises.",
            },
        ],
        results: [
            {
                value: "+25%",
                label: "de productivité",
                description: "grâce à la digitalisation d'un processus industriel nantais.",
            },
            {
                value: "5 semaines",
                label: "pour livrer un MVP",
                description: "d'une plateforme IoT pilotée en PHP.",
            },
            {
                value: "95%",
                label: "de satisfaction",
                description: "mesurée auprès des utilisateurs internes.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Nous avions besoin d'un partenaire fiable pour notre plateforme IoT. Dylan a livré une solution PHP robuste et documentée.",
                author: "Julie H.",
                role: "COO, startup nantaise",
            },
        ],
        faq: [
            {
                question: "Travaillez-vous avec les acteurs de la French Tech Nantes ?",
                answer:
                    "Oui, j'interviens régulièrement dans les incubateurs locaux et je m'adapte à vos méthodes produit.",
            },
            {
                question: "Pouvez-vous reprendre notre legacy ?",
                answer:
                    "Je réalise un audit, sécurise la livraison continue puis planifie la refonte progressive de votre code PHP.",
            },
            {
                question: "Proposez-vous un accompagnement long terme ?",
                answer:
                    "Oui, nous définissons ensemble un contrat de maintenance évolutive avec indicateurs de performance.",
            },
        ],
    },
    {
        slug: "php-strasbourg",
        technology: "PHP",
        city: "Strasbourg",
        heroTitle: "Développeur web PHP freelance à Strasbourg",
        heroSubtitle: "Sécurisez vos projets PHP transfrontaliers",
        heroDescription:
            "Basé à Strasbourg, j'accompagne institutions européennes, entreprises industrielles et services transfrontaliers pour concevoir des solutions PHP fiables et multilingues.",
        seoDescription:
            "Développeur web PHP freelance à Strasbourg : portails institutionnels, intégrations transfrontalières, maintenance et support multilingue.",
        keywords: [
            "développeur PHP Strasbourg",
            "freelance PHP Strasbourg",
            "développeur web PHP Strasbourg",
            "expert PHP Strasbourg",
            "consultant PHP Strasbourg",
        ],
        highlights: [
            {
                title: "Expertise institutionnelle",
                description:
                    "Accessibilité, conformité RGAA et gestion multilingue pour vos portails publics.",
            },
            {
                title: "Interopérabilité franco-allemande",
                description:
                    "Connecteurs SAP, échanges de données transfrontaliers et support bilingue FR/DE.",
            },
            {
                title: "Sécurité renforcée",
                description:
                    "Gestion des identités, authentification forte et chiffrement de bout en bout.",
            },
        ],
        services: [
            {
                title: "Portails institutionnels PHP",
                description:
                    "Architecture scalable, gestion de contenu et workflows de validation pour vos services publics.",
            },
            {
                title: "Intégrations transfrontalières",
                description:
                    "Synchronisation des données avec vos partenaires allemands et suisses.",
            },
            {
                title: "Support multilingue",
                description:
                    "Back-offices bilingues, traduction dynamique et assistance utilisateurs FR/DE.",
            },
        ],
        results: [
            {
                value: "3 mois",
                label: "pour livrer un portail",
                description: "institutionnel multilingue conforme RGAA.",
            },
            {
                value: "+40%",
                label: "d'usagers satisfaits",
                description: "après simplification des parcours en ligne.",
            },
            {
                value: "0 faille",
                label: "critique",
                description: "après audit sécurité indépendant.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Notre portail bilingue devait respecter des normes strictes. Dylan a livré une solution PHP robuste et sécurisée.",
                author: "Helena K.",
                role: "Responsable digital, institution strasbourgeoise",
            },
        ],
        faq: [
            {
                question: "Pouvez-vous travailler avec nos équipes internationales ?",
                answer:
                    "Oui, j'anime les ateliers en français, anglais ou allemand et je m'adapte à vos fuseaux horaires.",
            },
            {
                question: "Respectez-vous les normes d'accessibilité ?",
                answer:
                    "Je maîtrise RGAA/WCAG et je mets en place audits et corrections nécessaires.",
            },
            {
                question: "Comment gérez-vous les données sensibles ?",
                answer:
                    "Chiffrement, anonymisation et politiques de rétention adaptées à vos exigences réglementaires.",
            },
        ],
    },
    {
        slug: "php-montpellier",
        technology: "PHP",
        city: "Montpellier",
        heroTitle: "Développeur web PHP freelance à Montpellier",
        heroSubtitle: "Des solutions PHP agiles pour la French Tech Méditerranée",
        heroDescription:
            "Installé à Montpellier, j'aide les startups healthtech, edtech et smart city à livrer rapidement des applications PHP robustes et orientées croissance.",
        seoDescription:
            "Développeur web PHP freelance à Montpellier : MVP rapides, API performantes, maintenance et coaching pour startups et PME locales.",
        keywords: [
            "développeur PHP Montpellier",
            "freelance PHP Montpellier",
            "développeur web PHP Montpellier",
            "expert PHP Montpellier",
            "consultant PHP Montpellier",
        ],
        highlights: [
            {
                title: "Approche growth",
                description:
                    "Expérimentation rapide, instrumentation analytique et itérations hebdomadaires.",
            },
            {
                title: "Stack moderne",
                description:
                    "Laravel, Symfony, API Platform, Next.js : des technologies adaptées à vos enjeux de scalabilité.",
            },
            {
                title: "Accompagnement produit",
                description:
                    "Cadrage UX, priorisation et coaching pour vos product managers et développeurs.",
            },
        ],
        services: [
            {
                title: "Lancement de MVP",
                description:
                    "Discovery, backlog, développement PHP et mise en production en un temps record.",
            },
            {
                title: "API santé et smart city",
                description:
                    "Sécurité, conformité et intégrations temps réel avec vos partenaires.",
            },
            {
                title: "Maintenance agile",
                description:
                    "Cycle d'itérations courtes, roadmap évolutive et suivi de vos KPIs.",
            },
        ],
        results: [
            {
                value: "6 semaines",
                label: "pour sortir un MVP",
                description: "d'une startup healthtech montpelliéraine.",
            },
            {
                value: "+50%",
                label: "de rétention",
                description: "après refonte UX et optimisation PHP.",
            },
            {
                value: "2x",
                label: "plus rapide",
                description: "pour livrer de nouvelles fonctionnalités grâce à l'automatisation.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Dylan a structuré notre roadmap et livré notre MVP PHP en un temps record. Nous avons convaincu nos investisseurs.",
                author: "Amel B.",
                role: "CEO, startup montpelliéraine",
            },
        ],
        faq: [
            {
                question: "Intervenez-vous auprès des incubateurs locaux ?",
                answer:
                    "Oui, j'accompagne régulièrement les startups du BIC de Montpellier et des pépinières locales.",
            },
            {
                question: "Pouvez-vous prendre en main notre stack existante ?",
                answer:
                    "Je réalise un audit, sécurise la CI/CD puis propose un plan d'itérations priorisées.",
            },
            {
                question: "Proposez-vous des ateliers produit ?",
                answer:
                    "Oui, j'anime des workshops discovery, priorisation et métriques pour aligner toutes les équipes.",
            },
        ],
    },
    {
        slug: "php-nice",
        technology: "PHP",
        city: "Nice",
        heroTitle: "Développeur web PHP freelance à Nice",
        heroSubtitle: "Des expériences PHP premium pour la Côte d'Azur",
        heroDescription:
            "À Nice, j'aide les acteurs du tourisme, de l'immobilier et des services premium à créer des plateformes PHP élégantes, performantes et multilingues.",
        seoDescription:
            "Développeur web PHP freelance à Nice : sites haut de gamme, intégrations CRM, API multilingues et maintenance pour entreprises azuréennes.",
        keywords: [
            "développeur PHP Nice",
            "freelance PHP Nice",
            "développeur web PHP Nice",
            "expert PHP Nice",
            "consultant PHP Nice",
        ],
        highlights: [
            {
                title: "Expérience client premium",
                description:
                    "Parcours haut de gamme, animation éditoriale multilingue et design sur mesure.",
            },
            {
                title: "Ventes internationales",
                description:
                    "Gestion multi-devises, traduction dynamique et conformité fiscale pour vos clients étrangers.",
            },
            {
                title: "Performance mobile",
                description:
                    "Optimisation Lighthouse, temps de chargement réduit et suivi des conversions mobile.",
            },
        ],
        services: [
            {
                title: "Sites de réservation premium",
                description:
                    "Expériences personnalisées pour hôtels, villas et conciergeries de la Côte d'Azur.",
            },
            {
                title: "CRM & marketing automation",
                description:
                    "Connecteurs HubSpot, Salesforce ou Brevo pour fidéliser vos clients haut de gamme.",
            },
            {
                title: "Support multilingue",
                description:
                    "Back-office et front-end en plusieurs langues avec traduction assistée.",
            },
        ],
        results: [
            {
                value: "+55%",
                label: "de réservations directes",
                description: "après la refonte d'un site hôtelier niçois.",
            },
            {
                value: "4x",
                label: "moins de tickets",
                description: "grâce à un back-office PHP simplifié.",
            },
            {
                value: "3 mois",
                label: "pour rentabiliser",
                description: "l'investissement sur une plateforme immobilière premium.",
            },
        ],
        testimonials: [
            {
                quote:
                    "Dylan a conçu une expérience digitale à la hauteur de nos clients internationaux. Nos réservations directes ont explosé.",
                author: "Laura F.",
                role: "Directrice marketing, groupe hôtelier niçois",
            },
        ],
        faq: [
            {
                question: "Gérez-vous nos contenus multilingues ?",
                answer:
                    "Oui, je mets en place une architecture PHP multilingue avec workflows de traduction efficaces.",
            },
            {
                question: "Pouvez-vous intégrer nos outils de conciergerie ?",
                answer:
                    "Je connecte votre plateforme PHP à vos CRM, channel managers et outils partenaires.",
            },
            {
                question: "Proposez-vous un support pendant la haute saison ?",
                answer:
                    "Oui, je mets en place un dispositif de supervision et des astreintes pour sécuriser vos ventes.",
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
