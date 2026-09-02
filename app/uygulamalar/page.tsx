import Link from "next/link";

export default function UygulamalarPage() {
  const uygulamalar = [
    { id: "yer-doseme", title: "Yer Döşeme Uygulamaları", tag: "ZEMİN KORUMA & ESTETİK", desc: "Aşınmaya dayanıklı, cilalı veya patinatolu mermer ve granit zemin döşeme sistemleri." },
    { id: "duvar-kaplama", title: "Duvar Kaplama", tag: "İÇ MEKAN MIMARI", desc: "Bookmatch damar takipli panel uygulamaları, TV arkası ve lobi duvar kaplama çözümleri." },
    { id: "havuz", title: "Havuz Kaplama", tag: "SU YALITIMI & DOKU", desc: "Kaymaz yüzeyli doğal taşlar ve havuz içi özel fiber kaplama izolasyon çözümleri." },
    { id: "dis-cephe", title: "Dış Cephe Kaplama", tag: "DIŞ MEKAN DAYANIKLILIK", desc: "İklim şartlarına dayanıklı doğal taş dış cephe kaplama uygulamaları." },
    { id: "mekanik", title: "Mekanik Kaplama", tag: "MÜHENDİSLİK ÇÖZÜMLERİ", desc: "Paslanmaz ankraj sistemleri ile yüksek binalarda güvenli mekanik mermer montajı." },
    { id: "fiber", title: "Fiber Kaplama", tag: "KOMPOZİT GÜÇLENDİRME", desc: "Mermer arkası fiber file ve reçine takviyeli yüksek dayanımlı kompozit kaplamalar." },
  ];

  return (
    <div className="main-wrapper">
      <header className="header">
        <Link href="/" className="logo">CORE<span>RAX</span></Link>
        <nav className="nav">
          <Link href="/" className="nav-link">ANASAYFA</Link>
          <div className="nav-item">
            <Link href="/uygulamalar" className="nav-link">UYGULAMALAR ▾</Link>
            <div className="dropdown-menu">
              {uygulamalar.map((item) => (
                <Link key={item.id} href={`/uygulamalar#${item.id}`} className="dropdown-item">{item.title}</Link>
              ))}
            </div>
          </div>
          <Link href="/projeler" className="nav-link">PROJELER</Link>
          <Link href="/iletisim" className="nav-link">İLETİŞİM</Link>
        </nav>
      </header>

      <section className="hero-section">
        <span className="section-subtitle">HİZMET METODLARIMIZ</span>
        <h1 className="main-title">Uygulama Alanlarımız</h1>
        <p className="description">Hassas işçilik ve kaliteli malzeme entegrasyonu ile sunduğumuz uzmanlık alanlarımız.</p>
      </section>

      <div className="grid-container">
        {uygulamalar.map((u) => (
          <div id={u.id} key={u.id} className="glass-card">
            <span className="card-tag">{u.tag}</span>
            <h3 className="card-title">{u.title}</h3>
            <p className="card-desc">{u.desc}</p>
          </div>
        ))}
      </div>

      <footer className="footer">© {new Date().getFullYear()} CORERAX. Tüm hakları saklıdır.</footer>
    </div>
  );
}