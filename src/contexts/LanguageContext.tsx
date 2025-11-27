'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation object
const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.available': 'Available for work',
    
    // Hero
    'hero.greeting': 'Hello! I am Muhammad Iqbal.',
    'hero.tagline1': 'I like to judge things by their "cover" — especially applications.',
    'hero.tagline2': "It's not about being shallow, but because a good appearance is the gateway to a good experience.",
    'hero.tagline3': 'In every project, I strive to bring together solid engineering and UI/UX details that make users comfortable.',
    'hero.role': "I'm a Software Engineer",
    'hero.current': "Currently, I'm a Software Engineer at",
    'hero.viewWork': 'View Work',
    'hero.letsTalk': "Let's talk",
    'hero.stats.years': 'Years crafting products',
    'hero.stats.projects': 'Products shipped',
    'hero.stats.clients': 'Happy collaborators',
    'hero.hello': 'Hello! 👋',
    
    // About
    'about.label': 'About',
    'about.subtitle': 'A self-taught software engineer with a UI/UX obsession.',
    'about.description1': "I'm a passionate software engineer with expertise in building modern web applications. With 2 years of industry experience, I've contributed to projects ranging from e-commerce platforms to enterprise solutions.",
    'about.description2': 'My technical journey began with a degree in Information Management, and since then I have developed a strong foundation in full-stack development, cloud computing, and software architecture.',
    'about.description3': 'Outside of building products, I enjoy collaborating with teams that value craft, accessibility, and measurable impact.',
    'about.workTogether': "Let's work together",
    'about.experience': 'Work Experience',
    'about.education': 'Education',
    'about.fact.degree': 'Associate Degree in Information Management',
    'about.fact.work': 'Currently at PT BANK CIMB Niaga',
    'about.fact.location': 'South Tangerang, Indonesia',
    'about.fact.learning': 'Always learning new technologies',
    'about.fact.passion': 'Passionate about problem solving',
    'about.fact.collaboration': 'Open to collaboration',
    
    // Projects
    'projects.title': 'Portfolio',
    'projects.subtitle': 'Selected builds & experiments.',
    'projects.description': 'From dashboards to mobile utilities, these are the projects where I blended engineering discipline with playful interfaces.',
    'projects.viewRepo': 'View repository',
    
    // Skills
    'skills.title': 'Toolbelt',
    'skills.subtitle': 'Stacks I reach for daily.',
    'skills.description': 'Every project needs its own flavour of tools. These are the ones that help me animate ideas quickly without compromising on craft.',
    
    // Certificates
    'certificates.label': 'Certificates',
    'certificates.subtitle': 'Learning never really stops.',
    'certificates.description': 'Highlights from my continuous learning journey. Each certificate strengthened my fundamentals and sharpened how I build products.',
    'certificates.verify': 'Verify credential',
    
    // Contact
    'contact.label': 'Contact',
    'contact.title': "Let's build joy together.",
    'contact.subtitle': "I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Have a project in mind? Let's connect via email or WhatsApp.",
    'contact.email': 'Email',
    'contact.phone': 'Contact Person',
    'contact.social': 'Social',
  },
  id: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.experience': 'Pengalaman',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',
    'nav.available': 'Tersedia untuk bekerja',
    
    // Hero
    'hero.greeting': 'Halo! Saya Muhammad Iqbal.',
    'hero.tagline1': 'Saya suka menilai sesuatu dari "sampulnya" — terutama aplikasi.',
    'hero.tagline2': 'Bukan karena dangkal, tapi karena tampilan yang baik adalah pintu masuk pengalaman yang baik.',
    'hero.tagline3': 'Di tiap proyek, saya berusaha menghadirkan perpaduan antara teknik yang solid dan detail UI/UX yang bikin nyaman.',
    'hero.role': 'Saya adalah Software Engineer',
    'hero.current': 'Saat ini, saya adalah Software Engineer di',
    'hero.viewWork': 'Lihat Karya',
    'hero.letsTalk': 'Mari berbicara',
    'hero.stats.years': 'Tahun membuat produk',
    'hero.stats.projects': 'Produk dikirim',
    'hero.stats.clients': 'Kolaborator puas',
    'hero.hello': 'Halo! 👋',
    
    // About
    'about.label': 'Tentang',
    'about.subtitle': 'Software Engineer otodidak dengan obsesi UI/UX.',
    'about.description1': 'Saya adalah software engineer yang bersemangat dengan keahlian dalam membangun aplikasi web modern. Dengan pengalaman industri 2 tahun, saya telah berkontribusi pada proyek mulai dari platform e-commerce hingga solusi enterprise.',
    'about.description2': 'Perjalanan teknis saya dimulai dengan gelar di Manajemen Informatika, dan sejak itu saya telah mengembangkan fondasi yang kuat dalam pengembangan full-stack, cloud computing, dan arsitektur perangkat lunak.',
    'about.description3': 'Di luar membangun produk, saya menikmati berkolaborasi dengan tim yang menghargai kualitas, aksesibilitas, dan dampak yang terukur.',
    'about.workTogether': 'Mari bekerja sama',
    'about.experience': 'Pengalaman Kerja',
    'about.education': 'Pendidikan',
    'about.fact.degree': 'Diploma Manajemen Informatika',
    'about.fact.work': 'Saat ini di PT BANK CIMB Niaga',
    'about.fact.location': 'Tangerang Selatan, Indonesia',
    'about.fact.learning': 'Selalu mempelajari teknologi baru',
    'about.fact.passion': 'Bersemangat dalam memecahkan masalah',
    'about.fact.collaboration': 'Terbuka untuk kolaborasi',
    
    // Projects
    'projects.title': 'Portofolio',
    'projects.subtitle': 'Build & eksperimen terpilih.',
    'projects.description': 'Dari dashboard hingga utilitas mobile, ini adalah proyek di mana saya menggabungkan disiplin rekayasa dengan antarmuka yang menyenangkan.',
    'projects.viewRepo': 'Lihat repository',
    
    // Skills
    'skills.title': 'Toolbelt',
    'skills.subtitle': 'Stack yang saya gunakan sehari-hari.',
    'skills.description': 'Setiap proyek membutuhkan rasa alatnya sendiri. Ini adalah alat yang membantu saya menghidupkan ide dengan cepat tanpa mengorbankan kualitas.',
    
    // Certificates
    'certificates.label': 'Sertifikat',
    'certificates.subtitle': 'Pembelajaran tidak pernah benar-benar berhenti.',
    'certificates.description': 'Sorotan dari perjalanan pembelajaran berkelanjutan saya. Setiap sertifikat memperkuat dasar saya dan mempertajam cara saya membangun produk.',
    'certificates.verify': 'Verifikasi kredensial',
    
    // Contact
    'contact.label': 'Kontak',
    'contact.title': 'Mari membangun kegembiraan bersama.',
    'contact.subtitle': 'Saya saat ini sedang mencari untuk bergabung dengan tim lintas fungsi yang menghargai peningkatan kehidupan orang melalui desain yang dapat diakses. Memiliki proyek dalam pikiran? Mari terhubung melalui email atau WhatsApp.',
    'contact.email': 'Email',
    'contact.phone': 'Kontak Person',
    'contact.social': 'Sosial',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

