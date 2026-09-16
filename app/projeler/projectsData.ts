export interface Project {
  slug: string;
  title: string;
  category: string;
  status: 'completed' | 'ongoing';
  statusText: string;
  description: string;
  fullDescription: string[];
  location: string;
  marmorType: string;
  year: string;
  area: string;
  mainImage: string;
  gallery: string[];
  features: string[];
}

export const projectsData: Project[] = [
  {
    slug: 'yesil-cami',
    title: 'Yeşil Cami',
    category: 'Dini & Tarihi Mimari',
    status: 'completed',
    statusText: 'Tamamlandı',
    description: 'Kaba ve nadide yeşil mermer bloklarının özel kesim ve ustalıkla işlenmesiyle hayata geçirilen anıtsal ibadethane projesi.',
    fullDescription: [
      'Yeşil Cami projesi, doğaltaş mimarisinin geleneksel el işçiliği ve Seluk Mermer\'in ileri teknoloji mühendislik vizyonuyla buluştuğu anıtsal yapılardan biridir.',
      'Projede kullanılan özel seçim kaba yeşil mermer blokları, yapının hem dış cephe kaplamalarında hem de mihrab ve minber gibi manevi odak noktalarında kesintisiz desen takibiyle uygulanmıştır.',
      'Ağır iklim şartlarına dayanıklı mekanik taşıyıcı sistemler ve su itici yüzey emprenye uygulamaları ile yapının uzun yıllar boyunca ilk günkü ihtişamını koruması sağlanmıştır.'
    ],
    location: 'Türkiye',
    marmorType: 'Kaba Yeşil Mermer & Özel Kesim',
    year: '2024',
    area: '1.200 m²',
    mainImage: '/main1.webp',
    gallery: [
      '/main1.webp',
      '/main2.webp',
      '/main3.webp'
    ],
    features: [
      'Özel damar takipli CNC ve Su Jeti işçilikleri',
      'Mekanik karkas üzeri gizli ankraj montaj tekniği',
      'Yüksek dayanımlı dış cephe koruma emprenyesi',
      'Geleneksel Selçuklu motiflerinin modern taş işçiliğine uyarlanması'
    ]
  },
  {
    slug: 'goldeneye-hotel',
    title: 'GoldenEye Hotel',
    category: 'Lüks Rezidans & Otel',
    status: 'completed',
    statusText: 'Tamamlandı',
    description: 'Altın damarlı koyu mermer kaplamaları ve özel bookmatch detaylarıyla estetiğin ve lüksün doruk noktası.',
    fullDescription: [
      'GoldenEye Hotel projesi, koyu mermer zemin üzerine büyüleyici altın tonlu damarların hakim olduğu ultra lüks bir mimari konsepttir.',
      'Geniş ebatlı plaka kaplamaları, özel lobi aydınlatma detayları ve karşılama alanlarındaki pürüzsüz epoksi cila uygulamaları ile mekâna benzersiz bir derinlik kazandırılmıştır.',
      'Süit odaların banyo ve ıslak hacimlerinde uygulanan simetrik bookmatch (ayna desenli) taş dizilimleri, otelin konfor standartlarını zirveye taşımaktadır.'
    ],
    location: 'İstanbul',
    marmorType: 'Nadir Altın Damarlı Siyah Mermer',
    year: '2025',
    area: '2.850 m²',
    mainImage: '/main2.webp',
    gallery: [
      '/main2.webp',
      '/main1.webp',
      '/main3.webp'
    ],
    features: [
      'Bookmatch (ayna desenli) zemin ve duvar kaplamaları',
      'Lüks pirinç ve altın kaplama mermer birleşim derzleri',
      'Yüksek parlaklıkta İtalyan kristalize cila uygulaması',
      'Özel imalat mermer resepsiyon bankosu ve lobi duvarları'
    ]
  },
  {
    slug: 'raparin-villa',
    title: 'Raparin Villa',
    category: 'Özel Lüks Konut',
    status: 'completed',
    statusText: 'Tamamlandı',
    description: 'Dış cephe mekanik fiber kaplamalarından iç mekan özel tasarım zemin ve banyo işçiliklerine kadar bütüncül mermer çözümü.',
    fullDescription: [
      'Raparin Villa, dış cephe giydirme çözümlerinden iç mekan ıslak hacimlerine kadar uçtan uca lüks taş seçimi ile inşa edilmiş müstakil bir yaşam alanıdır.',
      'Sert iklim koşullarına dayanıklı mekanik fiber destekli mermer paneller dış cephede güvenle uygulanmış, iç mekanlarda ise sıcak ve davetkar doğaltaş dokuları tercih edilmiştir.',
      'Havuz çevresinde kullanılan özel kaymaz yüzeyli mermer kaplamalar ve villa girişindeki monolitik mermer basamaklar projenin mimari bütünlüğünü tamamlamaktadır.'
    ],
    location: 'Erbil',
    marmorType: 'Özel Seçim Doğaltaş & Fiber Kaplama',
    year: '2025',
    area: '1.500 m²',
    mainImage: '/main3.webp',
    gallery: [
      '/main3.webp',
      '/main1.webp',
      '/main2.webp'
    ],
    features: [
      'Mekanik fiber panelli hafif ve güvenli dış cephe montajı',
      'Özel tasarım mermer lavabo, küvet ve banyo tezgah imalatı',
      'Kaymaz yüzeyli havuz çevresi ve bahçe yürüyüş yolları',
      'Yerden ısıtmaya uygun özel kalibre zemin mermerleri'
    ]
  },
  {
    slug: 'atelier-tower',
    title: 'Atelier Tower',
    category: 'Ticari & Karma Mimari',
    status: 'ongoing',
    statusText: 'Devam Ediyor',
    description: 'Gökdelen lobi alanları, cephe kaplamaları ve yönetim katlarında uygulaması titizlikle devam eden dev mermer projesi.',
    fullDescription: [
      'Atelier Tower, modern mimarinin yüksek metrajlı doğaltaş ihtiyaçlarını karşılayan prestijli bir ticari kule projesidir.',
      'Yoğun insan trafiğine uygun yüksek mukavemetli gri ve siyah mermer kombinasyonları, lobi, asansör söveleri ve VIP yönetim katlarında özel detaylarla uygulanmaktadır.'
    ],
    location: 'İstanbul',
    marmorType: 'Gri & Siyah Mermer Kombinasyonları',
    year: '2026',
    area: '4.200 m²',
    mainImage: '/main2.webp',
    gallery: [
      '/main2.webp',
      '/main1.webp'
    ],
    features: [
      'Yüksek yaya trafiğine dirençli yüzey sertleştirme',
      'Büyük ebatlı lobiler için akustik taş uygulamaları',
      'Asansör sövelerinde hafifletilmiş petek panelli mermer kaplama'
    ]
  }
];