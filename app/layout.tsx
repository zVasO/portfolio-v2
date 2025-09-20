import type {Metadata} from "next";
import {IBM_Plex_Mono, Space_Grotesk} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import Providers from "@/components/Providers";
import React from "react";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    variable: "--font-plex-mono",
    display: "swap",
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.dgermann.dev"),
    title: {
        default: "Dylan Germann | Développeur Web Freelance",
        template: "%s | Dylan Germann",
    },
    description:
        "Développeur web freelance, spécialisé dans la création de sites et d’applications modernes. Contactez-moi pour vos projets sur mesure.",
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
        title: "Dylan Germann | Développeur Web Freelance",
        description:
            "Développeur web freelance, spécialisé dans la création de sites et d’applications modernes. Contactez-moi pour vos projets sur mesure.",
        url: "/",
        type: "website",
        siteName: "Dylan Germann",
        images: [
            {
                url: "/img/profile-picture.webp",
                width: 1200,
                height: 630,
                alt: "Portrait de Dylan Germann",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dylan Germann | Développeur Web Freelance",
        description:
            "Développeur web freelance, spécialisé dans la création de sites et d’applications modernes. Contactez-moi pour vos projets sur mesure.",
        images: ["/img/profile-picture.webp"],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='fr'>
        <Providers>
            <body
                className={`${spaceGrotesk.variable} ${plexMono.variable} antialiased`}
            >
            <a className='skip-link' href='#main-content'>
                Aller au contenu principal
            </a>
            <Navbar/>
            <div className="min-h-screen">
                {children}
            </div>
            <Footer/>
            <Analytics/>
            </body>
        </Providers>
        </html>
    );
}
