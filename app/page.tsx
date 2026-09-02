"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";

const HERO_SLIDES = [
  {
    id: "sahara-noir",
    subtitle: "MİMARİ DUVAR KAPLAMA",
    title: "SAHARA NOIR",
    description: "Siyah mermerin altın damarlarla kusursuz uyumu. İç ve dış mekanda benzersiz lüks anlayışı.",
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800"
  },
  {
    id: "calacatta-extra",
    subtitle: "İÇ MEKAN ZEMİN DÖŞEME",
    title: "CALACATTA EXTRA",
    description: "İtalyan mermer geleneğinin en saf hali. Geniş alanlarda ferahlık ve zamansız zarafet.",
    bgImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800"
  },
  {
    id: "statuario-venato",
    subtitle: "BOOKMATCH & ÖZEL UYGULAMA",
    title: "STATUARIO VENATO",
    description: "Simetrik damar takibi ile mimari yapılarda odak noktası oluşturan doğal taş sanatı.",
    bgImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1800"
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
          CORE<span>RAX</span>
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

      {/* TASK 1: EKRANI SIIRLAYAN TAM GENİŞLİK HERO SEKSİYONU */}
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
                0{index + 1}. {slide.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TASK 2: VİZYON VE FİRMA TANITIMI (KOYU MERMER TEMALI) */}
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

      {/* TASK 3: İLETİŞİM FORMU BÖLÜMÜ */}
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

      {/* TASK 4: PRESTİJLİ MİMARİ PROJE KARTLARI */}
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
          <div className="project-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000')" }}>
            <div className="project-card-overlay"></div>
            <div className="project-card-content">
              <span className="project-cat">LÜKS KONUT</span>
              <h3 className="project-title">Bodrum Villa Rezidans</h3>
              <p className="project-desc">Özel kesim mermer mekanik dış cephe kaplaması ve iç mekan yer döşemeleri uygulaması.</p>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1000')" }}>
            <div className="project-card-overlay"></div>
            <div className="project-card-content">
              <span className="project-cat">TİCARİ YAPILAR</span>
              <h3 className="project-title">İstanbul Plaza Lobi</h3>
              <p className="project-desc">Geniş ebat simetrik damar takipli (Bookmatch) duvar kaplama ve zemin döşeme.</p>
            </div>
          </div>

          <div className="project-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000')" }}>
            <div className="project-card-overlay"></div>
            <div className="project-card-content">
              <span className="project-cat">OTEL & REZİDANS</span>
              <h3 className="project-title">Ege Spa & Resort</h3>
              <p className="project-desc">Kaymaz doğal taş yer döşemeleri ve özel su yalıtımlı fiber kaplama havuz alanları.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} SELUK. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}