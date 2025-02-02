import Link from "next/link";

const IconLink = ({
  href,
  icon,
  label,
  isInternal = false, // Add the `isInternal` prop with a default value of false
  onClick, // Accepte la prop onClick pour les événements de clic
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isInternal?: boolean;
  onClick?: () => void; // Prop optionnelle pour le onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Appeler la fonction onClick si elle est passée en prop
    }
  };

  if (isInternal) {
    return (
      <Link
        href={href}
        passHref // Pour assurer une navigation correcte avec <a>
      >
        <div
          className='flex items-center gap-4 p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors'
          aria-label={label}
          onClick={handleClick} // Ajout de l'événement onClick
        >
          {icon}
          <span className='sm:hidden'>{label}</span>
        </div>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-4 p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors'
      aria-label={label}
      onClick={handleClick} // Ajout de l'événement onClick pour les liens externes
    >
      {icon}
      <span className='sm:hidden'>{label}</span>
    </a>
  );
};

export default IconLink;
