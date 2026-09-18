import Image from "next/image";

interface ExperienceItemProps {
  imageSrc: string;
  title: string;
  description: string;
  skills: string[];
  websiteLink: string;
}

const ExperienceItem = ({ imageSrc, title, description, skills, websiteLink }: ExperienceItemProps) => {
  return (
    <article className="reveal group relative mx-auto mt-6 flex max-w-5xl flex-col items-center rounded-3xl border bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl sm:flex-row">
      <div className="flex-shrink-0 overflow-hidden rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105">
        <Image
          src={imageSrc}
          width={160}
          height={160}
          className="rounded-2xl object-cover"
          alt={`Logo ${title}`}
        />
      </div>

      <div className="mt-6 flex w-full flex-col justify-start sm:ml-8 sm:mt-0">
        <h3 className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-left sm:text-4xl">
          {title}
        </h3>

        <p className="mt-4 text-center text-lg leading-relaxed text-gray-700 sm:text-left">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-indigo-200/30 bg-gradient-to-r from-indigo-600/10 to-teal-500/10 px-4 py-2 text-sm font-medium text-indigo-600"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 self-center rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:self-start"
        >
          Voir le site →
        </a>
      </div>
    </article>
  );
};

export default ExperienceItem;
