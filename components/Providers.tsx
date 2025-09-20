"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            scriptProps={{ async: true, defer: true, appendTo: "head" }}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
}
