import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '../projectsData';
import styles from './project-detail.module.css';

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* NAVBAR BÖLÜMÜNÜ BURAYA KOPYALAYIN */}
      
      <div className={styles.container}>
        
        {/* METİN ODAKLI BAŞLIK ALANI */}
        <header className={styles.articleHeader}>
           <Link href="/projeler" className={styles.backLink}>
            ← Tüm Projelere Dön
          </Link>
          <div className={styles.titleWrapper}>
            <span className={styles.sectionBadge}>{project.category}</span>
            <h1 className={styles.articleTitle}>{project.title}</h1>
            <p className={styles.articleSpot}>{project.description}</p>
          </div>
        </header>

        <article className={styles.articleLayout}>
          {/* SOL TARAF: DETAYLI AÇIKLAMA METİNLERİ */}
          <div className={styles.articleContent}>
             <h2 className={styles.subTitle}>Mimarinin Taşa Kazınan Hikayesi</h2>
             <div className={styles.textBody}>
              {project.fullDescription.map((paragraph, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
             </div>

             {/* Proje İçi Görsel - İlk Galeri Resmi Metin Arasında */}
             <div className={styles.inlineImageWrapper}>
                <Image
                  src={project.gallery[1] || project.mainImage}
                  alt={`${project.title} iç mekan detayı`}
                  fill
                  className={styles.inlineImage}
                  sizes="(max-width: 992px) 100vw, 60vw"
                />
             </div>

             <h3 className={styles.subTitleSmall}>Uygulama Özellikleri & İşçilik</h3>
             <ul className={styles.featureList}>
                {project.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.bullet}>◆</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
          </div>

          {/* SAĞ TARAF: KÜNYE BİLGİSİ */}
          <aside className={styles.articleSidebar}>
            <div className={styles.metaSidebar}>
              <h3 className={styles.metaTitle}>Proje Özeti</h3>
              <ul className={styles.metaList}>
                <li>
                  <span className={styles.metaLabel}>Lokasyon</span>
                  <span className={styles.metaValue}>{project.location}</span>
                </li>
                <li>
                  <span className={styles.metaLabel}>Mermer Serisi</span>
                  <span className={styles.metaValue}>{project.marmorType}</span>
                </li>
                <li>
                  <span className={styles.metaLabel}>Tamamlanma</span>
                  <span className={styles.metaValue}>{project.year}</span>
                </li>
                 <li>
                  <span className={styles.metaLabel}>Uygulama Alanı</span>
                  <span className={styles.metaValue}>{project.area}</span>
                </li>
              </ul>
            </div>
          </aside>
        </article>

        {/* ALT BÖLÜM: KALAN GÖRSELLER */}
        <section className={styles.gallerySection}>
           <h2 className={styles.subTitle}>İnceleme Galerisi</h2>
           <div className={styles.galleryGrid}>
              {project.gallery.map((imgUrl, index) => (
                <div key={index} className={styles.galleryImageWrapper}>
                  <Image
                    src={imgUrl}
                    alt={`${project.title} Görsel ${index + 1}`}
                    fill
                    className={styles.galleryImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
}