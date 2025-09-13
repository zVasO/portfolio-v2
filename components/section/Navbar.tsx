"use client";
import React from "react";
import { Dock, DockIcon } from "../ui/dock";
import {
  AppWindowMac,
  BriefcaseBusiness,
  Code,
  Github,
  Home,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import IconLink from "../IconLink";
import BurgerMenu from "../MenuBurger";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Navbar: React.FC = () => {
  return (
    <>
      <div className='hidden sm:block'>
        <TooltipProvider delayDuration={10}>
          <div className='relative'>
            <Dock
              direction='middle'
              className='fixed top-0 left-0 right-0 z-50 border dark:border-white bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50'
            >
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger>
                    <IconLink
                      href='/'
                      icon={<Home />}
                      label="Page d'accueil"
                      isInternal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Page d&apos;accueil</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
              <Separator orientation='vertical' className='h-full py-2' />
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger>
                    <IconLink
                      href='/#about'
                      icon={<User />}
                      label='A propos de moi'
                      isInternal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>A propos de moi</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger>
                    <IconLink
                      href='/#stack'
                      icon={<Code />}
                      label='Stack Technique'
                      isInternal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Stack Technique</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger>
                    <IconLink
                      href='/#experience'
                      icon={<BriefcaseBusiness />}
                      label='Experience'
                      isInternal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Experience</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger>
                    <IconLink
                      href='/#projects'
                      icon={<AppWindowMac />}
                      label='Projets'
                      isInternal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Projets</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
              <Separator orientation='vertical' className='h-full py-2' />
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger>
                    <IconLink
                      href='https://github.com/zVasO'
                      icon={<Github />}
                      label='My github'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger>
                    <IconLink
                      href='https://www.linkedin.com/in/dylan-germann/'
                      icon={<Linkedin />}
                      label='My linkedin'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Linkedin</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
              <Separator orientation='vertical' className='h-full py-2' />
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger>
                    <IconLink
                      href='/contact'
                      icon={<Mail />}
                      label='My linkedin'
                      isInternal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Contactez moi !</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </div>
        </TooltipProvider>
      </div>
      <div className='sm:hidden bg-white fixed top-0 left-0 right-0 z-10'>
        <BurgerMenu />
      </div>
    </>
  );
};

export default Navbar;
