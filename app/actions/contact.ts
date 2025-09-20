"use server";

import {
    TransactionalEmailsApi,
    TransactionalEmailsApiApiKeys,
} from "@getbrevo/brevo";

interface CaptchaResponse {
    success: boolean;
    "error-codes"?: string[];
}

export async function sendContact(formData: FormData, token: string) {
    try {
        // 1. Vérification des champs
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        if (!name || !email || !message) {
            return { success: false, error: "Tous les champs sont obligatoires." };
        }

        // 2. Vérification du captcha
        const secret = process.env.RECAPTCHA_SECRET_KEY;
        if (!secret) {
            throw new Error("RECAPTCHA_SECRET_KEY manquant dans .env.local");
        }

        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secret}&response=${token}`,
        });

        const captcha = (await response.json()) as CaptchaResponse;
        if (!captcha.success) {
            return { success: false, error: "Captcha invalide." };
        }

        // 3. Vérification de la clé API Brevo
        const apiKey = process.env.BREVO_API_KEY;
        if (!apiKey) {
            throw new Error("BREVO_API_KEY manquant dans .env.local");
        }

        // 4. Envoi de l'email avec Brevo
        const apiInstance = new TransactionalEmailsApi();
        apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);

        await apiInstance.sendTransacEmail({
            sender: { email: "dev.dyger@gmail.com", name: "Portfolio" },
            to: [{ email: "dev.dyger@gmail.com", name: "Dylan Germann" }],
            replyTo: { email },
            subject: `📩 Nouveau message de ${name}`,
            htmlContent: `
        <h2>Nouveau message depuis ton portfolio</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("Erreur Brevo:", error);
        return { success: false, error: "Une erreur est survenue lors de l'envoi." };
    }
}
