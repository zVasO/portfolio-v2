import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import TsLogo from "@/components/tech-logo/TsLogo";
import PhpLogo from "@/components/tech-logo/PhpLogo";
import MysqlLogo from "@/components/tech-logo/MysqlLogo";
import PostgresqlLogo from "@/components/tech-logo/PostgresqlLogo";
import LaravelLogo from "@/components/tech-logo/LaravelLogo";
import SymfonyLogo from "@/components/tech-logo/SymfonyLogo";
import NextLogo from "@/components/tech-logo/NextLogo";
import ReactLogo from "@/components/tech-logo/ReactLogo";
import TailwindLogo from "@/components/tech-logo/TaiwindLogo";
import { motion } from "framer-motion";
import Image from "next/image";
const Stack = () => {
  return (
    <motion.section
      id='stack'
      className='min-h-screen bg-gray-50 dark:bg-gray-800 py-20 px-4 mt-8'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className='py-16 text-5xl font-bold bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent mb-12 text-center'
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Technical Stack
      </motion.h2>
      <motion.div>
        <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg'>
          <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center text-xl font-semibold leading-none dark:from-white dark:to-black'>
            Stack
          </span>

          <OrbitingCircles iconSize={30} radius={50}>
            <MysqlLogo />
            <PostgresqlLogo />
          </OrbitingCircles>
          <OrbitingCircles iconSize={40} radius={100} reverse>
            <Image
              alt='Logo JavaScript'
              src='/tech-logo/js.svg'
              width={40}
              height={40}
            />
            <TsLogo />
            <PhpLogo />
          </OrbitingCircles>
          <OrbitingCircles iconSize={40}>
            <LaravelLogo />
            <SymfonyLogo />
            <NextLogo />
            <ReactLogo />
            <Image
              alt='Logo Vue.js'
              src='/tech-logo/vue.svg'
              width={40}
              height={40}
            />
            <TailwindLogo />
          </OrbitingCircles>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default Stack;
