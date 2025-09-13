"use server";

import Brevo from "@getbrevo/brevo";

export async function sendContact(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        throw new Error("Tous les champs sont obligatoires.");
    }

    try {
        const apiKey = process.env.BREVO_API_KEY;
        if (!apiKey) {
            throw new Error("BREVO_API_KEY manquant dans les variables d'environnement.");
        }

        const apiInstance = new Brevo.TransactionalEmailsApi();
        apiInstance.setApiKey(
            Brevo.TransactionalEmailsApiApiKeys.apiKey,
            apiKey
        );

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

    } catch (error) {
        console.error("Erreur Brevo:", error);
    }
}
