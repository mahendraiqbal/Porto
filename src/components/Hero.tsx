'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from './Navbar'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero: React.FC = () => {
  const { t } = useLanguage()
  
  const heroStats = [
    { label: t('hero.stats.years'), value: '03+' },
    { label: t('hero.stats.projects'), value: '18' },
    { label: t('hero.stats.clients'), value: '12' },
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#070019] via-[#08001e] to-[#040013]"
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full blur-[120px] bg-[#7d3cff]" />
        <div className="absolute left-10 bottom-0 h-96 w-96 rounded-full blur-[160px] bg-[#3d8bff]" />
      </div>

      <div className="section-padding relative z-10 flex min-h-screen flex-col gap-8 sm:gap-12 md:gap-16">
        <Navbar />

        <div className="grid gap-8 sm:gap-12 md:gap-16 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-text-secondary block"
            >
              {t('hero.greeting')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              {t('hero.tagline1')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-text-secondary"
            >
              {t('hero.tagline2')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-text-secondary"
            >
              {t('hero.tagline3')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-xl sm:text-2xl font-medium text-white">
                {t('hero.role')}<span className="text-accent">.|</span>
              </p>
              <p className="text-xs sm:text-sm text-text-secondary">
                {t('hero.current')}{' '}
                <a
                  href="https://www.adira.co.id/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline decoration-dotted decoration-accent"
                >
                  Adira Finance
                </a>
                .
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_15px_40px_rgba(139,92,246,0.4)] transition hover:translate-y-0.5"
              >
                {t('hero.viewWork')}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:border-white/50"
              >
                {t('hero.letsTalk')}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-center"
                >
                  <p className="text-2xl sm:text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wide text-text-secondary mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative flex items-center justify-center order-1 md:order-2"
          >
            <div className="glow-card relative flex h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 items-center justify-center rounded-[32px] sm:rounded-[40px] border border-white/5 bg-gradient-to-b from-white/10 to-transparent p-4 sm:p-6 text-center shadow-[0_30px_80px_rgba(5,0,20,0.9)]">
              <Image
                src="/profile.jpeg"
                alt="Iqbal avatar"
                width={260}
                height={260}
                className="rounded-[24px] sm:rounded-[32px] border border-white/10 object-cover w-full h-full"
                priority
              />
              <div className="absolute -top-4 sm:-top-6 right-6 sm:right-10 rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white backdrop-blur">
                {t('hero.hello')}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero