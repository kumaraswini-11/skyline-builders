import type {Metadata} from "next";
import {DM_Sans, Barlow} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Professional Construction Services",
    template: "%s | Professional Construction Services",
  },
  description:
    "Offering top-quality construction solutions for residential and commercial projects.",
  keywords: ["construction", "building", "architecture", "engineering", "contracting"],
  authors: [{name: "Your Company Name"}],

  openGraph: {
    title: "Professional Construction Services",
    description: "Expert construction solutions for all your building needs.",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "Your Company Name",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Your Company Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Construction Services",
    description: "Expert construction solutions for all your building needs.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/images/twitter-image.jpg`],
  },

  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body className={`${dmSans.variable} ${barlow.variable} antialiased`}>{children}</body>
    </html>
  );
}
