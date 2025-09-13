"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    platform: "Malt" | "Codeur";
    feedback: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Emilie de Auduin Réalisation",
        role: "Client sur Malt",
        platform: "Malt",
        feedback:
            "Très réactif et sérieux, je repasserai par Dylan avec plaisir pour d'autres projets.",
    },
    {
        name: "Patrick de Iziparty",
        role: "Client sur Malt",
        platform: "Malt",
        feedback:
            "Réactivité, suivi et résultat. Je recommande vivement Dylan qui a assuré sa mission de manière très professionnelle. Je retravaillerai avec lui certainement pour de prochaines missions.",
    },
    {
        name: "Hugues de Air-papillon",
        role: "Client sur Codeur.com",
        platform: "Codeur",
        feedback:
            "Compréhension affutée du besoin, résolution claire efficace en parfaite correspondance avec le problème posé, si on le demandais, je dirai que c'est tip top !",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    const handlePrev = () => {
        setDirection("left");
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection("right");
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="mt-20 max-w-3xl mx-auto px-6 relative overflow-hidden">
            <h2 className="text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                Témoignages
            </h2>
            <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
                Voici quelques retours de mes clients sur Malt et Codeur.
            </p>

            {/* Carousel */}
            <div className="mt-12 relative h-[260px] sm:h-[240px]">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={index}
                        className="absolute w-full rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-xl cursor-grab active:cursor-grabbing"
                        initial={{ x: direction === "right" ? 150 : -150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction === "right" ? -150 : 150, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.7}
                        onDragEnd={(_, info) => {
                            if (info.offset.x > 100) {
                                handlePrev();
                            } else if (info.offset.x < -100) {
                                handleNext();
                            }
                        }}
                    >
                        <Quote className="absolute top-6 right-6 text-indigo-400/30 w-10 h-10" />
                        <div className="flex items-center mt-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 flex items-center justify-center text-white font-bold">
                                {testimonials[index].name.charAt(0)}
                            </div>
                            <div className="ml-4">
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                                    {testimonials[index].name}
                                </h4>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[index].role}
                </span>
                            </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            “{testimonials[index].feedback}”
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition"
                    aria-label="Précédent"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition"
                    aria-label="Suivant"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center mt-4 gap-2">
                {testimonials.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 w-2 rounded-full transition ${
                            i === index ? "bg-teal-500 w-6" : "bg-gray-400/50"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
