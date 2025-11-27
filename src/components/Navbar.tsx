'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2.5 sm:px-6 sm:py-3 backdrop-blur-lg"
      >
        <div className="text-base sm:text-lg font-semibold tracking-[0.3em] uppercase text-white">
          IM
        </div>

        <div className="hidden gap-4 lg:gap-6 text-sm md:flex">
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

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-white/5 px-1.5 sm:px-2 py-0.5 sm:py-1">
            <button
              onClick={() => setLanguage('id')}
              className={`rounded-full px-2 sm:px-3 py-1 text-xs font-medium transition-colors ${
                language === 'id'
                  ? 'bg-accent text-white'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`rounded-full px-2 sm:px-3 py-1 text-xs font-medium transition-colors ${
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
            className="hidden sm:inline-block pill text-xs sm:text-sm font-medium text-white px-3 sm:px-4 py-1.5 sm:py-2"
          >
            {t('nav.available')}
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-secondary transition-colors hover:text-white py-2"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <a
                href="mailto:mahendraiqbal42@gmail.com"
                className="pill text-sm font-medium text-white px-4 py-2 mt-2"
              >
                {t('nav.available')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

