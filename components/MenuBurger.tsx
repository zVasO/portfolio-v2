import { useState } from "react";
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

  // Fonction pour gérer la fermeture du menu
  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu
  };

  return (
    <div className='relative'>
      {/* Bouton du menu burger */}
      <button onClick={toggleMenu} className='p-4'>
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
          />

          {/* Menu burger avec animation */}
          <motion.div
            className='fixed top-0 left-0 w-full h-full bg-white p-6 shadow-lg z-10'
            initial={{ x: "-100%" }} // Le menu commence hors de l'écran
            animate={{ x: 0 }} // Il glisse dans l'écran
            exit={{ x: "100%" }} // Le menu glisse vers la droite lorsqu'il est fermé
            transition={{ type: "spring", stiffness: 300, damping: 30 }} // Animation fluide
          >
            {/* Bouton de fermeture */}
            <button onClick={toggleMenu} className='absolute top-4 right-4 p-2'>
              <X size={24} />
            </button>

            {/* Contenu du menu */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                <IconLink
                  href='/'
                  icon={<Home />}
                  label='Homepage'
                  isInternal
                  onClick={handleLinkClick}
                />
              </div>
              <hr />
              <div className='flex items-center gap-2'>
                <IconLink
                  href='/#about'
                  icon={<User />}
                  label='About me'
                  isInternal
                  onClick={handleLinkClick}
                />
              </div>
              <div className='flex items-center gap-2'>
                <IconLink
                  href='/#stack'
                  icon={<Code />}
                  label='Tech Stack'
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
                  label='Projects'
                  isInternal
                  onClick={handleLinkClick}
                />
              </div>
              <hr />
              <div className='flex items-center gap-2'>
                <IconLink
                  href='https://www.linkedin.com/in/dylan-germann/'
                  icon={<Linkedin />}
                  label='My linkedin'
                  onClick={handleLinkClick}
                />
              </div>
              <div className='flex items-center gap-2'>
                <IconLink
                  href='https://github.com/zVasO'
                  icon={<Github />}
                  label='My github'
                  onClick={handleLinkClick}
                />
              </div>
              <hr />
              <div className='flex items-center gap-2'>
                <IconLink
                  href='/contact'
                  icon={<Mail />}
                  label='Contact'
                  isInternal
                  onClick={handleLinkClick}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
