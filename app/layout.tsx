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
  description: "Nihat Seluk liderliğinde SELUK; yüksek segment mimari projelerde mermer, mekanik dış cephe kaplama, yer döşemesi ve özel bookmatch uygulamaları sunar.",
  keywords: [
    "Nihat Seluk",
    "Seluk Mermer",
    "Nihat Seluk mermer",
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
  authors: [{ name: "Nihat Seluk" }],
  robots: "index, follow",
  openGraph: {
    title: "SELUK | Prestijli Mermer & Mimari Doğal Taş Çözümleri",
    description: "Nihat Seluk güvencesiyle lüks mimari projeler için özel mermer ve doğal taş çözümleri.",
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