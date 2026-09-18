import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Emilie",
    company: "Auduin Réalisation",
    role: "Cliente sur Malt",
    feedback: "Très réactif et sérieux, je repasserai par Dylan avec plaisir pour d'autres projets.",
  },
  {
    name: "Patrick",
    company: "Iziparty",
    role: "Client sur Malt",
    feedback:
      "Réactivité, suivi et résultat. Je recommande vivement Dylan qui a assuré sa mission de manière très professionnelle. Je retravaillerai avec lui certainement pour de prochaines missions.",
  },
  {
    name: "Hugues",
    company: "Air-papillon",
    role: "Client sur Codeur.com",
    feedback:
      "Compréhension affutée du besoin, résolution claire efficace en parfaite correspondance avec le problème posé, si on le demandais, je dirai que c'est tip top !",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading title="Ce qu’en disent les clients." lead="Avis laissés sur Malt et Codeur.com." />

      <ul className="mt-12 divide-y divide-line border-b border-line">
        {testimonials.map((t) => (
          <li key={t.company} className="reveal grid gap-6 py-10 md:grid-cols-[10rem_1fr]">
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-ink-2">{t.company}</p>
              <p className="label mt-2">{t.role}</p>
            </div>
            <blockquote className="max-w-3xl text-2xl font-medium leading-snug sm:text-3xl">
              « {t.feedback} »
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
