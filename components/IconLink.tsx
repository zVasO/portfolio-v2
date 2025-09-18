import type { ReactNode } from "react";
import Link from "next/link";

type IconLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
  isInternal?: boolean;
  onClick?: () => void;
};

const linkClasses =
  "flex items-center gap-4 p-2 text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400";

const IconLink = ({ href, icon, label, isInternal = false, onClick }: IconLinkProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (isInternal) {
    return (
      <Link
        href={href}
        className={linkClasses}
        aria-label={label}
        onClick={handleClick}
      >
        {icon}
        <span className='sm:hidden'>{label}</span>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={linkClasses}
      aria-label={label}
      onClick={handleClick}
    >
      {icon}
      <span className='sm:hidden'>{label}</span>
    </a>
  );
};

export default IconLink;
