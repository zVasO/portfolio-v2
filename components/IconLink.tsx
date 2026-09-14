import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type IconLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  icon: ReactNode;
  label: string;
  isInternal?: boolean;
};

const linkClasses =
  "flex items-center gap-4 p-2 text-gray-600 transition-colors hover:text-indigo-600";

/**
 * Lien iconifié utilisé dans la navigation. Les props HTML restantes sont
 * transmises à l'ancre pour rester compatible avec `TooltipTrigger asChild`.
 */
const IconLink = ({ href, icon, label, isInternal = false, ...rest }: IconLinkProps) => {
  const content = (
    <>
      {icon}
      <span className="sm:hidden">{label}</span>
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} className={linkClasses} aria-label={label} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses} aria-label={label} {...rest}>
      {content}
    </a>
  );
};

export default IconLink;
