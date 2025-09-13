import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ExperienceItemProps {
  imageSrc: string;
  title: string;
  description: string;
  skills: string[];
  websiteLink: string;
}

const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
                                                         imageSrc,
                                                         title,
                                                         description,
                                                         skills,
                                                         websiteLink,
                                                       }) => {
  return (
      <motion.article
          className="group relative border mt-6 max-w-5xl mx-auto flex flex-col sm:flex-row items-center rounded-3xl shadow-xl p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
      >
        {/* Image Section */}
        <motion.div
            className="flex-shrink-0 overflow-hidden rounded-2xl shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
        >
          <Image
              src={imageSrc}
              width={160}
              height={160}
              className="object-cover rounded-2xl"
              alt={`Logo ${title}`}
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
            className="flex flex-col justify-start sm:ml-8 mt-6 sm:mt-0 w-full"
            variants={fadeInUp}
        >
          <h3 className="text-center sm:text-left text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            {title}
          </h3>

          <p className="mt-4 text-gray-700 dark:text-gray-300 text-center sm:text-left text-lg leading-relaxed">
            {description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-5">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-600/10 to-teal-500/10 text-indigo-600 dark:text-teal-400 border border-indigo-200/30"
                >
              {skill}
            </span>
            ))}
          </div>

          {/* CTA */}
          <Link
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="self-center sm:self-start mt-6"
          >
            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Voir le site →
            </motion.button>
          </Link>
        </motion.div>
      </motion.article>
  );
};

export default ExperienceItem;
