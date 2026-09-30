import Link from 'next/link';
import styles from './iletisim.module.css';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      {/* ÜST NAVİGASYON BARI */}
      <header className={styles.navbarWrapper}>
        <div className={styles.navbarInner}>
          <Link href="/" className={styles.logo}>
            SELUK<span>MERMER</span>
          </Link>
          <nav className={styles.navMenu}>
            <Link href="/" className={styles.navLink}>
              Anasayfa
            </Link>
            <Link href="/uygulamalar" className={styles.navLink}>
              Uygulamalar
            </Link>
            <Link href="/projeler" className={styles.navLink}>
              Projeler
            </Link>
            <Link href="/iletisim" className={`${styles.navLink} ${styles.activeLink}`}>
              İletişim
            </Link>
          </nav>
        </div>
      </header>

      <div className={styles.container}>
        {/* SAYFA ÜST BAŞLIĞI */}
        <header className={styles.pageHeader}>
          <span className={styles.sectionBadge}>BİZE ULAŞIN</span>
          <h1 className={styles.pageTitle}>İletişim & Randevu</h1>
        </header>

        {/* İLETİŞİM İÇERİK IZGARASI */}
        <div className={styles.contactGrid}>
          {/* SOL: MERKEZ BİLGİLERİ */}
          <div className={styles.infoColumn}>
            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>Merkez Ofis</h3>
              <p className={styles.infoText}>
                Organize Sanayi Bölgesi, Mermerciler Sitesi No: 42<br />
                Başakşehir / İstanbul – Türkiye
              </p>
            </div>

            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>Doğrudan İletişim</h3>
              <p className={styles.infoText}>
                E-posta: <a href="mailto:info@selukmermer.com">info@selukmermer.com</a><br />
                Telefon: <a href="tel:+902120000000">+90 (212) 000 00 00</a>
              </p>
            </div>

            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>Çalışma Saatleri</h3>
              <p className={styles.infoText}>
                Pazartesi – Cuma: 09:00 – 18:00<br />
                Cumartesi: 09:00 – 14:00
              </p>
            </div>
          </div>

          {/* SAĞ: TEKLİF & MESAJ FORMU */}
          <div className={styles.formColumn}>
            <h2 className={styles.formTitle}>Mimari Proje Danışmanlığı</h2>
            <p className={styles.formSubtitle}>
              Özel mermer uygulamalarınız, villa projeleriniz veya ticari yapılar için uzman ekibimizle görüşün. Formu doldurun, sizinle en kısa sürede iletişime geçelim.
            </p>

            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">Adınız Soyadınız</label>
                <input 
                  type="text" 
                  id="name" 
                  className={styles.formInput} 
                  placeholder="Ahmet Yılmaz" 
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">E-Posta Adresiniz</label>
                <input 
                  type="email" 
                  id="email" 
                  className={styles.formInput} 
                  placeholder="ornek@sirket.com" 
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="phone">Telefon Numaranız</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className={styles.formInput} 
                  placeholder="+90 (500) 000 00 00" 
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">Proje Detayları / Mesajınız</label>
                <textarea 
                  id="message" 
                  className={styles.formTextarea} 
                  placeholder="Projeniz hakkında kısaca bilgi verin..." 
                  required 
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Gönder / Teklif İste
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* LÜKS MİMARİ FOOTER BAR */}
      <footer className="footer-bar">
        <div className="footer-container">
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

          <div className="footer-col">
            <h4 className="footer-title">Kurumsal</h4>
            <ul className="footer-links">
              <li><Link href="/yasal-bildirim">Yasal Bildirim</Link></li>
              <li><Link href="/kalite-standartlari">Kalite Standartları</Link></li>
              <li><Link href="/kvkk">KVKK & Gizlilik</Link></li>
            </ul>
          </div>

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
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

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
  );
}