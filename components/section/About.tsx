import { motion } from "framer-motion"
import { Book, Laptop, Plane } from "lucide-react";
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
         A propos de moi
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
                 fill
                 sizes='(max-width: 768px) 240px, 320px'
                 className='rounded-md object-cover'
                 priority
                 alt='Portrait de Dylan Germann'
               />
             </div>
             <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-full opacity-20 blur-2xl' />
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
               J’aime lire des livres, en particulier ceux liés au développement personnel et à la technologie. Je suis passionné par la résolution de problèmes et l’apprentissage continu de nouvelles compétences pour m’améliorer ainsi que mon travail. L’un de mes plus grands rêves est de devenir digital nomad et de voyager à travers le monde tout en continuant à travailler à distance.
               <span className='absolute -right-4 bottom-0 text-indigo-600 font-bold'>
                 &quot;
               </span>
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
               <span className='absolute -right-4 bottom-0 text-indigo-600 font-bold'>
                 &quot;
               </span>
               Je suis également un grand passionné de sport, toujours à la recherche de nouvelles façons de rester actif et en bonne santé. Pendant mon temps libre, j’aime jouer aux jeux vidéo, car ils me permettent de me détendre et de me lancer de nouveaux défis. Et bien sûr, je suis un fier amoureux des chats — rien n’égale le plaisir de passer du temps avec mon compagnon à fourrure.
             </p>

             <p className='relative'>
               Ces loisirs et passions nourrissent ma créativité et ma motivation, et j’apporte le même enthousiasme ainsi que la même détermination à chacun des projets sur lesquels je travaille.
             </p>
           </div>

           <div className='flex flex-wrap gap-3 pt-4'>
             {[
               "Lecture",
               "Technologie",
               "Voyage",
               "Sports",
               "Jeux-vidéos",
               "Chats",
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