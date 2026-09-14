"use client";

import { useRef, useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { sendContact } from "@/app/actions/contact";

type Status = { type: "idle" } | { type: "pending" } | { type: "success" } | { type: "error"; message: string };

const inputClasses =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500";

function ContactFormInner() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [status, setStatus] = useState<Status>({ type: "idle" });
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
        if (!executeRecaptcha) {
            setStatus({ type: "error", message: "La vérification anti-spam n'est pas prête, réessayez dans un instant." });
            return;
        }

        setStatus({ type: "pending" });

        try {
            const token = await executeRecaptcha("contact_form");
            const result = await sendContact(formData, token);

            if (result.success) {
                setStatus({ type: "success" });
                formRef.current?.reset();
            } else {
                setStatus({ type: "error", message: result.error });
            }
        } catch {
            setStatus({ type: "error", message: "Une erreur est survenue, réessayez plus tard." });
        }
    };

    const pending = status.type === "pending";

    return (
        <form ref={formRef} action={handleSubmit} className="mt-8 flex flex-col gap-6">
            <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Nom
                </label>
                <input type="text" id="name" name="name" required maxLength={100} autoComplete="name" className={inputClasses} placeholder="Ton nom" />
            </div>

            <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input type="email" id="email" name="email" required maxLength={254} autoComplete="email" className={inputClasses} placeholder="ton@email.com" />
            </div>

            <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea id="message" name="message" required maxLength={5000} rows={5} className={`${inputClasses} resize-none`} placeholder="Écris ton message ici..." />
            </div>

            {/* Honeypot anti-spam : invisible pour les humains, ignoré par les lecteurs d'écran */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Site web</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <button
                type="submit"
                disabled={pending}
                className="w-full self-center rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
            >
                {pending ? "Envoi en cours…" : "Envoyer"}
            </button>

            <p role="status" aria-live="polite" className="min-h-6 text-center font-medium">
                {status.type === "success" && (
                    <span className="text-teal-600">Merci, ton message a bien été envoyé. Je te réponds rapidement.</span>
                )}
                {status.type === "error" && <span className="text-red-600">{status.message}</span>}
            </p>
        </form>
    );
}

export default function ContactForm() {
    return (
        <section
            id="contact"
            className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white/80 px-6 py-10 shadow-xl backdrop-blur-sm"
        >
            <h2 className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl">
                Me contacter
            </h2>
            <p className="mt-3 text-center text-gray-600">
                Une idée, un projet ou une collaboration ? Écris-moi !
            </p>

            {/* Le script reCAPTCHA n'est chargé que là où il sert : sur cette section. */}
            <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
                scriptProps={{ async: true, defer: true, appendTo: "head" }}
            >
                <ContactFormInner />
            </GoogleReCaptchaProvider>
        </section>
    );
}
