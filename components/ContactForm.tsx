"use client";

import { useRef, useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { sendContact } from "@/app/actions/contact";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site";

type Status = { type: "idle" } | { type: "pending" } | { type: "success" } | { type: "error"; message: string };

const fieldClasses =
    "w-full border-b-2 border-line bg-transparent py-3 text-lg text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none focus-visible:ring-0";

const labelClasses = "label block";

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
        <form ref={formRef} action={handleSubmit} className="flex flex-col gap-8">
            <div>
                <label htmlFor="name" className={labelClasses}>Nom</label>
                <input type="text" id="name" name="name" required maxLength={100} autoComplete="name" className={fieldClasses} placeholder="Votre nom" />
            </div>

            <div>
                <label htmlFor="email" className={labelClasses}>Email</label>
                <input type="email" id="email" name="email" required maxLength={254} autoComplete="email" className={fieldClasses} placeholder="vous@exemple.com" />
            </div>

            <div>
                <label htmlFor="message" className={labelClasses}>Message</label>
                <textarea id="message" name="message" required maxLength={5000} rows={4} className={`${fieldClasses} resize-none`} placeholder="Parlez-moi de votre projet…" />
            </div>

            {/* Honeypot anti-spam : invisible pour les humains, ignoré par les lecteurs d'écran */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Site web</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-wrap items-center gap-6">
                <button type="submit" disabled={pending} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
                    {pending ? "Envoi en cours…" : "Envoyer le message"}
                </button>
                <p role="status" aria-live="polite" className="text-sm">
                    {status.type === "success" && <span className="mark">Merci, votre message a bien été envoyé. Je vous réponds rapidement.</span>}
                    {status.type === "error" && <span className="font-medium text-ink">{status.message}</span>}
                </p>
            </div>
        </form>
    );
}

export default function ContactForm() {
    return (
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
            <div className="reveal border-t-2 border-ink pt-6">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl">Un projet ? On en parle.</h2>
                <p className="mt-6 max-w-2xl text-xl text-ink-2">
                    Le plus simple est un email. Je réponds sous 48 heures, souvent bien avant.
                </p>
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="link mt-8 inline-block break-all text-2xl font-semibold sm:text-4xl"
                >
                    {CONTACT_EMAIL}
                </a>
                <p className="mt-4 text-base text-ink-2">
                    Ou{" "}
                    <a href={SOCIAL_LINKS.booking} target="_blank" rel="noopener noreferrer" className="link">
                        réservez directement un créneau de 30 minutes
                    </a>
                    .
                </p>
            </div>

            <div className="reveal mt-16 max-w-3xl">
                <p className="label mb-8">Ou via le formulaire</p>
                {/* Le script reCAPTCHA n'est chargé que là où il sert : sur cette section. */}
                <GoogleReCaptchaProvider
                    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
                    scriptProps={{ async: true, defer: true, appendTo: "head" }}
                >
                    <ContactFormInner />
                </GoogleReCaptchaProvider>
            </div>
        </section>
    );
}
