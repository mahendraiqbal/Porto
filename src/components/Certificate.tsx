'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const certificates = [
  {
    title: 'Belajar Dasar Pemrograman Javascript',
    issuer: 'Dicoding',
    date: '2024',
    credentialUrl:
      'https://www.dicoding.com/dicodingassets/coursecertificate/26d5971007cfa9da1ac815d0502ef8e3e96d435e/view',
    image: '/javascript.png',
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    date: '2024',
    credentialUrl:
      'https://www.dicoding.com/dicodingassets/coursecertificate/1b176dce72fd52d884fa4dcc1a6c3311b9cee422/view',
    image: '/web.png',
  },
]

const Certificates: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="certificates" className="section-padding space-y-8 sm:space-y-10 md:space-y-12">
      <div className="space-y-2 sm:space-y-3 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-text-secondary">{t('certificates.label')}</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t('certificates.subtitle')}</h2>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-text-secondary px-4">
          {t('certificates.description')}
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2">
        {certificates.map((certificate) => (
          <motion.div
            key={certificate.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 shadow-[0_25px_80px_rgba(4,0,19,0.8)]"
          >
            <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4">
              <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden rounded-lg sm:rounded-xl bg-black/20">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  sizes="(min-width: 768px) 40vw, 85vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-6 space-y-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{certificate.title}</h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                {certificate.issuer} • {certificate.date}
              </p>
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-accent"
              >
                {t('certificates.verify')}
                <svg
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14" strokeLinecap="round" />
                  <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
