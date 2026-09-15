"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./uygulamalar.module.css";

const categories = [
  {
    id: "yer-doseme",
    title: "Yer Döşeme",
    desc: "İç ve dış mekanlar için yüksek dayanımlı, kaymazlık yüzey seçeneğine sahip ve ağır yaya trafiğine uygun özel ebatlı zemin çözümleri.",
    imageSrc: "/images/yer-doseme.jpg",
  },
  {
    id: "duvar-kaplama",
    title: "Duvar Kaplama",
    desc: "Mimari mekanlara estetik derinlik katan, geniş panel alternatifleri ve özel dokulu iç cephe kaplama sistemleri.",
    imageSrc: "/images/duvar-kaplama.jpg",
  },
  {
    id: "dis-cephe",
    title: "Dış Cephe",
    desc: "Sert iklim koşullarına dayanıklı, UV korumalı ve binalara prestij katan mimari dış cephe kaplama konstrüksiyonları.",
    imageSrc: "/images/dis-cephe.jpg",
  },
  {
    id: "mekanik-fiber-kaplama",
    title: "Mekanik Fiber Kaplama",
    desc: "Fiber takviyeli kompozit yapısı sayesinde hafif ancak yüksek mukavemetli, mekanik taşıyıcılı ileri teknoloji cephe çözümleri.",
    imageSrc: "/images/mekanik-fiber-kaplama.jpg",
  },
];

const technicalItems = [
  {
    id: "havalandirmali-cepheler",
    title: "Mekanik Akıllı Cephe Sistemleri",
    desc: "Bina kabuğunda oluşturulan hava sirkülasyon boşluğu sayesinde yüksek ısı ve ses yalıtımı sağlayan mekanik taşıyıcılı sistemler.",
    subText: "Ankraj detayları ve statik hesaplama dokümanı"
  },
  {
    id: "yer-doseme-teknikleri",
    title: "Yüksek Trafik Yer Döşemeleri",
    desc: "Ağır yaya trafiğine ve mekanik yüklere dayanıklı, kalibre edilmiş yüksek hassasiyetli zemin kaplama çözümleri.",
    subText: "Aşınma direnci ve yüzey işleme standartları"
  },
  {
    id: "fiber-panel-montaj",
    title: "Mekanik Fiber Panel Montajı",
    desc: "Hafifletilmiş fiber takviyeli kompozit panellerin çelik veya alüminyum karkaslar üzerine özel klips ve perçinlerle entegrasyonu.",
    subText: "Fiber panel montaj kılavuzu ve kesit şemaları"
  }
];

export default function ApplicationsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* BÖLÜMLENMİŞ KATEGORİLER */}
        <div className={styles.categoriesContainer}>
          {categories.map((cat) => (
            <section key={cat.id} className={styles.categorySectionItem}>
              <div className={styles.categoryImageWrapper}>
                <Image
                  src={cat.imageSrc}
                  alt={cat.title}
                  fill
                  unoptimized
                  className={styles.img}
                  priority
                />
              </div>
              <div className={styles.categoryContent}>
                <h2 className={styles.categoryTitle}>{cat.title}</h2>
                <p className={styles.categoryDesc}>{cat.desc}</p>
              </div>
            </section>
          ))}
        </div>

        {/* TEKNİK BÖLÜM */}
        <section className={styles.technicalSection}>
          <div className={styles.techImageWrapper}>
            <Image
              src="/images/teknik-bolum.jpg"
              alt="Mekanik Cephe ve Montaj Teknik Görseli"
              fill
              unoptimized
              className={styles.img}
            />
          </div>

          <div>
            <span className={styles.sectionBadge}>MÜHENDİSLİK</span>
            <h2 className={styles.mainTitle}>Teknik Bölüm</h2>

            <div className={styles.accordionList}>
              {technicalItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.id} className={styles.accordionItem}>
                    <button 
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(index)}
                      type="button"
                    >
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <span className={styles.icon}>
                        {isOpen ? "→" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className={styles.accordionBody}>
                        <p className={styles.itemDesc}>{item.desc}</p>
                        <p className={styles.subText}>
                          <span>{item.subText}</span>
                          <span>→</span>
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJE VURGUSU */}
        <section className={styles.projectHighlight}>
          <div className={styles.projectInfo}>
            <span className={styles.sectionBadge} style={{ color: "#a3b09a" }}>ÖNE ÇIKAN PROJE</span>
            <h2 className={styles.projectTitle}>Seluk Merkez & Showroom</h2>
            <table className={styles.projectMetaTable}>
              <tbody>
                <tr>
                  <td className={styles.metaLabel}>YIL</td>
                  <td className={styles.metaValue}>2025</td>
                </tr>
                <tr>
                  <td className={styles.metaLabel}>MİMARLIK</td>
                  <td className={styles.metaValue}>Seluk Mimari Tasarım Grubu</td>
                </tr>
                <tr>
                  <td className={styles.metaLabel}>KAPLAMA</td>
                  <td className={styles.metaValue}>Mekanik Fiber & Dış Cephe</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.projectImageWrapper}>
            <Image
              src="/images/dis-cephe.jpg"
              alt="Seluk Genel Merkez Projesi"
              fill
              unoptimized
              className={styles.img}
            />
          </div>
        </section>

        {/* İLETİŞİM KUTUSU */}
        <section className={styles.contactBoard}>
          <div>
            <span className={styles.sectionBadge}>DESTEK VE DANIŞMANLIK</span>
            <h2 className={styles.contactTitle}>Bilgi talep edin</h2>
            <p className={styles.contactText}>
              Ürün teknik detayları, statik hesaplamalar, ebatlandırma ve projenize özel teklif almak için mimari ekibimizle iletişime geçebilirsiniz.
            </p>
          </div>
          <div>
            <Link href="/iletisim" className={styles.contactButton}>
              Ekiple İletişime Geçin
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div>
            <span className={styles.footerColTitle}>İletişim & Konum</span>
            <p className={styles.footerText}>
              <strong>Seluk Sanayi ve Tic. A.Ş.</strong><br />
              Organize Sanayi Bölgesi, No: 42<br />
              Başakşehir / İstanbul – Türkiye
            </p>
          </div>

          <div>
            <span className={styles.footerColTitle}>Kurumsal</span>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>Yasal Bildirim</li>
              <li className={styles.footerListItem}>Kalite Standartları</li>
              <li className={styles.footerListItem}>KVKK & Gizlilik</li>
            </ul>
          </div>

          <div>
            <span className={styles.footerColTitle}>Sosyal Medya</span>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a 
                  href="https://www.instagram.com/selukmermer?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Instagram
                </a>
              </li>
              <li className={styles.footerListItem}>LinkedIn</li>
            </ul>
          </div>

          <div>
            <span className={styles.footerColTitle}>Dokümantasyon</span>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a 
                  href="/pdf/isler.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Projeler (PDF)
                </a>
              </li>
              <li className={styles.footerListItem}>
                <Link 
                  href="/iletisim"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Teknik Şartnameler
                </Link>
              </li>
            </ul>
          </div>
        </footer>

      </div>
    </main>
  );
}