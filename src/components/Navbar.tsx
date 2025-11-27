'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-lg"
    >
      <div className="text-lg font-semibold tracking-[0.3em] uppercase text-white">
        IM
      </div>

      <div className="hidden gap-6 text-sm md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-text-secondary transition-colors hover:text-white"
          >
            {t(`nav.${item.key}`)}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1">
          <button
            onClick={() => setLanguage('id')}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              language === 'id'
                ? 'bg-accent text-white'
                : 'text-text-secondary hover:text-white'
            }`}
          >
            ID
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              language === 'en'
                ? 'bg-accent text-white'
                : 'text-text-secondary hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
        <a
          href="mailto:mahendraiqbal42@gmail.com"
          className="pill text-sm font-medium text-white"
        >
          {t('nav.available')}
        </a>
      </div>
    </motion.nav>
  )
}

export default Navbar

