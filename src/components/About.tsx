'use client'

import { motion } from 'framer-motion'

interface QuickFact {
  icon: string
  text: string
}

interface Experience {
  company: string
  role: string
  timeframe: string
  location: string
  bullets: string[]
}

interface Education {
  school: string
  credential: string
  timeframe: string
  location: string
  notes?: string
}

const quickFacts: QuickFact[] = [
  { icon: '🎓', text: 'Associate Degree in Information Management' },
  { icon: '💼', text: 'Currently at PT BANK CIMB Niaga' },
  { icon: '📍', text: 'South Tangerang, Indonesia' },
  { icon: '🌱', text: 'Always learning new technologies' },
  { icon: '💡', text: 'Passionate about problem solving' },
  { icon: '🤝', text: 'Open to collaboration' },
]

const experiences: Experience[] = [
  {
    company: 'PT Solman Techno Asia (Adira Finance Project)',
    role: 'Fullstack Developer',
    timeframe: 'Apr 2025 – Present',
    location: 'Jakarta, Indonesia',
    bullets: [
      'Maintain QPC web and mobile applications across releases.',
      'Resolve bugs and production issues for QPC web/mobile.',
      'Maintain the Ad1Falcon application and related services.',
      'Upgrade QPC application versions to the latest stack.',
    ],
  },
  {
    company: 'PT Abadi Rajawali Semesta (CIMB Niaga Project)',
    role: 'Software Engineer',
    timeframe: 'Jan 2024 – Jan 2025',
    location: 'Jakarta, Indonesia',
    bullets: [
      'Built scripts to translate XML to enriched JSON payloads.',
      'Acted as QA for Strategy One, validating key user journeys.',
      'Created JavaScript utilities that integrate with Strategy One.',
      'Migrated legacy applications into the updated platform.',
      'Updated user data within Strategy One databases.',
      'Verified SIT and UAT flows end to end.',
    ],
  },
  {
    company: 'Troya Academic Platform',
    role: 'Mobile Engineer',
    timeframe: 'Jan 2023 – Jul 2023',
    location: 'Yogyakarta, Indonesia',
    bullets: [
      'Translated Figma designs into Flutter screens.',
      'Built a library application experience.',
      'Consumed REST APIs and integrated them within Flutter.',
      'Fixed inherited bugs from previous project cycles.',
    ],
  },
  {
    company: 'PT Teknologi Makmur Abadi',
    role: 'Frontend Developer',
    timeframe: 'Jul 2022 – Jan 2023',
    location: 'Jakarta, Indonesia',
    bullets: [
      'Integrated ELK visualisations into a custom dashboard with large datasets.',
      'Fixed bugs and refined an existing social media metrics viewer.',
      'Deployed nine frontend apps, each with dedicated static IPs.',
    ],
  },
  {
    company: 'Jogja Smart Service',
    role: 'Mobile Engineer',
    timeframe: 'Sep 2020 – Dec 2020',
    location: 'Yogyakarta, Indonesia',
    bullets: [
      'Converted Figma layouts into native Android (Java) screens.',
      'Implemented authentication powered by Firebase Authentication.',
    ],
  },
]

const education: Education[] = [
  {
    school: 'Fazztrack',
    credential: 'Bootcamp – MERN Stack',
    timeframe: 'Sep 2020 – Mar 2021',
    location: 'Remote',
    notes: 'Completed an intensive MERN stack bootcamp.',
  },
  {
    school: 'University of Amikom Yogyakarta',
    credential: 'Diploma in Informatics Management, GPA 3.63/4.00',
    timeframe: 'Sep 2018 – Jan 2021',
    location: 'Yogyakarta, Indonesia',
  },
]

const About: React.FC = () => {
  return (
    <section id="experience" className="section-padding space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-4 text-center"
      >
        <p className="text-sm uppercase tracking-[0.5em] text-text-secondary">About</p>
        <h2 className="heading mb-4">A self-taught software engineer with a UI/UX obsession.</h2>
        <p className="mx-auto max-w-2xl text-base text-text-secondary">
          I&apos;m a passionate software engineer with expertise in building modern web applications.
          With 2 years of industry experience, I&apos;ve contributed to projects ranging from
          e-commerce platforms to enterprise solutions.
        </p>
      </motion.div>

      <div className="grid gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(4,0,19,0.7)] md:grid-cols-2"
        >
          <div className="space-y-6">
            <p className="text-lg text-text-secondary">
              My technical journey began with a degree in Information Management, and since then I
              have developed a strong foundation in full-stack development, cloud computing, and
              software architecture.
            </p>
            <p className="text-lg text-text-secondary">
              Outside of building products, I enjoy collaborating with teams that value craft,
              accessibility, and measurable impact.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-sm font-semibold text-white hover:text-accent"
            >
              Let&apos;s work together
              <svg
                className="h-4 w-4"
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
          <div className="grid grid-cols-2 gap-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.text}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-text-secondary"
              >
                <span className="text-2xl">{fact.icon}</span>
                <p className="mt-3 text-base">{fact.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-white/40 to-transparent ml-6" />
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_15px_50px_rgba(4,0,19,0.6)]"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">
                    {experience.company}
                  </p>
                  <h4 className="text-xl font-semibold text-white">{experience.role}</h4>
                </div>
                <div className="text-sm text-text-secondary text-left md:text-right">
                  <p>{experience.timeframe}</p>
                  <p>{experience.location}</p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text-secondary">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-white">Education</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-white/40 to-transparent ml-6" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.school}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-text-secondary shadow-[0_10px_40px_rgba(4,0,19,0.6)]"
            >
              <p className="text-sm uppercase tracking-[0.4em]">{item.school}</p>
              <h4 className="mt-2 text-lg font-semibold text-white">{item.credential}</h4>
              <p className="text-sm">{item.timeframe}</p>
              <p className="text-sm">{item.location}</p>
              {item.notes && <p className="mt-2 text-sm">{item.notes}</p>}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About