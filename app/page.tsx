"use client";

import {
  ChevronDown,
  Code,
  Github,
  LinkedinIcon,
  Mail,
  Palette,
  Terminal,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import TechBadge from "@/components/TechBadge";
import IconLink from "@/components/IconLink";
import About from "@/components/section/About";
import Stack from "@/components/section/Stack";
import Experience from "@/components/section/Experience";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getFadeProps = (delay = 0) => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      } as const;
    }

    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay },
    } as const;
  };

  const scrollButtonAnimation = shouldReduceMotion
    ? undefined
    : {
        animate: {
          y: [0, 10, 0],
        },
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  return (
    <main className='min-h-screen' id='main-content'>
      {/* Hero Section */}
      <section className='relative flex min-h-screen items-center justify-center'>
        <div className='flex flex-col items-center justify-center px-6 py-12 sm:py-32'>
          <motion.div {...getFadeProps()}>
            <h1 className='relative mx-0 max-w-[43.5rem] text-center text-5xl font-semibold tracking-tighter text-gray-900 dark:text-white sm:text-7xl md:text-7xl lg:text-7xl'>
              Je suis Dylan Germann
              <br />
              <span className='text-4xl text-transparent'>
                <span className='bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text'>
                  Développeur Web Full Stack
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.div {...getFadeProps(0.3)}>
            <p className='mt-6 mx-auto max-w-3xl text-center text-lg leading-relaxed tracking-wide text-gray-700 dark:text-gray-200'>
              Je suis spécialisé dans le développement <span className='font-medium text-indigo-600'>moderne</span>,
              <span className='font-medium text-teal-500'> hautement performant</span> et
              <span className='font-medium text-indigo-600'> sur mesure</span> d’applications web, avec une expertise à la fois en développement front-end et back-end.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div {...getFadeProps(0.5)}>
            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <TechBadge icon={<Terminal className='h-4 w-4' />} label='Laravel · Symfony · Next.js' />
              <TechBadge icon={<Palette className='h-4 w-4' />} label='React · Vue.js · Next.js' />
              <TechBadge icon={<Code className='h-4 w-4' />} label='PHP · TypeScript · JavaScript' />
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div {...getFadeProps(0.7)}>
            <div className='mt-8 flex justify-center gap-6'>
              <IconLink href='https://github.com/zVasO' icon={<Github />} label='GitHub' />
              <IconLink href='https://www.linkedin.com/in/dylan-germann/' icon={<LinkedinIcon />} label='LinkedIn' />
              <IconLink href='/contact' icon={<Mail />} label='Email' isInternal />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          type='button'
          onClick={scrollToAbout}
          className='absolute -translate-x-1/2 cursor-pointer text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300'
          aria-label='Défiler vers la section À propos'
          style={{ left: "50%", bottom: "2rem" }}
          {...(scrollButtonAnimation ?? {})}
        >
          <ChevronDown className='h-8 w-8' aria-hidden='true' />
        </motion.button>
      </section>

      <About />
      <Stack />
      <Experience />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
