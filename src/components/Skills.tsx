'use client'

import { motion } from 'framer-motion'

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
  return (
    <section id="skills" className="section-padding space-y-10">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">Toolbelt</p>
        <h2 className="heading mb-4">Stacks I reach for daily.</h2>
        <p className="mx-auto max-w-2xl text-base text-text-secondary">
          Every project needs its own flavour of tools. These are the ones that help me animate
          ideas quickly without compromising on craft.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glow-card flex flex-wrap items-center justify-center gap-6 p-8"
      >
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm text-white"
          >
            <span className="text-2xl">{skill.glyph}</span>
            <span className="text-text-secondary">{skill.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills