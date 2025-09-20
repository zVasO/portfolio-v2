"use server";

interface CaptchaResponse {
    success: boolean;
    "error-codes"?: string[];
}

export async function verifyCaptchaAction(token: string) {
    try {
        if (!token) {
            return { success: false, error: "Missing token" };
        }

        const secret = process.env.RECAPTCHA_SECRET_KEY;
        if (!secret) {
            throw new Error("Missing RECAPTCHA_SECRET_KEY in environment variables");
        }

        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secret}&response=${token}`,
        });

        const data = (await response.json()) as CaptchaResponse;

        if (data.success) {
            return { success: true };
        }

        return { success: false, error: data["error-codes"] };
    } catch (error) {
        return { success: false, error: (error as Error).message };
    }
}
