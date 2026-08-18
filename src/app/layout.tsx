import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "3AM Construction Services | Premium Construction Company in Luzon",
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
  ],
  openGraph: {
    title: "3AM Construction Services",
    description:
      "Building safe, functional, and well-designed spaces for families, businesses, and communities.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
