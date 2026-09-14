import ExperienceItem from "../ExperienceItem";

const experiences = [
  {
    imageSrc: "/img/experience/decq.svg",
    title: "Decq",
    description:
      "Chez Decq, une entreprise spécialisée dans la commercialisation d’un ERP SaaS de micro-personnalisation web-to-print, j’ai contribué au lancement du SaaS ainsi qu’au développement de modules clés, notamment la personnalisation du workflow client. Ce module permet aux clients de définir leur propre workflow via une interface graphique intuitive, offrant ainsi une expérience utilisateur personnalisée et fluide.",
    skills: ["PHP", "JS", "TS", "Symfony", "VueJS", "Docker"],
    websiteLink: "https://decq.com/",
  },
  {
    imageSrc: "/img/experience/hexium.webp",
    title: "Hexium",
    description:
      "J’ai travaillé dans une agence web où j’ai contribué à divers projets, tels que la création d’un site pour l’affichage des vols d’aéroport, le développement et la maintenance d’un CRM, l’intégration d’une maquette dans un site e-commerce, ainsi que la maintenance du site d’une agence de location.",
    skills: ["PHP", "JS", "TS", "Laravel", "Symfony", "Sylius", "React", "VueJS", "Next", "Docker"],
    websiteLink: "https://www.hexium.io/",
  },
  {
    imageSrc: "/img/experience/wobz.webp",
    title: "Wobz",
    description:
      "J’ai contribué au développement de nouvelles fonctionnalités ainsi qu’à la maintenance de l’ERP interne de l’entreprise, permettant la micro-personnalisation des produits grâce à une solution web-to-print. Celle-ci offre aux utilisateurs la possibilité de créer leur design en ligne et de l’envoyer directement à l’impression.",
    skills: ["PHP", "JS", "Symfony", "jQuery"],
    websiteLink: "https://wobz.com/",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mt-8 min-h-screen bg-gray-50 px-4 py-20">
      <h2 className="reveal mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text py-16 text-center text-5xl font-bold text-transparent">
        Experiences
      </h2>

      {experiences.map((experience) => (
        <ExperienceItem key={experience.title} {...experience} />
      ))}
    </section>
  );
};

export default Experience;
