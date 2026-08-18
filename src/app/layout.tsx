import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "3AM Construction Services | Premium Construction Company in Luzon",
    template: "%s | 3AM Construction Services",
  },
  description:
    "3AM Construction Services is a premium construction company in Luzon specializing in residential, private, and public projects. Interior and exterior design, fit-outs, construction, and repair.",
  keywords: [
    "construction company",
    "Luzon construction",
    "residential construction",
    "fit-out works",
    "interior design",
    "3AM Construction Services",
    "premium construction",
    "luxury homes Philippines",
    "construction contractor Luzon",
    "building construction Philippines",
  ],
  authors: [{ name: "3AM Construction Services" }],
  creator: "3AM Construction Services",
  metadataBase: new URL("https://3amconstruction.com"),
  openGraph: {
    title: "3AM Construction Services | Premium Construction Company in Luzon",
    description:
      "Building safe, functional, and well-designed spaces for families, businesses, and communities across Luzon, Philippines.",
    type: "website",
    locale: "en_PH",
    siteName: "3AM Construction Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "3AM Construction Services",
    description:
      "Premium construction company in Luzon. Residential, private, and public projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
