import SectionHeading from "../SectionHeading";

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading title="Qui est derrière le clavier." />

      <div className="reveal mt-12 grid gap-10 md:grid-cols-2">
        <p className="text-2xl font-medium leading-snug sm:text-3xl">
          Je lis beaucoup, surtout ce qui touche au développement personnel et à la technologie.
          Ce qui me fait avancer : <span className="mark">résoudre des problèmes</span> et apprendre
          en continu, dans mon travail comme ailleurs.
        </p>

        <div className="space-y-6 text-lg leading-relaxed text-ink-2">
          <p>
            L’un de mes plus grands rêves est de devenir digital nomad et de voyager à travers le
            monde tout en continuant à travailler à distance. Je suis aussi un grand passionné de
            sport, toujours à la recherche de nouvelles façons de rester actif.
          </p>
          <p>
            Le reste du temps, je joue aux jeux vidéo pour me détendre et me lancer de nouveaux
            défis. Et je suis un fier amoureux des chats : rien n’égale le plaisir de passer du
            temps avec mon compagnon à fourrure.
          </p>
          <p>
            Ces passions nourrissent ma créativité et ma motivation. J’apporte le même enthousiasme
            et la même détermination à chacun des projets sur lesquels je travaille.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
