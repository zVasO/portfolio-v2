"use client";
import {
  Code,
  Github,
  LinkedinIcon,
  Mail,
  Palette,
  Terminal,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head"; // Import de Head pour gérer les métadonnées
import TechBadge from "@/components/TechBadge";
import IconLink from "@/components/IconLink";

import About from "@/components/section/About";
import Stack from "@/components/section/Stack";
import Experience from "@/components/section/Experience";

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        {/* SEO de base */}
        <title>Dylan Germann - Full Stack Web Developer</title>
        <meta
          name='description'
          content='Dylan Germann is a Full Stack Web Developer specializing in modern, high-performance web applications with expertise in both front-end and back-end development.'
        />
        <meta
          name='keywords'
          content='Full Stack, Web Developer, Laravel, Symfony, React, Vue.js, PHP, TypeScript, JavaScript, Web Applications, Front-end, Back-end, Developer Portfolio'
        />
        <meta name='author' content='Dylan Germann' />

        {/* Open Graph (OG) pour les réseaux sociaux */}
        <meta
          property='og:title'
          content='Dylan Germann - Full Stack Web Developer'
        />
        <meta
          property='og:description'
          content='Dylan Germann is a Full Stack Web Developer specializing in modern, high-performance web applications. Explore my skills and projects.'
        />
        <meta property='og:image' content='/path/to/your-image.jpg' />
        <meta property='og:url' content='https://www.dgermann.dev/' />
        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Dylan Germann - Full Stack Web Developer'
        />
        <meta
          name='twitter:description'
          content='Explore the portfolio of Dylan Germann, a Full Stack Web Developer specializing in modern, high-performance web applications.'
        />
        <meta name='twitter:image' content='/path/to/your-image.jpg' />
      </Head>

      <main className='min-h-screen'>
        {/* Hero Section */}
        <section className='min-h-screen flex items-center justify-center relative'>
          <div className='flex flex-col items-center justify-center px-6 py-12 sm:py-32'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className='relative mx-0 max-w-[43.5rem] text-center font-semibold tracking-tighter text-5xl sm:text-7xl md:text-7xl lg:text-7xl text-gray-900 dark:text-white'>
                I&apos;m Dylan Germann <br />
                <span className='text-4xl bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent'>
                  Full Stack Web Developer
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className='mt-6 max-w-3xl tracking-wide text-gray-700 dark:text-gray-200 text-center text-lg leading-relaxed mx-auto'>
                I specialize in developing{" "}
                <span className='text-indigo-600 font-medium'>modern</span>,{" "}
                <span className='text-teal-500 font-medium'>
                  high-performance
                </span>
                , and{" "}
                <span className='text-indigo-600 font-medium'>custom</span> web
                applications, with expertise in both front-end and back-end
                development.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className='mt-8 flex flex-wrap justify-center gap-4'>
                <TechBadge
                  icon={<Terminal className='w-4 h-4' />}
                  label='Laravel · Symfony · Next.js'
                />
                <TechBadge
                  icon={<Palette className='w-4 h-4' />}
                  label='React · Vue.js · NextJs'
                />
                <TechBadge
                  icon={<Code className='w-4 h-4' />}
                  label='PHP · TypeScript · JavaScript'
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className='mt-8 flex justify-center gap-6'>
                <IconLink
                  href='https://github.com/zVasO'
                  icon={<Github />}
                  label='GitHub'
                />
                <IconLink
                  href='https://www.linkedin.com/in/dylan-germann/'
                  icon={<LinkedinIcon />}
                  label='LinkedIn'
                />
                <IconLink
                  href='/contact'
                  icon={<Mail />}
                  label='Email'
                  isInternal
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            className='absolute bottom-8 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer'
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-label='Scroll down'
          >
            <ChevronDown className='w-8 h-8' />
          </motion.button>
        </section>

        <About />
        <Stack />
        <Experience />
      </main>
    </>
  );
}
