import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceItemProps {
  imageSrc: string;
  title: string;
  description: string;
  skills: string[];
  websiteLink: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  imageSrc,
  title,
  description,
  skills,
  websiteLink,
}) => {
  return (
    <motion.div
      className='border mt-4 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center rounded-lg shadow-2xl p-6 bg-white dark:bg-gray-700'
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Image
        src={imageSrc}
        width={150}
        height={150}
        className='rounded-md shadow-md'
        alt={title}
      />
      <motion.div
        className='flex flex-col justify-start sm:ml-6'
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className='mt-4 sm:mt-0 text-indigo-600 bg-clip-text text-center text-4xl font-semibold leading-none'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        <p className='mt-6 max-w-3xl tracking-wide text-gray-700 text-center text-lg leading-relaxed mx-auto'>
          {description}
        </p>
        <div className='flex flex-wrap gap-2 mt-4'>
          {skills.map((skill, index) => (
            <span
              key={index}
              className='px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-600/10 to-teal-500/10 text-indigo-600'
            >
              {skill}
            </span>
          ))}
        </div>
        <a
          className='self-center sm:self-end'
          href={websiteLink}
          target='_blank'
          rel='noreferrer'
        >
          <button className='text-end mt-4 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-teal-500 to-indigo-600 text-white hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105'>
            Visit Website
          </button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceItem;
