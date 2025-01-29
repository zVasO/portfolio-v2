import Link from "next/link";

const IconLink = ({
  href,
  icon,
  label,
  isInternal = false, // Add the `isInternal` prop with a default value of false
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isInternal?: boolean; // Optional prop to indicate if it's an internal link
}) => {
  if (isInternal) {
    return (
      <Link
        href={href}
        className='p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors'
        aria-label={label}
      >
        {icon}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors'
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default IconLink;
