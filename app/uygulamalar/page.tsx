"use client";

import { useState, useEffect } from "react";
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
    subText: "Ankraj detayları ve statik hesaplama dokümanı",
  },
  {
    id: "yer-doseme-teknikleri",
    title: "Yüksek Trafik Yer Döşemeleri",
    desc: "Ağır yaya trafiğine ve mekanik yüklere dayanıklı, kalibre edilmiş yüksek hassasiyetli zemin kaplama çözümleri.",
    subText: "Aşınma direnci ve yüzey işleme standartları",
  },
  {
    id: "fiber-panel-montaj",
    title: "Mekanik Fiber Panel Montajı",
    desc: "Hafifletilmiş fiber takviyeli kompozit panellerin çelik veya alüminyum karkaslar üzerine özel klips ve perçinlerle entegrasyonu.",
    subText: "Fiber panel montaj kılavuzu ve kesit şemaları",
  },
];

export default function ApplicationsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={styles.page} style={{ backgroundColor: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>

      {/* ÜST MÜŞTERİ / NAVİGASYON BARI */}
      <header className={styles.navbarWrapper}>
        <div className={styles.navbarInner}>
          <Link href="/" className={styles.logo}>
            SELUK MERMER
          </Link>
          <nav className={styles.navMenu}>
            <Link href="/" className={styles.navLink}>Anasayfa</Link>
            <Link href="/uygulamalar" className={`${styles.navLink} ${styles.activeLink}`}>Uygulamalar</Link>
            <Link href="/projeler" className={styles.navLink}>Projeler</Link>
            <Link href="/iletisim" className={styles.navLink}>İletişim</Link>
          </nav>
        </div>
      </header>

      <div className={styles.container}>

        {/* SAYFA BAŞLIĞI */}
        <div className={styles.pageHeader}>
          <span className={styles.sectionBadge}>ÇÖZÜMLERİMİZ</span>
          <h1 className={styles.pageTitle}>Uygulamalar</h1>
        </div>

        {/* BÖLÜMLENMİŞ KATEGORİLER */}
        <div className={styles.categoriesContainer}>
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className={styles.categorySectionItem}>
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

        {/* KURUMSAL FOOTER BARI */}
        <footer className="footer-bar">
          <div className="footer-container">
            {/* İletişim & Konum */}
            <div className="footer-col">
              <h4 className="footer-title">İletişim & Konum</h4>
              <p className="footer-text">
                <strong style={{ color: "#fff", fontWeight: 500 }}>Seluk Sanayi ve Tic. A.Ş.</strong><br />
                Organize Sanayi Bölgesi, No: 42<br />
                Başakşehir / İstanbul – Türkiye
              </p>
            </div>

            {/* Kurumsal */}
            <div className="footer-col">
              <h4 className="footer-title">Kurumsal</h4>
              <ul className="footer-links">
                <li><Link href="/yasal-bildirim">Yasal Bildirim</Link></li>
                <li><Link href="/kalite-standartlari">Kalite Standartları</Link></li>
                <li><Link href="/kvkk">KVKK & Gizlilik</Link></li>
              </ul>
            </div>

            {/* Sosyal Medya */}
            <div className="footer-col">
              <h4 className="footer-title">Sosyal Medya</h4>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://www.instagram.com/selukmermer?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>

            {/* Dokümantasyon */}
            <div className="footer-col">
              <h4 className="footer-title">Dokümantasyon</h4>
              <ul className="footer-links">
                <li><Link href="/projeler">Projeler</Link></li>
                <li><a href="/dokumanlar/teknik-sartnameler.pdf" download>Teknik Şartnameler</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Seluk Sanayi ve Tic. A.Ş. Tüm hakları saklıdır.</span>
            <span>Mermer & Doğal Taş Mühendisliği</span>
          </div>
        </footer>

      </div>
    </main>
  );
}