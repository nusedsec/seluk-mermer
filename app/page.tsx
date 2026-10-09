"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";

const HERO_SLIDES = [
  {
    id: "yesil-cami",
    subtitle: "İSTANBUL - ÜMRANİYE",
    title: "Yeşilvadi Camii 2009",
    description: "Geleneksel motiflerin modern doğal taş işçiliği ve mekanik kaplama teknikleriyle buluştuğu ibadet alanı projemiz.",
    bgImage: "images/yesil-cami-1.webp"
  },
  {
    id: "atelier-towers",
    subtitle: "İSTANBUL - KUYUMCUKENT",
    title: "Atelier Towers 2026",
    description: "Atasay güvencesiyle yükselen projede, mermer kaplama ve prestijli doğal taş çözümleri.",
    bgImage: "images/atelier-1.webp"
  },
  {
    id: "raparin-villa",
    subtitle: "IRAK - SÜLEYMANİYE",
    title: "Raparin Villa 2023",
    description: "Özel kesim dış cephe mekanik fiber kaplaması ve prestijli iç mekan zemin çözümleri.",
    bgImage: "/main3.webp"
  },
  {
    id: "goldeneye-hotel",
    subtitle: "BULGARİSTAN - Svilengrad",
    title: "GoldenEye Hotel & Casino 2023",
    description: "Lüks mimari detaylar, geniş alan zemin döşemeleri ve özel üretim bookmatch mermer uygulamaları.",
    bgImage: "images/goldeneye-1.webp"
  }
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <div className="main-wrapper">
      {/* NAVİGASYON */}
      <header className="header">
        <Link href="/" className="logo" style={{ textDecoration: "none" }}>
          SELUK<span>MERMER</span>
        </Link>

        {/* Masaüstü ve Mobil Açılır Navigasyon Menüsü */}
        <nav className={`nav ${isMenuOpen ? "active" : ""}`} id="navMenu">
          <Link href="/" className="nav-link" style={{ textDecoration: "none" }} onClick={closeMenu}>ANASAYFA</Link>

          <div className="nav-item">
            <Link href="/uygulamalar" className="nav-link" style={{ textDecoration: "none" }} onClick={closeMenu}>UYGULAMALAR ▾</Link>
            <div className="dropdown-menu">
              <Link href="/uygulamalar#yer-doseme" className="dropdown-item" style={{ textDecoration: "none" }} onClick={closeMenu}>Yer Döşeme</Link>
              <Link href="/uygulamalar#duvar-kaplama" className="dropdown-item" style={{ textDecoration: "none" }} onClick={closeMenu}>Duvar Kaplama</Link>
              <Link href="/uygulamalar#havuz" className="dropdown-item" style={{ textDecoration: "none" }} onClick={closeMenu}>Havuz Kaplama</Link>
              <Link href="/uygulamalar#dis-cephe" className="dropdown-item" style={{ textDecoration: "none" }} onClick={closeMenu}>Dış Cephe</Link>
              <Link href="/uygulamalar#mekanik" className="dropdown-item" style={{ textDecoration: "none" }} onClick={closeMenu}>Mekanik Kaplama</Link>
              <Link href="/uygulamalar#fiber" className="dropdown-item" style={{ textDecoration: "none" }} onClick={closeMenu}>Fiber Kaplama</Link>
            </div>
          </div>

          <div className="nav-item">
            <Link href="/projeler" className="nav-link" style={{ textDecoration: "none" }} onClick={closeMenu}>PROJELER ▾</Link>
            <div className="dropdown-menu">
              <Link href="/projeler#tamamlanan" className="dropdown-item" style={{ textDecoration: "none" }} onClick={closeMenu}>Tamamlanan Projeler</Link>
              <Link href="/projeler#devam-eden" className="dropdown-item" style={{ textDecoration: "none" }} onClick={closeMenu}>Devam Eden Projeler</Link>
              <Link href="/projeler#referanslar" className="dropdown-item" style={{ textDecoration: "none" }} onClick={closeMenu}>Özel Tasarımlar</Link>
            </div>
          </div>

          <Link href="/iletisim" className="nav-link" style={{ textDecoration: "none" }} onClick={closeMenu}>İLETİŞİM</Link>
        </nav>

        {/* Mobil Sağ Üst 3 Çizgi Hamburger Butonu */}
        <button 
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`} 
          id="menuToggle" 
          onClick={toggleMenu}
          aria-label="Menüyü Aç"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* HERO SEKSİYONU */}
      <section 
        className="hero-showcase-container"
        style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content" key={currentSlide.id}>
          <span className="hero-subtitle" style={{ fontWeight: 600 }}>{currentSlide.subtitle}</span>
          <h1 className="hero-title" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>{currentSlide.title}</h1>
          <p className="hero-desc" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>{currentSlide.description}</p>
        </div>

        <div className="hero-tabs-wrapper">
          <div className="hero-tabs">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                className={`tab-btn ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                 {slide.title.replace("Seluk Mermer - ", "")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VİZYON VE FİRMA TANITIMI */}
      <section className="section-full">
        <div className="about-grid">
          <div>
            <span className="section-subtitle">HAKKIMIZDA & VİZYON</span>
            <h2 className="section-title">Doğal Taşın Estetiğini Mühendislikle Buluşturuyoruz</h2>
          </div>
          <div className="about-text">
            <p>
              SELUK, yüksek segment mimari projelerde mermer ve doğal taş çözümleri sunan mühendislik odaklı bir firmadır. Taşın doğal dokusunu bozmadan ileri teknoloji kesim ve montaj teknikleriyle yapılara entegre ediyoruz.
            </p>
            <p>
              Mekanik dış cephe kaplamalarından özel bookmatch uygulamalarına kadar geniş bir yelpazede hizmet veriyor; tasarımdan teslimata kadar olan tüm süreçleri titizlikle yönetiyoruz.
            </p>
            <div className="about-stats">
              <div>
                <span className="stat-number">15+</span>
                <span className="stat-label">YILLIK DENEYİM</span>
              </div>
              <div>
                <span className="stat-number">250+</span>
                <span className="stat-label">PRESTİJLİ PROJE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İLETİŞİM FORMU BÖLÜMÜ */}
      <section className="contact-section">
        <div className="contact-grid">
          <div>
            <span className="section-subtitle">BİZE ULAŞIN</span>
            <h2 className="section-title">Mimari Projeniz İçin Teklif Alın</h2>
            <p style={{ color: "#aaa", lineHeight: "1.8", marginBottom: "2.5rem" }}>
              Sorularınız, mermer tedariği veya özel kesim projeleriniz için formu doldurabilirsiniz. Ekibimiz en kısa sürede dönüş yapacaktır.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", color: "#ccc" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <MapPin color="#c5a880" size={20} />
                <span>İstanbul, Türkiye</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Phone color="#c5a880" size={20} />
                <span>+90 (212) 000 00 00</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Mail color="#c5a880" size={20} />
                <span>info@seluk.com</span>
              </div>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <Link href="/iletisim" className="btn-link" style={{ textDecoration: "none" }}>
                Tüm Lokasyonlar ve Detaylı Harita <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>ADINIZ VE SOYADINIZ</label>
              <input type="text" className="form-input" placeholder="Ahmet Yılmaz" />
            </div>
            <div className="form-group">
              <label>E-POSTA ADRESİNİZ</label>
              <input type="email" className="form-input" placeholder="ahmet@example.com" />
            </div>
            <div className="form-group">
              <label>MESAJINIZ / PROJE DETAYLARI</label>
              <textarea rows={5} className="form-textarea" placeholder="Projenizden bahsedin..."></textarea>
            </div>
            <button type="submit" className="submit-btn" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem" }}>
              MESAJI GÖNDER <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* PRESTİJLİ MİMARİ PROJE KARTLARI (4'LÜ BOARD) */}
      <section className="projects-section">
        <div className="projects-top">
          <div>
            <span className="section-subtitle">PORTFOLYO</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>ÖNE ÇIKAN PROJELER</h2>
          </div>
          <Link href="/projeler" className="btn-link" style={{ textDecoration: "none" }}>
            TÜM PROJELERİ İNCELE <ArrowRight size={18} />
          </Link>
        </div>

        <div className="projects-grid">
          <Link href="/projeler#yesil-cami" className="project-card" style={{ backgroundImage: "url('images/yesil-cami-2.webp')", textDecoration: "none" }}>
            <div className="project-card-overlay"></div>
            <div className="project-card-content">
              <span className="project-cat" style={{ fontWeight: 600 }}>İSTANBUL - ÜMRANİYE</span>
              <h3 className="project-title" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, textDecoration: "none" }}>Seluk Mermer - Yeşilvadi Camii 2009</h3>
              <p className="project-desc" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500, textDecoration: "none" }}>Kiptaş, Ümraniye Yeşilvadi Camii doğal taş ve mermer uygulamaları.</p>
            </div>
          </Link>

          <Link href="/projeler#atelier-towers" className="project-card" style={{ backgroundImage: "url('images/atelier-1.webp')", textDecoration: "none" }}>
            <div className="project-card-overlay"></div>
            <div className="project-card-content">
              <span className="project-cat" style={{ fontWeight: 600 }}>İSTANBUL - KUYUMCUKENT</span>
              <h3 className="project-title" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, textDecoration: "none" }}>Seluk Mermer - Atelier Towers 2026</h3>
              <p className="project-desc" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500, textDecoration: "none" }}>Atasay, Kuyumcukent mermer kaplama ve prestijli doğal taş çözümleri.</p>
            </div>
          </Link>

          <Link href="/projeler#raparin-villa" className="project-card" style={{ backgroundImage: "url('/main3.webp')", textDecoration: "none" }}>
            <div className="project-card-overlay"></div>
            <div className="project-card-content">
              <span className="project-cat" style={{ fontWeight: 600 }}>IRAK - SÜLEYMANİYE</span>
              <h3 className="project-title" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, textDecoration: "none" }}>Seluk Mermer - Raparin Villa 2023</h3>
              <p className="project-desc" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500, textDecoration: "none" }}>Süleymaniye lüks villa mermer dekorasyon ve taş projeleri.</p>
            </div>
          </Link>

          <Link href="/projeler#goldeneye-hotel" className="project-card" style={{ backgroundImage: "url('images/goldeneye-1.webp')", textDecoration: "none" }}>
            <div className="project-card-overlay"></div>
            <div className="project-card-content">
              <span className="project-cat" style={{ fontWeight: 600 }}>BULGARİSTAN - Svilengrad</span>
              <h3 className="project-title" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, textDecoration: "none" }}>Seluk Mermer - GoldenEye Hotel & Casino 2023</h3>
              <p className="project-desc" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500, textDecoration: "none" }}>Svilengrad otel ve casino mermer uygulamaları ve mimari çözümleri.</p>
            </div>
          </Link>
        </div>
      </section>

      <footer className="footer-bar">
        <div className="footer-container">
          {/* İletişim & Konum */}
          <div className="footer-col">
            <h4 className="footer-title">İletişim & Konum</h4>
            <p className="footer-text">
              Seluk Sanayi ve Tic. A.Ş.<br />
              Organize Sanayi Bölgesi, No: 42<br />
              Başakşehir / İstanbul – Türkiye
            </p>
          </div>

          {/* Kurumsal */}
          <div className="footer-col">
            <h4 className="footer-title">Kurumsal</h4>
            <ul className="footer-links">
              <li><Link href="/yasal-bildirim" style={{ textDecoration: "none" }}>Yasal Bildirim</Link></li>
              <li><Link href="/kalite-standartlari" style={{ textDecoration: "none" }}>Kalite Standartları</Link></li>
              <li><Link href="/kvkk" style={{ textDecoration: "none" }}>KVKK & Gizlilik</Link></li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="footer-col">
            <h4 className="footer-title">Sosyal Medya</h4>
            <ul className="footer-links">
              <li><a href="https://www.instagram.com/selukmermer?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/seluk/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>LinkedIn</a></li>
            </ul>om
          </div>

          {/* Dokümantasyon */}
          <div className="footer-col">
            <h4 className="footer-title">Dokümantasyon</h4>
            <ul className="footer-links">
              <li><a href="/dokumanlar/projeler.pdf" download style={{ textDecoration: "none" }}>Projeler (PDF)</a></li>
              <li><a href="/dokumanlar/teknik-sartnameler.pdf" download style={{ textDecoration: "none" }}>Teknik Şartnameler</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Seluk Sanayi ve Tic. A.Ş. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  );
}