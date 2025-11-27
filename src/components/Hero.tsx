'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from './Navbar'

const heroStats = [
  { label: 'Years crafting products', value: '03+' },
  { label: 'Products shipped', value: '18' },
  { label: 'Happy collaborators', value: '12' },
]

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#070019] via-[#08001e] to-[#040013]"
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full blur-[120px] bg-[#7d3cff]" />
        <div className="absolute left-10 bottom-0 h-96 w-96 rounded-full blur-[160px] bg-[#3d8bff]" />
      </div>

      <div className="section-padding relative z-10 flex min-h-screen flex-col gap-16">
        <Navbar />

        <div className="grid gap-16 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-sm uppercase tracking-[0.4em] text-text-secondary"
            >
              Hello! I am Muhammad Iqbal
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl leading-tight md:text-6xl"
            >
              A software engineer who{' '}
              <span className="text-white">judges a book</span>
              <br />
              by its{' '}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent underline decoration-[#8b5cf6]">
                cover
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-lg text-text-secondary md:text-xl"
            >
              Because if the cover does not impress you, what else can? I craft delightful digital
              experiences that sit at the intersection of solid software engineering and my love for
              UI/UX details.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="space-y-4"
            >
              <p className="text-2xl font-medium text-white">
                I&apos;m a Software Engineer<span className="text-accent">.|</span>
              </p>
              <p className="text-sm text-text-secondary">
                Currently, I&apos;m a Software Engineer at{' '}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline decoration-dotted decoration-accent"
                >
                  Facebook
                </a>
                .
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] px-8 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(139,92,246,0.4)] transition hover:translate-y-0.5"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/50"
              >
                Let&apos;s talk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="grid gap-6 sm:grid-cols-3"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">
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
            className="relative flex items-center justify-center"
          >
            <div className="glow-card relative flex h-80 w-80 items-center justify-center rounded-[40px] border border-white/5 bg-gradient-to-b from-white/10 to-transparent p-6 text-center shadow-[0_30px_80px_rgba(5,0,20,0.9)]">
              <Image
                src="/profile.jpeg"
                alt="Iqbal avatar"
                width={260}
                height={260}
                className="rounded-[32px] border border-white/10 object-cover"
                priority
              />
              <div className="absolute -top-6 right-10 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                Hello! 👋
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero