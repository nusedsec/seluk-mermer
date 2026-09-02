import Link from "next/link";

export default function ProjelerPage() {
  return (
    <div className="main-wrapper">
      <header className="header">
        <Link href="/" className="logo">CORE<span>RAX</span></Link>
        <nav className="nav">
          <Link href="/" className="nav-link">ANASAYFA</Link>
          <Link href="/uygulamalar" className="nav-link">UYGULAMALAR</Link>
          <Link href="/projeler" className="nav-link">PROJELER</Link>
          <Link href="/iletisim" className="nav-link">İLETİŞİM</Link>
        </nav>
      </header>

      <section className="hero-section">
        <span className="section-subtitle">PORTFOLYO</span>
        <h1 className="main-title">Tamamlanan ve Devam Eden Projeler</h1>
        <p className="description">Mimari vizyonunuzu gerçeğe dönüştürdüğümüz nitelikli projelerimiz.</p>
      </section>

      <div className="grid-container">
        <div id="tamamlanan" className="glass-card">
          <span className="card-tag">TAMAMLANDI</span>
          <h3 className="card-title">Vadistanbul Kule Mekanik Cephe</h3>
          <p className="card-desc">12.000 m² mekanik sistem mermer dış cephe montajı tamamlanmıştır.</p>
        </div>

        <div id="devam-eden" className="glass-card">
          <span className="card-tag">DEVAM EDİYOR</span>
          <h3 className="card-title">Sapanca Lüks Kompleks Projesi</h3>
          <p className="card-desc">Villa içi zemin döşemeleri, havuz fiber kaplamaları ve peyzaj doğal taş uygulamaları devam etmektedir.</p>
        </div>

        <div id="referanslar" className="glass-card">
          <span className="card-tag">ÖZEL TASARIM</span>
          <h3 className="card-title">Katar Restoran Konsept Mermer Masa & Resepsiyon</h3>
          <p className="card-desc">Özel üretim CNC detaylı mermer banko ve mobilya kaplama uygulaması.</p>
        </div>
      </div>

      <footer className="footer">© {new Date().getFullYear()} CORERAX. Tüm hakları saklıdır.</footer>
    </div>
  );
}