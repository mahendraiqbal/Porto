'use client'

import { motion } from 'framer-motion'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/mahendra_iqbal24' },
]

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding space-y-10">
      <div className="divider-line" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center md:text-left"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">Contact</p>
        <h2 className="text-3xl font-semibold text-white">Let&apos;s build joy together.</h2>
        <p className="text-base text-text-secondary">
          I&apos;m currently looking to join a cross-functional team that values improving
          people&apos;s lives through accessible design. Have a project in mind? Let&apos;s connect via
          email or WhatsApp.
        </p>
      </motion.div>

      <div className="grid gap-6 text-center text-sm text-text-secondary md:grid-cols-3 md:text-left">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.4em]">Email</p>
          <a
            href="mailto:mahendraiqbal42@gmail.com"
            className="mt-2 block text-white transition hover:text-accent"
          >
            mahendraiqbal42@gmail.com
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.4em]">Contact Person</p>
          <a
            href="https://wa.me/6281215806730"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-white transition hover:text-accent"
          >
            0812 1580 6730
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.4em]">Social</p>
          <div className="mt-2 flex justify-center gap-4 md:justify-start">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-white transition hover:text-accent"
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
