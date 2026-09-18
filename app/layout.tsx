import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";

import "./globals.css";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

const sans = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
    axes: ["opsz", "wdth"],
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: [
        "développeur web",
        "freelance",
        "full stack",
        "next.js",
        "react",
        "laravel",
        "symfony",
        "typescript",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        url: "/",
        type: "website",
        siteName: SITE_NAME,
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={sans.variable}>
                <a className="skip-link" href="#main-content">
                    Aller au contenu principal
                </a>
                <Navbar />
                {children}
                <Footer />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
