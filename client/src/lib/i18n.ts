import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files (we will create these next)
// For now, we'll define the structure and load them dynamically or statically
// To keep it simple for this static build, we'll define resources here or import JSONs

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        solutions: "Solutions",
        technologies: "Technologies",
        cases: "Case Studies",
        resources: "Resources",
        contact: "Contact",
        about: "About Us"
      },
      hero: {
        title: "Powering the Future with Intelligent Microgrids",
        subtitle: "EnovoGrid delivers reliable, sustainable, and engineered energy solutions for a changing world.",
        cta: "Get a Proposal",
        learn_more: "Learn More"
      },
      footer: {
        rights: "© 2026 EnovoGrid Technology Co. Ltd. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      solutions: {
        rural: { title: "Rural Electrification", desc: "Reliable microgrids for remote communities." },
        weak_grid: { title: "Weak Grid Support", desc: "Stabilizing high-renewable penetration grids." },
        island: { title: "Island Resorts", desc: "Silent, clean energy for premium destinations." },
        industrial: { title: "Industrial & Mining", desc: "High-stability power for critical operations." },
        hydro_owner: { title: "Hydro Revitalization", desc: "Upgrading assets for modern efficiency." },
        finance: { title: "Development Finance", desc: "Auditable, sustainable project delivery." },
        epc: { title: "EPC Partnership", desc: "Reducing delivery risk with standardized kits." },
        emergency: { title: "Emergency Power", desc: "Rapid deployment for disaster relief." }
      },
      technologies: {
        vsg: { title: "Virtual Synchronous Generator", desc: "Grid-forming control for stability." },
        hydro: { title: "Small Hydro", desc: "The baseload of renewable microgrids." },
        pv: { title: "Solar PV Systems", desc: "Cost-effective energy generation." },
        bess: { title: "Energy Storage", desc: "Power quality and time-shifting." },
        ems: { title: "Energy Management", desc: "Intelligent dispatch and optimization." },
        wind: { title: "Wind Power", desc: "Complementary generation for diverse sites." },
        scada: { title: "Remote Monitoring", desc: "IoT-enabled fleet management." }
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: "首页",
        solutions: "解决方案",
        technologies: "核心技术",
        cases: "项目案例",
        resources: "资源中心",
        contact: "联系我们",
        about: "关于我们"
      },
      hero: {
        title: "智能微网，赋能未来",
        subtitle: "EnovoGrid 致力于为不断变化的世界提供可靠、可持续且工程化的能源解决方案。",
        cta: "获取方案",
        learn_more: "了解更多"
      },
      footer: {
        rights: "© 2026 EnovoGrid Technology Co. Ltd. 保留所有权利。",
        privacy: "隐私政策",
        terms: "服务条款"
      },
      solutions: {
        rural: { title: "农村电气化", desc: "为偏远社区提供可靠的微电网。" },
        weak_grid: { title: "弱电网治理", desc: "稳定高比例可再生能源接入。" },
        island: { title: "海岛度假区", desc: "为高端目的地提供静音清洁能源。" },
        industrial: { title: "工矿企业", desc: "为关键生产提供高稳定性电源。" },
        hydro_owner: { title: "小水电改造", desc: "资产升级以提升现代化效率。" },
        finance: { title: "开发金融项目", desc: "可审计、可持续的项目交付。" },
        epc: { title: "EPC 合作伙伴", desc: "通过标准化套件降低交付风险。" },
        emergency: { title: "应急电源", desc: "救灾场景的快速部署方案。" }
      },
      technologies: {
        vsg: { title: "虚拟同步机 (VSG)", desc: "实现电网稳定性的构网型控制。" },
        hydro: { title: "小水电", desc: "可再生微电网的稳定基荷。" },
        pv: { title: "太阳能光伏", desc: "高性价比的能源生产方式。" },
        bess: { title: "储能系统", desc: "保障电能质量与削峰填谷。" },
        ems: { title: "能量管理系统", desc: "智能调度与优化运行。" },
        wind: { title: "风力发电", desc: "适应多样化场景的互补能源。" },
        scada: { title: "远程监控", desc: "基于物联网的机队管理。" }
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        solutions: "Solutions",
        technologies: "Technologies",
        cases: "Études de Cas",
        resources: "Ressources",
        contact: "Contact",
        about: "À Propos"
      },
      hero: {
        title: "Alimenter l'Avenir avec des Micro-réseaux Intelligents",
        subtitle: "EnovoGrid fournit des solutions énergétiques fiables, durables et techniques pour un monde en mutation.",
        cta: "Obtenir une Proposition",
        learn_more: "En Savoir Plus"
      },
      footer: {
        rights: "© 2026 EnovoGrid Technology Co. Ltd. Tous droits réservés.",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation"
      },
      solutions: {
        rural: { title: "Électrification Rurale", desc: "Micro-réseaux fiables pour les communautés isolées." },
        weak_grid: { title: "Soutien au Réseau Faible", desc: "Stabilisation des réseaux à forte pénétration renouvelable." },
        island: { title: "Stations Balnéaires Insulaires", desc: "Énergie propre et silencieuse pour destinations premium." },
        industrial: { title: "Industrie et Mines", desc: "Alimentation haute stabilité pour opérations critiques." },
        hydro_owner: { title: "Revitalisation Hydroélectrique", desc: "Modernisation des actifs pour une efficacité accrue." },
        finance: { title: "Finance de Développement", desc: "Livraison de projets auditables et durables." },
        epc: { title: "Partenariat EPC", desc: "Réduction des risques avec des kits standardisés." },
        emergency: { title: "Alimentation d'Urgence", desc: "Déploiement rapide pour les secours." }
      },
      technologies: {
        vsg: { title: "Générateur Synchrone Virtuel", desc: "Contrôle de formation de réseau pour la stabilité." },
        hydro: { title: "Petite Hydroélectricité", desc: "La base des micro-réseaux renouvelables." },
        pv: { title: "Systèmes Photovoltaïques", desc: "Production d'énergie rentable." },
        bess: { title: "Stockage d'Énergie", desc: "Qualité de l'énergie et décalage temporel." },
        ems: { title: "Gestion de l'Énergie", desc: "Répartition intelligente et optimisation." },
        wind: { title: "Énergie Éolienne", desc: "Production complémentaire pour sites divers." },
        scada: { title: "Surveillance à Distance", desc: "Gestion de flotte compatible IoT." }
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        solutions: "Soluciones",
        technologies: "Tecnologías",
        cases: "Casos de Estudio",
        resources: "Recursos",
        contact: "Contacto",
        about: "Sobre Nosotros"
      },
      hero: {
        title: "Impulsando el Futuro con Microrredes Inteligentes",
        subtitle: "EnovoGrid ofrece soluciones energéticas confiables, sostenibles y diseñadas para un mundo cambiante.",
        cta: "Obtener Propuesta",
        learn_more: "Saber Más"
      },
      footer: {
        rights: "© 2026 EnovoGrid Technology Co. Ltd. Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio"
      },
      solutions: {
        rural: { title: "Electrificación Rural", desc: "Microrredes confiables para comunidades remotas." },
        weak_grid: { title: "Soporte de Red Débil", desc: "Estabilización de redes con alta penetración renovable." },
        island: { title: "Resorts Isleños", desc: "Energía limpia y silenciosa para destinos premium." },
        industrial: { title: "Industria y Minería", desc: "Energía de alta estabilidad para operaciones críticas." },
        hydro_owner: { title: "Revitalización Hidroeléctrica", desc: "Actualización de activos para eficiencia moderna." },
        finance: { title: "Finanzas de Desarrollo", desc: "Entrega de proyectos auditables y sostenibles." },
        epc: { title: "Asociación EPC", desc: "Reducción de riesgos con kits estandarizados." },
        emergency: { title: "Energía de Emergencia", desc: "Despliegue rápido para ayuda en desastres." }
      },
      technologies: {
        vsg: { title: "Generador Síncrono Virtual", desc: "Control de formación de red para estabilidad." },
        hydro: { title: "Pequeña Hidroeléctrica", desc: "La base de las microrredes renovables." },
        pv: { title: "Sistemas Fotovoltaicos", desc: "Generación de energía rentable." },
        bess: { title: "Almacenamiento de Energía", desc: "Calidad de energía y desplazamiento temporal." },
        ems: { title: "Gestión de Energía", desc: "Despacho inteligente y optimización." },
        wind: { title: "Energía Eólica", desc: "Generación complementaria para sitios diversos." },
        scada: { title: "Monitoreo Remoto", desc: "Gestión de flotas habilitada para IoT." }
      }
    }
  },
  id: {
    translation: {
      nav: {
        home: "Beranda",
        solutions: "Solusi",
        technologies: "Teknologi",
        cases: "Studi Kasus",
        resources: "Sumber Daya",
        contact: "Kontak",
        about: "Tentang Kami"
      },
      hero: {
        title: "Mendukung Masa Depan dengan Microgrid Cerdas",
        subtitle: "EnovoGrid memberikan solusi energi yang andal, berkelanjutan, dan terencana untuk dunia yang terus berubah.",
        cta: "Dapatkan Proposal",
        learn_more: "Pelajari Lebih Lanjut"
      },
      footer: {
        rights: "© 2026 EnovoGrid Technology Co. Ltd. Hak cipta dilindungi undang-undang.",
        privacy: "Kebijakan Privasi",
        terms: "Ketentuan Layanan"
      },
      solutions: {
        rural: { title: "Elektrifikasi Pedesaan", desc: "Microgrid andal untuk komunitas terpencil." },
        weak_grid: { title: "Dukungan Grid Lemah", desc: "Menstabilkan grid dengan penetrasi energi terbarukan tinggi." },
        island: { title: "Resor Pulau", desc: "Energi bersih dan senyap untuk destinasi premium." },
        industrial: { title: "Industri & Pertambangan", desc: "Daya stabilitas tinggi untuk operasi kritis." },
        hydro_owner: { title: "Revitalisasi Hidro", desc: "Peningkatan aset untuk efisiensi modern." },
        finance: { title: "Keuangan Pembangunan", desc: "Pengiriman proyek yang dapat diaudit dan berkelanjutan." },
        epc: { title: "Kemitraan EPC", desc: "Mengurangi risiko pengiriman dengan kit standar." },
        emergency: { title: "Daya Darurat", desc: "Penyebaran cepat untuk bantuan bencana." }
      },
      technologies: {
        vsg: { title: "Generator Sinkron Virtual", desc: "Kontrol pembentukan grid untuk stabilitas." },
        hydro: { title: "Hidro Kecil", desc: "Beban dasar microgrid terbarukan." },
        pv: { title: "Sistem PV Surya", desc: "Pembangkitan energi yang hemat biaya." },
        bess: { title: "Penyimpanan Energi", desc: "Kualitas daya dan pergeseran waktu." },
        ems: { title: "Manajemen Energi", desc: "Pengiriman cerdas dan optimalisasi." },
        wind: { title: "Tenaga Angin", desc: "Pembangkitan komplementer untuk berbagai lokasi." },
        scada: { title: "Pemantauan Jarak Jauh", desc: "Manajemen armada berkemampuan IoT." }
      }
    }
  },
  ms: {
    translation: {
      nav: {
        home: "Laman Utama",
        solutions: "Penyelesaian",
        technologies: "Teknologi",
        cases: "Kajian Kes",
        resources: "Sumber",
        contact: "Hubungi",
        about: "Tentang Kami"
      },
      hero: {
        title: "Memperkasakan Masa Depan dengan Grid Mikro Pintar",
        subtitle: "EnovoGrid menyampaikan penyelesaian tenaga yang boleh dipercayai, mampan dan berteknologi untuk dunia yang berubah.",
        cta: "Dapatkan Cadangan",
        learn_more: "Ketahui Lebih Lanjut"
      },      footer: {
        rights: "© 2026 EnovoGrid Technology Co. Ltd. Hak cipta terpelihara.",
        privacy: "Dasar Privasi",
        terms: "Syarat Perkhidmatan"
      },
      solutions: {
        rural: { title: "Elektrifikasi Luar Bandar", desc: "Grid mikro yang boleh dipercayai untuk komuniti terpencil." },
        weak_grid: { title: "Sokongan Grid Lemah", desc: "Menstabilkan grid penembusan boleh diperbaharui tinggi." },
        island: { title: "Resort Pulau", desc: "Tenaga bersih dan senyap untuk destinasi premium." },
        industrial: { title: "Industri & Perlombongan", desc: "Kuasa kestabilan tinggi untuk operasi kritikal." },
        hydro_owner: { title: "Pemulihan Hidro", desc: "Menaik taraf aset untuk kecekapan moden." },
        finance: { title: "Kewangan Pembangunan", desc: "Penyampaian projek yang boleh diaudit dan mampan." },
        epc: { title: "Perkongsian EPC", desc: "Mengurangkan risiko penyampaian dengan kit standard." },
        emergency: { title: "Kuasa Kecemasan", desc: "Pengerahan pantas untuk bantuan bencana." }
      },
      technologies: {
        vsg: { title: "Penjana Segerak Maya", desc: "Kawalan pembentukan grid untuk kestabilan." },
        hydro: { title: "Hidro Kecil", desc: "Beban asas grid mikro boleh diperbaharui." },
        pv: { title: "Sistem PV Solar", desc: "Penjanaan tenaga yang kos efektif." },
        bess: { title: "Penyimpanan Tenaga", desc: "Kualiti kuasa dan peralihan masa." },
        ems: { title: "Pengurusan Tenaga", desc: "Penghantaran pintar dan pengoptimuman." },
        wind: { title: "Tenaga Angin", desc: "Penjanaan pelengkap untuk pelbagai tapak." },
        scada: { title: "Pemantauan Jarak Jauh", desc: "Pengurusan armada didayakan IoT." }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
