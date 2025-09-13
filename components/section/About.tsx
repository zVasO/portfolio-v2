import { motion } from "framer-motion"
import { Book, Cat, Laptop, Plane } from "lucide-react";
import Image from "next/image"

const About = () => {
  return (
     <motion.section
     id='about'
     className='min-h-screen bg-gray-50 dark:bg-gray-800 sm:py-20 px-4'
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 0.8 }}
     viewport={{ once: true }}
   >
     <div className='max-w-4xl mx-auto px-4 py-16'>
       <motion.h2
         className='text-5xl font-bold bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent mb-12 text-center'
         initial={{ y: 20, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
       >
         About Me
       </motion.h2>

       <div className='grid md:grid-cols-[2fr,3fr] gap-8 items-start'>
         <div>
           <motion.div
             className='relative'
             initial={{ x: -20, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             viewport={{ once: true }}
           >
             <div className='aspect-square rounded-2xl overflow-hidden flex'>
               <Image
                 src='/img/profile-picture.webp'
                 layout='fill'
                 objectFit='cover'
                 className='rounded-md'
                 alt='Une photo de moi'
               />
             </div>
             <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-full opacity-20 blur-2xl' />
           </motion.div>
           <motion.div
             className='relative'
             initial={{ x: -20, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             viewport={{ once: true }}
           >
             <span className='flex gap-3 text-gray-700 dark:text-gray-300'>
               Ca c&apos;est moi <Cat className='text-teal-500' />
             </span>
           </motion.div>
         </div>

         <motion.div
           className='space-y-6'
           initial={{ x: 20, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.3, duration: 0.5 }}
           viewport={{ once: true }}
         >
           <div className='space-y-6 text-lg text-gray-700 dark:text-gray-300'>
             <p className='relative'>
               <span className='absolute -left-4 top-0 text-indigo-600 font-bold'>
                 &quot;
               </span>
               I love reading books, especially those related to personal
               growth and technology. I am passionate about solving
               problems and constantly learning new skills to improve
               myself and my work. One of my biggest dreams is to become a
               digital nomad and travel the world while continuing to work
               remotely.
             </p>

             <div className='flex gap-4 py-4'>
               <div className='h-px flex-1 bg-gradient-to-r from-indigo-600/20 to-transparent my-auto' />
               <div className='flex gap-2'>
                 {[Book, Laptop, Plane].map((Icon, i) => (
                   <div
                     key={i}
                     className='w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600/10 to-teal-500/10 flex items-center justify-center'
                   >
                     <Icon className='text-indigo-600' />
                   </div>
                 ))}
               </div>
               <div className='h-px flex-1 bg-gradient-to-l from-indigo-600/20 to-transparent my-auto' />
             </div>

             <p>
               I am also an avid fan of sports, always looking for new ways
               to stay active and healthy. In my free time, I enjoy playing
               video games, as they allow me to unwind and challenge myself
               in new ways. And of course, I am a proud cat
               lover—there&apos;s nothing like spending time with my furry
               friend.
             </p>

             <p className='relative'>
               These hobbies and passions fuel my creativity and drive, and
               I bring the same enthusiasm and determination to every
               project I work on.
               <span className='absolute -right-4 bottom-0 text-indigo-600 font-bold'>
                 &quot;
               </span>
             </p>
           </div>

           <div className='flex flex-wrap gap-3 pt-4'>
             {[
               "Reading",
               "Technology",
               "Travel",
               "Sports",
               "Gaming",
               "Cats",
             ].map((interest, i) => (
               <span
                 key={i}
                 className='px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-600/10 to-teal-500/10 text-indigo-600'
               >
                 {interest}
               </span>
             ))}
           </div>
         </motion.div>
       </div>
     </div>
   </motion.section>
  );
}
export default About;