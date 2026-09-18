"use server";

import { TransactionalEmailsApi, TransactionalEmailsApiApiKeys } from "@getbrevo/brevo";

import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

interface CaptchaResponse {
    success: boolean;
    score: number;
    action: string;
    "error-codes"?: string[];
}

export type ContactResult = { success: true } | { success: false; error: string };

const LIMITS = { name: 100, email: 254, message: 5000 } as const;
const RECAPTCHA_ACTION = "contact_form";
const MIN_SCORE = 0.5;

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

const field = (formData: FormData, key: string) =>
    String(formData.get(key) ?? "").trim();

export async function sendContact(formData: FormData, token: string): Promise<ContactResult> {
    try {
        const name = field(formData, "name");
        const email = field(formData, "email");
        const message = field(formData, "message");
        const honeypot = field(formData, "website");

        // Champ invisible pour les humains : rempli uniquement par les bots.
        if (honeypot) {
            return { success: true };
        }

        if (!name || !email || !message) {
            return { success: false, error: "Tous les champs sont obligatoires." };
        }
        if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
            return { success: false, error: "Un des champs dépasse la longueur autorisée." };
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return { success: false, error: "L'adresse email n'est pas valide." };
        }
        if (!token) {
            return { success: false, error: "Vérification anti-spam manquante, réessayez." };
        }

        const secret = process.env.RECAPTCHA_SECRET_KEY;
        if (!secret) {
            throw new Error("RECAPTCHA_SECRET_KEY manquant");
        }

        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ secret, response: token }),
        });
        const captcha = (await response.json()) as CaptchaResponse;

        if (!captcha.success || captcha.action !== RECAPTCHA_ACTION || captcha.score < MIN_SCORE) {
            return { success: false, error: "La vérification anti-spam a échoué, réessayez." };
        }

        const apiKey = process.env.BREVO_API_KEY;
        if (!apiKey) {
            throw new Error("BREVO_API_KEY manquant");
        }

        const apiInstance = new TransactionalEmailsApi();
        apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);

        await apiInstance.sendTransacEmail({
            sender: { email: CONTACT_EMAIL, name: "Portfolio" },
            to: [{ email: CONTACT_EMAIL, name: SITE_NAME }],
            replyTo: { email, name },
            subject: `Nouveau message de ${name}`,
            htmlContent: `
        <h2>Nouveau message depuis ton portfolio</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
            textContent: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
        });

        return { success: true };
    } catch (error) {
        console.error("Erreur envoi contact :", error);
        return { success: false, error: "Une erreur est survenue lors de l'envoi. Réessayez plus tard." };
    }
}
