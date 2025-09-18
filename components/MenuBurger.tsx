import { useEffect, useState } from "react";
import {
  Menu,
  Home,
  User,
  Code,
  BriefcaseBusiness,
  AppWindowMac,
  Linkedin,
  Github,
  Mail,
  X,
} from "lucide-react"; // Importation des icônes
import { motion } from "framer-motion"; // Importation de Framer Motion
import IconLink from "./IconLink"; // Assure-toi que IconLink est bien importé

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Fonction pour gérer la fermeture du menu
  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu
  };

  return (
    <div className='relative'>
      {/* Bouton du menu burger */}
      <button
        onClick={toggleMenu}
        className='p-4'
        aria-expanded={isOpen}
        aria-controls='mobile-navigation'
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <Menu size={24} />
      </button>

      {/* Si le menu est ouvert, on affiche le fond et le menu avec animation */}
      {isOpen && (
        <>
          {/* Fond semi-transparent */}
          <motion.div
            className='fixed inset-0 bg-black opacity-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu} // Clique sur le fond pour fermer le menu
            aria-hidden='true'
          />

          {/* Menu burger avec animation */}
          <motion.div
            className='fixed top-0 left-0 z-10 h-full w-full bg-white p-6 shadow-lg'
            initial={{ x: "-100%" }} // Le menu commence hors de l'écran
            animate={{ x: 0 }} // Il glisse dans l'écran
            exit={{ x: "100%" }} // Le menu glisse vers la droite lorsqu'il est fermé
            transition={{ type: "spring", stiffness: 300, damping: 30 }} // Animation fluide
            role='dialog'
            aria-modal='true'
            aria-labelledby='mobile-navigation-title'
            id='mobile-navigation'
          >
            {/* Bouton de fermeture */}
            <button
              onClick={toggleMenu}
              className='absolute right-4 top-4 p-2'
              aria-label='Fermer le menu de navigation'
            >
              <X size={24} />
            </button>

            {/* Contenu du menu */}
            <nav className='flex h-full flex-col gap-4' aria-labelledby='mobile-navigation-title'>
              <h2 id='mobile-navigation-title' className='sr-only'>
                Navigation mobile
              </h2>
              <div className='flex items-center gap-2'>
                <IconLink
                  href='/'
                  icon={<Home />}
                  label="Page d'accueil"
                  isInternal
                  onClick={handleLinkClick}
                />
              </div>
              <hr />
              <div className='flex items-center gap-2'>
                <IconLink
                  href='/#about'
                  icon={<User />}
                  label='A propos de moi'
                  isInternal
                  onClick={handleLinkClick}
                />
              </div>
              <div className='flex items-center gap-2'>
                <IconLink
                  href='/#stack'
                  icon={<Code />}
                  label='Stack Technique'
                  isInternal
                  onClick={handleLinkClick}
                />
              </div>
              <div className='flex items-center gap-2'>
                <IconLink
                  href='/#experience'
                  icon={<BriefcaseBusiness />}
                  label='Experience'
                  isInternal
                  onClick={handleLinkClick}
                />
              </div>
              <div className='flex items-center gap-2'>
                <IconLink
                  href='/#projects'
                  icon={<AppWindowMac />}
                  label='Projets'
                  isInternal
                  onClick={handleLinkClick}
                />
              </div>
              <hr />
              <div className='flex items-center gap-2'>
                <IconLink
                  href='https://www.linkedin.com/in/dylan-germann/'
                  icon={<Linkedin />}
                  label='Mon linkedin'
                  onClick={handleLinkClick}
                />
              </div>
              <div className='flex items-center gap-2'>
                <IconLink
                  href='https://github.com/zVasO'
                  icon={<Github />}
                  label='Mon github'
                  onClick={handleLinkClick}
                />
              </div>
              <hr />
              <div className='flex items-center gap-2'>
                <IconLink
                  href='/contact'
                  icon={<Mail />}
                  label='Me contacter'
                  isInternal
                  onClick={handleLinkClick}
                />
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
