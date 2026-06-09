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

export const metadata: Metadata = {
  title: "MT Vidyapeth | Excellence in Education Since 2003",
  description:
    "MT Vidyapeth is a premier educational institution committed to academic excellence, holistic development, and nurturing future leaders.",
  openGraph: {
    title: "MT Vidyapeth | Excellence in Education",
    description:
      "Premier educational institution committed to academic excellence and holistic development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
