"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
    onVerify: (token: string | null) => void;
}

export default function Captcha({ onVerify }: CaptchaProps) {
    const [token, setToken] = useState<string | null>(null);

    const handleChange = (value: string | null) => {
        setToken(value);
        onVerify(value);
    };

    return (
        <div className="flex justify-center my-2">
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                onChange={handleChange}
            />
        </div>
    );
}
