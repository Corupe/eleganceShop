import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/providers/cart-provider";
import { AuthProvider } from "@/components/providers/auth-provider";
import MobileNavigation from "@/components/mobile/mobile-navigation";
import MobileHeader from "@/components/mobile/mobile-header";
import InstallPrompt from "@/components/mobile/install-prompt";
import OfflineIndicator from "@/components/mobile/offline-indicator";
import PushNotifications from "@/components/mobile/push-notifications";
import MobileOptimizations from "@/components/mobile/mobile-optimizations";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Élégance Algérienne - Fashion & Lifestyle",
  description:
    "Découvrez notre collection exclusive de mode et lifestyle pour femmes et hommes. Livraison en Algérie.",
  keywords: "mode, fashion, lifestyle, Algérie, vêtements, accessoires",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Élégance",
  },
  openGraph: {
    title: "Élégance Algérienne - Fashion & Lifestyle",
    description: "Collection exclusive de mode et lifestyle",
    type: "website",
  },
  generator: "FreeFlow Studio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1c1917",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              name: "Élégance Algérienne",
              description: "Fashion & Lifestyle store in Algeria",
              address: {
                "@type": "PostalAddress",
                addressCountry: "DZ",
                addressLocality: "Alger",
              },
              priceRange: "$$",
              acceptsReservations: false,
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>
        <AuthProvider>
          <CartProvider>
            <MobileOptimizations />
            <OfflineIndicator />

            <MobileHeader />
            <Header />
            {children}
            <Footer />

            <MobileNavigation />
            <InstallPrompt />
            <PushNotifications />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
