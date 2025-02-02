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
                      label='Homepage'
                      isInternal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Homepage</p>
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
                      label='About me'
                      isInternal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>About me</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger>
                    <IconLink
                      href='/#stack'
                      icon={<Code />}
                      label='Tech Stack'
                      isInternal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tech Stack</p>
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
                      label='Projects'
                      isInternal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Projects</p>
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
                    <p>Get in touch !</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </div>
        </TooltipProvider>
      </div>
      <div className='sm:hidden m-4'>
        <BurgerMenu />
      </div>
    </>
  );
};

export default Navbar;
