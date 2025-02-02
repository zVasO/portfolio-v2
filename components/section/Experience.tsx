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
        description='At Decq, a company specializing in the commercialization of a web-to-print micro-personalization ERP SaaS, I contributed to the launch of the SaaS as well as the development of key modules, particularly the customization of the client workflow. This module enables clients to define their own workflow through an intuitive graphical interface, providing a personalized and streamlined user experience.'
        skills={["PHP", "JS", "TS", "Symfony", "VueJS", "Docker"]}
        websiteLink='https://decq.com/'
      />
      <ExperienceItem
        imageSrc='/img/experience/hexium.webp'
        title='Hexium'
        description="I worked at a web agency, contributing to various projects, such as creating a website for displaying airport flights, developing and maintaining a CRM, integrating a mockup into an e-commerce site, and maintaining a rental agency's website."
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
        description="I contributed to the development of new features as well as the maintenance of the company's in-house ERP, enabling the micro-personalization of products through a web-to-print solution. This allows users to create their design online and send it directly to print."
        skills={["PHP", "JS", "Symfony", "jQuery"]}
        websiteLink='https://wobz.com/'
      />
    </motion.section>
  );
};

export default Experience;
