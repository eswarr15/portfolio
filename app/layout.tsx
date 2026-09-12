import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Eswar Krishnamoorthy | Cloud & DevOps Engineer";
const description = "Independent Cloud and DevOps portfolio with fictional Kubernetes labs, generalized troubleshooting, public-safe reference diagrams and CKA-certified experience.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eswarr15.github.io/portfolio/"),
  title,
  description,
  applicationName: "Eswar DevOps Platform",
  alternates: { canonical: "https://eswarr15.github.io/portfolio/" },
  icons: { icon: "/portfolio/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://eswarr15.github.io/portfolio/",
    images: [{ url: "https://eswarr15.github.io/portfolio/og.png", width: 1748, height: 915, alt: "Eswar Krishnamoorthy Cloud and DevOps Engineer portfolio" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://eswarr15.github.io/portfolio/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
