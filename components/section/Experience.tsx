import SectionHeading from "../SectionHeading";
import ExperienceItem from "../ExperienceItem";

const experiences = [
  {
    imageSrc: "/img/experience/decq.svg",
    title: "Decq",
    role: "Développeur full stack",
    description:
      "Decq commercialise un ERP SaaS de micro-personnalisation web-to-print. J’ai contribué au lancement du SaaS et au développement de modules clés, notamment la personnalisation du workflow client : une interface graphique qui permet à chaque client de définir son propre processus.",
    skills: ["PHP", "Symfony", "TypeScript", "Vue.js", "Docker"],
    websiteLink: "https://decq.com/",
  },
  {
    imageSrc: "/img/experience/hexium.webp",
    title: "Hexium",
    role: "Développeur web en agence",
    description:
      "Projets variés au sein d’une agence web : site d’affichage des vols d’un aéroport, développement et maintenance d’un CRM, intégration d’une maquette sur un site e-commerce, maintenance du site d’une agence de location.",
    skills: ["PHP", "Laravel", "Symfony", "Sylius", "React", "Vue.js", "Next.js", "TypeScript", "Docker"],
    websiteLink: "https://www.hexium.io/",
  },
  {
    imageSrc: "/img/experience/wobz.webp",
    title: "Wobz",
    role: "Développeur web",
    description:
      "Nouvelles fonctionnalités et maintenance de l’ERP interne, qui permet la micro-personnalisation de produits via une solution web-to-print : les utilisateurs créent leur design en ligne et l’envoient directement à l’impression.",
    skills: ["PHP", "Symfony", "JavaScript", "jQuery"],
    websiteLink: "https://wobz.com/",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading title="Où j’ai travaillé." />

      <ol className="mt-12 divide-y divide-line border-b border-line">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.title} {...experience} />
        ))}
      </ol>
    </section>
  );
};

export default Experience;
