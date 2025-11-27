'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const skills = [
  { label: 'Figma', glyph: '🎨' },
  { label: 'Laravel', glyph: '🐘' },
  { label: 'Next.js', glyph: '▲' },
  { label: 'React Native', glyph: '📱' },
  { label: 'Node.js', glyph: '🟢' },
  { label: 'TypeScript', glyph: 'TS' },
  { label: 'Flutter', glyph: '💠' },
  { label: 'Docker', glyph: '🐳' },
  { label: 'Java', glyph: '☕' },
  { label: 'Linux', glyph: '🐧' },
  { label: 'Windows', glyph: '🪟' },
]

const Skills: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section-padding space-y-6 sm:space-y-8 md:space-y-10">
      <div className="space-y-2 sm:space-y-3 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-text-secondary">{t('skills.title')}</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t('skills.subtitle')}</h2>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-text-secondary px-4">
          {t('skills.description')}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glow-card flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8"
      >
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-center text-xs sm:text-sm text-white"
          >
            <span className="text-xl sm:text-2xl">{skill.glyph}</span>
            <span className="text-text-secondary">{skill.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills