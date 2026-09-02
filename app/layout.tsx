import type { Metadata, Viewport } from "next";
import "./globals.css";

// MOBİL UYUMLULUK VE EKRAN AYARLARI
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1f2937",
};

// GOOGLE ARAMA ETİKETLERİ VE SEO METADATA
export const metadata: Metadata = {
  title: "SELUK | Prestijli Mermer & Mimari Doğal Taş Çözümleri",
  description: "SELUK; yüksek segment mimari projelerde mermer, mekanik dış cephe kaplama, yer döşemesi ve özel bookmatch uygulamaları sunar.",
  keywords: [
    "mermer",
    "doğal taş",
    "mimari kaplama",
    "mekanik dış cephe",
    "bookmatch mermer",
    "yer döşeme",
    "mermer cephe kaplama",
    "lüks mermer tasarımları",
    "SELUK mermer"
  ],
  authors: [{ name: "SELUK" }],
  robots: "index, follow",
  openGraph: {
    title: "SELUK | Prestijli Mermer & Mimari Doğal Taş Çözümleri",
    description: "Lüks mimari projeler için özel mermer ve doğal taş çözümleri.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}