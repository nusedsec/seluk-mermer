"use client";

import { useState } from "react";
import Link from "next/link";
import UygulamaCanvas from "./UygulamaCanvas";
import styles from "./uygulamalar.module.css";

const applicationsData = [
  {
    id: "yer-doseme",
    title: "Yer Döşemesi",
    desc: "Yüksek yaya trafiğine dayanıklı, hassas derz ve ebatlama ile uygulanan zemin mermer çözümleri.",
    techDetails: [
      "Kalınlık Standartları: 2cm ve 3cm hassas kesim",
      "Yüzey İşlemleri: Cilalı, honlu, fırçalanmış (patinato)",
      "Kaymazlık Derecelendirmesi: R9 - R11 arası ıslak/kuru alan opsiyonları"
    ]
  },
  {
    id: "duvar-kaplama",
    title: "Duvar Kaplama",
    desc: "İç mekanlarda estetik ve akustik bütünlük sağlayan dikey doğal taş kaplama sistemleri.",
    techDetails: [
      "Montaj Yöntemi: Yapıştırma harçlı veya ankrajlı sistem",
      "Bookmatch Bütünlüğü: Plaka damar takip yazılımı ile sıfır hata yerleşim",
      "Derz Yapısı: 1mm - 2mm mikro derz hassasiyeti"
    ]
  },
  {
    id: "dis-cephe-kaplama",
    title: "Dış Cephe Kaplama",
    desc: "Zorlu iklim koşullarına dayanıklı, bina yükünü optimize eden dış cephe mermer çözümleri.",
    techDetails: [
      "Taş Kalınlığı: Min. 3cm dış cephe sınıfı doğal taş",
      "Hava Koşulları Dayanımı: Donma-çözünme döngü test onaylı",
      "Isı İzolasyonu: Taş arkası taş yünü izolasyon entegrasyonu"
    ]
  },
  {
    id: "fiber-kaplama",
    title: "Fiber Kaplama",
    desc: "Cam elyaf ve reçine takviyeli ultra hafif, yüksek esneklik ve mukavemet sunan mermer paneller.",
    techDetails: [
      "Ağırlık Avantajı: Standart mermere kıyasla %60 daha hafif",
      "Panel Boyutları: 150x300 cm'ye kadar devasa yekpare boyutlar",
      "Kullanım Alanları: Asansör kabinleri, yat iç mekanları, yüksek katlı yapılar"
    ]
  },
  {
    id: "mekanik-kaplama",
    title: "Mekanik Kaplama",
    desc: "Paslanmaz çelik ankraj elemanları ile alt taşıyıcı konstrüksiyona bağlanan havalandırmalı cephe sistemi.",
    techDetails: [
      "Ankraj Tipi: AISI 304 / 316 paslanmaz çelik braketler",
      "Güvenlik Faktörü: Deprem yükü ve rüzgar statik hesaplamalı",
      "Sistem Tipi: Gizli pimli veya pürüzsüz klipsli alüminyum karkas"
    ]
  }
];

const processSteps = [
  { step: "01", title: "Saha & Rölöve Alımı", desc: "Lazer tarayıcılar ile alanın milimetrik dijital ölçümü alınır." },
  { step: "02", title: "3D Mimari Görselleştirme", desc: "Plaka damarları bilgisayar ortamında eşleştirilir; alanın bitmiş 3D görseli sunulur." },
  { step: "03", title: "CNC & Precision Kesim", desc: "Onaylanan proje, su jeti ve CNC tezgahlarında sıfır hata ile kesilir." },
  { step: "04", title: "Saha Uygulaması & Teslimat", desc: "Uzman montaj ekibi tarafından uygulama yapılır ve teslim edilir." }
];

export default function ApplicationsPage() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <main className={styles.appContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <span className={styles.subtitle}>SELUK MERMER</span>
        <h1 className={styles.title}>Uygulamalarımız</h1>
        <p className={styles.heroDesc}>
          Mimari projeleriniz için teknik standartlara uygun, yüksek mukavemetli ve estetik mermer uygulama çözümleri.
        </p>
      </section>

      {/* UYGULAMALAR GRID */}
      <section className={styles.gridSection}>
        {applicationsData.map((item) => (
          <div key={item.id} className={styles.appCard}>
            <div>
              <span className={styles.cardCat}>KATEGORİ</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>

            <div className={styles.cardTech}>
              <h4 className={styles.techHead}>TEKNİK DETAYLAR</h4>
              <ul className={styles.techUl}>
                {item.techDetails.map((detail, idx) => (
                  <li key={idx} className={styles.techLi}>
                    <span className={styles.bullet}>▪</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* 3D VE SÜREÇ BÖLÜMÜ */}
      <section className={styles.processBox}>
        <span className={styles.subtitle}>SÜREÇ YÖNETİMİ</span>
        <h2 className={styles.title} style={{ fontSize: "2rem" }}>Mimari Projenin Hayata Geçişi</h2>

        <div className={styles.processLayout}>
          <div className={styles.canvasWrapper}>
            <UygulamaCanvas activeStep={activeStep} />
          </div>

          <div className={styles.stepsWrapper}>
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`${styles.stepItem} ${activeStep === index ? styles.stepItemActive : ""}`}
              >
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{item.step}</span>
                  <h3 className={styles.stepTitle}>{item.title}</h3>
                </div>
                <p className={styles.stepDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM CTA */}
      <section className={styles.ctaWrapper}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHead}>Bizimle İletişime Geçmek İster Mısınız?</h2>
          <p className={styles.ctaText}>
            Projenizin detaylarını değerlendirmek, teknik danışmanlık almak ve fiyat teklifi oluşturmak için ekibimizle hemen iletişime geçin.
          </p>
          <Link href="/iletisim" className={styles.ctaBtn}>
            İLETİŞİME GEÇ
          </Link>
        </div>
      </section>
    </main>
  );
}