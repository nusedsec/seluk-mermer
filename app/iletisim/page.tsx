import Link from "next/link";

export default function IletisimPage() {
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
        <span className="section-subtitle">BİZE ULAŞIN</span>
        <h1 className="main-title">Projenizi Birlikte Planlayalım</h1>
      </section>

      <div className="contact-container">
        <div className="glass-card">
          <span className="card-tag">OFİS BİLGİLERİ</span>
          <h3 className="card-title" style={{ marginBottom: '1.5rem' }}>İletişim Detayları</h3>
          <p className="card-desc" style={{ marginBottom: '1rem' }}><strong>Adres:</strong> İstanbul, Türkiye</p>
          <p className="card-desc" style={{ marginBottom: '1rem' }}><strong>Telefon:</strong> +90 (212) 000 00 00</p>
          <p className="card-desc"><strong>E-Posta:</strong> info@corerax.com</p>
        </div>

        <div className="glass-card">
          <form className="main-form">
            <div className="input-group">
              <input type="text" placeholder="Adınız Soyadınız" required />
              <input type="email" placeholder="E-Posta Adresiniz" required />
            </div>
            <input type="text" placeholder="Konu / Proje Türü" />
            <textarea rows={5} placeholder="Mesajınız veya Proje Detayları" required></textarea>
            <button type="submit" className="submit-btn">TEKLİF AL / GÖNDER</button>
          </form>
        </div>
      </div>

      <footer className="footer">© {new Date().getFullYear()} CORERAX. Tüm hakları saklıdır.</footer>
    </div>
  );
}