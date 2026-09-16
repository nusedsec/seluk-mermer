"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";

const HERO_SLIDES = [
  {
    id: "yesil-cami",
    subtitle: "DİNİ & MİMARİ YAPI",
    title: "YEŞİL CAMİ",
    description: "Geleneksel motiflerin modern doğal taş işçiliği ve mekanik kaplama teknikleriyle buluştuğu ibadet alanı projemiz.",
    bgImage: "/main1.webp"
  },
  {
    id: "goldeneye-hotel",
    subtitle: "OTEL & REZİDANS KAPLAMA",
    title: "GOLDENEYE HOTEL",
    description: "Lüks mimari detaylar, geniş alan zemin döşemeleri ve özel üretim bookmatch mermer uygulamaları.",
    bgImage: "/main2.webp"
  },
  {
    id: "raparin-villa",
    subtitle: "ÖZEL LÜKS KONUT",
    title: "RAPARIN VILLA",
    description: "Özel kesim dış cephe mekanik fiber kaplaması ve prestijli iç mekan zemin çözümleri.",
    bgImage: "/main3.webp"
  }
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <div className="main-wrapper">
      {/* NAVİGASYON */}
      <header className="header">
        <Link href="/" className="logo">
          SELUK<span>MERMER</span>
        </Link>
        <nav className="nav">
          <Link href="/" className="nav-link">ANASAYFA</Link>

          <div className="nav-item">
            <Link href="/uygulamalar" className="nav-link">UYGULAMALAR ▾</Link>
            <div className="dropdown-menu">
              <Link href="/uygulamalar#yer-doseme" className="dropdown-item">Yer Döşeme</Link>
              <Link href="/uygulamalar#duvar-kaplama" className="dropdown-item">Duvar Kaplama</Link>
              <Link href="/uygulamalar#havuz" className="dropdown-item">Havuz Kaplama</Link>
              <Link href="/uygulamalar#dis-cephe" className="dropdown-item">Dış Cephe</Link>
              <Link href="/uygulamalar#mekanik" className="dropdown-item">Mekanik Kaplama</Link>
              <Link href="/uygulamalar#fiber" className="dropdown-item">Fiber Kaplama</Link>
            </div>
          </div>

          <div className="nav-item">
            <Link href="/projeler" className="nav-link">PROJELER ▾</Link>
            <div className="dropdown-menu">
              <Link href="/projeler#tamamlanan" className="dropdown-item">Tamamlanan Projeler</Link>
              <Link href="/projeler#devam-eden" className="dropdown-item">Devam Eden Projeler</Link>
              <Link href="/projeler#referanslar" className="dropdown-item">Özel Tasarımlar</Link>
            </div>
          </div>

          <Link href="/iletisim" className="nav-link">İLETİŞİM</Link>
        </nav>
      </header>

      {/* HERO SEKSİYONU */}
      <section 
        className="hero-showcase-container"
        style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content" key={currentSlide.id}>
          <span className="hero-subtitle">{currentSlide.subtitle}</span>
          <h1 className="hero-title">{currentSlide.title}</h1>
          <p className="hero-desc">{currentSlide.description}</p>
        </div>

        <div className="hero-tabs-wrapper">
          <div className="hero-tabs">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                className={`tab-btn ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                 {slide.title}
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
              <Link href="/iletisim" className="btn-link">
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

      {/* PRESTİJLİ MİMARİ PROJE KARTLARI */}
      <section className="projects-section">
        <div className="projects-top">
          <div>
            <span className="section-subtitle">PORTFOLYO</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>ÖNE ÇIKAN PROJELER</h2>
          </div>
          <Link href="/projeler" className="btn-link">
            TÜM PROJELERİ İNCELE <ArrowRight size={18} />
          </Link>
        </div>

        <div className="projects-grid">
  <Link href="/projeler#yesil-cami" className="project-card" style={{ backgroundImage: "url('/main1.webp')" }}>
    <div className="project-card-overlay"></div>
    <div className="project-card-content">
      <span className="project-cat">DİNİ & MİMARİ YAPI</span>
      <h3 className="project-title">Yeşil Cami</h3>
      <p className="project-desc">Özel işçilikli mermer mekanik dış cephe ve iç mekan taş kaplama uygulamaları.</p>
    </div>
  </Link>

  <Link href="/projeler#goldeneye-hotel" className="project-card" style={{ backgroundImage: "url('/main2.webp')" }}>
    <div className="project-card-overlay"></div>
    <div className="project-card-content">
      <span className="project-cat">OTEL & REZİDANS</span>
      <h3 className="project-title">GoldenEye Hotel</h3>
      <p className="project-desc">Geniş ebat simetrik damar takipli (Bookmatch) duvar ve lobi zemin döşemesi.</p>
    </div>
  </Link>

  <Link href="/projeler#raparin-villa" className="project-card" style={{ backgroundImage: "url('/main3.webp')" }}>
    <div className="project-card-overlay"></div>
    <div className="project-card-content">
      <span className="project-cat">LÜKS KONUT</span>
      <h3 className="project-title">Raparin Villa</h3>
      <p className="project-desc">Özel tasarım dış cephe kaplamaları ve su yalıtımlı zemin çözümleri.</p>
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
              <li><Link href="/yasal-bildirim">Yasal Bildirim</Link></li>
              <li><Link href="/kalite-standartlari">Kalite Standartları</Link></li>
              <li><Link href="/kvkk">KVKK & Gizlilik</Link></li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="footer-col">
            <h4 className="footer-title">Sosyal Medya</h4>
            <ul className="footer-links">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          {/* Dokümantasyon */}
          <div className="footer-col">
            <h4 className="footer-title">Dokümantasyon</h4>
            <ul className="footer-links">
              <li><a href="/dokumanlar/projeler.pdf" download>Projeler (PDF)</a></li>
              <li><a href="/dokumanlar/teknik-sartnameler.pdf" download>Teknik Şartnameler</a></li>
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