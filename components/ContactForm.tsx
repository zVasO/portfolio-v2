import { sendContact } from "@/app/actions/contact";
import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <section className="mt-12 max-w-3xl mx-auto px-6 py-10 rounded-3xl shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <h2 className="text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                Me contacter
            </h2>
            <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
                Une idée, un projet ou une collaboration ? Écris-moi !
            </p>

            <form action={sendContact} className="mt-8 flex flex-col gap-6">
                {/* Nom */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500 focus:outline-none shadow-sm"
                        placeholder="Ton nom"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
                        placeholder="ton@email.com"
                    />
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500 focus:outline-none shadow-sm resize-none"
                        placeholder="Écris ton message ici..."
                    />
                </div>

                {/* CTA */}
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full sm:w-auto self-center px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                    Envoyer
                </motion.button>
            </form>
        </section>
    );
}
