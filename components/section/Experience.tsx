import { motion } from "framer-motion";
import ExperienceItem from "../ExperienceItem";

const Experience = () => {
  return (
    <motion.section
      id='experience'
      className='min-h-screen bg-gray-50 dark:bg-gray-800 py-20 px-4 mt-8'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className='py-16 text-5xl font-bold bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent mb-12 text-center'
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <ExperienceItem
        imageSrc='/img/experience/decq.svg'
        title='Decq'
        description='Chez Decq, une entreprise spécialisée dans la commercialisation d’un ERP SaaS de micro-personnalisation web-to-print, j’ai contribué au lancement du SaaS ainsi qu’au développement de modules clés, notamment la personnalisation du workflow client. Ce module permet aux clients de définir leur propre workflow via une interface graphique intuitive, offrant ainsi une expérience utilisateur personnalisée et fluide.'
        skills={["PHP", "JS", "TS", "Symfony", "VueJS", "Docker"]}
        websiteLink='https://decq.com/'
      />
      <ExperienceItem
        imageSrc='/img/experience/hexium.webp'
        title='Hexium'
        description="J’ai travaillé dans une agence web où j’ai contribué à divers projets, tels que la création d’un site pour l’affichage des vols d’aéroport, le développement et la maintenance d’un CRM, l’intégration d’une maquette dans un site e-commerce, ainsi que la maintenance du site d’une agence de location."
        skills={[
          "PHP",
          "JS",
          "TS",
          "Laravel",
          "Symfony",
          "Sylius",
          "React",
          "VueJS",
          "Next",
          "Docker",
        ]}
        websiteLink='https://www.hexium.io/'
      />
      <ExperienceItem
        imageSrc='/img/experience/wobz.webp'
        title='Wobz'
        description="J’ai contribué au développement de nouvelles fonctionnalités ainsi qu’à la maintenance de l’ERP interne de l’entreprise, permettant la micro-personnalisation des produits grâce à une solution web-to-print. Celle-ci offre aux utilisateurs la possibilité de créer leur design en ligne et de l’envoyer directement à l’impression."
        skills={["PHP", "JS", "Symfony", "jQuery"]}
        websiteLink='https://wobz.com/'
      />
    </motion.section>
  );
};

export default Experience;
