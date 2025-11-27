'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/mahendra_iqbal24' },
]

const Contact: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section-padding space-y-6 sm:space-y-8 md:space-y-10">
      <div className="divider-line" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-3 sm:space-y-4 text-center md:text-left"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-text-secondary">{t('contact.label')}</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">{t('contact.title')}</h2>
        <p className="text-sm sm:text-base text-text-secondary">
          {t('contact.subtitle')}
        </p>
      </motion.div>

      <div className="grid gap-4 sm:gap-6 text-center text-sm text-text-secondary sm:grid-cols-2 md:grid-cols-3 md:text-left">
        <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">{t('contact.email')}</p>
          <a
            href="mailto:mahendraiqbal42@gmail.com"
            className="mt-2 block text-xs sm:text-sm text-white transition hover:text-accent break-all"
          >
            mahendraiqbal42@gmail.com
          </a>
        </div>
        <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">{t('contact.phone')}</p>
          <a
            href="https://wa.me/6281215806730"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-xs sm:text-sm text-white transition hover:text-accent"
          >
            0812 1580 6730
          </a>
        </div>
        <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2 md:col-span-1">
          <p className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">{t('contact.social')}</p>
          <div className="mt-2 flex justify-center gap-4 md:justify-start">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm text-white transition hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
