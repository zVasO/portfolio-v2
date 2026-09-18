import Image from "next/image";

interface ExperienceItemProps {
  imageSrc: string;
  title: string;
  role: string;
  description: string;
  skills: string[];
  websiteLink: string;
}

const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const ExperienceItem = ({ imageSrc, title, role, description, skills, websiteLink }: ExperienceItemProps) => {
  return (
    <li className="reveal grid gap-6 py-12 md:grid-cols-[10rem_1fr]">
      <Image
        src={imageSrc}
        width={64}
        height={64}
        className="h-16 w-16 rounded-md object-contain"
        alt={`Logo ${title}`}
      />

      <div className="max-w-3xl">
        <h3 className="text-4xl sm:text-5xl">{title}</h3>
        <p className="label mt-3">{role}</p>

        <p className="mt-6 text-lg leading-relaxed text-ink-2">{description}</p>

        <dl className="mt-6 grid gap-2 text-base sm:grid-cols-[6rem_1fr]">
          <dt className="label self-center">Stack</dt>
          <dd>{skills.join(", ")}</dd>
          <dt className="label self-center">Site</dt>
          <dd>
            <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="link">
              {displayUrl(websiteLink)}
            </a>
          </dd>
        </dl>
      </div>
    </li>
  );
};

export default ExperienceItem;
