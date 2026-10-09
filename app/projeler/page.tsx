"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './projects.module.css';
import { projectsData } from './projectsData';

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const completedProjects = projectsData.filter((p) => p.status === 'completed');
  const ongoingProjects = projectsData.filter((p) => p.status === 'ongoing');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.page}>
      {/* ÜST NAVİGASYON BARI */}
      <header className={styles.navbarWrapper}>
        <div className={styles.navbarInner}>
          <Link href="/" className={styles.logo}>
            SELUK<span>MERMER</span>
          </Link>

          {/* Mobil Hamburger Butonu */}
          <button 
            className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
            <div className={styles.navItem}>
              <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                Anasayfa
              </Link>
            </div>

            <div className={styles.navItem}>
              <Link href="/uygulamalar" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                Uygulamalar ▾
              </Link>
              <div className={styles.dropdownMenu}>
                <Link href="/uygulamalar#yer-doseme" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>Yer Döşeme</Link>
                <Link href="/uygulamalar#duvar-kaplama" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>Duvar Kaplama</Link>
                <Link href="/uygulamalar#dis-cephe" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>Dış Cephe</Link>
                <Link href="/uygulamalar#mekanik-fiber-kaplama" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>Mekanik Fiber Kaplama</Link>
              </div>
            </div>

            <div className={styles.navItem}>
              <Link href="/projeler" className={`${styles.navLink} ${styles.activeLink}`} onClick={() => setIsMenuOpen(false)}>
                Projeler ▾
              </Link>
              <div className={styles.dropdownMenu}>
                <Link href="/projeler#tamamlanan" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>Tamamlanan Projeler</Link>
                <Link href="/projeler#devam-eden" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>Devam Eden Projeler</Link>
                <Link href="/projeler#ozel-tasarimlar" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>Özel Tasarımlar</Link>
              </div>
            </div>

            <div className={styles.navItem}>
              <Link href="/iletisim" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                İletişim
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className={styles.container}>
        {/* SAYFA ÜST BAŞLIĞI */}
        <header className={styles.pageHeader}>
          <span className={styles.sectionBadge}>PORTFOLYO</span>
          <h1 className={styles.pageTitle}>Seçkin Mimari Projeler</h1>
        </header>

        {/* 1. TAMAMLANAN PROJELER */}
        <section id="tamamlanan">
          <h2 className={styles.sectionTitle}>Tamamlanan Uygulamalar</h2>
          <div className={styles.projectsGrid}>
            {completedProjects.map((project, index) => {
              const isEven = index % 2 === 1;
              const formattedNumber = String(index + 1).padStart(2, '0');

              return (
                <Link
                  href={`/projeler/${project.slug}`}
                  key={project.slug}
                  className={styles.cardLink}
                >
                  <article
                    className={`${styles.projectCard} ${isEven ? styles.reverse : ''}`}
                    id={project.slug}
                  >
                    <div className={styles.cardImageWrapper}>
                      <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        className={styles.cardImage}
                        sizes="(max-width: 992px) 100vw, 60vw"
                        priority={index === 0}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <span className={styles.projectNumber}>{formattedNumber}</span>
                      <span className={styles.cardCategory}>{project.category}</span>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <p className={styles.cardDesc}>{project.description}</p>
                      <div className={styles.cardMeta}>
                        <div>
                          <span>Konum:</span>
                          <span className={styles.cardMetaValue}>{project.location}</span>
                        </div>
                        <div>
                          <span>Mermer:</span>
                          <span className={styles.cardMetaValue}>{project.marmorType}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 2. DEVAM EDEN PROJELER */}
        <section id="devam-eden">
          <h2 className={styles.sectionTitle}>Devam Eden Çalışmalar</h2>
          <div className={styles.ongoingGrid}>
            {ongoingProjects.map((project) => (
              <article key={project.slug} className={styles.ongoingCard}>
                <div className={styles.ongoingHeader}>
                  <span className={styles.cardCategory}>{project.category}</span>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardMeta}>
                  <div>
                    <span>Konum:</span>
                    <span className={styles.cardMetaValue}>{project.location}</span>
                  </div>
                  <div>
                    <span>Mermer:</span>
                    <span className={styles.cardMetaValue}>{project.marmorType}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. GEÇMİŞ BİTEN İŞLER TABLOSU */}
        <section id="gecmis-isler" className={styles.historySection}>
          <span className={styles.sectionBadge}>ARŞİV & REFERANSLAR</span>
          <h2 className={styles.sectionTitle}>Geçmiş Tamamlanan Projelerimiz</h2>
          <div className={styles.historyTableContainer}>
            <table className={styles.historyTable}>
              <thead>
                <tr>
                  <th>Proje Adı</th>
                  <th>Konum</th>
                  <th style={{ textAlign: 'right' }}>Yıl</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.historyProject}>Kaymakamlık Binası[cite: 6]</td>
                  <td>Sefaköy[cite: 6]</td>
                  <td className={styles.historyYear}>1999[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Hekimoğlu Plaza[cite: 6]</td>
                  <td>Rami Kışla[cite: 6]</td>
                  <td className={styles.historyYear}>2000[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Ağız ve Diş Sağ. Hastanesi[cite: 6]</td>
                  <td>Okmeydanı[cite: 6]</td>
                  <td className={styles.historyYear}>2002[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Hükümet Binaları[cite: 6]</td>
                  <td>Astana (Kazakistan)[cite: 6]</td>
                  <td className={styles.historyYear}>2006[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>İHH İstanbul Şubesi[cite: 6]</td>
                  <td>Fatih[cite: 6]</td>
                  <td className={styles.historyYear}>2008[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>İstikbal Showroom[cite: 6]</td>
                  <td>Gümülcine (Yunanistan)[cite: 6]</td>
                  <td className={styles.historyYear}>2008[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Kardelen Bebe Giyim[cite: 6]</td>
                  <td>Ümraniye[cite: 6]</td>
                  <td className={styles.historyYear}>2008[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Pamidor Bebe Giyim[cite: 6]</td>
                  <td>Maltepe[cite: 6]</td>
                  <td className={styles.historyYear}>2008[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Erciyes Boru Malikhanesi[cite: 6]</td>
                  <td>Kanlıca[cite: 6]</td>
                  <td className={styles.historyYear}>2010[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>ERS Gökdelenleri[cite: 6]</td>
                  <td>Kiev (Ukrayna)[cite: 6]</td>
                  <td className={styles.historyYear}>2010[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Beyaz İnşaat Villaları[cite: 6]</td>
                  <td>Çatalca[cite: 6]</td>
                  <td className={styles.historyYear}>2011[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Çamoluk Kuyumculuk[cite: 6]</td>
                  <td>Ümraniye[cite: 6]</td>
                  <td className={styles.historyYear}>2011[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Ekşioğlu Villası[cite: 6]</td>
                  <td>Şile[cite: 6]</td>
                  <td className={styles.historyYear}>2012[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Özel Alev Okulları[cite: 6]</td>
                  <td>Ömerli[cite: 6]</td>
                  <td className={styles.historyYear}>2012[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Yüksel İnşaat Showroom[cite: 6]</td>
                  <td>Beykoz[cite: 6]</td>
                  <td className={styles.historyYear}>2012[cite: 6]</td>
                </tr>
                <tr>
                  <td className={styles.historyProject}>Kadın D. ve Çocuk Hastanesi[cite: 6]</td>
                  <td>Esenler[cite: 6]</td>
                  <td className={styles.historyYear}>2013[cite: 6]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. ÖZEL TASARIM VURGUSU */}
        <section id="ozel-tasarimlar" className={styles.customDesignSection}>
          <div>
            <span className={styles.sectionBadge}>MÜHENDİSLİK VE MİMARİ UZMANLIK</span>
            <h2 className={styles.customTitle}>Kişiye ve Projeye Özel Mermer Çözümleri</h2>
            <p className={styles.customText}>
              Sadece standart mermer tedariği sağlamıyor; blok seçiminden milimetrik CNC kesimlerine,
              yüzey işleme tekniklerinden şantiye montajına kadar projenizin her aşamasında Seluk Mermer'in
              üstün kalite vizyonunu yansıtıyoruz. Yeşil Cami’nin manevi dokusundan GoldenEye ve Raparin Villa’nın lüks çizgilerine dek her taşta sanatı işliyoruz.
            </p>
            <ul className={styles.customHighlights}>
              <li className={styles.customHighlightItem}>
                <span className={styles.bullet}>◆</span>
                <span>Dünya standartlarında yüksek hassasiyetli CNC ve Su Jeti kesim teknolojisi</span>
              </li>
              <li className={styles.customHighlightItem}>
                <span className={styles.bullet}>◆</span>
                <span>Nadir bulunan kaba ve renkli mermer bloklarına doğrudan erişim</span>
              </li>
              <li className={styles.customHighlightItem}>
                <span className={styles.bullet}>◆</span>
                <span>Mimarlara özel birebir teknik danışmanlık ve 3D uygulama desteği</span>
              </li>
            </ul>
          </div>
          <div className={styles.customImageWrapper}>
            <Image
              src="/images/siyah-logo.webp"
              alt="Özel Mermer Tasarımları"
              fill
              className={styles.cardImage}
              sizes="(max-width: 992px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* 5. İLETİŞİM BARI */}
        <section className={styles.contactBoard}>
          <div>
            <h2 className={styles.contactTitle}>Projenizi Birlikte Hayata Geçirelim</h2>
            <p className={styles.contactText}>
              Mimari projeleriniz için özel mermer seçimleri, teknik detaylar ve fiyat teklifi almak üzere uzman ekibimizle iletişime geçebilirsiniz.
            </p>
          </div>
          <Link href="/iletisim" className={styles.contactButton}>
            TEKLİF İSTEYİN
          </Link>
        </section>
      </div>

      {/* LÜKS MİMARİ FOOTER BAR */}
      <footer className="footer-bar">
        <div className="footer-container">
          {/* İletişim & Konum */}
          <div className="footer-col">
            <h4 className="footer-title">İletişim & Konum</h4>
            <p className="footer-text">
              <strong style={{ color: '#fff', fontWeight: 500 }}>
                Seluk Sanayi ve Tic. A.Ş.
              </strong>
              <br />
              Organize Sanayi Bölgesi, No: 42
              <br />
              Başakşehir / İstanbul – Türkiye
            </p>
          </div>

          {/* Kurumsal */}
          <div className="footer-col">
            <h4 className="footer-title">Kurumsal</h4>
            <ul className="footer-links">
              <li>
                <Link href="/yasal-bildirim">Yasal Bildirim</Link>
              </li>
              <li>
                <Link href="/kalite-standartlari">Kalite Standartları</Link>
              </li>
              <li>
                <Link href="/kvkk">KVKK & Gizlilik</Link>
              </li>
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
              <li>
                <a href="https://www.linkedin.com/company/seluk" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Dokümantasyon */}
          <div className="footer-col">
            <h4 className="footer-title">Dokümantasyon</h4>
            <ul className="footer-links">
              <li>
                <Link href="/projeler">Projeler</Link>
              </li>
              <li>
                <a href="/dokumanlar/teknik-sartnameler.pdf" download>
                  Teknik Şartnameler
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Seluk Sanayi ve Tic. A.Ş. Tüm hakları saklıdır.</span>
          <span>Mermer & Doğal Taş Mühendisliği</span>
        </div>
      </footer>
    </div>
  );
}