import { Book, Laptop, Plane } from "lucide-react";

const interests = ["Lecture", "Technologie", "Voyage", "Sports", "Jeux-vidéos", "Chats"];

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 px-4 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="reveal mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-center text-5xl font-bold text-transparent">
          A propos de moi
        </h2>

        <div className="reveal mx-auto max-w-3xl space-y-6">
          <div className="space-y-6 text-lg text-gray-700">
            <p className="relative">
              <span className="absolute -left-4 top-0 font-bold text-indigo-600">&quot;</span>
              J’aime lire des livres, en particulier ceux liés au développement personnel et à la
              technologie. Je suis passionné par la résolution de problèmes et l’apprentissage
              continu de nouvelles compétences pour m’améliorer ainsi que mon travail. L’un de mes
              plus grands rêves est de devenir digital nomad et de voyager à travers le monde tout
              en continuant à travailler à distance.
              <span className="absolute -right-4 bottom-0 font-bold text-indigo-600">&quot;</span>
            </p>

            <div className="flex gap-4 py-4">
              <div className="my-auto h-px flex-1 bg-gradient-to-r from-indigo-600/20 to-transparent" />
              <div className="flex gap-2">
                {[Book, Laptop, Plane].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600/10 to-teal-500/10"
                  >
                    <Icon className="text-indigo-600" />
                  </div>
                ))}
              </div>
              <div className="my-auto h-px flex-1 bg-gradient-to-l from-indigo-600/20 to-transparent" />
            </div>

            <p>
              Je suis également un grand passionné de sport, toujours à la recherche de nouvelles
              façons de rester actif et en bonne santé. Pendant mon temps libre, j’aime jouer aux
              jeux vidéo, car ils me permettent de me détendre et de me lancer de nouveaux défis.
              Et bien sûr, je suis un fier amoureux des chats — rien n’égale le plaisir de passer
              du temps avec mon compagnon à fourrure.
            </p>

            <p>
              Ces loisirs et passions nourrissent ma créativité et ma motivation, et j’apporte le
              même enthousiasme ainsi que la même détermination à chacun des projets sur lesquels
              je travaille.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-gradient-to-r from-indigo-600/10 to-teal-500/10 px-4 py-2 text-sm font-medium text-indigo-600"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
