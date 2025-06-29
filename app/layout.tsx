import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Six_Caps } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const sixCaps = Six_Caps({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-six-caps",
});

export const metadata: Metadata = {
  title: "WAVELOOP Waves of innovation",
  description: "Empowering Innovation Through Intelligent Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} ${sixCaps.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
