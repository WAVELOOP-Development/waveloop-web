import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    template: '%s | WAVELOOP - Waves of Innovation',
    default: 'WAVELOOP - Waves of Innovation',
  },
  description: 'WAVELOOP is a forward-thinking software development company dedicated to creating innovative solutions that transform businesses and enhance user experiences.',
  keywords: ['WAVELOOP', 'Innovation', 'Software Development', 'Web Development', 'Mobile Apps', 'AI Solutions'],
  creator: 'Team WAVELOOP',
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/icon-192.png', // Using existing icon since apple-touch-icon.png doesn't exist
  },
  openGraph: {
    title: 'WAVELOOP - Waves of Innovation',
    description: 'WAVELOOP is a forward-thinking software development company dedicated to creating innovative solutions that transform businesses and enhance user experiences.',
    url: 'https://waveloop.dev',
    siteName: 'WAVELOOP',
    images: [
      {
        url: 'https://waveloop.dev/logo-primary-T.png',
        width: 1200,
        height: 630,
        alt: 'WAVELOOP Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAVELOOP - Waves of Innovation',
    description: 'WAVELOOP is a forward-thinking software development company dedicated to creating innovative solutions that transform businesses and enhance user experiences.',
    images: ['https://waveloop.dev/logo-primary-T.png'], // Made consistent with OpenGraph
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WAVELOOP",
              "url": "https://waveloop.dev",
              "logo": "https://waveloop.dev/logo-primary-T.png",
              "description": "WAVELOOP is a forward-thinking software development company dedicated to creating innovative solutions that transform businesses and enhance user experiences."
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
